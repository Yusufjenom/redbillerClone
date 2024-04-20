import React, { useState } from 'react';
import SubAccountContent from './components/content';
import SubAccountSideBar from './components/sidebar';

function SubAccounts() {
    const [subAccs] = useState([
        {
            name: "Akosa SomtoChukwu",
            email: "sumptious@gmail.com",
            id:"one"
        },
        {
            name: "Favvour Baruch",
            email: "favor@gmail.com",
            id:"two"
        },
        {
            name: "Gbokoyi Funmi",
            email: "funmi@gmail.com",
            id:"three"
        },
        {
            name: "Olisa Metu",
            email: "oliboy@gmail.com",
            id:"four"
        },
        {
            name: "Oluwatobilola Pase",
            email: "pase@gmail.com",
            id:"five"
        },
        {
            name: "Oreoluwa Ewepeju",
            email: "ewe@@gmail.com",
            id:"six"
        },
    ])

    
    return (
        <>
           

                <div className="row gy-5 g-xl-10">
                    
                    <SubAccountSideBar />

                    <SubAccountContent name={subAccs}/>
                </div>

           
        </>

    )
}

export default SubAccounts;




