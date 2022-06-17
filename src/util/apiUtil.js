import {
  Component
} from 'react';
//import sampleData from "./sampleData.json" //출력테스트용 

class ApiUtil extends Component {
  API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  getPopularVideoList = async () => {
    console.log("fetch no keyword");
    // return sampleData; 출력테스트용 
    return await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=${this.API_KEY}&maxResults=25&Authorization`,
        this.requestOptions
      )
      .then((response) => response.json());
  }

  getSearchResults = async (keyword) => {
    console.log("fetch with keyword");
    return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${keyword}&key=${this.API_KEY}`,
        this.requestOptions
      )
      .then((response) => response.json())
      .then((result) => result.items.map(item => ({
        ...item,
        id: item.id.videoId
      })))
  }

}

export default ApiUtil;