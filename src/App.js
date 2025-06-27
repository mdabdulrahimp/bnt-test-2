
//import Content from './Content';
import Home from './Home';
import Counter from './Counter';
import './index.css';
import GrandParent from './GrandParent';

function App() {
  return (
    <div className="App">
      {/* <Content /> */}
      <Home />
      <Counter/>
      <GrandParent></GrandParent>
    </div>
  );
}

export default App;
