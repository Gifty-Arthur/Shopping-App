import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function Login({navigation}) {
  return (
    
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View>

        </View>
   

      <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 24 }}> </Text>
      <Text style={{ color: "purple", fontSize: 30, fontWeight: "600", padding:5, height: 150 }}>
        WELCOME TO CLOSET PLUG{" "}
      </Text>
      
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate('SignInScreen')}
      >

        
       
        <Text style={{ fontSize: 17, marginLeft: 15, color:"white" }} >Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 10,
          paddingHorizontal: 40,
          marginTop: 50,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
        
        
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>
          Login with Apple
        </Text>

        </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#8a3ab9",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 50,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}

        
      >
        <AntDesign name="instagram" size={24} color="white" />
        <Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>
          Login with instagram
        </Text>

      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            color: "grey",
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          
          


          Not a member?{" "}
          <Text style={{ color: "#FF0000", fontWeight: "bold" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
