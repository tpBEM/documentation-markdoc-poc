import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [{ href: '/docs', children: 'Docs' }, { href: '/overview', children: 'Overview' }],
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
          <span>{item.title}</span>
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
        <span>Endpoints</span>
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
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li :global(a) {
            text-decoration: none;
          }
          li :global(a:hover),
          li.active :global(a) {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}