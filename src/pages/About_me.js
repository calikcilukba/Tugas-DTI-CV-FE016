import React from 'react';
import picture from '../assets/chalik.png';
import Modal from '../modal';

const About_me = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <img src={picture} alt={picture}></img>
        </div>
        <div className="col s6">
          <div className="row">
            <div className="col s12">
              <h1 className="weight-900">ABOUT ME</h1>
            </div>
            <div className="col s12">
              <h1 className="weight-900 iam">WHO AM I</h1>
            </div>
            <div className="col s12">
              <p className="weight-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable.
              </p>
            </div>
            <div className="col s12" style={{ margin: '30px 0px' }}>
              <button class="col s5 waves-effect waves-light btn devide">
                HIRE ME
              </button>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_me;
