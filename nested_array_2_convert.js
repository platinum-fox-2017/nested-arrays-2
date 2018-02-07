'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  // your convert code here
  // console.log(roster[0].length); // 4
  // console.log(roster.length) // 6
  // console.log(roster[0][0]); // number

  var arrHasil = [];
  
  for (var i = 1; i < roster.length; i++) { // 6
    var emptyObj = {};
    for (var j = 0; j < roster[i].length; j++) { // 4
      debugger
      var nomor = roster[0][0];
      var nama = roster[0][1];
      var posisi = roster[0][2];
      var points = roster[0][3];  
      
      debugger
      emptyObj[nomor] = roster[i][j];
      j++;
      emptyObj[nama] = roster[i][j];
      j++;
      emptyObj[posisi] = roster[i][j];
      j++;
      emptyObj[points] = roster[i][j];
      debugger
      
    }
    arrHasil.push(emptyObj);
  }
    
  return arrHasil;

}

let object_roster = convert_roster_format(roster)

console.log(object_roster[2])


// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
