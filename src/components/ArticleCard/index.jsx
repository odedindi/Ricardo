import LargeCard from './LargeCard';
import SmallCard from './SmallCard';


const ArticleCard = (props) => {
    if (props.type === 'large') return <LargeCard { ...props }/>
    if (props.type === 'small') return <SmallCard { ...props }/>
    return null;
};
export default ArticleCard;
