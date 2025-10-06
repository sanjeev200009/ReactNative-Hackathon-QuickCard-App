import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Searchbar} from "react-native-paper";
import {useState} from "react";
import {COLORS} from "@/constants/CollorPallet";
export default function DisplayTypeWidget({callback}:any){
    const [gridState,setGridState] = useState(true);
    return(
        <View style={styles.container}>
             <TouchableOpacity
                 onPress= {()=>{
                     setGridState(true);
                     callback(true);
                 }}
                 style={{...styles.button, backgroundColor:gridState?COLORS.blue:COLORS.darkGray} }>
                 <Icon size={20} source={'grid'} color={gridState?COLORS.white:COLORS.blue}/>
             </TouchableOpacity>
            <TouchableOpacity
                onPress= {()=>{
                    setGridState(false);
                    callback(false);
                }}
                style={{...styles.button, backgroundColor:gridState?COLORS.darkGray:COLORS.blue} }>
                <Icon size={20} source={'menu'} color={gridState?COLORS.blue:COLORS.white}/>
            </TouchableOpacity>
        </View>
)
}
const styles = StyleSheet.create({
    button:{
    width:60,
    height:25,
    justifyContent:'center',
        alignItems: 'center'
    },
    container:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:10
    }
})