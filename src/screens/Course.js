import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { courseApi } from '../API/Course'

const Course = () => {
  return (
    <FlatList
    key={(item)=> item.id}
    data = {courseApi}
    renderItem={courseItem}
    />
  )
}

export default Course

const styles = StyleSheet.create({})