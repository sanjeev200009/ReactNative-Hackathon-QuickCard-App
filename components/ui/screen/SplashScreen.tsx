import { Text, StyleSheet, Animated, View, Image } from "react-native";
import { useEffect, useRef } from "react";
import { COLORS } from "@/constants/CollorPallet";
import appjson from '../../../app.json';

export default function SplashScreen({ onFinish }: any) {
    const logo = require('../../../assets/images/logo/logo.png');
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 3000, // Faster loading
            useNativeDriver: false
        }).start(() => {
            onFinish();
        });
    }, [onFinish]);

    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoWrapper}>
                <Image style={styles.logo} source={logo} resizeMode="contain" />
            </View>

            {/* Tagline */}
            <Text style={styles.tagline}>QuickCart: Your Fast Track to Easy Shopping</Text>

            {/* Animated Progress Bar */}
            <View style={styles.progressContainer}>
                <Animated.View
                    style={[
                        styles.progressbar,
                        { width: progress.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }
                    ]}
                />
            </View>

            {/* Footer Section */}
            <View style={styles.bottom}>
                <Text style={styles.versionText}>Version: {appjson.expo.version}</Text>
                <Text style={styles.fromText}>From: Sanjeev</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoWrapper: {
        marginBottom: 20,
    },
    logo: {
        height: 80, // Slightly bigger
    },
    tagline: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.darkGray,
        marginBottom: 15,
    },
    progressContainer: {
        width: '80%',
        height: 8, // Slightly thicker
        backgroundColor: COLORS.darkGray,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 15,
    },
    progressbar: {
        backgroundColor: COLORS.orange,
        borderRadius: 10,
        height: '100%',
    },
    bottom: {
        width: '100%',
        position: 'absolute',
        bottom: 15,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    versionText: {
        fontSize: 14,
        color: COLORS.darkGray,
    },
    fromText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.orange,
    },
});
