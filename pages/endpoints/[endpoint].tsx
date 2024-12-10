import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Markdoc from '@markdoc/markdoc';
import { swaggerToMarkdoc } from '../../utils/swagger-to-markdoc';
import { parseSwaggerFile } from '../../utils/swagger';
import { SwaggerData } from '../../types/swagger';
import * as customTags from '../../markdoc/tags';
import { Parameter, Response, Endpoint } from '../../components/SwaggerTags';

interface EndpointPageProps {
  content: any;
}

const EndpointPage: React.FC<EndpointPageProps> = ({ content }) => {
  // Transform the JSON-serializable objects back into Markdoc nodes
  const transformedContent = Markdoc.transform(content, { tags: customTags.customTags });

  const renderedContent = Markdoc.renderers.react(transformedContent, React, {
    components: {
      Parameter,
      Response,
      Endpoint,
    },
  });

  return (
    <div>
      <h1>API Documentation</h1>
      {renderedContent}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const swaggerData = await parseSwaggerFile('utils/swagger.json');
  const paths = swaggerData?.paths
  ? Object.keys(swaggerData.paths).map((path) => ({
      params: { endpoint: path.replace(/\//g, '_') },
    }))
  : [];
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const swaggerData = await parseSwaggerFile('utils/swagger.json');
  const endpoint = (params?.endpoint as string).replace(/_/g, '/');
  const endpointData = swaggerData?.paths[endpoint];
  if (!endpointData) {
    return {
      notFound: true, // Return a 404 if endpoint data is missing
    };
  }

  const content = endpointData ? swaggerToMarkdoc(endpoint, 'get', endpointData.get) : null;

  return {
    props: {
      content,
    },
  };
};

export default EndpointPage;