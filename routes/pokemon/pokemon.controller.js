const pokemonModel = require('../../model/pokemon/pokemon.model')

function getAllPokemon(req,res)
{
    res.send(pokemonModel.sendAllPokemon())
}

function getSpecificPokemon(req,res)
{
    const id = req.params.id
    const pokemon = pokemonModel.getAPokemon(id)
    console.log(pokemon)
    if (pokemon)
    {
        res.send(pokemon)
    }
    else
    {
        res.send("Pokemon not found")
    }
}

module.exports ={
    getAllPokemon,
    getSpecificPokemon
}