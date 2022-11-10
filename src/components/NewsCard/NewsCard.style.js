import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:10,
        margin:10,
    },
    image:{
        height: Dimensions.get("window").height / 4,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    },
    inner_container:{
        padding:5
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        
    },
    description:{
        marginTop:3,
        fontSize:13,
        backgroundColor:"#F4F5D6",
        color:"#3D2A2A"
    },
    author:{
      fontStyle:"italic",
      textAlign:"right" ,
      color:"#F3A929"
    }
})