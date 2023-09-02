import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';

const Home = () => {

    const [imageUrl, setImageUrl] = useState('');
    const [text, setText] = useState("Drag me!");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const fetchImage = async () => {
        try{
            const url = 'https://api.unsplash.com/photos/random';
            const clientId='J3QnhAPCGGX0O02GWDOkKzm2ziVPZAkGbY5arGpKD-g';
            const headers = {
                Authorization: `Client-ID ${clientId}`,
            };

            const res = await axios.get(url, { headers });
            const imgData=res.data;
            setImageUrl(imgData.urls.regular);
            console.log('Image', imgData);
        }catch(err){
            console.log("Error", err);
        }
    }

    

    return(
        <div className="h-screen">
            {imageUrl ?
            <div className="h-full bg-gray">
            <img className="object-cover h-[90vh] w-full z-0" src={imageUrl} alt="Unsplash" />
            <Draggable>
                <div className='flex items-center justify-center'>
                <input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    className='w-100 h-1/2 bg-transparent font-bold'
                />
                </div>
            </Draggable>
            </div>
            : <div className='flex items-center justify-center mt-20'>
                <button className='mt-20 bg-indigo-500 p-5' onClick={fetchImage}>Fetch an Image</button>
                </div>}
        </div>
    )
}

export default Home;