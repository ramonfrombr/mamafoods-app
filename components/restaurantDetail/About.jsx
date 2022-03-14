import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: require('../../assets/images/food3.jpg'),
    price: '$$',
    reviews: '1500',
    rating: 5,
    categories: [{title: 'Thai'}, {title: 'Comfort Food'}]
}

export default function About({route}) {


    const {
        name,
        image,
        price,
        review_count,
        rating,
        categories
    } = route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(' • ')

    const description = `${formattedCategories} ${price ? ' • ' + price : ''} • 💳 • ${rating} 🌟 (${review_count}+)`


    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image
        source={{uri: props.image}}
        style={{
            width: '100%',
            height: 180
        }}
    />
)

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15
        }}
    >{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: '400',
            fontSize:   15.5
        }}
    >{props.description}</Text>
)