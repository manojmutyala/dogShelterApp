import React from "react";
import { Layout, Menu, Button } from "antd";
import LoginInfo from "../LoginInfo";
import Dashboard from "../Dashboard";
import Details from "../Details";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
const { Header, Content } = Layout;

import "./LayoutCustom.css";

const LayoutCustom = () => {
  const { username } = useSelector((state) => state.loginReducer);
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        className="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
        </Menu>
        <LoginInfo style={{ float: "right" }} username={username} />
      </Header>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <div style={{ margin: "16px 0" }} />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutCustom;
