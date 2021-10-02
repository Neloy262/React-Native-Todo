import React from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const InputText = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>What are we doing today?</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          onChangeText={props.handleInput}
          value={props.todo}
        />
        <Button title="ADD" onPress={props.addinput} />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button title="Cancel" onPress={props.closeModal} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
   
  },
  // text: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 50,
  // },
  input: {
    width: "70%",
    borderWidth: 1,
    padding: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width: "50%",
  },
});
export default InputText;
