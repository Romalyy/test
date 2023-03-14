import { NavLink } from "react-router-dom";

import { useAuth } from '../../hooks/use-auth';

import UserMenu from '../../shared/components/UserMenu';

import s from "./login-register.module.css";

const LoginAndRegisterPage = () => {

  const { isAuth } = useAuth();

  const linkActive = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };
  return (

    <div className="container">
      {isAuth
        ?
        <UserMenu />
        :
        <div className={s.wrapper}>
          <NavLink to={"/login"} className={linkActive}>
            Login
          </NavLink>
          |
          <NavLink to={"/register"} className={linkActive}>
            Register
          </NavLink>
        </div>
      }
    </div>

  );
};
export default LoginAndRegisterPage;
