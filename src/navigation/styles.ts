import { StyleSheet } from "react-native";

export default StyleSheet.create({
    drawerHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingBottom: 2,
        marginBottom: 2,
        borderBottomWidth: 0.5,
        borderColor: "rgba(7, 55, 99, .5)"
    },
    drawerInfo: {
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    drawerLogo: {
        height: 22,
        width: 22,
    },
    drawerLabel: {
        marginHorizontal: 5,
        color: "rgba(7, 55, 99, 1)",
        fontWeight: "500",
        fontSize: 15,
    },

    drawerContentHeader: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginBottom: 5,
    },
    drawerContentNameIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerContentLogo: {
        height: 14,
        width: 14,
        marginRight: 5,
    },
    drawerUsername: {
        color: "rgba(7, 55, 99, 1)",
        fontWeight: "500",
        fontSize: 15,
    },
    drawerEmail: {
        color: "rgba(7, 55, 99, 1)",
        fontSize: 12,
    }

});