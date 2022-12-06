//import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback, useRef, memo} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Platform, TouchableOpacity, Button, Alert, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import YoutubePlayer from "react-native-youtube-iframe";
import moment from 'moment';



moment().format();



//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import useForceUpdate from 'use-force-update';


//alert("This is the android version")



function timeConverter(timetoconvert){



  var myDate = new Date(timetoconvert);
  var result = myDate.getTime();

  result= result / 1000

  var currentUnixTimestap = ~~(+new Date() / 1000);


  var aa = moment.unix(result.toString()); // converted value
  var bb = moment.unix(currentUnixTimestap.toString()); // converted value

  var days = bb.diff(aa, "days");
  aa.add(days, "years");

  var hours = bb.diff(aa, "hour");
  aa.add(hours, "hours");

  var seconds = bb.diff(aa, "seconds");

  //return(days + " days " + hours + " hours " + seconds + " seconds");

  var returned = ""

  //return(days + " days " + hours + " hours " + seconds + " seconds");


  console.log(days + " days " + hours + " hours " + seconds + " seconds")


  
  if (days>365){

    //returned = parseInt(days/365)+" years ago";

    if (parseInt(days/365)==1){
      returned = "1 year ago";
    }else{
      returned = parseInt(days/365)+" years ago";
    }

  }
  else if (days==0){

    if(hours==1){
      returned = parseInt(hours)+" hour ago";

    }else{
      returned = parseInt(hours) +" hours ago";
    }
  }
  else if (days<=7){

    if (days==1){
      returned = "1 day ago";
    }else{
      returned = parseInt(days) + " days ago";

    }

  }

  else if (days>25 && days<365){
    if(days/30 == 1){
      returned = "1 month ago";
    }else if(days/30 < 1){
      returned = "1 month ago";
    }
    else{
      returned = parseInt(days/30) + " months ago";

    }


  }


  else if (days>7){
    if(days/7 == 1){
      returned = "1 week ago";
    }else{
      returned = parseInt(days/7) + " weeks ago";

    }


  }

  else if(seconds<3600){

    if(seconds/60<1){
      returned = "1 minute ago";

    }else{
      returned = parseInt(seconds/60)+" minutes ago";

    }



  }
  else{

    returned = parseInt(years) +" years ago";

  }

  return returned;
}



export default function App() {




  //const forceUpdate = useForceUpdate();

  const[users, setUsers] = useState([]);
  const[like, setLike] = useState([]);
  const[dislike, setDisike] = useState([]);




  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + ' k' : Math.sign(num)*Math.abs(num)
}



  //useEffect(() => {
  //  getUsers();
  //}, []);

  //const getUsers = () => {
  //  fetch('https://regres.in/api/users?page=1')
  //  .then(function(response) {
  //    return response.json();

  //  }).then(function(response){
  //    setUsers(response);
  //  });
  //}

  //const renderItem = ({item}) => {
  //  <item title={item.title} />
  //};







  const api_key = "AIzaSyAKv3LerMWspOi2TBWq9plWHswWJbqIVyE";

  var request = new XMLHttpRequest();









var query = "culture psg"



  //setDisike("https://i.ibb.co/tJj6bYL/like.png")






