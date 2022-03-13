import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'


const foods = [
    {
        title: 'Polvorosa de Pollo',
        description: 'Polvorosa de Pollo is the most iconic dish of Caracas Cuisine. A thin crust is filled with a flavorful chicken stew made with 22 ingredients, including white wine, olives, raisins, and capers. Gluten-free version upon request.',
        price: '$13.50',
        image: 'https://medellinliving.com/wp-content/uploads/2019/03/bandeja-paisa-2.jpg'
    },
    {
        title: 'Polvorosa de Pollo',
        description: 'Polvorosa de Pollo is the most iconic dish of Caracas Cuisine. A thin crust is filled with a flavorful chicken stew made with 22 ingredients, including white wine, olives, raisins, and capers. Gluten-free version upon request.',
        price: '$13.50',
        image: 'https://medellinliving.com/wp-content/uploads/2019/03/bandeja-paisa-2.jpg'
    },
    {
        title: 'Polvorosa de Pollo',
        description: 'Polvorosa de Pollo is the most iconic dish of Caracas Cuisine. A thin crust is filled with a flavorful chicken stew made with 22 ingredients, including white wine, olives, raisins, and capers. Gluten-free version upon request.',
        price: '$13.50',
        image: 'https://medellinliving.com/wp-content/uploads/2019/03/bandeja-paisa-2.jpg'
    },
    {
        title: 'Polvorosa de Pollo',
        description: 'Polvorosa de Pollo is the most iconic dish of Caracas Cuisine. A thin crust is filled with a flavorful chicken stew made with 22 ingredients, including white wine, olives, raisins, and capers. Gluten-free version upon request.',
        price: '$13.50',
        image: 'https://medellinliving.com/wp-content/uploads/2019/03/bandeja-paisa-2.jpg'
    }
]

export default function MenuItems() {
  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>

        {foods.map((food, index) => (

            <View key={index}>
                <View
                    style={styles.menuItem}
                >
                    <FoodInfo
                        title={food.title}
                        description={food.description}
                        price={food.price}
                    />
                    <FoodImage 
                        image={food.image}
                    />
                </View>

                <Divider
                    width={0.5}
                    orientation='vertical'
                    style={{marginHorizontal: 20}}
                />
            </View>
        ))}
      
    </ScrollView>
  )
}


const FoodInfo = ({ title, description, price}) => (
    <View style={styles.foodInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
    </View>
)

const FoodImage = ({image}) => (
    <Image
        style={styles.image}
        source={{
            uri: image
        }}
    />
)



const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },

    foodInfo: {
        width: 240,
        justifyContent: 'space-evenly'
    },

    title: {
        fontSize: 19,
        fontWeight: '600'
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 8
    }
})