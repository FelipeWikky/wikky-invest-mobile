import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        paddingVertical: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTotal: {
        color: 'rgba(7, 55, 99, 1)',
        fontWeight: '500'
    },

    content: {
        height: '100%',
        paddingTop: 16,
    },
    flatListItem: {
        marginBottom: 16,
    }
});