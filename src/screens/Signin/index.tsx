import {
    KeyboardAvoidingView,
    TextInputProps,
    View,
    Platform,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from "react-native";
import { useRef, useState, useCallback, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import Input from "../../components/Input";

const LOGO = require("../../assets/images/vercel.png");

import styles from "./styles";

import PACKAGE from "../../../package.json";

const Signin = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef<any>(null);
    const pwdRef = useRef<any>(null);

    const handleSignin = useCallback(async () => {
        emailRef?.current?.blur();
        pwdRef?.current?.blur();
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Drawer');
            // Alert.alert('Signin', email + ' - ' + password)
            setLoading(false);
        }, 3000);
    }, [email, password]);


    const renderButtonOrIndicator = useMemo(() => {
        if (loading) {
            return (
                <ActivityIndicator
                    size={"large"} color={"rgba(7, 55, 99, 1)"}
                    style={styles.indicator}
                />
            );
        }
        else {
            return (
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleSignin}
                >
                    <Text style={styles.loginText}>Realizar login</Text>
                </TouchableOpacity>
            );
        }
    }, [loading, email, password]);

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={LOGO} style={[styles.logoImage, styles.bottom]} />
                        <Text style={styles.logoText}>Wikky invesT</Text>
                        <Image source={LOGO} style={styles.logoImage} />
                    </View>

                    <View style={styles.formContainer}>
                        <Input
                            label="E-mail"
                            innerRef={emailRef}
                            keyboardType={"email-address"}
                            autoCompleteType={"email"}
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            value={email}
                            onChangeText={setEmail}
                            onSubmitEditing={() => {
                                pwdRef.current?.focus();
                            }}
                        />
                        <Input
                            label="Senha"
                            innerRef={pwdRef}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            containerStyle={{ marginTop: 10 }}
                        />

                        <View style={styles.loginContainer}>
                            {renderButtonOrIndicator}
                        </View>

                    </View>

                    <View style={styles.footerComponent}>
                        <Text style={styles.versionLabel}>Version</Text>
                        <Text style={styles.version}>{PACKAGE.version}</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default Signin;