const Header = () => {
  return(
<nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Élete</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#palyafutasa">Pályafutása</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#forras">Forrás</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Header