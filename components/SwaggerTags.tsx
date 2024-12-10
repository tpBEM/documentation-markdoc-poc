import React from 'react';

export const Parameter: React.FC<{ name: string; in: string; required: boolean; type: string }> = ({ name, in: location, required, type }) => {
  return (
    <li>
      <strong>{name}</strong> ({location}, {type}) {required ? '(required)' : ''}
    </li>
  );
};

export const Response: React.FC<{ code: string; description: string }> = ({ code, description }) => {
  return (
    <li>
      <strong>{code}</strong>: {description}
    </li>
  );
};

export const Endpoint: React.FC<{ path: string; method: string; summary: string; description: string; children: React.ReactNode }> = ({ path, method, summary, description, children }) => {
  return (
    <div>
      <h2>{path}</h2>
      <h3>{method.toUpperCase()}</h3>
      <p><strong>Summary:</strong> {summary}</p>
      <p><strong>Description:</strong> {description}</p>
      <ul>{children}</ul>
    </div>
  );
};