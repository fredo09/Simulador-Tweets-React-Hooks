/**
*   Component ListTweets 
**/

import React from 'react';
import { Grid } from '@material-ui/core';
import { Tweet }  from './../Tweet';

import './ListTweets.scss'

export const ListTweets = (props) =>{

    const { tweets, deleteTweet } = props;
    if ( !tweets || tweets.length === 0 ) {
        return(
            <div className="list-tweets-empty">
                <h2>No hay Tweets...</h2>
            </div>
        );
    }

    return(
        <Grid container spacing={3} className="listTweets">
            {tweets.map((tweet, idx) => (
                <Grid key={idx} item xs={4}>
                    <Tweet tweet={tweet} index={idx} deleteTweet={deleteTweet}/>
                </Grid>
            ))}
        </Grid>
    );
}