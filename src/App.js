import './App.css';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';

const App = () => {
  return (
    <div className="container">
     <LeftPanel/>
     <RightPanel/>
    </div>
  );
};

export default App;
