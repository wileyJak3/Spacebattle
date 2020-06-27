//
//* ─── NOTES ──────────────────────────────────────────────────────────────────────
// NOTE  
//~  Alien Race: Xatteol


//? ────────────────────────────────────────────────────────────────────────────────


console.log("working")


//
//* ───SECTION GLOBAL VARIABLES ───────────────────────────────────────────────────────────
//

let playerShipStats = {}
let alienShipStats = {}
let currPSStats = {}
let currASStats = {}
//? ────────────────────────────────────────────────────────────────────────────────


//
//* ───SECTION GLOBAL FUNCTIONS ───────────────────────────────────────────────────────────
//


let establishCurrentStats = () => {
    //currPSStats = Object.entries(playerShipStats)
    currPSStats = Object.assign({}, playerShipStats);
    currASStats = Object.assign({}, alienShipStats);
}
let establishCurrentALienStats = () => {
    currASStats = Object.assign({}, alienShipStats); //new Map(Object.entries(alienShipStats))
}
let establishCurrentPlayerStats = () => {
    currASStats = Object.assign({}, playerShipStats); //new Map(Object.entries(alienShipStats))
}


let gameStart = () => {




}
//? ────────────────────────────────────────────────────────────────────────────────


//
//* ─── SECTION SHIP METHODS ───────────────────────────────────────────────────────
//


class Ship {


    fight() {
        // let PS_hull = this.playerShipStats.hull 
        // let AS_hull = this.alienShipStats.hull
        // let PS_AC = this.playerShipStats.accuracy
        // let PS_firepower = this.playerShipStats.firepower
        let loopEnd = 0;
        while (loopEnd == 0) {

            //~ FIXME create a separate function for player attack and alien attack 

            //? Player attacks 
            if (Math.random() < currPSStats.accuracy) {
                currASStats.hull = currASStats.hull - currPSStats.firepower;
                console.log(`${currASStats.name} has been hit for ${currPSStats.firepower}`)
                loopEnd = this.checkHealth()
                if (loopEnd == 1) {
                    break
                }

                console.log(currASStats)
                console.log(currPSStats)
            } else {
                console.log(`${currPSStats.name} misses attack`)

            }

            //? Alien attacks 
            if (Math.random() < currASStats.accuracy) {
                currPSStats.hull = currPSStats.hull - currASStats.firepower
                console.log(`${currPSStats.name} has been hit for ${currASStats.firepower}`)
                loopEnd = this.checkHealth()
                if (loopEnd == 1) {
                    break
                }

                console.log(currASStats)
                console.log(currPSStats)
            } else {
                console.log(`${currASStats.name} misses attack`)


            }
        }
    }

    checkHealth() {

        //~If alien ship destroyed ends the loop
        if (currASStats.hull <= 0) {
            console.log(`${currASStats.name} hull integrity is 0, ${currASStats.name} ship is destroyed`)
            return 1;
        }
        //~If player ship destroyed ends the loop
        if (currPSStats.hull <= 0) {
            console.log(`${currPSStats.name} health is 0, ${currPSStats.name} ship is destroyed`)
            return 1
        }
        return 0;
    }

    startFight() {
        let alien_1 = new AlienShip("rathaus")
        alien_1.xatteoScout()
        establishCurrentStats()
        this.fight()

    }
    continueFight() {
        establishCurrentALienStats()
        this.fight()
    }
    // xatteoScout() {
    //     this.alienShipStats = {
    //         name: this.name,
    //         hull: this.randRangeNum(6, 3),
    //         firepower: this.randRangeNum(4, 2),
    //         barrier: 0,
    //         accuracy: this.randRangeDouble(.8, .6)
    //     }

    // }



    //* ───SECTION RANDOM METHODS ─────────────────────────────────────────────────────────────
    // ~need to create methods to randomize hull,firepower, barrier, and accuracy

    randRangeNum(max, min) {
        let randVal = Math.floor(Math.random() * ((max - min) + 1))
        return randVal + min
    }

    randRangeDouble(max, min) {
        let randVal = (Math.random() * ((max - min))).toFixed(2)
        return +randVal + min
    }
    //? ────────────────────────────────────────────────────────────────────────────────

}
//? ────────────────────────────────────────────────────────────────────────────────



//
//* ─── SECTION PLAYER SHIP ─────────────────────────────────────────────────────────
//


class PlayerShip extends Ship {

    //playerShipStats_2 = super.playerShipStats

    constructor(name) {
        super();
        this.name = name
    }

    ussSchwarzenegger() {
        playerShipStats = {
            name: this.name,
            hull: 20,
            firepower: 3,
            barrier: 50,
            accuracy: .7
        }
    }

    getPlayerShipHull() {
        return this.playerShipStats.health
    }

}
//? ────────────────────────────────────────────────────────────────────────────────

//
//* ───SECTION ALIEN SHIP METHODS ─────────────────────────────────────────────────────────
//

//! Create a player ship (health (hull),damage (firepower), Barrier (barrier), & Accuracy (accuracy))
class AlienShip extends Ship {

    // hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8

    //alienShipStats = this.currASStats


    constructor(name) {
        super();
        this.name = name
    }

    xatteoScout() {
        alienShipStats = {
            name: this.name,
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
        }
    }

    


    getAlienShipHull() {
        return this.alienShipStats.health
    }



    // startFight(){
    //     establishCurrentStats()
    //     this.fight()     
    // }
    // continueFight(){
    //     establishCurrentALienStats()
    //     this.fight()     
    // }

}

//? ────────────────────────────────────────────────────────────────────────────────


//
//* ───SECTION FUNCTION CALLS ─────────────────────────────────────────────────────────────
//
let player = new PlayerShip("Wiley")
player.ussSchwarzenegger()

// let alien_1 = new AlienShip("rathaus")
// alien_1.xatteoScout()

// console.log(alien_1.getHealth())
//console.log(alien_1)
// console.log(alien_1.alienShipStats) // works
// console.log(alien_1.currASStats)
// console.log(alien_1.alienShipStats_2)

// establishCurrentStats()
// alien_1.fight()
// alien_1.startFight()
player.startFight()

//player.establishCurrentStats()
// console.log(alienShipStats)
// console.log(playerShipStats)
// console.log(currASStats)
// console.log(currPSStats)

// establishCurrentStats()
// alien_1.fight()

// establishCurrentALienStats()
// alien_1.fight()
// alien_1.continueFight()
// alien_1.continueFight()
 player.continueFight()






// console.log(currASStats)
// console.log(currASStats.name)
//? ────────────────────────────────────────────────────────────────────────────────