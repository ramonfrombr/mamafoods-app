import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const items = [
    {
        image: require('../../assets/images/venezuela.png'),
        text: 'Venezuela'
    },
    {
        image: require('../../assets/images/brazil.png'),
        text: 'Brazil'
    },
    {
        image: require('../../assets/images/colombia.png'),
        text: 'Colombia'
    },
    {
        image: require('../../assets/images/mexico.png'),
        text: 'Mexico'
    },
    {
        image: require('../../assets/images/ecuador.png'),
        text: 'Ecuador'
    },
    {
        image: require('../../assets/images/argentina.png'),
        text: 'Argentina'
    },
    {
        image: require('../../assets/images/uruguay.png'),
        text: 'Uruguay'
    },
    {
        image: require('../../assets/images/chile.png'),
        text: 'Chile'
    },
    {
        image: require('../../assets/images/peru.png'),
        text: 'Peru'
    },
    {
        image: require('../../assets/images/paraguay.png'),
        text: 'Paraguay'
    },




    {
        image: require('../../assets/images/shopping-bag.png'),
        text: 'Pick-up'
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    },
    {
        image: require('../../assets/images/bread.png'),
        text: 'Bakery Items'
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: 'Fast Foods'
    },
    {
        image: require('../../assets/images/deals.png'),
        text: 'Deals'
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: 'Coffee & Tea'
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: 'Desserts'
    }
]


export default function Categories() {
  return (

    <View
        style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
        }}
    >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                <View
                    style={{alignItems: 'center', marginHorizontal: 10}}
                    key={index}
                >
                    <Image
                        source={item.image}
                        style={{
                            width: 50,
                            height: 40,
                            resizeMode: 'contain'
                        }}
                    />

                    <Text
                        style={{fontSize: 13, fontWeight: '900'}}
                    >{item.text}</Text>
                </View>
            ))}
                
        </ScrollView>
    </View>
  )
}