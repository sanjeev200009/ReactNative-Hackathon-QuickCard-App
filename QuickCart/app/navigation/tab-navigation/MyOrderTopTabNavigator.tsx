import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import MyOrderScreen from "@/components/ui/screen/other/orders/MyOrderScreen";
import ReturnScreen from "@/components/ui/screen/other/orders/ReturnScreen";
import RefundScreen from "@/components/ui/screen/other/orders/RefundScreen";
const TopTab = createMaterialTopTabNavigator();
export default function MyOrderTopTabNavigator(){
    return(
        <TopTab.Navigator>
            <TopTab.Screen name={'MyOrder'} options={{title:'MyOrders'}} component={MyOrderScreen}/>
            <TopTab.Screen name={'Return'} component={ReturnScreen}/>
            <TopTab.Screen name={'Refund'} component={RefundScreen}/>
        </TopTab.Navigator>

    )
}
const styles = StyleSheet.create({

})