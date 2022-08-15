const API_URL = 'https://rickandmortyapi.com/api'

export const getCharacter =  async url => {

    return fetch(API_URL + url).then((response) => response.json())
    
}