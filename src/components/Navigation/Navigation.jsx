import ds from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={ds.navigation}>
      <NavLink to="/Profile"> Profile </NavLink>
      <NavLink to="/Dialogs"> Dialogs </NavLink>
    </div>
  );
}
