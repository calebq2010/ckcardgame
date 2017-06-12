function Player(playerObj) {
	this.hp = 100;
	this.id = playerObj.id;
	this.ip = playerObj.ip;
	this.name = playerObj.name;
	this.meat = 0;
	this.water = 0;
	this.brick = 0;
	this.creature = {};
	this.resource = {};
	this.defense  = {};
	this.playedCards = [];
	this.playedCard = {att: 0, def: 0};

	this.socket = playerObj.socket;
}

Player.prototype = {
	drawCard: function(card) {
		if(card){
            if(card.type === 'resource'){
                this[card.id] += card.total;
            }else{
                if(!this[card.type][card.id]){
                    this[card.type][card.id] = [];
                }
                this[card.type][card.id].push(card);
            }

        }
	},
	playCard: function(card, cb) {
		if(!card)return;
		
		var cardCanBePlayed = true;

        for(var i in card.resourcesNeeded){
            if(this[i] < card.resourcesNeeded[i]){
                cardCanBePlayed = false;
            }
        }

        if(cardCanBePlayed){
            for(var i in card.resourcesNeeded)
                this[i] -= card.resourcesNeeded[i];

            this.playedCards.push(card);
            for(var i in this[card.type])
                if(this[card.type][i][0] === card)this[card.type][i].pop();
        	
        	this.updateClient();
        }else{
        	cb();
        }

	},
	// [{name: 'T-Rex', total: 10}, {name: 'Pteradactol', total 3}]
	getList: function (type) {
		return Object.keys(this[type]).map(v => ({name: v, total: this[type][v].length}));
	},
	updateClient: function() {
		this.socket.emit('updatePlayer', this.client());	
	},
	createOpponent: function(opponent) {
		this.socket.emit('createOpponent', opponent);
	},
	client: function() {
		return {
			name: this.name,
			id: this.id,
			hp: this.hp,
			creatures: this.getList('creature'),
			defense: this.getList('defense'),
			resources: this.getList('resource'),
			meat: this.meat,
			water: this.water,
			brick: this.brick,
			playedCards: this.playedCards
		}
	}
}

module.exports = Player;