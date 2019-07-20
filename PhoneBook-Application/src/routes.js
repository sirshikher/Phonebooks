import Dashboard from "views/Dashboard.jsx";

import Orgchart from "views/Orgchart";
import Viewpage from "views/User_viewpage.jsx";
import UserPage from "views/UserPage.jsx";
import Logout from "views/Logout.jsx";
import Authguard from './Authguard/Authguard'
var dashRoutes = [

  {
    path: "/dashboard",
    name: "Homepage",
    icon: "business_bank",
    component: Authguard(Dashboard),
   
  },
  {
    path: "/hierarchy",
    redirect: false,
    name: "Hierarchy",
    icon: "design-2_ruler-pencil",
    component: Authguard(Orgchart),
    
  },


  {
    path: "/user-profile",
    name: "View-Page",
    icon: "users_single-02",
    component: Authguard(Viewpage),
    
  },

  {
    path: "/editprofile-page",
    name: "Edit-page",
    icon: "users_single-02",
    component: Authguard(UserPage),
   
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "media-1_button-power",
    component: Logout,
    
  },

];

export default dashRoutes;
