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

const HomePage = () => {
	const history = useHistory();
	const [, dispatch] = useStore();
	const [searchText, setSearchText] = React.useState('');
	const [isButtonDisabled, setIsButtonDisabled] =
		React.useState(true);

	React.useEffect(() => {
		if (searchText.length) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	}, [searchText]);

	const onChangeHandler = ({ target }) => {
		setSearchText(target.value);
	};

	const onClickHandler = () => {
		fetchSearchResults(searchText).then((data) => {
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
				state={searchText}
				isButtonDisabled={isButtonDisabled}
				onClickHandler={onClickHandler}>
				<SearchSharpIcon fontSize="small" />
				Search
			</Button>
		</HomePageWrapper>
	);
};

export default HomePage;
