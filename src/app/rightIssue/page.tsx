'use client'

import React from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import RightsIssueTables from "../components/rightsIssue";

const rightIssue = () => {

    return(
       <div>
            <Header/>
            <RightsIssueTables/>
            <NewsLetter/>
            <Footer/>
       </div>
    );
};

export default rightIssue;