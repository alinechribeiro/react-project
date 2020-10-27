import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef.current.clientRef);
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
    
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;
        
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    // alt={this.props.image.description}
                    // src={this.props.image.urls.regular}
                    ref={this.imageRef} alt={description} src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;

/* #### React Refs ####
|-------------------------------------------------
| Gives access to a single DOM Element 
| We create refs in the constructor, 
| assign them to instance variables,
| then pass to a particular JSX element as props 
|-------------------------------------------------
*/