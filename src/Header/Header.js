import React from 'react'
import {View,TextInput,Text,TouchableOpacity} from 'react-native'
import styles from './Header.styles'

const Header = ({onAscend,onDescend,onDate}) => {
    return (
        <View style={styles.container}>
            <View style={styles.ascend_container}>
                <TouchableOpacity style={styles.ascend_button}
                 onPress={onAscend}>
                <Text >Artan Fiyat</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.descend_container}>
                <TouchableOpacity style={styles.descend_button}
                onPress={onDescend}>
                <Text >Azalan Fiyat</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.date_container}>
                <TouchableOpacity style={styles.date_button}
                onPress={onDate}>
                <Text >Tarih</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header
