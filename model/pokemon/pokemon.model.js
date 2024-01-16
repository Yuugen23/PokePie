const pokemon = [

    {
        dexNo: 1,
        name: 'Bulbasaur',
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        type: ['Grass', 'Poison'],
        species: 'Seed Pokémon',
        height: '0.7 m (2′04″)',
        weight: '6.9 kg (15.2 lbs)',
        abilities: ['Overgrow', 'Chlorophyll'],
        training: {
            evYield: '1 Sp. Atk',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '64',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Grass, Monster',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            45, 49, 49, 65,
            65, 45, 318
        ],
        maxStats: [294, 216, 216, 251, 251, 207]
    },
    {
        dexNo: 2,
        name: 'Ivysaur',
        image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
        type: ['Grass', 'Poison'],
        species: 'Seed Pokémon',
        height: '1.0 m (3′03″)',
        weight: '13.0 kg (28.7 lbs)',
        abilities: ['Overgrow', 'Chlorophyll'],
        training: {
            evYield: '1 Sp. Atk, 1 Sp. Def',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '142',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Grass, Monster',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            60, 62, 63, 80,
            80, 60, 405
        ],
        maxStats: [324, 245, 247, 284, 284, 240]
    },
    {
        dexNo: 3,
        name: 'Venusaur',
        image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
        type: ['Grass', 'Poison'],
        species: 'Seed Pokémon',
        height: '2.0 m (6′07″)',
        weight: '100.0 kg (220.5 lbs)',
        abilities: ['Overgrow', 'Chlorophyll'],
        training: {
            evYield: '2 Sp. Atk, 1 Sp. Def',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '236',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Grass, Monster',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            80, 82, 83, 100,
            100, 80, 525
        ],
        maxStats: [364, 289, 291, 328, 328, 284]
    },
    {
        dexNo: 3.1,
        name: 'Mega Venusaur',
        image: 'https://img.pokemondb.net/artwork/venusaur-mega.jpg',
        type: ['Grass', 'Poison'],
        species: 'Seed Pokémon',
        height: '2.4 m (7′10″)',
        weight: '155.5 kg (342.8 lbs)',
        abilities: ['Thick Fat'],
        training: {
            evYield: '\n2 Sp. Atk, 1 Sp. Def ',
            catchRate: '\n45 (5.9% with PokéBall, full HP)\n',
            baseFriendShip: '\n50 (normal)\n',
            baseExp: '281',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Grass, Monster',
            eggCycles: '20 (4,884–5,140 steps)\n'
        },
        stats: [
            80, 100, 123,
            122, 120, 80,
            625
        ],
        maxStats: [364, 328, 379, 377, 372, 284]
    },
    {
        dexNo: 4,
        name: 'Charmander',
        image: 'https://img.pokemondb.net/artwork/charmander.jpg',
        type: ['Fire'],
        species: 'Lizard Pokémon',
        height: '0.6 m (2′00″)',
        weight: '8.5 kg (18.7 lbs)',
        abilities: ['Blaze', 'Solar Power'],
        training: {
            evYield: '1 Speed',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '62',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Dragon, Monster',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            39, 52, 43, 60,
            50, 65, 309
        ],
        maxStats: [282, 223, 203, 240, 218, 251]
    },
    {
        dexNo: 5,
        name: 'Charmeleon',
        image: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
        type: ['Fire'],
        species: 'Flame Pokémon',
        height: '1.1 m (3′07″)',
        weight: '19.0 kg (41.9 lbs)',
        abilities: ['Blaze', 'Solar Power'],
        training: {
            evYield: '1 Sp. Atk, 1 Speed',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '142',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Dragon, Monster',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            58, 64, 58, 80,
            65, 80, 405
        ],
        maxStats: [320, 249, 236, 284, 251, 284]
    },
    {
        dexNo: 6,
        name: 'Charizard',
        image: 'https://img.pokemondb.net/artwork/charizard.jpg',
        type: ['Fire', 'Flying'],
        species: 'Flame Pokémon',
        height: '1.7 m (5′07″)',
        weight: '90.5 kg (199.5 lbs)',
        abilities: ['Blaze', 'Solar Power'],
        training: {
            evYield: '3 Sp. Atk',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '267',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Dragon, Monster',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            78, 84, 78, 109,
            85, 100, 534
        ],
        maxStats: [360, 293, 280, 348, 295, 328]
    },
    {
        dexNo: 6.1,
        name: 'Mega Charizard X',
        image: 'https://img.pokemondb.net/artwork/charizard-mega-x.jpg',
        type: ['Fire', 'Dragon'],
        species: 'Flame Pokémon',
        height: '1.7 m (5′07″)',
        weight: '110.5 kg (243.6 lbs)',
        abilities: ['Tough Claws'],
        training: {
            evYield: '\n3 Sp. Atk ',
            catchRate: '\n45 (5.9% with PokéBall, full HP)\n',
            baseFriendShip: '\n50 (normal)\n',
            baseExp: '285',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Dragon, Monster',
            eggCycles: '20 (4,884–5,140 steps)\n'
        },
        stats: [
            78, 130, 111,
            130, 85, 100,
            634
        ],
        maxStats: [360, 394, 353, 394, 295, 328]
    },
    {
        dexNo: 6.2,
        name: 'Mega Charizard Y',
        image: 'https://img.pokemondb.net/artwork/charizard-mega-y.jpg',
        type: ['Fire', 'Flying'],
        species: 'Flame Pokémon',
        height: '1.7 m (5′07″)',
        weight: '100.5 kg (221.6 lbs)',
        abilities: ['Drought'],
        training: {
            evYield: '\n3 Sp. Atk ',
            catchRate: '\n45 (5.9% with PokéBall, full HP)\n',
            baseFriendShip: '\n50 (normal)\n',
            baseExp: '285',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Dragon, Monster',
            eggCycles: '20 (4,884–5,140 steps)\n'
        },
        stats: [
            78, 104, 78,
            159, 115, 100,
            634
        ],
        maxStats: [360, 337, 280, 458, 361, 328],
    },
    {
        dexNo: 7,
        name: 'Squirtle',
        image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
        type: ['Water'],
        species: 'Tiny Turtle Pokémon',
        height: '0.5 m (1′08″)',
        weight: '9.0 kg (19.8 lbs)',
        abilities: ['Torrent', 'Rain Dish'],
        training: {
            evYield: '1 Defense',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '63',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Monster, Water 1',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            44, 48, 65, 50,
            64, 43, 314
        ],
        maxStats: [292, 214, 251, 218, 249, 203]
    },
    {
        dexNo: 8,
        name: 'Wartortle',
        image: 'https://img.pokemondb.net/artwork/wartortle.jpg',
        type: ['Water'],
        species: 'Turtle Pokémon',
        height: '1.0 m (3′03″)',
        weight: '22.5 kg (49.6 lbs)',
        abilities: ['Torrent', 'Rain Dish'],
        training: {
            evYield: '1 Defense, 1 Sp. Def',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '142',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Monster, Water 1',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            59, 63, 80, 65,
            80, 58, 405
        ],
        maxStats: [322, 247, 284, 251, 284, 236]
    },
    {
        dexNo: 9,
        name: 'Blastoise',
        image: 'https://img.pokemondb.net/artwork/blastoise.jpg',
        type: ['Water'],
        species: 'Shellfish Pokémon',
        height: '1.6 m (5′03″)',
        weight: '85.5 kg (188.5 lbs)',
        abilities: ['Torrent', 'Rain Dish'],
        training: {
            evYield: '3 Sp. Def',
            catchRate: '45 (5.9% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '239',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Monster, Water 1',
            eggCycles: '20 (4,884–5,140 steps)'
        },
        stats: [
            79, 83, 100, 85,
            105, 78, 530
        ],
        maxStats: [362, 291, 328, 295, 339, 280]
    },
    {
        dexNo: 9.1,
        name: 'Mega Blastoise',
        image: 'https://img.pokemondb.net/artwork/blastoise-mega.jpg',
        type: ['Water'],
        species: 'Shellfish Pokémon',
        height: '1.6 m (5′03″)',
        weight: '101.1 kg (222.9 lbs)',
        abilities: ['Mega Launcher'],
        training: {
            evYield: '\n3 Sp. Def ',
            catchRate: '\n45 (5.9% with PokéBall, full HP)\n',
            baseFriendShip: '\n50 (normal)\n',
            baseExp: '284',
            growthRate: 'Medium Slow'
        },
        breeding: {
            gender: '87.5% male, 12.5% female',
            eggGroup: 'Monster, Water 1',
            eggCycles: '20 (4,884–5,140 steps)\n'
        },
        stats: [
            79, 103, 120,
            135, 115, 78,
            630
        ],
        maxStats: [362, 335, 372, 405, 361, 280]
    },
    {
        dexNo: 10,
        name: 'Caterpie',
        image: 'https://img.pokemondb.net/artwork/caterpie.jpg',
        type: ['Bug'],
        species: 'Worm Pokémon',
        height: '0.3 m (1′00″)',
        weight: '2.9 kg (6.4 lbs)',
        abilities: ['Shield Dust', 'Run Away'],
        training: {
            evYield: '1 HP',
            catchRate: '255 (33.3% with PokéBall, full HP)',
            baseFriendShip: '50 (normal)',
            baseExp: '39',
            growthRate: 'Medium Fast'
        },
        breeding: {
            gender: '50% male, 50% female',
            eggGroup: 'Bug',
            eggCycles: '15 (3,599–3,855 steps)'
        },
        stats: [
            45, 30, 35, 20,
            20, 45, 195
        ],
        maxStats: [294, 174, 185, 152, 152, 207]
    }
]

function sendAllPokemon()
{
    return pokemon
}

function getAPokemon(id)
{
    return pokemon.filter(ele =>{
        console.log(ele.dexNo , Number(id))
        console.log(Number(ele.dexNo) === Number(id))
        if(Number(ele.dexNo) === Number(id) )
        {
            return ele
        }
    })
}

module.exports={
    sendAllPokemon,
    getAPokemon
}