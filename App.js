import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
 



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContrainer}>
      <GoalInput onAddGoal={addGoalHandler} />
     <View style={styles.goalsContainer} >
     <FlatList data={courseGoals} renderItem={(itemData)=> {
      return <GoalItem text={itemData.item.text}/>;
     }}
     keyExtract={(item, index) => {
      return item.id; }}
     />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContrainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },

 });
