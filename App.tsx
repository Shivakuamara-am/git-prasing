import { StyleSheet, Text, View,Button} from 'react-native'
import React, { useState } from 'react'

const App = () => {
 const[count,setCount]=useState(0)
 
 const incrimnet=()=>{setCount(count+1)}
 const decrimnent=()=>{setCount(count-1)}
 const reset=()=>{setCount(0)}

  return (
    <View style={styles.container}>
      <Text style={styles.countext}>{count}</Text>
      <Button onPress={incrimnet} title='incrimnet'/>
      <Button onPress={decrimnent}title='decriment'/>
      <Button onPress={reset}title='reset'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    justifyContent:"center",
    textAlign:"center",
  },
  countext:{
    textAlign:"center",
    fontSize:50,
    color:"red"

  },

})