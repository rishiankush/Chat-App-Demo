import { View, Text, StyleSheet, Image } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const index = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View style={styles.container}>
      <Image
        source={message.user.image}
        style={styles.userImgStyle}
        resizeMode={"contain"}
      />
      <View style={{ flex: 1, paddingHorizontal: 5 }}>
        <Text style={{ fontWeight: "bold" }}>
          {message.user.name}{" "}
          <Text style={styles.time}>
            {dayjs(message.createdAt).fromNow(true)}
          </Text>
        </Text>
        <Text>{message.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  userImgStyle: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});
export default index;
