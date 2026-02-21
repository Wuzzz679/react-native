import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
return(
<View style={styles.container}>
<TextInput placeholder="🔍 Search"/>
</View>
);}
const styles = StyleSheet.create({
container:{
backgroundColor:'lightgray',
marginVertical: 10,
padding: 10
}});
export default SearchBar;