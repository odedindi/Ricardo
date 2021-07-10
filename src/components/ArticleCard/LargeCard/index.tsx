// ========================= react =========================
import React from 'react';
// ====================== components =====================
import * as S from './style';
import { Divider, Typography } from '@material-ui/core';
// ======================= DOMPurify =====================
import DOMPurify from 'dompurify';
// =======================================================

const LargeCard: React.FC<LargeCardProps> = ({ article, user }) => (
	<>
		<S.Card>
			<S.Content>
				<S.Title
					variant="h4"
					component="h2"
					gutterBottom
					paragraph={true}>
					{article.title}
				</S.Title>
				<S.Title
					variant="h6"
					component="h3"
					gutterBottom
					paragraph={true}>
					{article.subtitle}
				</S.Title>
				<Divider variant="middle" />
				<br />
				<Typography variant="body2" component="p">
					<strong>Seller:</strong> {user.name}
				</Typography>
				<Typography variant="body2" component="p">
					<strong>Price:</strong> {article.price}
				</Typography>
				<br />
				<Divider variant="middle" />
				<br />
				<div
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(article.descriptionHtml),
					}}
				/>
			</S.Content>
		</S.Card>
	</>
);
export default LargeCard;
