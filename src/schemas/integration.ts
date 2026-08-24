export const createIntegrationSchema = {
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'type', 'config', 'credentialId'],
    properties: {
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['salesforce'],
      },
      config: {
        type: 'object',
        additionalProperties: false,
        required: ['baseUrl'],
        properties: {
          baseUrl: {
            type: 'string',
          },
        },
      },
      credentialId: {
        type: 'string',
      },
    },
  },
} as const;