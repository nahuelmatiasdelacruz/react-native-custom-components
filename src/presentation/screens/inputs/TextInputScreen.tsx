import {ScrollView, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {useState} from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text inputs" safe />
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre completo"
            autoCapitalize="words"
            autoCorrect={false}
            value={form.name}
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Correo electrónico"
            autoCorrect={false}
            value={form.email}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Teléfono"
            autoCorrect={false}
            value={form.phone}
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>
        <View style={{height: 10}} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </CustomView>
    </ScrollView>
  );
};
