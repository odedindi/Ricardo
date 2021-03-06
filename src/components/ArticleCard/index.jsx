import ProductDetailsCard from './ProductDetailsCard';
import SearchResultsCard from './SearchResultsCard';

const ArticleCard = (props) => {
	if (props.type === 'productDetailsCard')
		return <ProductDetailsCard {...props} />;
	if (props.type === 'searchResultsCard')
		return <SearchResultsCard {...props} />;
	return null;
};
export default ArticleCard;
