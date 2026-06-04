import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  primaryBlue,
  secondaryGold,
  backgroundColorMain,
  unselectedBlue,
} from "../../colors.js";

const navItems = [
  { label: "Hackathons", to: "/portfolio/projects/hackathons/hackmit" },
  { label: "Generate Product Development Studio", to: "/portfolio/projects/workexperience/generate" },
  { label: "Games", to: "/portfolio/projects/makerprojects/games" },
  { label: "ATEM", to: "/portfolio/projects/workexperience/atem" },
];

/* ── Layout shell ── */
const Shell = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 90px);
  padding-bottom: 90px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ── Sidebar ── */
const Sidebar = styled.nav`
  width: 220px;
  flex-shrink: 0;
  border-right: 1px solid rgba(28, 25, 23, 0.10);
  background-color: ${backgroundColorMain};
  padding: 32px 12px 32px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: sticky;
  top: 0;
  height: calc(100vh - 90px);
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    border-right: none;
    border-bottom: 1px solid rgba(28, 25, 23, 0.10);
    padding: 16px 12px;
    position: static;
    gap: 6px;
  }
`;

const SidebarLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${unselectedBlue};
  padding: 0 12px;
  margin: 0 0 8px 0;
  font-family: "Inter", sans-serif, sans-serif;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13.5px;
  font-family: "Inter", sans-serif, sans-serif;
  color: ${unselectedBlue};
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
  line-height: 1.4;

  &:hover {
    background-color: rgba(28, 25, 23, 0.06);
    color: ${primaryBlue};
  }

  &.active {
    background-color: ${primaryBlue};
    color: ${backgroundColorMain};
    font-family: "Inter", sans-serif, sans-serif;
  }
`;

/* ── Main content area ── */
const Content = styled.main`
  flex: 1;
  padding: 32px 48px;
  overflow-y: auto;
  text-align: justify;

  @media (max-width: 968px) {
    padding: 24px 28px;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export default function ProjectLayout({ children, activeRoute }) {
  return (
    <Shell>
      <Sidebar>
        <SidebarLabel>Projects</SidebarLabel>
        {navItems.map((item) => (
          <SidebarItem
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </SidebarItem>
        ))}
      </Sidebar>
      <Content>{children}</Content>
    </Shell>
  );
}
