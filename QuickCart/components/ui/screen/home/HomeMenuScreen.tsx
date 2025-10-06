import {View, Text, StyleSheet} from 'react-native';
import { Menu } from 'react-native-paper';
import {COLORS} from "@/constants/CollorPallet";
export default function HomeMenuScreen({navigation}:any){
    return(
        <View style={styles.container}>
            <Menu.Item leadingIcon="shopping-outline"  onPress={() => {navigation.navigate('MyOrders')}} title="My Orders" />
            <Menu.Item leadingIcon="cog-outline" onPress={() => {navigation.navigate('Settings')}} title="Settings" />
            <Menu.Item leadingIcon="ticket-confirmation-outline" onPress={() => {navigation.navigate('Vouchers')}} title="Vouchers" />
            <Menu.Item leadingIcon="tag-outline" onPress={() => {navigation.navigate('DailyDeals')}} title="Daily Deals" />
            <Menu.Item leadingIcon="bell-outline" onPress={() => {navigation.navigate('Notifications')}} title="Notification" />
            <Menu.Item leadingIcon="package-variant-closed" onPress={() => {navigation.navigate('LatestProducts')}} title="Latest Products" />
            <Menu.Item leadingIcon="account-outline" onPress={() => {navigation.navigate('Profile')}} title="Profile" />
            <Menu.Item leadingIcon="headset" onPress={() => {navigation.navigate('CustomerCare')}} title="Customer Care" />
            <Menu.Item leadingIcon="logout" onPress={() => {navigation.navigate('CustomerCare')}} title="Log Out" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    }
})