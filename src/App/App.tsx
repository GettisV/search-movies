import { Container } from 'widgets/Container';
import { Bounce, ToastContainer } from 'react-toastify';
import { StoreProvider } from './Providers/StoreProvider';
import { BrowserRouterApp } from './Providers/Router';

export default function App() {
    return (
        <Container>
            <StoreProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
                <BrowserRouterApp />
            </StoreProvider>
        </Container>
    );
}
