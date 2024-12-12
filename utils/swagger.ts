import SwaggerParser from '@apidevtools/swagger-parser';

export async function parseSwaggerFile(filePath: string) {
  try {
    const api = await SwaggerParser.parse(filePath);
    return api;
  } catch (error) {
    console.error('Error parsing Swagger file:', error);
    return null;
  }
}