import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { styles } from '../Styles/Estilos';
import CuentasScreen from './CuentasScreen';
import InicioScreen from './InicioScreen';
import MovimientosScreen from './MovimientosScreen';
import { Ionicons } from '@expo/vector-icons';
import imagen from '../Styles/imagenbanco.png';



const Tab = createBottomTabNavigator();

const HomeTab = () => {
    const [activo, setActivo] = useState(false);

    return (
        <>
            <View style={{ backgroundColor: '#fffafa', flex: 0.4, alignItems: 'center' }} >
                <View>
                    <Image source={require('../Styles/imagenbanco.png')} style={{ width: 600, height: 150 }} />
                </View>
            </View>
            <Tab.Navigator
                initialRouteName="Inicio"
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarActiveBackgroundColor: '#7fff00',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false
                }}

            >
                {/* tabBarStyle: desactiva el menú bottom */}
                <Tab.Screen name="Inicio" component={InicioScreen} options={{
                    tabBarStyle: { display: "none" },
                    title: 'Inic.Sesion', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={30}
                        />
                    )
                }}
                />


                {/* <Tab.Screen name="Inicio" component={() => {
                    return (
                        <InicioScreen setActivo={setActivo} />
                    )
                }}
                    options={{
                        tabBarStyle: { display: "none" },
                        title: 'Inic.Sesion', tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={30}
                            />
                        )
                    }}
                /> */}


                <Tab.Screen name="Cuenta" component={CuentasScreen}
                    options={{
                        title: 'Cuenta', tabBarIcon: ({ color, size }) => (
                            <Ionicons name="key" color={color} size={30} />
                        )
                    }}
                />


                <Tab.Screen name="Movimiento" children={MovimientosScreen}
                    options={{
                        title: 'Movimiento', tabBarIcon: ({ color, size }) => (
                            <Ionicons name="cash" color={color} size={30} />
                        )
                    }}
                />

            </Tab.Navigator>
        </>
    )
}

export default HomeTab;