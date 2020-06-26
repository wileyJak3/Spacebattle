//
//~ ─── NOTES ──────────────────────────────────────────────────────────────────────
//* NOTE  
//* Alien Race: Xatteol

//~ ────────────────────────────────────────────────────────────────────────────────


console.log("working")



class Ship {
    playerShipStats = {}
    alienShipStats = {}

    currPSStats = this.playerShipStats
    currASStats = this.alienShipStats

    fight(){
        // let PS_hull = this.playerShipStats.hull 
        // let AS_hull = this.alienShipStats.hull
        // let PS_AC = this.playerShipStats.accuracy
        // let PS_firepower = this.playerShipStats.firepower
        while((this.currPSStats.hull =! 0) || (this.currASStats.hull =! 0)){
            
            //? Player attacks 
            (Math.random()< this.currPSStats.accuracy) ? ( this.currASStats.hull = this.currASStats.hull - this.currPSStats.firepower)
            :console.log(`${this.currPSStats.Name} misses attack`) 

            //? Alien attacks 
            (Math.random()< this.currASStats.accuracy) ? ( this.currPSStats.hull = this.currPSStats.hull - this.currASStats.firepower)
            :console.log(`${this.currASStats.Name} misses attack`) 


        }
    }

}


class PlayerShip extends Ship {
    
    playerShipStats = super.playerShipStats

    constructor(name) {
        super();
        this.name = name
    }

    ussSchwarzenegger() {
        super.playerShipStats = {
            Name: this.Name,
            hull: 20,
            firepower: 5,
            barrier: 50,
            accuracy: .7
        }
    }

    getPlayerShipHull() {
        return this.playerShipStats.health
    }

}

//! Create a player ship (health (hull),damage (firepower), Barrier (barrier), & Accuracy (accuracy))
class AlienShip extends Ship {

    // hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8

     alienShipStats = super.alienShipStats


    constructor(name) {
        super();
        this.name = name
    }

    xatteoScout() {
        super.alienShipStats = {
            Name: this.Name,
            hull: 100,
            firepower: 10,
            barrier: 0,
            accuracy: .35
        }
    }

    getAlienShipHull() {
        return this.alienShipStats.health
    }

}


//
// ─── FUNCTION CALLS ─────────────────────────────────────────────────────────────
//
let alien_1 = new AlienShip("rathaus")
alien_1.xatteoScout()
// console.log(alien_1.getHealth())
console.log(alien_1)

let player = new PlayerShip("Wiley")
player.ussSchwarzenegger()
// console.log(player.getPlayerShiphull))
console.log(player)
