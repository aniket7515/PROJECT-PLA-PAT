import React from 'react'
import './styles.css'

const Services = () => {
  return (
    <div>
        <div className="row1-container">
    <div className="box box-down cyan">
      <h2>Schemes</h2>
      <p>These are the most important agriculture schemes introduced by the government.</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div className="box red">
      <h2>MSP</h2>
      <p>MSP is the guaranteed ‘minimum floor price’ that farmer must get from the government</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div className="box box-down blue">
      <h2>Weather</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div className="row2-container">
    <div className="box orange">
      <h2>Krishi Kshetra</h2>
      <p>Connecting farmers and traders</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
  
    </div>
  )
}

export default Services