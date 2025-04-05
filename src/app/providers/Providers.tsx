import { ErrorBoundary } from '~/components';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
    const { children } = props;

    return <ErrorBoundary fallback={() => <h1>Something went wrong</h1>}>{children}</ErrorBoundary>;
};
