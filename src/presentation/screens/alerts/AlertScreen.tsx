import {Alert, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import { showPrompt } from '../../../config/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {
  const { isDark } = useContext(ThemeContext);
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],{
      userInterfaceStyle: isDark ? 'dark' : 'light'
    });

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],{
      userInterfaceStyle: isDark ? 'dark' : 'light'
    });
  const onShowPrompt = () => {
    showPrompt({
      title: 'Titulo de ejemplo',
      subTitle: 'Ejemplo de subtitulo',
      buttons: [
        {
          text: 'OK',
          onPress: () => {},
        }
      ],
      placeholder: 'Ejemplo de placeholder'
    })
  };
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alert" safe />
      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt" onPress={onShowPrompt} />
    </CustomView>
  );
};
