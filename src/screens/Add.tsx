import { Button, Text, View, StyleSheet } from "react-native"
import Header from "../components/Header"
import NewTransactions from "../components/NewTransactions"
export default function Add() {
    return (
        <View style={styles.container}>
            <Header />
            <NewTransactions />
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 70,
        paddingHorizontal: 20,
    },
})