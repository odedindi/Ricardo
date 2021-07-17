// ========================= react =========================
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// ========================= style =========================
import {
	Breadcrumbs as Bc,
	Link,
	Typography,
} from '@material-ui/core';
// ======================== icon ===========================
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
// =========================================================

const Breadcrumbs = (): JSX.Element => {
	const history = useHistory();
	const breadrumbClickHandler = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	): void => {
		event.preventDefault();
		history.goBack();
	};

	const paths: string[] = useLocation().pathname.split('/');
	const breadcrumbIconSize: {
		width: number;
		height: number;
	} = { width: 12.5, height: 12.5 };

	if (!paths[1].length) {
		return (
			<Bc separator="›" aria-label="breadcrumb">
				<Link color="inherit">{''}</Link>
			</Bc>
		);
	}
	if (paths[1] === 'search') {
		return (
			<Bc separator="›" aria-label="breadcrumb">
				<Link color="inherit">{''}</Link>
				<Typography color="textPrimary">
					<SearchRoundedIcon style={breadcrumbIconSize} />
					Search
				</Typography>
			</Bc>
		);
	}
	return (
		<Bc separator="›" aria-label="breadcrumb">
			<Link color="inherit">{''}</Link>
			<Link color="inherit" href="#" onClick={breadrumbClickHandler}>
				<SearchRoundedIcon style={breadcrumbIconSize} />
				Search
			</Link>
			<Typography color="textPrimary">
				{paths[2] && paths[2].split(':')[1]}
			</Typography>
		</Bc>
	);
};

export default Breadcrumbs;
