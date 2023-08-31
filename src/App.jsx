import React, { useEffect, useState } from 'react';
import TaskList from './components/taskList';
import InputBox from './components/inputBox';
import Buttons from './components/buttons';
import Board from './components/board';
function App() {

  const [itemsArray, setItemsArray] = useState([]);
  let taskValue = '';
  let todo = {};
  let id = 0;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('taskList'));
    if (items) {
      setItemsArray(() => [...items])
    }
  }, [])


  const onInputChange = (event) => {

    taskValue = event.target.value
  }

  const onSubmit = () => {
    id = Date.now()
    todo.task = taskValue;
    todo.complete = false;
    todo.id = id;

    const newArray = [...itemsArray, todo];


    localStorage.setItem('taskList', JSON.stringify(newArray));


    setItemsArray(previouArray => {
      return [...previouArray, todo]
    })
  }

  const removeTask = () => {
    localStorage.removeItem('taskList');
    setItemsArray(() => {
      return []
    })
  }
  const marktrue = (event) => {
    let id = Number(event.target.id);

    itemsArray.forEach((todo, i) => {
      todo.id === id && todo.complete === false ? itemsArray[i].complete = true : todo.complete = false;
    })

    setItemsArray((previouArray) => {

      return [...previouArray]
    })
  }
  const deleteTodo = (event) => {
    let id = Number(event.target.id);

    itemsArray.forEach((todo, i) => todo.id === id ? itemsArray.splice(i, 1) : itemsArray);

    setItemsArray((previouArray) => {

      return [...previouArray]
    })
  }
  const editTodo = (event) => {
    let id = Number(event.target.id);


    itemsArray.find((todo, i) => {
      if (todo.id === id) return itemsArray[i].task = taskValue;
    })

    setItemsArray((previouArray) => {

      return [...previouArray]
    })

  }
  return (
    <>
      <InputBox onInputChange={onInputChange} />
      {
        itemsArray.length < 1 ? < h1 > No item added here</h1 > :
          <TaskList items={itemsArray} marktrue={marktrue} deleteTodo={deleteTodo} editTodo={editTodo} />
      }
      <Buttons onSubmit={onSubmit} onReset={removeTask} />
      <Board />
    </>
  )


}

export default App;


//*this way we replace the like if this an item string itemAray will be equal to the string and willl be anymore the array andt that's why it's showing me the error
// setItemsArray(items); arry=null;



//*setItemsArray(() => [...items]) so we use this way when we don't want the merge with the previous array


//*also that when the first time chagnges occur still it'l display the crrent one and then it'll move to the next one




// itemsArray.forEach((todo, i) => { todo.id === id ? itemsArray.splice(i, 1) : itemsArray });

//*so this is the rules if we're wrapping the close parnthesi in the arrw function then we have to return something in the react even if we're using the forEach