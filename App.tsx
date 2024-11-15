
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const[currentcardindex,setCardCardInedex]=useState(0)
  const[showAnswer,setShowAnswer]=useState(false)

  const flashcard=[
    {question:"what is jsx",answer:"comibindation html and javscript",},
    {question:"what is DOM",answer:"Dom(Document objcet model)",},
    {question:"who is donald trump",answer:"donald trump is prsident of USA",},
  ]

  const nextcard=()=>{
    setShowAnswer(false)
    setCardCardInedex((Previndex)=>(Previndex+1)%flashcard.length)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{flashcard[currentcardindex].question}</Text>
      {showAnswer &&<Text>{flashcard[currentcardindex].question}</Text>}
      <TouchableOpacity onPress={()=>setShowAnswer(!showAnswer)} style={styles.button}>
        <Text style={styles.buttonText}>{showAnswer ?"hideanswer":"showanswer"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={nextcard} style={styles.button}>
        <Text style={styles.buttonText}>Next card</Text>
      </TouchableOpacity>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:
   { flex: 1, 
    justifyContent: 'center',
     alignItems: 'center', 
     padding: 20
     },
  questionText: {
     fontSize: 24,
      marginBottom: 20
     },

  answerText: { fontSize: 20,
     marginBottom: 20, 
     color: 'green'
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