import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const App = () => {
  const[name,setName]=useState("")
  const[email,setEamil]=useState("")
  const[mobile,setMobile]=useState("")
  const[messgae,setMessage]=useState("")
  const[agri,setAgri]=useState(false)

  const submit=()=>{
    if(!name && !email && !mobile && !messgae && !agri){
      Alert.alert("enter all filses")
    }
    else{
      Alert.alert(`Thank you${name}`)
    }
  }



  return (
    <ScrollView>
      <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up Your Knowledg</Text>
      <Text style={styles.description}>You can reach us anytime via thapa @gmil.com</Text>
       <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Name</Text>
          <TextInput
          style={styles.inputStyle}
          placeholder='Enter name'
          value={name}
          onChangeText={setName}
           />
       </View>
       <View style={styles.inputContainer}>
        <Text>Enter your email</Text>
        <TextInput
        style={styles.inputStyle}
        placeholder='email'
        value={email}
        onChangeText={setEamil}/>
       </View>

       <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your mobile</Text>
        <TextInput style={styles.inputStyle}
        keyboardType="phone-pad"
        placeholder='mobile num'/>
      
       </View>
       <View style={styles.inputContainer}>
        <Text style={styles.labels}>how can i help you</Text>
        <TextInput style={styles.inputStyle}
        placeholder='tell about your self'/>
       </View>
       <View style={styles.wrapper}>
           <Checkbox value={agri}
             
           onValueChange={()=>setAgri(!agri)}
           color={agri?"#c6624d":undefined}/>
           <Text style={styles.wrapperText}>I have agri with your TC</Text>
       </View>
       <TouchableOpacity style={[styles.buttonStyle,
        {backgroundColor:agri?"#c6624d":"#53c64d"}]} onPress={submit}>
        <Text style={styles.buttonText}>Conact us</Text>
       </TouchableOpacity>

    </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
})