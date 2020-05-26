import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGuides } from '../../actions/fetchGuides';

const GuideList = props => {
  useEffect(() => {
    props.fetchGuides();
  }, [])

  return (
    <div>
      {props.isFetching && <h2>Loading How-To Guides...</h2>}

      { props.guides && 
        props.guides.map((guide, index) => (
          <Link to={`/guides/${guide.id}`} key={index}>
            <div>
              <img src={guide.img} alt='how-to cover'></img>
              <h1>{guide.title}</h1>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.guides.isFetching,
    guides: state.guides.guides,
    errors: state.guides.errors
  }
}

export default connect(mapStateToProps, {fetchGuides})(GuideList);