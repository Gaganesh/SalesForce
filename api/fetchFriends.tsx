import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
const fetchFriends = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const netInfo = useNetInfo();
    const fetchApi = async() => {
      const data = await fetch(url); 
      if(data?.ok === true){
        let jsonData = await data.json();
        saveToStorage(jsonData);
        return jsonData;
      }
    };

    const fetchFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('@friends_app_Key');
        const parsedData =  value != null ? JSON.parse(value) : null;
        setLoading(false);
        setData(parsedData);
      } catch(e) {
         // reading error
      }
    }

    const saveToStorage = async (data:any) => {
      try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('@friends_app_Key', jsonValue)
      } catch (e) {
        // saving error
      }
    }
  
    useEffect(() => {
      if(netInfo.isConnected){
        fetchApi();
      } else {
        fetchFromStorage();
      }
      
    }, [netInfo]);
  
    return { loading, data };
  };
  
  export default fetchFriends;