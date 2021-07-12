// ====================== react ===========================
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// ====================== styles ==========================
import { HomePageWrapper } from '../styles/wrappers';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
// ====================== fetches =========================
import { useStore } from '../store';
import { fetchSearchResults } from '../helpers/fetches';
import * as ACTION from '../store/actions';
// ==================== components ========================
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';
// ========================================================

const HomePage: React.FC = () => {
	const history = useHistory();
	const [searchText, setSearchText] = useState<string>('');
	const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
	useEffect(() => {
		if(searchText.length > 0) {
			setIsButtonActive(true)
		} else {
			setIsButtonActive(false);
		}
	}, [searchText])
	const [, dispatch]: Store = useStore();

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
		<HomePageWrapper>
			<SearchInput
				state={searchText}
				onChangeHandler={onChangeHandler}
				onClickHandler={onClickHandler}
			/>
			<Button
				active={isButtonActive}
				onClickHandler={onClickHandler}>
				<SearchSharpIcon fontSize="small" />
				Search
			</Button>
		</HomePageWrapper>
	);
};

export default HomePage;
