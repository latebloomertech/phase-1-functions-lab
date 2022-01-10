function  distanceFromHqInBlocks(block) {
    return Math.abs(block -42)
}
function distanceFromHqInFeet(block) {
    return Math.abs(block - 42) * 264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264
}

/*function calculatesFarePrice(start, destination) {
    if(Math.abs(start-destination) <=400) {
        return 0
    } else if(Math.abs(start-destination) > 400 &  Math.abs(start-destination) <= 2000) {
        return Math.abs(start-destination) - 400 * .02

    } else if(Math.abs(start-destination) > 2000 & Math.abs(start-destination) <=2500) {
        return 25

    } else if(Math.abs(start-destination) > 2500) {
        return "cannot travel that far"
    }
}
*/
function calculatesFarePrice(start,destination) {
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else if(distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
}