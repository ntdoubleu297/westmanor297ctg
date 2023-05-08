import React from "react";
//import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
//import {
  //  Navbar,
   // Container,
   // Nav
//} from 'react-bootstrap';
import './badbank3k.css';
import { useState } from 'react';
  import image from './West-Enterprises.jpeg';
import NeilWhite from './BatmanForeverntdoubleu2976lah.png';
import RobMussi from './BatmanForeverntdoubleu297210.png';





function NavBar(){


  
  
    
    function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
                return [hovering, onHoverProps]
            }
    
            
                const [buttonAIsHovering, buttonAHoverProps] = useHover();
                const [buttonBIsHovering, buttonBHoverProps] = useHover();
                const [buttonCIsHovering, buttonCHoverProps] = useHover();
                const [buttonDIsHovering, buttonDHoverProps] = useHover();
                const [buttonEIsHovering, buttonEHoverProps] = useHover();

                //<Navbar bg="dark" variant="dark">
//<Container>
//<Navbar.Brand href="/">BadBank</Navbar.Brand>
//<Nav className="me-auto">
  //<Nav.Link href="/createaccount" {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here to Create your Account' : 'Create Account'} </Nav.Link>
  //<Nav.Link href="/login" {...buttonEHoverProps}>{buttonEIsHovering ? 'Click here to Login' : 'Login'}</Nav.Link> 
  //<img variant="bottom" src={image} width={350} height={200} fluid='true' alt='Card image' />
  
  //<Nav.Link href="/applyscience" {...buttonCHoverProps}>{buttonCIsHovering ? 'Click here to applyscience' : 'Apply Science'}</Nav.Link>
 // <Nav.Link href="/mapbox" {...buttonDHoverProps}>{buttonDIsHovering ? 'Click here to Map' : 'Map'}</Nav.Link>
//</Nav>
//</Container>
//</Navbar>
            


            
                //<Nav.Link href="/deposit" {...buttonBHoverProps}>{buttonBIsHovering ? 'Click here to make a Deposit' : 'Deposit/Withdraw'}</Nav.Link> // border 34, 34, 34, background 15 15 15 for original 
             
                //borderRadius: '50%', background: 'rgb(34, 34, 34)', border: '3.5px solid rgb(24,24,24)' }}
       

return(
<>
<div className='background'>
<a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '75px', top: '45px' }}href='/activesinglefamily' {...buttonDHoverProps}>{buttonDIsHovering ? 'Click here to applyscience' : 'Single Family'}</a>
  <a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '310px', top: '45px' }}href="/active" {...buttonEHoverProps}>{buttonEIsHovering ? 'Click here to applyscience' : 'MultiFamily'}</a>
  <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '470px', top: '20px', width: '317px', height: '157px', borderRadius: '50%', background: 'rgb(38.1, 38.1, 38.1)', border: '3.5px solid rgb(5,5,5)' }}></div>
  <img src={RobMussi} width={255} height={350} style={{zIndex: '7', position: 'absolute', left: '500px', top: '54px' }} />
  <div className='titlewater' style={{zIndex: '7', position: 'absolute', left: '475px', top: '190px' }}>West Enterprises</div>
  <a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '815px', top: '45px' }}href='/activecondo' {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here to Create your Account' : 'Condominium'}</a>
  <a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '1050px', top: '45px' }}href='/activecommercial' {...buttonCHoverProps}>{buttonCIsHovering ? 'Click here to applyscience' : 'Commercial'}</a>

  </div>    
 
</>

);

}


        

export default NavBar;




