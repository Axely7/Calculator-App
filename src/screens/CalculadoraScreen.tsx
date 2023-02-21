import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMNultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    numero,
    numeroAnterior,
  } = useCalculadora();

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
        <BotonCalc text="=" color="#FF9427" onClick={calcular} />
      </View>
    </View>
  );
};
