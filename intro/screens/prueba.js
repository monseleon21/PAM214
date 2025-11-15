import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons'

// Componente para una sola pestaña de navegación superior
const BotonPestana = ({ titulo, activo }) => (
    <TouchableOpacity style={[styles.botonPestana, activo && styles.botonPestanaActivo]}>
        <Text style={[styles.textoPestana, activo && styles.textoPestanaActivo]}>
            {titulo}
        </Text>
    </TouchableOpacity>
);

// Componente para la leyenda de un ítem de la gráfica
const LeyendaItem = ({ color, categoria, monto }) => (
    <View style={styles.contenedorLeyendaItem}>
        <View style={[styles.indicadorColor, { backgroundColor: color }]} />
        <Text style={styles.textoLeyendaCategoria}>{categoria}</Text>
        <Text style={styles.textoLeyendaMonto}>{monto}</Text>
    </View>
);

// Componente principal de la pantalla de Gráficas
export default function prueba() 
{
    // Datos estáticos para simular la interfaz
    const datosGrafica = [
        // NOTA: Se mantienen los colores de los círculos de la leyenda
        { color: '#4CAF50', categoria: 'Alimentación', monto: '$450.00' },
        { color: '#8BC34A', categoria: 'Transporte', monto: '$120.00' },
        { color: '#CDDC39', categoria: 'Entretenimiento', monto: '$80.00' },
    ];

    return (
        <SafeAreaView style={styles.areaSegura}>
            {/* Encabezado */}
            <View style={styles.encabezado}>
                <TouchableOpacity style={styles.botonEncabezado}>
                    <FontAwesome name="user-circle-o" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.tituloEncabezado}>GRÁFICAS</Text>
                <TouchableOpacity style={styles.botonEncabezado}>
                    <FontAwesome name="bell-o" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Contenedor principal para permitir el scroll */}
            <ScrollView contentContainerStyle={styles.contenedorPrincipal}>
                
                {/* Navegación de Pestañas (Gastos, Ingresos, Presupuestos) */}
                <View style={styles.contenedorPestanas}>
                    <BotonPestana titulo="Gastos" activo={true} />
                    <BotonPestana titulo="Ingresos" activo={false} />
                    <BotonPestana titulo="Presupuestos" activo={false} />
                </View>

                {/* Tarjeta de Gráfica 1: Gastos por Categoría */}
                <View style={styles.tarjetaGrafica}>
                    <Text style={styles.subtituloGrafica}>Gastos por Categoría</Text>
                    
                    {/* 🟢 ESPACIO PARA IMAGEN DE GRÁFICA CIRCULAR 🟢 */}
                    {/* INSTRUCCIONES: Reemplaza la URL en 'uri' con la dirección de tu imagen local o web. */}
                    <Image
                        source={{ 
                            uri: 'https://i.imgur.com/k6lPqS2.png' // URL de placeholder. ¡REEMPLAZAR!
                            // O si la imagen está localmente: require('./ruta/a/tu/imagen_circular.png')
                        }}
                        style={styles.imagenGraficaCircular}
                        resizeMode="contain"
                    />

                    {/* Leyenda de la gráfica */}
                    <View style={styles.contenedorLeyenda}>
                        {datosGrafica.map((item, index) => (
                            <LeyendaItem 
                                key={index}
                                color={item.color}
                                categoria={item.categoria}
                                monto={item.monto}
                            />
                        ))}
                    </View>
                </View>
                
                {/* Tarjeta de Gráfica 2: Ingresos y Egresos por Mes */}
                <View style={styles.tarjetaGrafica}>
                    <Text style={styles.subtituloGrafica}>Ingresos y Egresos por Mes</Text>
                    
                    {/* 🟢 ESPACIO PARA IMAGEN DE GRÁFICA DE BARRAS/LÍNEAS 🟢 */}
                    {/* INSTRUCCIONES: Reemplaza la URL en 'uri' con la dirección de tu imagen local o web. */}
                    <Image
                        source={{ 
                            uri: 'https://i.imgur.com/vHqQ3zE.png' // URL de placeholder. ¡REEMPLAZAR!
                            // O si la imagen está localmente: require('./ruta/a/tu/imagen_barras.png')
                        }}
                        style={styles.imagenGraficaBarra}
                        resizeMode="contain"
                    />
                </View>

            </ScrollView>
            
            {/* Pie de Página (Footer) */}
            <View style={styles.piePagina}>
                <TouchableOpacity style={styles.itemPiePagina}>
                    <FontAwesome name="list-ul" size={20} color="#999" />
                    <Text style={styles.textoPiePagina}>Transacciones</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemPiePagina}>
                    <FontAwesome name="home" size={20} color="#999" />
                    <Text style={styles.textoPiePagina}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemPiePagina}>
                    <FontAwesome name="cog" size={20} color="#0e620dff" />
                    <Text style={[styles.textoPiePagina, styles.textoPiePaginaActivo]}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// Estilos
const styles = StyleSheet.create(
{
    areaSegura: 
    {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    // --- Encabezado ---
    encabezado: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0e620dff',
        paddingHorizontal: 15,
        height: 60,
        paddingTop: 10,
    },
    botonEncabezado: 
    {
        padding: 5,
    },
    tituloEncabezado: 
    {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    // --- Contenedor Principal (para el Scroll) ---
    contenedorPrincipal: 
    {
        padding: 10,
        paddingBottom: 20, 
    },
    // --- Pestañas Superiores ---
    contenedorPestanas: 
    {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        padding: 5,
        elevation: 1,
    },
    botonPestana: 
    {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    botonPestanaActivo: 
    {
        backgroundColor: '#0e620dff',
    },
    textoPestana: 
    {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    textoPestanaActivo: 
    {
        color: '#fff',
    },
    // --- Tarjeta de Gráfica ---
    tarjetaGrafica: 
    {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
    },
    subtituloGrafica: 
    {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    // --- ESTILOS DE IMAGEN DE GRÁFICA ---
    imagenGraficaCircular: 
    {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginBottom: 30,
        // Puedes ajustar resizeMode si la imagen se ve estirada
    },
    imagenGraficaBarra: 
    {
        height: 250,
        width: '100%',
        alignSelf: 'center',
        // Puedes ajustar resizeMode si la imagen se ve estirada
    },
    // --- Leyenda ---
    contenedorLeyenda: 
    {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    contenedorLeyendaItem: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    indicadorColor: 
    {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    textoLeyendaCategoria: 
    {
        flex: 1,
        fontSize: 15,
        color: '#333',
    },
    textoLeyendaMonto: 
    {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    // --- Pie de Página ---
    piePagina: 
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingBottom: 20, 
    },
    itemPiePagina: 
    {
        alignItems: 'center',
        padding: 5,
    },
    textoPiePagina: 
    {
        fontSize: 12,
        color: '#666',
    },
    textoPiePaginaActivo:
    {
        color: '#0e620dff',
        fontWeight: 'bold',
    }
});