import React from "react";

const Nav = () => {
  return (
      <>
          <header>
              <div className="collapse bg-dark" id="navbarHeader">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-8 col-md-7 py-4">

                              <h4 className="text-white"></h4>
                              <p className="text-muted"></p>

                          </div>
                          <div className="col-sm-4 offset-md-1 py-4">
                              <h4 className="text-white">Actions:</h4>
                              <ul className="list-unstyled">
                                  <li><a href="/login" className="text-white">Login</a></li>
                                  <li><a href="/register" className="text-white">Register</a></li>
                                  <li><a href="/profile" className="text-white">Profile</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="navbar navbar-dark bg-dark shadow-sm">
                  <div className="container">
                      <a href="/" className="navbar-brand d-flex align-items-center">

                          <strong>Projekt - Dejavnosti</strong>
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                  </div>
              </div>
          </header>
      </>
  )
}
export default Nav;