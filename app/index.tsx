import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, KeyboardAvoidingView, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
  <KeyboardAvoidingView>
<ScrollView>
<View>
<Text>Home Screen</Text>
    <Image source={{ uri: 'https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/thumbnails/burger-with-melted-cheese-m-Y1i3jpYYJZYfOEfX5dX.webp' }} style={{ width: 200, height: 200 }} />
    <SearchBar />
          
<TouchableOpacity onPress={() => router.push("/orders")}>
 <Text>Go to Orders</Text>
</TouchableOpacity>
          
<Button title="Show Modal" onPress={() => setModalVisible(true)} />
          
<Modal visible={modalVisible}>
    <View>
    <Text>This is a modal</Text>
    <Button title="Close" onPress={() => {
    setModalVisible(false);
    Alert.alert("Modal Closed");
    }} />
    </View>
    </Modal>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;