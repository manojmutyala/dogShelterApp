import React from "react";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import LayoutCustom from "./LayoutCustom";
import { Button } from "antd";
// import pkg from "../package.json";
import "./App.css";
// const index = `${pkg.config.context}`;
// const dashboard = `${index}/dashboard`;
// const paths = {
//   path: dashboard,
//   component: () => <LayoutCustom />,
// };
function App() {
  const { isUserLogged } = useSelector((state) => state.loginReducer);
  return (
    <div className="App">{isUserLogged === false ? <Login /> : <LayoutCustom />}</div>
  );
}

export default App;
