import { merge } from 'es-toolkit';

import { APP_ENV, ENV_TYPES } from './env';

// Define the configuration for each environment
const DEV_CONFIG = {
    servers: {
        api: 'https://example.com/api/',
    },
    auth_key: 'auth_key',
};

const STAGING_CONFIG = merge(DEV_CONFIG, {});
const PROD_CONFIG = merge(DEV_CONFIG, {});

const ENV_CONFIGS: Record<ENV_TYPES, typeof DEV_CONFIG> = {
    [ENV_TYPES.development]: DEV_CONFIG,
    [ENV_TYPES.staging]: STAGING_CONFIG,
    [ENV_TYPES.production]: PROD_CONFIG,
};

export const CONFIG = ENV_CONFIGS[APP_ENV];
