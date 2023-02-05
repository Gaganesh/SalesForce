import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemView: {
      flex:1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderColor: "grey",
    },
    name:{
      paddingVertical: 5,
      fontWeight: "800",
      fontSize: 16,
    },
    other:{
      paddingVertical: 5,
      fontWeight: "300",
      fontSize: 12,
    },
    create: {
      alignSelf: "flex-end",
      margin: 15,
    },
    row: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
    },
    profilePic: {width: 100, height: 100, borderRadius: 50, margin: 20}
});

export default styles;