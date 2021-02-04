import * as Styles from './styles';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS, Styled Components, Jest & React Testing Library',
}) => (
  <Styles.Wrapper>
    <Styles.Logo src="/img/icon-512.png" alt="NextJS boilerplate logo" />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
    <Styles.Illustration
      src="/img/hero-illustration.svg"
      alt="Developer making some code"
    />
  </Styles.Wrapper>
);

export default Main;
