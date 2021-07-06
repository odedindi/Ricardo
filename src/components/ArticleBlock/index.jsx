
// ====================== components =====================
import * as S from './style';
import { Card, CardContent, Divider, Typography } from '@material-ui/core'
// ======================= DOMPurify =====================
import DOMPurify from 'dompurify';



const ArticleBlock = ({ article, user }) => {

const { descriptionHtml, price, subtitle, title } = article;
    return (
        <>
            <S.Card>
                <S.Content>
                <S.Title variant="h4" component="h2"
                    gutterBottom paragraph={ true }
                >
                    { title }
                </S.Title>
                <S.Title variant="h6" component="h3"
                    gutterBottom paragraph={ true }
                >
                    { subtitle }
                </S.Title>
                <Divider variant="middle"/>
                <br/>
                <Typography variant="body2" component="p">
                    <strong>Seller:</strong> { user.name }
                </Typography>
                <Typography variant="body2" component="p">
                    <strong>Price:</strong> { price }
                </Typography>
                <br/>
                <Divider variant="middle"/>
                <br/>
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(descriptionHtml)
                    }}
                />
                </S.Content>
            </S.Card>
        </>
    );
};

export default ArticleBlock
