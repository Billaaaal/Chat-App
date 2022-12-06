import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import firebase from '@react-native-firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
//import 'firebase/auth';
//import 'firebase/database';
//import database from 'firebase';
//import firebase real time database
//import 'firebase/database';

//var auth = getAuth(firebaseApp);

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

var firebaselazejkzjdklConfig = {

  apiKey: "AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk",
  
  databaseURL: "https://festive-ally-347114-default-rtdb.firebaseio.com",

  authDomain: "festive-ally-347114.firebaseapp.com",

  projectId: "festive-ally-347114",

  storageBucket: "festive-ally-347114.appspot.com",

  messagingSenderId: "95871267309",

  appId: "1:95871267309:web:ace5eafd65caa9d831f7e4"

};

var firebaseConfig = {

  apiKey: "AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk",

  authDomain: "festive-ally-347114.firebaseapp.com",

  databaseURL: "https://festive-ally-347114-default-rtdb.firebaseio.com",

  projectId: "festive-ally-347114",

  storageBucket: "festive-ally-347114.appspot.com",

  messagingSenderId: "95871267309",

  appId: "1:95871267309:web:aace30e16f98cd5431f7e4"

};

var suii = {
  "Billal": {
    "message": "Hello World",
  },
  "Sam": {
    "message": "Hello World too",
  },
}

//console.log(suii[Object.keys(suii)[0]]);

for (var key in suii) {

  //console.log(typeof key);

}

// Initialize Firebase

var fireApp = firebase.initializeApp(firebaseConfig);
//console.log(fireApp);
//var database = firebase.database(fireApp);








export default function App() {
  var l = []
  var db = getDatabase();
  var reference = ref(db, 'messages/');
  onValue(reference, (snapshot) => {
    var message_ = snapshot.val();
    snapshot.forEach(function(childNodes){
      //console.log(childNodes.key + ": " + childNodes.val().message);
      l.push(childNodes.key + ": " + childNodes.val().message)
    });
    //console.log(typeof message_);
    //console.log(message_["Billal"]["message"]);
  });

  function storeHighScore(userId, message) {
    var db = getDatabase();
    var reference = ref(db, 'messages/' + userId);    //Math.floor(Math.random() * 111111111));
    set(reference, {message,
    });
  }
  
  
  storeHighScore("Billal", "Hello World");
  storeHighScore("Sam", "Hello World !!!!!");
  storeHighScore("Sam", "Hello World too");
  
  
  
  
  function setupHighscoreListener() {
    var db = getDatabase();
    var reference = ref(db, 'messages/');
    var ho ="message"
    onValue(reference, (snapshot) => {
      var message_ = snapshot.val();
      snapshot.forEach(function(childNodes){
        console.log(childNodes.key + ": " + childNodes.val().message);
      });
      //console.log(typeof message_);
      //console.log(message_["Billal"]["message"]);
    });
  }
  
  var db = getDatabase();
    var tmp = [];
    var reference = ref(db, 'messages/');
    var ho ="message"
    onValue(reference, (snapshot) => {
      var message_ = snapshot.val();
      snapshot.forEach(function(childNodes){
        tmp.push(childNodes.key + ": " + childNodes.val().message);
        //console.log(childNodes.key + ": " + childNodes.val().message);
      });
      console.log("New message : "+tmp[tmp.length - 1]);
      //console.log(typeof message_);
      //console.log(message_["Billal"]["message"]);
    });
  
    
  
  //setupHighscoreListener();

  return (
    <View style={styles.container}>
      


    {l.map((data) => {
      return (
        <View><Text>{data}</Text></View>
      )
    })}
      
    </View>
  );

  
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
