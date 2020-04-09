
 const initialState = {
    count: 0,
  
  };
  
  function Mainreducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };break;
      case 'DECREMENT':
        return {
          count: state.count - 1
        };break;
        case 'RESET': console.log("action.data "+JSON.stringify(action.data));
            return {
              count: 0
            };break;

          
      default:
        return state;
    }
  }

  export default Mainreducer