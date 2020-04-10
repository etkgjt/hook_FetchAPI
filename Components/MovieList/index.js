import React , {useState} from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';
MovieList.PropTypes = {
    movieList : PropTypes.array,

}
MovieList.defaultProps = {
    movieList : []
}


export default function MovieList(props){
    const {movieList} = props;
    const listTitle = movieList.map(item=>item.title);
    //console.log(listTitle);
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <FlatList
            data = {listTitle}
            renderItem = {({item})=><Text style={{fontSize:20,fontWeight:'bold'}}>{item}</Text>}
            keyExtractor = {(item,idx)=>idx.toString()}
            style={{marginTop:50}}
            />
        </View>
    )
}