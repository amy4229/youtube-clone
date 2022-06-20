import {
  Component
} from 'react';
//import sampleData from "./sampleData.json" //출력테스트용 

class ApiUtil extends Component {

  constructor(request) {
    super();
    this.request = request
  }


  getPopularVideoList = async () => {
    // return sampleData; 출력테스트용 
    const response = await this.request.get('videos', {
      params: {
        'part': 'snippet',
        'chart': 'mostPopular',
        'regionCode': "KR",
        'maxResults': 25,
      }
    });

    return response.data.items;
  }

  getSearchResults = async (keyword) => {

    const response = await this.request.get('search', {
      params: {
        'part': 'snippet',
        'type': 'video',
        'q': keyword,
        'maxResults': 25,
      }
    });

    const result = response.data.items.map(item => ({
      ...item,
      id: item.id.videoId
    }));

    return result;
  }

}

export default ApiUtil;