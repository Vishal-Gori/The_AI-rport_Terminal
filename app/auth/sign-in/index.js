import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter(); 

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 35,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name='arrow-back' size={24} color='black' />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
        }}
      >
        Let's Sign you In
      </Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        You have been missed
      </Text>
      {/* Email */}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit',
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} placeholder='Enter Your Email' />
      </View>

      {/* Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit',
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter Your password'
        />
      </View>
      {/* Sign-In button */}
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
          }}
        >
          Sign In
        </Text>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
      onPress={() => router.replace('auth/sign-up')}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: 'center',
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    marginBottom: 20,
    borderRadius: 15,
    fontFamily: 'outfit',
  },
});
