import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Orders() {
  return ( 
  
<View>

< SearchBar/>
<Text>HamBurger</Text>
<Text>CheeseBurger</Text>
<Text>Fries</Text>
<Button title="Back" onPress={() => router.back()} />
</View>
);}