import './App.css';
import Articles from './Articles';
import Directory from './components/Directory';
import Featues from './components/Featues';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Seework from './components/Seework';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
      <Hero />
      <Seework />
      <Articles/>
      <Featues/>
      <Directory/>
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;
