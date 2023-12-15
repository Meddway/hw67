import Display from './components/Display/Display';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <div className="calculator">
      <div className="container">
        <Display />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
