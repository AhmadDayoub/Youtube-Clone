import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import {Box } from "@mui/material";
import { Videos , ChannelCard} from "./";
import { fetchFromApi } from "../utils/fetchFromApi";



const ChannelDetails = () => {
  const [channelDetail, setChannelDetail]= useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
    .then((data) =>setChannelDetail(data?.items[0] ));

    fetchFromApi(`search?chnnelId= ${id}&part=snippet&order=date`)
    .then((data) =>setVideos(data?.items));

  }, [id] )
  return (
<Box minHeight="95vh">
  <Box>
    <div  style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 65%, rgba(76,84,100,1) 78%, rgba(35,154,185,1) 100%, rgba(25,44,206,1) 100%, rgba(0,212,255,1) 100%)',
    zIndex: 10, 
    height:'300px'
    }} />
    <ChannelCard  channelDetail={channelDetail} 
    marginTop='-110px' />
  </Box>
  <Box display='flex' p={2}>

    <Box sx={{mr: { sm: '100px'} }} />
    <Videos videos={videos} />
    </Box>
    </Box>
  );
};

export default ChannelDetails;
