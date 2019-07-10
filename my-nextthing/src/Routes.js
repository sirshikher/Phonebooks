
import Searched_user from "views/Searched_viewpage";
import Authguard from './Authguard/Authguard'
import Searched_Hirerachy from "views/Searched_Hirerachy";


var indexRoutes = [

  {
    path: "/searched_user",
    component:Authguard (Searched_user),
    layout: "/admin"
  },

  {
    path: "/searched_user_hirerachy",
    component:Authguard (Searched_Hirerachy),
    layout: "/admin"
  },
];


export default indexRoutes;
 