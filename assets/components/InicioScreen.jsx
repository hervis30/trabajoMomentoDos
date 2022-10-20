import { View, Text, TextInput, TouchableOpacity, Picker, Button, Alert } from 'react-native';
import { styles } from '../Styles/Estilos';
import { useForm, Controller } from 'react-hook-form';
import { useState, useContext } from 'react';
import { AppProvider } from '../contex/AppContext';



const InicioScreen = ({ navigation }) => {
    const [parametro, setParametro] = useState(false);
    const { vista, setVista } = useContext(AppProvider);
    const [rol, setRol] = useState("admin");
    const [numeroCuenta, setNumeroCuenta] = useState(1587265);
    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            usuario: '',
            rol: '',
            contraseña: ''
        },
    });
    const onSubmit = data => {
        reset();
        setVista(false);

        const usuarios = [
            { usuario: 'hervis', rol: 'admin', contraseña: 'He$6' },
            { usuario: 'alex', rol: 'admin', contraseña: 'Al#5' },
            { usuario: 'estefania', rol: 'user', contraseña: 'Es?1' },
            { usuario: 'fernando', rol: 'admin', contraseña: 'Fe&0' },
            { usuario: 'camila', rol: 'admin', contraseña: 'Ca%9' },
            { usuario: 'carlos', rol: 'user', contraseña: 'Cr!7' }
        ];

        if (rol == 'admin') {
            let usuarioBuscado = usuarios.find(user => (user.usuario == data.usuario))
            if (usuarioBuscado != undefined) {
                if (usuarioBuscado.rol == 'admin') {
                    if (usuarioBuscado.contraseña == data.contraseña) {
                        setParametro(false);
                        let aleatorio;
                        let cuenta;
                        do {
                            aleatorio = Math.random() * 2000000;
                        } while (aleatorio < 1000000)
                        cuenta = Math.floor(aleatorio);
                        setNumeroCuenta(cuenta);
                        alert("Bienvenido(a) " + data.usuario);
                        navigation.navigate('Cuenta', { nombre: data.usuario, cuenta: numeroCuenta, estado: parametro, setEstado: setParametro })

                    } else {
                        alert("por favor verifique su contraseña");
                    }
                } else {
                    alert(data.usuario + " tiene rol de usuario");
                }
            } else {
                alert("Verfique que su usuario y/o contraseñan sean correctos");
            };
        } else {
            alert("El usuario ingresado no tiene rol de administrador");
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Text>Sistema bancario</Text>
            </View>
            <Text style={styles.label}>Usuario</Text>
            <Controller
                control={control}
                rules={{
                    required: "El usuario es obligatorio.",
                    maxLength: { value: 30, message: "Se permite maximo 30 letras" },
                    minLength: { value: 3, message: "Se permite minimo 3 letras" },
                    pattern: {
                        value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g, message:
                            "Solo se permiten letras",
                    },
                }}

                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.inputs, { borderColor: errors.usuario ? 'red' : 'green' }]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Ingrese usuario"
                    />
                )}
                name="usuario"

            />
            {errors.usuario && <Text style={{ color: 'red', fontSize: 15 }}>{errors.usuario.message}</Text>}


            <Text style={styles.label}>Contraseña</Text>
            <Controller
                control={control}
                rules={{
                    required: "La contraseña es obligatoria.",
                    pattern: {
                        value: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{4,12}$/, message:
                            "Asegurece de ingresar letras mayusculas, minusculas, caracter especial y numeros",
                    },
                }}

                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.inputs, { borderColor: errors.contraseña ? 'red' : 'green' }]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Ingrese contraseña"
                        secureTextEntry={true}
                    />
                )}
                name="contraseña"

            />
            {errors.contraseña && <Text style={{ color: 'red', fontSize: 15 }}>{errors.contraseña.message}</Text>}

            <Text style={styles.label}>Seleccione rol</Text>
            <Picker
                selectedValue={rol}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => setRol(itemValue)}
            >
                <Picker.Item label="Administrador" value="admin" />
                <Picker.Item label="Usuario" value="user" />
            </Picker>

            <TouchableOpacity
                style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, marginTop: 80, width: 200 }}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InicioScreen;