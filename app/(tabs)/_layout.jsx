import { View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen name="home" 
             options = {{
                title:'Home',
                headerShown:  false,

             }}
            />
            <Tabs.Screen name="create" 
             options = {{
                title:'Create',
                headerShown:  false,

             }}
             
            />
            <Tabs.Screen name="bookmarks" 
             options = {{
                title:'Bookmark',
                headerShown:  false,

             }}
             
            />
            <Tabs.Screen name="profile" 
             options = {{
                title:'Profile',
                headerShown:  false,

             }}
             
            />
        </Tabs>
    </>)
}

export default TabsLayout