import type {
  IntegrationStatus,
  IntegrationType,
} from '../domain/integration.js';

export interface CreateIntegrationRequest {
  name: string;
  type: IntegrationType;
  config: {
    baseUrl: string;
  };
  credentialId: string;
}

export interface CreateIntegrationResponse {
  id: string;
  status: IntegrationStatus;
}