import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import SwitchButton from "../SwitchButton";
import { styles } from "./style";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";

export default function NewTrasactions() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
        TitilliumWeb_600SemiBold,
    });

    const [btnState, setBtnState] = useState<"in"|"out">("in")

    return (
        <View style = {styles.DescView}>
            <Text style = {styles.textDesc}>Adicionar Transação</Text>
            <View style = {styles.container}>
                <Text style={styles.textInputLabel}>Descrição</Text>
                <TextInput style={styles.textInput}
                    placeholder="Ex: Salário mensal"
                    placeholderTextColor={"#44659B"}
                    keyboardType="web-search"
                />
            </View>
            <View style = {styles.container}> 
                <Text style={styles.textInputLabel}>Valor</Text>
                <TextInput style={styles.textInput} 
                    placeholder="R$9.000,00"
                    placeholderTextColor={"#44659B"}
                    keyboardType="number-pad"
                />
            </View>
            <View>
                <Text style = {styles.textInputLabel}>Tipo</Text>
                <View style = {styles.switchButton}>
                    <SwitchButton state={btnState} onChange={setBtnState} />
                </View>
            </View>

            <TouchableOpacity style = {styles.btn}>
                <Text style = {styles.btnText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = {styles.btnTextOther}>Cancelar</Text>
            </TouchableOpacity>
            
        </View>
    )
}