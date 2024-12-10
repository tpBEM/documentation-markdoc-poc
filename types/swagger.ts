export interface SwaggerParameter {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
  }
  
  export interface SwaggerResponse {
    description: string;
    schema?: {
      $ref: string;
    };
  }
  
  export interface SwaggerPath {
    summary: string;
    description: string;
    operationId: string;
    consumes: string[];
    produces: string[];
    parameters: SwaggerParameter[];
    responses: {
      [status: string]: SwaggerResponse;
    };
  }
  
  export interface SwaggerPaths {
    [path: string]: {
      get: SwaggerPath;
    };
  }
  
  export interface SwaggerData {
    paths: SwaggerPaths;
  }