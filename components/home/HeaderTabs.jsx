import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';



export default function HeaderTabs({ activeTab, setActiveTab }) {

    return (
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => {

    return (
        <TouchableOpacity
            style={styles(props).container}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={styles(props).label}>{props.text}</Text  >
        </TouchableOpacity>
    )
}

const styles = ( {text, activeTab} ) => StyleSheet.create({
    container: {
        backgroundColor: activeTab === text ? "red" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
    },
    label: {
        color: activeTab === text ? "white" : "red",
        fontSize: 15,
        fontWeight: "900"
    }
})