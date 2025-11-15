//1. IMPORTS: Zona de Importaciones----------------------------------------------------
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2. MAIN: Zona de Componentes--------------------------------------------------------
export default function ContadorScreen() {
  const[contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color= "#0e620dff" title= "Agregar" onPress={()=>setContador(contador + 1)}></Button>

      <Button color= "#0e620dff" title= "Quitar" onPress={()=>setContador(contador - 1)}></Button>

      <Button color= "#0e620dff" title= "Reiniciar" onPress={()=>setContador(0)}></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//3. STYLES: Zona de Estetica y Posicionamiento----------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dafcd5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:
  {
    color:'#00720fff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle:'italic',
    textDecorationLine: 'line-through'
  },

  texto2:
  {
    color:'#00720fff',
    fontSize: 50,
    fontFamily: 'Arial',
    fontWeight: '888',
    textDecorationLine: 'underline'
  },

  contenedorBotones:
  {
    marginTop: 18,
    flexDirection: 'row',
    gap: 18,
  },

});
