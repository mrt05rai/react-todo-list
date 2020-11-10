import ToDoItem from './ToDoItem'
const ToDoList = (props) => {
const {items , clearList, handleDelete, handleEdit } = props
console.log("Items ===", items)
return (
    <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {
            items.map( (it)=>{
                return  <ToDoItem key={it.id} title={it.item} handleDelete={()=> handleDelete(it.id)} handleEdit ={()=> handleEdit(it.id)}/>
            })
        }
        <button type="button" className="btn btn-danger btn-block  text-capitalize mt-5" onClick={clearList}> clear list</button>
    </ul>
 )

}
export default ToDoList;