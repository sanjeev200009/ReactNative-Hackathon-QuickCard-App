import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState, useEffect} from "react";
import axios from "axios";
import getBaseUrl from "../../../../constants/BASEURL";

const logo = require('../../../../assets/images/logo/logo.png');

export default function SignupVerifyEmailScreen({navigation, route}:any){
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // Get email from navigation params (passed from SignupScreen)
    const userEmail = route?.params?.email || 'your email';
    const username = route?.params?.username || '';

    // Timer countdown
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0 && !canResend) {
            interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
        } else if (timer === 0) {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [timer, canResend]);

    const handleVerifyOTP = async () => {
        if (!otp.trim()) {
            Alert.alert("Validation Error", "Please enter OTP!");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${getBaseUrl()}users/verify-otp`, {
                username: username,
                otp: parseInt(otp)
            });
            
            console.log('OTP Verification Response:', response.status, response.data);
            
            if (response.status === 201) {
                setLoading(false);
                // Clear the OTP field
                setOtp('');
                
                // Option 1: Navigate immediately
                console.log('✅ OTP verified! Navigating to Login...');
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
                
                // Option 2: Show alert with navigation (backup)
                setTimeout(() => {
                    Alert.alert(
                        "Success", 
                        "Account verified successfully!", 
                        [
                            {
                                text: "Continue",
                                onPress: () => {
                                    console.log('Alert: Navigating to Login screen...');
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Login' }],
                                    });
                                }
                            }
                        ],
                        { cancelable: false }
                    );
                }, 100);
            } else {
                setLoading(false);
                Alert.alert("Error", "Verification failed. Please try again.");
            }
        } catch (error: any) {
            setLoading(false);
            console.error("OTP verification error:", error);
            
            if (error.response?.status === 404) {
                Alert.alert("Error", "Invalid OTP. Please try again.");
            } else if (error.response?.status === 409) {
                Alert.alert("Error", "User not found. Please register again.");
            } else {
                Alert.alert("Error", "Verification failed. Please try again.");
            }
            
            // Clear the OTP field on error
            setOtp('');
        }
    };

    const handleResendOTP = async () => {
        if (!canResend) return;
        
        setLoading(true);
        try {
            // You can call a resend OTP endpoint here if you have one
            Alert.alert("OTP Sent", "New OTP has been sent to your email!");
            setTimer(30);
            setCanResend(false);
            setOtp('');
        } catch (error) {
            console.error("Resend OTP error:", error);
            Alert.alert("Error", "Failed to resend OTP. Please try again.");
        }
        setLoading(false);
    };

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
                    <Text style={styles.EmailText}>
                        We sent a verification code to {userEmail}
                    </Text>

                <TextInput
                    label="Enter OTP"
                    mode={"outlined"}
                    value={otp}
                    keyboardType={'number-pad'}
                    maxLength={6}
                    onChangeText={text => setOtp(text)}
                 />
                </View>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('Register')}
                    style={styles.ForgotPasswordButton} >
                    <Text style={styles.ForgotPasswordText}>Change Email</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={handleResendOTP}
                    disabled={!canResend || loading}
                    style={[styles.ForgotPasswordButton, {opacity: canResend ? 1 : 0.5}]} >
                    <Text style={styles.ForgotPasswordText}>
                        {canResend ? "Resend OTP" : `Resend in (${timer}s)`}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleVerifyOTP}
                    disabled={loading}
                    style={[styles.LoginButton, {opacity: loading ? 0.5 : 1}]}>
                    <Text style={styles.LoginText}>
                        {loading ? "Verifying..." : "Verify"}
                    </Text>
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
    EmailText:{
        marginStart:4,
        marginBottom:12,
        fontSize:14,
        color:COLORS.darkGray,
        textAlign:'center'
    },
    iconOuter:{
       backgroundColor:COLORS.lightGray,
        width:50,
        height:50,
        borderRadius:50,
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