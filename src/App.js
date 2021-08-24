import React from "react";
import Login from "./components/auth/Login";
import Home from "./components/home.component";
import Post from "./components/post.component";
import Blog from "./components/blog.component";
import About from "./components/about.component";
import Register from "./components/auth/Register";
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Contact from "./components/contact.component";
import Services from "./components/services.component";
import Softwares from "./components/softwares.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  	return (
    	<Router>
      		<Navbar />
      		<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/services" component={Services} />
				<Route exact path="/softwares" component={Softwares} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/:id" component={Post} />
      		</Switch>
      <Footer />
    </Router>
  );
}

export default App;