import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import ChatsScreen from "../screens/ChatsScreen";
import { Ionicons, Entypo, Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Messages"
      screenOptions={{
        tabBarStyle: { backgroundColor: "white" },
        headerStyle: { backgroundColor: "white" },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="browsers-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate("Contacts")}
              name="new-message"
              size={18}
              color={"black"}
              style={{ marginRight: 15 }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
