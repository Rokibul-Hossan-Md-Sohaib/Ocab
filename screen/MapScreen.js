import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapScreen = () => {
    return (
        <View>
            <Text style={styles.text}>MapScreen</Text>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    text: {
        flex: 1
    }
})