useEffect(() => {


  var videos_list = []
  var channels_list = []
  var url_channels = "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items&key=AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk"
  var url_videos = "https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk&type=video"

  var i = 1  //}

  setLike("https://i.ibb.co/tJj6bYL/like.png")
  setDisike("https://i.ibb.co/tJj6bYL/like.png")








  fetch('https://jsonkeeper.com/b/1U8J').then((response) => response.json()).then((json) => { //need to change this to the real youtube realtime api "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items&key=AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk&id=UCIJZA6SJ3JjvuOZgYPYOHnA&id=UCIJZA6SJ3JjvuOZgYPYOHnA&id=UCKjLMVAp2w7rN_T_xGVEdaA&id=UCIJZA6SJ3JjvuOZgYPYOHnA&id=UCPvQpctk4LWCxBN-u00HD0Q&id=UCFKo78ysxmRhoQ85ySEo_PQ&id=UCEWPsAL5QOfk5f-aoN2CLtA&id=UCIJZA6SJ3JjvuOZgYPYOHnA&id=UCEWPsAL5QOfk5f-aoN2CLtA&id=UCKjLMVAp2w7rN_T_xGVEdaA&id=UCIJZA6SJ3JjvuOZgYPYOHnA&id=UCjS-cIw2OFnJSVNkwUdKJfQ&id=UC_5uOgzQKXpm3PS-byZbqBg&id=UC5p-vvCKT_D4mtX3zRQNkFg"
    //https://jsonkeeper.com/b/DMT6    //https://jsonkeeper.com/b/V50R   //https://jsonkeeper.com/b/DAWN  //random https://jsonkeeper.com/b/R74R
    //console.log(json["items"][0]["snippet"]["title"]);

    var haa = JSON.stringify(json);
    var hee = JSON.parse(haa);



    //console.log(hee)




    //console.log(hee["items"][0]["snippet"]["title"]);



    for (const video of hee["items"]){

      /////////console.log(video["snippet"]["title"])



      var too = "https://img.youtube.com/vi/" + video["id"]["videoId"] + "/maxresdefault.jpg"

      try{
        videos_list.push({
          title: video["snippet"]["title"],
          thumbnail: too,//video["snippet"]["thumbnails"]["high"]["url"],
          channel: video["snippet"]["channelTitle"],
          videoid: video["id"]["videoId"],
          channel_icon: "h",
          channel_id: video["snippet"]["channelId"],
          published_at: timeConverter(video["snippet"]["publishedAt"]),
          subscribers:"",
          views:"0",
          likes:"0",
          key: i,
        });

        if (video["snippet"]["title"] == "❌ Naufrage pour l'OL et le Barça : Analyse de deux situations bien différentes"){
          console.log(video["snippet"]["publishedAt"])
          console.log(timeConverter(video["snippet"]["publishedAt"]))
        }



        url_channels = url_channels + "&id=" +video["snippet"]["channelId"]
        url_videos = url_videos + "&id=" + video["id"]["videoId"]

        i = i + 1;

      }
      catch{

      }



















    }


    //console.log(url_videos)
    fetch("https://jsonkeeper.com/b/A93B").then((response) => response.json()).then((json___) => { //need to change it to real api -> fetch(url_videos) //
      var hooo_ = JSON.stringify(json___);
      var hooo_ = JSON.parse(hooo_);

      //console.log(hooo["items"][0]["snippet"]["thumbnails"]["high"]["url"]);

      for (const video of videos_list){

        var y = 0;




        for (const video_ of hooo_["items"]){ //need to change for real api


          //console.log(video_["id"]);


          if (video_["id"] == video["videoid"]){

            //console.log("found");

            video["views"] = kFormatter(video_["statistics"]["viewCount"]);
            video["likes"] = kFormatter(video_["statistics"]["likeCount"]);
            //alert(video["likes"])



            break;




          }
          else{
            //console.log("not found");





          }




        }




      }

      //setUsers(videos_list);


    });




    //console.log(url_channels);

    fetch("https://jsonkeeper.com/b/2ZMA").then((response) => response.json()).then((json__) => { //need to change it to real api -> fetch(url_channels) //
      var hooo = JSON.stringify(json__);
      var hooo = JSON.parse(hooo);

      //console.log(hooo["items"][0]["snippet"]["thumbnails"]["high"]["url"]);

      for (const video of videos_list){

        var y = 0;




        for (const channel of hooo["items"]){ //need to change for real api


          if (channel["id"] == video["channel_id"]){



            video["channel_icon"] = channel["snippet"]["thumbnails"]["high"]["url"];


            break;




          }
          else{



            y = y + 1;

          }




        }




      }

      //setUsers(videos_list);


    });

    fetch("https://jsonkeeper.com/b/WE4D").then((response) => response.json()).then((json__) => { //need to change it to real api -> fetch(url_channels) //https://jsonkeeper.com/b/2ZMA
      var hooo = JSON.stringify(json__);
      var hooo = JSON.parse(hooo);

      //console.log(hooo["items"][0]["snippet"]["thumbnails"]["high"]["url"]);

      for (const video of videos_list){

        var y = 0;




        for (const channel of hooo["items"]){ //need to change for real api


          if (channel["id"] == video["channel_id"]){




            video["subscribers"] = kFormatter(channel["statistics"]["subscriberCount"]);

            break;




          }
          else{



            y = y + 1;

          }




        }




      }

      //setUsers(videos_list);


    });

    //setTimeout(function(){setUsers(videos_list);}, 2000);


    var y = 0;

    for (const video of videos_list){

      //alert(video["thumbnail"]);









      Image.getSize(video["thumbnail"], (width, height) => {




        //video["thumbnail"] = "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg";

        setTimeout(function(){setUsers(videos_list);}, 1000); //2000




        y = y + 1;




      }, (error) =>{



        video["thumbnail"] = "https://img.youtube.com/vi/" + video["videoid"] + "/maxresdefault_live.jpg";   //maxresdefault_live.jpg

        //setTimeout(function(){setUsers(videos_list);}, 500); //2000

        //y = y + 1;

          //maxresdefault_live.jpg

        Image.getSize(video["thumbnail"], (width, height) => {




          //video["thumbnail"] = "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg";

          setTimeout(function(){setUsers(videos_list);}, 1000); //2000




          y = y + 1;




        }, (error) =>{



          video["thumbnail"] = "https://img.youtube.com/vi/" + video["videoid"] + "/hqdefault.jpg";   //maxresdefault_live.jpg

          setTimeout(function(){setUsers(videos_list);}, 1000); //2000

          y = y + 1;





        });







      });
    }















































    //setBlocks(videos_list);
    //RenderBlocks







    //alert(channels_list);




  }).catch((error) => {
    alert(error);});



},[]);


