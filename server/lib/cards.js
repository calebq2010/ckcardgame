var resourceTypes = [
    {
        type: 'resource',
        name: 'Water',
        id: 'water',
        amount: 4,
        total: 1
    }, 
    {
        type: 'resource',
        name: 'Meat', 
        id: 'meat',
        amount: 4,
        total: 1
    },
    {
        type: 'resource',
        name: 'Brick', 
        id: 'brick',
        amount: 4,
        total: 1
    },
    {
        type: 'resource',
        name: 'Leaf',
        id: 'leaf',
        amount: 4,
        total: 1
    },
    {
        type: 'resource',
        name: 'Water x2', 
        id: 'water',
        amount: 2,
        total: 2
    },
    {
        type: 'resource',
        name: 'Water x5', 
        id: 'water',
        amount: 5,
        total: 5
    },
    {
        type: 'resource',
        name: 'Meat x2', 
        id: 'meat',
        amount: 2,
        total: 2
    },
    {
        type: 'resource',
        name: 'Meat x5', 
        id: 'meat',
        amount: 5,
        total: 5
    },
    {
        type: 'resource',
        name: 'Brick x2',
        id: 'brick',
        amount: 2,
        total: 2
    },
    {
        type: 'resource',
        name: 'Brick x5',
        id: 'brick',
        amount: 5,
        total: 5
    },
    {
        type: 'resource',
        name: 'Leaf x2',
        id: 'leaf',
        amount: 2,
        total: 2
    },
    {
        type: 'resource',
        name: 'Leaf x5',
        id: 'leaf',
        amount: 5,
        total: 5
    }
]
var cards = [
    {
        name: 'Pterodactyl',
        type: 'creature',
        id: 'pterodactyl',
        resourcesNeeded: {
            meat: 2,
            water: 1
        },
        att: 10,
        def: 3
    },
    {
        name: 'T-Rex',
        id:  'trex',
        type: 'creature',
        resourcesNeeded: {
            meat: 5,
            water: 3
        },
        att: 25,
        def: 5
    },
    {
        name: 'Raptor',
        type: 'creature',
        id:  'raptor',
        resourcesNeeded: {
            meat: 3,
            water: 5
        },
        att: 15,
        def: 7
    },
    {
        name: 'Fence',
        type: 'defense',
        id:  'fence',
        resourcesNeeded: {
            brick: 2
        },
        def: 5
    },
    {
        name: 'Wall',
        type: 'defense',
        id:  'wall',
        resourcesNeeded: {
            brick: 3
        },
        def: 10
    },
    {
        name: 'Fortress',
        type: 'defense',
        id:  'fortress',
        resourcesNeeded: {
            brick: 8
        },
        def: 15
    }
];

for(var j = 0; j < resourceTypes.length; j++)
    for(var i = 0; i < resourceTypes[i].amount; i++)
        cards.push(resourceTypes[j]);


module.exports = cards;