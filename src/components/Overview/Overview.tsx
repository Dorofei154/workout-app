import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Overview = (props = 2) => {
  const dispatch = useDispatch();
  const onSomeButtonClicked = () => {
    dispatch({ type: 'SET_NEW_DATE' });
  };
  const state = useSelector((state: any) => state);
  return (
    <div>
      <button
        onClick={() => {
          console.log(state);
          return onSomeButtonClicked();
        }}
      >
        1
      </button>
    </div>
  );
};

export const OverviewContainer = Overview;
