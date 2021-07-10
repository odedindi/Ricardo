// ========================= react =========================
import React from 'react';
// ======================== style ========================
import * as S from './style';
// ====================== components =====================
import {
	CardActionArea,
	CardActions,
	Typography,
} from '@material-ui/core';
// =======================================================

const SmallCard: React.FC<SmallCardProps> = ({
	buyNowPrice,
	endDate,
	imageUrl,
	onClick,
	title,
}) => {
	const datePrettier = (string: string) => {
		const splitedString = string.split('T');
		return `${splitedString[0]} at ${splitedString[1].slice(0, -1)}`;
	};

	return (
		<S.Card>
			<CardActionArea onClick={onClick}>
				<S.Image image={imageUrl} title={title} />
				<S.Content>
					<S.TitleWrapper>
						<S.Title variant="h6" component="h2">
							{title}
						</S.Title>
					</S.TitleWrapper>
					<S.EndingWrapper>
						<Typography variant="body2" component="p">
							Ending on: <strong>{datePrettier(endDate)}</strong>
						</Typography>
					</S.EndingWrapper>
				</S.Content>
				<CardActions>
					<S.Price variant="body2" component="p">
						{buyNowPrice} CHF
					</S.Price>
				</CardActions>
			</CardActionArea>
		</S.Card>
	);
};

export default SmallCard;
