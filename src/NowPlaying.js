import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { primaryBlue, secondaryGold } from "./colors";

// ─── Animations ────────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { transform: scaleY(0.4); }
  50%       { transform: scaleY(1); }
`;

// ─── Styled Components ─────────────────────────────────────────────────────────

const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background: #FAF8F5;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1.5px 4px rgba(0,0,0,0.10);
  transition: box-shadow 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ href }) => (href ? "pointer" : "default")};

  &:hover {
    box-shadow: ${({ href }) =>
      href
        ? "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 8px rgba(0,0,0,0.15)"
        : "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1.5px 4px rgba(0,0,0,0.10)"};
  }
`;

const AlbumArt = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
`;

const AlbumArtPlaceholder = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background: #E8E4DF;
  flex-shrink: 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

const Label = styled.span`
  font-size: 10px;
  font-family: "Poppins-Regular";
  color: ${primaryBlue};
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const TrackName = styled.span`
  font-size: 13px;
  font-family: "Poppins-Bold";
  color: ${primaryBlue};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArtistName = styled.span`
  font-size: 12px;
  font-family: "Poppins-Regular";
  color: ${primaryBlue};
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

// Animated equalizer bars shown when actually playing
const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 16px;
`;

const Bar = styled.div`
  width: 3px;
  border-radius: 2px;
  background: #1DB954;
  animation: ${pulse} ${({ delay }) => delay}s ease-in-out infinite;
  animation-delay: ${({ offset }) => offset}s;
  height: 100%;
`;

// Spotify logo mark (SVG)
const SpotifyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1DB954" />
    <path
      d="M17.25 16.27a.75.75 0 0 1-1.03.24c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 0 1-.34-1.46c4.57-1.04 8.49-.59 11.65 1.34a.75.75 0 0 1 .27 1.04zm1.46-3.24a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 0 1-.55-1.79c4.36-1.32 9.77-.68 13.5 1.59a.94.94 0 0 1 .31 1.29zm.13-3.37C15.27 7.29 9.2 7.1 5.6 8.19a1.12 1.12 0 0 1-.67-2.14c4.17-1.3 11.1-1.05 15.48 1.6a1.12 1.12 0 0 1-1.12 1.95l-.4-.24z"
      fill="white"
    />
  </svg>
);

// ─── Component ─────────────────────────────────────────────────────────────────

/**
 * NowPlaying
 *
 * Fetches from the /api/now-playing serverless endpoint (Vercel).
 * Falls back gracefully if the API is unavailable (e.g. local dev or GitHub Pages only).
 *
 * Set REACT_APP_NOW_PLAYING_URL to override the API endpoint, e.g.:
 *   REACT_APP_NOW_PLAYING_URL=https://your-vercel-app.vercel.app/api/now-playing
 */
const API_URL =
  process.env.REACT_APP_NOW_PLAYING_URL || "/api/now-playing";

const NowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchTrack = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok || res.status === 204) {
          if (!cancelled) setLoading(false);
          return;
        }
        const data = await res.json();
        if (!cancelled) {
          setTrack(data);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    };

    fetchTrack();
    // Refresh every 30 seconds
    const interval = setInterval(fetchTrack, 30000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (loading || !track) return null;

  return (
    <Container
      href={track.songUrl || undefined}
      target={track.songUrl ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {track.albumImageUrl ? (
        <AlbumArt src={track.albumImageUrl} alt={track.album} />
      ) : (
        <AlbumArtPlaceholder />
      )}

      <TextGroup>
        <Label>
          {track.isPlaying ? "🎵 now playing" : "🎵 recently played"}
        </Label>
        <TrackName>{track.title}</TrackName>
        <ArtistName>{track.artist}</ArtistName>
      </TextGroup>

      <Right>
        {track.isPlaying && (
          <Bars aria-hidden="true">
            <Bar delay={0.8} offset={0} />
            <Bar delay={1.0} offset={0.15} />
            <Bar delay={0.6} offset={0.3} />
            <Bar delay={1.2} offset={0.1} />
          </Bars>
        )}
        <SpotifyIcon />
      </Right>
    </Container>
  );
};

export default NowPlaying;
