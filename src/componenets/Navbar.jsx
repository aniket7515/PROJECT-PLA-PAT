import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FarmzzEazy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto  ms-auto">
        <li className="nav-item">
          <a className="nav-link active m-3" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item dropdown m-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Insaurance Schemes</a></li>
            <li><a className="dropdown-item" href="#">Financial Schemes</a></li>
            
            <li><a className="dropdown-item" href="#">Crop Field</a></li>
          </ul>
        </li>



        <li className="nav-item">
          <a className="nav-link active m-3" href="#">Weather</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active m-3" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active m-3">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar