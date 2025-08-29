import './App.css';
import PrimaryButton from './components/Buttons/PrimaryButton';

function App() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-center'>
			<PrimaryButton onClick={() => alert('You clicked me!')}>
				Click Me
			</PrimaryButton>
		</div>
	);
}

export default App;
