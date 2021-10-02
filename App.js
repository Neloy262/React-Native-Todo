import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

import ListItem from "./components/ListItem";
import InputText from "./components/InputText";
import firebaseConfig from "./firebaseConfig";
import Modal from "react-native-modal";

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export default function App() {
  const [todolist, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [modalvisible, setVisibility] = useState(false);
  const handleInput = (input) => {
    setTodo(input);
  };
  const addinput = () => {
    setTodoList([...todolist, todo]);

    dbh
      .collection("Todo_Collection")
      .doc("Todo")
      .set({
        list: [...todolist, todo],
      });
    setTodo("");

    setVisibility(false);
  };

  const closeModal = () => {
    setVisibility(false);
  };

  const deleteItem = (index) => {
    setTodoList((prevState) => {
      prevState.splice(index, 1);
      dbh.collection("Todo_Collection").doc("Todo").update({
        list: prevState,
      });
      setTodoList([...prevState]);
    });
  };
  useEffect(() => {
    dbh
      .collection("Todo_Collection")
      .doc("Todo")
      .onSnapshot((doc) => {
        if (doc.data().list != "") {
          setTodoList(doc.data().list);
        }
      });
  }, []);

  return (
    <View>
      <View
        style={{ justifyContent: "center", alignItems: "center", margin: 50 }}
      >
        <Button onPress={() => setVisibility(true)} title="Add new todo" />
      </View>
      <Modal
        backdropColor={"white"}
        coverScreen={true}
        backdropOpacity={1.0}
        // animationType={"slide"}
        // transparent={true}
        isVisible={modalvisible}
        // style={{marginTop:80}}
      >
        <InputText
          handleInput={handleInput}
          addinput={addinput}
          todo={todo}
          todolist={todolist}
          closeModal={closeModal}
        />
      </Modal>
      <FlatList
        data={todolist}
        renderItem={(listItem) => (
          <ListItem
            deleteItem={deleteItem}
            itemId={listItem.index}
            item={listItem.item}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
