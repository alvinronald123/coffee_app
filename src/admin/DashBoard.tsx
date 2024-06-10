import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from './Header';
import PostData from './PostData';


const DashBoard = ({ navigation, route }: any) => {
    const clickHere = () => {
        navigation.navigate('PostData');
    }
    const clickHere2 = () => {
        navigation.navigate('ViewPost');
    }
    const clickHere3 = () => {
        navigation.navigate('UpdatePost');
    }
    const clickHere4 = () => {
        navigation.navigate('DeletePost');
    }
    const myBack = () => {
        navigation.navigate('LoginAdmin');
    }
    return (
        <View>
            <Header />
            <View style={styles.container}>
                <Text style={styles.text}>Coffee App DashBoard</Text>
                <View style={styles.underline}></View>
                <View style={styles.optionContainer}>
                    <View style={[styles.option, { backgroundColor: 'green' }]}>
                        <Text onPress={clickHere} style={styles.optionText}> Post Data</Text>
                    </View>
                    <View style={[styles.option, { backgroundColor: 'red' }]}>
                        <Text onPress={clickHere4} style={styles.optionText}>Delete Posts</Text>
                    </View>
                    <View style={[styles.option, { backgroundColor: 'blue' }]}>
                        <Text onPress={clickHere2} style={styles.optionText}>View Post</Text>
                    </View>
                    <View style={[styles.option, { backgroundColor: 'orange', marginBottom: 10, }]}>
                        <Text onPress={clickHere3} style={styles.optionText}>Update Post</Text>
                    </View>
                    <Button title='Back' onPress={myBack} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginLeft: 50,
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        width: '90%',
        marginTop: 5,
    },
    optionContainer: {
        flexDirection: 'column',
        // justifyContent: 'space-between',
        marginTop: 5,
    },
    option: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    optionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DashBoard;
