import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";
const logo = require('../../../../assets/images/logo/logo.png');

export default function ResetPasswordScreen({navigation}:any){
    const  [email , SetEmail] = useState('');
    const  [password , SetPassword] = useState('');
    const [PasswordDisplayState, setPasswordDisplayState] = useState(true);
    const  [ConfirmPassword , SetConfirmPassword ] = useState('');
    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoWrapper}>
              <Image source={logo} style={styles.logo} resizeMode={'contain'}  />
           </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Enter Password"
                        mode={"outlined"}
                        secureTextEntry={PasswordDisplayState}
                        value={password}
                        onChangeText={text => SetPassword(text)}
                        right={
                            <TextInput.Icon
                                onPress={() => setPasswordDisplayState(!PasswordDisplayState)}
                                size={20}
                                icon={PasswordDisplayState ? 'eye-off' : 'eye'}
                            />
                        }
                    />

                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Confirm Password"
                        mode={"outlined"}
                        secureTextEntry={PasswordDisplayState}
                        value={password}
                        onChangeText={text => SetConfirmPassword(text)}
                        right={
                            <TextInput.Icon
                                onPress={() => setPasswordDisplayState(!PasswordDisplayState)}
                                size={20}
                                icon={PasswordDisplayState ? 'eye-off' : 'eye'}
                            />
                        }
                    />

                </View>

                <TouchableOpacity style={styles.LoginButton} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.LoginText}>Reset Password</Text>
                </TouchableOpacity>



            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    iconOuter:{
       backgroundColor:COLORS.lightGray,
        width:50,
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'

    },
    SocialLoginWrapper:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'

    },
    SeparateText:{
        marginTop:50,
        textAlign:'center'
    },
    LoginText:{
        color:COLORS.white
    },
    LoginButton:{
        backgroundColor:COLORS.blue,
        borderRadius:3,
        marginTop:30,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    ForgotPasswordText:{
        color:COLORS.blue,
        textDecorationLine:'underline'
    },
    ForgotPasswordButton:{
        alignItems:'flex-end'
    },
    formGroup:{
     marginBottom:10,
    },
    inputOuter:{
       marginTop:50
    },
    logo:{
      width:200,
      height:60
    },
    logoWrapper:{
        alignItems:"center",
        marginTop:20
    },
    container:{
        flex:1,
        padding:10,
        backgroundColor:COLORS.white,
    }
})