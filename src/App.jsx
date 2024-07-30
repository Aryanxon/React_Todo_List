import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Input from './components/Input';
import DisplayTask from './components/DisplayTask';
import Image from './assets/vite.png'

function App() { 

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); // Main value is stored in this todods
  const [showFinished, setshowFinished] = useState(true); // For displayin non completed task

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  }
  
  // To edit the value of a Task 
  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo);
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos);
    saveToLS();
  }

  // To delete a Task 
  const handleDelete= (e, id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) ;
    saveToLS();
  }

  // To add a Task 
  const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("") ;
    saveToLS();
  }
  
  // To set the value comes from input into setTodo 
  const handleChange= (e)=>{ 
    setTodo(e.target.value);
  }

  // To handle the checkbox so that we only show incompleted tasks 
  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  }
  

  return (
    < >
    <div className="mx-auto w-4/5 md:w-1/2 md:mx-auto my-5 rounded-xl p-5 bg-slate-400 h-full ">
       <img src={Image} alt="Logo" className='w-28 h-28 mx-auto' />
        <h1 className='font-bold text-center text-4xl mb-4'>Todo List</h1>
          <Input handleChange={handleChange} todo={todo} handleAdd={handleAdd}/>
          <DisplayTask toggleFinished={toggleFinished} showFinished={showFinished} todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} handleCheckbox={handleCheckbox} />  
       </div>
    </>
  )
}

export default App