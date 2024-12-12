import React from 'react';

export const Parameter: React.FC<{ name: string; in: string; required: boolean; type: string }> = ({ name, in: location, required, type }) => {
  return (
    <li>
      <strong>{name}</strong> ({location}, {type}) {required ? '(required)' : ''}
    </li>
  );
};

export const Response: React.FC<{ code: string; description: string; example: string }> = ({ code, description, example }) => {
  return (
    <li>
      <strong>{code}</strong>: {description} <br />
      Example: <pre>{example}</pre>
    </li>
  );
};

export const Endpoint: React.FC<{ path: string; method: string; summary: string; description: string; children: React.ReactNode }> = ({ path, method, summary, description, children }) => {
  return (
    <div className="endpoint">
      <h2>{path}</h2>
      <h3><strong>Method:</strong> {method.toUpperCase()}</h3>
      <p><strong>Summary:</strong> {summary}</p>
      <p><strong>Description:</strong> {description}</p>
      <ul>{children}</ul>
      <style jsx>{`
        .endpoint {
          border: 1px solid #ddd;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .endpoint h2 {
          margin-top: 0;
          color: #333;
        }
        .endpoint h3 {
          margin: 10px 0;
          color: #555;
        }
        .endpoint p {
          margin: 5px 0;
          color: #666;
        }
        .endpoint ul {
          list-style-type: none;
          padding: 0;
        }
        .endpoint li {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};