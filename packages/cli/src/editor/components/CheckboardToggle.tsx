import React, {useCallback, useContext} from 'react';
import {
	CheckerboardContext,
	persistCheckerboardOption,
} from '../state/checkerboard';

export const CheckboardToggle: React.FC = () => {
	const {checkerboard, setCheckerboard} = useContext(CheckerboardContext);

	const onClick = useCallback(() => {
		setCheckerboard((c) => {
			persistCheckerboardOption(!c);
			return !c;
		});
	}, [setCheckerboard]);

	return (
		<div
			role="button"
			title="Show transparency as checkerboard"
			onClick={onClick}
			style={{
				userSelect: 'none',
				display: 'inline',
				height: 16,
			}}
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="game-board-alt"
				className="svg-inline--fa fa-game-board-alt fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				style={{width: 16, height: 16}}
			>
				<path
					fill={checkerboard ? '#03d7fc' : 'white'}
					d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-32 256H256v192H64V256h192V64h192z"
				/>
			</svg>
		</div>
	);
};
