export function manageFriends(state = { friends: [] }, action){
    switch(action.type){
      case 'friends/add':
        return { ...state, friends: [...state.friends, action.payload] }
      case 'friends/remove':
        const filteredFriends = state.friends.filter(friend => friend.id !== action.payload);
        return { ...state, friends: filteredFriends };
      default:
        return state; }
  
  
  
  

}
