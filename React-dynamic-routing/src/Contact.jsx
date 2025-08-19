import { NavLink, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div className="college" style={{ textAlign: 'center' }}>
      <h1>College Page</h1>
      
      <NavLink to="unknown1">Unknown1</NavLink> |{" "}
      <NavLink to="unknown2">Unknown2</NavLink> |{" "}
      <NavLink to="unknown3">Unknown3</NavLink>

      <NavLink to="/">Back to home</NavLink>
      
      <Outlet />
    </div>
  );
}
