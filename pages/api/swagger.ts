import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const swaggerFilePath = path.join(process.cwd(), 'utils', 'swagger.json');

  try {
    const swaggerData = await SwaggerParser.parse(swaggerFilePath);
    res.status(200).json(swaggerData);
  } catch (error) {
    console.error('Error parsing Swagger file:', error);
    res.status(500).json({ error: 'Error parsing Swagger file' });
  }
}