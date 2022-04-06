import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import  { useEffect } from 'react';
import { Divider } from 'react-native-elements';

const User = (props) => {
  const { item } = props;
  const navigate = useNavigation();
  
  
   
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch(item.url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigate.navigate("User", { user: data });
      }}
    >
      <Text style={styles.login}>Username: {item.login}</Text>
      <Text>Followers: {data.followers}</Text>
     
      <Divider style={{ backgroundColor: 'blue' }} />
     
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
  login: {
    fontWeight: "bold",
  },
 
 
});

export default User;
