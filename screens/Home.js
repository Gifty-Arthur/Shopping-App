
 import React from "react";
 import {View, Text,SafeAreaView,StyleSheet,TextInput,TouchableOpacity, Dimensions} from "react-native";
 
 import { AntDesign } from '@expo/vector-icons';
 import COLORS from '../assets/consts/colors';
 import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";


import  items from "../assets/consts/items";


const width = Dimensions.get('window').width / 2 - 30;

const Home = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories =  ['HANDBAGS', 'SNEAKERS', 'HEELS','CLOTHES'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({items}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', items)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: items.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <MaterialIcons name="favorite" size={24} color="black" />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={items.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {items.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${items.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.yellow,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.yellow, fontWeight: 'bold'}}>
            Gifty closet
          </Text>
        </View>
        
        <AntDesign name="shoppingcart" size={28} color="black" />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
        <AntDesign name="search1" size={25} color="black" style={{marginLeft: 20}}/>  
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
        <MaterialIcons name="sort" size={24} color="black" />
        </View>
      </View>
      <CategoryList />
      <FlatList
        
        // columnWrapperStyle={{justifyContent: 'space-between'}}
        // showsVerticalScrollIndicator={false}
        // contentContainerStyle={{
        //   marginTop: 10,
        //   paddingBottom: 50,
        // }}
        numColumns={2}
        data={items}
        renderItem={({item}) => {
          return <Card items={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.yellow,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.yellow,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
    
