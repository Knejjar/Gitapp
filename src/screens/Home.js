import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import GetUsers from "../components/GetUsers.Functional";
import UserList from "../components/UserList";


const Home = () => {

  const [users, setUsers] = useState([]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <GetUsers  setUsers={setUsers} />   
        <UserList users={users} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerWrapper: {
    padding: 20,
  },
});

export default Home;
