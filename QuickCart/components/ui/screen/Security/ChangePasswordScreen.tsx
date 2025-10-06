import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";
const logo = require('../../../../assets/images/logo/logo.png');

export default function ChangePasswordScreen({navigation}:any){
    const  [email , SetEmail] = useState('');

    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoWrapper}>
              <Image source={logo} style={styles.logo} resizeMode={'contain'}  />
           </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <Text style={styles.VerificationLabel}>
                        Verify your email
                    </Text>
                <TextInput
                    label="Root Email here "
                    mode={"outlined"}
                    value={email}
                    onChangeText={text => SetEmail(text)}
                 />
                </View>


                <TouchableOpacity style={styles.LoginButton} onPress={()=>navigation.navigate('ResetPasswordVerifyEmail')}>
                    <Text style={styles.LoginText}>Verify</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    VerificationLabel:{
        marginStart:4,
        marginBottom:8,
        fontSize:16
    },
    iconOuter:{
       backgroundColor:COLORS.lightGray,
        width:50,
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'

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