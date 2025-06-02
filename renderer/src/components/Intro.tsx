import '../styles/Intro.css';

interface IntroProps {
	onStart: () => void;
}

function Intro({ onStart }: IntroProps) {
	return (
		<div className='intro'>
			<h1>Be Baddie</h1>
			<div className='emoji'>💅🏻</div>
			<button onClick={onStart}>Start</button>
		</div>
	);
}

export default Intro;
