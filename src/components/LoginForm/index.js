import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const settings = {
  dots: true,
  slidesToScroll: 1,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSuccess = () => {
    navigate('/home');
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (username === 'yvrao' && password === 'yvrao99') {
      console.log('User credentials are valid');
      onSubmitSuccess();
    } else {
      onSubmitFailure('Invalid username or password');
    }
  };

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
        />
      </>
    );
  };

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>

      <div className="slider-container">
        <Slider {...settings}>
        <div>
          <img src="http://jkcc.ac.in/images/slider/slider-bg-1.jpg" alt="slide image1" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/slider/slider-bg-13.jpg" alt="slide image2" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/slider/slider-bg-14.jpg" alt="slide image3" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/gallery/annual55/gm/gm2.jpg" alt="slide image4" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/gallery/img8.jpg" alt="slide image5" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/gallery/annual55/ANUU6382.JPG" alt="slide image6" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/slider/AnnualDay55-1.jpg" alt="slide image7" className="slide-image" />
        </div>
        <div>
          <img src="http://jkcc.ac.in/images/slider/slider-bg-5.jpg" alt="slide image8" className="slide-image" />
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default LoginForm;