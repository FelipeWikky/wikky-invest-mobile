import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
    },

    content: {
        height: '100%',
        paddingTop: 16,
    },
    flatListItem: {
        marginBottom: 16,
    }
});