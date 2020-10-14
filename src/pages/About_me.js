import React, { Component } from 'react';
import picture from '../assets/chalik.png';
import imgCode from '../assets/code.svg';
import imgDesain from '../assets/desain.png';
import imgUi from '../assets/ui.png';
import imgFacebook from '../assets/Facebook.svg';
import imgLinkedin from '../assets/LinkedIn.svg';
import imgDribble from '../assets/Dribbble.svg';
import Box from './component/box';
import { render } from '@testing-library/react';
const About_me = () => {
  const contact = [
    {
      name: 'Facebook',
      image: imgFacebook,
      link: 'https://www.facebook.com/chalik.froza/',
    },
    {
      name: 'Dribbble',
      image: imgDribble,
      link: 'https://dribbble.com/fachalik',
    },
    {
      name: 'LinkedIn',
      image: imgLinkedin,
      link: 'https://www.linkedin.com/in/f-a-chalik-a373731a5/',
    },
  ];
  const specialize = [
    {
      title: 'Designer',
      image: imgDesain,
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Front End Developer',
      image: imgCode,
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Ui Designer',
      image: imgUi,
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s6">
          <div className="row">
            <div className="col s12">
              <h1 className="weight-900">F.A.Chalik</h1>
            </div>
            <div className="col s12">
              <p className="weight-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                placerat massa non tellus dapibus blandit. Sed mollis urna in
                sapien dapibus fringilla. Mauris tincidunt eros vitae erat
                facilisis lacinia. Nam velit sem, luctus quis orci quis,
                fringilla tristique turpis. Ut efficitur felis eros. Nunc
                molestie sagittis lorem. Pellentesque ac purus eu tortor
                molestie fermentum. In commodo, quam a pulvinar hendrerit, sem
                ipsum ultrices purus, et tincidunt elit ligula ut velit.
                Curabitur consectetur nunc lorem, non cursus dui commodo sit
                amet. Vivamus pretium nec justo nec lacinia. Donec mi eros,
                feugiat vitae elit vitae, dictum mattis eros. Nulla vitae tellus
                rhoncus, dignissim nisi eleifend, tincidunt justo. Mauris ut
                urna tristique, rutrum ipsum id, laoreet ante. In iaculis neque
                justo. Nulla elementum lacus enim, eu elementum neque luctus eu.
                Pellentesque facilisis euismod vehicula.
              </p>
            </div>
            <div className="col s12">
              <div className="row">
                {contact.map((contact) => {
                  return (
                    <div className="col s1">
                      <a href={contact.link}>
                        <img class="sns" src={contact.image}></img>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="row">
            <div className="col s12 center-align">
              <img src={picture} alt={picture}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 center-align ">
          <h2 class="weight-900">Specializing in</h2>
        </div>
        <div className="col s12 center-align" style={{ padding: '0px 100px' }}>
          <p class="weight-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            nulla eu tellus tristique fringilla ut a ligula. Donec vel tellus
            nec ante rutrum tempus at quis eros. Nam sodales tellus non augue
            accumsan convallis. Vivamus tincidunt tincidunt ligula. Duis a
            auctor lorem. Nullam non turpis in nisl cursus viverra nec eu nibh.
            Aenean id ligula et orci scelerisque hendrerit non vitae nisl. Proin
            vel enim placerat, feugiat elit vitae, tempus felis. Donec rhoncus
            vitae sapien hendrerit mollis. In sollicitudin magna id sapien
            pharetra, in pharetra erat iaculis. Vestibulum dignissim fermentum
            faucibus. Etiam id eros enim.
          </p>
        </div>
      </div>
      <div className="row">
        {specialize.map((spec) => {
          return <Box obj={spec} />;
        })}
      </div>
    </div>
  );
};

export default About_me;
