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

// store related types
type ChosenArticle =
	| { article: ArticleDetails; user: User }
	| undefined;

type SEARCH_RESULTS = string;
type ARTICLE_CHOSEN = string;

type Action =
	| { type: SEARCH_RESULTS; payload: SearchResponse }
	| { type: ARTICLE_CHOSEN; payload: ChosenArticle };

type State = {
	searchResults: SearchResponse | {};
	chosenArticle: ChosenArticle | {};
};

type Store = [state: State, dispatch: Dispatch<Action>];

// components
type ContainerProps = {
	padding: boolean;
};

type SearchInputProps = {
	onChangeHandler: (
		event: React.ChangeEvent<HTMLInputElement>,
	) => void;
	onClickHandler: () => void;
	value: string;
};

type SearchButtonProps =
	| {
			type: string;
			isButtonDisabled: boolean;
			onClickHandler?: () => void;
	  }
	| any;

type AddToFavButtonProps = {
	type: string;
	id: Id;
};

type ButtonProps = SearchButtonProps | AddToFavButtonProps;

type ProductDetailsCardProps =
	| { article: ArticleDetails; user: User; type: string }
	| any;
type SearchResultsCardProps =
	| { article: SearchArticle; type: string }
	| any;

type ArticleCardProps = LargeCardProps | SmallCardProps;

type PaginationProps = {
	articlesPerPage: number;
	changeArticlesPerPageHandler:
		| ((
				event: React.ChangeEvent<{
					name?: string | undefined;
					value: unknown;
				}>,
				child: React.ReactNode,
		  ) => void)
		| undefined;
	changePageHandler:
		| ((event: React.ChangeEvent<unknown>, page: number) => void)
		| undefined;
	page: number;
	pagesCount: number;
};