import React, { useState } from 'react'
import {View,Alert} from 'react-native'
import Input from '../Input'
import Button from '../Button'

const ProductInput = ({productList,setProductList}) => {

  const[name,setName]=useState(null);
  const[price,setPrice]=useState(null);
  
    /*Kaydetme İşlemi*/
  const handleSubmit=()=>{
    if( !name || !price){
      Alert.alert('Uyarı','Bilgiler boş bırakılamaz.')
    }
    else{
    const item={
      name:name,
      price:price,
      id:Math.random(),
      date:new Date()
    };
    setProductList([...productList,item]);
  }
  }

    return (
        <View>
        <Input  onChangeText={setName} placeholder='Urun İsmi Giriniz' label='Name' />
        <Input  onChangeText={setPrice} placeholder='Fiyat Giriniz' label='Price' keyboardType='numeric' />
        <Button onPress={handleSubmit}/>
        </View>
    )
}

export default ProductInput
