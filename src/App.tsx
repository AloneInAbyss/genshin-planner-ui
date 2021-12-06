import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  return (
    <div className="full-height">
      <Navbar />

      <Homepage />

      <Footer />
    </div>
  );
}
