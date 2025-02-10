import React from 'react';

export default function Footer(props) {
  return (
    <footer className={`py-3 mt-4 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container text-center">
        <p className="mb-0">© 2024 TextUtils. All rights reserved.</p>
      </div>
    </footer>
  );
}