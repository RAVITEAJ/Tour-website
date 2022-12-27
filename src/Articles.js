import React from 'react'
import "./Articles.css"

function Articles() {
  return (
    <div className="articles__bg">
        <div className="container">
            <div className="articles__center">
            <h1>some <span>tips & articles</span></h1>
            <p>There are many variations of passagesThere are many variations of passages</p>
            </div>
            <div className="articles__boxes">
                <div className="articles__col">
                    <div className="arricles__img">
                        <img src="./images/img-1.png" alt="" />
                        <h3>tips</h3>
                    <h6>There are many variations</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>   
                </div>
                <div className="articles__col">
                    <div className="arricles__img">
                        <img src="./images/img-2.png" alt="" />
                        <h3>culture</h3>
                    <h6>There are many variations</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>   
                </div>
                <div className="articles__col">
                    <div className="arricles__img">
                        <img src="./images/img-3.png" alt="" />
                        <h3>travel</h3>
                    <h6>There are many variations</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>   
                </div>
                <div className="articles__col">
                    <div className="arricles__img">
                        <img src="./images/img-4.png" alt="" />
                        <h3>locations</h3>
                    <h6>There are many variations</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles