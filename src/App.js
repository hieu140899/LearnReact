import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import TestState from './components/TestState';
import { useState } from 'react';
import PersonB23 from './components/PersonB23';

function App() {
  const [showPer, setShowPer] = useState(false);

  const togglePer = () => {
    setShowPer(!showPer);
  }

  const [per, setPer] = useState([
    {name: "Hisu1", age:21},
    {name: "Besbes1", age:22}
  ]);
  const [per2, setPer2] = useState([
    {name: "Hisu5", age:21},
    {name: "Besbes5", age:22}
  ]);

  const changeNameHandle = () => {
    setPer([
      {name: "Hisu2", age:21},
      {name: "Besbes2", age:22}
    ])
  };

  const changeName2 = (event1) => {
    setPer2([
      {name: event1.target.value, age: 1}
    ])
  };

  //dung map render list
  const testmap = per.map((item) => {
    return (
      <Person name={item.name} age={item.age}></Person>
    )
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Person></Person>
        <Person></Person> */}
        <button onClick={() => togglePer()}>Toggle show...</button>
        {showPer === true? (
          <div>
            <button onClick={() => changeNameHandle("Hisu")}>Change name</button>
            
            <div className="testflex">
              <Person click1={changeNameHandle} name="Hisu" age="21">From Quoc Oai with love</Person>
              <Person name="Besbes" age="22">From Dong Anh with love</Person>
            </div>
          </div>
          
        ): null}

        <TestState></TestState>

        
        <Person name={per[0].name} age={per[0].age}></Person>
        <Person name={per[1].name} age={per[1].age}></Person>

        <PersonB23 name={per2[0].name} age={per2[0].age} changed={changeName2}></PersonB23>

        {testmap}
        
      </header>
    </div>
  );
}

export default App;
