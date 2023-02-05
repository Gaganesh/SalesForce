import React, { useState } from 'react'
import { View,Alert, KeyboardAvoidingView, Image, TouchableOpacity } from "react-native"
import { FAB } from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {friends} from "../../../services/urls.json";
import createFriend from "../../../api/createFriend";
import AppButton from "../../components/Button/AppButton";
import AppInput from "../../components/Input";
import styles from "./styles";
interface Props {
    navigation: () => void;
  }
const cameraOptions = {
    saveToPhotos: false,
    mediaType: "photo",
    quality:1,
    selectionLimit: 1,
}

const galleryOptions = {
    saveToPhotos: false,
    quality:1,
}
const AddFriendScreen: React.FC<Props> = ({navigation}: Props) =>  {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [secondNameError, setSecondNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [age, setAge] = useState("");
  const [uri, setImageUri] = useState("");

  const validateForm = () => {
    let isValid = false;
    if(firstName.length<1){
        setFirstNameError(true);
    } else if(lastName.length<1){
        setFirstNameError(false);
        setSecondNameError(true);
    } else if(age.length<1){
        setSecondNameError(false);
        setAgeError(true);
    } else{
        isValid = true;
        setAgeError(false);
    }
    return isValid;
  }
  
  const handleFilePick = (response:any) => {
    const data = response instanceof Array ? response [0] : response;
    console.log("Image data : ", data);
    if(data?.didCancel) {
        Alert.alert("User has cancelled");
    } else if (data?.error){
        Alert.alert("Error : ", data?.error);
    } else if (data?.errorCode){
        Alert.alert("Error : ", data?.errorCode);
    } else if(data?.assets) {
        setImageUri(data?.assets[0].uri);
    }
    return;
  }
  const onImagePick = ()=> {
     launchImageLibrary(galleryOptions, handleFilePick);
  }

  const onCameraClick = ()=> {
   launchCamera(cameraOptions, handleFilePick);
  }

  const onSubmit = async ()=> {
    if(validateForm()){
        const payload = {
            "attributes": {
            "type": "Friend__c"
            },
            "Name": "FR-00002",
            "First_Name__c": firstName,
            "Last_Name__c": lastName,
            "Age__c": age
          };
  const data = await createFriend(friends.makeFriend , [payload]);
  console.log("Friend upload data : ", data);
    }
  }

  return (
    <KeyboardAvoidingView style={{flex:1}}>
        <TouchableOpacity onPress={onImagePick}>
        <Image source={ uri ? {uri:uri} : require('./../../assets/profile.jpeg')} style = {styles.profilePic}/>
        </TouchableOpacity>
        <AppInput isError={firstNameError} label="First Name" onchangeText={(text: string) => setFirstName(text)} value={firstName}/>
        <AppInput isError={secondNameError} label="Second Name" onchangeText={(text: string) => setLastName(text)} value={lastName}/>
        <AppInput isError={ageError} label="Age" onchangeText={(text: string) => setAge(text)} value={age}/>
        <View style={styles.row}>
        <AppButton label="Pick Image" onSubmit={onImagePick}/>
        <AppButton label="Click Image" onSubmit={onCameraClick}/>
        </View>
        <AppButton label="Save" onSubmit={onSubmit}/>
    </KeyboardAvoidingView>
  )
}

export default AddFriendScreen;