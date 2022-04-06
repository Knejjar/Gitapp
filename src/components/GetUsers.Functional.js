import React, { useState, useEffect } from "react";
import {StyleSheet,View,TextInput,Button,Text,ActivityIndicator} from "react-native";

const GetUsers = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const getUsersData = async () => {
    setIsLoading(true);
    try {
      const usersResponse = await fetch("https://api.github.com/users");
      const users = await usersResponse.json();
      props.setUsers(users)
     // console.log(users)
    //   const userResponse = await fetch("https://api.github.com/users/" + input);
    //   const user = await userResponse.json();
    //   props.setUser(user);
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <View>
     
      <View style={styles.button}>
        <Button
          title="get All Users"
          onPress={() => {
           
            getUsersData();
            
          }}
        />
      </View>

      {isLoading ? <ActivityIndicator /> : null}
    </View>
  );

};

const styles = StyleSheet.create({
  button: {
    color: 'blue',
  }
});

export default GetUsers;
