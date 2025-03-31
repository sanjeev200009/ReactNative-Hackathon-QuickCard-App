import {View, Text, StyleSheet, Alert, ScrollView, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";
import {tls} from "node-forge";

const logo = require('../../../../assets/images/logo/logo.png');

export default function SignupScreen({navigation}:any){
    const  [email , SetEmail] = useState('');
    const  [username, setUsername] = useState('');
    const  [password , SetPassword] = useState('');
    const [PasswordDisplayState, setPasswordDisplayState] = useState(true);

   const  handleResiter = () => {
       if(!email.trim() || !username.trim() || !password.trim()){
           Alert.alert("Validation Error, All fields are required!")
           return;
       }
       navigation.navigate('verifyEmailforResitration');
   }


    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoWrapper}>
              <Image source={logo} style={styles.logo} resizeMode={'contain'}  />
           </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                <TextInput
                    label="Root Email"
                    mode={"outlined"}
                    value={email}
                    onChangeText={text => SetEmail(text)}
                 />
                </View>
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
                        label="User Name"
                        mode={"outlined"}
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>

                <TouchableOpacity style={styles.LoginButton} onPress={handleResiter}>
                    <Text style={styles.LoginText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.SeparateText}>Or</Text>


                <TouchableOpacity style={[styles.LoginButton, { backgroundColor: COLORS.primary }]} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.LoginText}>Already have an Account</Text>
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