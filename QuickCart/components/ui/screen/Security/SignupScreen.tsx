import { View, Text, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { COLORS } from "@/constants/CollorPallet";
import { TextInput } from "react-native-paper";
import {useEffect, useState } from "react";
import axios from "axios";
import getBaseUrl from "../../../../constants/BASEURL";


const logo = require('../../../../assets/images/logo/logo.png');

export default function SignupScreen({ navigation }: any) {

    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async () => {
        // Validation first
        if (!email.trim() || !displayName.trim() || !password.trim()) {
            Alert.alert("Validation Error", "All fields are required!");
            return;
        }

        try {
            const response = await axios.post(`${getBaseUrl()}users/create-user`, {
                username: email,
                displayName,
                password,
                roles: ['ADMIN'],
                isActive: false
            });
            
            if (response.status === 201) {
                navigation.navigate('verifyEmailforResitration', {
                    email: email,
                    username: email
                });
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.error("Error while creating user:", error);
            Alert.alert("Registration Error", "Failed to create account. Please try again.");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode='contain' />
            </View>

            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Email Address"
                        mode="outlined"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        label="User Name"
                        mode="outlined"
                        value={displayName}
                        onChangeText={setDisplayName}
                    />
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        label="Enter Password"
                        mode="outlined"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        right={
                            <TextInput.Icon
                                onPress={() => setShowPassword(!showPassword)}
                                size={20}
                                icon={showPassword ? 'eye-off' : 'eye'}
                            />
                        }
                    />
                </View>

                <TouchableOpacity style={styles.LoginButton}
                    onPress={() => handleRegister()}
                >
                    <Text style={styles.LoginText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.SeparateText}>Or</Text>

                <TouchableOpacity
                    style={[styles.LoginButton, { backgroundColor: COLORS.primary }]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.LoginText}>Already have an Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    SeparateText: {
        marginTop: 40,
        textAlign: 'center',
    },
    LoginText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    LoginButton: {
        backgroundColor: COLORS.blue,
        borderRadius: 8,
        marginTop: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formGroup: {
        marginBottom: 10,
    },
    inputOuter: {
        marginTop: 40,
    },
    logo: {
        width: 200,
        height: 60,
    },
    logoWrapper: {
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.white,
    },
});
