import { Container } from 'widgets/Container/ui/Container';
import { Suspense } from 'react';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage/LoaderPage';
import { RouterProviderApp } from './Providers';
import { StoreProvider } from './Providers/StoreProvider/ui/StoreProvider';

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
