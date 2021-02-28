import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Restaurants from "./pages/Restaurants";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Search from "./components/Search";

import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
          {/* <Route exact path="/NotFound" component={NotFound} />
          <Route path="*">
            <Redirect to="/NotFound"></Redirect>
          </Route> */}
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
