const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <h1> The Dojo Blog  </h1>
            <div className="links">
            <a href="/"> Home </a>
            <a href="/Create "style={{
                color: "blue",
                backgroundColor: "yellow",
                borderRadius:'10px'
            }}> New Post </a>
            </div>
           
        </nav>
     );
}
 
export default Navbar;  