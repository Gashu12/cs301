let prompt = require('prompt-sync')();
let numberOfStudents = prompt('Enter number of students: ');
let numberOfTeams = prompt('Enter number of teams: ');
numberOfStudents = parseInt(numberOfStudents);
numberOfTeams = parseInt(numberOfTeams);


let team = numberOfStudents % numberOfTeams;
let members = numberOfStudents / numberOfTeams;
members = parseInt(members)
let team1 = numberOfTeams - team;
members1 = members++;
console.log(team + ' teams with ' + members + ' members and ' + team1 + ' teams with ' + members1 + ' members')