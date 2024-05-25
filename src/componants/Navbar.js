import React, { Component } from 'react';
// import {useState} from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  
  render() {

    
    return (
      
         <nav className="navbar bg-dark border-bottom border-body" style={{height:10+'vh',borderColor:'black', borderRadius:2+'px'}}>
               <div>
                <h3 style={{fontFamily:'cursive',color:'tomato'}}>NewsApp</h3>
              </div>
              <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}><Link style={{color:'tomato',}} to="/business">business</Link></div>
              <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}><Link style={{color:'tomato',}} to="/entertainment">entertainment</Link></div>
              {/* <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}> <Link style={{color:'tomato',}} to="/general">general</Link></div> */}
              <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}><Link style={{color:'tomato',}} to="health">health</Link></div>
              <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}><Link style={{color:'tomato',}} to="sports">sports</Link></div>
              <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}><Link style={{color:'tomato',}} to="science">science</Link></div>
              <div style={{color:"white" ,marginTop:15+'px',marginLeft:15+'px'}}> <Link style={{color:'tomato',}} to="tecnology">technology</Link></div>
              
              <div className="container-fluid" >
                    <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
             </nav>
      
    );
  }
}

export default Navbar;
