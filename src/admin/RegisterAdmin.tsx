import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BORDERRADIUS } from '../theme/theme';

const myLogo = require('../assets/app_images/logo.png');

const RegisterAdmin = ({ navigation, route }: any) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success'); // can be 'success' or 'error'
    const [timeoutId, setTimeoutId] = useState(null);

    const showAlert = (message, type = 'success') => {
        setAlertMessage(message);
        setAlertType(type);
        setAlertVisible(true);

        if (type === 'success') {
            const id = setTimeout(() => {
                setAlertVisible(false);
                navigation.navigate('LoginAdmin');
            }, 3000); // 3 seconds delay
            setTimeoutId(id);
        }
    };

    const handleLogin = async () => {
        // Validation logic
        if (!username || !email || !phone || !password) {
            showAlert('All fields are required. Please fill out all fields.', 'error');
            return;
        }

        try {
            const response = await fetch('http://192.168.18.27:3000/users', { // Use your machine's IP if on a physical device
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    phone,
                    password
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data.message);
            showAlert('Registration successful! Please log in.', 'success');
        } catch (error) {
            console.error('Error:', error);
            showAlert('An error occurred during registration. Please try again.', 'error');
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
                    <Image
                        source={myLogo}
                        alt="LOGO"
                        style={styles.logo}
                    />
                    <Text style={styles.title}> Coffee App Register User</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder='UserName'
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
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
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate('LoginAdmin')} style={styles.linkText}>I Do Have An Account "Click Here Please"</Text>

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
        marginLeft: "25%",
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
        marginLeft: "50%",
        marginRight: "50%",
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

export default RegisterAdmin;
