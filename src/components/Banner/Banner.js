import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <>
            <div className='banner '>
                <div className="container">
                    <h1>ABOUT THE <span>COMPANY</span></h1>

                </div>
            </div>
            <div className="banner__info ">
                <div className="container">

                    <h3>ABOUT <span>US</span></h3>
                    <p>The ReDaily project, like many others, was born in bath. One of our team members complained about how many different bottles he had in his bathroom. He was especially afraid of what was going to happen to all those bottles after. And rightfully so, as at best some of them would be only partially recycled.</p>
                </div>
            </div>
        </>
    )
}

export default Banner