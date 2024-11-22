import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Wine from './Wine';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Wine title="This is a wine title" description="This wine is 0.75l " rating="4.8"/>
    <Wine title="This is another wine title" description="This wine is 5l " rating="1.3"/>
  </StrictMode>,
)
