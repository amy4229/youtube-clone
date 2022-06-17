import ReactHtmlParser from 'react-html-parser';
export const unescapeString = (str) => {
    return ReactHtmlParser(str);
}

export const makeFomattedDateStr = (date) => {
   return date.replaceAll(/[Z,T]/gi," ");
}