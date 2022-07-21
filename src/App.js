import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const App = () =>{

  const [item , setitem] = useState("");

  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setitem(event.target.value)
  };

  const itemList = () =>{
    setNewItem((preValue) => {
      return [...preValue , item]
    });
     setitem("");
  };

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> TODo List </h1>
          <br />
          <input 
            type= "text" 
            value = {item} 
            placeholder= "Add a Item" 
            onChange={itemEvent}  >
          </input>
          <Button  onClick ={itemList}>
           <AddIcon className='newBtn' />
          </Button>
          <br />
          <ol>
           
            {newItem.map((val , index) => {
              return <List key ={index} text={val} />
            })}

          </ol>
        </div>
      </div> 
    </>

  );
};

export default App;