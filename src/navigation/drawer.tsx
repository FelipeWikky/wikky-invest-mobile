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
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

import { MainDrawerParams, RouteTitles } from "../types";
import styles from "./styles";

const Drawer = createDrawerNavigator<MainDrawerParams>();

import Home from "../screens/Home";
import Calculate from "../screens/Calculate";
import Wallet from "../screens/Wallet";

import Values from "../constants/Values";

export default function Navigation() {
    const [clicked, setClicked] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerPosition: 'right',
                    drawerType: 'slide',
                    swipeEnabled: true,
                    unmountOnBlur: true,
                    header: props => drawerHeader(props, clicked, setClicked)
                }}
                drawerContent={props => drawerContent(props, clicked, setClicked)}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Wallet" component={Wallet} />
                <Drawer.Screen name="Calculate" component={Calculate} />
            </Drawer.Navigator>
        </SafeAreaView>
    );
}

const drawerHeader = (
    props: DrawerHeaderProps,
    clicked: boolean,
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
) => {
    return (
        <View style={styles.drawerHeader} >
            <TouchableOpacity onPress={() => setClicked(!clicked)}>
                <Image source={Values.ICON} style={styles[clicked ? 'drawerHeaderLogoInverted' : 'drawerHeaderLogo']} />
            </TouchableOpacity>
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

const drawerContent = (
    props: DrawerContentComponentProps,
    clicked: boolean,
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const { navigation, state } = props;
    return (
        <DrawerContentScrollView {...props} style={{ marginTop: -20 }}>

            <View style={styles.drawerContentHeader}>
                <View style={styles.drawerContentNameIcon}>
                    <TouchableOpacity onPress={() => setClicked(!clicked)}>
                        <Image source={Values.ICON} style={[styles.drawerContentLogo, clicked && styles.drawerContentLogoInverted]} />
                    </TouchableOpacity>
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
                onPress={() => console.warn("saindo")}
                icon={(props) => drawerIcon(props, 'Signout')}
            />
        </DrawerContentScrollView>
    );
}

const drawerIcon = (props: DrawerIconProps, routeName: keyof typeof RouteTitles) => {
    const { color } = props;
    const routeIcon: any = {
        'Home': 'home',
        'Wallet': 'account-balance-wallet',
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