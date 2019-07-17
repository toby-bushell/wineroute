import React from 'react';
import { Section, Title } from './styles';
import { Container } from '../styled/containers';

const InfoSection = ({ title, content }) => (
  <Section>
    <Container slim>
      <Title>{title}</Title>
      <p>{content}</p>
    </Container>
  </Section>
);

export default InfoSection;
