import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

enum Operator {
    add = '+',
    subtract = '-',
    multiply =  '*',
    divide = '÷',

}

const useCalculator = () => {

  const [formula, setFormula] = useState('')
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  // se utiliza useRef para guardar la ultima operacion
  const lastOperation = React.useRef<Operator>()

  useEffect(() => {
    //TODO: Calcular subresultados
  }, [number])

  const buildNumber = (numberString: string) => {
    console.log('numberString', numberString)
  }
  return {
    //Props
    formula,
    number,
    prevNumber,

    //Methods
    buildNumber,
  }
}

export default useCalculator