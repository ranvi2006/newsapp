import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl ,author,date} = this.props;
    return (
      <>
        <div className="">
          <div className="card" style={{ width: 18 + "rem" }}>
            <img
              src={
                !imgurl
                  ? "https://www.guidingtech.com/wp-content/uploads/Best_Ways_to_Fix_This_Title_Is_Not_Available_to_Watch_Instantly_on_Netflix.jpg"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">Published at {new Date(date).toGMTString()} by {author}</small></p>
              <a
              rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                read mode
              </a>
            </div>
          </div>
       
        </div>
        
      </>
    );
  }
}

export default NewsItem;
