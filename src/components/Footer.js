import React from "react";

export default function Footer({ mode = "light" }) {
  return (
    <footer className={`py-3 mt-4 ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className={`container text-center ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <p className="mb-0">© 2024 TextUtils. All rights reserved.</p>
      </div>
    </footer>
  );
}
