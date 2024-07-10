import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-web";
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {
  const navigation = useNavigation();
  const route=useRouter(); 
  useEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 60,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
        <Ionicons name="arrow-back" size={24} color="black" />
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Create a new Account
      </Text>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Full Name
        </Text>
        <TextInput style={styles.input} placeholder="Enter Your Full Name" />
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} placeholder="Enter Your Email" />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          type="password"
          style={styles.input}
          placeholder="Enter Your password"
        />
      </View>
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
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </View>
      <TouchableOpacity
      onPress={() => navigation.replace("auth/sign-in")}
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
            textAlign: "center",
          }}
        >
          Sign In
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
    fontFamily: "outfit",
  },
});
