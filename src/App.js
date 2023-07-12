import Todolist from "./components/Todolist";
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useState } from "react";
import {v4} from 'uuid'
function App() {
  const [todoList, setToDoList] = useState([]);
  const [textInput, setTextInput] = useState("");


  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e)=>{
    setToDoList ([...todoList, 
      {id: v4(), name: textInput, isCompleted: false}
    
    ]);
    // window.alert("asdasd");
    // setToDoList([{name: "Item1"}]);
  }

  return (
    <>
        <h3>
      Danh sách cần làm  </h3>
    <TextField name = "add-todo" placeholder="them viec can lam" elemAfterInput = {
      
      
      <Button 
      isDisabled={!textInput} 
      appearance="primary"
      onClick={onAddBtnClick}
      
      >Them</Button>}
    css={{ padding: "2px 4px 2px"}}
    
    
    value = {textInput}
    onChange={onTextInputChange}

    
    
    ></TextField>

      
    <Todolist danhsach = {todoList}>
      </Todolist>



    </>

  );
}

export default App;
