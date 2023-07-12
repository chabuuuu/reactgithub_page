import React from 'react'
import Button from '@atlaskit/button'
import Todo from './Todo'
export default function Todolist({danhsach}) {
  // window.alert("adss");

  return (
    
    <>
    
     {
     
      danhsach?.map((todo) => (
        <Todo  todo={todo}></Todo>
      ) )
    } 
    
    

    


    
   

    
    
    
    </>
  );
}
