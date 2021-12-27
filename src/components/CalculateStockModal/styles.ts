import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modal: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    card: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
    },
    header: {
        borderBottomWidth: 0.2,
        borderColor: "#AAABBB",
        paddingVertical: 5,
        marginBottom: 5,
        height: '15%',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 18.5,
        color: 'rgba(7, 55, 99, 1)',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 16.5,
        color: 'rgba(7, 55, 99, 1)',
        textTransform: 'uppercase',
        fontWeight: '500',
        textAlign: 'center',
    },
    content: {
        paddingHorizontal: 10,
        paddingTop: 10,
        width: '100%',
        height: '75%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: '10%',
    },
    information: {
        flexDirection: 'column',
        marginBottom: 5,
    },
    label: {
        color: 'rgba(7, 55, 99, 1)',
        fontWeight: '400',
    },
    calculateContainer: {
        marginTop: '10%',
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'rgba(7, 55, 99, .3)',
        borderRadius: 10.5,
        alignItems: 'center',
        paddingVertical: 10,
    },
    calculateButtonText: {
        color: 'rgba(7, 55, 99, .8)',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderColor: "#AAABBB",
        height: '10%',
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
    },
    text: {
        color: 'rgba(7, 55, 99, 1)'
    },

    calculateText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'rgba(7, 55, 99, 1)',
        fontWeight: '500'
    }
});