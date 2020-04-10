import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MovieList from './Components/MovieList';
export default function App(){
  const [list,setList] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(() => {
   
    async function fetchMovieList(){
      try{
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=b5d5cdc41bceae3132ead55454bde93c&language=en-US&page=${page}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      const data = [...responseJson.results]
      //console.log(data);
      setList(data);
      }catch(err){
        console.log(err); 
      }
      
    }
    fetchMovieList();
  },[page]);
    function setP(num){
      console.log('setPage ',num);
      setPage(num);
    }
    return <View style={{flex:1}}>
      
        <MovieList movieList = {list}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <TouchableOpacity style={{width:50,height:50,backgroundColor:'yellow',borderRadius:25,justifyContent:'center',alignItems:'center'}}
            onPress = {()=>setPage(1)}         
          ><Text>Page 1</Text></TouchableOpacity>
          <TouchableOpacity style={{width:50,height:50,backgroundColor:'yellow',borderRadius:25,justifyContent:'center',alignItems:'center'}}
          onPress = {()=>setPage(2)} 
          ><Text>Page 2</Text></TouchableOpacity>
          <TouchableOpacity style={{width:50,height:50,backgroundColor:'yellow',borderRadius:25,justifyContent:'center',alignItems:'center'}}
          onPress = {()=>setPage(3)} 
          ><Text>Page 3</Text></TouchableOpacity>
        </View>
    </View>
}