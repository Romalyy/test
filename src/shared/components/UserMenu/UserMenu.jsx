import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeUser } from '../../../store/slices/userSlice';
import { useAuth } from '../../../hooks/use-auth';

import LogoutIcon from '@mui/icons-material/Logout';

import s from "./user-menu.module.css";

const UserMenu = () => {

  const dispatch = useDispatch();

  const { email } = useAuth();

  return (
    <div className={s.wrapper}>
      <Link to={"/"}>
      <button onClick={()=> dispatch(removeUser())} className={s.btn} type="button">
         <span className={s.email}>{email}</span>  <LogoutIcon></LogoutIcon>
        </button>
        </Link>
    </div> 
  );
};

export default UserMenu;
