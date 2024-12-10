import { Schema } from '@markdoc/markdoc';

export const customTags: Record<string, Schema> = {
  parameter: {
    render: 'Parameter',
    attributes: {
      name: { type: String, required: true },
      in: { type: String, required: true },
      required: { type: Boolean, required: true },
      type: { type: String, required: true },
    },
  },
  response: {
    render: 'Response',
    attributes: {
      code: { type: String, required: true },
      description: { type: String, required: true },
    },
  },
  endpoint: {
    render: 'Endpoint',
    attributes: {
      path: { type: String, required: true },
      method: { type: String, required: true },
      summary: { type: String, required: true },
      description: { type: String, required: true },
    },
  },
};