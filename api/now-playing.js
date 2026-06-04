/**
 * Vercel Serverless Function: /api/now-playing
 *
 * Required Environment Variables (set in Vercel dashboard):
 *   SPOTIFY_CLIENT_ID
 *   SPOTIFY_CLIENT_SECRET
 *   SPOTIFY_REFRESH_TOKEN
 *
 * How to get these:
 *   1. Go to https://developer.spotify.com/dashboard and create an app.
 *   2. Set Redirect URI to https://accounts.spotify.com/authorize (or localhost for testing).
 *   3. Use the Authorization Code flow to get a code, then exchange for a refresh_token.
 *      A handy tool: https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID
 *        &response_type=code&redirect_uri=YOUR_REDIRECT_URI
 *        &scope=user-read-currently-playing%20user-read-recently-played
 *   4. Exchange the code for tokens via POST to https://accounts.spotify.com/api/token
 *      and save the refresh_token.
 */

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
}

export default async function handler(req, res) {
  // Allow CORS so your site can call this
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { access_token } = await getAccessToken();

    // Try currently playing first
    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (nowPlayingRes.status === 200) {
      const data = await nowPlayingRes.json();
      if (data && data.item) {
        return res.status(200).json({
          isPlaying: data.is_playing,
          title: data.item.name,
          artist: data.item.artists.map((a) => a.name).join(", "),
          album: data.item.album.name,
          albumImageUrl: data.item.album.images[0]?.url,
          songUrl: data.item.external_urls.spotify,
        });
      }
    }

    // Fall back to recently played
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const recentData = await recentRes.json();
    const track = recentData?.items?.[0]?.track;

    if (track) {
      return res.status(200).json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((a) => a.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
      });
    }

    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch Spotify data" });
  }
}
