import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import firebase from '@react-native-firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
//import 'firebase/auth';
//import 'firebase/database';
//import database from 'firebase';
//import firebase real time database
//import 'firebase/database';

//const auth = getAuth(firebaseApp);

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaselazejkzjdklConfig = {

  apiKey: "AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk",
  
  databaseURL: "https://festive-ally-347114-default-rtdb.firebaseio.com",

  authDomain: "festive-ally-347114.firebaseapp.com",

  projectId: "festive-ally-347114",

  storageBucket: "festive-ally-347114.appspot.com",

  messagingSenderId: "95871267309",

  appId: "1:95871267309:web:ace5eafd65caa9d831f7e4"

};

const firebaseConfig = {

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

const fireApp = firebase.initializeApp(firebaseConfig);
//console.log(fireApp);
//var database = firebase.database(fireApp);



function storeHighScore(user, message) {

  var timestamp = new Date().getTime();
  const db = getDatabase();
  const reference = ref(db, 'messages/' + Date.now());   //Math.floor(Math.random() * 111111111));
  set(reference, {
    message: message,
    user: user,
  });
}


//storeHighScore("Billal", "Hello World");
//storeHighScore("Sam", "Hello World !!!!!");
//storeHighScore("Sam", "Hello World too");


setTimeout(function() {
  //storeHighScore("HA", "Hello YOOOOOOOOOO");
 }, 3000);

function setupHighscoreListener() {
  const db = getDatabase();
  const reference = ref(db, 'messages/');
  var ho ="message"
  onValue(reference, (snapshot) => {
    const message_ = snapshot.val();
    snapshot.forEach(function(childNodes){
      console.log(childNodes.key + ": " + childNodes.val().message);
    });
    //console.log(typeof message_);
    //console.log(message_["Billal"]["message"]);
  });
}






export default function App() {
  const[messages_list, setmessages_list] = useState([]);
  const[TextFromInput, setTextFromInput] = useState([]);
  //const que = query(ref(db, 'messages/', orderByKey()));
  //get(que)
  var l = []
  var tmp = []
  const db = getDatabase();
  const reference = ref(db, 'messages/');
  var start = true
  useEffect(() => {
    onValue(reference, (snapshot) => {
      //const message_ = snapshot.val();
      if (start == true) {
        snapshot.forEach(function(childNodes){
          //console.log(childNodes.key + ": " + childNodes.val().message);
          l.push(childNodes.val().user+" :"+childNodes.val().message)
        });
        
        setmessages_list(l);
        start = false
        
        
      }
      else{
        
        snapshot.forEach(function(childNodes){
          tmp.push(childNodes.val().user+" :"+childNodes.val().message)
          //console.log(childNodes.key + ": " + childNodes.val().message);
        });


        console.log("starting..." + l)
        console.log("New message : "+ tmp[tmp.length-1]);
        l.push(("New message : "+ tmp[tmp.length-1]));
        console.log("ending..." + l)
        console.log(typeof l)
        setmessages_list(tmp);  //[l]
        
        tmp = []
  
      }
      
      //console.log(typeof message_);
      //console.log(message_["Billal"]["message"]);
    });

  } , []);
  
  var i = 0
  //console.log(l)

  return (
    <View style={styles.container}>

    <Text>Welcome</Text>
    <Text>{TextFromInput}</Text>
    

    {messages_list.map(single_message => (
      
      (<Text key={messages_list.indexOf(single_message)}>{single_message}</Text>)
    ))}

    <TextInput style={{width:200, height:50, backgroundColor:"grey"}}   onChangeText={(text) => setTextFromInput(text)} onSubmitEditing={()=>{storeHighScore("Someone", TextFromInput)}}></TextInput>
    

    
  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
