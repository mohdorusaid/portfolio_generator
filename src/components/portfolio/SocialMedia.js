import React from 'react';
import './SocialMedia.css';

class SocialMedia extends React.Component{
    render(){
        const { facebook,linkedIn,twitter,github} = this.props;
        return(
            <span className="center">
                <a  href={facebook} className="fa fa-facebook custom" />
                {(linkedIn.length > 0)?( <a href={linkedIn} className="fa fa-linkedin custom"/>):(null)}
                {(twitter.length > 0)?(<a href={linkedIn} className="fa fa-twitter custom"/>):(null)}
                {(github.length > 0)?(<a href={github} className="fa fa-github custom"/>):(null)}
            </span>
        )
    }
}

export default SocialMedia;