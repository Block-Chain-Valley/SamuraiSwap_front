import ROUTES from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { styled } from "styled-components";
import Header from "./components/common/Header";

function App() {
  return (
    <Wrap>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<h1>Home</h1>} />
          <Route path={ROUTES.POOLS} element={<h1>pool</h1>} />
          <Route path={ROUTES.SWAP} element={<h1>swap</h1>} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default App;
