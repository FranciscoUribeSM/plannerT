export  const getUser  = ( state= [], action ) => {
    switch (action.type) {
        case "COMPLETE_LIST":
        return action; 
      default:
          return state;
    }
}