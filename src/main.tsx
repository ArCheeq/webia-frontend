import { createRoot } from 'react-dom/client';

import { logger } from '@/lib';
import MantineProvider from '@/providers/mantine-provider';
import { ReactQueryProvider } from '@/providers/query-provider';
import Router from '@/router';

import '@/lib/dayjs';
import './endpoints.config';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@/assets/styles/base.css';

function bootstrap() {
    logger.init('APP');

    const rootContainer = document.getElementById('root');
    if (!rootContainer) throw new Error("Can't find root element");

    createRoot(rootContainer).render(
        <ReactQueryProvider>
            <MantineProvider>
                <Router />
            </MantineProvider>
        </ReactQueryProvider>,
    );

    logger.info('App started');
}

window.onload = bootstrap;
