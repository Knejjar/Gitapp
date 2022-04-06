import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import User from "./User";

const UserList = (props) => {
    {console.log("---------------")}
  return (
    <View>
      <FlatList
        data={props.users}
        renderItem={({ item, index }) => {
          return <User item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default UserList;
