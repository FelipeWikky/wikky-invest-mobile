import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#eeeeee",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 50,
        height: "10%"
    },
    logoText: {
        fontSize: 25,
        marginHorizontal: 10,
        color: "rgba(7, 55, 99, 0.9)",
    },
    logoImage: {
        height: 32,
        width: 32,
    },
    bottom: {
        transform: [{ rotateX: "180deg" }],
    },
    formContainer: {
        width: "80%",
        borderWidth: 1,
        borderColor: "rgba(7, 55, 99, 0.5)",
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 7
    },

    footerComponent: {
        width: "100%",
        alignItems: "center",
        height: "10%",
        flexDirection: "row",
        justifyContent: "center",
    },
    versionLabel: {
        color: "rgba(7, 55, 99, 0.9)",
        fontSize: 16
    },
    version: {
        color: "rgba(7, 55, 99, 0.25)",
        fontSize: 15,
        marginLeft: 5
    },
    loginContainer: {
        marginTop: 25,
    },
    loginButton: {
        backgroundColor: "rgba(7, 55, 99, 0.1)",
        borderWidth: 1,
        borderColor: "rgba(7, 55, 99, 0.2)",
        borderRadius: 15,
        height: 42,
        alignItems: "center",
        justifyContent: "center",
    },
    indicator: {
        height: 42
    },
    loginText: {
        color: "rgba(7, 55, 99, 1)",
    }
});
