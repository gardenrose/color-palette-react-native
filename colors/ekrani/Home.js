import  {React, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import SmallColorBox from '../komponente/SmallColorBox';

// moze se pokrenuti sa expo start

const colorzURL = "https://demo0945922.mockable.io/colors";
const Home = ({navigation}) => {
const [data, setData] = useState([]);

  useEffect( () => {
    fetch(colorzURL).then(async response => {
      try {
        const resp = await response.json();
        setData(resp.data);
      } 
      catch(error) {
        console.log('Error');
        console.error(error)
      }
    })
  });

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => 
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Palette', {pid: item.id});
          }}>
          <Text>{" "}{item.paletteName}</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <SmallColorBox hexColor={item.colors[0].hexCode.toString()}></SmallColorBox>
            <SmallColorBox hexColor={item.colors[1].hexCode.toString()} /> 
            <SmallColorBox hexColor={item.colors[2].hexCode.toString()} />
            <SmallColorBox hexColor={item.colors[3].hexCode.toString()} />
            <SmallColorBox hexColor={item.colors[4].hexCode.toString()} />
          </View>
          <Text>{"\n"}</Text>
          
      </TouchableOpacity>} 
    />

    </View>
  );
};


export default Home;
