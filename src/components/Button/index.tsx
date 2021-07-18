// ====================== react ===========================
import * as React from 'react';
// ==================== components ========================
import SearchButton from './SearchButton';
import AddToFavButton from './AddToFavButton'

const Button: React.FC<ButtonProps> = (props) => {
	if (props.type === 'searchButton')
		return <SearchButton {...props} />;
	if (props.type === 'addToFavButton') return <AddToFavButton {...props} />;
	
	return null;
};

export default Button;
