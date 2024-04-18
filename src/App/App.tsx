import { Container } from 'widgets/Container';
import { Suspense } from 'react';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage/LoaderPage';
import { RouterProviderApp } from './Providers/RouterProvider';
import { StoreProvider } from './Providers/StoreProvider';

export default function App() {
    return (
        <Container>
            <Suspense fallback={<LoaderPage />}>
                <StoreProvider>
                    <RouterProviderApp />
                </StoreProvider>
            </Suspense>
        </Container>
    );
}
