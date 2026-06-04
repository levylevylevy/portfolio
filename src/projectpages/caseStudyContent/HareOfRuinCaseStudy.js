import React from "react";
import Carousel, { CarouselItem } from "./Carousel";

const accent = "#C2714F";
const dark = "#1C1917";
const card = "#FFFFFF";

const sectionCard = {
  background: card,
  borderRadius: 16,
  padding: "28px 32px",
  boxShadow: "0 1px 4px rgba(28,25,23,0.08)",
  border: "1px solid rgba(28,25,23,0.07)",
};

const sectionLabel = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
  color: accent,
  marginBottom: 10,
};

const h2Style = {
  fontSize: 22,
  fontWeight: 700,
  color: dark,
  margin: "0 0 12px",
  lineHeight: 1.25,
};

const bodyText = {
  fontSize: 15,
  color: "#3D3530",
  lineHeight: 1.75,
  margin: 0,
};

const levelImages = [
  { src: require("../../../src/images/level 1 env.png"), label: "Level 1" },
  { src: require("../../../src/images/level 2 env.png"), label: "Level 2" },
  { src: require("../../../src/images/level 3 env.png"), label: "Level 3" },
];

function HareOfRuinCaseStudy() {
  return (
    <div style={{ background: "#F5F2EE", minHeight: "100%", fontFamily: "inherit" }}>
      {/* Hero */}
      <div style={{ position: "relative", background: "#0d1b0f", overflow: "hidden" }}>
        <img
          src={require("../../../src/images/hareofruinstartscreen.jpg")}
          alt="Hare of Ruin start screen"
          style={{ width: "100%", maxHeight: 340, objectFit: "cover", objectPosition: "center top", opacity: 0.7, display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 24px 36px",
            textAlign: "center",
            background: "linear-gradient(to bottom, transparent 30%, rgba(13,27,15,0.85) 100%)",
          }}
        >
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
            Hare of Ruin
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", margin: "0 0 16px", maxWidth: 460, lineHeight: 1.5, fontStyle: "italic" }}>
            A 3D action-RPG where an apprentice rabbit battles to save his mentor from an ancient evil
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
            {["Game Dev", "Unity · C#", "UI Design"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 100,
                  padding: "4px 14px",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://github.com/aidancapaldi/HareOfRuinPrototype"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 13,
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              GitHub ↗
            </a>
            <a
              href="https://play.unity.com/mg/other/webgl-builds-336086"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 13,
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Play Game ↗
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          padding: "36px 24px 60px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Meta strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            { label: "Role", value: "Developer · Designer · Writer" },
            { label: "Timeline", value: "Jan – May 2023" },
            { label: "Tools", value: "Unity · C# · Photoshop · GitHub" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{ background: card, borderRadius: 12, padding: "16px 18px", border: "1px solid rgba(28,25,23,0.07)" }}
            >
              <div style={sectionLabel}>{label}</div>
              <div style={{ fontSize: 14, color: dark, fontWeight: 600 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Overview</div>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            Collaboratively developed a 1-player 3D action-RPG in a team of four, pair programming weekly and managing releases through GitHub. Planned sprints, assigned tasks, and resolved merge conflicts as a team.
          </p>
          <p style={bodyText}>
            Independently designed all 2D UI assets and the splash screen in Photoshop/Illustrator, wrote all character dialogue and cut-scenes, and co-designed level layouts. Delivered Alpha, Beta, and Gold Master releases, conducted playtests, and iterated on user feedback.
          </p>
        </div>

        {/* Game Description */}
        <div style={sectionCard}>
          <div style={sectionLabel}>The Story</div>
          <h2 style={h2Style}>Glory awaits…</h2>
          <p style={bodyText}>
            Apprentice Harry Rabbit is on a quest to save his mentor High Wizard Pandamaus from the clutches of the evil Vulpes Rebane. Each level presents new enemies to defeat with powerful spells — but beware: let your carrot health-meter hit zero and it's game over.
          </p>
        </div>

        {/* Demo */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Game Demo</div>
          <h2 style={h2Style}>See it in action</h2>
          <p style={{ ...bodyText, marginBottom: 16 }}>
            Full playthrough demo video — skip to <strong>3:35</strong> for the game trailer.
          </p>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "#000" }}>
            <video
              controls
              style={{ width: "100%", display: "block", borderRadius: 12 }}
            >
              <source src={require("../../../src/videos/HareOfRuinFinalDemo.mp4")} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Level Layouts */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Level Layouts</div>
          <h2 style={h2Style}>Three worlds, three challenges</h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            Each level was co-designed with increasing difficulty, distinct environments, and new enemy types.
          </p>
          <Carousel>
            {levelImages.map(({ src, label }) => (
              <CarouselItem key={label}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                    {label}
                  </div>
                  <img src={src} alt={label} style={{ width: "100%", borderRadius: 10, objectFit: "cover" }} />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        {/* Gold Master GDD */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Gold Master Release</div>
          <h2 style={h2Style}>Game Design Document</h2>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(28,25,23,0.08)", marginTop: 8 }}>
            <iframe
              src="https://drive.google.com/file/d/1fRuPL6Igf4GNArAYSFg3PemJjivTo67H/preview"
              style={{ width: "100%", height: 480, border: "none", display: "block" }}
              allow="autoplay"
              title="Hare of Ruin Gold Master GDD"
            />
          </div>
        </div>

        {/* Beta GDD */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Beta Release</div>
          <h2 style={h2Style}>GDD & Playtesting Notes</h2>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(28,25,23,0.08)", marginTop: 8 }}>
            <iframe
              src="https://drive.google.com/file/d/11FXUwsawdpgDTGBiVMo96Q6ZCyngiR1z/preview"
              style={{ width: "100%", height: 480, border: "none", display: "block" }}
              allow="autoplay"
              title="Hare of Ruin Beta GDD"
            />
          </div>
        </div>

        {/* Prototype */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Initial Prototype</div>
          <h2 style={h2Style}>GDD Pitch Documents</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
            {[
              { src: "https://drive.google.com/file/d/1Hsi0Dao9C98S2pHTNyPNZSVpmjyXnxEE/preview", title: "Hare of Ruin Level Design 1" },
              { src: "https://drive.google.com/file/d/1jE7l7k_QHYlE2oahCNRPMrQ14ijueKrv/preview", title: "Hare of Ruin Level Design 2" },
            ].map(({ src, title }) => (
              <div key={title} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(28,25,23,0.08)" }}>
                <iframe
                  src={src}
                  style={{ width: "100%", height: 480, border: "none", display: "block" }}
                  allow="autoplay"
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HareOfRuinCaseStudy;
