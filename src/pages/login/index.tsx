import backgroundImg from '@/assets/BackgroundFigures.svg';
import { FormLogin } from '../../components/molecules/FormLogin';
import {
  ContainerImage,
  ContainerLogin,
  MyImage,
} from '../../styles/pages/login';

export default function LoginPage() {
  return (
    <ContainerLogin>
      <main>
        <ContainerImage>
          <MyImage src={backgroundImg} alt="Figuras do Background" />
        </ContainerImage>
        <FormLogin />
      </main>
    </ContainerLogin>
  );
}
