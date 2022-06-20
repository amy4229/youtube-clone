import {
  Component
} from 'react';
//import sampleData from "./sampleData.json" //출력테스트용 

class ApiUtil extends Component {

  constructor(key) {
    super();
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }


  getPopularVideoList = async () => {
    // return sampleData; 출력테스트용 
    return await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=${this.key}&maxResults=25&Authorization`,
        this.requestOptions
      )
      .then((response) => response.json());
  }

  getSearchResults = async (keyword) => {
    return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${keyword}&key=${this.key}`,
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