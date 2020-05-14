
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default class Footer extends React.Component{
    constructor(props){
        super(props);
      }

    render(){

        return(
            <View style={styles.mainContainer}>
                <Text style={styles.container}>I am a footer</Text>
            <Text style={styles.text1}>{this.props.myBtn}</Text>
            </View>
        );
     };
}
const styles = StyleSheet.create({
    mainContainer:{
        marginTop: 500,

    },
    container:{
        backgroundColor:'red',
    },
    text1:{
        backgroundColor: 'powderblue',
    }
});

