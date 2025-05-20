"use client";
import "./styles/globals.css";
import React, { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark'); // or 'dark' as default

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container">
              <strong><a className="navbar-brand" href="/" style={{ color: 'lightgreen' }}>📒 MyBlog</a></strong>
              <div>
                <ul className="navbar-nav flex-row gap-3 align-items-center">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/create-post" style={{ color: "white" }}>Create Post</a>
                  </li>

                </ul>

              </div>
            </div>
          </nav>

        </header>
        <main style={{ padding: 20 }}>
          {children}
        </main>

      </body>
    </html>
  );
}
