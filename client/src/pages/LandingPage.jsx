import React, { useState } from 'react'

import './LandingPage.css'
import MovingText from '../components/MovingText';
import Icon from '../assets/faq.svg';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LandingPage() {

    const [googleLogin, setGoogleLogin] = useState(false);
    const [code, setCode] = useState('');

    let screen;

    const testFunc = () => {
        fetch('/secret').then(res =>
        res.json()).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const loginButton = () => {
        fetch('/login/google').then(res => console.log('brhr'))
    }

    // const authenticateUser = () => {
    //     setGoogleLogin(true);
    // }

    screen = !code ? (
        <div>
            <div>
                <div className="row h-100">
                    <div className="col-md-6 text-header vh-100">
                        <h1 className="text-white pt-5 pl-5 font-weight-light header-text">Welcome to Clarify.</h1>
                        <h3 className="text-white pl-5 font-weight-light sub-header-text">Never leave a question unanswered.</h3>
                        <h4 className="text-white pl-5 font-weight-light pt-5 text-wrap w-75">Clarify allows you to pose questions anonymously in real-time which can be answered by someone hosting a session.</h4>
                        <div className="mx-auto">
                            <div className="card w-70 ml-5 mt-5">
                                <div className="card-header">
                                    <MovingText />
                                </div>
                                <div className="card-body">
                                    <h5 className="font-weight-light">With Clarify, getting important information in a timely manner has never been easier. Just join a session and ask away!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="image-conatiner">
                            <div className="image-header">
                                <div className="mx-auto w-70">
                                    <img src={Icon} height={250} alt="Main Icon" />
                                    <h4 className="font-weight-light pt-4 text-center">Sign into Google to join a session or start hosting your own.</h4>
                                    {/* <OauthPopup url="http://localhost:5000/login/google" onCode={code => setCode(code)}> */}

                                    {/* <a href="http://localhost:5000/login/google" type="button" className="btn btn-outline-success google-button mt-4 mb-5">Login to Google</a> */}
                                    {/* </OauthPopup> */}

                                    <Form className="mt-4">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter Email" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100 bg-color-main">
                                            Log In
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : 
        (

            <div className="" onClick={testFunc}>{code}</div>
        )
    return screen;
}