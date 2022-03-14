import Navbar from "./components/Navbar/Navbar";
import { About } from './pages/About/About';
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
      <About />
        <Navbar />
        <br />
        <Home />
    </div>
  );
}

export default App;
