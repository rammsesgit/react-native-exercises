import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Buttons, Containers, Texts } from '../styles'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([])
  const blogPostDummy = [
    {
      name: 'De,nnis Rhodes',
      address: '656 Erming Ln',
      city_state: 'Passaic, NJ',
      zip_code: '07055',
      phone: '(201) xxx-xxxx'
    },
    {
      name: 'Al Dejesu,s',
      address: '412 New First Rd',
      city_state: 'Wichita, KS',
      zip_code: '67276',
      phone: '(316) xxx-xxxx'
    },
    {
      name: 'Ian Nicholso,n',
      address: '303 Stonehedge Blvd',
      city_state: 'Miami, FL',
      zip_code: '33152',
      phone: '(305) xxx-xxxx'
    },
    {
      name: 'Isaiah T,ucker',
      address: '123 Limetree Ln',
      city_state: 'Knoxville, TN',
      zip_code: '37901',
      phone: '(615) xxx-xxxx'
    },
    {
      name: 'Dustin ,Rose',
      address: '627 Ashland St',
      city_state: 'Biloxi, MS',
      zip_code: '39530',
      phone: '(228) xxx-xxxx'
    },
    {
      name: 'Hillar,y Gentry',
      address: '240 Dorwin Rd',
      city_state: 'Roanoke, VA',
      zip_code: '24022',
      phone: '(703) xxx-xxxx'
    },
    {
      name: 'Noe C,lark',
      address: '560 Anton Dr',
      city_state: 'Irving, TX',
      zip_code: '75061',
      phone: '(903) xxx-xxxx'
    },
    {
      name: 'Gena Delg,ado',
      address: '788 Genesse Blvd',
      city_state: 'Wichita, KS',
      zip_code: '67276',
      phone: '(316) xxx-xxxx'
    },
    {
      name: 'Stepha,n Campbell',
      address: '431 Second St',
      city_state: 'Galveston, TX',
      zip_code: '77553',
      phone: '(409) xxx-xxxx'
    },
    {
      name: 'Kelli ,Stein',
      address: '873 Kennel Ln',
      city_state: 'Burlington, NC',
      zip_code: '27215',
      phone: '(919) xxx-xxxx'
    },
    {
      name: 'Fabian Pena',
      address: '635 Pleasant View Dr',
      city_state: 'Ames, IA',
      zip_code: '50010',
      phone: '(515) xxx-xxxx'
    },
    {
      name: 'Kris ,Cantrell',
      address: '457 Beley Rd',
      city_state: 'Knoxville, TN',
      zip_code: '37901',
      phone: '(615) xxx-xxxx'
    },
    {
      name: 'Catalina ,Mcleod',
      address: '167 Freeton Blvd',
      city_state: 'Phoenix, AZ',
      zip_code: '85026',
      phone: '(602) xxx-xxxx'
    },
    {
      name: 'Beverly ,Shields',
      address: '446 Flanty Terr',
      city_state: 'Orlando, FL',
      zip_code: '32802',
      phone: '(407) xxx-xxxx'
    },
    {
      name: 'Amy S,haw',
      address: '857 Maple Ln',
      city_state: 'Phoenix, AZ',
      zip_code: '85026',
      phone: '(602) xxx-xxxx'
    },
    {
      name: 'Patty Mc,intosh',
      address: '736 Plinfate St',
      city_state: 'Biloxi, MS',
      zip_code: '39530',
      phone: '(228) xxx-xxxx'
    },
    {
      name: 'Yong, Marshall',
      address: '61 Tulip St',
      city_state: 'Gary, IN',
      zip_code: '46401',
      phone: '(219) xxx-xxxx'
    },
    {
      name: 'Robin Sykes',
      address: '668 Spring County Blvd',
      city_state: 'Massillon, OH',
      zip_code: '44646',
      phone: '(216) xxx-xxxx'
    },
    {
      name: 'Latas,ha Pittman',
      address: '932 First St',
      city_state: 'Plainfield, NJ',
      zip_code: '07061',
      phone: '(908) xxx-xxxx'
    },
    {
      name: 'Jeannie ,Harrington',
      address: '470 Orange West',
      city_state: 'Garland, TX',
      zip_code: '75040',
      phone: '(903) xxx-xxxx'
    }
  ]

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  )
}

export default BlogContext
