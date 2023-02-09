import { NavigationHelpersContext } from "@react-navigation/native";
import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { FriendType } from ".";
import styles from "./styles";

interface Props {
    data: FriendType;
    navigation: () => {};

  }
const FriendListItem: React.FC<Props> = ({data, navigation}: Props) => {
    return (
      <TouchableOpacity style={styles.itemView} onPress={() => navigation.navigate('AddFriends', {id: data?.Id})}>
        <Text style={styles.name} >{`Name : ${data.First_Name__c}`}</Text>
        <Text style={styles.other} >{`Age : ${data.Age__c}`}</Text>
      </TouchableOpacity>
    )
  }

  export default FriendListItem;