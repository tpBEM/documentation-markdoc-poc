import React from 'react';
import Link from 'next/link';

export function TopNav({ children }) {
  return (
    <nav>
      <img src='/images/tp_logo.png' alt='Trustpilot logo' />
      <section>{children}</section>
      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 2rem;
            background: #000000;
            border-bottom: 1px solid var(--border-color);
          }
          nav :global(a) {
            text-decoration: none;
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
          img {
            max-width: 100px;
            height: auto;
          }
        `}
      </style>
    </nav>
  );
}
