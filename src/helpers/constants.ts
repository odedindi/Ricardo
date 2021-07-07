// constants for the store 
export const SEARCH_RESULTS: SEARCH_RESULTS = 'SEARCH_RESULTS'; 
export const ARTICLE_CHOSEN: ARTICLE_CHOSEN = 'ARTICLE_CHOSEN'; 



// constants for fetching
export const apiToken: string | undefined = process.env.REACT_APP_RICARDO_RECRUITMENT_API_TOKEN
export const baseUrl: string = 'https://www.ricardo.ch/api/frontend/recruitment';