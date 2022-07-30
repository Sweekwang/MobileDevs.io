import React from 'react';
import classes from './ContentLayout.module.css';

type Props = {
    children: JSX.Element,
    className?: string
};

// ContentLayout where the content should be inside.
const ContentLayout: React.FC<Props> = (props) => {
    return(
        <div className={[classes.layout, props.className].join(' ')}>
            {props.children}
        </div>
    )
};

export default ContentLayout;