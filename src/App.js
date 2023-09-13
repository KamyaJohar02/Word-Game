import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform.js';

function App() {
  return (
    <>
      
      < Navbar title="Word Game" About= "It is a word game"/>
      <div className = "container my-3">
      <Textform Heading= "My word Game" />
      
      </div>
    </>
    
  );
}


export default App;
