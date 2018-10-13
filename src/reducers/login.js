export  const login  = ( state= [], action ) => {
    switch (action.type) {
        case "COMPLETE_LOGIN":
          return action.payload; 
        case "ERROR_LOGIN":
            return action;     
        case "IN_LOGIN":
          return action; 
        case "COMPLETE_SONG":
          return action; 
        default:
            return state;
    }
}