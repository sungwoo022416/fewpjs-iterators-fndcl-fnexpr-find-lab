
function superbowlWin(history) {
    let found = history.find(history => history.result ===   "W");
    return found? found.year : undefined 
}