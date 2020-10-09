import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import Routes from './routes';

// styles
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
