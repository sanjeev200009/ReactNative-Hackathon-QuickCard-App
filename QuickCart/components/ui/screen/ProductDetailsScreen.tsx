import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Button, Icon, Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import ProductGridViewWidget from "@/components/ui/screen/home/Widget/ProductGridViewWidget";
import {COLORS} from "@/constants/CollorPallet";
import ReviewWidget from "@/components/ui/screen/home/Widget/ReviewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/Widget/ProductListViewWidget";

const { width } = Dimensions.get("window");

export default function ProductDetailsScreen() {

    const productImages = [
        { uri: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/9984b026-9ed7-47ec-a9de-086f24ec9d39/nike-launches-adapt-bb-a-self-lacing-performance-basketball-shoe.jpg" },
        { uri: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/3f8c5b05-6d0f-49f4-b472-7425357e6a52/dunk-low-retro-shoes-mh4Q5d.png" },
        { uri: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/d4941cf1-0a49-48ad-8b18-507bb9f1ba1b/sabrina-2-stronger-than-gold-ep-basketball-shoes-sRw62Z.png" }
    ];

    const [primaryImage, setPrimaryImage] = useState(productImages[0].uri);
    const [status, setStatus] = useState(true);


    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: primaryImage }} style={styles.mainImage} resizeMode="contain" />
            </View>
            <View style={styles.imageListContainer}>
                {productImages.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setPrimaryImage(item.uri)} style={styles.thumbnailWrapper}>
                        <Image source={{ uri: item.uri }} style={styles.thumbnail} resizeMode="contain" />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Nike Adapt BB 2.0 | Nike Adapt BB 2.0 | Nike Adapt BB 2.0 </Text>
                <View style={{marginTop:10, flexDirection:'row'}}>
                    <Text style={styles.ActualproductPrice}>$249.99</Text>
                    <Text style={styles.DiscountproductPrice}>$249.99</Text>
                </View>
                <Text style={styles.productDescription}>Experience self-lacing technology with the latest Nike Adapt BB 2.0, designed for ultimate comfort and precision fit.</Text>
                {/*<Button mode="contained" style={styles.buyButton} onPress={() => console.log("Buy Now Pressed")}>Buy Now</Button>*/}
                {/*<Button mode="outlined" style={styles.cartButton} onPress={() => console.log("Add to Cart Pressed")}>Add to Cart</Button>*/}
            </View>
            <View style={{marginTop:20, flexDirection:'row', justifyContent:'flex-end'}}>
                <TouchableOpacity style={{...styles.btn, backgroundColor:COLORS.primary, marginRight:10}}>
                    <Icon size={20} source={'cart'} color={COLORS.white}/>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.btn, backgroundColor:COLORS.blue}}>
                    <Text style={{color:COLORS.white}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
             <View style={styles.tab} >
                            <TouchableOpacity
                                onPress={()=>setStatus(true)}
                                style={{...styles.tabButton, backgroundColor:status?COLORS.primary:COLORS.white  }}>
                                <Text style={{color:status?COLORS.white:COLORS.primary }}>Reviews</Text>
                            </TouchableOpacity>
                             <TouchableOpacity
                                 onPress={()=>setStatus(false)}
                                 style={{...styles.tabButton, backgroundColor:status?COLORS.white:COLORS.primary }}>
                                 <Text style={{color:status?COLORS.primary:COLORS.white }}>Recommended</Text>
                             </TouchableOpacity>
             </View>
            {
                status?(
                    <View>
                         <ReviewWidget/>
                          <ReviewWidget/>
                          <ReviewWidget/>
                          <ReviewWidget/>
                    </View>

                ):(
                        <View>
                          <ProductListViewWidget/>
                          <ProductListViewWidget/>
                          <ProductListViewWidget/>
                          <ProductListViewWidget/>
                        </View>
                )
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tabButton:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        height: 35,
        width:120
    },

    tab:{
       height: 50,
       marginTop:20 ,
        marginBottom:20,
       flexDirection:'row'
    },
    btn:{
        width:120,
        height:35,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
    },
    imageContainer: {
        width: "100%",
        height: 350,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
    },
    mainImage: {
        width: "90%",
        height: "90%",
    },
    imageListContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    thumbnailWrapper: {
        width: 80,
        height: 80,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 8,
        overflow: "hidden",
    },
    thumbnail: {
        width: "100%",
        height: "100%",
    },
    productDetails: {
        padding: 15,
        fontWeight:'bold'
    },
    productTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.black,
    },
    ActualproductPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.primary,
        marginTop: 5,
    },
    DiscountproductPrice:{
        fontSize: 18,
        fontWeight: "bold",
        marginStart: 10,
        marginRight: 10,
        color: COLORS.primary,
        marginTop: 5,
        textDecorationLine:'line-through'
    },
    productDescription: {
        fontSize: 14,
        color: COLORS.darkGray,
        marginVertical: 10,
    },
    buyButton: {
        marginVertical: 10,
        backgroundColor: COLORS.primary,
    },
    cartButton: {
        borderColor: COLORS.primary,
    },
});
