import { ChakraProvider } from '@chakra-ui/react';

import { ErrorBoundary } from '~/components';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
    const { children } = props;

    return (
        <ErrorBoundary fallback={() => <h1>Something went wrong</h1>}>
            <ChakraProvider>{children}</ChakraProvider>
        </ErrorBoundary>
    );
};
