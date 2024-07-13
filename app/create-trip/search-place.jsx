import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Colors} from './../../constants/Colors'
import {CreateTripContext} from './../../context/createTripContext'


export default function SearchPlace() {
  const navigation= useNavigation();
  const {tripData, setTripData}=useContext(CreateTripContext);
  const router= useRouter();
  useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle: 'Search Place' 
    });
  },[])
  
  useEffect(()=>{
    console.log(tripData);
  },[setTripData])
  return (
    <View
    style={{
        padding: 25,
        paddingTop:75,
        backgroundColor: Colors.WHITE,
        height:'100%'
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setTripData({
            locationInfo:{
                name:data.description,
                coordinates: details?.geometry.location,
                photoRef: details?.photos[0]?.photo_reference,
                url:details?.url
            }
        })
        router.push('/create-trip/select-traveler')
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
      styles={{
        textInputContainer:{
            borderWidth:1,
            borderRadius:5,
            marginTop:25
        }
      }}
    />
    </View>
  )
}