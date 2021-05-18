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
import PlayBar from '@/components/PlayBar';
function App() {
  // console.log(routes)
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <div className='App'>
            <TopBar />
            {renderRoutes(routes)}
            <BottomFooter />
            <PlayBar />
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
