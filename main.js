async function logRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const jsonData = await response.json();
  console.log(jsonData);
}

let addressEntries = []
let addressEntriesNames = []

let newEntry = logRandomUser()
let addressEntryName = newEntry.name
addressEntriesNames.push(addressEntryName)

// for(let i = 0; i < 1; i++){
  
//   let newEntry = logRandomUser()
//   let addressEntryName = newEntry.name
  
//   addressEntriesNames.push(addressEntryName)
// }

console.log(addressEntriesNames)
