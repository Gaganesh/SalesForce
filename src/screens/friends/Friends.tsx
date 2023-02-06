import React from 'react'
import { View, FlatList, ActivityIndicator } from "react-native"
import {friends} from "../../../services/urls.json";
import fetchFriends from "../../../api/fetchFriends"
import { FAB } from 'react-native-elements';
import FriendListItem from "./FriendListItem";
import styles from "./styles";
import {useNetInfo} from '@react-native-community/netinfo';

interface Props {
    navigation: {
      navigate: () => void,
    };
  }

const FriendsScreen: React.FC<Props> = ({navigation}: Props) =>  {
  const {loading, data} = fetchFriends(friends.getFriends);
  const netInfo = useNetInfo();
  return (
    <View style={{flex:1}}>
       {loading && <ActivityIndicator />}
        <FlatList
         data={data}
         renderItem={({item}) => <FriendListItem data={item} />}
        keyExtractor={item => item.id}
      />
      <FAB style={styles.create} title="+" onPress={() => navigation.navigate("Add Friends")}/>
    </View>
  )
}

export default FriendsScreen;