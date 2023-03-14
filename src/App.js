import logo from './logo.svg';
import './App.scss';
import 'antd/dist/reset.css';
import Header from './components/Header'
import MainPage from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage /> 
    </div>
  );
}

export default App;
