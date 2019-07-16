import Dashboard from "views/Dashboard.jsx";

import Orgchart from "views/Orgchart";
import PostForm from './components/Login_Page/postform';
import Viewpage from "views/User_viewpage.jsx";
import UserPage from "views/UserPage.jsx";
import Notification from "views/Notifications.jsx";
import Logout from "views/Logout.jsx";
import Authguard from './Authguard/Authguard'
var dashRoutes = [

  {
    path: "/dashboard",
    name: "Homepage",
    icon: "business_bank",
    component: Authguard(Dashboard),
    layout: "/admin"
  },
  {
    path: "/hierarchy",
    redirect: false,
    name: "Hierarchy",
    icon: "design-2_ruler-pencil",
    component: Authguard(Orgchart),
    layout: "/admin"
  },

  // {
  //   path: "/notifications",
  //   name: "Notification",

  //   component: Authguard(Notification),

  //   icon: "ui-1_bell-53",
  //   layout: "/admin"
  // },

  {
    path: "/extended-tables",
    name: "View-Page",
    icon: "users_single-02",
    component: Authguard(Viewpage),
    layout: "/admin"
  },

  {
    path: "/user-page",
    name: "Edit-page",
    icon: "users_single-02",
    component: Authguard(UserPage),
    layout: "/admin"
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "media-1_button-power",
    component: Logout,
    layout: "/admin"
  },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashRoutes;
