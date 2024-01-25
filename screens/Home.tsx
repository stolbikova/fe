import { View, Button } from 'react-native';

import * as S from './Home.styles';

export default function Home({ navigation }: any) {
  return (
    <S.Container>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </S.Container>
  );
}
