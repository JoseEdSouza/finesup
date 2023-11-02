import NavBarHome from "./components/NavBarHome/NavBarHome";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBarHome/>
      <Outlet/>
    </>
  );
}

export default App;
