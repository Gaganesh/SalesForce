import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {friends} from '../../../services/urls.json';
import fetchFriends from '../../../api/fetchFriends';
import {FAB} from 'react-native-elements';
import FriendListItem from './FriendListItem';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import getFriendsAction from '../../redux/actions/friendsAction';

interface Props {
  navigation: {
    navigate: () => void;
  };
}

const FriendsScreen: React.FC<Props> = ({navigation}: Props) => {
  // const {loading, data} = fetchFriends(friends.getFriends);
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => ({
    data: state.friend.friendsList,
    loading: state.friend.loading,
  }));
  useEffect(() => {
    dispatch(getFriendsAction());
  }, []);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <FriendListItem navigation={navigation} data={item} />
            )}
            keyExtractor={item => item.id}
          />
          <FAB
            style={styles.create}
            title="+"
            onPress={() => navigation.navigate('AddFriends')}
          />
        </>
      )}
    </View>
  );
};

export default FriendsScreen;
