import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        id: "1",
        title: " Get a ride",
        image: require("../assets/car2.png"),
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "Order Food",
        image: require("../assets/food.png"),
        screen: " EatsScreen"
    }

]

const NavOptions = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>

                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={item.image}
                        />
                        <Text style={tw`mt-1 text-lg font-semibold `}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black w-10 mt-4`}
                            name='arrowright'
                            color='white'
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}

        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})