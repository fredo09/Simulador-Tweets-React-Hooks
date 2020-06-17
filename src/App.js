import React,{ useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { SendTweet } from './Components/SendTweet';
import { ListTweets } from './Components/ListTweets';
import { TWEETS_LOCALSTORAGE } from './utils/constantes';
import { Container, Snackbar } from '@material-ui/core'

function App() {

  const [ isOpenSnackbar, setIsOpenSnackbar ] = useState({
    open: false,
    text: null
  });

  const [ tweets, setTweets ] = useState([]);
  const [ reload, setReload ] = useState(false);

  useEffect(() =>{
    const allTweets = localStorage.getItem(TWEETS_LOCALSTORAGE);
    const arrayTweets = JSON.parse(allTweets); 
    
    setTweets(arrayTweets);
    setReload(false);
  },[reload]);

  const deleteTweet = (index) => {
    tweets.splice(index, 1);
    setTweets(tweets);
    localStorage.setItem(TWEETS_LOCALSTORAGE, JSON.stringify(tweets));
    setReload(true);
  }

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setIsOpenSnackbar={setIsOpenSnackbar} allTweets={tweets}/>
      <ListTweets tweets={tweets}  deleteTweet={deleteTweet}/>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isOpenSnackbar.open}
        autoHideDuration={2000}
        message={<span  id="message-id">{ isOpenSnackbar.text }</span>}
      />
    </Container>
  );
}

export default App;
