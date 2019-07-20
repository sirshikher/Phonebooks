import {
  NEW_POST,view_page,search,user_search,editpage_recieve,editpage_send_data,send_otp,verify_otp,editpage,hierarchy,homepage,add_manager,search_result,logout
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
      'Access-Control-Allow-Origin': '*',

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
  const response = await axios.get(`https://${id }.ngrok.io/search`, {
     mode: "cors",
   headers: {
     'Authorization': token,
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': '*',
     'Access-Control-Allow-Headers': '*'


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
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': '*',
     'Access-Control-Allow-Headers': '*'

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
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': '*',
   'Access-Control-Allow-Headers': '*'
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
axios.put(`https://${id}.ngrok.io/userupdateview/${datamap}`,data, {
 mode: "cors",
 headers: {
   'Authorization': token,
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': '*',
   'Access-Control-Allow-Headers': '*'
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
      console.log(data);
      
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
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Methods': '*',
                   'Access-Control-Allow-Headers': '*'
                 },
                 
                 body:JSON.stringify(data)
               })
 dispatch({
  type: send_otp,
  payload: response.data,
})
 


}




export const VerifyOtp = (otp,contact) => async dispatch => {
  const token = sessionStorage.getItem('token_id');

const response = await axios.get(`https://${id}.ngrok.io/verifyotp` ,{
  mode:"cors",
  headers:{
    'authentication': token,
    'authorization':otp,
    'contact':contact,
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'

  },
})
 dispatch({
  type: verify_otp,
  payload: response.data,
})
console.log(otp);
}

export const EditPage = () => async dispatch => {
  const token = sessionStorage.getItem('token_id');
const response = await axios.get(`https://${id}.ngrok.io/responseskills`, {
 mode: "cors",
 headers: {
   'Authorization': token,
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': '*',
   'Access-Control-Allow-Headers': '*'

 }
 })
 dispatch({
  type: editpage,
  payload: response.data,
})
console.log(response);

}


export const User_hierarchy = (data) => async dispatch => {
  const response = await axios.get(`https://${id}.ngrok.io/newhierarchy?client_id=${data}`, {
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
   'Access-Control-Allow-Headers': '*'
      }
    })
      dispatch({
        type: hierarchy,
        payload: response.data[0],
      })

   
  }


  export const Homepage = () => async dispatch => {
    const token = sessionStorage.getItem('token_id');
    const logged_client_id = localStorage.getItem('edit_id');
   const response =  await axios.get(`https://${id}.ngrok.io/homepage?client_id=${logged_client_id}`, {
      mode: "cors",
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',


      }
    })
        dispatch({
          type: homepage,
          payload: response.data,
        })
  
     
    }

    export const Add_Manager = (data) => async dispatch => {
      const searched_client_id = localStorage.getItem('edit_id');
      const token = sessionStorage.getItem('token_id');
      await axios.put(`https://${id}.ngrok.io/addmanager/${searched_client_id}`, {
        mode: "cors",
        headers: {
          'Authorization': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*'
  
        },
        manager_id: data.client_id
      })
          dispatch({
            type: add_manager,
          })
    
       
      }




    export const Search_User = () => async dispatch => {
    const result = localStorage.getItem('emails');
    const token = sessionStorage.getItem('token_id');
      const response = await axios.get(`https://${id}.ngrok.io/usersearch?name=${result}`,{
        mode: "cors",
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',  
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
      },
    })
          dispatch({
            type: search_result,
            payload:response.data
            
          })
    
       
      }


      export const Logout_user = () => async dispatch => {
        const access_token = sessionStorage.getItem('token_id');
        await axios.post(`https://${id}.ngrok.io/userlogout`, {
          mode: "cors",
          headers: {
            'access-token': access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
          }
        })
              dispatch({
                type: logout,
                
                
              })
        
           
          }