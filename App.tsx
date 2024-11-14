import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
 const[name,setName]=useState("")
 const[email,setEmail]=useState("")
 const[phone,setPhone]=useState("")
 const[gender,setGender]=useState("")
 const [error,setError]=useState({
  name:"",
  email:"",
  phone:"",
  gender:"",

 })

 const validateEmail=()=>{
 
  let regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email)
 }

 const validtionFrom=()=>{
  let isvalid=true
  let errorMeassge={name:"",email:"",phone:"",gender:"",}

 if(!name){
  errorMeassge.name="Pls Enter name"
  isvalid=false
 }

 if(!email){
  errorMeassge.email="pls enter the email"
  isvalid=false
  
 }else if(!validateEmail(email)){
  errorMeassge.email="Enter valid email addres"
  isvalid=false
 }

 if(!phone){
  errorMeassge.phone="pls enter the phonnumber"
  isvalid=false
 }

 if(!gender){
  errorMeassge.gender="pls enter the gender"
  isvalid=false
 }
 setError(errorMeassge)
 return isvalid
 
  
 }

 const allValidation=()=>{
  if(validtionFrom()){
    Alert.alert(`form submit,Name${name},Email${email},Phone${phone},gender${gender}`)
 }
  else{
    Alert.alert("validation faild pls chacke the form and fill")
  }
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admission Form</Text>
      <TextInput
      style={styles.input}
      placeholder='Name'
      value={name}
      onChangeText={setName}/>
      {error.name?<Text style={styles.error}>{error.name}</Text>:null}


      <TextInput 
      style={styles.input}
      placeholder='email'
      value={email}
      onChangeText={setEmail}/>
      {error.email?<Text style={styles.error}>{error.email}</Text>:null}

      <TextInput
      style={styles.input}
      placeholder='phone'
      keyboardType='phone-pad'
      onChangeText={setPhone}
      value={phone}
      />
      {error.phone?<Text style={styles.error}>{error.phone}</Text>:null}

      <TextInput
      style={styles.input}
      placeholder='Male/Female'
      onChangeText={setGender}
      value={gender}/>
      {error.gender?<Text style={styles.error}>{error.gender}</Text>:null}

      <TouchableOpacity style={styles.button} onPress={allValidation}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -8,
    marginBottom: 10,
  },
})