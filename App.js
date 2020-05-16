import React, {userState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';

import Body from './components/Body';

import Footer from './components/Footer';

// import uuid from 'uuiid-random';

// import {uuid} from 'uuidv4';

// const { uuid } = require('uuidv4');

// import { v4 as uuidv4 } from 'uuid';


const App = (props) => {
  // const [items, setItems] = userState([
  //   {id: uuidv4(), text: 'Milk'},
  //   {id: uuidv4(), text: 'Eggs'},
  //   {id: uuidv4(), text: 'Bread'},
  //   {id: uuidv4(), text: 'Juice'},
  // ])

  const myArray = ["John", "Peter ", "James ", "Kevin ", "Mike ",
   "Michel ","Babylon ", "David ", "My Love ",
    "MyBody paragraph ","Something news " ];

  const myButtonArray = ['button1', 'button2', 'button3',
                  'button4', 'button5', 'button6', 'button7',
                  'button8', 'button9', 'button10',
                  'button11', 'button12', 'button13', 'button14',
                  'button15', 'button16', 'button17', 'button18',
                  'button19', 'button20', 'button21'];

                  let randomNum = 10 + Math.floor(40 * Math.random());

  return(
    <View style={styles.container}>
        <Header title="Shopping List"/>
        <Body pd={myArray + randomNum} />
       <Footer myBtn={myButtonArray}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
});


export default App;