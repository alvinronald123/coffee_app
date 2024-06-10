import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UpdatePost = ({ navigation, route }: any) => {
    const clickHere = () => {
        navigation.navigate('DashBoard');
    }
    return (
        <View>
            <Text onPress={clickHere}>UpdatePost</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UpdatePost;
