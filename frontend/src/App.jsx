import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "./components/Layout/UserLayout";
import { Home } from "./Pages/Home";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
