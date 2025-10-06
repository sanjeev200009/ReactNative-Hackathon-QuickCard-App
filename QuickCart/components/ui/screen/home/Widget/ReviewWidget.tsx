import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { COLORS } from "@/constants/CollorPallet";
import {Icon} from "react-native-paper";
import {useState} from "react";

export default function ReviewWidget() {

    return (
        <View style={{backgroundColor:COLORS.lightGray, padding:5, borderRadius:3 ,marginBottom:5}}>
            <Text style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab aspernatur, consectetur debitis, dicta eaque et facilis ipsam
                minima modi officiis pariatur, quos recusandae sequi sunt tenetur
                ullam ut veritatis voluptates.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBar:{
        marginTop:20,
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button:{
       width:35,
       height:35,
       borderRadius:50,
       borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:COLORS.blue
    },
    bookMarkButton:{
      width:40,
      height:40,
      backgroundColor:COLORS.primary,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
       position:'absolute',
       right:10,
       top:10,
        zIndex:1
    },
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 12,
    },
    imageContainer: {
        backgroundColor: COLORS.blue,
        borderRadius: 8,
        padding: 5,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 12,
        borderRadius: 8,
    },
    details: {
        marginTop: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.darkGray,
        lineHeight: 22,
    },
    price: {
        color: COLORS.orange,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    qty: {
        textAlign: 'right',
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 5,
    },
});
