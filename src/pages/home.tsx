// ====================== react ===========================
import * as React from 'react';
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
import SearchInput from '../components/Input';
// ========================================================

const HomePage: React.FC = () => {
	const history = useHistory();
	const [searchText, setSearchText] = React.useState<string>('');
	const [isButtonDisabled, setIsButtonDisabled] =
		React.useState<boolean>(true);
	React.useEffect(() => {
		if (searchText.length > 0) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	}, [searchText]);
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
				value={searchText}
				onChangeHandler={onChangeHandler}
				onClickHandler={onClickHandler}
			/>
			<Button
				isButtonDisabled={isButtonDisabled}
				onClickHandler={onClickHandler}>
				<SearchSharpIcon fontSize="small" />
				Search
			</Button>
		</HomePageWrapper>
	);
};

export default HomePage;
