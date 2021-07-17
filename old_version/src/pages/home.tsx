// ====================== react ===========================
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// ====================== styles ==========================
import { HomePageWrapper } from '../styles/wrappers';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
// ====================== fetches =========================
import { useStore } from '../store';
import { fetchSearchResults } from '../helpers/fetches';
import * as ACTION from '../store/actions';
// ==================== components ========================
import Button from '../components/Buttons/Button';
import SearchInput from '../components/SearchInput';
// ========================================================

const HomePage: React.FC = () => {
	const history = useHistory();
	const [searchText, setSearchText] = useState<string>('');
	const { dispatch }: Store = useStore();

	const onChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setSearchText(event.target.value);
	};

	const onClickHandler = () => {
		fetchSearchResults(searchText).then((data: SearchResponse) => {
			dispatch(ACTION.searchResults(data));
			history.push(`/search/:${searchText}`);
		});
	};

	return (
		<>
			<HomePageWrapper>
				<SearchInput
					state={searchText}
					onChangeHandler={onChangeHandler}
					onClickHandler={onClickHandler}
				/>
				<Button
					active={searchText.length > 1 ? true : false}
					onClickHandler={onClickHandler}>
					<SearchSharpIcon fontSize="small" />
					Search
				</Button>
			</HomePageWrapper>
		</>
	);
};

export default HomePage;