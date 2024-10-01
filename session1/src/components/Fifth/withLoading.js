import React from 'react';

const withLoading = (Component) => {
  return function WithLoadingComponent({ loading, ...props }) {
    if (loading) return <p>Loading...</p>; // API를 불러오는 중일 때 화면에 띄울 것
    return <Component {...props} />;
  };
};

export default withLoading;