//setTimeout(function(){console.log(users);}, 2000);

//request.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query +'&maxResults=1&type=video&key=AIzaSyDBoiPG8hltcIoOhUCxss1qa_h_ebBNQPk');
//request.open('GET', 'https://jsonkeeper.com/b/KOPW')
//request.send();

//request.onreadystatechange = function() {
  //var datafromApi = JSON.parse(request.responseText);
  //console.log(datafromApi);

 // var haa = destr(request.responseText);

//  var hoo = JSON.parse(request.responseText);
//  console.log(hoo);



//console.log(videos_list);












//console.log(he["items"][0]["snippet"]["title"]);
//console.log(he["items"][0]["snippet"]["channelTitle"]);
//console.log(he["items"][0]["etag"]);
//console.log(he["items"][0]["snippet"]["thumbnails"]["high"]["url"]);





//videos_list.push({
//  title: he["items"][0]["snippet"]["title"],
//  thumbnail: he["items"][0]["snippet"]["thumbnails"]["high"]["url"],
//  key: "1",
//});

//videos_list.push({
//  title: "Morning Walk",
//  thumbnail: "https://i3.ytimg.com/vi/vCA7q-GdjhU/maxresdefault.jpg",
//  key: "2",
//});

//console.log(videos_list);














const tasks = [
  {
    title: "Morning Walk",
    thumbnail: "https://i3.ytimg.com/vi/vCA7q-GdjhU/maxresdefault.jpg",
    key: "1",
  },
  {
    title: "Morning Walk",
    thumbnail: "https://i3.ytimg.com/vi/vCA7q-GdjhU/maxresdefault.jpg",
    key: "2",
  },
  {
    title: "Morning Walk",
    thumbnail: "https://i3.ytimg.com/vi/vCA7q-GdjhU/maxresdefault.jpg",
    key: "3",
  }
];

