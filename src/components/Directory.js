import React from 'react'
import "./Directory.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Directory() {
  return (
    <div className="directory__bg">
        <div className="directory_center">
            <h1>our <span>directory</span></h1>
        </div>
        <div className="directory__boxes">
          <div className="directory__col">
            <div className="directory__img">
                <img src="./images/img-5.png" alt="" />
            </div>
                <h3>hotel & travel</h3>
                <div className="directory__rating">
                    <div className="directory__box">4.0</div>
                    <div className="rating">
                        <a href="!#">rating</a>
                        <a href="!#">food</a>
                        <a href="!#">form <span>$</span>500</a>
                        <a href="!#"><LocationOnIcon/> locations</a>
                    </div>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. I</p>
                <div className="readmore__btns">
                    <a href="!#" className="btn readmore">read more</a>
                </div>
          </div>
          <div className="directory__col">
            <div className="directory__img">
                <img src="./images/img-6.png" alt="" />
            </div>
                <h3>hotel & travel</h3>
                <div className="directory__rating">
                    <div className="directory__box">4.0</div>
                    <div className="rating">
                        <a href="!#">rating</a>
                        <a href="!#">food</a>
                        <a href="!#">form <span>$</span>500</a>
                        <a href="!#"><LocationOnIcon/> locations</a>
                    </div>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. I</p>
                <div className="readmore__btns">
                    <a href="!#" className="btn readmore">read more</a>
                </div>
          </div>
          <div className="directory__col">
            <div className="directory__img">
                <img src="./images/img-7.png" alt="" />
            </div>
                <h3>hotel & travel</h3>
                <div className="directory__rating">
                    <div className="directory__box">4.0</div>
                    <div className="rating">
                        <a href="!#">rating</a>
                        <a href="!#">food</a>
                        <a href="!#">form <span>$</span>500</a>
                        <a href="!#"><LocationOnIcon/> locations</a>
                    </div>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. I</p>
                <div className="readmore__btns">
                    <a href="!#" className="btn readmore">read more</a>
                </div>
          </div>
          <div className="directory__col">
            <div className="directory__img">
                <img src="./images/img-8.png" alt="" />
            </div>
                <h3>hotel & travel</h3>
                <div className="directory__rating">
                    <div className="directory__box">4.0</div>
                    <div className="rating">
                        <a href="!#">rating</a>
                        <a href="!#">food</a>
                        <a href="!#">form <span>$</span>500</a>
                        <a href="!#"><LocationOnIcon/> locations</a>
                    </div>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. I</p>
                <div className="readmore__btns">
                    <a href="!#" className="btn readmore">read more</a>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Directory