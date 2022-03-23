

let baseURL = 'https://api.tvmaze.com/';

export default {
    async getTvShow(){
        let output = await fetch(baseURL+'shows');
        return await output.json();
    },
    async getTvShowDetails(id){
        let output = await fetch(baseURL+`shows/${id}`);
        return await output.json();
    },
    async getTvShowByPage(pageNumber){
        let output = await fetch(baseURL+`shows?page=${pageNumber}`);
        return await output.json();
    },
    async getSearchResult(searchText){
        let output = await fetch(baseURL+`search/shows?q=${searchText}`);
        return await output.json();
    }
}







