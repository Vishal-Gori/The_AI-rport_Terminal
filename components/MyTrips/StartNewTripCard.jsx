import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from '@/constants/Colors'
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router= useRouter()
  return (
    <View style={{
        padding:25,
        marginTop:55,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
        <Ionicons name="location-sharp" size={30} color="black" />
        <Text style={{
            fontSize:25,
            fontFamily:'outfit-medium',

        }}>No Trips Planned Yet</Text>
        <Text style={{
            fontSize:20,
            fontFamily:'outfit',
            textAlign:'center',
            color:Colors.GRAY
        }}>
            Looks like it's time to plan a new travel experience!
            Get Started below
        </Text>
        <TouchableOpacity onPress={()=>router.push('/create-trip/search-place')} style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            paddingHorizontal:30
        }}>
            <Text style={{
                color:Colors.WHITE,
                fontFamily:'outfit-medium',
                fontSize:17
            }}>Start New Trip
            </Text>
        </TouchableOpacity>
    </View>
  )
}