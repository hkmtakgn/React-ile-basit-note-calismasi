import { v4 as uuidV4 } from "uuid"

export default function MyNotes({todo,setTodo}) {

    function handleDelete(id) {
        setTodo(prevTodo => prevTodo.filter(item => item.id !== id))
    }

    return (<>
        <div className="container-fluid">
  <ul className="list-group">
    
    {todo.map(item => <li key={uuidV4()} id={uuidV4()}>{item}</li>)}
    {todo.length > 0 ? <button onClick={(item) => handleDelete(item.id)} type="button" style={{marginTop:"13%"}}>Temizle</button> : ""}
  </ul>
  
</div>

    </>)
};
