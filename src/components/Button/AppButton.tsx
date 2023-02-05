import React, { useState } from 'react'
import { TextInput, ViewStyle, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props {
    onSubmit: () => void;
    style?: ViewStyle;
    label?: string;
  }

const AppButton: React.FC<Props> =  ({style, onSubmit, label}: Props) => {
    return (
        <TouchableOpacity onPress={onSubmit} style={[styles.container, style]}>
        <Text style = {styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;