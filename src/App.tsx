import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {MainLayout} from "./UI/components/MainLayout";
import {Tracks} from "./UI/components/Tracks";
import {AboutArtist} from "./UI/components/AboutArtist";
import {SearchPage} from "./UI/components/SearchPage";

const App = () => {
	return (
		<div className="App">
			<MainLayout>
				<Route exact path={'/'} render={() => <Tracks/>}/>
				<Route path={'/aboutArtist/:name'} render={() => <AboutArtist/>}/>
				<Route path={'/searchTrack'} render={() => <SearchPage/>}/>
			</MainLayout>
		</div>
	);
}

export default App;
