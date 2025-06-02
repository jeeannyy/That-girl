import { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import Category from './components/Category';
import Lists from './components/Lists';

function App() {
	const [page, setPage] = useState<'intro' | 'category' | 'lists'>('intro');
	const [selectedRoutine, setSelectedRoutine] = useState<string | null>(null);

	const handleRoutineSelect = (routine: string) => {
		setSelectedRoutine(routine);
		setPage('lists');
	};

	return (
		<>
			{page === 'intro' && <Intro onStart={() => setPage('category')} />}
			{page === 'category' && <Category onSelect={handleRoutineSelect} />}
			{page === 'lists' && selectedRoutine && (
				<Lists routine={selectedRoutine} />
			)}
		</>
	);
}

export default App;
