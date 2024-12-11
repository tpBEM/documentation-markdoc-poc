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
          border-collapse: collapse;
          margin: 20px 0;
        }
        .parameters-table th,
        .parameters-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .parameters-table th {
          background-color: #f2f2f2;
          text-align: left;
        }
        .parameters-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .parameters-table tr:hover {
          background-color: #ddd;
        }
      `}</style>
    </table>
  );
};

export default ParametersTable;