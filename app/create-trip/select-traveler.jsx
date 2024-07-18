import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors} from './../../constants/Colors'
import { SelectTravelersList } from "../../constants/options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import {CreateTripContext} from './../../context/createTripContext'

export default function selectTraveler() {
  const [selectedTraveler, setSelectedTraveler] =  useState()
  const {tripData, setTripData}=useContext(CreateTripContext);
  const navigation = useNavigation();
  useEffect(()=>{
    setTripData(...tripData, {
      traveler:selectedTraveler
    })
  },[selectedTraveler])
  useEffect(()=>{
    console.log(tripData);
  },[tripData])
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Traveler",
    });
  }, []);

  return (
    <View
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor: Colors.WHITE,
        height: "100%"
    }}>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 30,
        marginTop: 20,
      }}>select-traveler</Text>
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
            fontFamily: "outfit-bold",
            fontSize:23
        }}
        >
            Choose your travelers.. 
        </Text>
        <FlatList data={{SelectTravelersList}} 
            renderItem={({item, index})=>{
                <TouchableOpacity onPress={()=>setSelectedTraveler(item)} style={{
                  marginVertical: 10
                }}>
                    <OptionCard option={item} selectTraveler={selectTraveler}/>
                </TouchableOpacity>
            }}
        />
      </View>
      
      <TouchableOpacity style={{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop :20
      }}>
        <Link href={'/create-trip/select-dates'}>
        <Text style={{
          textAlign: "center",
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:20
        }}>Continue</Text>
        </Link>
      </TouchableOpacity>
      
      
    </View>
  );
}
