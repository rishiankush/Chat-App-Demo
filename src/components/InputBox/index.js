import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.log("sending msg", newMessage);
    setNewMessage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={{}}
    >
      <SafeAreaView edges={["bottom"]} style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            style={styles.input}
            placeholder="Type a message"
          />
          <Octicons
            onPress={onSend}
            name="paper-airplane"
            size={16}
            color="grey"
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    marginHorizontal: 5,
    // borderRadius: 20,
  },
  inputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    // borderWidth: 1,
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
  },
});
export default InputBox;
