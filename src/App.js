import React,{useState,useEffect} from 'react'
import {SafeAreaView, View ,StyleSheet, FlatList,Alert} from 'react-native'
import Header from './Header'
import Input from './Input'
import Button from './Button'
import ProductCard from './ProductCard'
import ProductInput from './ProductInput'


const App = () => {
  
  const[productList,setProductList]=useState([]);
  
  //Sıralamaya göre ekleme
  useEffect(()=>{
      setProductList(productList.sort((a, b) => (a.price - b.price)));
  },[productList]);

  

  const renderItem=({item})=>(
    <ProductCard
    text={item.name}
    price={item.price}
    />
  );

  //Artan Sıralama
  const handleOnAscend=()=>{
    productList.sort((a, b) => (a.price - b.price));
    setProductList([...productList]);
  }

  //Azalan Sıralama
  const handleOnDescend=()=>{
    productList.reverse((a, b) => (a.price - b.price))
    setProductList([...productList]);
  }

  //Tarih Sıralama
  const handleOnDate=()=>{
    productList.sort((a, b) => (a.date - b.date))
    setProductList([...productList]);
  }

  return (
      <SafeAreaView style={styles.container}>
      <Header onAscend={handleOnAscend} onDescend={handleOnDescend} onDate={handleOnDate}/>
      <View style={styles.inner_container}>
        <FlatList
          data={productList}
          renderItem={renderItem}
        />
        <ProductInput  productList={productList} setProductList={setProductList}/>
      </View>  
      </SafeAreaView>

     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inner_container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});


export default App
