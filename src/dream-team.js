const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if(!Array.isArray(members)) return false;
  
  let team = [];
  members.forEach(element => {
    if(typeof element === "string"){
      team.push(element.trim()[0].toUpperCase());
    }
  });
  return team.sort().join('');
}