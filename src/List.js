
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const List = (props) => {
    const[line, setLine] = useState(false);

    const cutItem = () => {
        setLine(true);
    };

    return(
        <div className="todo_style">
           <span onClick={cutItem}> <DeleteIcon className= "deleteIcon" /> </span>
           <l1 style = {{textDecoration : line ? "line-through" : "none" }}> {props.text} </l1>
        </div>
    );
};

export default List;