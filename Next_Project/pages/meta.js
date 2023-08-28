import Head from "next/head";
import React from "react";


const Meta = (props) => {
    return(
        <React.Fragment>
            <Head>
            <title>{props.title}</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initail-scale=1"/>
            <meta name="description" content={props.description}/>
            <meta name="keywords" content={props.keywords}/>
            </Head>
        </React.Fragment>
    );
}

Meta.defaultProps = {
    title: "Travel Vlogger",
    keywords: "travel, vlog",
    description: "This is travel vloger Page"
}
export default Meta