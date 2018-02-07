'use strict'

class NestedArrayToObject{
  constructor(){
    this.hasil = []
  }

  convert_roster_format(rawData){
   
    for(let i = 1;i < rawData.length;i++){
      let obj = {}
      for(let j in rawData[i]){
        obj[rawData[0][j]] = rawData[i][j]
      }
      this.hasil.push(obj)
    }
  }

  checkName (value){
    for(let i of this.hasil){
      if(i.Name === value){
        return true
      }
    }
    return false
  }
}

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

let release = new NestedArrayToObject()
release.convert_roster_format(roster)
console.log(release.checkName('Joe Schmo'))


// let object_roster = convert_roster_format(roster)
// console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

// console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true



// module.exports = {
//   convert_roster_format
// }
