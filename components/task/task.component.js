import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({ task, id, handlerDeleteTask }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square} />
                <Text style={styles.itemText}>{task}</Text>
            </View>
            <TouchableOpacity onPress={() => handlerDeleteTask(id)}>
                <View style={styles.itemRight}></View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#000",
    },

    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    itemRight: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
});
