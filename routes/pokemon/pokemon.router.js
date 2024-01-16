const express = require('express')

const pokemonRouter = express.Router()
const pokemonController = require('./pokemon.controller')

pokemonRouter.get('/all' , pokemonController.getAllPokemon )
pokemonRouter.get('/:id' , pokemonController.getSpecificPokemon )

module.exports = pokemonRouter