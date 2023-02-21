import { StyleSheet } from "react-native";
import { COLORS } from "@theme/colors";
import { FONTS } from "@theme/fonts";
import { RF } from "@theme/responsive";

const{
    SECONDARY_BLUE,
    WHITE,
    BLACK,
    GRAY
}=COLORS

export const styles = StyleSheet.create({
    header:{
        flex: 0.4,
        backgroundColor:SECONDARY_BLUE
    },
    container:{
        justifyContent:'center',
        // alignItems:'center',
        flex:1
    },
    title:{
        fontSize:RF(18),
        marginLeft:RF(20),
        
    },
    accountCreata:{
        fontSize:RF(13),
        alignSelf:'center',
        marginTop:RF(15)
    },
    form:{
        margin:20,
    },
    input:{
        marginBottom:RF(15),
        fontSize:RF(13),
        color:BLACK
    },
    welcom:{
        fontSize:RF(16),
        margin:RF(10),
        marginLeft:RF(20)
    },
    forgot:{
        marginRight:RF(20),
        alignSelf:'flex-end'
    }
})