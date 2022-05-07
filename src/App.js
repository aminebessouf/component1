
import './App.css';
import Adress from './Components/Profile/Adress';
import FullName from './Components/Profile/FullName';
import Profilephoto from './Components/Profile/Profilephoto';

function App() {
  return (
    <div className="App">
    <Profilephoto />
    <FullName />
    <Adress />
    </div>
  );
}

export default App;
