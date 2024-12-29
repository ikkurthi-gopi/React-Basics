import { useState } from 'react';
import './App.css';
import Apple from './Apple';
import StateMgm from './StateMgm';
import FirstComp from './propContainer/FirstComp';
import FourthComp from './propContainer/FourthComp';
import SecondComp from './propContainer/SecondComp';
import ThirdComp from './propContainer/ThirdComp';
import ClickEvent from './ClickEvent';
import SampleArray from './SampleArray';
import ArrayMethods from './ArrayMethods';
import Arrayadding from './arrayadding';
import Var from './var';
import Operation from './crud/crudoperation';
import Modal from './crud/modalcrud';

const user = {
  name: 'gopi',
  area: 'hyderabad',
  designation: 'developer'
}


function App() {
  const [sampleCondition, setSampleCondition] = useState(true);

  return (
    <div className="App">
      {/* <ArrayMethods/> */}
      {/* <Apple/> */}
      {/* <FirstComp name={user.name}/>
    <SecondComp name={user.designation}/> */}
      {/* <ThirdComp name='pspk'/> */}
      {/* <FourthComp name='rc'/> */}
      {/* <StateMgm/> */}
      {/* <ClickEvent/> */}
      {/* <SampleArray /> */}
      {/* {sampleCondition ? <FirstComp/> : "iam false"} */}
      {/* <Arrayadding/> */}
      <Var />
      {/* <Operation/> */}
      <Modal />
    </div>
  );
}

export default App;
