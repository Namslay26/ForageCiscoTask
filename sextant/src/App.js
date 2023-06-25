
import './App.css';
import Banner from './Banner';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <Banner title={"Welcome to the title"}></Banner>
      <div className=" flex">
        <Component content={'This is a component!'}></Component>
        <Component content={'This is a component!'}></Component>
      </div>
    </div>
  );
}

export default App;
