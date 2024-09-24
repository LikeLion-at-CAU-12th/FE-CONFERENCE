import React from 'react';

const withLoading = (Component) => {
  return function WithLoadingComponent({ loading, ...props }) {
    if (loading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
};

export default withLoading;
