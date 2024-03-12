import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
