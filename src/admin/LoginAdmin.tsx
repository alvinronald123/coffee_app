import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const myLogo = require('../assets/app_images/logo.png');

const LoginAdmin = ({ navigation, route }: any) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success'); // can be 'success' or 'error'
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    useEffect(() => {
        return () => {
            // Clear timeout on component unmount
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    const showAlert = (message: string, type: 'success' | 'error' = 'success') => {
        setAlertMessage(message);
        setAlertType(type);
        setAlertVisible(true);

        const id = setTimeout(() => {
            setAlertVisible(false);
            if (type === 'success') {
                navigation.navigate('Tab');
            }
        }, 3000); // 3 seconds delay
        setTimeoutId(id);
    };

    const handleLogin = async () => {
        // Validation logic
        if (!username || !email || !password) {
            showAlert('All fields are required. Please fill out all fields.', 'error');
            return;
        }

        try {
            const response = await fetch('http://192.168.18.27:3000/users'); // Adjust this to your actual server IP address
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const users = await response.json();
            const user = users.find((user: any) =>
                user.username === username &&
                user.email === email &&
                user.password === password
            );

            if (user) {
                await AsyncStorage.setItem('userDetails', JSON.stringify(user));
                showAlert('Login successful: Welcome ' + user.username, 'success');
                // Reset the input fields
                setUsername('');
                setEmail('');
                setPassword('');
            } else {
                showAlert('Login failed: User not found or incorrect credentials', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('An error occurred. Please try again.', 'error');
        }
    };

    const handleCloseAlert = () => {
        setAlertVisible(false);
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={myLogo} style={styles.logo} />
                    <Text style={styles.title}>Coffee App Login User</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder='UserName'
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate('RegisterAdmin')} style={styles.linkText}>
                    I Do Not Have An Account "Click Here Please"
                </Text>

                <Modal
                    transparent={true}
                    visible={alertVisible}
                    animationType="slide"
                    onRequestClose={handleCloseAlert}
                >
                    <View style={styles.modalContainer}>
                        <View style={[
                            styles.alertBox,
                            alertType === 'success' ? styles.success : styles.error
                        ]}>
                            <Text style={styles.alertText}>{alertMessage}</Text>
                            <TouchableOpacity onPress={handleCloseAlert}>
                                <Text style={styles.alertClose}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: "black",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
        color: 'black',
        marginLeft: 15,
    },
    input: {
        height: 50,
        width: '100%',
        marginLeft: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 20,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        width: 200,
        height: 50,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    linkText: {
        color: 'blue',
        fontSize: 15,
        marginTop: 10,
    },
    logo: {
        width: 120,
        height: 120,
        marginLeft: 75,
        borderRadius: 50,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    success: {
        backgroundColor: 'green',
    },
    error: {
        backgroundColor: 'red',
    },
    alertText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    alertClose: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LoginAdmin;
