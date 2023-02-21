import { StyleSheet } from "react-native";
import { RF } from "@theme/responsive";
import { COLORS } from "@theme/colors";
const{
    SECONDARY_BLUE,
    GRAY,
    BLACK
}=COLORS
export const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    heading:{
        fontSize: RF(12),
        marginTop:RF(15)
        
    },
    title:{
        fontSize:RF(18),
        // marginLeft:RF(20),
        
    },
    input:{
        color:BLACK,
        fontSize:RF(14),
        marginTop:RF(10),
    },
    accountCreata:{
        fontSize:RF(13),
        alignSelf:'center',
        marginTop:RF(15)
    },
})