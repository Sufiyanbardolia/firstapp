import logo from './logo.svg';
import './App.css';
import './Todo.css';
import Form from "./Form"
import {Table} from "./Table"
import { MaterialForm } from './MaterialForm';
import { Gridtask } from './Gridtask';
import { Materialcard } from './Materialcard';
import { StateMang } from './StateMang';
import { SchoolForm } from './SchoolForm';
import { Todo } from './TodoList';
// import { Materialcard2 } from './Materialcard2';
import { Todolist } from './TodoList';

function App() {
  return ( 
  
    <div className="App" >
      
      
      {/* <Table/>
      <Form/> */}
      {/* <Gridtask/> */}
      {/* <MaterialForm/> */}
      {/* <SchoolForm/> */}
      {/* <StateMang/> */}
      {/* <Materialcard/> */}
      {/* <Todo/> */}
     <Todolist/>
     
     

  
    </div>
  );
}

export default App;
