import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >FarmzzEazy</Link>
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
            Schemes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/insaurancescheme" className="dropdown-item" >Insaurance Schemes</Link></li>
            <li><Link to="/financialcheme" className="dropdown-item" href="#">Financial Schemes</Link></li>
            
            <li><Link to="/cropscheme" className="dropdown-item" href="#">Crop Field</Link></li>
          </ul>
        </li>



        <li className="nav-item">
          <a className="nav-link active m-3" href="#">Weather</a>
        </li>
        <li className="nav-item">
          <Link to="/msp" className="nav-link active m-3" >MSP(Pricing)</Link>
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