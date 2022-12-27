import React from 'react'
import "./Features.css"

function Featues() {
  return (
    <div className="features__bg">
        <div className="container">
            <div className="fetaures__center">
                <h1>fetaures <span>destinations</span></h1>
            </div>
            <div className="features__row">
                <div className="features__col">
                    <ul>
                        <li>china</li>
                        <li>hong kong</li>
                        <li>malaysia</li>
                        <li>singapore</li>
                        <li>indonesia</li>
                    </ul>
                    <div className="seemore__btns">
                        <a href="!#" className="btn seemore">see more</a>
                    </div>
                </div>
                <div className="features__col">
                    <img src="./images/map_bg.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featues