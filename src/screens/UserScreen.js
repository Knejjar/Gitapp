import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import User from "../components/User";
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

const UserScreen = (props) => {
  const { user } = props.route.params;

  return (
    <View style={styles.user}>
      <Avatar
      rounded
      source={{ uri: user.avatar_url }}
      style={{ width: 200, height: 200 }}/>
   
      <User item={user} />
      <Text>Name : {user.name}</Text>
      <Text>Location : {user.location}</Text>
      <Text  style={styles.company}>Company : {user.company}</Text>


    </View>
  );

};


const styles = StyleSheet.create({
  user: {
     marginTop:50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  company:{
    marginLeft:30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default UserScreen;
