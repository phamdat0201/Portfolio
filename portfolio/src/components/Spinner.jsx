import { Rings } from "react-loader-spinner";
import React from 'react';

const Spinner = () => {
    return (
        <div>
            <Rings
                height="60"
                width="60"
                color="rgb(56 189 248)"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    );
}

export default Spinner;
