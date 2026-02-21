import { router } from 'expo-router';
import { Button, FlatList, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const Orders = () => {
return (
<View>
<SearchBar />
<FlatList
data={[
    { id: '1', name: 'HamBurger' },
    { id: '2', name: 'CheeseBurger' },
    { id: '3', name: 'Fries' }
 ]}
renderItem={({ item }) => <Text>{item.name}</Text>}
keyExtractor={item => item.id}
/>
 <Button title="Go Back" onPress={() => router.back()} />
</View>
 );
};

export default Orders;