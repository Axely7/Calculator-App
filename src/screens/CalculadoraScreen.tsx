import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
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

  const btnDelete = () => {
    // if (numero.length > 1) {
    //   setNumero(numero.slice(0, numero.length - 1));
    // } else if (numero.includes('-') && numero.length === 2) {
    //   setNumero('0');
    // } else {
    //   setNumero('0');
    // }
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMNultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumero(`${num1 - num2}`);
        break;

      default:
        break;
    }
    setNumeroAnterior('0');
  };

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' ? (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      ) : (
        ''
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" onClick={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" onClick={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" onClick={btnDelete} />
        <BotonCalc text="/" color="#FF9427" onClick={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" onClick={armarNumero} />
        <BotonCalc text="8" onClick={armarNumero} />
        <BotonCalc text="9" onClick={armarNumero} />
        <BotonCalc text="X" color="#FF9427" onClick={btnMNultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" onClick={armarNumero} />
        <BotonCalc text="5" onClick={armarNumero} />
        <BotonCalc text="6" onClick={armarNumero} />
        <BotonCalc text="-" color="#FF9427" onClick={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" onClick={armarNumero} />
        <BotonCalc text="2" onClick={armarNumero} />
        <BotonCalc text="3" onClick={armarNumero} />
        <BotonCalc text="+" color="#FF9427" onClick={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" ancho onClick={armarNumero} />
        <BotonCalc text="." onClick={armarNumero} />
        <BotonCalc text="=" color="#FF9427" onClick={limpiar} />
      </View>
    </View>
  );
};
