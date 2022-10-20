import { View, Text, TextInput, TouchableOpacity, ProgressBarAndroidBase } from 'react-native';
import { styles } from '../Styles/Estilos';
import { useForm, Controller } from 'react-hook-form';
import { useState, useContext } from 'react';
import { AppProvider } from '../contex/AppContext';


const CuentasScreen = ({ navigation, route }) => {
    const { vista, setVista } = useContext(AppProvider);
    const { nombre, cuenta, estado, setEstado } = route.params;
    const [datosUsuario, setDatosUsuario] = useState([]);


    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            identificacion: '',
            titular_cuenta: '',
            fecha: '',
            saldo: ''
        },
    });
    const onSubmit = data => {

        reset();
        setVista(true);
        setDatosUsuario(data);
        setEstado(true);

        console.log(estado)


    }
    return (

        <View style={styles.container}>
            <View style={{ backgroundColor: '#fffafa' }}>
                <Text style={{ color: 'black', fontSize: 22, marginBottom: 5, marginTop: 5 }}>Bienvenido(a) {nombre} , se encuentra en modo administrador</Text>
            </View>


            <View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.input_flex}>
                        <Text style={styles.label}>Numero de cuenta</Text>
                        <TextInput style={styles.pickerStyle} placeholder={cuenta}>
                        </TextInput>
                    </View>
                    <View style={styles.input_flex}>
                        <Text style={styles.label}>Identificacion</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: "La identificacion es obligatoria.",
                                maxLength: { value: 15, message: "Se permite maximo 12 numeros" },
                                minLength: { value: 3, message: "Se permite minimo 3 numeros" },
                                pattern: {
                                    value: /^[0-9]*$/, message:
                                        "Solo se permiten numeros",
                                },
                            }}

                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.inputs, { borderColor: errors.identificacion ? 'red' : 'green' }]}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Ingrese identificacion"
                                />
                            )}
                            name="identificacion"
                        />
                        {errors.identificacion && <Text style={{ color: 'red', fontSize: 15 }}>{errors.identificacion.message}</Text>}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.input_flex}>
                        <Text style={styles.label}>Titular de la cuenta</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: "Campo obligatorio.",
                                maxLength: { value: 100, message: "Se permite maximo 100 letras" },
                                minLength: { value: 3, message: "Se permite minimo 3 letras" },
                                pattern: {
                                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/, message:
                                        "Solo se permiten letras",
                                },
                            }}

                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.inputs, { borderColor: errors.titular_cuenta ? 'red' : 'green' }]}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Ingrese titular de la cuenta"
                                />
                            )}
                            name="titular_cuenta"
                        />
                        {errors.titular_cuenta && <Text style={{ color: 'red', fontSize: 15 }}>{errors.titular_cuenta.message}</Text>}
                    </View>
                    <View style={styles.input_flex}>
                        <Text style={styles.label}>Fecha</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: "El fecha es obligatoria.",
                                pattern: {
                                    value: /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/, message:
                                        "Formato mm/dd/yy o m/dyyyy ",
                                },
                            }}

                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.inputs, { borderColor: errors.fecha ? 'red' : 'green' }]}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Ingrese MM/DD/YYYY"
                                />
                            )}
                            name="fecha"
                        />
                        {errors.fecha && <Text style={{ color: 'red', fontSize: 15 }}>{errors.fecha.message}</Text>}

                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.input_flex}>
                        <Text style={styles.label}>Saldo</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: "El saldo es obligatorio.",
                                max: { value: 100000000, message: "Se permite maximo 100 millones" },
                                min: { value: 1000000, message: "Se permite minimo 1 millon" },
                                pattern: {
                                    value: /^[0-9]*$/, message:
                                        "Solo se permiten numeros",
                                },
                            }}

                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.inputs, { borderColor: errors.saldo ? 'red' : 'green' }]}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Ingrese saldo"
                                />
                            )}
                            name="saldo"
                        />
                        {errors.saldo && <Text style={{ color: 'red', fontSize: 15 }}>{errors.saldo.message}</Text>}
                    </View>
                    <View style={styles.input_flex}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, marginTop: 21, width: 200 }}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            {estado && (
                <View style={{ marginTop: 7, backgroundColor: '#f5f5f5', borderRadius: 10, borderColor: 'green', borderWidth: 3 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 2 }}>INFORMACION DE LA CUENTA</Text>
                    </View>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.datosUsuario}>Nro Cuenta: {cuenta}</Text>
                            <Text style={styles.datosUsuario}>Identificacion: {datosUsuario.identificacion}</Text>
                            <Text style={styles.datosUsuario}>Fecha: {datosUsuario.fecha}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.datosUsuario}>Titular: {datosUsuario.titular_cuenta}</Text>
                            <Text style={styles.datosUsuario}>Saldo: {datosUsuario.saldo}</Text>
                        </View>
                    </View>


                </View>
            )}
        </View>
    )
}
export default CuentasScreen;