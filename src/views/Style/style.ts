import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 24,
      backgroundColor: 'black'
    },
    item: {
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height * 0.45,
      marginVertical: 8,
      marginHorizontal: 16
    },
    title: {
      fontSize: 48
    },
    blueBox: {
      height: 50,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center'
    },
    bigWhiteBoldText: {
      color: 'black',
      fontSize: 32,
      fontWeight: 'bold'
    }
  });

  export default styles;