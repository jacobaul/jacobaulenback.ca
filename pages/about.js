import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';

import Layout from '../components/Page'
//Try to hide from bots
var p1 = "jacob"
var p2 = "@"
var p4 = ".ca"
var p3 = "aulenback"

var email = " "

export default function Home() {

const [showMe, setShowMe] = useState(false);
  function toggle(){
    email =  p1.concat(p2,p3,p4);
    setShowMe(!showMe);
  }


  return (
	  
  <Layout>
    <div className="container">
      <Head>
        <title>About Me</title>
      </Head>

      <div className="infobox">
	  <h1>Email Me</h1>
	  <>
	    <div style={{
               display: showMe?"none":"block"
            }}>


            <button className="email" onClick={toggle}>Reveal Email</button>
	  </div>
            <div style={{
               display: showMe?"block":"none"
            }}>
	     <p className="email"> {email} </p>
             </div>
           </>
	  </div>
	  <div className='pageName'>
	  <h1 className="title">
          About Me
        </h1>

        <p className="description">
          More will appear here soon. 
        </p>

      </div>

        </div>
  
  </Layout> 
  )
}

