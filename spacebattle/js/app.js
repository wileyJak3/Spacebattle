//
//* ─── NOTES ──────────────────────────────────────────────────────────────────────
// NOTE  
//~  Alien Race: Xatteol

/*  gameWhile = playGame(startGame) */

//~ Bonuses

//^ (1) The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it. 
//! Functional, but hardcoded. marked by "FIXME", softcode in the future

//^ (2) Scientists have developed a super targeting computer for your lasers. You now are asked which of the aliens you would like to hit with your lasers. 
//! Randomize names in the future

//^ (3) Scientists have improved your ship's shields. They don't work that consistently, and only improve your hit points by a random number each time 
//! Add shields for aliens when other bonus added

//^ (4) Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage. You can say before each battle if you want to use one of your missles. 
//! Randomized the number of missiles to be more gamey

//~ (5) The aliens have gained emotions and now can attack more than one at a time.

//~ (6) Evil alien scientists have created an alien mega-ship. This mega-ship contains a number of
//~  "weapon pods" that each have their own individual hit points.These "weapon-pods"(objects) must all 
//~  be destroyed before you can begin doing damage to the main ship, which also has its own hit points.

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
    scoutShipsDestroyed = 0;

    //
    //? ─── FIGHT FUNCTION ─────────────────────────────────────────────────────────────
    // The fight method uses the current player ship stats (currPSStats) and the current alien currASS to 
    // to assign the battle values the alien ship and player ship. The method also determines checks to see if 
    // "bonus mode" is activated to determine  if the player is allowed to use missiles or shields.The method 
    // returns a 1 if the alien ship is destroyed and a 2 if the player ship is destroyed 
    //? ────────────────────────────────────────────────────────────────────────────────

    fight() {
        //! Can put alien ship name approaches here
        // let PS_hull = this.playerShipStats.hull 
        // let AS_hull = this.alienShipStats.hull
        // let PS_AC = this.playerShipStats.accuracy
        // let PS_firepower = this.playerShipStats.firepower
        let loopEnd = 0;
        let missileChoice;
        // console.log(currASStats)
        // alert(printObject(currASStats))
        // console.log(currPSStats)
        // alert(printObject(currPSStats))

        while (loopEnd == 0) {

            //~ FIXME create a separate function for player attack and alien attack 

            //? Player attacks 
            let randAtkValPlayer = Math.random()
            if (currPSStats.missile > 0 && bonusMode == true) {
                missileChoice = prompt(`(${currPSStats.missile}) available\nFire missile?`)
                if ((missileChoice.toUpperCase() == "YES") || (missileChoice.toUpperCase() == "Y")) {
                    //~ ==============================================================================
                    console.log("missile primed")
                    alert("missile primed")
                    //~ ==============================================================================
                    currPSStats.missile--
                    missileChoice = 1
                } 
                // else if ((missileChoice.toUpperCase() == "NO") || (missileChoice.toUpperCase() == "N")) {
                //     missileChoice = 0;
                // }

            }
            if (randAtkValPlayer <= currPSStats.accuracy && missileChoice == 1 ) {
                currASStats.hull = currASStats.hull - currPSStats.missileFirepower;
                //~ ==============================================================================
                console.log(`The missile detonates hitting ${currASStats.name}  for ${currPSStats.missileFirepower}`)
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
            } else if (randAtkValPlayer <= currPSStats.accuracy) {
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
                if (currPSStats.barrier <= 0 || bonusMode == false) {
                    currPSStats.hull = currPSStats.hull - currASStats.firepower
                    //~ ==============================================================================
                    console.log(`${currPSStats.name} has been hit for ${currASStats.firepower}`)
                    alert(`${currPSStats.name} has been hit for ${currASStats.firepower}`)
                    //~ ==============================================================================
                } else if( bonusMode == true && currPSStats.barrier > 0) {
                    currPSStats.barrier = currPSStats.barrier - currASStats.firepower
                    //~ ==============================================================================
                    console.log(`${currPSStats.name}'s shields has hit for ${currASStats.firepower}`)
                    alert(`${currPSStats.name}'s shields has hit for  ${currASStats.firepower}`)
                    //~ ==============================================================================
                    if (currPSStats.barrier <= 0) {
                        console.log(`${currPSStats.name}'s shields are down`)
                    }
                }
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
    // The check health function check if the alien or players health is equal to 0 and returns
    //  1 if alien ship is destroyed and 2 if player ship is destroyed. If bonus mode is activated
    //   the method also sets ship status equal to 0 (To show ship destroyed)
    //? ────────────────────────────────────────────────────────────────────────────────


    checkHealth() {

        //~If alien ship destroyed ends the loop
        if (currASStats.hull <= 0) {
            //~ ==============================================================================
            console.log(`${currASStats.name} hull integrity is 0, ${currASStats.name} ship is destroyed`)
            alert(`${currASStats.name} hull integrity is 0, ${currASStats.name} ship is destroyed`)
            //~ ==============================================================================
            if (bonusMode) {
                globalAlienObj.scoutShipObjArray[currGlobalIndex].alive = 0;
            }
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
    //? ───NOTE SELECT ALIEN FUNCTION ────────────────────────────────────────────────────────
    //      The Alien selection method is a  bonus mode feature that allows players to choose an alien target
    //? ────────────────────────────────────────────────────────────────────────────────

    alienSelection() {
        //globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[this.scoutShipsDestroyed])
        // console.log(globalAlienObj.scoutShipObjArray)
        let alienDestroyedArr = [];
        let alienAliveArr = [];


        for (let i = 0; i < numOfAliens; i++) {
            let alienShipElement = globalAlienObj.scoutShipObjArray[i]
            if (alienShipElement.alive == 0) {
                alienDestroyedArr.push(alienShipElement.name);
            } else {
                alienAliveArr.push(alienShipElement.name)
            }
        }

        if (alienDestroyedArr.length != 0) {
            console.log(`Aliens Destroyed: ${alienDestroyedArr}`)
        }
        if (alienAliveArr.length != 0) {
            console.log(`Aliens Remaining: ${alienAliveArr}`)
        } else {
            console.log('No alien ships remain`')
        }
        let alienTarget = prompt(`${alienAliveArr}\nSelect Target(Case/Space sensitive):`)
        // let alienTarget = "Neleux";

        let alienInd = globalAlienObj.scoutShipObjArray.findIndex(scoutObj =>
            //console.log(scoutObj.name)
            scoutObj.name == alienTarget

        )
        currGlobalIndex = alienInd;

        return alienInd;

    }







    //
    //? ─── START FIGHT FUNCTION ────────────────────────────────────────────────────────
    // The start fight function assigns the initial stats for the player/alien ship and increments the ships destroyed
    //? ────────────────────────────────────────────────────────────────────────────────

    startFight() {
        // let alienShipObj = new AlienShip()
        // console.log(alienShipObj.scoutShipObjArray[this.scoutInd]) 
        player.ussSchwarzenegger()
        globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[((bonusMode) ? this.alienSelection() : this.scoutShipsDestroyed)])

        // alienShipObj.setAlienShipStats(tempObj)
        establishCurrentStats()
        this.scoutShipsDestroyed++
        // this.fight()
        return this.fight()

        //! return alien object
    }

    //
    //? ─── CONTINUE FIGHT FUNCTION ──────────────────────────────────────────────────────────────
    // The start fight function assigns the stats for the current alien ship and increments the ships destroyed
    //? ────────────────────────────────────────────────────────────────────────────────

    continueFight() { //! place the function in continue then use the object to call another alien
        globalAlienObj.setAlienShipStats(globalAlienObj.scoutShipObjArray[((bonusMode) ? this.alienSelection() : this.scoutShipsDestroyed)])
        establishCurrentALienStats()
        this.scoutShipsDestroyed++
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

    //? ─── RETREAT FUNCTION ──────────────────────────────────────────────────────────────
    //   The retreat function checks if the player has been killed, if the player has defeated
    //  all the aliens, and prompts the player to choose if he would like to retreat. If the player 
    //  chooses  to retreat the game is over, otherwise the game continues
    //? ────────────────────────────────────────────────────────────────────────────────

    retreat(outcomeVal) {

        if (outcomeVal == 2) {
            //~ ==============================================================================
            console.log
            (`GAME OVER!!! ${player.name}\nShip destroyed, you lose.`)
            //~ ==============================================================================
            return 2;
        }
        if (outcomeVal == 1) {

            //! FIXME Index hardcoded, due to code structure would require a lot of work to change
            // numOfAliens = ((bonusMode) ? this.randRangeNum(2, 5) : 5)
            if (this.scoutShipsDestroyed == numOfAliens) {
                //~ ==============================================================================
                console.log("Fleet destroyed, you win")
                alert("Fleet destroyed, you win")
                //~ ==============================================================================
                return 0
            }
            //~ ==============================================================================
            let userResponse = prompt("retreat (Y/N)? ") //NOTE Prompt
            //let userResponse = "no"
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

    //? ─── PLAY AGAIN FUNCTION ──────────────────────────────────────────────────────────────
    //  Ask the player if he would like to play the game again. If the player chooses yes, resets the ships destroyed
    //? ────────────────────────────────────────────────────────────────────────────────

    playAgain() {
        //~ ==============================================================================
        let userResponse = prompt("Play again (Y/N)? ") //  
        //let userResponse = "no"
        //~ ==============================================================================
        if ((userResponse.toUpperCase() == "YES") || (userResponse.toUpperCase() == "Y")) {
            globalAlienObj.scoutShipsDestroyed = 0
            return 1;
        } else {
            return 0
        }
    }

    //? ─── RUNGAME FUCTION ──────────────────────────────────────────────────────────────
    // The rungame method starts the game and calls all of the other methods. The function will
    //  continue if the player chooses to play again or if the player dies,retreats, or wins
    //? ────────────────────────────────────────────────────────────────────────────────

    runGame() {
        let gameRunVar = 0
        while (gameRunVar == 0) {
            let gameOutcomeVal = this.retreat(this.startFight())
            if (this.playAgain() == 1) {
                globalAlienObj.scoutShipsDestroyed = 0
                this.runGame()
            } else {
                gameRunVar++
            }
        }

    }







    //* ───SECTION RANDOM METHODS ─────────────────────────────────────────────────────────────
    // ~need to create methods to randomize hull,firepower, barrier, and accuracy

    //
    //? ─── RANDOM RANGE NUMBER FUNCTION ──────────────────────────────────────────────────────────────
    // returns a random number between the givin min and max
    //? ────────────────────────────────────────────────────────────────────────────────

    randRangeNum(max, min) {
        let randVal = Math.floor(Math.random() * ((max - min) + 1))
        return randVal + min
    }



    //? ─── RANDOM RANGE DOUBLE  FUNCTION ──────────────────────────────────────────────────────────────
    // // returns a random double between the givin min and max
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
// An extension of the ship class that contains the player ship object
//* ────────────────────────────────────────────────────────────────────────────────


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
            barrier: this.randRangeNum(10, 0),
            accuracy: .7,
            missile:this.randRangeNum(3, 0),
            missileFirepower:6
        }
    }

    getPlayerShipHull() {
        return this.playerShipStats.health
    }

}
//* !SECTION ────────────────────────────────────────────────────────────────────────────────

//
//* ─── SECTION ALIEN SHIP METHODS ─────────────────────────────────────────────────────────

// An extension of the ship class that contains the alien ship objects
//* ────────────────────────────────────────────────────────────────────────────────

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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
            accuracy: this.randRangeDouble(.8, .6),
            alive: 1
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
//* ───SECTION GLOBAL VARIABLE FUNCTIONS ───────────────────────────────────────────────────────────

// The function prompts the user to determine if bonus mode features will be enabled
//* ────────────────────────────────────────────────────────────────────────────────
let activateBonusMode = () => {
    //~ ==============================================================================
    let bonusMode = prompt("Bonus Mode?");
    //let bonusMode = "yes"
    //~ ==============================================================================

    if ((bonusMode.toUpperCase() == "YES") || (bonusMode.toUpperCase() == "Y")) {
        //~ ==============================================================================
        console.log(`Bonus mode: Enabled`);
        alert(`Bonus mode: Enabled`);
        //~ ==============================================================================
        return true;
    } else if ((bonusMode.toUpperCase() == "NO") || (bonusMode.toUpperCase() == "N")) {
        //~ ==============================================================================
        console.log(`Bonus mode: Disabled`);
        alert(`Bonus mode: Disabled`);
        //~ ==============================================================================
        return false;
    }
    //! add verification for improper user input
}

//* !SECTION ────────────────────────────────────────────────────────────────────────────────

// Global Variables

let globalAlienObj = new AlienShip();
let player = new PlayerShip(prompt("Ship name?"))
let playerShipStats = {}
let alienShipStats = {}
let currPSStats = {}
let currASStats = {}
// let bonusMode = false;
let bonusMode = activateBonusMode()
let currGlobalIndex;
let numOfAliens = ((bonusMode) ? globalAlienObj.randRangeNum(5, 2) : 5)
let alienEmotion = .5
let alienReinforcements = globalAlienObj.randRangeNum(2,0)


//* !SECTION ────────────────────────────────────────────────────────────────────────────────


//
//* ───SECTION GLOBAL FUNCTIONS ───────────────────────────────────────────────────────────

// The establish functions clone the given object into a new object that is not pass by reference

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


//Converts objects to a string and returns the created string

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