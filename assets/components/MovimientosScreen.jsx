import { View, Text } from 'react-native';
import { styles } from '../Styles/Estilos';
import { useContext } from 'react';
import { AppProvider } from '../contex/AppContext';

const MovimientosScreen = () => {
    const { vista, setVista } = useContext(AppProvider)
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Bienvenido(a) a la la sesion de Movimientos </Text>
            <Text style={{ fontSize: 25 }}>La sesion estara disponible proximante</Text>
        </View>
    )
}

export default MovimientosScreen;