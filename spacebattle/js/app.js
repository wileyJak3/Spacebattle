//
//* ─── NOTES ──────────────────────────────────────────────────────────────────────
// NOTE  
//~  Alien Race: Xatteol


//? ────────────────────────────────────────────────────────────────────────────────


console.log("working")

//
//* ─── SECTION SHIP METHODS ───────────────────────────────────────────────────────
//

class Ship {
    scoutIndex = 0;



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
        // let alienShipObj = new AlienShip()
        // console.log(alienShipObj.scoutShipObjArray[this.scoutInd]) 
        globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[this.scoutIndex])
        
        // alienShipObj.setAlienShipStats(tempObj)
        establishCurrentStats()
        this.scoutIndex++
        this.fight()

        //! return alien object
    }
    continueFight() { //! place the function in continue then use the object to call another alien
        globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[this.scoutIndex])
        establishCurrentALienStats()
        this.scoutIndex++
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


    constructor() {
        super();
        // this.name = name
    }

    //* Create array of alien scoutShip Models
    scoutShipObjArray = [{

            // xatteoScout() {
            // alienShipStats = {
            name: "Rathlus",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            //}
            // }
        },
        {
            // xatteoScout_Klaok() {
            // alienShipStats = {
            name: "Klaok",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            // }
            // }
        },
        {
            // xatteoScout_Neleux() {
            // alienShipStats = {
            name: "Neleux",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            // }
            // }
        },
        {
            // xatteoScout_Abkloren() {
            // alienShipStats = {
            name: "Abkloren",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            // }
            // }
        },
        {
            // xatteoScout_Grotin() {
            // alienShipStats = {
            name: "Grotin",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            //}
            // }
        },
        {
            // xatteoScout_Spaalorn() {
            // alienShipStats = {
            name: "Spaalorn",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            //  }
            // }
        },
        {
            // xatteoScout_Blarm() {
            // alienShipStats = {
            name: "Blarm",
            hull: this.randRangeNum(6, 3),
            firepower: this.randRangeNum(4, 2),
            barrier: 0,
            accuracy: this.randRangeDouble(.8, .6)
            // }
            // }
        }
    ]

    setAlienShipStats(obj) {
        alienShipStats = obj 
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


//
//* ───SECTION GLOBAL VARIABLES ───────────────────────────────────────────────────────────
//

let playerShipStats = {}
let alienShipStats = {}
let currPSStats = {}
let currASStats = {}
let globalAlienObj = new AlienShip();
let player = new PlayerShip("Wiley")
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



//* ───SECTION FUNCTION CALLS ─────────────────────────────────────────────────────────────
//
//let player = new PlayerShip("Wiley")
player.ussSchwarzenegger()

// let alienShipObj = new AlienShip("rathaus")
// alienShipObj.xatteoScout()

// console.log(alienShipObj.getHealth())
//console.log(alienShipObj)
// console.log(alienShipObj.alienShipStats) // works
// console.log(alienShipObj.currASStats)
// console.log(alienShipObj.alienShipStats_2)

// establishCurrentStats()
// alienShipObj.fight()
// alienShipObj.startFight()
player.startFight() // 1
player.continueFight() // 2 
player.continueFight() // 3
player.continueFight() // 4
player.continueFight() // 5
player.continueFight() // 6
// player.continueFight()

//player.establishCurrentStats()
// console.log(alienShipStats)
// console.log(playerShipStats)
// console.log(currASStats)
// console.log(currPSStats)

// establishCurrentStats()
// alienShipObj.fight()

// establishCurrentALienStats()
// alienShipObj.fight()
// alienShipObj.continueFight()
// alienShipObj.continueFight()







// console.log(currASStats)
// console.log(currASStats.name)
//? ────────────────────────────────────────────────────────────────────────────────