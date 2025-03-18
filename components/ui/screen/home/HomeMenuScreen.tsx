import {View, Text, StyleSheet} from 'react-native';
import { Menu } from 'react-native-paper';
import {COLORS} from "@/constants/CollorPallet";
export default function HomeMenuScreen({navigation}:any){
    return(
        <View style={styles.container}>
            <Menu.Item leadingIcon="shopping-outline"  onPress={() => {}} title="My Orders" />
            <Menu.Item leadingIcon="cog-outline" onPress={() => {}} title="Settings" />
            <Menu.Item leadingIcon="ticket-confirmation-outline" onPress={() => {}} title="Vouchers" />
            <Menu.Item leadingIcon="tag-outline" onPress={() => {}} title="Daily Deals" />
            <Menu.Item leadingIcon="bell-outline" onPress={() => {}} title="Notification" />
            <Menu.Item leadingIcon="package-variant-closed" onPress={() => {}} title="Latest Products" />
            <Menu.Item leadingIcon="account-outline" onPress={() => {}} title="Profile" />
            <Menu.Item leadingIcon="headset" onPress={() => {navigation.navigate('CustomerCareScreen')}} title="Customer Care" />
            <Menu.Item leadingIcon="logout" onPress={() => {}} title="Log Out" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white

    }
})