import { useState, useEffect } from 'react';
import '../styles/Lists.css';
import { routines } from '../data/routines';

interface ListsProps {
	routine: string;
}

const praiseMessages = [
	'Main character energy today 💫',
	'Another task? Handled. 💁🏻‍♀️',
	'Pookie just finished another task 😗',
	'You’re glowing ✨',
	'Yes queen, keep going! 💅🏻',
	'Slay that list, babe! 😎',
	'Look at you go 👑',
];

function Lists({ routine }: ListsProps) {
	const tasks = routines[routine];
	const [checked, setChecked] = useState<boolean[]>(
		Array(tasks.length).fill(false),
	);
	const [praise, setPraise] = useState<string>('');

	useEffect(() => {
		console.log('👀 window.electronAPI:', window.electronAPI);
	}, []);

	const handleToggle = (index: number) => {
		const newChecked = [...checked];
		newChecked[index] = !newChecked[index];
		setChecked(newChecked);

		const message =
			praiseMessages[Math.floor(Math.random() * praiseMessages.length)];
		setPraise(message);
	};

	const progress = (checked.filter(Boolean).length / checked.length) * 100;

	const today = new Date();
	const weekday = today.toLocaleDateString('en-GB', { weekday: 'long' });
	const day = today.getDate();
	const month = today.toLocaleDateString('en-GB', { month: 'long' });

	return (
		<div className='lists'>
			<div className='top-section'>
				<div className='date-box'>
					<p>{weekday}</p>
					<div className='day-wrapper'>
						<div className='day-circle'>{day}</div>
					</div>

					<p>{month}</p>
				</div>

				<div className='progress-container'>
					<p className='progress-title'>Progression</p>

					<div className='progress-bar-background'>
						<div className='progress-fill' style={{ width: `${progress}%` }} />
					</div>

					<p className='praise-message'>
						{praise || 'You are healing and your ex is balding 🧑🏻‍🦲'}
					</p>
				</div>
			</div>

			<ul className='task-list'>
				{tasks.map((item, i) => (
					<li
						key={i}
						className={checked[i] ? 'done' : ''}
						onClick={() => handleToggle(i)}
					>
						<span className='task-list-emoji'>👸🏼</span> {item}
					</li>
				))}
			</ul>

			<button
				className='finish-btn'
				onClick={() => {
					console.log('🖱 FINISH clicked');
					window.electronAPI?.quitApp();
				}}
			>
				FINISH
			</button>
		</div>
	);
}

export default Lists;
