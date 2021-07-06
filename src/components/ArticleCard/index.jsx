
// ======================== style ========================
import * as S from './style'; 
// ====================== components =====================
import { CardActionArea, CardActions, Typography } from '@material-ui/core';



const ArticleCard = ({ buyNowPrice, endDate, imageUrl, onClick, title }) => {

    const datePrettier = (string) => {
        const splitedString = string.split('T')
        return `${ splitedString[0] } at ${ splitedString[1].slice(0,-1) }`
    }

    return (
        <S.Card>

            <CardActionArea onClick={ onClick }>
                <S.Image 
                    image={ imageUrl }
                    title={ title }
                />
                <S.Content>
                    <S.Title variant="h6" component="h2"
                        gutterBottom paragraph={ true }
                    >
                    { title }
                    </S.Title>
    
                    <Typography variant="body2" component="p">
                    Ending on: <strong>{ datePrettier(endDate) }</strong>
                    </Typography>
                </S.Content>
            </CardActionArea>
            <CardActions>
            <S.Price variant="body2" component="p">
                { buyNowPrice } CHF
            </S.Price>
            </CardActions>
        </S.Card>
    );
};

export default ArticleCard;
