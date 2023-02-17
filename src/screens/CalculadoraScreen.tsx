import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" onClick={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" onClick={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" onClick={limpiar} />
        <BotonCalc text="/" color="#FF9427" onClick={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" onClick={armarNumero} />
        <BotonCalc text="8" onClick={armarNumero} />
        <BotonCalc text="9" onClick={armarNumero} />
        <BotonCalc text="X" color="#FF9427" onClick={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" onClick={armarNumero} />
        <BotonCalc text="5" onClick={armarNumero} />
        <BotonCalc text="6" onClick={armarNumero} />
        <BotonCalc text="-" color="#FF9427" onClick={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" onClick={armarNumero} />
        <BotonCalc text="2" onClick={armarNumero} />
        <BotonCalc text="3" onClick={armarNumero} />
        <BotonCalc text="+" color="#FF9427" onClick={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" ancho onClick={armarNumero} />
        <BotonCalc text="." onClick={armarNumero} />
        <BotonCalc text="=" color="#FF9427" onClick={limpiar} />
      </View>
    </View>
  );
};
