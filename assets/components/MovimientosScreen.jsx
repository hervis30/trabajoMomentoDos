import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/Estilos';

const MovimientosScreen = ({ setActivo }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}
                onPress={() => {
                    setActivo(true)
                    console.log("pasando a true")

                }}
            >
                <Text style={{ color: 'white', fontSize: 40 }}>true</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}
                onPress={() => {
                    setActivo(false)
                    console.log("pasando a false")
                }}
            >
                <Text style={{ color: 'white', fontSize: 40 }}>false</Text>
            </TouchableOpacity>
            <Text>Bienvenido(a) a la la sesion de Movimientos </Text>
            <Text>La sesion estara disponible proximante</Text>
        </View>
    )
}

export default MovimientosScreen;