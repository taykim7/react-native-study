import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const InputForm = () => {
  // input Value state 생성성
  const [currentValue, setCurrentValue] = useState('');

  // dispatch
  const dispatch = useDispatch();

  // dispatch 핸들러 - 공백이 아닐때만 dispatch + 값 비우기
  const handleSubmit = () => {
    if(currentValue !== '') {
      dispatch(addTodo(currentValue));
      setCurrentValue('');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormcontainer}>
        <TextInput
          style={styles.inputField}
          placeholder='할 일을 작성해주세요.'
          value={
            // state
            currentValue
          }
          onChangeText={
            // 입력시 state 변경
            setCurrentValue
          }
          onSubmitEditing={
            // 버튼 클릭 이외에 엔터키로 Todo 생성
            handleSubmit
          }
        />
        <Pressable
          style={styles.addButton}
          onPress={
            // 버튼 클릭시 Todo 생성
            handleSubmit
          }
        >
          <Text
            style={styles.addButtonText}
          >+</Text>
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
  addFormcontainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa'
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  addButtonText: {
    color: 'white',
    fontSize: 25,
  }
})