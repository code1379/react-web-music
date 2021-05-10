// redux
import { Provider } from 'react-redux';
import store from './store';
// 路由
import routes from '@/router';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';
// 全局演示
import { GlobalStyle } from '@/assets/css/reset';
// 组件
import TopBar from '@/components/TopBar';
import BottomFooter from './components/BottomFooter';

function App() {
  // console.log(routes)
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className='App'>
            <TopBar />
            {renderRoutes(routes)}
            <BottomFooter />
          </div>
        </Router>
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
