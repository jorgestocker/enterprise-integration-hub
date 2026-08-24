import { describe, expect, it } from 'vitest';
import { IntegrationService } from '../../src/services/integration.js';

describe('IntegrationService', () => {
  describe('createIntegration', () => {
    it('creates a pending integration', () => {
      const service = new IntegrationService();

      const integration = service.createIntegration({
        name: 'Customer Salesforce',
        type: 'salesforce',
        config: {
          baseUrl: 'https://example.my.salesforce.com',
        },
        credentialId: 'cred_123',
      });

      expect(integration.id).toBeDefined();
      expect(integration.name).toBe('Customer Salesforce');
      expect(integration.type).toBe('salesforce');
      expect(integration.credentialId).toBe('cred_123');
      expect(integration.status).toBe('pending');
      expect(integration.createdAt).toBeDefined();
      expect(integration.updatedAt).toBeDefined();
      expect(integration.createdAt).toBe(integration.updatedAt);
    });

    it('generates a unique id for each integration', () => {
      const service = new IntegrationService();

      const first = service.createIntegration({
        name: 'First',
        type: 'salesforce',
        config: {
          baseUrl: 'https://first.example.com',
        },
        credentialId: 'cred_1',
      });

      const second = service.createIntegration({
        name: 'Second',
        type: 'salesforce',
        config: {
          baseUrl: 'https://second.example.com',
        },
        credentialId: 'cred_2',
      });

      expect(first.id).not.toBe(second.id);
    });
  });
});