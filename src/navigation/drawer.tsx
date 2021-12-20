import {
    createDrawerNavigator,
    DrawerHeaderProps,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { Foundation } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import { MainDrawerParams, RouteTitles } from "../types";
import styles from "./styles";

const Drawer = createDrawerNavigator<MainDrawerParams>();

import Home from "../screens/Home";


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
                    header: drawerProps
                }}
                drawerContent={drawerContent}
            >
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </SafeAreaView>
    );
}

const drawerProps = (props: DrawerHeaderProps) => {
    return (
        <TouchableOpacity
            style={styles.drawer}
            onPress={() => props.navigation.openDrawer()}
        >
            <Foundation name="list" size={26} color="rgba(7, 55, 99, .8)" />
            <Text style={styles.drawerLabel}>{RouteTitles[props.route.name]}</Text>
        </TouchableOpacity>
    );
};

const drawerContent = (props: DrawerContentComponentProps) => {
    const { navigation, state } = props;
    console.log(props)
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            {state.routeNames.map(routeName => (
                <DrawerItem
                    key={routeName}
                    label={RouteTitles[routeName]}
                    onPress={() => navigation.navigate(routeName)}
                    focused={navigation.isFocused()}
                />
            ))}
            <DrawerItem
                label={"Sair"}
                onPress={() => console.log("saindo")}
            />
        </DrawerContentScrollView>
    );
}

