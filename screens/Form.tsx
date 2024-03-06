import { TextInput, Text, Button, StyleSheet } from 'react-native';
import { BACKEND_URL } from '@env';
import { useState } from 'react';
import axios from 'axios';

import { spacing } from '../constants.styles';
import * as S from './Home.styles';

interface FormDataI {
  city: string;
  duration: string;
}

const DEFAULT_FORM_DATA = {
  city: '',
  duration: '0',
};

export default function Form({ navigation }: any) {
  const [formData, setFormData] = useState<FormDataI>(DEFAULT_FORM_DATA);
  const handleSubmit = () => {
    const promt = `Create an itinerary for ${formData.duration} days visit in ${formData.city}. 
    Structure it with day 1, day 2, day N paragraphs and inside day paragrath - morning, afternoon, evening`;

    axios
      .post(`${BACKEND_URL}/chat-gpt`, { message: promt })
      .then((response) => {
        console.log('FORM DATA', response.data);
        setFormData(DEFAULT_FORM_DATA);
      })
      .catch((error) => console.error('Error:', error));
  };
  const handleChange = (type: 'city' | 'duration') => (value: string) => {
    setFormData({ ...formData, [type]: value });
  };

  return (
    <S.Container>
      <Text>City</Text>
      <TextInput
        value={formData.city}
        onChangeText={handleChange('city')}
        style={styles.textInput}
      />
      <Text>Duration:</Text>
      <TextInput
        keyboardType="numeric"
        value={formData.duration}
        onChangeText={handleChange('duration')}
        style={styles.textInput}
      />
      <Button
        disabled={!formData.duration || !formData.city}
        onPress={handleSubmit}
        title="Publish"
        color="#841584"
      />
    </S.Container>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: Number(spacing.small),
  },
});
