import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
    },
    ascend_container:{
        width:100,
        borderWidth:1,
        borderRadius:5,
    },
    descend_container:{  
        width:100,
        borderWidth:1,
        borderRadius:5,
    },
    date_container:{
        width:100,
        borderWidth:1,
        borderRadius:5,
    },
    ascend_button:{
        backgroundColor:'#ced6d9',
        padding:7,
        alignItems:'center',
    },
    descend_button:{
        backgroundColor:'#ced6d9',
        padding:7,
        borderRadius:5,
        alignItems:'center',
    },
    date_button:{
        alignItems:'center',
        backgroundColor:'#ced6d9',
        padding:7,
        borderRadius:5,
        
    }
})