export type IntegrationType = 'salesforce';

export type IntegrationStatus = 'active' | 'inactive' | 'error' | 'pending';

export interface IntegrationConfig {
  baseUrl: string;
}

export interface Integration {
  id: string;
  name: string;
  type: IntegrationType;
  config: IntegrationConfig;
  credentialId: string;
  status: IntegrationStatus;
  createdAt: string;
  updatedAt: string;
}
