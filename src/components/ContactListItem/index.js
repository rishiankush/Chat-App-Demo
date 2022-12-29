import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image source={user.image} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    fontWeight: "bold",
  },

  content: {},

  subTitle: {
    color: "gray",
  },
});

export default ContactListItem;
