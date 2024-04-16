import App from 'App/App';
import { createRoot } from 'react-dom/client';
import './App/styles/index.scss';

const node = document.getElementById('root');
const root = createRoot(node as HTMLElement);

root.render(<App />);
