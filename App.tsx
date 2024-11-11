import { StyleSheet, Text, View,Button,TextInput,FlatList} from 'react-native'
import React,{useState} from 'react'

const App = () => {
  const[task,setTask]=useState("")
  const[tasks,setTasks]=useState<String[]>([])

    const addtask=()=>{
      setTasks([...tasks,task])
      setTask("")
    }

    const Deletask=(index:number)=>{
      const newtask=tasks.filter((_,i)=> i !== index)
       setTasks(newtask)
    }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Enter task '
      value={task}
      onChangeText={setTask}/>
      <Button title='Add Task'onPress={addtask}/>
      <FlatList
     data={tasks}
     keyExtractor={(item,index)=>index.toString()}
     renderItem={({item,index})=>(
      <View style={styles.taskItem}>
        <Button title='Delete tkggitask'onPress={()=>Deletask(index)}/>
        </View>
     )}/>
      <Text>App klgigt</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
})