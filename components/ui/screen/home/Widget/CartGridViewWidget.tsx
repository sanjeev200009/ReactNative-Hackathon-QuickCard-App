import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { COLORS } from "@/constants/CollorPallet";
import {Icon} from "react-native-paper";
import {useState} from "react";

export default function CartGridViewWidget() {
    const  [Qty, setQty] = useState(0);
    const  changeQty = (value:number) =>{
        if(value < 0){
            return;
        }
        setQty(value)
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.bookMarkButton}>
                          <Icon size={20} source={'heart-outline'} color={COLORS.orange}/>
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1698148530/catalog/1699228982658334720/pjslj5mvtp6kyde5cfl4.jpg' }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {/* Product Details */}
            <View style={styles.details}>
                <Text style={styles.name}>
                    Air Jordwen X Men's Basketball Shoes, High-Top Sneakers with Cushioning & Ankle Support – Black/Red
                </Text>
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
