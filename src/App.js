
import './style/root.css';
import Mobile from './components/mobile/Mobile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
      <Mobile/> 
       <Footer/> 
    </div>
  );
}

export default App;
