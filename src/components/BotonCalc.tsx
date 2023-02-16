import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
}

export const BotonCalc = ({text, color = '#2D2D2D'}: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={styles.botonTexto}>{text}</Text>
    </View>
  );
};
