import SignUp from '../../shared/components/SignUp';
import { Link } from 'react-router-dom';

import s from "./register-page.module.scss";

const RegisterPage = () => {

    return (
        <div>
            <h1 className={s.title}>Register</h1>
            
            <SignUp />
            <p className={s.redirect}>
                Already have an account? <Link to="/login">Sign In</Link>
            </p>            
        </div>
    )
}

export default RegisterPage;
