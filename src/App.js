import { GlobalStyle } from '@/assets/css/reset';
import TopBar from '@/components/TopBar';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <TopBar/>
        <h1>hello world</h1>
      </div>
    </>
  );
}

export default App;
