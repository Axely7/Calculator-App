import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" />
        <BotonCalc text="+/-" color="#9B9B9B" />
        <BotonCalc text="del" color="#9B9B9B" />
        <BotonCalc text="/" color="#FF9427" />
      </View>
    </View>
  );
};
