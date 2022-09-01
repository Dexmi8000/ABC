import { Routes, Route } from "react-router-dom";
import ds from "./Content.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
export default function Content() {
  return (
    <Routes>
      <Route path="/Dialogs" element={<Dialogs />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}
