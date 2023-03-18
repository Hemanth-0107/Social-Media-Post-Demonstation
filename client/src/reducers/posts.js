 const reducer = (state=[],action) =>{
  switch(action.type){
    case 'CREATE':
        return [...state, action.payload];
    case 'FETCH_ALL':
        return action.payload;
    case 'UPDATE':
        return state.map(item =>
             item.id===action.payload.id?action.payload:item);
    case 'DELETE':
        return state.filter(post => post.id!== action.payload);
    case 'LIKE':
        return state.map(item =>
            item.id===action.payload.id?action.payload:item);
    default:
        return state;
  }
}
export default reducer;