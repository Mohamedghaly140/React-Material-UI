import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components Import
import theme from './components/ui/Themes/Theme';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import Services from './components/ui/Services/Services';
import CustomSoftware from './components/ui/CustomSoftware/CustomSoftware';

function App() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<LandingPage
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						path="/services"
						render={props => (
							<Services
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						path="/customsoftware"
						render={props => (
							<CustomSoftware
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route path="/mobileapps" component={() => <div>mobileapps</div>} />
					<Route path="/websites" component={() => <div>websites</div>} />
					<Route path="/revolution" component={() => <div>revolution</div>} />
					<Route path="/about" component={() => <div>about</div>} />
					<Route path="/contact" component={() => <div>contact</div>} />
					<Route path="/estimate" component={() => <div>estimate</div>} />
				</Switch>
				<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
