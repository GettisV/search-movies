import { Container } from 'widgets/Container';
import { StoreProvider } from './Providers/StoreProvider';
import { BrowserRouterApp } from './Providers/Router';

export default function App() {
    return (
        <Container>
            <StoreProvider>
                <BrowserRouterApp />
            </StoreProvider>
        </Container>
    );
}
