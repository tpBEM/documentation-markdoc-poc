import React from 'react';

interface Parameter {
  name: string;
  in: string;
  required: boolean;
  type: string;
}

interface ParametersTableProps {
  parameters: Parameter[];
}

const ParametersTable: React.FC<ParametersTableProps> = ({ parameters }) => {
  return (
    <table className="parameters-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>In</th>
          <th>Required</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {parameters.map((param) => (
          <tr key={param.name}>
            <td>{param.name}</td>
            <td>{param.in}</td>
            <td>{param.required ? 'Yes' : 'No'}</td>
            <td>{param.type}</td>
          </tr>
        ))}
      </tbody>
      <style jsx>{`
        .parameters-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 20px 0;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
        }
        .parameters-table th,
        .parameters-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .parameters-table th {
          background-color: black;
          color: #04da8d;
          text-align: left;
        }
        .parameters-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .parameters-table tr:hover {
          background-color: #ddd;
        }
        .parameters-table th:first-child {
          border-top-left-radius: 8px;
        }
        .parameters-table th:last-child {
          border-top-right-radius: 8px;
        }
        .parameters-table td:first-child {
          border-bottom-left-radius: 8px;
        }
        .parameters-table td:last-child {
          border-bottom-right-radius: 8px;
        }
      `}</style>
    </table>
  );
};

export default ParametersTable;