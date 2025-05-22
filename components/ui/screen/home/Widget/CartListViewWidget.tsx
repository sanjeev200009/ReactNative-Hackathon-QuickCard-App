import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon} from "react-native-paper";
import {useState} from "react";

export default function CartListViewWidget() {
    const  [Qty, setQty] = useState(0);
    const  changeQty = (value:number) =>{
        if(value < 0){
            return;
        }
        setQty(value)
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <Icon size={20} source={'heart-outline'} color={COLORS.white}/>
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1698148530/catalog/1699228982658334720/pjslj5mvtp6kyde5cfl4.jpg' }}
                    style={styles.image} resizeMode={'contain'}/>
            </View>
            <View style={{flex:1, padding:5}}>
                <Text style={styles.name}>Product Photos, Download The...</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                <View style={styles.buttonBar}>
                    <TouchableOpacity  onPress={()=>changeQty(Qty-1)}  style={styles.button}>
                        <Icon size={20} source={'minus'} color={COLORS.blue}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight:'bold',marginLeft:10,marginRight:10}}>{Qty}</Text>
                    <TouchableOpacity onPress={()=>changeQty(1+Qty) } style={styles.button}>
                        <Icon size={20} source={'plus'} color={COLORS.blue}/>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableOpacity>
    )
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
    bookmarkButton: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top:10,
        zIndex:1
    },
    qty: {
        textAlign: 'right'
    },
    price: {
        color: COLORS.orange,
        fontWeight: 'bold',
        fontSize: 20
    },
    name: {
        fontSize: 20,
        lineHeight: 20,
        marginTop: 5
    },
    image: {
        width: '100%',
        height:'100%'
    },
    imageView: {
        width:150,
        height:80,
        backgroundColor: COLORS.white,
        padding: 3
    },
    container: {
        width: '100%',
        padding: 8,
        backgroundColor: COLORS.darkGray,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection:'row'
    }
})