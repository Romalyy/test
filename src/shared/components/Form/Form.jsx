import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import jwt_decode from "jwt-decode";

import { setUser } from '../../../store/slices/userSlice';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import s from "./form.module.scss";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const click = () => handleClick(email, pass);

    const google = window.google;

    function handleCredentialResponse(response) {
        let userObject = jwt_decode(response.credential)
        dispatch(setUser(userObject));
        navigate('/test');
        document.getElementById("signInDiv").hidden = true;
    }

    useEffect(() => {
        // Global google
        google.accounts.id.initialize({
            client_id: "817426699905-v79bfsq4m29em3vpplfej2cb3f1n6o8r.apps.googleusercontent.com",
            callback: handleCredentialResponse
            });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );
    });

    return (
        <div className="container">
            <div className={s.form} >
                <div className={s.google} id="signInDiv"></div>
                <div className={s.wrapper}>
                    <TextField
                        className={s.input}
                        id="outlined-basic"
                        label="Login"
                        variant="outlined"
                        placeholder="admin"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={s.wrapper}>
                    <TextField
                        className={s.input}
                        id="outlined-basic"
                        label="Pass"
                        variant="outlined"
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="12345"
                    />
                </div>
                <Button
                    className={s.button}
                    variant="contained"
                    onClick={click}
                >{title}
                </Button>

            </div>
        </div>
    )
}

export default Form;