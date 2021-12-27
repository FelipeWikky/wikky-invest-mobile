import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth:1,
        borderRadius: 4,
        borderColor: 'rgba(177, 177, 177, .7)',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        flexDirection: "row",
        flex: 1
    },
    information: {
        marginRight: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 14,
        marginBottom: 3,
    },
    item: {
        fontSize: 12,
        textAlign: 'center'
    },
    iconContainer: {
        borderRadius: 50,
        marginLeft: 2,
        // padding: 5,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.01)',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    calculateContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    calculateInput: {
        width: 50,
        borderBottomWidth: 0.8,
        borderColor: 'rgba(7, 55, 99, 1)',
        marginRight: 5,
        color: 'rgba(7, 55, 99, 1)'
    },
    calculateTotal: {
        fontSize: 14,
        color: 'rgba(7, 55, 99, 1)',
        minWidth: 50,
        textAlign: 'right'
    }
})