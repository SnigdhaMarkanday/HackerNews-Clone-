import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';
import {useParams} from "react-router-dom";

const ShowStories = () => {

    let { type } = useParams();

    const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default ShowStories;
