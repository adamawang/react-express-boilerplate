export default function HomeReducer (state = [], action) {
  switch(action.type) {
    case 'HOME':
      return action.payload;
    default:
      return state;
  }
}
