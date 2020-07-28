import React from 'react';
import LogoSued from './components/LogoSued';
import HeaderSued from './components/HeaderSued';
import ButtonSued from './components/ButtonSued';
import FooterSued from './components/FooterSued';
import LogoImersao from './components/LogoImersao';
import BannerSued from './components/BannerSued';
import TagSued  from './components/TagSued';
import TitleSued from './components/TitleSued';
import Description from './components/DescriptionSued';

function App() {
  return (
    <>
      <HeaderSued>
        <LogoSued />  
        <ButtonSued as="a" href="/video/new"> Novo Vídeo</ButtonSued>
      </ HeaderSued>

    <BannerSued>
      <TagSued>FrontEnd</TagSued>
      <TitleSued>Alinity Jogando na Twitch</TitleSued>
      <Description>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 😍 bora ver? \o</Description>

    </BannerSued>

      <FooterSued>
        <LogoSued />
        <p>Site feito na <strong>#ImersãoReact</strong> da  {' '}
          <a href="https://www.netflix.com"><LogoImersao /></a>
        </p>

      </FooterSued>

    </>
  );
}

export default App;
