import { GlobalStyle } from '@/assets/css/reset';

import TopBar from '@/components/TopBar';

import routes from '@/router';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';
function App() {
  console.log(routes)
  return (
    <>
      <Router>
        <div className='App'>
          <TopBar />
          {renderRoutes(routes)}
        </div>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
