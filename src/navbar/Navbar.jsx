import { NavLink } from "react-router-dom";


export default function Navbar ({todo}) {



    return (<>
    <nav className="navbar bg-body-tertiary text-light" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">Note App</NavLink>
    {todo.length > 0 ? <NavLink to="/my-notes" className="nav-link">MyNotes</NavLink> : ""}
  </div>
</nav>

    </>)
};
