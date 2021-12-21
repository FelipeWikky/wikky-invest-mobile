import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modal: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#FFF',
        width: '80%',
        height: '50%',
        borderRadius: 8,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    header: {
        borderBottomWidth: 0.2,
        borderColor: "#AAABBB",
        paddingBottom: 3,
        height: '5%',
        alignItems: 'center'
    },
    ticker: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    content: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    information: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderTopWidth: 0.2,
        borderColor: "#AAABBB"
    },
    separator: {
        height: 50,
        borderLeftWidth: 0.2,
        borderColor: "#AAABBB"
    },
    button: {
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputQty: {
        borderColor: "#AAABBB",
        minWidth: 60,
        textAlign: 'center',
        height: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    qtyButton: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        backgroundColor: '#AAABBB',
    },
    qtyText: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 16,
    },
    qtyLow: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 0,
    },
    qtyPlus: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftWidth: 0,
    }

});