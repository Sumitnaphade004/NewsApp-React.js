import React, { useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const News= (props)=> {
  
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const showNews= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
  }
  
  useEffect(()=>{
    if(localStorage.getItem("token")){
      showNews();
    }else{
      navigate("/login");
    }
    // eslint-disable-next-line 
  },[])
  
  document.title = `${capitalize(props.category)} - NewsDaily`;

    return (
      <>
      <div className="container" style={{marginLeft: "9.5rem"}}>
        <h2 className='text-center'style={{marginTop: "2rem", marginBottom: "3rem"}}>NewsDaily - Top {capitalize(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <div className="container">
        <div className="row">
          {articles.map((element)=>{
            return  <div className="col-md-4" key={element.url} >
               <NewsItem title={element.title?element.title:" "} description={element.description?element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} publishedAt={element.publishedAt} />
            </div> 
          })}
        </div>
        </div>
      </div>
      </>
    )
}

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string  
}

export default News