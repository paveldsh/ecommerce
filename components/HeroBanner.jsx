import React from 'react';
import Image from 'next/image';
import caviarImg from '../images/caviar.png';
import boxImg from '../images/box.png';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div className='hero-banner-heading'>
        <h2>Красная икра и рыба в Самаре/Тольятти с доставкой на дом</h2>
      </div>

      <p className='content'>
        <br/>Безупречное качество продукции.<span className='certificate'> Сертификат, ветеринарная справка присутствует!</span>
        <br/><br/>💯 100% свежесть. Регулярные прямые поставки

        <br/><br/>🚚 Быстрая доставка без предоплаты. По Самаре доставка бесплатная!
      </p>

      <div className="hero-banner-image-container">
        <Image 
          src={caviarImg} 
          alt="img" 
          width={300}
          height={300}
          className={'hero-banner-image'} 
        />
        <Image 
          src={boxImg} 
          alt="img" 
          width={300}
          height={300}
          className={'hero-banner-image'} 
        />
      </div>
    </div>
  )
}

export default HeroBanner;