import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const PlacesAPIKey = 'AIzaSyAhOYS1W_15UxyWi_J7KQ-Emah8iHG2kQg'

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
        <GooglePlacesAutocomplete

            // For this to work, it is necessary to define payment method on Google
            query={{key: 'AIzaSyAhOYS1W_15UxyWi_J7KQ-Emah8iHG2kQg'}}


            /*
            Use in combination with the Google Places functionality
            
            onPress={(data, details = null) => {
                console.log(data.description);
                const city = data.description.split(',')[0];
                cityHandler(city);
            }}
            */

            
            textInputProps={{
                onEndEditing: (e) => { cityHandler(e.nativeEvent.text) }
            }}

    

            placeholder="Search"
            styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: '700',
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10
                }
            }}
            renderLeftButton={() => (
                <View style={{marginLeft: 10}}>
                    <Ionicons name='location-sharp' size={24} style={{color: 'red'}} />
                </View>
            )}
            renderRightButton={() => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginRight: 8,
                    padding: 9,
                    borderRadius: 30,

                }}>
                    <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} />
                    <Text>Search</Text>
                </View>
            )}
        />
    </View>
  )
}