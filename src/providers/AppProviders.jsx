import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { theme } from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyles';

const queryClient = new QueryClient();

export const AppProviders = ({ children }) => 
    <Router>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {children}
                </ThemeProvider>
            </Provider>
        </QueryClientProvider>
    </Router>
;
