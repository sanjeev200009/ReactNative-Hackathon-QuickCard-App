import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { COLORS } from "@/constants/CollorPallet";
import {Icon} from "react-native-paper";

export default function ProductGridViewWidget() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.bookMarkbutton}>
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
                <Text style={styles.qty}>QTY: 15</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bookMarkbutton:{
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
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Replaces shadow* properties
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
