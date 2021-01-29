import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import { AboutPage } from './pages/About';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<LandingPage />
					</Route>
					<Route path="/about" exact component={AboutPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
