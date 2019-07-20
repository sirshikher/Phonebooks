
import Searched_user from "views/Searched_viewpage";
import Authguard from './Authguard/Authguard'
import Searched_Hirerachy from "views/Searched_Hirerachy";


var indexRoutes = [

  {
    path: "/searched_user",
    component:Authguard (Searched_user),
    
  },

  {
    path: "/searched_user_hirerachy",
    component:Authguard (Searched_Hirerachy),
    
  },
];


export default indexRoutes;
 