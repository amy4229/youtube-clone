const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getPopularVideoList = () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}&Authorization`, requestOptions)
        .then(response => response.json().items)
        .catch(error => console.log('error', error));
}