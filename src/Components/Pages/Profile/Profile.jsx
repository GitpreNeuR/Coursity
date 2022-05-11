import React,{useRef} from 'react'
import './Profile.css'
import Sidebar from '../../Sidebar/Sidebar'

function Profile() {
  const uploadedImage = useRef(null);
  const imageUploader =useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <Sidebar/>
    <div className="wrapper">
  <div className="profile-card js-profile-card">
  
  
  
        <div className="icon-link-follow">
  <label for="cameraImg" style={{cursor:`pointer`}}><i className="fa-solid fa-camera" onClick={() => imageUploader.current.click()}></i></label>
  <input
        type="file"
        accept="image/*"
        id="firstImg"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
          visibility:"none"
        }}
      />
  </div>


  <div className="profile-card__img" >
      <img src="https://images3.alphacoders.com/954/thumbbig-954241.webp" ref={uploadedImage}
      alt="" />
    </div>

    <div className="profile-card__cnt js-profile-cnt">
      <div className="profile-card__name">Devang Banta </div>
      <div className="profile-card__txt"> <strong>A Full Stack Web Developer</strong> </div>
      <div className="profile-card-loc">
        

        <span className="profile-card-loc__txt" style={{marginLeft:`2em`}}>
         Joginder Nagar,Himachal Pradesh , India
        </span>
      </div>

      
        <ul className="social-follow-list">
        <li className="icon-item">
        <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
      </li>
      <li className="icon-item">
        <a href="#" className="icon-link"><i className="fab fa-facebook-f"></i></a>
      </li>
      <li className="icon-item">
        <a href="#" className="icon-link"><i className="fab fa-github"></i></a>
      </li>
      <li className="icon-item">
        <a href="#" className="icon-link"><i className="fa-brands fa-codepen"></i></a>
      </li>
      <li className="icon-item">
        <a href="#" className="icon-link"><i className="fa-brands fa-linkedin-in"></i></a>
      </li>    
        </ul>
      

      <div className="profile-card-inf">
        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">2911</div>
          <div className="profile-card-inf__txt">Followers</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">177</div>
          <div className="profile-card-inf__txt">Following</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">30</div>
          <div className="profile-card-inf__txt">Articles</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">29</div>
          <div className="profile-card-inf__txt">Works</div>
        </div>
      </div>

     
      <div className="profile-input-info">
        <input type="text" placeholder="" value="Devang" disabled />
        <input type="text" placeholder="" value="Banta" disabled/>
        <input type="text" placeholder="" value="devangbanta.cse19@chitkarauniversity.edu.in"  disabled/>
        <input type="text" placeholder="Status"/>
        <input type="text" placeholder="Contact No."/>
        <input type="text" placeholder="" value="Himachal Pradesh,India" disabled />
        

      </div>

      

    
  </div>

</div>

</div>
    </>
  )
}

export default Profile