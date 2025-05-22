import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import ProductGridViewWidget from "@/components/ui/screen/home/Widget/ProductGridViewWidget";
import {COLORS} from "@/constants/CollorPallet";
import ProductListViewWidget from "@/components/ui/screen/home/Widget/ProductListViewWidget";
export default function HomeProductsScreen({navigation}:any){
    const [searchQuery,setSearchQuery] = useState('');
    const [IsGridEnabled,setIsGridEnabled] = useState(false);
    const manageGridView=({state}:any)=>{
       setIsGridEnabled(state);
        console.log(IsGridEnabled);
    }
    return(
        <View style={styles.container}>
            <Searchbar style={styles.searchBar}
                placeholder="Search products"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget callback={(state:boolean)=>setIsGridEnabled(state)}/>

            {IsGridEnabled?(
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <ProductGridViewWidget navigation={navigation}/>
                    <ProductGridViewWidget navigation={navigation}/>
                    <ProductGridViewWidget navigation={navigation}/>
                    <ProductGridViewWidget navigation={navigation}/>
                </ScrollView>
            ):(
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <ProductListViewWidget navigation={navigation}/>
                    <ProductListViewWidget navigation={navigation}/>
                    <ProductListViewWidget navigation={navigation}/>
                    <ProductListViewWidget navigation={navigation}/>
                </ScrollView>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 25,
        shadowColor: COLORS.dimGray,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 2,
        borderColor: COLORS.lightGray,
        marginVertical: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 10,
        color: COLORS.darkGray,
        marginLeft: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.gray,
    },
    container:{
        flex:1,
        padding:10,
    }
})