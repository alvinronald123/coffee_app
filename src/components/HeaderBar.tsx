import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import { useNavigation } from '@react-navigation/native';

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    const navigation = useNavigation(); // Get navigation object using useNavigation hook
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                // Fetch the username from AsyncStorage
                const userDetails = await AsyncStorage.getItem('userDetails');
                if (userDetails) {
                    const { username } = JSON.parse(userDetails);
                    setUsername(username);
                }
            } catch (error) {
                console.error('Error fetching username:', error);
            }
        };

        fetchUsername();
    }, []);

    const handlePress = async () => {
        Alert.alert(
            `${username} Confirmation`,
            `Are you sure you want to log out, ${username}?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes Please ',
                    onPress: async () => {
                        console.log('Logout Pressed');
                        try {
                            // Clear user session from AsyncStorage or any other storage mechanism
                            await AsyncStorage.removeItem('userDetails');
                            // Navigate to LoginAdmin screen
                            navigation.navigate('LoginAdmin');
                        } catch (error) {
                            console.error('Error clearing user session:', error);
                        }
                    },
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity onPress={handlePress}>
                <GradientBGIcon
                    name="menu"
                    color={COLORS.primaryLightGreyHex}
                    size={FONTSIZE.size_16}
                />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>{username} </Text>
            <Text style={styles.HeaderText}>{title} </Text>

            <ProfilePic />
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
});

export default HeaderBar;
