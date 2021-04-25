import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params{
    title: string,
    subtitle: string,
    buttonTitle:string,
    icon:'smile' | 'hug',
    nextScreen:string,
}
const emojis ={
    hug:'🤗',
    smile:'😄'
}


export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();

    const{
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen,
    } = routes.params as Params

    function handleMoveOn(){
        navigation.navigate(nextScreen);
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                    
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>
                
                <Text style ={styles.subtitle}>
                    {subtitle}
                </Text>
            <View style ={styles.footer}>
                <Button
                    title={buttonTitle}
                    onPress={handleMoveOn}
                />
            </View>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',

    },

    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:30,


    },
    title: {
        fontSize:24,
        fontFamily:fonts.heading,
        textAlign:'center',
        color:colors.heading,


    },
    subtitle: {
        fontSize:17,
        fontFamily:fonts.text,
        textAlign:'center',
        paddingVertical:10,
        color:colors.heading,
    },
    emoji:{
        fontSize:78,
        marginBottom:20,

    },
    footer:{
        width:'100%',
        marginTop:20,
        paddingHorizontal:50
    },


})