import React, { useState } from 'react';

interface ResponseDetailsProps {
  responses: { code: string; description: string; example?: any }[];
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
                {response.example && (
                  <>
                    <p><strong>Response example:</strong></p>
                    <pre><code>{JSON.stringify(response.example, null, 2)}</code></pre>
                  </>
                )}
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
          background-color: black;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .toggle-button.active {
          background-color: #04da8d;
          color: black;
        }
        .toggle-button:hover {
          background-color: #333;
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