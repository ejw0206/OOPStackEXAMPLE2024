import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateAuction() {
Const [itemName, setItemName] = useState('');
Const [description, setDescription] = useState('');
Const [endDateTime, setEndDateTime] = useState('');
Const [response, setResponse] = useState('');

const handleAuctionSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/auctions', {
            itemName, description, endDateTime
        });
        setResponse(result.data);
        if (result.data.success) {
            alert('Your auction was created successfully, Auction ID: ${result.data.auctionID}')
        } else {

        }
    } catch(error){
        console.error('Error saving auction:', error);
        setErrorMessage('An error occured while saving the auction');
    }
}

}

export default CreateAuction;