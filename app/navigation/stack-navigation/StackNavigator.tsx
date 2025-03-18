import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomNavigation";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
const Stack = createStackNavigator();
export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Process'}
            options={{headerLeft:()=>null, headerShown:false}}
            component={HomeBottomTabNavigation}/>

            <Stack.Screen name={'CustomerCareScreen'}
                          options={{title:'CustomerCare'}}
                          component={CustomerCareScreen}/>
        </Stack.Navigator>
    )
}