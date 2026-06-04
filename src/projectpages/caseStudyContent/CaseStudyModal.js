import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const CaseStudyModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(28,25,23,0.55)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FAF8F5",
          width: "100%",
          maxWidth: "860px",
          height: "92vh",
          borderRadius: "20px 20px 0 0",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 -8px 40px rgba(28,25,23,0.18)",
          overflow: "hidden",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "16px 20px 12px",
            borderBottom: "1px solid rgba(28,25,23,0.08)",
            flexShrink: 0,
            background: "#FAF8F5",
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(28,25,23,0.07)",
              border: "none",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#1C1917",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(28,25,23,0.13)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(28,25,23,0.07)")}
          >
            <IoClose size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          style={{
            overflowY: "auto",
            flex: 1,
            padding: "0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
