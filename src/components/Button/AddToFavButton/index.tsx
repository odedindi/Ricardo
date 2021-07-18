// ====================== react ===========================
import * as React from 'react';
// ====================== styles ==========================
import Button from '@material-ui/core/Button';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const AddToFavButton: React.FC<AddToFavButtonProps> = ({ id }) => {
	const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

	React.useEffect(() => {
		let favoriteArticles = localStorage.getItem('favoriteArticles');
		const newFavrotiveArticles = new Set(
			JSON.parse(favoriteArticles!),
		);
		if (newFavrotiveArticles.has(id)) {
			setIsFavorite(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickHandler = () => {
		let favoriteArticles = localStorage.getItem('favoriteArticles');
		const newFavrotiveArticles = JSON.parse(favoriteArticles!) || [];

		const setInFavStorage = (array: string[] | number[]) => {
			localStorage.setItem('favoriteArticles', JSON.stringify(array));
		};

		const addToFavoritesHandler = (): void => {
			newFavrotiveArticles.push(id);
			setInFavStorage(newFavrotiveArticles);
			setIsFavorite(!isFavorite);
		};

		const removeFromFavoritesHandler = () => {
			let filteredFavArticles = newFavrotiveArticles.filter(
				(favId: Id) => favId !== id,
			);
			setInFavStorage(filteredFavArticles);
			setIsFavorite(!isFavorite);
		};

		if (!newFavrotiveArticles.length) {
			return addToFavoritesHandler();
		}
		if (newFavrotiveArticles.length) {
			if (isFavorite) {
				return removeFromFavoritesHandler();
			}
		}
		return addToFavoritesHandler();
	};

	return (
		<Button
			variant="contained"
			color="primary"
			size="small"
			fullWidth
			onClick={onClickHandler}
			startIcon={
				isFavorite ? (
					<FavoriteRoundedIcon />
				) : (
					<FavoriteBorderRoundedIcon />
				)
			}>
			{isFavorite ? 'Saved' : 'Save'}
		</Button>
	);
};

export default AddToFavButton;
