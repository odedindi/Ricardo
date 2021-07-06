
// ======================== style ========================
import { makeStyles } from '@material-ui/core/styles';

// ====================== components =====================
import { Card, CardActionArea, CardActions, CardContent, 
    CardMedia, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: 245,
    },
    content: {
        height: 130,
        padding: '0.75rem 1.65rem',
    },
    media: {
        height: 10,
        paddingTop: '56.25%', // 16:9
    },
    price: {
        fontFamily: 'sans-serif',
        fontSize: 16
    },
});


const ArticleCard = ({ buyNowPrice, endDate, id, imageUrl, onClick, title }) => {
    const classes = useStyles();

    const datePrettier = (string) => {
        const splitedString = string.split('T')
        return `${ splitedString[0] } at ${ splitedString[1].slice(0,-1) }`
    }

    return (
        <Card className={ classes.root }>
            <CardActionArea onClick={ onClick }>
                <CardMedia
                    className={ classes.media }
                    image={ imageUrl }
                    title="Product's Image"
                />
                <CardContent className={ classes.content }>
                    <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="h2"
                        paragraph={ true }
                    >
                    { title }
                    </Typography>

                    <Typography variant="body2" component="p">
                    Ending on: <strong>{ datePrettier(endDate) }</strong>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Typography 
                className={ classes.price }
                variant="body2" 
                component="p"
            >
                { buyNowPrice } CHF
            </Typography>
            </CardActions>
        </Card>
    );
};

export default ArticleCard;
