import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ReadStoryScreen extends React.Component(){
    render(){
        return(
            <View style = {StyleSheet.container}>
                <Text>Read Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const App = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }