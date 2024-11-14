import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const[result,setResult]=useState("")
  const[input,setInput]=useState("")

  const handlevlaues=(value:string)=>{
    setInput(input+value)
  }
  const reset=()=>{
    setInput("")
    setResult("")
  }

  const claucalte=()=>{
    try{
      setResult(eval(input).toString())

    }catch(error){
      setResult("Error")

    }
  }




  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Eneter data'
      editable={false}
      value={input}/>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("1")}>
      <Text style={styles.buttonText}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("2")}>
      <Text style={styles.buttonText}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("3")}>
      <Text style={styles.buttonText}>3</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("+")}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("4")}>
      <Text style={styles.buttonText}>4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("5")}>
      <Text style={styles.buttonText}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("6")}>
      <Text style={styles.buttonText}>6</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("-")}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("7")}>
      <Text style={styles.buttonText}>7</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("8")}>
      <Text style={styles.buttonText}>8</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("9")}>
      <Text style={styles.buttonText}>9</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("*")}>
      <Text style={styles.buttonText}>*</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("0")}>
      <Text style={styles.buttonText}>0</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues(".")}>
      <Text style={styles.buttonText}>.</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={claucalte}>
      <Text style={styles.buttonText}>=</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>handlevlaues("/")}>
      <Text style={styles.buttonText}>/</Text>
    </TouchableOpacity>
    </View>
    <TouchableOpacity style={[styles.button,styles.clearButton]} onPress={reset}>
      <Text style={styles.buttonText}>c</Text>
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
  input: {
    height: 60,
    width: '100%',
    fontSize: 24,
    textAlign: 'right',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    
  },
  result: {
    fontSize: 32,
    marginBottom: 20,
    color: '#007BFF',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  clearButton: {
    backgroundColor: '#FF6347',
    width: '100%',
    marginTop: 20,
  },
})