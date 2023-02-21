import { StyleSheet } from "react-native";
import { RF } from "@theme/responsive";
import { COLORS } from "@theme/colors";

const{
    GRAY,
    SECONDARY_BLACK,
    SECONDARY_BLUE
}=COLORS
export const styles= StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        // backgroundColor:'pink'
        marginTop:RF(50)
    },
    heading:{
        fontSize:RF(20),
        marginBottom:RF(10)
    },
    input:{
        width:'90%',
        marginTop:RF(20)
    }
})