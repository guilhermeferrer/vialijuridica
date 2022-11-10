import { WebView } from "react-native-webview";
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "./logo.png";
import spa from "./spa.png";
import { getBottomSpace } from "react-native-iphone-x-helper";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: "https://vialijuridica.com.br/teste/index.php" }}
      />
    </SafeAreaView>
  );
}

function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flex: 1 }} />
      <Image
        source={logo}
        style={{ width: 250, height: 250, resizeMode: "contain" }}
      />
      <Pressable
        onPress={() => Linking.openURL("https://vialijuridica.com.br")}
        style={{
          padding: 15,
          paddingHorizontal: 40,
          borderRadius: 32,
          backgroundColor: "#0c2756",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>SITE OFICIAL</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("App")}
        style={{
          padding: 15,
          paddingHorizontal: 40,
          borderRadius: 32,
          backgroundColor: "#0c2756",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>ÁREA CLIENTE</Text>
      </Pressable>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: getBottomSpace() + 25,
        }}
      >
        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://vialijuridica.com.br/politica_privacidade/2022.pdf"
            )
          }
        >
          <Text
            style={{
              textAlign: "center",
              color: "#007bff",
            }}
          >
            Política de Privacidade
          </Text>
        </Pressable>
        <Text style={{ textAlign: "center", marginTop: 15 }}>
          Copyright © 2022{" "}
          <Image
            source={spa}
            style={{ marginTop: -3, resizeMode: "contain" }}
          />{" "}
          <Pressable
            onPress={() => Linking.openURL("https://spasistemas.com.br")}
            style={{
              marginTop: -3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#007bff" }}>
              SPA Sistemas
            </Text>
          </Pressable>
        </Text>
        <Text style={{ textAlign: "center" }}>
          Todos os direitos reservados
        </Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
