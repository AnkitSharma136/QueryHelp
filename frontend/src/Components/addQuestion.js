import React, { useState } from 'react';
import  {Avatar, Button} from "@material-ui/core";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import {  selectUser } from "../feature/userSlice";
import { useSelector } from "react-redux";
import "./css/addQuestion.css";
import { CloseRounded, ExpandMore, PeopleAltOutlined } from '@material-ui/icons';

function AddQuestion() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [inputUrl, setInputUrl] = useState("");
        const [question, setQuestion] = useState("");
        const  Close = (< CloseRounded />);
        const user = useSelector(selectUser);

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
  return (
    <div className='addQuestion__Button'>
        <Button className='button__add'  style={{ border :"1px solid"}}onClick={() => setIsModalOpen(true)}> Add Question </Button>
            <Modal open = {isModalOpen} 
                closeIcon={Close}
                onClose={() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOnOverlayClick={false}
                styles={{
                overlay: {
                height: "auto",
                },
            }}
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
                    <div style={{
                        display : "flex",
                        flexDirection :"column"
                    }}>
                    <input 
                        type="text" 
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className='url__text'
                        placeholder='Optional Link'
                    />
                        {inputUrl !=="" && <img style={{
                                height : "40vh",
                        objectFit :"contain"
                    }}
                    src={inputUrl} alt='NoImage' />}
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
    </div>
  );
}

export default AddQuestion