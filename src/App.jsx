import React, { useState } from 'react';
import ToDoList from './TodoList';

const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvents = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        if(inputList !== ""){
            setItems((oldItems) => {
                return [...oldItems, inputList]
            });
        }
        setInputList("");
    };

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return  index !== id;
            })
        })
    };

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add an item" value={inputList} onChange={itemEvents} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                       {items.map( (itemval, index) => {
                           return <ToDoList 
                            key={index} 
                            id={index} 
                            text={itemval} 
                            onSelect = {deleteItem}    
                        />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;