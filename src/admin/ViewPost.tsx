import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ViewPost = ({ navigation, route }: any) => {
    const clickHere = () => {
        navigation.navigate('DashBoard');
    }
    return (
        <View>
            <Text onPress={clickHere} > View Post</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ViewPost;
