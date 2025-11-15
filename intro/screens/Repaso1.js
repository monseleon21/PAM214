import { Text, StyleSheet, View, Button, TextInput, Alert, Switch, SafeAreaView, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Repaso1() 
{
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const mostrarAlerta = () => 
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (nombre.trim() === '') 
        {
            Alert.alert('Error. Por favor llena el campo de Nombre.');
            alert('Error. Por favor llena el campo de Nombre.');

        } else if (correo.trim() === '') 
        {
            Alert.alert('Error. Por favor llena el campo de Correo.');
            alert('Error. Por favor llena el campo de Correo.');

        } else if (!emailRegex.test(correo))
        {
            Alert.alert('Error. Por favor inserte un correo válido.');
            alert('Error. Por favor inserte un correo válido.');
        } else if (!acceptedTerms)
        {
            Alert.alert('Debes aceptar los términos y condiciones.');
            alert('Debes aceptar los términos y condiciones.');
            
        } else
        {
            Alert.alert(`Hola, ${nombre}. Tu correo es: ${correo}.`);
            alert(`Hola, ${nombre}! Tu correo es: ${correo}.`);
            setNombre('');
            setCorreo('');
        };
    }

    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => 
    {
        const timer = setTimeout(() => 
        {
            setShowSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) 
    {
        return (
            <View style={styles.splashContainer}>
                <Image 
                    source={{ uri: 'https://www.nintenderos.com/wp-content/uploads/2021/06/H2x1_KidsClub_ReadAndDiscover_YoshisFacts-Cropped.jpg' }}
                    style={styles.splashImage}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={{
                    uri: 'https://laverdadnoticias.com/wp-content/uploads/2025/09/El-nuevo-Yoshi-deslumbra-en-Nintendo-Direct-asi-sera-su-proxima-aventura.jpg',
                }}
                style={styles.background}
                resizeMode="cover"
            >
            <View style={styles.overlay}>
                <Text style={styles.label}>REGISTRARSE</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChangeText={setNombre}
                    keyboardType="default"
                    autoCapitalize="words"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Correo Electrónico"
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="default"
                />

                <View style={styles.switchContainer}>
                    <Text style={styles.terminos}>ACEPTAR TÉRMINOS Y CONDICIONES</Text>
                    <Switch
                        onValueChange={(valor) => setAcceptedTerms(valor)}
                        value={acceptedTerms}
                    />
                </View>

                <Button
                    title="REGISTRARSE"
                    onPress={mostrarAlerta}
                    color="#0e620dff"
                />
            </View>
        </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
{
    background: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: 
    {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '85%',
    },
    label: 
    {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: 
    {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        width: '100%',
    },
    terminos: 
    {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10,
    },
    switchContainer: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    splashContainer: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    splashImage: 
    {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});