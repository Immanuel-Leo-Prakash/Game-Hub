import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default HomePage;
