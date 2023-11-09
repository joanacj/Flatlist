import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
  {
    id: 1,
    name: "NECALY, LEPARTO",
    place: "Boyog Sur, Hnaopol"
},
{
    id: 2,
    name: "NICOLE, SALANGRON",
    place: "Boyog Norte, Hanopol"
},
{
    id: 3,
    name: "MAE, SUAREZ",
    place: "Sto.Nino, Hanopol "
},
{
    id: 3,
    name: "GARCIA, VENGIE",
    place: "Cogon, Hanopol"
},
{
    id: 3,
    name: "CAMANZO, JOANA",
    place: "Tagustusan, Hanopol "
},
{
    id: 3,
    name: "ADA, MAE",
    place: "Del Rosario, Hanopol"
},
{
    id: 3,
    name: "CABAL, MARLON",
    place: "Hanopol Este, Hanaopol "
},
{
    id: 3,
    name: "PATAC, EARL",
    place: "Hanopol Norte, Hanopol"
},
{
    id: 3,
    name: "LIPARTO, MONA",
    place: "Cogon Centro, Hanopol"
},
{
    id: 3,
    name: "FELISIDAD, JAMES",
    place: "Tagustusan Centro, Hanopol"
},
{
    id: 3,
    name: "SARAGA, SHIELO",
    place: "Caijaw, Hanopol"
},
{
    id: 3,
    name: "DANO, SHERLY",
    place: "Hanopol Weste, Hanopol"
},
{
    id: 3,
    name: "BONGABONG, AIREEN",
    place: "Boyog Proper, Hanopol"
},
{
    id: 3,
    name: "TABANYAG, MARIA",
    place: "Ambuan Mako, Hanopol"
},
{
    id: 3,
    name: "PIODOS, JEA",
    place: "Ambuan, Hanopol"
},
];

const getReciprocatedInitials = (name) => {
  const nameParts = name.split(' ');
  const initials = nameParts.map((part) => part.charAt(0)).join('');
  return initials.split('').reverse().join('').toUpperCase();
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50} name={item.name} style={{ backgroundColor: '#841b2d' }}  />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
    <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}} name="dots-three-horizontal" size={30} color="#841b2d" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#00000' : '#fffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15
    
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
   
  },
  place: {

  }
});

export default App;