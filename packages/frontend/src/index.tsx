import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from '~/App.tsx';
import { globalStyles } from '~/shared/styles/global';
import { theme } from '~/shared/styles/theme';
import posthog from 'posthog-js';

posthog.init('phc_h7Rh8cSi50a73hWLdLuHkXY5v2qh1qtTMAVogTCa6TB', {
  api_host: 'https://app.posthog.com',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>,
  // </React.StrictMode>,
);
