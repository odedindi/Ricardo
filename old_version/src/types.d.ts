/*
    types to be improved:
    because of **any**: 
    LargeCardProps
    SmallCardProps

    the state type in searchResults and productDetails pages

*/

type Id = string | number;

type SearchArticle = {
	id: Id;
	title: string;
	endDate: string;
	imageUrl: string;
	buyNowPrice: number;
};

type ArticleDetails = {
	id: Id;
	title: string;
	subtitle: string;
	price: number;
	descriptionHtml: string;
	imageUrl: string;
	sellerId: Id;
};

type User = { id: Id; name: string } | undefined;

// fetch responses types
type SearchResponse =
	| { articles: SearchArticle[]; totalCount: number }
	| undefined;

type ArticleResponse = ArticleDetails;

type GetUserResponse = User;

// components
type ContainerProps = {
	padding: boolean;
};

type SearchInputProps = {
	onChangeHandler: (
		event: React.ChangeEvent<HTMLInputElement>,
	) => void;
	onClickHandler: () => void;
	state: string;
};

type ButtonProps = {
	active: boolean;
	onClickHandler?: () => void;
};

type LargeCardProps =
	| { article: ArticleDetails; user: User; cardType: string }
	| any;
type SmallCardProps =
	| { article: SearchArticle; cardType: string }
	| any;
type ArticleCardProps = LargeCardProps | SmallCardProps;

// cart
type CartItems = SearchArticle[];

type CartButtonProps = {
	onClick: () => void;
	buttonType?: string;
};

type CartProps = {
	cartItems: CartItems;
	removeFromCartHandler: (id: Id) => void;
};

// store related types
type ChosenArticle =
	| { article: ArticleDetails; user: User }
	| undefined;

type ReducerActionType = string;

type SEARCH_RESULTS = ReducerActionType;
type ARTICLE_CHOSEN = ReducerActionType;
type ADD_TO_CART = ReducerActionType;
type REMOVE_FROM_CART = ReducerActionType;

type Action =
	| { type: SEARCH_RESULTS; payload: SearchResponse }
	| { type: ARTICLE_CHOSEN; payload: ChosenArticle }
	| { type: ADD_TO_CART; payload: SearchArticle }
	| { type: REMOVE_FROM_CART; payload: Id };

type State = {
	searchResults: SearchResponse | {};
	chosenArticle: ChosenArticle | {};
	cartItems: CartItems | any;
};

type Store = {
	state: State;
	dispatch: Dispatch<Action>;
};
