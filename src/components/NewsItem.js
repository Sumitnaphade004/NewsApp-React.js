import React from 'react'
import unknown from "./unknown.png"

const NewsItem =(props)=>{
    let {title, description, imgUrl, newsUrl,author,publishedAt} = props;
    return (
        <div className="card" style={{width: "20rem", margin:"10px"}}>
          <img
            src={imgUrl ? imgUrl : unknown}
            className="card-img-top rounded-3"
            alt="news"
            style={{
              margin: "10px",
              width: "calc(100% - 20px)"
            }}
          />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem