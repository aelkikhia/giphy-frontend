import React from 'react';

class ImageCard extends React.Component {



    constructor(props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    // componentDidMount() {
    //     this.imageRef.current.addEventListener('load', this.setSpans)
    // }

    setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({spans})
    };

    render() {
        const { title, images } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img alt={title} src={images.downsized_medium.url} />
            </div>
        );
    }
}

export default ImageCard;