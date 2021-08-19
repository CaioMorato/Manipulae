import React from 'react';

class InfiniteScroll extends React.Component {
  constructor() {
    super();
    this.divRef = React.createRef();
  }
  componentDidMount() {
    const { fetchMore } = this.props;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);
    observer.observe(this.divRef.current);
  }
  render() {
    return <div ref={this.divRef} />;
  }
}

export default InfiniteScroll;
