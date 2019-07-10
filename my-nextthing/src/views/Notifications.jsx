import React from "react"


const token = sessionStorage.getItem('msg');
if({token} === "approved"){
   aa = "danger"
}
else{
   aa = "success"
}
var aa;
var options = {};
options = {
  place: 'tl',
  message: (
      <div>
          <div>
            {token}
              
          </div>
      </div>
  ),
  type: aa,
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 7
}

export default options;