import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const[currentquestion,setCurrentQuestion]=useState(0)
  const[score,setScore]=useState(0);


  const question=[
    {question:"what is 2+2",option:['3','4','5'],correctAnswer:"4"},
    {question:"what is 5+3",option:['7','8','9'],correctAnswer:'6'},
    {question:"what is 10-6",option:["5",'4','7'],correctAnswer:"4"}
  ]

  const answerQuestion=(answer:string)=>{
    if(answer===question[currentquestion].correctAnswer){
      setScore(score+1)
    }
    if(currentquestion<question.length-1){
      setCurrentQuestion(currentquestion+1)
    }else{
      Alert.alert(`quiz finished your score is${score+1}`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question[currentquestion].question}</Text>
      {question[currentquestion].option.map((option,index)=>(
        <TouchableOpacity key={index}onPress={()=>answerQuestion(option)} style={styles.button}>
           <Text style={styles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
     alignItems: 'center',
      padding: 20
      },
 questionText: { 
   fontSize: 24,
    marginBottom: 20
    },
 button: { 
   backgroundColor: '#4CAF50', 
   padding: 10, 
   marginTop: 20,
    borderRadius: 5 
   },
 buttonText: { 
   color: '#fff',
    fontSize: 18 
   },
})