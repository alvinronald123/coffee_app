import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { COLORS, SPACING } from '../theme/theme';
import LoginAdmin from '../admin/LoginAdmin';


const ProfilePic = () => {
    return (

        <View style={styles.ImageContainer}>
            <Image
                source={require('../assets/app_images/logo.png')}
                style={styles.Image}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    ImageContainer: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Image: {
        height: SPACING.space_36,
        width: SPACING.space_36,
    },
});

export default ProfilePic;
