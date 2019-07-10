import {
  NEW_POST,view_page,search,user_search,editpage_recieve,editpage_send_data,send_otp,verify_otp
} from './types';
import axios from 'axios'
import id from '../Service_File/ngrok';

export const createPost = (postData, token, acces) => async dispatch => {
  const bearer = token;
  const access_token = acces;
  return new Promise((resolve, reject) => {
  axios.post(`https://${id}.ngrok.io/userlogin`, postData, {
       method:"POST",
        mode: "cors",
        headers: {
          'access-token': access_token,
          'Authorization': bearer,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(postData)
      })
      .then((response) => {
        resolve(response);

        dispatch({
          type: NEW_POST,
          payload: response.data,
        })
      })
    // return (<Redirect to={"*"}/>)
    // console.log("action called");
    //           type:NEW_POST,
    //       payload: postData.token,
  });
}



export const ViewPage = () => async dispatch => {

  const token = sessionStorage.getItem('token_id');
  const searchuser_view = localStorage.getItem('edit_id');
  const response = await axios.get(`https://${id}.ngrok.io/userview?client_id=${searchuser_view}`, {
    mode: "cors",
    headers: {
      'Authorization': token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.status);
      // if (response.status === 200 || response.status === 201 || response.status === 202) {
        dispatch({
          type: view_page,
          payload: response.data,
        })
        console.log(response)
      // }
              
      // else {
      //   localStorage.clear();
      //   sessionStorage.clear();
        // this.setState({isLoaded: true})
      // }


  //   })
  //    .catch((error) => {
  //     localStorage.clear();
  //     sessionStorage.clear();
  //   if (error.res.status) {
  //     const users = this.state.iserror;

  //     this.setState({iserror:!users})
  //    }
  // });


}



export const Search = () => async dispatch => {


  const token = sessionStorage.getItem('token_id');
  const logged_client_id = localStorage.getItem('edit_id');
  const response = await axios.get(`https://${id }.ngrok.io/search`, {
     mode: "cors",
   headers: {
     'Authorization': token,
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'

   }
 })
 dispatch({
  type: search,
  payload: response.data,
})
}



export const User_Search = () => async dispatch => {


  const token = sessionStorage.getItem('token_id');
  const logged_client_id = sessionStorage.getItem('lelo');
  const response = await axios.get(`https://${id }.ngrok.io/searcheduserview?client_id=${logged_client_id}`, {
     mode: "cors",
   headers: {
     'Authorization': token,
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'

   }
 })
 dispatch({
  type: user_search,
  payload: response.data,
})
}


export const EditPage_recieve = () => async dispatch => {
  const token = sessionStorage.getItem('token_id');
const datamap = localStorage.getItem('edit_id');
const response = await axios.get(`https://${id}.ngrok.io/userupdateview/${datamap}`, {
 mode: "cors",
 headers: {
   'Authorization': token,
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*'
 }
 })
 dispatch({
  type: editpage_recieve,
  payload: response.data,
})

}



export const EditPage_SendData = (data) => async dispatch => {
  const token = sessionStorage.getItem('token_id');
const datamap = localStorage.getItem('edit_id');
return new Promise((resolve, reject) => {
const response = axios.put(`https://${id}.ngrok.io/userupdateview/${datamap}`,data, {
 mode: "cors",
 headers: {
   'Authorization': token,
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*'
 },
 data:data,
       

      })
      .then((response) => {
        resolve(response);

        dispatch({
          type: editpage_send_data,
          payload: response.data,
        })
        
      })
    });

}


export const Otpsend = (data) => async dispatch => {
  const token = sessionStorage.getItem('token_id');
const response = await axios.post(`https://${id}.ngrok.io/sendotp`,data ,{
                 mode:"cors",
                 headers:{
                   'Authorization': token,
                   'Accept':'application/json',
                   'Content-Type':'application/json',
                   'Access-Control-Allow-Origin': '*'
                 },
                 
                 body:JSON.stringify(data)
               })
 dispatch({
  type: send_otp,
  payload: response.data,
})
 


}




export const VerifyOtp = (otp,contact) => async dispatch => {
 
const response = await axios.get(`https://${id}.ngrok.io/verifyotp` ,{
  mode:"cors",
  headers:{
    'authorization':otp,
    'contact':contact,
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  },
})
 dispatch({
  type: verify_otp,
  payload: response.data,
})
console.log(otp);

 


}