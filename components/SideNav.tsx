import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      { href: '/docs', children: 'Docs' },
      { href: '/overview', children: 'Overview' },
      { href: '/styling', children: 'Trustpilot Styling' },
      { href: '/curl', children: 'Curl Snippet' },
    ],
  },
];

export function SideNav() {
  const router = useRouter();
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    async function fetchEndpoints() {
      try {
        const response = await fetch('/api/swagger');
        const swaggerData = await response.json();
        if (swaggerData && swaggerData.paths) {
          const endpointLinks = Object.keys(swaggerData.paths).map((endpoint) => ({
            href: `/endpoints/${endpoint.replace(/\//g, '_')}`,
            children: endpoint,
          }));
          setEndpoints(endpointLinks);
        }
      } catch (error) {
        console.error('Error fetching Swagger data:', error);
      }
    }
    fetchEndpoints();
  }, []);

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span className="title">{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link href={link.href} legacyBehavior>
                    <a>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div>
        <span className="title">Endpoints</span>
        <ul className="flex column">
          {endpoints.map((link) => {
            const active = router.pathname === link.href;
            return (
              <li key={link.href} className={active ? 'active' : ''}>
                <Link href={link.href} legacyBehavior>
                  <a>{link.children}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .sidenav {
          width: 250px;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          background-color: black;
          padding: 20px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }
        .title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #04da8d;
        }
        .flex {
          display: flex;
          flex-direction: column;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        a {
          text-decoration: none;
          color: white;
          padding: 10px;
          border-radius: 5px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        a:hover {
          background-color: #333;
        }
        .active a {
          background-color: #04da8d;
          color: black;
        }
      `}</style>
    </nav>
  );
}