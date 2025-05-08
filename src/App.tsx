import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
