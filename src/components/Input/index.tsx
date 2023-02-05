import React, { useState } from 'react'
import { TextInput, ViewStyle, View, Text } from "react-native";
import styles from "./styles";

interface Props {
    onchangeText: (text: string) => void;
    style?: ViewStyle;
    value: string;
    placeholder?: string;
    label?: string;
    isError: boolean;
  }

const AppInput: React.FC<Props> =  ({style, value, placeholder, onchangeText, label, isError}: Props) => {
    return (
        <View style={styles.container}>
        <Text style = {styles.label}>{label}</Text>
        <TextInput 
        style = {[styles.input, {borderColor: isError ? "red": "blue"}]}
        placeholder={placeholder}
        value={value}
        onChangeText={onchangeText}
        />
        </View>
        
    );
}

export default AppInput;