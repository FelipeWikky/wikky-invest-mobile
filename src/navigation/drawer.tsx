import {
    createDrawerNavigator,
    DrawerHeaderProps,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import { MainDrawerParams, RouteTitles } from "../types";
import styles from "./styles";

const Drawer = createDrawerNavigator<MainDrawerParams>();

import Home from "../screens/Home";
import Calculate from "../screens/Calculate";
import Values from "../constants/Values";


export default function Navigation() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerPosition: 'right',
                    drawerType: 'slide',
                    swipeEnabled: true,
                    unmountOnBlur: true,
                    header: drawerHeader
                }}
                drawerContent={drawerContent}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Calculate" component={Calculate} />
            </Drawer.Navigator>
        </SafeAreaView>
    );
}

const drawerHeader = (props: DrawerHeaderProps) => {
    return (
        <View style={styles.drawerHeader} >
            <Image source={Values.ICON} style={styles.drawerLogo} />
            <TouchableOpacity
                style={styles.drawerInfo}
                onPress={() => props.navigation.openDrawer()}
            >
                <Foundation name="list" size={26} color="rgba(7, 55, 99, .8)" />
                <Text style={styles.drawerLabel}>{RouteTitles[props.route.name]}</Text>
            </TouchableOpacity>
        </View>
    );
};

const drawerContent = (props: DrawerContentComponentProps) => {
    const { navigation, state } = props;
    console.log(props)
    return (
        <DrawerContentScrollView {...props} style={{ marginTop: -20 }}>

            <View style={styles.drawerContentHeader}>
                <View style={styles.drawerContentNameIcon}>
                    <Image source={Values.ICON} style={styles.drawerContentLogo} />
                    <Text style={styles.drawerUsername}>Olá, Felipe</Text>
                </View>
                <Text style={styles.drawerEmail}>({'felipewikky@gmail.com'})</Text>
            </View>

            {state.routeNames.map((routeName, index) => (
                <DrawerItem
                    key={routeName}
                    label={RouteTitles[routeName]}
                    onPress={() => navigation.navigate(routeName)}
                    focused={state.index === index}
                    icon={(props) => drawerIcon(props, routeName)}
                />
            ))}
            <DrawerItem
                label={"Sair"}
                onPress={() => console.log("saindo")}
                icon={(props) => drawerIcon(props, 'Signout')}
            />
        </DrawerContentScrollView>
    );
}

const drawerIcon = (props: DrawerIconProps, routeName: keyof typeof RouteTitles) => {
    const { color } = props;
    const routeIcon: any = {
        'Home': 'home',
        'Calculate': 'calculate',
        'Signin': 'login',
        'Signout': 'logout',
    }
    return (
        <MaterialIcons
            name={routeIcon[routeName]}
            size={24} color={color}
            style={{ marginRight: -20 }}
        />
    );
}

interface DrawerIconProps {
    focused: boolean,
    size: number,
    color: string
}