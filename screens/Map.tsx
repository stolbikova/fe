import { MapComponent } from '../components/Map';

import * as S from './Home.styles';

export default function Details({ navigation }: any) {
  return (
    <S.Container>
      <MapComponent />
    </S.Container>
  );
}
