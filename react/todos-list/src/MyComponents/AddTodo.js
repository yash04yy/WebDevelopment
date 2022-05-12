import React,{useState} from "react";

export const AddTodo=({addTodo})=>{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState(""); 

    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or descrption cant be empty");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return(
        <div className='container my-3'>
            <h3 className='text-center'>Add a Todo</h3> 
            <form onSubmit={submit}>
                <div class="mb-3">
                <label for="title" class="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" class="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
            </div>
            <button type="submit" class="btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}