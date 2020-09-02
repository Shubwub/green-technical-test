import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import './App.scss';
import LoginModal from './components/molecules/LoginModal';

const App = () => (
	<div className="App">
		<ToastProvider>
			<LoginModal />
		</ToastProvider>
	</div>
);

export default App;
