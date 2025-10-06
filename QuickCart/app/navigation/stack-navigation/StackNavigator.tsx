import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomNavigation";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import LatestProductScreen from "@/components/ui/screen/other/LatestProductScreen";
import MyOrderScreen from "@/components/ui/screen/other/orders/MyOrderScreen";
import NotificationScreen from "@/components/ui/screen/other/NotificationScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import VoucherScreen from "@/components/ui/screen/other/VoucherScreen";
import LoginScreen from "@/components/ui/screen/Security/LoginScreen";
import SignupScreen from "@/components/ui/screen/Security/SignupScreen";
import SignupVerifyEmailScreen from "@/components/ui/screen/Security/SignupVerifyEmailScreen";
import forgotPasswordScreen from "@/components/ui/screen/Security/ChangePasswordScreen";
import MyOrderTopTabNavigator from "@/app/navigation/tab-navigation/MyOrderTopTabNavigator";
import ResetPasswordVerifyEmailScreen from "@/components/ui/screen/Security/ResetPasswordVerifyEmailScreen";
import ResetPasswordScreen from "@/components/ui/screen/Security/ResetPasswordScreen";
import ProductDetailsScreen from "@/components/ui/screen/ProductDetailsScreen";

const Stack = createStackNavigator();
export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Process'}
            options={{headerLeft:()=>null, headerShown:false}}
            component={HomeBottomTabNavigation}/>

            <Stack.Screen name={'CustomerCare'}
                          options={{title:'Customer Care'}}
                          component={CustomerCareScreen}/>

            <Stack.Screen name={'DailyDeals'}
                          options={{title:'Daily Deals'}}
                          component={DailyDealsScreen}/>

            <Stack.Screen name={'LatestProducts'}
                          options={{title:'Latest Products'}}
                          component={LatestProductScreen}/>

            <Stack.Screen name={'MyOrders'}
                          options={{title:'My Orders'}}
                          component={MyOrderTopTabNavigator}/>

            <Stack.Screen name={'Vouchers'}
                          options={{title:'Vouchers'}}
                          component={VoucherScreen}/>

            <Stack.Screen name={'Notifications'}
                          options={{title:'Notifications'}}
                          component={NotificationScreen}/>

            <Stack.Screen name={'Profile'}
                          options={{title:'Profile'}}
                          component={ProfileScreen}/>

            <Stack.Screen name={'Settings'}
                          options={{title:'Settings'}}
                          component={SettingsScreen}/>

            <Stack.Screen name={'Login'}
                          options={{title:'Login Here'}}
                          component={LoginScreen}/>

            <Stack.Screen name={'Register'}
                          options={{title:'Register your Account Here'}}
                          component={SignupScreen}/>

            <Stack.Screen name={'verifyEmailforResitration'}
                          options={{title:'Verify Your Email here'}}
                          component={SignupVerifyEmailScreen}/>

            <Stack.Screen name={'ChangePasswordScreen'}
                          options={{title:'Change Password'}}
                          component={forgotPasswordScreen}/>

            <Stack.Screen name={'ResetPasswordVerifyEmail'}
                          options={{title:'Verify Email'}}
                          component={ResetPasswordVerifyEmailScreen}/>

            <Stack.Screen name={'ResetPassword'}
                           options={{title:'Reset Password'}}
                           component={ResetPasswordScreen}/>

                <Stack.Screen name={'ProductDetails'}
                              options={{title:'Product Details'}}
                              component={ProductDetailsScreen}/>




        </Stack.Navigator>
    )
}