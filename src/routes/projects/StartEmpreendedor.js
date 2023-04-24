import "../../styles/sass/Global.sass";
import "../../styles/sass/Fonts.sass";
import React from 'react'

// Imagens
import Img from '../../images/projects/startempreendedor/img.png'
import Img1 from '../../images/projects/startempreendedor/img-1.png'
import Img2 from '../../images/projects/startempreendedor/img-2.png'
import Img3 from '../../images/projects/startempreendedor/img-3.png'
import Img4 from '../../images/projects/startempreendedor/img-4.png'
import Img5 from '../../images/projects/startempreendedor/img-5.png'
import Img6 from '../../images/projects/startempreendedor/img-6.png'

function Project() {
  return (
    <div className="Project">
        <img src={Img} alt="" />
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
        <img src={Img6} alt="" />
    </div>
  );
}

export default Project;
