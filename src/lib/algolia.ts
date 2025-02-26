import algoliasearch from "algoliasearch/lite";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "";
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || "";

export const searchClient = algoliasearch(appId, apiKey);
export const searchIndex = searchClient.initIndex("products");
