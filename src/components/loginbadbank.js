
import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { useNavigate } from 'react-router';




function CreateAccount(props){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [data, setData] = React.useState('');

    function handle(){
        console.log(email,password);
        const url = `record/${email}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data.email);{
                if (!data) {
                    console.log(data.email);{
                        if (!data){
                            console.log('one')
                            props.setStatus('fail!');
                            return;
                        }


                        props.setShow(false);
                        return;
                    }
                }
            }
        })();
           
    
    }






    //////////////////////////
    //////////////////////////


    const [form, setForm] = React.useState({
        email: '',
        password: ''
    });


    function updateForm(value) {
        const checkpass = verifyPassword();
        return setForm((prev) => {
            return { ...prev, ...value};
        });

    } 


    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        //When a post request is sent to the create url, we'll ass a new record to the database.
        const loginaccount = { ...form };

        await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginaccount),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ email: '', password: ''});


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


    





    async function onSubmitjwt(e) {
        e.preventDefault();

        const response = await fetch('https://localhost:5000/logout', {
            method: 'POST',
            headres: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            }),
        })
        const data = await response.json();
        console.log(response.json());
        if (data){
            console.log(response.json());
            alert('Logout Successful')
            setEmail(response.data);
            localStorage.setItem('email', response.data);
            console.log(response.data);
            window.location.href = '/createaccount'
        } else {
            alert('Please checkn your username and password')
        }
        }
    


        async function onSubmitjwt(e) {
            e.preventDefault();

            const response = await fetch('http://localhost:5000/logout', {
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
            if (!data){
                console.log(response.json());
                alert('Login Successful')
                setEmail(response.data);
                localStorage.setItem('email', response.data);
                console.log(response.data);
                window.location.href = '/createaccount'
            } else {
                alert('Please check your username and password')
            }
        }




        const handleLogout = () => {
            //setUser({}):
            setEmail('');
            setPassword('');
            localStorage.clear();
    }






    return (show) ? (
        [
            'Primary'
        ].map((variant, idx) => (

            <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{height: '115px', width: '18rem', left: '500px', top: '115px', position: 'absolute' } }
            className='mb-2'
            status={status}
            body={show}
            
            >


        <Card.Header>Login</Card.Header>
        <Card.Body>
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
                <Button variant='dark' name='submit' type='submit' onClick={onSubmitjwt}>logout</Button>
            </form>
        </Card.Body>
            </Card>

        )
        )
        ) : (
            <>
            
            <Card
            bg='primary'
            text='white'
            style={{ width: '18rem' }}
            className='mb-2'
            status={status}
            body={show}
            >
                <Card.Body>
                    <h5>Success!</h5>
                    <br/>
                    <h2>{status}</h2>
                    <br/>
                    <button type='submit' className='btn btn-light'>Add Another Account</button>

                </Card.Body>
            </Card>
            </>
        )
}



export default CreateAccount


