import {View, Text, StyleSheet} from 'react-native';
export default function CustomerCareScreen(){
    return(
        <View style={styles.container}>
            <Text>Customer Care</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})