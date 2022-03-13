import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'

import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'





const YELP_API_KEY = 'bET10nq9Onr-JeCX13WGNa4DzXsrjkUh_-gIAi36zVkcncjAZxcoeSl7x_P26aQr8tyHi3hDQ3oEPNJ0SRocL-VOk5J-dJuRoBBD6R4SobU5Pt_6WtUWpopUb4ItYnYx'


export default function Home({navigation}) {

    const [restaurantsData, setRestaurantsData] = useState([]);

    const [city, setCity] = useState('San Francisco');

    const [activeTab, setActiveTab] = useState('Delivery');

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])


    const getRestaurantsFromYelp = async () => {

        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${(city != "") ? city : 'San Francisco'}`;
    
        const apiOptions =  {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        };

        return await fetch(yelpUrl, apiOptions)
            .then((response) => response.json())
            .then((json) => {

                setRestaurantsData(
                    json.businesses.filter((business) =>
                    business.transactions.includes(activeTab.toLowerCase()))
                )
                
                console.log(json.businesses)
                console.log("City: " + city);
                console.log("Number of businesses: " + json.businesses.length)
                console.log("City (business): " + json.businesses[0].transactions)
            }
        )
    }

    return (
            <SafeAreaView
                style={{
                    backgroundColor: '#eee',
                    flex: 1,
                    marginTop:StatusBar.currentHeight
                }}
            >
                <View style={{backgroundColor: 'white', padding: 15}}>
                    <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <SearchBar cityHandler={setCity} />
                </View>
            
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Categories />

                    <RestaurantItems
                        restaurantsData={restaurantsData}
                        navigation={navigation}
                    />

                </ScrollView>

                <Divider width={1} />            

                <BottomTabs />
            </SafeAreaView>

    )
}

