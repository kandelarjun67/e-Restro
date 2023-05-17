import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <a className="navbar-brand container" href="/">E-Restro</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home</a>
                        <a className="nav-item nav-link" href="/">Order</a>
                        <a className="nav-item nav-link" href="/">Faq</a>
                        <a className="nav-item nav-link " href="/">Contact</a>
                    </div>
                    
                        {/* <button type="button" class="btn btn-outline-primary btn-sm ">LogIn</button> */}
                        <button class="btn btn-outline-primary btn-sm">LogIn</button>
                        <button type="button" class="btn btn-outline-info btn-sm ml-4">SignIn</button>
                    
                </div>
            </nav>
        </>
    )
}
