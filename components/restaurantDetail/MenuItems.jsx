import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux';


const foods = [
    {
        title: 'Asado Negro',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ea numquam velit, illum delectus recusandae.',
        price: '$13.50',
        image: 'https://cdn.shopify.com/s/files/1/0571/3788/9442/products/024A5763_400x.jpg?v=1638396819'
    },
    {
        title: 'Polvorosa de Pollo',
        description: 'Polvorosa de Pollo is the most iconic dish of Caracas Cuisine. A thin crust is filled with a flavorful chicken stew made with 22 ingredients, including white wine, olives, raisins, and capers. Gluten-free version upon request.',
        price: '$13.50',
        image: 'https://cdn.shopify.com/s/files/1/0571/3788/9442/products/Polvorosadepollo_400x.jpg?v=1638220518'
    },
    {
        title: 'Pasticho de Champiñones Trufado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatibus eius reprehenderit quaerat vel eaque?',
        price: '$15.99',
        image: 'https://cdn.shopify.com/s/files/1/0571/3788/9442/products/Casaboom31_300x.jpg?v=1638908414'
    },
    {
        title: 'Pollo Mechado',
        description: 'Prepared by Lalatina',
        price: '$13.50',
        image: 'https://cdn.shopify.com/s/files/1/0571/3788/9442/products/lalatina3_400x.jpg?v=1639070395'
    }
]



export default function MenuItems({ restaurantName }) {


    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => {

        dispatch({

            type: 'ADD_TO_CART',

            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue
            },
        })
    }

    const cartItems = useSelector(
        state => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) => 
        Boolean(cartItems.find((item) => item.title == food.title))
    

    return (
        
        <ScrollView
            showsVerticalScrollIndicator={false}
        >

            {foods.map((food, index) => (

                <View key={index}>
                    <View
                        style={styles.menuItem}
                    >
                        <BouncyCheckbox
                            onPress={(checkboxValue) => {
                                selectItem(food, checkboxValue)
                            }}
                            iconStyle={{
                                borderColor: 'lightgray',
                                borderRadius: 0,
                            }}
                            fillColor='red'
                            isChecked={isFoodInCart(food, cartItems)}
                        />
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
            <View
                style={{
                    height: 80
                }}
            >
                
            </View>
        
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