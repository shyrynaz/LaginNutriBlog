import React from "react";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Header from "./components/Header";
import Home from './pages/Home';
import SingleBlog from './pages/singleBlog';

function App() {
	return (
		<>
	
		<Router>
		<Header />
		<Switch>
			<Route exact path="/" component = {Home}/>
			<Route path="/singlePost" component= {SingleBlog}/>
		</Switch>
		</Router>
		</>
	);
}

export default App;
