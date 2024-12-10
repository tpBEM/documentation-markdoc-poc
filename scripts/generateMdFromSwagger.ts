import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import { SwaggerData, SwaggerPath } from '../types/swagger';

async function generateMarkdownFromSwagger() {
  const swaggerFilePath = path.join(process.cwd(), 'utils', 'swagger.json');
  const outputDir = path.join(process.cwd(), 'docs', 'endpoints');

  try {
    const swaggerData = (await SwaggerParser.parse(swaggerFilePath)) as SwaggerData;

    if (!swaggerData || !swaggerData.paths) {
      throw new Error('Invalid Swagger data');
    }

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate a Markdown file for each endpoint
    for (const [endpoint, data] of Object.entries(swaggerData.paths)) {
      const fileName = `${endpoint.replace(/\//g, '_')}.md`;
      const filePath = path.join(outputDir, fileName);

      const markdownContent = `
## ${endpoint}

### Summary
${data.get.summary}

### Description
${data.get.description}

### Parameters
${data.get.parameters.map((param) => `- **${param.name}** (${param.in}): ${param.description}`).join('\n')}

### Responses
${Object.entries(data.get.responses).map(([status, response]) => `- **${status}**: ${response.description}`).join('\n')}
      `;

      fs.writeFileSync(filePath, markdownContent.trim(), 'utf8');
    }

    console.log('Markdown files generated successfully');
  } catch (error) {
    console.error('Error generating Markdown files:', error);
  }
}

generateMarkdownFromSwagger();