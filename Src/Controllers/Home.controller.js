import { Colors } from "../Utils/Colors"


class HomeController{
degreeColor(degree){
    
   if(0<degree && degree<=3) return "#4CAF50"
   else if(3<degree && degree<=4) return "#FBC02D"
   else if(4<degree && degree<=6) return "#FF6F00"
   else if(6<degree && degree<=8) return "#c62828"
   else if(8<degree && degree<=12) return "#6A1B9A"
    }

}

export default new HomeController()