import Navbar from './components/main/Navbar';
import Sidebar from './components/main/Sidebar';
import Carousel from './components/main/Carousel';
import MainContent from './components/main/MainContent';
import './App.css';

function App() {
  return (

    <div className="App">
      <section>
        <div className="row g-0">
          <Sidebar />
          <div className="col-lg-11">
            <Navbar />
          </div>
        </div>

        <div className="row g-0">
          <Sidebar />
          <MainContent />
          <Carousel />
          <Sidebar />
        </div>
      </section>
    </div>
  );
}

export default App;
