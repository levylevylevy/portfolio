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

const lofiLabels = [
  "Signup / Login",
  "Onboard",
  "User Dashboard",
  "Ride Mode",
  "Charging Station Map",
  "Payment",
  "Profile",
];

const lofiImages = [
  require("../../../src/images/tilitiloginflow.png"),
  require("../../../src/images/tilitionboardflow.png"),
  require("../../../src/images/tilitidashboardflow.png"),
  require("../../../src/images/tilitiridemode.png"),
  require("../../../src/images/tilitimapmode.png"),
  require("../../../src/images/tilitiinsights.png"),
  require("../../../src/images/tilitiprofile.png"),
];

const brandImages = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) =>
  require(`../../../src/images/tiliti-brand-${n}.png`)
);

const personaImages = [
  require("../../../src/images/UX Persona.png"),
  require("../../../src/images/UX Persona-2.png"),
  require("../../../src/images/UX Persona-3.png"),
];

function TilitiCaseStudy() {
  return (
    <div style={{ background: "#F5F2EE", minHeight: "100%", fontFamily: "inherit" }}>
      {/* Hero */}
      <div
        style={{
          background: "#1D2B3C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 32px 40px",
          gap: 24,
          textAlign: "center",
        }}
      >
        <img
          src={require("../../../src/images/tilitilogo2.png")}
          alt="Tiliti logo"
          style={{ width: 160, objectFit: "contain" }}
        />
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.88)",
            maxWidth: 520,
            lineHeight: 1.6,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          A new connected product allowing small business owners in India to transport their goods affordably and sustainably
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
          {["UI/UX Design", "Brand Design", "Figma"].map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 100,
                padding: "4px 14px",
                fontSize: 12,
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <img
          src={require("../../../src/images/tilitihomepagebetterquality.png")}
          alt="Tiliti app"
          style={{
            width: "min(220px, 55%)",
            borderRadius: 16,
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            marginTop: 8,
          }}
        />
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
            { label: "Role", value: "UI/UX Designer" },
            { label: "Timeline", value: "Jan – May 2021" },
            { label: "Tools", value: "Figma · Illustrator · After Effects" },
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

        {/* Problem */}
        <div style={sectionCard}>
          <div style={sectionLabel}>The Problem</div>
          <p style={bodyText}>
            Small business owners in India struggle to transport large quantities of goods — scooters and motorcycles lack cargo capacity and aren't sustainable. Tiliti's electric cargo bike and charging network solves this, and needed a mobile app to bring it all together.
          </p>
        </div>

        {/* Personas */}
        <div style={sectionCard}>
          <div style={sectionLabel}>User Personas</div>
          <h2 style={h2Style}>Understanding the rider</h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            Through client workshops, we defined our primary user as the bike owner — a small business owner managing deliveries, payments, and bike maintenance.
          </p>
          <Carousel>
            {personaImages.map((src, i) => (
              <CarouselItem key={i}>
                <img src={src} alt={`Persona ${i + 1}`} style={{ width: "100%", borderRadius: 10 }} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        {/* Flow Diagram */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Flow Diagram</div>
          <h2 style={h2Style}>Mapping the full experience</h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            A comprehensive workflow diagram aligned our design decisions and served as the engineering reference throughout development.
          </p>
          <img
            src={require("../../../src/images/Persist Energy Workflow.png")}
            alt="Workflow diagram"
            style={{ width: "100%", borderRadius: 10 }}
          />
        </div>

        {/* Lo-fi */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Lo-Fi Flows</div>
          <h2 style={h2Style}>Sketching the interactions</h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            We iterated through low-fidelity wireframes for each of the 7 core flows before moving to high fidelity.
          </p>
          <Carousel>
            {lofiImages.map((src, i) => (
              <CarouselItem key={i}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: accent,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    {lofiLabels[i]}
                  </div>
                  <img
                    src={src}
                    alt={lofiLabels[i]}
                    style={{ width: "100%", maxHeight: 280, objectFit: "contain", borderRadius: 8 }}
                  />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        {/* Brand */}
        <div style={sectionCard}>
          <div style={sectionLabel}>Brand</div>
          <h2 style={h2Style}>Dark mode · neon accents</h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            Aligned with the bike's dark aesthetic, we built a brand book using deep navy backgrounds and vibrant neon components — structured entirely from Figma components for fast, consistent iteration.
          </p>
          <Carousel>
            {brandImages.map((src, i) => (
              <CarouselItem key={i}>
                <img src={src} alt={`Brand ${i + 1}`} style={{ width: "100%", borderRadius: 10 }} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        {/* Hi-fi */}
        <div style={{ ...sectionCard, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ width: "100%" }}>
            <div style={sectionLabel}>Hi-Fidelity Design</div>
            <h2 style={h2Style}>7 flows, fully branded</h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              The final design covers sign-in, onboarding, dashboard, charging station map, bike maintenance, payment, and profile — complete with 2FA, interactive tutorials, and real-time bike stats.
            </p>
          </div>
          <video
            controls
            autoPlay
            playsInline
            muted
            style={{
              width: "min(260px, 70%)",
              borderRadius: 20,
              background: "#1D2B3C",
              boxShadow: "0 8px 32px rgba(28,25,23,0.18)",
            }}
          >
            <source src={require("../../../src/videos/sadie_levy_tiliti_final-figma.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default TilitiCaseStudy;
