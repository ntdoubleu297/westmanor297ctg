import {Card, Button} from 'react-bootstrap';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router";
import './suburb.css';


const CreateAccount = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');

 


  const navigate = useNavigate();

const registerUser = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name, email, password
        }),
    })

    const data = await response.json()

    if (data.status === 'OK'){
        alert('Registration Successful, please Login.')
        navigate('/createaccount')
    }
}



//const [show, setShow] = React.useState(true);
//const [status13, setStatus13] = React.useState('');
const [data, setData] = React.useState('');



async function onSubmit(e) {
    e.preventDefault();


    const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,

        }),
    })
    const data = await response.json();
    console.log(response.json());
    if (data) {
        console.log(response.json());
        alert('Login Successful')
        setEmail(response.data);
        localStorage.setItem('email', response.data);
        console.log(response.data);
        window.location.href = '/activesinglefamily'
    } else {
        alert('Please check your username and password')
    }
}


React.useEffect(() => {
  fetch('http://localhost:5000/users')
  .then(data => {
      console.log(data);

      setData(JSON.stringify(data));
  });
}, []);



function verifyPassword(){
  const password = document.getElementById('password').value;
  if (password === '') {
      return document.getElementById('message').innerHTML = 'Fill in your Password Please!';
  }
  if (password.length < 8) {
      document.getElementById('message').innerHTML = 'Password length must be atleast 8 characters!';
      return false;
  }
}



return(  
 

    <div className='innerelementback'>
       <div className='background64'>
                  <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '470px', top: '20px', width: '317px', height: '157px', borderRadius: '50%', background: 'rgb(16, 16, 16)', border: '3.5px solid rgb(34,34,34)' }}></div>
                  <div className='titlewater64' style={{zIndex: '7', position: 'absolute', left: '475px', top: '190px' }}>West Enterprises</div>
                  </div>    
        <h1>Registration Page</h1>
        <form onSubmit={registerUser}>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password' />
            <input type='submit' value='Register' />
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={onSubmit}>
                <Card.Title>Email</Card.Title>
                <input type='text' placeholder='Enter Email' style={{ width: '13rem' }} id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} /><br/>
                <div style={{color: 'red'}}>{status}</div>
                <br/>
                <Card.Title>Password</Card.Title>
                <input type='password' placeholder='Enter Password' style={{ width: '13rem'}} id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br/>
                <div id='message' style={{color: 'red'}}></div>
                <br/>
                <Button variant='light' name='submit' type='submit' value='Login' data-dismiss='alert' onClick={onSubmit}>Login</Button>

            </form>
    </div>

)
}

export default CreateAccount;














      

        










            
        
   