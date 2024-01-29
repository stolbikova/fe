import { View, TextInput, Text, Button } from 'react-native';
import { BACKEND_URL } from '@env';
import { useState } from 'react';
import axios from 'axios';

import * as S from './Home.styles';

interface FormDataI {
  name: string;
  question: string;
}

const DEFAULT_FORM_DATA = {
  name: '',
  question: '',
};

export default function Form({ navigation }: any) {
  const [formData, setFormData] = useState<FormDataI>(DEFAULT_FORM_DATA);
  const handleSubmit = () => {
    console.debug(`http://localhost:3000/chat`, formData);
    axios
      .post(`http://localhost:3000/chat/question`, formData)
      .then((response) => {
        setFormData(DEFAULT_FORM_DATA);
      })
      .catch((error) => console.error('Error:', error));
  };
  const handleChange = (type: 'question' | 'name') => (value: string) => {
    setFormData({ ...formData, [type]: value });
  };

  return (
    <S.Container>
      <Text>Name:</Text>
      <TextInput
        value={formData.name}
        onChangeText={handleChange('name')}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Text>Question:</Text>
      <TextInput
        value={formData.question}
        onChangeText={handleChange('question')}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button
        disabled={!formData.name || !formData.question}
        onPress={handleSubmit}
        title="Publish"
        color="#841584"
      />
    </S.Container>
  );
}
