export function swaggerToMarkdoc(path: string, method: string, details: any): any {
  const children: any[] = [];

  // Add parameters
  if (details.parameters) {
    for (const parameter of details.parameters) {
      children.push({
        type: 'parameter',
        attributes: {
          name: parameter.name,
          in: parameter.in,
          required: parameter.required,
          type: parameter.type,
        },
      });
    }
  }

  // Add responses
  if (details.responses) {
    for (const [code, response] of Object.entries(details.responses)) {
      children.push({
        type: 'response',
        attributes: {
          code,
          description: (response as { description: string }).description,
        },
      });
    }
  }

  return {
    type: 'endpoint',
    attributes: {
      path,
      method,
      summary: details.summary || 'No summary available.',
      description: details.description || 'No description available.',
    },
    children,
  };
}