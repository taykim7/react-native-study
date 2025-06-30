import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function MainScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'default'} />
      <Text>투두앱</Text>
      <View>
        <Text>해야할 일</Text>
      </View>
      <View>
        <Text>완료된 일</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})