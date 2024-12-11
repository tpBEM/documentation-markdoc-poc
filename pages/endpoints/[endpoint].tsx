import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { parseSwaggerFile } from '../../utils/swagger';
import { Parameter, Endpoint } from '../../components/SwaggerTags';
import ParametersTable from '../../components/ParametersTable';
import ResponseDetails from '../../components/ResponseDetails';

interface EndpointPageProps {
  content: any;
}

const EndpointPage: React.FC<EndpointPageProps> = ({ content }) => {
  if (!content) {
    return <div>Content not found</div>;
  }

  console.log('Content', content);
  console.log('Content Type', typeof content);

  const responses = content.children
    .filter((child: any) => child.type === 'response')
    .map((child: any) => ({
      code: child.attributes.code,
      description: child.attributes.description,
    }));

  return (
    <div>
      <h1>API Documentation</h1>
      <h2>Endpoint</h2>
      <Endpoint
        path={content.attributes.path}
        method={content.attributes.method}
        summary={content.attributes.summary}
        description={content.attributes.description}
      >
        {content.children && content.children.map((child: any) => {
          if (child.type === 'parameter') {
            return (
              <Parameter
                key={child.attributes.name}
                name={child.attributes.name}
                in={child.attributes.in}
                required={child.attributes.required}
                type={child.attributes.type}
              />
            );
          }
          return null;
        })}
      </Endpoint>
      <h2>Parameters</h2>
      <ParametersTable parameters={content.children.filter((child: any) => child.type === 'parameter').map((child: any) => child.attributes)} />
      <h2>Responses</h2>
      <ResponseDetails responses={responses} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const swaggerData = await parseSwaggerFile('utils/swagger.json');
  const paths = swaggerData?.paths ? Object.keys(swaggerData.paths).map((path) => ({
    params: { endpoint: path.replace(/\//g, '_') },
  })) : [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const swaggerData = await parseSwaggerFile('utils/swagger.json');
  const endpoint = (params?.endpoint as string).replace(/_/g, '/');
  const endpointData = swaggerData?.paths[endpoint];

  const content = endpointData ? {
    type: 'endpoint',
    attributes: {
      path: endpoint,
      method: 'get',
      summary: endpointData.get.summary,
      description: endpointData.get.description,
    },
    children: [
      ...(endpointData.get.parameters || []).map((param: any) => ({
        type: 'parameter',
        attributes: {
          name: param.name,
          in: param.in,
          required: param.required,
          type: param.type,
        },
      })),
      ...Object.entries(endpointData.get.responses || {}).map(([code, response]: [string, any]) => ({
        type: 'response',
        attributes: {
          code,
          description: response.description,
        },
      })),
    ],
  } : null;

  return {
    props: {
      content: JSON.parse(JSON.stringify(content)), // Ensure content is JSON serializable
    },
  };
};

export default EndpointPage;