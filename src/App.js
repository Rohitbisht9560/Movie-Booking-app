import { Fragment } from "react";
import Header from "./common/Header/Header";
import Home from "./screens/home/home.js";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Home></Home>
    </Fragment>
  );
}

export default App;