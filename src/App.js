import './App.css';
import { SplitScreen } from './Layout_Component/SplitScreen';


const LeftHandComponent = () =>{
  return <h1 style={{backgroundColor: 'green'}}>Left!</h1>;
}

const rightHandComponent = () =>{
  return <p style={{backgroundColor: 'red'}}>Right!</p>;
}

function App() {
  return (
    <SplitScreen 
      left={LeftHandComponent}
      right={rightHandComponent} />
  );
}

export default App;