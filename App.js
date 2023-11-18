import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  //console.log("texto");
  return (
    <View style={styles.container}>
      <Text style={styles.line1}>Hola, Coder!</Text>
      <Text style={styles.line2}>Curso de React native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  line1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  line2: {
    fontStyle: "italic",
  },
});
