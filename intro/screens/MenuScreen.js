import { Text, StyleSheet, View, Button, SafeAreaView, SafeAreaViewBase } from 'react-native';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import Repaso1 from './Repaso1';
import Prueba from './prueba';


export default function MenuScreen() 
{
    
    const[screen,setScreen]=useState('menu');
    switch(screen)
    {
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'texto':
            return <TextInputScreen/>
        case 'imagen':
            return <ImageBackgroundScreen/>
        case 'scrollview':
            return <ScrollViewScreen/>
        case 'activity':
            return <ActivityIndicatorScreen/>
        case 'flatlist':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottom':
            return <BottomSheetScreen/>
        case 'repaso1':
            return <Repaso1/>
        case 'prueba':
            return <Prueba/>

        case 'menu':
            default:
                return(
                    <SafeAreaView style={styles2.estiloprincipal}>
                        <Text style={styles2.textodescripcion}>UNIVERSIDAD POLITÉCNICA DE QUERÉTARO</Text>
                        <Text style={styles2.textomenu}>MENÚ DE PRÁCTICAS</Text>

                        <View style={styles2.BotonesMenu}>
                        <Button color= "#0e620dff" onPress={()=>setScreen('contador')} title='Práctica: Contador'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('botones')} title='Práctica: Buttons & Switch'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('texto')} title='Práctica: Text Input & Alert'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('imagen')} title='Práctica: ImageBackground & SplashScreen'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('scrollview')} title='Práctica: ScrollView'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('activity')} title='Práctica: ActivityIndicator'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('flatlist')} title='Práctica: FlatList & Section List'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('modal')} title='Práctica: Modal'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('bottom')} title='Práctica: Bottom Sheet'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('repaso1')} title='Práctica: Repaso 1'/>
                        <Button color= "#0e620dff" onPress={()=>setScreen('prueba')} title='Práctica: prueba'/>
                        </View>

                        <Text style={styles2.textodescripcion}>DESARROLLO DE APLICACIONES</Text>
                        <Text style={styles2.textodescripcion2}>Guerra Lopez Ivan Isay</Text>
                        <Text style={styles2.textodescripcion}>TIID - 214</Text>
                        <Text style={styles2.textodescripcion2}>monse leon</Text>
                    </SafeAreaView>
                ) 
                
    }
}

const styles2 = StyleSheet.create(
{
    estiloprincipal: 
    {
        flex: 1,
        backgroundColor: '#dafcd5ff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textomenu:
    {
        color:'#00720fff',
        fontSize: 50,
        fontFamily: 'Times New Roman',
        fontWeight: '888',
        textDecorationLine: 'underline',
        marginBottom: 50
    },

    textodescripcion:
    {
        color:'#00720fff',
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: '800',
    },

    textodescripcion2:
    {
        color:'#00720fff',
        fontSize: 15,
        fontFamily: 'Arial',
        marginBottom: 40
    },

    BotonesMenu:
    {
        marginTop: 5,
        flexDirection: 'column',
        gap: 2,
        marginBottom: 100
    },

});