const channels = [
  {
    name: "CulturePSG",
    icon: "https://yt3.ggpht.com/ytc/AKedOLQKm3IdxW5CbfCsfqgZf8EooZbebtsR0aWFjVUG=s88-c-k-c0x00ffffff-no-rj",
    key: "1",
  },
  {
    name: "RMC Sport",
    icon: "https://yt3.ggpht.com/ytc/AKedOLQmLdE1zJpldwTAB2mrQVRTptUwQi_O1zeqZbSp1w=s88-c-k-c0x00ffffff-no-rj",
    key: "2",
  },
  {
    name: "Sorted Food",
    icon: "https://yt3.ggpht.com/c1Rvhv14xB0gOIfZHnDuQ8Q8jXaY67nF4PZ3-R6ojLoEpF7MCCAozvFDyq1j_6OJSUCbVA01qA=s176-c-k-c0x00ffffff-no-rj-mo",
    key: "3",
  },
  {
    name: "CulturePSG",
    icon: "https://yt3.ggpht.com/ytc/AKedOLQKm3IdxW5CbfCsfqgZf8EooZbebtsR0aWFjVUG=s88-c-k-c0x00ffffff-no-rj",
    key: "4",
  },
  {
    name: "RMC Sport",
    icon: "https://yt3.ggpht.com/ytc/AKedOLQmLdE1zJpldwTAB2mrQVRTptUwQi_O1zeqZbSp1w=s88-c-k-c0x00ffffff-no-rj",
    key: "5",
  },
  {
    name: "Sorted Food",
    icon: "https://yt3.ggpht.com/c1Rvhv14xB0gOIfZHnDuQ8Q8jXaY67nF4PZ3-R6ojLoEpF7MCCAozvFDyq1j_6OJSUCbVA01qA=s176-c-k-c0x00ffffff-no-rj-mo",
    key: "6",
  },{
    name: "CulturePSG",
    icon: "https://yt3.ggpht.com/ytc/AKedOLQKm3IdxW5CbfCsfqgZf8EooZbebtsR0aWFjVUG=s88-c-k-c0x00ffffff-no-rj",
    key: "7",
  },
  {
    name: "RMC Sport",
    icon: "https://yt3.ggpht.com/ytc/AKedOLQmLdE1zJpldwTAB2mrQVRTptUwQi_O1zeqZbSp1w=s88-c-k-c0x00ffffff-no-rj",
    key: "8",
  },
  {
    name: "Sorted Food",
    icon: "https://yt3.ggpht.com/c1Rvhv14xB0gOIfZHnDuQ8Q8jXaY67nF4PZ3-R6ojLoEpF7MCCAozvFDyq1j_6OJSUCbVA01qA=s176-c-k-c0x00ffffff-no-rj-mo",
    key: "9",
  },

];

const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


const Stack = createNativeStackNavigator();

//console.log(videos_list);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={{top:35}}>

            <Image style={{top:0, zIndex: 7, width:130, height:50, left:0}}source={{uri: 'https://i.ibb.co/7171M0x/Sans-tiaeztre-removebg-preview.png'}}></Image>



              <ScrollView style={{marginTop:10.5, height:100}} horizontal showsHorizontalScrollIndicator={false}>

              {channels.map(channel => (

              <View style={{marginLeft:10, width:60, height:80, marginTop:10.5}} key = {channel.key} >
              <Image style = {{height:60, width:60, zIndex: 19, borderRadius: 40, backgroundColor:"#000000"}} source={{uri:channel.icon}}></Image>
              <Text style = {{fontSize:10.5, textAlign:'center', color:"#959595", top:5}} numberOfLines={1}>{channel.name}</Text>
              </View>
            ))}




              </ScrollView>


        </View>
        <View style={{top:35, paddingBottom:34}}>
        {
        users.map(task => (
          <TouchableOpacity
            onPress={ () => navigation.navigate('Profile', { title: task.title, video_id: task.videoid, published_at: task.published_at, likes:task.likes, channel:task.channel, subscribers:task.subscribers, channel_icon:task.channel_icon, views: task.views })}
            key = {task.key} style={{backgroundColor:"#212121",height:300, borderBottomColor:'#383838',borderBottomWidth:1}}>
            <Image style={{height:40, width:40, zIndex: 5, top:230, position:'absolute', overflow: 'hidden', borderRadius: 40,left:10}}source={{uri: task.channel_icon}}></Image>
            <Image style = {{width:Dimensions.get('window').width, height : (Dimensions.get('window').width/1.77)}} source={{ uri: task.thumbnail}}/>
            <Text style={{color:"#ffffff", marginLeft: Platform.OS === 'android' ? 40 : 40, marginLeft: Platform.OS === 'web' ? 60 : 40, marginTop:8, fontFamily:'Roboto', fontWeight:"bold", width:300, left:20}}  numberOfLines={2}>{task.title}</Text>
            <Text style={{color:"#909090", marginLeft: Platform.OS === 'android' ? 40 : 40, marginLeft: Platform.OS === 'web' ? 60 : 40, marginTop:2, fontFamily:'Roboto', fontWeight:"normal", width:300, left:20, fontSize:12}}>{task.channel +" • "+ task.views + " views • " +  task.published_at}</Text>
            </TouchableOpacity>
          ))}

        </View>




        </ScrollView>


      </View>

  );
};



