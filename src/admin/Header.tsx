import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const Header = () => {
    const [data, setData] = useState([]);

    const getAPIdata = async () => {
        const url = "http://172.20.10.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    };

    useEffect(() => {
        getAPIdata();
    }, []);
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('../assets/app_images/logo.png')}
                style={styles.image}
            />
            {data.length ? data.map((item) => (
                <View style={styles.inputs} key={item.id}>
                    <Text style={styles.texts}> {item.username}</Text>
                    <Text style={styles.texts}>{item.email}</Text>
                    <Text style={styles.texts}>{item.phone}</Text>
                </View>
            )) : null}
            <Image
                source={require('../assets/app_images/logo.png')}
                style={styles.image}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2,

    },
    inputs: {
        display: 'flex',
        flexDirection: 'column',
    },
    texts: {
        fontSize: 18,
        color: 'black',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        margin: 10,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    dropdownContainer: {
        width: '100%',
        marginVertical: 10,
    },
    dropdown: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    label: {
        padding: 10,
    },
});

export default Header;
