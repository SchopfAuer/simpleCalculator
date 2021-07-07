import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Display } from '../../components/Display';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export default function Home() {
  const [displayValue, setDisplayValue] = useState('0')
  const [expressionValue, setExpressionValue] = useState('')
  const [lastOperator, setLastOperator] = useState('')
  const [lastInput, setLastInput] = useState('')


  function addDigit(value:string){
    { if (displayValue ==='0' && value==='.'){
        setDisplayValue('0,')
    } else {
      displayValue === 'Invalid expression' ? setDisplayValue(value) :
      (displayValue==='0' || lastOperator==='=') ? setDisplayValue(value) :
      value === '.' ? setDisplayValue(displayValue + ',') :
        setDisplayValue(displayValue + value)
      setLastInput(value)
    }}
    {
      expressionValue === 'Invalid expression' ? setExpressionValue(value) :
      (expressionValue === '0' || lastOperator === '=') ? setExpressionValue(value) :
      setExpressionValue(expressionValue + value)
    }
  }

  function addOperation(operator:string){
    { 
      if(
        lastInput === '+' ||
        lastInput === '*' ||
        lastInput === '/' ||
        lastInput === '-'
      ){
        setDisplayValue(displayValue.slice(0,-1)+operator)
        setLastOperator(lastOperator)
        setLastInput(operator)
      } else {
        displayValue==='0' ? setDisplayValue('0') :
        lastInput === operator ? setDisplayValue(displayValue) :
        operator === '*' ? setDisplayValue(displayValue + '×') :
          setDisplayValue(displayValue + operator)
        setLastOperator(operator)
        setLastInput(operator)
    }
    }
    { 
      if(
        lastInput === '+' || 
        lastInput === '*' ||
        lastInput === '/' ||
        lastInput === '-'
      ){
        setExpressionValue(expressionValue.slice(0,-1)+operator)
      } else {
        expressionValue === '0' ? setExpressionValue('0') :
        lastInput === operator ? setExpressionValue(expressionValue) :
        setExpressionValue(expressionValue + operator)
    }
    }
  }


  function clearMemory(){
    setDisplayValue('0')
    setExpressionValue('0')
    setLastOperator('')
    setLastInput('')
  }


  function handleEval(){
    try {
    {
      expressionValue === '0' ? setExpressionValue('0') :
      setExpressionValue(eval(String(expressionValue)))
        setDisplayValue(String(eval(expressionValue)).replace('.', ','))
    }
    } catch {
      setExpressionValue('Invalid expression')
      setDisplayValue('Invalid expression')
    }
  }


  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons} >
        <Button vectorIcon={<FontAwesome5 
            name='arrows-alt'
            size={48}
            color={'#000'}
          />}
        />
        <Button 
          labelText='AC'
          onPress={clearMemory}
          double
        />

        <Button
          labelText='/'
          isOperator
          onPress={() => addOperation('/')}
        />

        <Button
          labelText='7'
          onPress={() => addDigit('7')}
        />

        <Button 
          labelText='8'
          onPress={() => addDigit('8')}
        />
        
        <Button
          labelText='9'
          onPress={() => addDigit('9')}
        />

        <Button
          labelText='×'
          isOperator
          onPress={() => (addOperation('*'))}
        />

        <Button
          labelText='4'
          onPress={() => addDigit('4')}
        />

        <Button
          labelText='5'
          onPress={() => addDigit('5')}
        />

        <Button
          labelText='6'
          onPress={() => addDigit('6')}
        />

        <Button
          labelText='-' 
          isOperator
          onPress={() => (addOperation('-'))}
        />

        <Button
          labelText='1'
          onPress={() => addDigit('1')}
        />

        <Button
          labelText='2'
          onPress={() => addDigit('2')}
        />

        <Button
          labelText='3'
          onPress={() => addDigit('3')}
        />

        <Button
          labelText='+' 
          isOperator
          onPress={() => (addOperation('+'))}
        />

        <Button
          labelText='0' 
          double
          onPress={() => addDigit('0')}
        />

        <Button
          labelText=','
          onPress={() => (addDigit('.'))}
        />

        <Button
          labelText='=' 
          isOperator
          onPress={() => (
            handleEval(),
            setLastOperator('=')
            )}
        />

      </View>
    </View>
  );
}