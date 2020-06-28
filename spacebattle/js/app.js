//
//* ─── NOTES ──────────────────────────────────────────────────────────────────────
// NOTE  
//~  Alien Race: Xatteol

/*  gameWhile = playGame(startGame) */

//~ Bonuses

//~ (1) The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it. 

//~ (2) Scientists have developed a super targeting computer for your lasers. You now are asked which of the aliens you would like to hit with your lasers. 

//~ (3) Scientists have improved your ship's shields. They don't work that consistently, and only improve your hit points by a random number each time 

//~ (4) Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage.

//~ (5) You can say before each battle if you want to use one of your missles. 

//~ (6) The aliens have gained emotions and now can attack more than one at a time.

//~ (7) Evil alien scientists have created an alien mega-ship. This mega-ship contains a number of "weapon pods" that each have their own individual hit points. These "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship, which also has its own hit points.

//? Bonus Bonus
//^ (1) When the game is over, prompt the user if they would like to play again, and make it so the user can play again with all the values set back to default. 

//? (2) So far the entire game is just one battle, with many aliens. implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle. Keep track of points for the number of wins the player has.

    //? (2.1) After every battle you are asked if you want to return to base and recharge your shields. 

    //? (2.2) Make the players and enemies stronger after each battle * Distribute medals and power ups to the player depending on points


//? ────────────────────────────────────────────────────────────────────────────────


console.log("working")

//
//* ─── SECTION SHIP METHODS ───────────────────────────────────────────────────────
//

class Ship {
    scoutIndex = 0;

    //
    //? ─── FIGHT FUNCTION ─────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    fight() {
        //! Can put alien ship name approaches here
        // let PS_hull = this.playerShipStats.hull 
        // let AS_hull = this.alienShipStats.hull
        // let PS_AC = this.playerShipStats.accuracy
        // let PS_firepower = this.playerShipStats.firepower
        let loopEnd = 0;
        // console.log(currASStats)
        // alert(printObject(currASStats))
        // console.log(currPSStats)
        // alert(printObject(currPSStats))

