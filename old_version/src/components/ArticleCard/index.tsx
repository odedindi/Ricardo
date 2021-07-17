// ========================= react =========================
import React from 'react';
// ====================== components ======================
import LargeCard from './LargeCard';
import SmallCard from './SmallCard';
// ========================================================

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
	if (props.cardType === 'large') return <LargeCard {...props} />;
	if (props.cardType === 'small') return <SmallCard {...props} />;
	return null;
};
export default ArticleCard;
