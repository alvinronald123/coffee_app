import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './Header';
import DashBoard from './DashBoard';


const PostData = ({ navigation, route }: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [roasted, setRoasted] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [specialIngredients, setSpecialIngredients] = useState('');
    const [averageRating, setAverageRating] = useState('');
    const [ratingsCount, setRatingsCount] = useState('');
    const [type, setType] = useState('');
    const [small, setSmall] = useState('');
    const [medium, setMedium] = useState('');
    const [large, setLarge] = useState('');
    const [currency, setCurrency] = useState('');



    const clickHere = () => {
        navigation.navigate('DashBoard');
    }

    const handleSubmit = () => {
        // Your submit logic here

    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Header />
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Roasted"
                        value={roasted}
                        onChangeText={setRoasted}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Image"
                        value={image}
                        onChangeText={setImage}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingredients"
                        value={ingredients}
                        onChangeText={setIngredients}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Special Ingredients"
                        value={specialIngredients}
                        onChangeText={setSpecialIngredients}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Average Rating"
                        value={averageRating}
                        onChangeText={setAverageRating}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ratings Count"
                        value={ratingsCount}
                        onChangeText={setRatingsCount}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Type"
                        value={type}
                        onChangeText={setType}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Small payment Money"
                        value={small}
                        onChangeText={setSmall}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Medium payment Money"
                        value={medium}
                        onChangeText={setMedium}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Large payment Money"
                        value={large}
                        onChangeText={setLarge}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Currency"
                        value={currency}
                        onChangeText={setCurrency}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button title="Submit" onPress={handleSubmit} />
                        <View style={{ marginLeft: 20, marginRight: 20, }}></View>
                        <Button title="Back" onPress={clickHere} />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
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

export default PostData;
