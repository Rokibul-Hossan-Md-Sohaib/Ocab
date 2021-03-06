import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from '@env'
const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white-h-full`, styles.text]}  >
            <View style={tw`p-5 `}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={require('../assets/ocabLogo.png')}
                />
                <GooglePlacesAutocomplete
                    placeholder='where form?'
                    
                    styles={{
                        container:{
                            flex:0
                        } ,
                        textInput:{
                            fontSize: 18
                        }
                    }}

                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    nearbyPlacesAPI='GooglePlaceSearch'
                    debounce={400}

                />
                <NavOptions />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'white',
        height: "100%"
    }
})