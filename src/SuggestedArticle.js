import React, { Component } from 'react'

class SuggestedArticle extends Component {
    render() {
        return(
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src={this.props.ads.imgSrc} alt={this.props.ads.alt} />
                <p>{this.props.ads.caption}</p>
              </a>
            </div>
        )
    }
}

export default SuggestedArticle