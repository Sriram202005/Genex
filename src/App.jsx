import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero/>
      </main>
      <Footer />
    </>
  );
}

export default App;
