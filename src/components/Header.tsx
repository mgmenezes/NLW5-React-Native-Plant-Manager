import React,{useState,useEffect} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/profile2.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){
    const [userName,setUserName] = useState<string>();
    useEffect(()=>{
        async function loadStorageUsername() {
            const user=await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user||'');
        }
        loadStorageUsername()
    },[])
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

        <Image style={styles.image} source={userImg}/>
        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingVertical:20,
        marginTop:getStatusBarHeight(),
        backgroundColor:colors.white,
    },
    greeting :{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text
    },
    userName:{
        fontSize:32,
        fontFamily:fonts.heading,
        color: colors.heading
    },
    image:{
        width:70,
        height:70,
        borderRadius:40,
    }


});
