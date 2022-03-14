import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default function RestaurantItems({ navigation, restaurantsData }) {
  return (
	
	<>
		{restaurantsData.length ? restaurantsData.map((restaurant, index) => (

			<TouchableOpacity
				key={index}
				activeOpacity={1}
				style={{marginBottom: 30}}
				onPress={() => navigation.navigate('RestaurantDetails', {
					name: restaurant.name,
					image: restaurant.image_url,
					price: restaurant.price,
					review_count: restaurant.review_count,
					rating: restaurant.rating,
					categories: restaurant.categories
				})}
			>
				<View
					style={{
						marginTop: 10,
						padding: 15,
						backgroundColor: 'white'
					}}
				>
					<ItemImage image_url={restaurant.image_url} liked={true} />
					<ItemInfo
						name={restaurant.name}
						rating={restaurant.rating}
					/>
				</View>
			</TouchableOpacity>
		)) : <View></View>}
	</>
  )
}



const ItemImage = ({image_url, liked}) => (
    
    <>
		<Image
			source={{
				uri: image_url
			}}
			style={{
				width: "100%",
				height: 180
		}}
		/>

		<TouchableOpacity
			style={{
				position: 'absolute',
				right: 20,
				top: 10
			}}
		>
			<MaterialCommunityIcons
				name={liked ? 'heart' : 'heart-outline'}
				size={28}
				color={liked ? 'red' : '#eee'}
			/>
		</TouchableOpacity>
	</>
)

const ItemInfo = ({name, rating}) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: 10
		}}
	>
		<View>
			<Text
				style={{fontSize: 15, fontWeight: 'bold'}}
			>{name}</Text>
			<Text
				style={{fontSize: 13, color: 'grey'}}
			>30-45 min.</Text>
		</View>
		
		<View
			style={{
				backgroundColor: '#eee',
				height: 30,
				width: 30,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 15
			}}
		>
			<Text>{rating}</Text>	
		</View>
	</View>
)