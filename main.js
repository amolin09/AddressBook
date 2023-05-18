async function getUserInfo() {
  const res = await fetch("https://randomuser.me/api/")

  const jsonData = await res.json()

  return jsonData
}



async function getMultipleUserInfo(amountOfUsers) {
  const res = await fetch(`https://randomuser.me/api/?results=${amountOfUsers}`)

  const jsonData = await res.json();

 return jsonData
}


let addressEntries = []
let hasContent = false


async function addDataToArray() {

  const userData = await getMultipleUserInfo(5)
 addressEntries = userData.results
}


const displayUser = (person, i) => {
  
  const li = document.createElement('li');
  li.id = `person-${i}`;

  
  const userPicture = person.picture.thumbnail;
  const imgEl = document.createElement('img')
  imgEl.src = userPicture;
  li.appendChild(imgEl);

  const userName = person.name.first;
  const userNameText = document.createTextNode(userName);
  li.append(userNameText);

  const buttonEl = document.createElement('button');
  buttonEl.innerText = "Show Info";
  buttonEl.setAttribute("onclick",`showInfo('${li.id}', '${JSON.stringify(person)}')`);
  li.append(buttonEl);

  const addressListEl = document.getElementById('address-list');
  addressListEl.appendChild(li);
}


const showInfo = (id, person) => {
  const li = document.getElementById(id);

  if(hasContent){
    li.removeChild(li.lastChild)
    hasContent = false
  }
  else{
    const personInfo = document.createTextNode(person);
    li.appendChild(personInfo);
    hasContent = true
  }
 
  
}


const displayAddressList = async () => {
   await addDataToArray();

    let i = 0;
  for(person of addressEntries) {
    displayUser(person, i++);
  }
}

displayAddressList();

