/**
*   Component Tweet 
**/

import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import momment from 'moment';

import './Tweet.scss';

export const Tweet = (props) => {
    const { tweet: { name, tweet, time } , index, deleteTweet } = props;
    
    return(
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon  onClick={() => deleteTweet(index)}/>
                </div>
                <p>{ tweet }</p>
                <div className="tweet__date-add-tweet">
                    <span>
                        { momment(time).format('DD/MM/YYYY HH:mm') }
                    </span>
                </div>
            </CardContent>
        </Card>
    );
} 