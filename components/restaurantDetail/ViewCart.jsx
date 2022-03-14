import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';

export default function ViewCart() {

    const [modalVisible, setModalVisible] = useState(false);


    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    


    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0).toFixed(2);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        },

        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10
        },

        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15
        },

        subtotalText: {
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10
        }
    })

    console.log(totalUSD);

    const checkoutModalContent  = () => {
        return (
            <>
                <View style={styles.modalContainer}>

                    <View style={styles.modalCheckoutContainer}>

                        <Text style={styles.restaurantName}>{restaurantName}</Text>

                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}

                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>${totalUSD}</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                            <TouchableOpacity

                                onPress={() => setModalVisible(false)}

                                style={{
                                    marginTop: 50,
                                    backgroundColor: 'red',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    positon: 'relative'
                                }}
                            >
                                <Text style={{ fontSize: 20, marginRight: 50, color: 'white'}}>Checkout</Text>

                                <Text style={{color: 'white'}}>{total ? '$' + totalUSD : '' }</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    return (
        <>
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
            {total != 0 ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 25,
                        zIndex: 99
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>setModalVisible(true)}
                            style={{
                                marginTop: 20,
                                backgroundColor: 'red',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative'
                            }}
                        >
                            <Text
                                style={{color: 'white', fontSize: 20, marginRight: 30}}
                            >View Cart</Text>
                            <Text
                                style={{color: 'white', fontSize: 20}}
                            >${totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
    )
}