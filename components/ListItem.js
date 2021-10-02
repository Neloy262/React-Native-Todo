import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
const ListItem = (props) => {
  return (
    <View>
      <View style={styles.listview}>
        <Text style={styles.listItem}>{props.item}</Text>
        <Button
          onPress={props.deleteItem.bind(this, props.itemId)}
          title="Delete"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    backgroundColor: "#ccc",
    padding: 5,
    marginVertical: 8,
    fontSize: 18,
    marginRight: 10,
    width: "64%",
  },
});
export default ListItem;
