import { Link } from 'react-router-dom';

import Login from '../../shared/components/Login';

import s from "./login-page.module.css";

const LoginPage = () => {

    return (
        <div>
            <h1 className={s.title}>Login</h1>
            <Login />
            <div className={s.redirect}>
                Or <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default LoginPage;
