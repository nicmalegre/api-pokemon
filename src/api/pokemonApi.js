
//GET ALL POKEMONS FROM THE API
//Return: array of pokemons with name and url
export const getAllPokemons = async (key, count) =>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`);
    return res.json()
}