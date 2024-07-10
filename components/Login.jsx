import { View, Text , Image} from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
        style={{
            width:'100%',
            height:520
        }}
      />
        <View style={styles.container}>
            <Text style={{
                fontSize:28, 
                fontFamily:'outfit-bold',
                textAlign:'center',
                marginTop:10
            }}>The AI-rport Terminal</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                textAlign:'center',
                color:Colors.GRAY,
                marginTop:20
            }}>
                Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights
            </Text>
            <View style={styles.button}>
                <Image source={require('./../assets/images/google-logo.png')}
                    style={{
                        marginRight:20,
                        height:30,
                        width:30
                    }}
                />
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit',
                    fontSize:17
                }}>Sign-In with Google</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:25,
        height:'100%',
    },
    button:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'center',
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'
    }
})