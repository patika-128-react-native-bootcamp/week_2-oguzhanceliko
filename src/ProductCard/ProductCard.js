import React from 'react'
import { View,Text} from 'react-native'
import styles from './ProductCard.styles'

const ProductCard = ({text,price}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.input_name}>{text}</Text>
            <Text style={styles.input_price}>{price} TL</Text>
        </View>
    )
}

export default ProductCard
