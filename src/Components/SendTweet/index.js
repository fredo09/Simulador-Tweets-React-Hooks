/**
*   Component SendTweet 
**/

import React,{ useState } from 'react';
import momment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import { ModalContainer } from './../ModalContainer';
import { FormSendTweet } from './../FormSendTweet';
import { TWEETS_LOCALSTORAGE } from './../../utils/constantes'

import './SendTweet.scss';

export const SendTweet = (props) => {
    console.log(props);
    const { setIsOpenSnackbar, allTweets } = props;
    //State
    const [ isOpenModal, setIsOpenModal ] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    const sendTweet = (e, formValue ) =>{
        e.preventDefault();
        const { name, tweet } = formValue;
        let allTweetsArray = [];

        if (allTweets) {
            allTweetsArray = allTweets;
        }

        if (!name || !tweet) {
            console.log('Todoas lo campos son obligatorios');
            setIsOpenSnackbar({
                open: true,
                text: 'Todoas lo campos son obligatorios'
            })
        } else {
            console.log('Todo bien!!');
            formValue.time = momment();
            allTweetsArray.push(formValue);

            localStorage.setItem(TWEETS_LOCALSTORAGE, JSON.stringify(allTweetsArray));
            console.log("Tweet Enviado");

            setIsOpenSnackbar({
                open: true,
                text: 'Tweet Enviado'
            });

            closeModal();
        }

        allTweetsArray = [];
    }

    return(
        <div className="send-tweet">
            <Fab 
                className="send-tweet-open-modal"
                color="primary"
                arial-label="add"
                onClick={openModal}
            >
                <AddIcon />
            </Fab>
            <ModalContainer 
                isOpenModal={isOpenModal}
                closeModal={closeModal}
            >
                <FormSendTweet 
                    sendTweet={sendTweet}
                />
            </ModalContainer>
        </div>
    );
}