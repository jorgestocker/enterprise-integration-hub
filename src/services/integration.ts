import type {
  Integration,
  IntegrationConfig,
  IntegrationType,
} from '../domain/integration.js';

export interface CreateIntegrationInput {
  name: string;
  type: IntegrationType;
  config: IntegrationConfig;
  credentialId: string;
}

export class IntegrationService {
  createIntegration(input: CreateIntegrationInput): Integration {
    const now = new Date().toISOString();

    return {
      id: crypto.randomUUID(),
      name: input.name,
      type: input.type,
      config: input.config,
      credentialId: input.credentialId,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };
  }
}