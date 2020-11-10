const  ToDoinput = (props) => {
const {item , handleChange, handleSubmit, editItem } = props;
return (
    <div className="card card-body my-3">
    <form onSubmit={handleSubmit}>
       <div className="input-group">
           <div className="input-group-prepend">
               <div className="input-group-text bg-primary text-white">
                   <i className="fas fa-book"></i>
               </div>
               <input type="text" className="form-control text-capitalize" placeholder="Add  to do item" value={item} onChange={handleChange} />
           </div>
<button type="submit" className="btn btn-block btn-primary mt-3">{ editItem ? "Edit Item" : "Add Item"}</button>
       </div>
    </form>
</div>
 )

}
export default ToDoinput;