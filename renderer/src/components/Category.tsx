import '../styles/Category.css';

interface CategoryProps {
	onSelect: (routine: string) => void;
}

function Category({ onSelect }: CategoryProps) {
	const routines = [
		{ id: 'morning', label: '🍵 Morning' },
		{ id: 'night', label: '🧸 Night' },
		{ id: 'skincare', label: '🎀 Skincare' },
		{ id: 'angry', label: '🧚🏼‍♀️ Mood Recovery' },
	];

	return (
		<div className='category'>
			<h2>Select Your Routine</h2>
			<div className='category-list'>
				{routines.map((r) => (
					<button
						key={r.id}
						onClick={() => onSelect(r.id)}
						className='routine-btn'
					>
						{r.label}
					</button>
				))}
			</div>
		</div>
	);
}

export default Category;
