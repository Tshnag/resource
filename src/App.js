import './App.css';
import Mainsection from './components/Mainsection.js';
import Sidesection from './components/Sidesection.js';


function App() {
  return (
    <div className="App">
      
      <div className="sections">
        <Mainsection>
        </Mainsection>
        <Sidesection></Sidesection>
      </div>
    </div>
  );
}

export default App;
