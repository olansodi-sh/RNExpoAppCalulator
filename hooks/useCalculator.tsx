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
    setFormula(number)
  }, [number])

  //* Limpiar el número
  const cleanData = () => {
    setNumber('0')
    setPrevNumber('0')
    setFormula('0')
  }

  //* Cambiar el signo
  const toggleSign = () => {
    
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''))
    }
    setNumber('-' + number)
  }

  //* Eliminar el último dígito
  const deleteLastDigit = () => {

    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setNumber('0')
    }
    setNumber(number.slice(0, -1))
  }
  //* Construir el número
  const buildNumber = (numberString: string) => {
    // Verificar si ya existe el punto decimal
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar el 0000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    //Props
    formula,
    number,
    prevNumber,

    //Methods
    buildNumber,
    cleanData,
    toggleSign,
    deleteLastDigit
  }
}

export default useCalculator