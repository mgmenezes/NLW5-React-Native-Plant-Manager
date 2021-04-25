import React,{useEffect} from 'react';
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications'

import  Routes  from './src/routes';

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,

} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';


useEffect(()=>{
  // const subscription = Notifications.addNotificationReceivedListener(
  //   async notification => {
  //     const data = notification.request.content.data.plant as PlantProps;
  //   })
  //   return() => subscription.remove();

  async function notifications(){
    // const data = await Notifications.getAllScheduledNotificationsAsync();
  }
},[])


export default function App(){
  const [fontsLoaded]= useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if(!fontsLoaded)
      return <AppLoading/>
      
  return(
    <Routes/>
  )
}



