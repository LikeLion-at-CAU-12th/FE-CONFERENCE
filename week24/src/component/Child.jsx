import React, { memo } from 'react'

const Child = memo(({ childCount }) => {
    console.log("Child 렌더링");
    return (
        <div>childCount = {childCount}</div>
    );
})

export default Child
