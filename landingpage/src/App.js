import './App.css';
import './responsiveapp.css';
import Body1 from './components/body1';
import Body2 from './components/body2';
import Body3 from './components/body3';
import Body4 from './components/body4';
import Footer from './components/footer';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Body1/>
    <Body2/>
    <Body3/>
    <Body4/>
    <Footer/>
    </div>
  );
}

export default App;
