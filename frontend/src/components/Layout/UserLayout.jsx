import { Outlet } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";

export const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* main content */}
      <main>
        <Outlet/>
      </main>
      {/* footer */}
      <Footer/>
    </>
  );
};
