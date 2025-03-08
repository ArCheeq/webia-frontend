import { PropsWithChildren } from 'react';
import { createTheme, MantineProvider as MantineLibProvider, MantineProviderProps } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';

const theme = createTheme({
    fontFamily: 'Inter, sans-serif',
    headings: {
        fontFamily: 'Inter, sans-serif',
    },
    primaryColor: 'blue',
    primaryShade: 5,
});

const ProviderOptions: MantineProviderProps = {
    theme,
    defaultColorScheme: 'light',
    withCssVariables: true,
};

export default function MantineProvider({ children }: PropsWithChildren) {
    return (
        <MantineLibProvider {...ProviderOptions}>
            <DatesProvider settings={{ timezone: 'UTC' }}>{children}</DatesProvider>
        </MantineLibProvider>
    );
}