        while (loopEnd == 0) {

            //~ FIXME create a separate function for player attack and alien attack 

            //? Player attacks 
                let randAtkValPlayer = Math.random()
            if (randAtkValPlayer <= currPSStats.accuracy) {
                currASStats.hull = currASStats.hull - currPSStats.firepower;
                //~ ==============================================================================
                console.log(`${currASStats.name} has been hit for ${currPSStats.firepower}`)
                alert(`${currASStats.name} has been hit for ${currPSStats.firepower}`)
                //~ ==============================================================================
                loopEnd = this.checkHealth()
                if (loopEnd == 1) {
                    return loopEnd
                }

                //~ ==============================================================================
                console.log(currASStats)
                alert(printObject(currASStats))
                // console.log(currPSStats)
                // alert(printObject(currPSStats))
                //~ ==============================================================================
            } else {
                //~ ==============================================================================
                console.log(`${currPSStats.name} misses attack`)
                alert(`${currPSStats.name} misses attack`)
                //~ ==============================================================================
            }

            //? Alien attacks
            let randAtkValAlien = Math.random() 
            if (randAtkValAlien < currASStats.accuracy) {
                currPSStats.hull = currPSStats.hull - currASStats.firepower
                //~ ==============================================================================
                console.log(`${currPSStats.name} has been hit for ${currASStats.firepower}`)
                alert(`${currPSStats.name} has been hit for ${currASStats.firepower}`)
                //~ ==============================================================================
                loopEnd = this.checkHealth()

                if (loopEnd == 2) {
                    return loopEnd
                }

                //~ ==============================================================================
                // console.log(currASStats)
                // alert(printObject(currASStats))
                console.log(currPSStats)
                alert(printObject(currPSStats))
                //~ ==============================================================================
            } else {
                //~ ==============================================================================
                console.log(`${currASStats.name} misses attack`)
                alert(`${currASStats.name} misses attack`)
                //~ ==============================================================================


            }
        }
        return loopEnd;
    }




    //
    //? ─── CHECK HEALTH FUNCTION ────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────


    checkHealth() {

        //~If alien ship destroyed ends the loop
        if (currASStats.hull <= 0) {
            //~ ==============================================================================
            console.log(`${currASStats.name} hull integrity is 0, ${currASStats.name} ship is destroyed`)
            alert(`${currASStats.name} hull integrity is 0, ${currASStats.name} ship is destroyed`)
            //~ ==============================================================================
            return 1;
        }
        //~If player ship destroyed ends the loop
        if (currPSStats.hull <= 0) {
            //~ ==============================================================================
            console.log(`${currPSStats.name} health is 0, ${currPSStats.name} ship is destroyed`)
            alert(`${currPSStats.name} health is 0, ${currPSStats.name} ship is destroyed`)
            //~ ==============================================================================
            return 2
        }
        return 0;
    }



    //
    //? ─── START FIGHT FUNCTION ────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    startFight() {
        // let alienShipObj = new AlienShip()
        // console.log(alienShipObj.scoutShipObjArray[this.scoutInd]) 
        player.ussSchwarzenegger()
        globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[this.scoutIndex])

        // alienShipObj.setAlienShipStats(tempObj)
        establishCurrentStats()
        this.scoutIndex++
        // this.fight()
        return this.fight()

        //! return alien object
    }

    //
    //? ─── CONTINUE FIGHT FUNCTION ──────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    continueFight() { //! place the function in continue then use the object to call another alien
        globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[this.scoutIndex])
        establishCurrentALienStats()
        this.scoutIndex++
        // this.fight()
        return this.fight()
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
    //

    //? ───FIXME RETREAT FUNCTION ──────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    retreat(outcomeVal) {

        if (outcomeVal == 2) {
            //~ ==============================================================================
            console.log(`GAME OVER ${player.name}\n ship destroyed, you lose.`)
            alert(`GAME OVER ${player.name}\n ship destroyed, you lose.`)
            //~ ==============================================================================
            return 2;
        }
        if (outcomeVal == 1) {
            if (this.scoutIndex == 5) {
                //~ ==============================================================================
                console.log("Fleet destroyed, you win")
                alert("Fleet destroyed, you win")
                //~ ==============================================================================
                return 0
            }
            //~ ==============================================================================
            let userResponse = prompt("retreat (Y/N)? ") //NOTE Prompt
            // let userResponse = "no"
            //~ ==============================================================================
            // NOTE verification, so only correct input entered
            if ((userResponse.toUpperCase() == "YES") || (userResponse.toUpperCase() == "Y")) {
                //~ ==============================================================================
                console.log(`\n${player.name} retreats\n`)
                alert(`\n${player.name} retreats\n`)
                //~ ==============================================================================
                return 1;
            } else if ((userResponse.toUpperCase() == "NO") || (userResponse.toUpperCase() == "N")) {
                this.retreat(this.continueFight())
            }
        }
    }

    //? ───FIXME PLAY AGAIN FUNCTION ──────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    playAgain() {
        //~ ==============================================================================
        let userResponse = prompt("Play again (Y/N)? ") // TODO Prompt 2
        // let userResponse = "no"
        //~ ==============================================================================
        if ((userResponse.toUpperCase() == "YES") || (userResponse.toUpperCase() == "Y")) {
            globalAlienObj.scoutIndex = 0
            return 1;
        } else {
            return 0
        }
    }

    //? ───FIXME RUNGAME FUCTION ──────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    runGame() {
        while (true) {
            let gameOutcomeVal = this.retreat(this.startFight())
            if (this.playAgain() == 1) {
                globalAlienObj.scoutIndex = 0
                this.runGame()
            }else{
                break
            }
        }

    }







    //* ───SECTION RANDOM METHODS ─────────────────────────────────────────────────────────────
    // ~need to create methods to randomize hull,firepower, barrier, and accuracy

    //
    //? ─── RANDOM RANGE NUMBER FUNCTION ──────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────

    randRangeNum(max, min) {
        let randVal = Math.floor(Math.random() * ((max - min) + 1))
        return randVal + min
    }



    //? ─── RANDOM RANGE DOUBLE  FUNCTION ──────────────────────────────────────────────────────────────
    //
    //? ────────────────────────────────────────────────────────────────────────────────
    randRangeDouble(max, min) {
        let randVal = (Math.random() * ((max - min))).toFixed(2)
        return +randVal + min
    }


    //* !SECTION ────────────────────────────────────────────────────────────────────────────────

}

//* !SECTION ────────────────────────────────────────────────────────────────────────────────



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
//* !SECTION ────────────────────────────────────────────────────────────────────────────────

//
//* ─── SECTION ALIEN SHIP METHODS ─────────────────────────────────────────────────────────
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

//* !SECTION ────────────────────────────────────────────────────────────────────────────────


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
let bonusMode = false;

//* !SECTION ────────────────────────────────────────────────────────────────────────────────


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

let printObject = (obj) => {
    // str = JSON.stringify(obj);
    objStr = JSON.stringify(obj, null, 1); // (Optional) beautiful indented output.
    //console.log(JSON.stringify(obj, null, 4)); // Logs output to dev tools console.
    return objStr
}

//* !SECTION ────────────────────────────────────────────────────────────────────────────────



//* ───SECTION FUNCTION CALLS ─────────────────────────────────────────────────────────────
//
//let player = new PlayerShip("Wiley")
// player.ussSchwarzenegger()

globalAlienObj.runGame()

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
// player.startFight() // 1
// player.continueFight() // 2 
// player.continueFight() // 3
// player.continueFight() // 4
// player.continueFight() // 5
// player.continueFight() // 6
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
//* !SECTION ────────────────────────────────────────────────────────────────────────────────