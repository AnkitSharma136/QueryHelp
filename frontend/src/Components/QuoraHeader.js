import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
// import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  // AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  CloseRounded,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import "./css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";


function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");

  const [searchQuery, setSearchQuery] = useState('');

  const  Close = (< CloseRounded />);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSearch = async () => {
    try {
       const response = await axios.get(`/api/questions/findQuestion/${searchQuery}`);
       console.log(response.data);
       // Process the search results as needed, update state, etc.
    } catch (error) {
       console.error(error);
       // Handle the error, e.g., show an error message to the user.
    }
 };
 

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
      .post("/api/questions", body, config)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
        alert("Error in adding question");
      });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        console.log("Logged out");
      })
      .catch(() => {
        console.log("error in logout");
      });
    }
  };

  const handleNotification = () => {
    window.alert("You have No New Notification");
  };

  const handleHome = () => {
    window.location.reload();
  };

  return ( 
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src="https://images.assetsdelivery.com/compings_v2/mdranahamid/mdranahamid2010/mdranahamid201000054.jpg"
            alt="logo"
          />
        </div>
        <div className='qHeader__icons'>
            <div className='qHeader__icon'>
                <HomeIcon  onClick = {handleHome}/>
            </div>
            {/* <div className="qHeader__icon">
                <FeaturedPlayListOutlinedIcon />
            </div> */}
            {/* <div className="qHeader__icon">
                <AssignmentTurnedInOutlined />
            </div> */}
            {/* <div className="qHeader__icon">
                <PeopleAltOutlined />
            </div> */}
        </div>
        <div className='qHeader__input'>
        <Search />
        <input
          type="text"
          placeholder='Search Question'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search__button' onClick={handleSearch}>Search</button>
        </div>
                  
        <Button onClick={() => setIsModalOpen(true)}  style={{ border :  "1px solid" , backgroundColor : "antiquewhite" }}> Click Here to Ask a Question </Button>
        <Modal open = {isModalOpen} 
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{overlay: {height: "auto",},}}
        >
          <div className='modal__title'>
              <h5>Add Question</h5>
              <h5>Share Link</h5>
          </div>
          <div className='modal__info'>
              <Avatar src={user?.photo} className='avatar'/>
              <div className='modal__scope'>
                  <PeopleAltOutlined/>
                  <p>Public</p>
                  <ExpandMore/>
              </div>
          </div>
          <div className='modal__field'>
            <input 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type="text" 
            placeholder="Type your Question Here"
            />
            <div style={{display : "flex",flexDirection :"column"}}>
              <input 
              type="text" 
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className='url__text'
              placeholder='Optional Link'
              />
              {inputUrl !=="" && <img className='inputUrl__image'  src={inputUrl} alt='NoImage' />}
            </div>
          </div>
            <div className='modal__buttons'>
              <button className='cancel' onClick={ () => setIsModalOpen(false)}>
                Cancel
              </button>
              <button  onClick={handleSubmit} className='add' type='submit' >
                Add Question
              </button>
            </div>
        </Modal>
          <div className='qHeader__Rem'>
            <span onClick={handleLogout}> <Avatar src={user?.photo} className='qHeader__avatar'/> </span>
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined onClick = {handleNotification}/>
          </div>
      </div>
    </div>
  ); 
}

export default QuoraHeader