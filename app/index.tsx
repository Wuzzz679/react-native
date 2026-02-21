import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, FlatList, Image, KeyboardAvoidingView, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Home() {
const [modalVisible, setModalVisible] = useState(false);
const [inputText, setInputText] = useState('');
const data = [
{ id: '1', name: 'HamBurger' },
{ id: '2', name: 'Cheeseburger' },
{ id: '3', name: 'Fries' }
];
return (
<KeyboardAvoidingView style={{ flex: 1 }}>
<ScrollView>
<Text>Home Screen</Text>
        
<Image source={{ uri: 'https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/thumbnails/burger-with-melted-cheese-m-Y1i3jpYYJZYfOEfX5dX.webp' }}
 style={{ width: 200, height: 200 }} />

<SearchBar />
<Button title="Go to Orders" onPress={() => router.push('/orders')} />
    <TextInput 
    placeholder="Type here" 
    value={inputText}
    onChangeText={setInputText}
    />

<TouchableOpacity onPress={() => Alert.alert('Button Pressed')}>
<Text>Press me</Text>
</TouchableOpacity>

<Button title="Show Modal" onPress={() => setModalVisible(true)} />

<Modal visible={modalVisible}>
<View>
<Text>This is a modal</Text>
<Button title="Close" onPress={() => {
setModalVisible(false);
Alert.alert('Modal Closed');}} />

</View>
</Modal>

<FlatList
data={data}
keyExtractor={(item) => item.id}
renderItem={({item}) => <Text>{item.name}</Text>}
/>

 </ScrollView>
</KeyboardAvoidingView>
 );}