const ProfileScreen = ({ navigation, route }) => {

  return(

    <View style = {{flex:1,backgroundColor: '#202020'}}>
      <View style={{marginTop:40}}>
      <YoutubePlayer
          height={230}
          play={playing}
          videoId={route.params.video_id}
          onChangeState={onStateChange}
          onReady={setPlaying(true)}
        />
      </View>

      <Text style={{color:"#ffffff", fontSize:18, fontFamily:'Roboto', fontWeight:'900', marginLeft:10, marginTop:10}}  numberOfLines={2}>{route.params.title}</Text>
      <Text style={{color:"#909090", marginTop:5, fontFamily:'Roboto', fontWeight:"normal", width:300, left:10, fontSize:13}}>{route.params.views + " views" + " • "+ route.params.published_at}</Text>

      <View style={{height:70, justifyContent:'center'}}>

        <TouchableOpacity onPress={ () => setLike("https://i.ibb.co/YkrhyBF/toggle-like.png") } style={{marginLeft:20, height:40, width:40 , alignItems: 'center', position:'absolute'}}>
          <Image style={{zIndex: 7, width:25, height:25}}source={{uri: like.toString()}}></Image>

          <Text style={{color:"#909090", fontFamily:'Roboto', fontWeight:"normal", width:40, fontSize:13, top:5, textAlign:'center'}}>{route.params.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => setDisike("https://i.ibb.co/YkrhyBF/toggle-like.png") } style={{height:40, width:40 , alignItems: 'center', left:80}}>
          <Image style={{zIndex: 6, width:25, height:25,  transform: [{ rotate: '180deg'}]}}source={{uri: dislike}}></Image>
          <Text style={{color:"#909090", fontFamily:'Roboto', fontWeight:"normal", width:40, fontSize:13, top:5}}>Dislike</Text>



        </TouchableOpacity>

      </View>

      <View style={{height:70, borderBottomColor:'#383838',borderBottomWidth:1, borderTopColor:'#383838',borderTopWidth:1}}>
      <Image style = {{height:35, width:35, zIndex: 19, borderRadius: 40, backgroundColor:"#000000", marginLeft:10, top:15}} source={{uri:route.params.channel_icon}}></Image>
      <Text style={{color:"#ffffff", fontSize:18, fontFamily:'Roboto', fontWeight:'900', position: 'absolute', marginLeft:55, top:10}}  numberOfLines={2}>{route.params.channel}</Text>
      <Text style={{color:"#909090", fontFamily:'Roboto', fontWeight:"normal", width:300, left:55, top:0, fontSize:13}}>{route.params.subscribers + " subscribers"}</Text>
      <Text style={{color:"#971B00", fontFamily:'Roboto', fontWeight:"normal", width:100, left:270, top:-30, fontSize:15}}>{"SUBSCRIBE"}</Text>
      </View>

    </View>

  );
  //return (<Text style={{color:"#000000", marginLeft: Platform.OS === 'android' ? 10 : 10, marginLeft: Platform.OS === 'web' ? 0 : 0, marginTop:80, fontFamily:'Roboto', fontWeight:"bold", fontSize:20, textAlign:'center'}}>{route.params.video_id}</Text>);
};



return(<NavigationContainer>

  <Stack.Navigator>

  <Stack.Screen name="Home"component={HomeScreen} options={{ title: 'Welcome',  headerShown: false }}/>

  <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false }}/>

  </Stack.Navigator>



  </NavigationContainer>);




}




/*<View style={{backgroundColor:"#212121",height:305, borderBottomColor:'#383838',borderBottomWidth:1}}>
          <Image style={{height:35, width:35, zIndex: 5, top:230, position:'absolute', overflow: 'hidden', borderRadius: 40,left:10}}source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLQKm3IdxW5CbfCsfqgZf8EooZbebtsR0aWFjVUG=s88-c-k-c0x00ffffff-no-rj'}}></Image>
          <Image style={{height:220}}source={{uri: 'https://i.ytimg.com/vi/vCA7q-GdjhU/hq720_live.jpg?sqp=CJSP0pIG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUYy80jD4OhgAC23dHu_brMPU9Rw'}}></Image>
          <Text style={{color:"#ffffff", marginLeft:40, marginTop:8, fontFamily:'Roboto', fontWeight:"bold", width:300, left:20}}>Podcast 11/04/22 : Clermont/PSG (1-6) et quest