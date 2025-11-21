import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Perfil</Text>

      <Pressable 
        style={[styles.button, styles.buttonSettings]} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </Pressable>

      <Pressable 
        style={[styles.button, styles.buttonHome]} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Volver a Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginBottom: 20,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    buttonSettings: {
        backgroundColor: 'rgba(212, 150, 58, 1)',
    },
    buttonHome: {
        backgroundColor: 'rgba(67, 206, 104, 1)',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});