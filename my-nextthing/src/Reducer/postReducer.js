import { FETCH_POSTS, NEW_POST ,view_page,search,user_search,editpage_recieve, editpage_send_data,send_otp,verify_otp} from '../action/types';

const intialState = {
  item: [],
  data:[],
  search_data:[],
  user_search_data:[],
  redirect:false,
  error:'djjd',
};
export default (state = intialState ,action)=> {
switch (action.type) {
  case NEW_POST:
  return {
    ...state , item: action.payload,
  }
  case view_page:
  return{
    ...state , data: action.payload,
  }

  case search:
  return{
    ...state , search_data: action.payload,
  }
  case user_search:
  return{
    ...state , user_search_data: action.payload,
  }
case editpage_recieve:
return{
  ...state , user_editpage_recieve_data: action.payload,
}
case editpage_send_data:
return{
  ...state , user_editpage_send_data: action.payload,
}
case send_otp:
return{
  ...state , user_send_otp: action.payload,
}
  case verify_otp:

return{
  ...state , user_verify_otp: action.payload,
}
  default:
  return state;

}
}
 //export const getProductsError = state => state.item;
