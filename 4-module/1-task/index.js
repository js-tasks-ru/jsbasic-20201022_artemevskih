/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let friendsList = document.createElement('ul');
  
  friends.map(friend => friendsList.innerHTML += '<li>' + friend.firstName + ' ' + friend.lastName + '</li>');
 
  return friendsList;
}
