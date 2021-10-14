// Code your solution here
function findMatching(array, string){
    const drivers = array.filter(driver => driver.toUpperCase() === string.toUpperCase())
    return drivers
}

function fuzzyMatch(array, string){
    const drivers = array.filter(driver => driver.startsWith(string))
    return drivers; 
}

function matchName(array, string){
    const drivers = array.filter(driver => driver.name === string)
    return drivers;
}
