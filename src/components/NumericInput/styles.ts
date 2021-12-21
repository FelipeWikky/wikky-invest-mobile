import { StyleSheet } from "react-native";

export default StyleSheet.create({
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