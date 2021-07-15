// ======================== react =========================
import React from 'react';
// ======================== styles ========================
import * as S from './style';
import { Pagination as MaterialPagination } from '@material-ui/lab';
import { FormControl, InputLabel, Select } from '@material-ui/core';
// ========================================================

const Pagination: React.FC<PaginationProps> = ({
	articlesPerPage,
	changeArticlesPerPageHandler,
	changePageHandler,
	page,
	pagesCount,
}): JSX.Element | null => {
	if (!(pagesCount > 1)) {
		return null;
	}
	return (
		<S.PaginationWrapper>
			<MaterialPagination
				count={pagesCount}
				page={page}
				onChange={changePageHandler}
			/>
			<FormControl variant="outlined" style={{ minWidth: 120 }}>
				<InputLabel htmlFor="articlesPerPage">
					Ads per page
				</InputLabel>
				<Select
					native
					value={articlesPerPage}
					onChange={changeArticlesPerPageHandler}
					label="articlesPerPage"
					inputProps={{
						name: 'articlesPerPage',
						id: 'articlesPerPage',
					}}
                >
					<option aria-label="None" value="" />
					<option value={10}>10</option>
					<option value={25}>25</option>
					<option value={50}>50</option>
				</Select>
			</FormControl>
		</S.PaginationWrapper>
	);
};

export default Pagination;
