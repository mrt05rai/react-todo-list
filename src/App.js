import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ToDoinput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import {v4 as uuid}  from "uuid"

function App() {

  let [ item , setItem ] = useState('');
  let [id , setId] = useState(uuid());
  let [items , setItems ] = useState([]);
  let [editItem , setEditItem] = useState(false)
  const handleChange = (e)=>{
    setItem(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setId(uuid())
    let newItem = {
      id, 
      item 
    }
     setItems((oldItems)=> {
       return [...oldItems , newItem]
     })
     setItem('');
  }

  const clearList = () => {
    setItems([]);
  }

  const handleDelete = (id) => {
    let filteredItems  = items.filter( it =>   id !== it.id)
    setItems(filteredItems);
  }
  const handleEdit = (id) => {
    let filteredItems  = items.filter( it =>   id !== it.id)
    let selectedItem  = items.filter( it =>   id === it.id)
    setItems(filteredItems);
    setItem(selectedItem.item);
    setEditItem(true)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 max-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">to do input </h3>
          <ToDoinput handleChange={handleChange} item={item} handleSubmit={handleSubmit} editItem={editItem}/>
          <ToDoList items={items} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </div>
      </div>
    </div>
  );
}

export default App;
