import React, { useState } from 'react';

interface ResponseDetailsProps {
  responses: { code: string; description: string }[];
}

const ResponseDetails: React.FC<ResponseDetailsProps> = ({ responses }) => {
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const handleButtonClick = (code: string) => {
    setSelectedResponse(code);
  };

  return (
    <div className="response-details">
      <div className="buttons">
        {responses.map((response) => (
          <button
            key={response.code}
            onClick={() => handleButtonClick(response.code)}
            className={`toggle-button ${selectedResponse === response.code ? 'active' : ''}`}
          >
            {response.code}
          </button>
        ))}
      </div>
      {selectedResponse && (
        <div className="details">
          {responses
            .filter((response) => response.code === selectedResponse)
            .map((response) => (
              <div key={response.code}>
                <p><strong>Code:</strong> {response.code}</p>
                <p><strong>Description:</strong> {response.description}</p>
              </div>
            ))}
        </div>
      )}
      <style jsx>{`
        .response-details {
          margin: 10px 0;
        }
        .buttons {
          display: flex;
          gap: 10px;
        }
        .toggle-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        .toggle-button.active {
          background-color: #28a745;
        }
        .toggle-button:hover {
          background-color: #005bb5;
        }
        .details {
          margin-top: 10px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default ResponseDetails;