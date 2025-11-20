import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React, { Component, useState } from 'react';

export default function TextInputScreen() 
{
    const [nombre, setNombre] = useState('');
    const [contrasena, setContraseña] = useState('');
    const [contenido, setContenido] = useState('');

    const mostrarAlerta =() =>
    {
        if (nombre.trim() === '' || contrasena.trim() === '' || contenido.trim() === '')
        {
            Alert.alert('Error. Por favor llena todos los campos.');
            alert('Error. Por favor llena todos los campos.');
        } else
        {
            Alert.alert(`Hola,${nombre}. Tu contraseña es: ${contrasena}. Y el contenido es: ${contenido}`);
            alert(`Hola, ${nombre}!. Tu contraseña es: ${contrasena}, y el contenido es: ${contenido}`);
            setNombre('');
            setContraseña('');
            setContenido('');
        }
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>INGRESA TU NOMBRE: </Text>
            <TextInput 
                style = {styles.input}
                placeholder = "Ejemplo: monse leon"
                value = {nombre}
                onChangeText = {setNombre}
                keyboardType = "default"
                autoCapitalize = "words"
            />

            <TextInput 
                style = {styles.input}
                placeholder = "Ejemplo: 12345678"
                value = {contrasena}
                onChangeText = {setContraseña}
                keyboardType = "numeric"
                secureTextEntry = {true}
            />

            <TextInput 
                style = {styles.input}
                value = {contenido}
                onChangeText = {setContenido}
                multiline = {true}
                numberOfLines = {4}
            />

            <Button
                title = "SALUDAR"
                onPress = {mostrarAlerta}
                color = "#0e620dff"
            />
        </View>
    )
}
























const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  label: 
  {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  input: 
  {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
    },
});