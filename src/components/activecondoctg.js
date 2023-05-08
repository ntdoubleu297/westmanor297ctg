
import image from './bank.jpeg';
import ImageSlider from './appnw';
//import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { Component, useRef, useEffect, useState } from 'react';
//import './suburb.css';
import './waterfront.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import multifamily from './multifam.jpg';
import AllDataMulti from './alldatamulti.js';
//import ActiveWaterMulti from './ativewatermulti.js';
import Active from './active.js'
import MIT from './MIT.png';
import Popup from 'reactjs-popup';
import matheus from './matheus.jpg';
import ocean from './ocean.jpg';
import hottubbubblezzz from './hottubbubblezzz.jpg';
import ReactMapGL, { Marker } from "react-map-gl";
import L from 'leaflet';
import { PageItem } from 'react-bootstrap';
import badbank from './bank.jpeg';
import badbankmapbox from './bankmapbox-32x32.png';
import multifam from './multifam.jpg';
import pixa from './pixabay.jpg';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; 
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // irene
import icon from './mapbox-icon.png';
import Calc from './mtgcalculator.png';
import cave from './batcave.jpg';



//import useInput from "./useinput";
//import styled from "styled-components";
import {Button} from'react-bootstrap';


import ReactPaginate from 'react-paginate';
import titanic from './titanic.jpg';

import titanicsharon97 from './titanicsharon97.jpg';
//import RobMussi from './BatmanForeverntdoubleu2976lah.png';
import NeilWhite from './BatmanForeverntdoubleu2976lah.png';

//import jwt from 'jsonwebtoken'
//import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router";








const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement');



//function ActiveWaterMulti() {

 // import React, { useRef, useEffect } from "react";
//import ReactDOM from "react-dom";
//import mapboxgl from "mapbox-gl";
// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
//import "mapbox-gl/dist/mapbox-gl.css";
//import "./App.css";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
//mapboxgl.accessToken = 'pk.eyJ1IjoibnRkb3VibGV1Mjk3IiwiYSI6ImNsMmdrNXphbjAwcnEzY21tNXJ4bWcyNW4ifQ.OZFbUr0XHn455XBjG5od1Q';
/**
 * Our custom Popup component used to render a nicely styled
 * map popup with additional information about the
 * user's selected bus route
 */


     
     
    
     
     // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
     //Modal.setAppElement('#yourAppElement');
     
     function ActiveCondoCtg() {

      const [homeValue, setHomeValue] = React.useState('');
      const [downPayment, setDownPayment] = React.useState('');
      const [loanAmount, setLoanAmount] = React.useState('');
      const [interestRate, setInterestRate] = React.useState('');
      const [loanDuration, setLoanDuration] = React.useState('');
      const [monthlyPayment, setMonthlyPayment] = React.useState(0);
 
 
 
      function calculateLoanAmount(){
       setLoanAmount(homeValue - downPayment);
       return loanAmount;
      }
 
 
      function calculateMonthlyPayment(){
       
       function percentageToDecimal(percent){
         return percent / 12 / 100;
       }
 
       function yearsToMonths(year){
         return year * 12;
       }
 
       setMonthlyPayment(
         percentageToDecimal(interestRate * loanAmount) / 
       (1 - 
         Math.pow(1 + percentageToDecimal(interestRate),
       -yearsToMonths(loanDuration)
       ))
       
       );
 
 
     
       return monthlyPayment;
 
      }
     




        mapboxgl.accessToken = 'pk.eyJ1IjoibnRkb3VibGV1Mjk3IiwiYSI6ImNsMmdrNXphbjAwcnEzY21tNXJ4bWcyNW4ifQ.OZFbUr0XHn455XBjG5od1Q';
     

         ////////////////////////////////////////////////////////////////////////////////////////////////////
   
       var twentytwo = [
        '1/1/2022','1/2/2022','1/3/2022','1/4/2022','1/5/2022','1/6/2022','1/7/2022','1/8/2022','1/9/2022','1/10/2022','1/11/2022','1/12/2022','1/13/2022','1/14/2022','1/15/2022','1/16/2022','1/17/2022','1/18/2022','1/19/2022','1/20/2022','1/21/2022','1/22/2022','1/23/2022','1/24/2022','1/25/2022','1/26/2022','1/27/2022','1/28/2022','1/29/2022','1/30/2022','1/31/2022',
        '2/1/2022','2/2/2022','2/3/2022','2/4/2022','2/5/2022','2/6/2022','2/7/2022','2/8/2022','2/9/2022','2/10/2022','2/11/2022','2/12/2022','2/13/2022','2/14/2022','2/15/2022','2/16/2022','2/17/2022','2/18/2022','2/19/2022','2/20/2022','2/21/2022','2/22/2022','2/23/2022','2/24/2022','2/25/2022','2/26/2022','2/27/2022','2/28/2022',
        '3/1/2022','3/2/2022','3/3/2022','3/4/2022','3/5/2022','3/6/2022','3/7/2022','3/8/2022','3/9/2022','3/10/2022','3/11/2022','3/12/2022','3/13/2022','3/14/2022','3/15/2022','3/16/2022','3/17/2022','3/18/2022','3/19/2022','3/20/2022','3/21/2022','3/22/2022','3/23/2022','3/24/2022','3/25/2022','3/26/2022','3/27/2022','3/28/2022','3/29/2022','3/30/2022','3/31/2022',
        '4/1/2022','4/2/2022','4/3/2022','4/4/2022','4/5/2022','4/6/2022','4/7/2022','4/8/2022','4/9/2022','4/10/2022','4/11/2022','4/12/2022','4/13/2022','4/14/2022','4/15/2022','4/16/2022','4/17/2022','4/18/2022','4/19/2022','4/20/2022','4/21/2022','4/22/2022','4/23/2022','4/24/2022','4/25/2022','4/26/2022','4/27/2022','4/28/2022','4/29/2022','4/30/2022',
        '5/1/2022','5/2/2022','5/3/2022','5/4/2022','5/5/2022','5/6/2022','5/7/2022','5/8/2022','5/9/2022','5/10/2022','5/11/2022','5/12/2022','5/13/2022','5/14/2022','5/15/2022','5/16/2022','5/17/2022','5/18/2022','5/19/2022','5/20/2022','5/21/2022','5/22/2022','5/23/2022','5/24/2022','5/25/2022','5/26/2022','5/27/2022','5/28/2022','5/29/2022','5/30/2022','5/31/2022',
        '6/1/2022','6/2/2022','6/3/2022','6/4/2022','6/5/2022','6/6/2022','6/7/2022','6/8/2022','6/9/2022','6/10/2022','6/11/2022','6/12/2022','6/13/2022','6/14/2022','6/15/2022','6/16/2022','6/17/2022','6/18/2022','6/19/2022','6/20/2022','6/21/2022','6/22/2022','6/23/2022','6/24/2022','6/25/2022','6/26/2022','6/27/2022','6/28/2022','6/29/2022','6/30/2022',
        '7/1/2022','7/2/2022','7/3/2022','7/4/2022','7/5/2022','7/6/2022','7/7/2022','7/8/2022','7/9/2022','7/10/2022','7/11/2022','7/12/2022','7/13/2022','7/14/2022','7/15/2022','7/16/2022','7/17/2022','7/18/2022','7/19/2022','7/20/2022','7/21/2022','7/22/2022','7/23/2022','7/24/2022','7/25/2022','7/26/2022','7/27/2022','7/28/2022','7/29/2022','7/30/2022','7/31/2022',
        '8/1/2022','8/2/2022','8/3/2022','8/4/2022','8/5/2022','8/6/2022','8/7/2022','8/8/2022','8/9/2022','8/10/2022','8/11/2022','8/12/2022','8/13/2022','8/14/2022','8/15/2022','8/16/2022','8/17/2022','8/18/2022','8/19/2022','8/20/2022','8/21/2022','8/22/2022','8/23/2022','8/24/2022','8/25/2022','8/26/2022','8/27/2022','8/28/2022','8/29/2022','8/30/2022','8/31/2022',
        '9/1/2022','9/2/2022','9/3/2022','9/4/2022','9/5/2022','9/6/2022','9/7/2022','9/8/2022','9/9/2022','9/10/2022','9/11/2022','9/12/2022','9/13/2022','9/14/2022','9/15/2022','9/16/2022','9/17/2022','9/18/2022','9/19/2022','9/20/2022','9/21/2022','9/22/2022','9/23/2022','9/24/2022','9/25/2022','9/26/2022','9/27/2022','9/28/2022','9/29/2022','9/30/2022',
        '10/1/2022','10/2/2022','10/3/2022','10/4/2022','10/5/2022','10/6/2022','10/7/2022','10/8/2022','10/9/2022','10/10/2022','10/11/2022','10/12/2022','10/13/2022','10/14/2022','10/15/2022','10/16/2022','10/17/2022','10/18/2022','10/19/2022','10/20/2022','10/21/2022','10/22/2022','10/23/2022','10/24/2022','10/25/2022','10/26/2022','10/27/2022','10/28/2022','10/29/2022','10/30/2022','10/31/2022',
        '11/1/2022','11/2/2022','11/3/2022','11/4/2022','11/5/2022','11/6/2022','11/7/2022','11/8/2022','11/9/2022','11/10/2022','11/11/2022','11/12/2022','11/13/2022','11/14/2022','11/15/2022','11/16/2022','11/17/2022','11/18/2022','11/19/2022','11/20/2022','11/21/2022','11/22/2022','11/23/2022','11/24/2022','11/25/2022','11/26/2022','11/27/2022','11/28/2022','11/29/2022','11/30/2022','12/1/2022',
        '12/2/2022','12/3/2022','12/4/2022','12/5/2022','12/6/2022','12/7/2022','12/8/2022','12/9/2022','12/10/2022','12/11/2022','12/12/2022','12/13/2022','12/14/2022','12/15/2022','12/16/2022','12/17/2022','12/18/2022','12/19/2022','12/20/2022','12/21/2022','12/22/2022','12/23/2022','12/24/2022','12/25/2022','12/26/2022','12/27/2022','12/28/2022','12/29/2022','12/30/2022','12/31/2022'
            ];
  
  
        ////////////////////////////////////////// business planning date state async ///////////////////////////////
  var index22 = [twentytwo[0], twentytwo[1], twentytwo[2], twentytwo[3], twentytwo[4], twentytwo[5], twentytwo[6], twentytwo[7], twentytwo[8], twentytwo[9], twentytwo[10], twentytwo[11], twentytwo[12], twentytwo[13], twentytwo[14], twentytwo[15], twentytwo[16], twentytwo[17], twentytwo[18], twentytwo[19], twentytwo[20], twentytwo[21], twentytwo[22], twentytwo[23], twentytwo[24], twentytwo[25], twentytwo[26], twentytwo[27], twentytwo[28], twentytwo[29], twentytwo[30],
  twentytwo[31], twentytwo[32], twentytwo[33], twentytwo[34], twentytwo[35], twentytwo[36], twentytwo[37], twentytwo[38], twentytwo[39], twentytwo[40], twentytwo[41], twentytwo[42], twentytwo[43], twentytwo[44], twentytwo[45], twentytwo[46], twentytwo[47], twentytwo[48], twentytwo[49], twentytwo[50], twentytwo[51], twentytwo[52], twentytwo[53], twentytwo[54], twentytwo[55], twentytwo[56], twentytwo[57], twentytwo[58], twentytwo[59], twentytwo[60], twentytwo[61],
  twentytwo[62], twentytwo[63], twentytwo[64], twentytwo[65], twentytwo[66], twentytwo[67], twentytwo[68], twentytwo[69], twentytwo[70], twentytwo[71], twentytwo[72], twentytwo[73], twentytwo[74], twentytwo[75], twentytwo[76], twentytwo[77], twentytwo[78], twentytwo[79], twentytwo[80], twentytwo[81], twentytwo[82], twentytwo[83], twentytwo[84], twentytwo[85], twentytwo[86], twentytwo[87], twentytwo[88], twentytwo[89], twentytwo[90], twentytwo[91], twentytwo[92],
  twentytwo[93], twentytwo[94], twentytwo[95], twentytwo[96], twentytwo[97], twentytwo[98], twentytwo[99], twentytwo[100], twentytwo[101], twentytwo[102], twentytwo[103], twentytwo[104], twentytwo[105], twentytwo[106], twentytwo[107], twentytwo[108], twentytwo[109], twentytwo[110], twentytwo[111], twentytwo[112], twentytwo[113], twentytwo[114], twentytwo[115], twentytwo[116], twentytwo[117], twentytwo[118], twentytwo[119], twentytwo[120], twentytwo[121], twentytwo[122], twentytwo[123],
  twentytwo[124], twentytwo[125], twentytwo[126], twentytwo[127], twentytwo[128], twentytwo[129], twentytwo[130], twentytwo[131], twentytwo[132], twentytwo[133], twentytwo[134], twentytwo[135], twentytwo[136], twentytwo[137], twentytwo[138], twentytwo[139], twentytwo[140], twentytwo[141], twentytwo[142], twentytwo[143], twentytwo[144], twentytwo[145], twentytwo[146], twentytwo[147], twentytwo[148], twentytwo[149], twentytwo[150], twentytwo[151], twentytwo[152], twentytwo[153], twentytwo[154], 
  twentytwo[155], twentytwo[156], twentytwo[157], twentytwo[158], twentytwo[159], twentytwo[160], twentytwo[161], twentytwo[162], twentytwo[163], twentytwo[164], twentytwo[165], twentytwo[166], twentytwo[167], twentytwo[168], twentytwo[169], twentytwo[170], twentytwo[171], twentytwo[172], twentytwo[173], twentytwo[174], twentytwo[175], twentytwo[176], twentytwo[177], twentytwo[178], twentytwo[179], twentytwo[180], twentytwo[181], twentytwo[182], twentytwo[183], twentytwo[184], twentytwo[185],
  twentytwo[186], twentytwo[187], twentytwo[188], twentytwo[189], twentytwo[190], twentytwo[191], twentytwo[192], twentytwo[193], twentytwo[194], twentytwo[195], twentytwo[196], twentytwo[197], twentytwo[198], twentytwo[199], twentytwo[200], twentytwo[201], twentytwo[202], twentytwo[203], twentytwo[204], twentytwo[205], twentytwo[206], twentytwo[207], twentytwo[208], twentytwo[209], twentytwo[210], twentytwo[211], twentytwo[212], twentytwo[213], twentytwo[214], twentytwo[215], twentytwo[216],
  twentytwo[217], twentytwo[218], twentytwo[219], twentytwo[220], twentytwo[221], twentytwo[222], twentytwo[223], twentytwo[224], twentytwo[225], twentytwo[226], twentytwo[227], twentytwo[228], twentytwo[229], twentytwo[230], twentytwo[231], twentytwo[232], twentytwo[233], twentytwo[234], twentytwo[235], twentytwo[236], twentytwo[237], twentytwo[238], twentytwo[239], twentytwo[240], twentytwo[241], twentytwo[242], twentytwo[243], twentytwo[244], twentytwo[245], twentytwo[246], twentytwo[247],
  twentytwo[248], twentytwo[249], twentytwo[250], twentytwo[251], twentytwo[252], twentytwo[253], twentytwo[254], twentytwo[255], twentytwo[256], twentytwo[257], twentytwo[258], twentytwo[259], twentytwo[260], twentytwo[261], twentytwo[262], twentytwo[263], twentytwo[264], twentytwo[265], twentytwo[267], twentytwo[268], twentytwo[269], twentytwo[270], twentytwo[271], twentytwo[272], twentytwo[273], twentytwo[274], twentytwo[275], twentytwo[276], twentytwo[277], twentytwo[278], twentytwo[279],
  twentytwo[280], twentytwo[281], twentytwo[282], twentytwo[283], twentytwo[284], twentytwo[285], twentytwo[286], twentytwo[287], twentytwo[288], twentytwo[289], twentytwo[290], twentytwo[291], twentytwo[292], twentytwo[293], twentytwo[294], twentytwo[295], twentytwo[296], twentytwo[297], twentytwo[298], twentytwo[299], twentytwo[300], twentytwo[301], twentytwo[302], twentytwo[303], twentytwo[304], twentytwo[305], twentytwo[306], twentytwo[307], twentytwo[308], twentytwo[309], twentytwo[310],
  twentytwo[311], twentytwo[312], twentytwo[313], twentytwo[314], twentytwo[315], twentytwo[316], twentytwo[317], twentytwo[318], twentytwo[319], twentytwo[320], twentytwo[321], twentytwo[322], twentytwo[323], twentytwo[324], twentytwo[325], twentytwo[326], twentytwo[327], twentytwo[328], twentytwo[329], twentytwo[330], twentytwo[331], twentytwo[332], twentytwo[333], twentytwo[334], twentytwo[335], twentytwo[336], twentytwo[337], twentytwo[338], twentytwo[339], twentytwo[340], twentytwo[341],
  twentytwo[342], twentytwo[343], twentytwo[344], twentytwo[345], twentytwo[346], twentytwo[347], twentytwo[348], twentytwo[349], twentytwo[350], twentytwo[351], twentytwo[352], twentytwo[353], twentytwo[354], twentytwo[355], twentytwo[356], twentytwo[357], twentytwo[358], twentytwo[359], twentytwo[360], twentytwo[361], twentytwo[362], twentytwo[363], twentytwo[364]];
  console.log(index22);
  







        
        const MAcounty = ['Norfolk','Middlesex','Essex','Worcester','Plymouth','Suffolk','Bristol','Barnstable','Hampden','Hampshire','Berkshire','Dukes','Franklin'];
        
       
     
     
        const GLOBE1 = {
         states: [
          {name: 'Monroe', counties: [{name: 'FL', towns: ['Key West, FL']}]}
       ]
       };  







       // const navigate = useNavigate();
       // const [user, setUser] = React.useState('User');
    
       // useEffect(() => {
       // const token = localStorage.getItem('token')
        //if (token) {
           // const authUser = jwt.decode('token')
           // console.log(authUser) 
             //   if (!authUser) {
                   // localStorage.removeItem('token')
                  //  navigate('/createaccount')
                    //history.replace('/login')
              //  } else {
                   // setUser(authUser) 
               // }
              //  } else {
                 //   alert('Please Login')
                  //  navigate('/createaccount')
               // }
                
          //  }, [])
    
            
            
          //  const logoutUser = () => {
              //  alert('Successfully logged out')
               // localStorage.removeItem('token')
               // navigate('/createaccount')
           // }
    
            












     
     
     
    
     
           const [pricerangecounty1, setPricerangecounty1] = React.useState();
           const [pricerangetown1, setPricerangetown1] = React.useState();
           const [selectedState2, setSelectedState2] = React.useState(); // MA
        
           const availableState2 = GLOBE1.states.find((s) => s.name === pricerangecounty1); // that is what this says...
           const availableTowns2 = availableState2?.counties?.find( //
            (c) => c.name === selectedState2 //
            ); //
           
   
   
   
   
           
            /////////////////////////////////// mapping ////////////////////////////////////////////
           
           
           
           
           const mapContainer = useRef(null);
           const map = useRef(null);
           const [lng, setLng] = useState(-70.9);
           const [lat, setLat] = useState(42.35);
           const [zoom, setZoom] = useState(9);
     
     
         
     
     
           const [afone, setAfone] = React.useState([]);
     
           
       
           React.useEffect(() => { //
     
     
       
             const map = new mapboxgl.Map({
               container: mapContainer.current,
               style: "mapbox://styles/mapbox/dark-v10",
               center: [-70.9, 42.35],
               zoom: 2,
             });
   
             map.addControl(new mapboxgl.NavigationControl());
   
           //  map.addControl(
              // new MapboxGeocoder({
               //  accessToken: mapboxgl.accessToken,
                // mapboxgl: mapboxgl
   
              // })
            // )
     
              // Add the control to the map.
         const geocoder = new MapboxGeocoder({
           accessToken: mapboxgl.accessToken,
           mapboxgl: mapboxgl
       });
     
       document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
     
     
          
     
         
     
             fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'})
             .then(response => response.json())
             .then(data => {
               console.log(data);
               //setAfone(data);
     
               for (let i = 0; i < data.length; i++) {
                 const a = data; //plus the counter from this iteration...
                 const spread = [...data];
                 console.log(a);
                 const title = a[1].street; // correct street name
                 console.log(title); 
   
               
   
   
     
                 
     
                 const makeGeoJSON = (data) => {
                   return {
                     type: 'FeatureCollection',
                     features: data.map(feature => {
                       return {
                         "type": "Feature",
                         "properties": {
                           "id": 'mapbox-streets',
                          // "value": feature.DOM,
                          "photosMAIN": feature.photosMAIN,
                           "address": feature.address,
                           "townstate": feature.townstate,
                           "description": feature.description,
                           "saleprice": feature.saleprice,
                           "listprice": feature.listprice,
                           'differential': feature.differential,
                           "county": feature.county,
                           "propertytype": feature.propertytype,
                           "saledate": feature.saledate,
                           "year": feature.year,
                           "DOM": feature.DOM
                         },
                         "geometry": {
                           "type": "Point",
                           "coordinates": [feature.latitude, feature.longitude],
                          
                         }
                       }
                     })
                   }
     
                 }; 
     
           
                 const myGeoJSONData = makeGeoJSON(a);
           
                 console.log(myGeoJSONData); // a is geojson data...
                 
                  
                 map.addSource("places", {
                   type: "geojson",
                   data: myGeoJSONData,
                 });
     
                 
     
                 
         
             // only want to work with the map after it has fully loaded
             // if you try to add sources and layers before the map has loaded
             // things will not work properly
             map.on("load", () => {
   
            
   
   
   
   
   
   
   
     
             // Add an image to use as a custom marker
   
     // Add a GeoJSON source with 2 points
     //map.addSource('places', myGeoJSONData);
   
     
   
     // Add a layer showing the places.
   map.addLayer({
     'id': 'places',
     'type': 'circle',
     'source': 'places',
     'paint': {
     'circle-color': '#4264fb',
     'circle-radius': 6,
     'circle-stroke-width': 2,
     'circle-stroke-color': '#ffffff'
     }
     });
   
   
   
     // Create a popup, but don't add it to the map yet.
   const popup = new mapboxgl.Popup({
     closeButton: false,
     closeOnClick: false
     });
   
   
   
   
   
   
   
     
      
   
   
   
     }
     );
   
   
            
       
                
               
         // Add markers to the map.
         for (const marker of myGeoJSONData.features) {
           // Create a DOM element for each marker.
           const el = document.createElement('div');
           const width = '100px';
           const height = '30px';
           el.className = 'marker';
           el.innerHTML = `<div style={{background-color: rgb(130,130,130)}}>${marker.properties.listprice}</div>`
           el.style.backgroundImage = `${marker.properties.listprice}`;
           el.style.width = `${width}px`;
           el.style.height = `${height}px`;
           //el.style.backgroundSize = '100%';
            
          // el.addEventListener('click', () => {
           //window.alert(marker.properties.message);
          // window.alert(`<td>Address: ${marker.properties.address} ${marker.properties.townstate} </td><br/>
          // <td>List Price: ${marker.properties.listprice} </td><br/>
         //  <td>Price Differential:${marker.properties.differential}</td><br/>
          // <td>Sale Price: ${marker.properties.saleprice} </td><br/>
          // <td>Days On Market: ${marker.properties.DOM}</td><br/>
          // <td>County: ${marker.properties.county}</td>
           //<td>Property Type: ${marker.properties.propertytype} </td>
           //<td>Sale Date: ${marker.properties.saledate} </td>
           //<td>Description: ${marker.properties.description} </td>`)
         //  });
   
                      
   
     
          new mapboxgl.Marker(el)
       .setLngLat(marker.geometry.coordinates)
       .setPopup(
         new mapboxgl.Popup({ offset: [20, 0] }) // add popups
           .setHTML(
   
         
             `
     
             <Popup
                 position="center"
                 modal
                 nested       
               >
     
     
             <div style='position: absolute;       
             left: 50%;
             font-size: 15px;
             transform: translate(-50%, -50%);
             font-family: sans-serif;
             background: rgb(134,134,134);
             width: 45vw;
             max-height: 60vh;
             background-size: cover;
             background-repeat: no-repeat no-repeat;
             background-position: left center;
             overflow-y: auto;'>
             <button className="close" onClick={close}>
              &times;
            </button>
             <div style='
             width: 100%;
             border-bottom: 1px solid gray;
             font-size: 18px;
             text-align: center;
             padding: 5px;
             '>West Manor</div>
             <div>
               
             
     
             <ul>
     <br/>
     <div style='border: 4px solid rgb(54,54,54);
     padding: 20px;
     background-color: rgb(175,175,175);'>
      <img style='width: 400px;
      max-height: 500px;' src=${marker.properties.photosMAIN}></img>
      <br/>
      <br/>
      <br/>
      <br/>
      <td>Address: ${marker.properties.address} ${marker.properties.townstate} </td><br/>
      <td>List Price: ${marker.properties.listprice} </td><br/>
      <td>Days On Market: ${marker.properties.DOM}</td><br/>
      <td>County: ${marker.properties.county}</td>
      <td>Property Type: ${marker.properties.propertytype} </td>
      <td>Sale Date: ${marker.properties.saledate} </td>
      <td>Description: ${marker.properties.description} </td>
      </div>
      </ul>
     
     </div>
             </div>
     
             </Popup>
     
            `
           )
       )
   
   
     
           
       .addTo(map);
            
           // Add markers to the map.
           new mapboxgl.Marker(el)
           .setLngLat(marker.geometry.coordinates)
           .addTo(map);
   
         }  
     
     
     
         //map.addControl(
         //  new MapboxGeocoder({
          // accessToken: mapboxgl.accessToken,
          // mapboxgl: mapboxgl
          // })
          // );
     
          
        
         
         
          
             
         
         
             
         
           
         
           ///////\\\\\\\\\\\\\\\\\\\\\\\
               
             
         
               
                 
           
               // cleanup function to remove map on unmount
               return () => map.remove();
     
             } // for loop closing
             
             })
     
             }, []);
     
            
          
          /////////////////////////////////// mapping ////////////////////////////////////////////
          
          
          
          
   
   
   
   
   
   
   //////////////////////// function active TOP ///////////////////
   
   function firstdateIndex(e){
      
       for (let i = 0; i < index22.length; i++){
       
       
       console.log(document.getElementById('datetopvalue').value);
       if (document.getElementById('datetopvalue').value === index22[i]){
       console.log(index22.indexOf(index22[i]));
       firstopenarray.push(index22.splice(index22.indexOf(index22[i]), 153));
       return firstopenarray;
       console.log(firstopenarray);
       }
       
       
       }
       }
       console.log(firstdateIndex);
       
       
       
       ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
   
    
         //const [county, setCounty] = React.useState();
       const [datetop, setDatetop] = React.useState('');
       //const [towntop, setTowntop] = React.useState();
       const [price1, setPrice1] = React.useState();
       const [price2, setPrice2] = React.useState();
       const [firstopenarray, setFirstopenarray] = React.useState([]);
    
    const [county, setCounty] = React.useState(''); // MA counties
    const [towntop, setTowntop] = React.useState(''); //...
    const [selectedState1, setSelectedState1] = React.useState(''); // MA
    
    const availableState1 = GLOBE1.states.find((s) => s.name === county); // that is what this says...
    const availableTowns1 = availableState1?.counties?.find( //
      (c) => c.name === selectedState1 //
    ); //
    
    const [westmanor, setWestmanor] = React.useState([]);
    const [norfolkcountygreat22, setNorfolkcountygreat22] = React.useState([]); 
    
    
    ////pagination...
    
    const PER_PAGE = 5;
    
    const [currentPage, setCurrentPage] = React.useState(0);
    const [currentPage1, setCurrentPage1] = React.useState(0);
    
    
    function handlePageClick({ selected: selectedPage}){
      setCurrentPage(selectedPage);
    }
    
    
    
    
    const offset = currentPage * PER_PAGE;
    const offset1 = currentPage1 * PER_PAGE;
    
    const currentPageData = westmanor
    .slice(offset, offset + PER_PAGE)
    .map((item, index) => (
    
      <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
   
   
       <br/>
       <br/>
       
       <br/>
       
                <Popup
                  trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
                  position="center"
                  modal
                  nested       
                >
      
      <div className="modal" tabindex='0'>
      
             
              <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
       </div>
       </ul>
       
       
      
      </div>
              </div>
                  
                </Popup>
              
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
       <br/>
       <br/>
       
      
       </div>
       </ul>
      
       
       
      ));
    
    const pageCount = Math.ceil(westmanor.length / PER_PAGE); 
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const PER_PAGE1 = 5;
    const pageCount1 = Math.ceil(norfolkcountygreat22.length / PER_PAGE1); 
    
    
    function handlePageClick1({ selected: selectedPage}){
      setCurrentPage1(selectedPage);
    }
    
    const currentPageData1 =  norfolkcountygreat22
    .slice(offset1, offset1 + PER_PAGE1)
    .map((item, index) => (
    
      <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
   
   
       <br/>
       <br/>
       
       <br/>
       
                <Popup
                  trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
                  position="center"
                  modal
                  nested       
                >
      
      <div className="modal" tabindex='0'>
      
             
              <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
       </div>
       </ul>
       
       
      
      </div>
              </div>
                  
                </Popup>
              
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
       <br/>
       <br/>
       
      
       </div>
       </ul>
      
       
       
      ));
    
     
    
    
    async function brucewayne22a(e){ 
      //e.preventDefault();
    
      //firstdateIndex();
      
    
    
      const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'})
        const data = await req.json()
        console.log(data); ////////////// all console.logs to here... 
    
        //let newArray = [...firstopenarray];
        //console.log(data);
    
        let norfolkcounty = [];
        let norfolkcountygreat = [];
        for (let i = 0; i<data.length; i++){
         if ((data[i].year === 2022 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].saleprice > `${pricevalue}` && data[i].saleprice < `${pricevalue2}`) && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === twentytwo[0] || data[i].saledate === twentytwo[1] || data[i].saledate === twentytwo[2] || data[i].saledate === twentytwo[3] || data[i].saledate === twentytwo[4] || data[i].saledate === twentytwo[5] || data[i].saledate === twentytwo[6] || data[i].saledate === twentytwo[7] || data[i].saledate === twentytwo[8] || data[i].saledate === twentytwo[9] || data[i].saledate === twentytwo[10] || data[i].saledate === twentytwo[11] || data[i].saledate === twentytwo[12] || data[i].saledate === twentytwo[13] || data[i].saledate === twentytwo[14] || data[i].saledate === twentytwo[15] || data[i].saledate === twentytwo[16] || data[i].saledate === twentytwo[17] || data[i].saledate === twentytwo[18] || data[i].saledate === twentytwo[19] || data[i].saledate === twentytwo[20] || data[i].saledate === twentytwo[21] || data[i].saledate === twentytwo[22] || data[i].saledate === twentytwo[23] || data[i].saledate === twentytwo[24] || data[i].saledate === twentytwo[25] || data[i].saledate === twentytwo[26] || data[i].saledate === twentytwo[27] || data[i].saledate === twentytwo[28] || data[i].saledate === twentytwo[29] || data[i].saledate === twentytwo[30] || data[i].saledate === twentytwo[31] || data[i].saledate === twentytwo[32] || data[i].saledate === twentytwo[33] || data[i].saledate === twentytwo[34] || data[i].saledate === twentytwo[35] || data[i].saledate === twentytwo[36] || data[i].saledate === twentytwo[37] || data[i].saledate === twentytwo[38] || data[i].saledate === twentytwo[39] || data[i].saledate === twentytwo[40] || data[i].saledate === twentytwo[41] ||
           data[i].saledate === twentytwo[42] || data[i].saledate === twentytwo[43] || data[i].saledate === twentytwo[44] || data[i].saledate === twentytwo[45] || data[i].saledate === twentytwo[46] || data[i].saledate === twentytwo[47] || data[i].saledate === twentytwo[48] || data[i].saledate === twentytwo[49] || data[i].saledate === twentytwo[50] || data[i].saledate === twentytwo[51] || data[i].saledate === twentytwo[52] || data[i].saledate === twentytwo[53] || data[i].saledate === twentytwo[54] || data[i].saledate === twentytwo[55] ||data[i].saledate === twentytwo[56] || data[i].saledate === twentytwo[57] || data[i].saledate === twentytwo[58] || data[i].saledate === twentytwo[59] || data[i].saledate === twentytwo[60] || data[i].saledate === twentytwo[61] || data[i].saledate === twentytwo[62] || data[i].saledate === twentytwo[63] || data[i].saledate === twentytwo[64] || data[i].saledate === twentytwo[65] || data[i].saledate === twentytwo[66] || data[i].saledate === twentytwo[67] || data[i].saledate === twentytwo[68] || data[i].saledate === twentytwo[69] 
           || data[i].saledate === twentytwo[70] || data[i].saledate === twentytwo[71] || data[i].saledate === twentytwo[72] || data[i].saledate === twentytwo[73] || data[i].saledate === twentytwo[74] || data[i].saledate === twentytwo[75] || data[i].saledate === twentytwo[76] || data[i].saledate === twentytwo[77] || data[i].saledate === twentytwo[78] || data[i].saledate === twentytwo[79] || data[i].saledate === twentytwo[80] || data[i].saledate === twentytwo[81] || data[i].saledate === twentytwo[82] || data[i].saledate === twentytwo[83]
           || data[i].saledate === twentytwo[84] || data[i].saledate === twentytwo[85] || data[i].saledate === twentytwo[86] || data[i].saledate === twentytwo[87] || data[i].saledate === twentytwo[88] || data[i].saledate === twentytwo[89] || data[i].saledate === twentytwo[90] || data[i].saledate === twentytwo[91] || data[i].saledate === twentytwo[92] || data[i].saledate === twentytwo[93] || data[i].saledate === twentytwo[94] || data[i].saledate === twentytwo[95] || data[i].saledate === twentytwo[96] || data[i].saledate === twentytwo[97] || data[i].saledate === twentytwo[98] || data[i].saledate === twentytwo[99] 
           || data[i].saledate === twentytwo[100] || data[i].saledate === twentytwo[101] || data[i].saledate === twentytwo[102] || data[i].saledate === twentytwo[103] || data[i].saledate === twentytwo[104] || data[i].saledate === twentytwo[105] || data[i].saledate === twentytwo[106] || data[i].saledate === twentytwo[107] || data[i].saledate === twentytwo[108] || data[i].saledate === twentytwo[109] || data[i].saledate === twentytwo[110] || data[i].saledate === twentytwo[111] || data[i].saledate === twentytwo[112] || data[i].saledate === twentytwo[113]
           || data[i].saledate === twentytwo[114] || data[i].saledate === twentytwo[115] || data[i].saledate === twentytwo[116] || data[i].saledate === twentytwo[117] || data[i].saledate === twentytwo[118] || data[i].saledate === twentytwo[119] || data[i].saledate === twentytwo[120] || data[i].saledate === twentytwo[1211] || data[i].saledate === twentytwo[122] || data[i].saledate === twentytwo[123] || data[i].saledate === twentytwo[124] || data[i].saledate === twentytwo[125] || data[i].saledate === twentytwo[126] || data[i].saledate === twentytwo[127] || data[i].saledate === twentytwo[128] || data[i].saledate === twentytwo[129] 
           || data[i].saledate === twentytwo[130] || data[i].saledate === twentytwo[131] || data[i].saledate === twentytwo[132] || data[i].saledate === twentytwo[133] || data[i].saledate === twentytwo[134] || data[i].saledate === twentytwo[135] || data[i].saledate === twentytwo[136] || data[i].saledate === twentytwo[137] || data[i].saledate === twentytwo[138] || data[i].saledate === twentytwo[139] || data[i].saledate === twentytwo[140] || data[i].saledate === twentytwo[141] || data[i].saledate === twentytwo[142] || data[i].saledate === twentytwo[143]
           || data[i].saledate === twentytwo[144] || data[i].saledate === twentytwo[145] || data[i].saledate === twentytwo[146] || data[i].saledate === twentytwo[147] || data[i].saledate === twentytwo[148] || data[i].saledate === twentytwo[149] || data[i].saledate === twentytwo[150] || data[i].saledate === twentytwo[151] || data[i].saledate === twentytwo[152] || data[i].saledate === twentytwo[153]) ){
           norfolkcounty.push(data[i]);
           // console.log(norfolkcounty);
           norfolkcounty.sort((a, b) => a.saleprice - b.saleprice);
           setWestmanor(norfolkcounty);
    
           if (data[i].saleprice >= data[i].listprice){
            norfolkcountygreat.push(data[i]);
            norfolkcountygreat.sort((a, b) => a.saleprice - b.saleprice);
            setNorfolkcountygreat22(norfolkcountygreat);
           }
    
    
           let length = norfolkcounty.length;
          // console.log(length);
          document.getElementById('inject').innerHTML = length;
         // document.getElementById('headerstatetop22').innerHTML = '5 month previous Total Market @ ' + `${newArray[0][0]}` + ' thru ' + `${newArray[0][143]}`; // showing 80...
    
          const formatter = new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency: 'USD',
           minimumFractionDigits: 0
          })
          
           let saleprice = 0;
           let listprice = 0;
           let DOM = 0;
           let differential = 0;
           function add(item, counter, array){
            saleprice+=(item.saleprice); //spot on excel
            listprice+=(item.listprice); //NaN
            DOM+=(item.DOM); //spoton excel
            differential+=(item.differential); //NaN
           }
           norfolkcounty.forEach(add);
          // console.log(saleprice);
          let average = formatter.format(Math.round(saleprice / length));
          let averagelist = formatter.format(Math.round(listprice / length));
          let avgdom = Math.round(DOM / length );
          let avgdiff = formatter.format(Math.round(differential / length));
          //console.log(average);
         // console.log(averagelist);
          //console.log(avgdiff);
          document.getElementById('harley').innerHTML = average;
          document.getElementById('oj').innerHTML = averagelist; // this avg sale price number is correct...  
          document.getElementById('sultan').innerHTML = avgdom;
          document.getElementById('lordof').innerHTML = avgdiff;
    
        }
       // console.log(saleprice);
      }
                               
        }
      
    
    
    
    
    
    
    
       
       
       
    
       
       const [data1, setData1] = React.useState('');
       const [titleavgdiff, setTitleavgdiff] = React.useState(0);
    
    
    
    
    
    
       async function brucewayne22b(e){ 
        //e.preventDefault();
      
       // firstdateIndex();
        
      
      
        const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'})
          const data = await req.json()
          console.log(data); ////////////// all console.logs to here... 
    
          //let newArray = [...firstopenarray];
          // console.log(data);
           let greatless = []; // 1665 objects here
           let great = []; // 0 here
           let less = [];
           const maxmin = [];
           for (let i = 0; i<data.length; i++){
             if ((data[i].year === 2022 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].saleprice > `${pricevalue}` && data[i].saleprice < `${pricevalue2}`) && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === twentytwo[0] || data[i].saledate === twentytwo[1] || data[i].saledate === twentytwo[2] || data[i].saledate === twentytwo[3] || data[i].saledate === twentytwo[4] || data[i].saledate === twentytwo[5] || data[i].saledate === twentytwo[6] || data[i].saledate === twentytwo[7] || data[i].saledate === twentytwo[8] || data[i].saledate === twentytwo[9] || data[i].saledate === twentytwo[10] || data[i].saledate === twentytwo[11] || data[i].saledate === twentytwo[12] || data[i].saledate === twentytwo[13] || data[i].saledate === twentytwo[14] || data[i].saledate === twentytwo[15] || data[i].saledate === twentytwo[16] || data[i].saledate === twentytwo[17] || data[i].saledate === twentytwo[18] || data[i].saledate === twentytwo[19] || data[i].saledate === twentytwo[20] || data[i].saledate === twentytwo[21] || data[i].saledate === twentytwo[22] || data[i].saledate === twentytwo[23] || data[i].saledate === twentytwo[24] || data[i].saledate === twentytwo[25] || data[i].saledate === twentytwo[26] || data[i].saledate === twentytwo[27] || data[i].saledate === twentytwo[28] || data[i].saledate === twentytwo[29] || data[i].saledate === twentytwo[30] || data[i].saledate === twentytwo[31] || data[i].saledate === twentytwo[32] || data[i].saledate === twentytwo[33] || data[i].saledate === twentytwo[34] || data[i].saledate === twentytwo[35] || data[i].saledate === twentytwo[36] || data[i].saledate === twentytwo[37] || data[i].saledate === twentytwo[38] || data[i].saledate === twentytwo[39] || data[i].saledate === twentytwo[40] || data[i].saledate === twentytwo[41] ||
               data[i].saledate === twentytwo[42] || data[i].saledate === twentytwo[43] || data[i].saledate === twentytwo[44] || data[i].saledate === twentytwo[45] || data[i].saledate === twentytwo[46] || data[i].saledate === twentytwo[47] || data[i].saledate === twentytwo[48] || data[i].saledate === twentytwo[49] || data[i].saledate === twentytwo[50] || data[i].saledate === twentytwo[51] || data[i].saledate === twentytwo[52] || data[i].saledate === twentytwo[53] || data[i].saledate === twentytwo[54] || data[i].saledate === twentytwo[55] ||data[i].saledate === twentytwo[56] || data[i].saledate === twentytwo[57] || data[i].saledate === twentytwo[58] || data[i].saledate === twentytwo[59] || data[i].saledate === twentytwo[60] || data[i].saledate === twentytwo[61] || data[i].saledate === twentytwo[62] || data[i].saledate === twentytwo[63] || data[i].saledate === twentytwo[64] || data[i].saledate === twentytwo[65] || data[i].saledate === twentytwo[66] || data[i].saledate === twentytwo[67] || data[i].saledate === twentytwo[68] || data[i].saledate === twentytwo[69] 
               || data[i].saledate === twentytwo[70] || data[i].saledate === twentytwo[71] || data[i].saledate === twentytwo[72] || data[i].saledate === twentytwo[73] || data[i].saledate === twentytwo[74] || data[i].saledate === twentytwo[75] || data[i].saledate === twentytwo[76] || data[i].saledate === twentytwo[77] || data[i].saledate === twentytwo[78] || data[i].saledate === twentytwo[79] || data[i].saledate === twentytwo[80] || data[i].saledate === twentytwo[81] || data[i].saledate === twentytwo[82] || data[i].saledate === twentytwo[83]
               || data[i].saledate === twentytwo[84] || data[i].saledate === twentytwo[85] || data[i].saledate === twentytwo[86] || data[i].saledate === twentytwo[87] || data[i].saledate === twentytwo[88] || data[i].saledate === twentytwo[89] || data[i].saledate === twentytwo[90] || data[i].saledate === twentytwo[91] || data[i].saledate === twentytwo[92] || data[i].saledate === twentytwo[93] || data[i].saledate === twentytwo[94] || data[i].saledate === twentytwo[95] || data[i].saledate === twentytwo[96] || data[i].saledate === twentytwo[97] || data[i].saledate === twentytwo[98] || data[i].saledate === twentytwo[99] 
               || data[i].saledate === twentytwo[100] || data[i].saledate === twentytwo[101] || data[i].saledate === twentytwo[102] || data[i].saledate === twentytwo[103] || data[i].saledate === twentytwo[104] || data[i].saledate === twentytwo[105] || data[i].saledate === twentytwo[106] || data[i].saledate === twentytwo[107] || data[i].saledate === twentytwo[108] || data[i].saledate === twentytwo[109] || data[i].saledate === twentytwo[110] || data[i].saledate === twentytwo[111] || data[i].saledate === twentytwo[112] || data[i].saledate === twentytwo[113]
               || data[i].saledate === twentytwo[114] || data[i].saledate === twentytwo[115] || data[i].saledate === twentytwo[116] || data[i].saledate === twentytwo[117] || data[i].saledate === twentytwo[118] || data[i].saledate === twentytwo[119] || data[i].saledate === twentytwo[120] || data[i].saledate === twentytwo[1211] || data[i].saledate === twentytwo[122] || data[i].saledate === twentytwo[123] || data[i].saledate === twentytwo[124] || data[i].saledate === twentytwo[125] || data[i].saledate === twentytwo[126] || data[i].saledate === twentytwo[127] || data[i].saledate === twentytwo[128] || data[i].saledate === twentytwo[129] 
               || data[i].saledate === twentytwo[130] || data[i].saledate === twentytwo[131] || data[i].saledate === twentytwo[132] || data[i].saledate === twentytwo[133] || data[i].saledate === twentytwo[134] || data[i].saledate === twentytwo[135] || data[i].saledate === twentytwo[136] || data[i].saledate === twentytwo[137] || data[i].saledate === twentytwo[138] || data[i].saledate === twentytwo[139] || data[i].saledate === twentytwo[140] || data[i].saledate === twentytwo[141] || data[i].saledate === twentytwo[142] || data[i].saledate === twentytwo[143]
               || data[i].saledate === twentytwo[144] || data[i].saledate === twentytwo[145] || data[i].saledate === twentytwo[146] || data[i].saledate === twentytwo[147] || data[i].saledate === twentytwo[148] || data[i].saledate === twentytwo[149] || data[i].saledate === twentytwo[150] || data[i].saledate === twentytwo[151] || data[i].saledate === twentytwo[152] || data[i].saledate === twentytwo[153]) ){
               greatless.push(data[i]); // 1665 objects here
               greatless.sort((a, b) => b.listprice - a.listprice);
             
           if (data[i].saleprice >= data[i].listprice){
             great.push(data[i]);
             //console.log(great);
             great.sort((a, b) => b.listprice - a.listprice);
           }
           if (data[i].saleprice < data[i].listprice){
             less.push(data[i]);
             //console.log(less);
             less.sort((a, b) => b.listprice - a.listprice);
           }
           
           let greatV = great.length;
           
           let differential = 0;
           function add(item, counter, array){
            differential+=(item.differential); //NaN
           }
           great.forEach(add);
           console.log(differential);
    
           const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
           })
    
           
          
           setTitleavgdiff(formatter.format(Math.round(differential / greatV)));
    
           const pricemax = formatter.format(Math.max(...greatless.map(item => item.saleprice)));
           //console.log(pricemax);
    
    
           document.getElementById('max').innerHTML = pricemax;
       
           const pricemin = formatter.format(Math.min(...greatless.map(item => item.saleprice)));
           //console.log(pricemin);
           document.getElementById('min').innerHTML = pricemin;
        
    
          
          //document.getElementById('lordof').innerHTML = avgdiff;
           
           
           
           let lengthgreat = great.length;
           //console.log(lengthgreat);
          
    
           let lengthless = greatless.length;
           //console.log(lengthless);
       
       
           let greaterthan = Math.round((greatV / lengthless) * 100);
           document.getElementById('threebears').innerHTML = `${greaterthan}%` 
           }   
    
    
           //setData(JSON.stringify(data));
    
    
         
          
          
    
           
         }
      
          
          }
        
                                 
          
      
          
    
    
       
      
       
       
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////
             
       //////// 2021 market data
       const [openarraytop21, setOpenarraytop21] = React.useState([]);
       const [norfolkcountygreat21, setNorfolkcountygreat21] = React.useState([]);
    
        ////pagination...
    
    
    const [currentPage2, setCurrentPage2] = React.useState(0);
    
    
    
    
    function handlePageClick2({ selected: selectedPage}){
      setCurrentPage2(selectedPage);
    }
    
    const offset2 = currentPage2 * PER_PAGE;
    
    const currentPageData2 = norfolkcountygreat21
    .slice(offset2, offset2 + PER_PAGE)
    .map((item, index) => (
    
      <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
   
   
       <br/>
       <br/>
       
       <br/>
       
                <Popup
                  trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
                  position="center"
                  modal
                  nested       
                >
      
      <div className="modal" tabindex='0'>
      
             
      <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
       </div>
       </ul>
       
       
      
      </div>
              </div>
                  
                </Popup>
              
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
       <br/>
       <br/>
       
      
       </div>
       </ul>
      
       
       
      ));
    
     const pageCount2 = Math.ceil(norfolkcountygreat21.length / PER_PAGE);  
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
       
       
   // function firstdateIndex21(e){
      
     //for (let i = 0; i < index21.length; i++){
     
     
    // console.log(document.getElementById('datetopvalue').value);
    // if ((document.getElementById('datetopvalue').value).substring(0, 5) === index21[i].substring(0, 5)){
    // console.log(index21.indexOf(index21[i]));
     //openarraytop21.push(index21.splice(index21.indexOf(index21[i]), 120));
    // return openarraytop21;
    // console.log(openarraytop21);
    // }
    // }
    // }
    // console.log(firstdateIndex21);
    
    
    
       
    const [westmanor21, setWestmanor21] = React.useState([]);
    
       ////pagination...
    
    
    const [currentPage3, setCurrentPage3] = React.useState(0);
    
    
    
    
    function handlePageClick3({ selected: selectedPage}){
      setCurrentPage3(selectedPage);
    }
    
    const offset3 = currentPage3 * PER_PAGE;
    
    const currentPageData3 = westmanor21
    .slice(offset3, offset3 + PER_PAGE)
    .map((item, index) => (
    
      <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
   
   
       <br/>
       <br/>
       
       <br/>
       
                <Popup
                  trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
                  position="center"
                  modal
                  nested       
                >
      
      <div className="modal" tabindex='0'>
      
             
              <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
       </div>
       </ul>
       
       
      
      </div>
              </div>
                  
                </Popup>
              
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
       
       
       <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
       <br/>
       <br/>
       
      
       </div>
       </ul>
      
       
       
      ));
    
     const pageCount3 = Math.ceil(westmanor21.length / PER_PAGE);  
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
   
    
      
       async function brucewayne21a(e){  // was the 2021 function...
        //e.preventDefault();
   
   
   
          const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'})
          const data = await req.json()
          console.log(data); ////////////// all console.logs to here... 
      
        
        //  firstdateIndex21();
      
         
    
          //let newArray = [...openarraytop21];
          //console.log(data);
          let norfolkcounty = [];
          let norfolkcountygreat = [];
          for (let i = 0; i<data.length; i++){
           if ((data[i].year === 2022 && data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}`) && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === twentytwo[0] || data[i].saledate === twentytwo[1] || data[i].saledate === twentytwo[2] || data[i].saledate === twentytwo[3] || data[i].saledate === twentytwo[4] || data[i].saledate === twentytwo[5] || data[i].saledate === twentytwo[6] || data[i].saledate === twentytwo[7] || data[i].saledate === twentytwo[8] || data[i].saledate === twentytwo[9] || data[i].saledate === twentytwo[10] || data[i].saledate === twentytwo[11] || data[i].saledate === twentytwo[12] || data[i].saledate === twentytwo[13] || data[i].saledate === twentytwo[14] || data[i].saledate === twentytwo[15] || data[i].saledate === twentytwo[16] || data[i].saledate === twentytwo[17] || data[i].saledate === twentytwo[18] || data[i].saledate === twentytwo[19] || data[i].saledate === twentytwo[20] || data[i].saledate === twentytwo[21] || data[i].saledate === twentytwo[22] || data[i].saledate === twentytwo[23] || data[i].saledate === twentytwo[24] || data[i].saledate === twentytwo[25] || data[i].saledate === twentytwo[26] || data[i].saledate === twentytwo[27] || data[i].saledate === twentytwo[28] || data[i].saledate === twentytwo[29] || data[i].saledate === twentytwo[30] || data[i].saledate === twentytwo[31] || data[i].saledate === twentytwo[32] || data[i].saledate === twentytwo[33] || data[i].saledate === twentytwo[34] || data[i].saledate === twentytwo[35] || data[i].saledate === twentytwo[36] || data[i].saledate === twentytwo[37] || data[i].saledate === twentytwo[38] || data[i].saledate === twentytwo[39] || data[i].saledate === twentytwo[40] || data[i].saledate === twentytwo[41] ||
             data[i].saledate === twentytwo[42] || data[i].saledate === twentytwo[43] || data[i].saledate === twentytwo[44] || data[i].saledate === twentytwo[45] || data[i].saledate === twentytwo[46] || data[i].saledate === twentytwo[47] || data[i].saledate === twentytwo[48] || data[i].saledate === twentytwo[49] || data[i].saledate === twentytwo[50] || data[i].saledate === twentytwo[51] || data[i].saledate === twentytwo[52] || data[i].saledate === twentytwo[53] || data[i].saledate === twentytwo[54] || data[i].saledate === twentytwo[55] ||data[i].saledate === twentytwo[56] || data[i].saledate === twentytwo[57] || data[i].saledate === twentytwo[58] || data[i].saledate === twentytwo[59] || data[i].saledate === twentytwo[60] || data[i].saledate === twentytwo[61] || data[i].saledate === twentytwo[62] || data[i].saledate === twentytwo[63] || data[i].saledate === twentytwo[64] || data[i].saledate === twentytwo[65] || data[i].saledate === twentytwo[66] || data[i].saledate === twentytwo[67] || data[i].saledate === twentytwo[68] || data[i].saledate === twentytwo[69] 
             || data[i].saledate === twentytwo[70] || data[i].saledate === twentytwo[71] || data[i].saledate === twentytwo[72] || data[i].saledate === twentytwo[73] || data[i].saledate === twentytwo[74] || data[i].saledate === twentytwo[75] || data[i].saledate === twentytwo[76] || data[i].saledate === twentytwo[77] || data[i].saledate === twentytwo[78] || data[i].saledate === twentytwo[79] || data[i].saledate === twentytwo[80] || data[i].saledate === twentytwo[81] || data[i].saledate === twentytwo[82] || data[i].saledate === twentytwo[83]
             || data[i].saledate === twentytwo[84] || data[i].saledate === twentytwo[85] || data[i].saledate === twentytwo[86] || data[i].saledate === twentytwo[87] || data[i].saledate === twentytwo[88] || data[i].saledate === twentytwo[89] || data[i].saledate === twentytwo[90] || data[i].saledate === twentytwo[91] || data[i].saledate === twentytwo[92] || data[i].saledate === twentytwo[93] || data[i].saledate === twentytwo[94] || data[i].saledate === twentytwo[95] || data[i].saledate === twentytwo[96] || data[i].saledate === twentytwo[97] || data[i].saledate === twentytwo[98] || data[i].saledate === twentytwo[99] 
             || data[i].saledate === twentytwo[100] || data[i].saledate === twentytwo[101] || data[i].saledate === twentytwo[102] || data[i].saledate === twentytwo[103] || data[i].saledate === twentytwo[104] || data[i].saledate === twentytwo[105] || data[i].saledate === twentytwo[106] || data[i].saledate === twentytwo[107] || data[i].saledate === twentytwo[108] || data[i].saledate === twentytwo[109] || data[i].saledate === twentytwo[110] || data[i].saledate === twentytwo[111] || data[i].saledate === twentytwo[112] || data[i].saledate === twentytwo[113]
             || data[i].saledate === twentytwo[114] || data[i].saledate === twentytwo[115] || data[i].saledate === twentytwo[116] || data[i].saledate === twentytwo[117] || data[i].saledate === twentytwo[118] || data[i].saledate === twentytwo[119] || data[i].saledate === twentytwo[120] || data[i].saledate === twentytwo[1211] || data[i].saledate === twentytwo[122] || data[i].saledate === twentytwo[123] || data[i].saledate === twentytwo[124] || data[i].saledate === twentytwo[125] || data[i].saledate === twentytwo[126] || data[i].saledate === twentytwo[127] || data[i].saledate === twentytwo[128] || data[i].saledate === twentytwo[129] 
             || data[i].saledate === twentytwo[130] || data[i].saledate === twentytwo[131] || data[i].saledate === twentytwo[132] || data[i].saledate === twentytwo[133] || data[i].saledate === twentytwo[134] || data[i].saledate === twentytwo[135] || data[i].saledate === twentytwo[136] || data[i].saledate === twentytwo[137] || data[i].saledate === twentytwo[138] || data[i].saledate === twentytwo[139] || data[i].saledate === twentytwo[140] || data[i].saledate === twentytwo[141] || data[i].saledate === twentytwo[142] || data[i].saledate === twentytwo[143]
             || data[i].saledate === twentytwo[144] || data[i].saledate === twentytwo[145] || data[i].saledate === twentytwo[146] || data[i].saledate === twentytwo[147] || data[i].saledate === twentytwo[148] || data[i].saledate === twentytwo[149] || data[i].saledate === twentytwo[150] || data[i].saledate === twentytwo[151] || data[i].saledate === twentytwo[152] || data[i].saledate === twentytwo[153]) ){
             norfolkcounty.push(data[i]);
   
             // console.log(norfolkcounty);
             norfolkcounty.sort((a, b) => a.saleprice - b.saleprice);
             setWestmanor21(norfolkcounty);
    
    
             if (data[i].saleprice >= data[i].listprice){
              norfolkcountygreat.push(data[i]);
              norfolkcountygreat.sort((a, b) => a.saleprice - b.saleprice);
              setNorfolkcountygreat21(norfolkcountygreat);
             }
    
      
             let length = norfolkcounty.length;
            // console.log(length);
            document.getElementById('inject21').innerHTML = length;
      
           // document.getElementById('headerstatetop21').innerHTML = '5 month previous Total Market @ ' + `${newArray[0][0]}` + ' thru ' + `${newArray[0][153]}`; // showing 80...
      
            
            
             let saleprice = 0;
             let listprice = 0;
             let DOM = 0;
             let differential = 0;
             function add(item, counter, array){
              saleprice+=(item.saleprice); //spot on excel
              listprice+=(item.listprice); //NaN
              DOM+=(item.DOM); //spoton excel
              differential+=(item.differential); //NaN
             }
             norfolkcounty.forEach(add);
            // console.log(saleprice);
    
            const formatter = new Intl.NumberFormat('en-US', {
             style: 'currency',
             currency: 'USD',
             minimumFractionDigits: 0
            })
    
    
            let average = formatter.format(Math.round(saleprice / length) || 0);
            let averagelist = formatter.format(Math.round(listprice / length) || 0);
            let avgdom = Math.round(DOM / length );
            let avgdiff = formatter.format(Math.round(differential / length) || 0);
            //console.log(average);
           // console.log(averagelist);
            //console.log(avgdiff);
    
           
    
            
            document.getElementById('harley21').innerHTML = average;
            document.getElementById('oj21').innerHTML = averagelist; // this avg sale price number is correct...  
            document.getElementById('sultan21').innerHTML = avgdom;
            document.getElementById('lordof21').innerHTML = avgdiff;
      
          }
         // console.log(saleprice);
        }
      
          
          }
    
    
    
    
    
       
       
    
       const [titleavgdiff2, setTitleavgdiff2] = React.useState(0);
    
    
       async function brucewayne21b(e){ // 2021 function...
        //e.preventDefault();
    
        const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'})
        const data = await req.json()
        console.log(data); ////////////// all console.logs to here... 
    
      
       // firstdateIndex21();
    
       // let newArray = [...openarraytop21];
           // console.log(data);
           let greatless = []; // 1665 objects here
           let great = []; // 0 here
           let less = [];
           const maxmin = [];
           for (let i = 0; i<data.length; i++){
             if ((data[i].year === 2022 && data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}`) && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === twentytwo[0] || data[i].saledate === twentytwo[1] || data[i].saledate === twentytwo[2] || data[i].saledate === twentytwo[3] || data[i].saledate === twentytwo[4] || data[i].saledate === twentytwo[5] || data[i].saledate === twentytwo[6] || data[i].saledate === twentytwo[7] || data[i].saledate === twentytwo[8] || data[i].saledate === twentytwo[9] || data[i].saledate === twentytwo[10] || data[i].saledate === twentytwo[11] || data[i].saledate === twentytwo[12] || data[i].saledate === twentytwo[13] || data[i].saledate === twentytwo[14] || data[i].saledate === twentytwo[15] || data[i].saledate === twentytwo[16] || data[i].saledate === twentytwo[17] || data[i].saledate === twentytwo[18] || data[i].saledate === twentytwo[19] || data[i].saledate === twentytwo[20] || data[i].saledate === twentytwo[21] || data[i].saledate === twentytwo[22] || data[i].saledate === twentytwo[23] || data[i].saledate === twentytwo[24] || data[i].saledate === twentytwo[25] || data[i].saledate === twentytwo[26] || data[i].saledate === twentytwo[27] || data[i].saledate === twentytwo[28] || data[i].saledate === twentytwo[29] || data[i].saledate === twentytwo[30] || data[i].saledate === twentytwo[31] || data[i].saledate === twentytwo[32] || data[i].saledate === twentytwo[33] || data[i].saledate === twentytwo[34] || data[i].saledate === twentytwo[35] || data[i].saledate === twentytwo[36] || data[i].saledate === twentytwo[37] || data[i].saledate === twentytwo[38] || data[i].saledate === twentytwo[39] || data[i].saledate === twentytwo[40] || data[i].saledate === twentytwo[41] ||
               data[i].saledate === twentytwo[42] || data[i].saledate === twentytwo[43] || data[i].saledate === twentytwo[44] || data[i].saledate === twentytwo[45] || data[i].saledate === twentytwo[46] || data[i].saledate === twentytwo[47] || data[i].saledate === twentytwo[48] || data[i].saledate === twentytwo[49] || data[i].saledate === twentytwo[50] || data[i].saledate === twentytwo[51] || data[i].saledate === twentytwo[52] || data[i].saledate === twentytwo[53] || data[i].saledate === twentytwo[54] || data[i].saledate === twentytwo[55] ||data[i].saledate === twentytwo[56] || data[i].saledate === twentytwo[57] || data[i].saledate === twentytwo[58] || data[i].saledate === twentytwo[59] || data[i].saledate === twentytwo[60] || data[i].saledate === twentytwo[61] || data[i].saledate === twentytwo[62] || data[i].saledate === twentytwo[63] || data[i].saledate === twentytwo[64] || data[i].saledate === twentytwo[65] || data[i].saledate === twentytwo[66] || data[i].saledate === twentytwo[67] || data[i].saledate === twentytwo[68] || data[i].saledate === twentytwo[69] 
               || data[i].saledate === twentytwo[70] || data[i].saledate === twentytwo[71] || data[i].saledate === twentytwo[72] || data[i].saledate === twentytwo[73] || data[i].saledate === twentytwo[74] || data[i].saledate === twentytwo[75] || data[i].saledate === twentytwo[76] || data[i].saledate === twentytwo[77] || data[i].saledate === twentytwo[78] || data[i].saledate === twentytwo[79] || data[i].saledate === twentytwo[80] || data[i].saledate === twentytwo[81] || data[i].saledate === twentytwo[82] || data[i].saledate === twentytwo[83]
               || data[i].saledate === twentytwo[84] || data[i].saledate === twentytwo[85] || data[i].saledate === twentytwo[86] || data[i].saledate === twentytwo[87] || data[i].saledate === twentytwo[88] || data[i].saledate === twentytwo[89] || data[i].saledate === twentytwo[90] || data[i].saledate === twentytwo[91] || data[i].saledate === twentytwo[92] || data[i].saledate === twentytwo[93] || data[i].saledate === twentytwo[94] || data[i].saledate === twentytwo[95] || data[i].saledate === twentytwo[96] || data[i].saledate === twentytwo[97] || data[i].saledate === twentytwo[98] || data[i].saledate === twentytwo[99] 
               || data[i].saledate === twentytwo[100] || data[i].saledate === twentytwo[101] || data[i].saledate === twentytwo[102] || data[i].saledate === twentytwo[103] || data[i].saledate === twentytwo[104] || data[i].saledate === twentytwo[105] || data[i].saledate === twentytwo[106] || data[i].saledate === twentytwo[107] || data[i].saledate === twentytwo[108] || data[i].saledate === twentytwo[109] || data[i].saledate === twentytwo[110] || data[i].saledate === twentytwo[111] || data[i].saledate === twentytwo[112] || data[i].saledate === twentytwo[113]
               || data[i].saledate === twentytwo[114] || data[i].saledate === twentytwo[115] || data[i].saledate === twentytwo[116] || data[i].saledate === twentytwo[117] || data[i].saledate === twentytwo[118] || data[i].saledate === twentytwo[119] || data[i].saledate === twentytwo[120] || data[i].saledate === twentytwo[1211] || data[i].saledate === twentytwo[122] || data[i].saledate === twentytwo[123] || data[i].saledate === twentytwo[124] || data[i].saledate === twentytwo[125] || data[i].saledate === twentytwo[126] || data[i].saledate === twentytwo[127] || data[i].saledate === twentytwo[128] || data[i].saledate === twentytwo[129] 
               || data[i].saledate === twentytwo[130] || data[i].saledate === twentytwo[131] || data[i].saledate === twentytwo[132] || data[i].saledate === twentytwo[133] || data[i].saledate === twentytwo[134] || data[i].saledate === twentytwo[135] || data[i].saledate === twentytwo[136] || data[i].saledate === twentytwo[137] || data[i].saledate === twentytwo[138] || data[i].saledate === twentytwo[139] || data[i].saledate === twentytwo[140] || data[i].saledate === twentytwo[141] || data[i].saledate === twentytwo[142] || data[i].saledate === twentytwo[143]
               || data[i].saledate === twentytwo[144] || data[i].saledate === twentytwo[145] || data[i].saledate === twentytwo[146] || data[i].saledate === twentytwo[147] || data[i].saledate === twentytwo[148] || data[i].saledate === twentytwo[149] || data[i].saledate === twentytwo[150] || data[i].saledate === twentytwo[151] || data[i].saledate === twentytwo[152] || data[i].saledate === twentytwo[153])){
               greatless.push(data[i]); // 1665 objects here
               greatless.sort((a, b) => b.listprice - a.listprice);
             
           if (data[i].saleprice >= data[i].listprice){
             great.push(data[i]);
             //console.log(great);
             great.sort((a, b) => b.listprice - a.listprice);
           }
           if (data[i].saleprice < data[i].listprice){
             less.push(data[i]);
             //console.log(less);
             less.sort((a, b) => b.listprice - a.listprice);
           }
           let lengthgreat = great.length;
           //console.log(lengthgreat);
    
         
    
           let lengthless = greatless.length;
           //console.log(lengthless);
       
    
           let greatV = great.length;
       
           let greaterthan = Math.round((greatV / lengthless) * 100);
           document.getElementById('threebears21').innerHTML = `${greaterthan}%` 
              
           
    
           const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
           })
    
    
           let differential = 0;
           function add(item, counter, array){
            differential+=(item.differential); //NaN
           }
           great.forEach(add);
           console.log(differential);
    
    
           
          
           setTitleavgdiff2(formatter.format(Math.round(differential / greatV)));
           //setData(JSON.stringify(data));
           const pricemax = formatter.format(Math.max(...greatless.map(item => item.saleprice)));
           //console.log(pricemax);
           document.getElementById('max21').innerHTML = pricemax;
       
           const pricemin = formatter.format(Math.min(...greatless.map(item => item.saleprice)));
           //console.log(pricemin);
           document.getElementById('min21').innerHTML = pricemin;
            
          
          }
         }
        
      
      
       
      
          
          }
       
       
       
       //////////////////////////////////////// active function TOP //////////////////////////////////
   
   
   
   
   
       const [totalState, setTotalState] = React.useState([]);
   
       const [listratesPlanAavg, setListratesPlanAavg] = React.useState(0);
       const [listratesPlanBavg, setListratesPlanBavg] = React.useState(0);
       const [listratesPlanCavg, setListratesPlanCavg] = React.useState(0);
       const [listratesPlanDavg, setListratesPlanDavg] = React.useState(0);
   
       const [westmanor0, setWestmanor0] = React.useState([]);
   ////pagination...
   
   
   
   const [currentPage4, setCurrentPage4] = React.useState(0);
   
   
   
   function handlePageClick4({ selected: selectedPage}){
   setCurrentPage4(selectedPage);
   }
   
   
   
   
   const offset4 = currentPage4 * PER_PAGE;
   
   
   const currentPageData4 = westmanor0
   .slice(offset4, offset4 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
   
   <div className="modal" tabindex='0'>
   
   
        
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
         </div>
             
           </Popup>
         
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount4 = Math.ceil(westmanor0.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
       const [westmanor1, setWestmanor1] = React.useState([]);
   
       ////pagination...
   
   
   const [currentPage5, setCurrentPage5] = React.useState(0);
   
   
   
   function handlePageClick5({ selected: selectedPage}){
   setCurrentPage5(selectedPage);
   }
   
   const offset5 = currentPage5 * PER_PAGE;
   
   const currentPageData5 = westmanor1
   .slice(offset5, offset5 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
   
   <div className="modal" tabindex='0'>
   
        
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
         </div>
             
           </Popup>
         
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount5 = Math.ceil(westmanor1.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
       const [westmanor2, setWestmanor2] = React.useState([]); 
   
        ////pagination...
   
   
   const [currentPage6, setCurrentPage6] = React.useState(0);
   
   
   
   function handlePageClick6({ selected: selectedPage}){
   setCurrentPage6(selectedPage);
   }
   
   const offset6 = currentPage6 * PER_PAGE;
   
   const currentPageData6 = westmanor2
   .slice(offset6, offset6 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
   
   <div className="modal" tabindex='0'>
   
        
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
         </div>
             
           </Popup>
         
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount6 = Math.ceil(westmanor2.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
       const [westmanor3, setWestmanor3] = React.useState([]);
   
        ////pagination...
   
   
   const [currentPage7, setCurrentPage7] = React.useState(0);
   
   
   
   function handlePageClick7({ selected: selectedPage}){
   setCurrentPage7(selectedPage);
   }
   
   const offset7 = currentPage7 * PER_PAGE;
   
   const currentPageData7 = westmanor3
   .slice(offset7, offset7 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
   
   <div className="modal" tabindex='0'>
   
        
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
         </div>
             
           </Popup>
         
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount7 = Math.ceil(westmanor3.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
   
   
   
   
    
   
   async function ghostreconcampaign(e){ 
     //e.preventDefault();
   
   
   
   
     const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'})
       const data = await req.json()
       console.log(data); ////////////// all console.logs to here... 
           let sales = [];
           let threek = [];
           let fourk = [];
           let sevenk = [];
           let sevenfivek = [];
           
   
           let listsales = [];
           let listthreek = [];
           let listfourk = [];
           let listsevenk = [];
           let listsevenfivek = [];
   
   
           let listA = [];
           let listB = [];
           let listC = [];
           let listD = [];
   
           for (let i = 0; i<data.length; i++){
             if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
               sales.push(data[i]);
               //console.log(sales);
               sales.sort((a, b) => b.listprice - a.listprice);
               if (data[i].listprice > 100000 && data[i].listprice <= 349999){
                 threek.push(data[i]);
                 threek.sort((a, b) => b.listprice - a.listprice);
                 setWestmanor0(threek);
               }
               if (data[i].listprice > 349999 && data[i].listprice <= 499999){
                 fourk.push(data[i]);
                 fourk.sort((a, b) => b.listprice - a.listprice);
                 setWestmanor1(fourk);
               }
               if (data[i].listprice > 499999 && data[i].listprice <= 749999){
                 sevenk.push(data[i]);
                 sevenk.sort((a, b) => b.listprice - a.listprice);
                 setWestmanor2(sevenk);
               }
               if (data[i].listprice > 749999){
                sevenfivek.push(data[i]);
                sevenfivek.sort((a, b) => b.listprice - a.listprice);
                setWestmanor3(sevenfivek);
               }
   
   
               if (data[i].listprice > 100000 && data[i].listprice <= 349999){
                 listthreek.push(data[i]);
                 listthreek.sort((a, b) => b.listprice - a.listprice);
               }
               if (data[i].listprice > 349999 && data[i].listprice <= 499999){
                 listfourk.push(data[i]);
                 listfourk.sort((a, b) => b.listprice - a.listprice);
               }
               if (data[i].listprice > 499999 && data[i].listprice <= 749999){
                 listsevenk.push(data[i]);
                 listsevenk.sort((a, b) => b.listprice - a.listprice);
               }
               if (data[i].listprice > 749999){
                 listsevenfivek.push(data[i]);
                 listsevenfivek.sort((a, b) => b.listprice - a.listprice);
               }
   
               if (data[i].listprice > 100000 && data[i].listprice <= 349999){
                 listA.push(data[i]);
                 listA.sort((a, b) => b.listprice - a.listprice);
               }
               if (data[i].listprice > 349999 && data[i].listprice <= 499999){
                 listB.push(data[i]);
                 listB.sort((a, b) => b.listprice - a.listprice);
               }
               if (data[i].listprice > 499999 && data[i].listprice <= 749999){
                 listC.push(data[i]);
                 listC.sort((a, b) => b.listprice - a.listprice);
               }
               if (data[i].listprice > 749999){
                 listD.push(data[i]);
                 listD.sort((a, b) => b.listprice - a.listprice);
               }
   
             
       
               
               const sales3k = threek.length;
               const sales4k = fourk.length;
               const sales7k = sevenk.length;
               const sales75k = sevenfivek.length;
               const shawshank9 = sales.length;
   
               const abuA = listA.length;
               const abuB = listB.length;
               const abuC = listC.length;
               const abuD = listD.length; 
   
               const listsales3k = listthreek.length;
               const listsales4k = listfourk.length;
               const listsales7k = listsevenk.length;
               const listsales75k = listsevenfivek.length;
       
       
               document.getElementById('threek').innerHTML = sales3k;
               document.getElementById('fourk').innerHTML = sales4k;
               document.getElementById('sevenk').innerHTML = sales7k;
               document.getElementById('sevenfivek').innerHTML = sales75k;
       
              // let DOM = 0;
              // let DOM2 = 0;
             //  let DOM3 = 0;
              // let DOM4 = 0;
              // function add(item, counter, array){
              //  DOM+=(item.DOM);//spot on excel
              //  DOM2+=(item.DOM);
              //  DOM3+=(item.DOM);
             //   DOM4+=(item.DOM);
             //  }
             //  threek.forEach(add); /////////////// double check the avg DOM JS...
               //console.log(DOM);
            //  let average3k = Math.round(DOM / sales3k);
            //  document.getElementById('s3k').innerHTML = average3k;
            //  fourk.forEach(add);
              //let average4k = Math.round(DOM2 / sales4k);
             // document.getElementById('s4k').innerHTML = average4k;
             // sevenk.forEach(add);
             // let average7k = Math.round(DOM3 / sales7k);
            //  document.getElementById('s7k').innerHTML = average7k;
            //  sevenfivek.forEach(add);
            //  let average75k = Math.round(DOM4 / sales75k);
             // document.getElementById('s75k').innerHTML = average75k;
   
               ////////////////////////////////////////
   
               
              
              
               let average3k = Math.round((sales3k / shawshank9) * 100);
               document.getElementById('s3k').innerHTML = `${average3k}%`;
              
               let average4k = Math.round((sales4k / shawshank9) * 100);
               document.getElementById('s4k').innerHTML = `${average4k}%`;
               
               let average7k = Math.round((sales7k / shawshank9) * 100);
               document.getElementById('s7k').innerHTML = `${average7k}%`;
              
               let average75k = Math.round((sales75k / shawshank9) * 100);
               document.getElementById('s75k').innerHTML = `${average75k}%`;
              
       
   
   
                const formatter = new Intl.NumberFormat('en-US', {
                 style: 'currency',
                 currency: 'USD',
                 minimumFractionDigits: 0
                })
        
        ///////////////////////////////////////////////////
                let differential = 0;
         
                function add1(item, counter, array){
                        differential+=(item.listprice); //NaN
                       }
     
                       listA.forEach(add1);
     
                       let differentialB = 0;
                       function add2(item, counter, array){
                         differentialB+=(item.listprice);
                       }
     
                       listB.forEach(add2);
     
                       let differentialC = 0;
                       function add3(item, counter, array){
                         differentialC+=(item.listprice);
                       }
     
                       listC.forEach(add3);
     
                       let differentialD = 0;
                       function add4(item, counter, array){
                         differentialD+=(item.listprice);
                       }
     
                       listD.forEach(add4);
     
                      
                      
                     
        
                       let listAavgdiff = formatter.format(Math.round(differential / listA.length) || 0);
                       let listBavgdiff = formatter.format(Math.round(differentialB / listB.length) || 0);
                       let listCavgdiff = formatter.format(Math.round(differentialC / listC.length) || 0);
                       let listDavgdiff = formatter.format(Math.round(differentialD / listD.length) || 0);
   
                       document.getElementById('avglist3k').innerHTML = listAavgdiff;
                       document.getElementById('avglist4k').innerHTML = listBavgdiff;
                       document.getElementById('avglist7k').innerHTML = listCavgdiff;
                       document.getElementById('avglist75k').innerHTML = listDavgdiff;
                     
     
     
     
     
      
                       setListratesPlanAavg(formatter.format(Math.round(differential / listA.length)) || 0); //title
                       setListratesPlanBavg(formatter.format(Math.round(differentialB / listB.length)) || 0); //title
                       setListratesPlanCavg(formatter.format(Math.round(differentialC / listC.length)) || 0); //title
                       setListratesPlanDavg(formatter.format(Math.round(differentialD / listD.length)) || 0); //title
                      
                      
                      
              
        
        
   
   
   
   
             }
       
               }  //setData(JSON.stringify(data));
         }
       
       ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
   
      
      
      
      
      //var [pricevalue, setPricevalue] = React.useState(0);
      //var [pricevalue2, setPricevalue2] = React.useState(0);
      
      ///////////////////////////////////////////////////////////////////////////////
      //const [county3, setCounty3] = React.useState('');
      //const [town2, setTown2] = React.useState('');
    
      const [totallessdiff14, setTotallessdiff14] = React.useState(0);
      const [totallessdiff30, setTotallessdiff30] = React.useState(0);
      const [totallessdiff45, setTotallessdiff45] = React.useState(0);
      const [totallessdiff90, setTotallessdiff90] = React.useState(0);
      const [totallessdiff120, setTotallessdiff120] = React.useState(0);
      const [totallessdiff121, setTotallessdiff121] = React.useState(0);
   
      const [belowdiffratesPlanAavg, setBelowdiffratesPlanAavg] = React.useState(0);
      const [belowdiffratesPlanBavg, setBelowdiffratesPlanBavg] = React.useState(0);
      const [belowdiffratesPlanCavg, setBelowdiffratesPlanCavg] = React.useState(0);
      const [belowdiffratesPlanDavg, setBelowdiffratesPlanDavg] = React.useState(0);
      const [belowdiffratesPlanEavg, setBelowdiffratesPlanEavg] = React.useState(0);
      const [belowdiffratesPlanFavg, setBelowdiffratesPlanFavg] = React.useState(0);
   
   
      
      const [subaruWRX, setSubaruWRX] = React.useState([]);
   ////pagination...
   
   
   const [currentPage8, setCurrentPage8] = React.useState(0);
   
   
   
   function handlePageClick8({ selected: selectedPage}){
   setCurrentPage8(selectedPage);
   }
   
   const offset8 = currentPage8 * PER_PAGE;
   
   const currentPageData8 = subaruWRX
   .slice(offset8, offset8 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
    <br/>
    <br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal" tabindex='0'>
   
          
   <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    
    <br/>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    
   
    </div>
    </ul>
   
    
    
   ));
   
   const pageCount8 = Math.ceil(subaruWRX.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   const [subaruWRX1, setSubaruWRX1] = React.useState([]);
   
   ////pagination...
   
   
   const [currentPage9, setCurrentPage9] = React.useState(0);
   
   
   
   function handlePageClick9({ selected: selectedPage}){
   setCurrentPage9(selectedPage);
   }
   
   const offset9 = currentPage9 * PER_PAGE;
   
   const currentPageData9 = subaruWRX1
   .slice(offset9, offset9 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
        <Popup
          trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
          position="center"
          modal
          nested       
        >
   
   <div className="modal" tabindex='0'>
   
     
      <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
      </div>
          
        </Popup>
      
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount9 = Math.ceil(subaruWRX1.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   const [subaruWRX2, setSubaruWRX2] = React.useState([]);
   
   ////pagination...
   
   
   const [currentPage10, setCurrentPage10] = React.useState(0);
   
   
   
   function handlePageClick10({ selected: selectedPage}){
   setCurrentPage10(selectedPage);
   }
   
   const offset10 = currentPage10 * PER_PAGE;
   
   const currentPageData10 = subaruWRX2
   .slice(offset10, offset10 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
        <Popup
          trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
          position="center"
          modal
          nested       
        >
   
   <div className="modal" tabindex='0'>
   
     
      <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
      </div>
          
        </Popup>
      
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount10 = Math.ceil(subaruWRX2.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
      const [subaruWRX3, setSubaruWRX3] = React.useState([]);
   ////pagination...
   
   
   const [currentPage11, setCurrentPage11] = React.useState(0);
   
   
   
   function handlePageClick11({ selected: selectedPage}){
   setCurrentPage11(selectedPage);
   }
   
   const offset11 = currentPage11 * PER_PAGE;
   
   const currentPageData11 = subaruWRX3
   .slice(offset11, offset11 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
          <Popup
            trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
            position="center"
            modal
            nested       
          >
   
   <div className="modal" tabindex='0'>
   
       
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
        </div>
            
          </Popup>
        
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount11 = Math.ceil(subaruWRX3.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
      const [subaruWRX4, setSubaruWRX4] = React.useState([]);
      ////pagination...
   
   
   const [currentPage12, setCurrentPage12] = React.useState(0);
   
   
   
   function handlePageClick12({ selected: selectedPage}){
   setCurrentPage12(selectedPage);
   }
   
   const offset12 = currentPage12 * PER_PAGE;
   
   const currentPageData12 = subaruWRX4
   .slice(offset12, offset12 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
          <Popup
            trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
            position="center"
            modal
            nested       
          >
   
   <div className="modal" tabindex='0'>
   
       
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
        </div>
            
          </Popup>
        
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount12 = Math.ceil(subaruWRX4.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
      const [subaruWRX5, setSubaruWRX5] = React.useState([]);
   
       ////pagination...
   
   
   const [currentPage13, setCurrentPage13] = React.useState(0);
   
   
   
   function handlePageClick13({ selected: selectedPage}){
   setCurrentPage13(selectedPage);
   }
   
   const offset13 = currentPage13 * PER_PAGE;
   
   const currentPageData13 = subaruWRX5
   .slice(offset13, offset13 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
          <Popup
            trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
            position="center"
            modal
            nested       
          >
   
   <div className="modal" tabindex='0'>
   
       
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
        </div>
            
          </Popup>
        
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount13 = Math.ceil(subaruWRX5.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
   
   
   
   
   
   
      const [county3, setCounty3] = React.useState('');
      const [town2, setTown2] = React.useState('');
      const [selectedState3, setSelectedState3] = React.useState(''); // MA
   
     const availableState3 = GLOBE1.states.find((s) => s.name === county3); // that is what this says...
     const availableTowns3 = availableState3?.counties?.find( //
     (c) => c.name === selectedState3 //
     ); //
   
   
    
      var [pricevalue, setPricevalue] = React.useState(0);
       var [pricevalue2, setPricevalue2] = React.useState(0); 
   
       const [avgsalesavg, setAvgsalesavg] = React.useState(0);
       const [listsaleslist, setListsaleslist] = React.useState();
       const [salesalessale, setSalesalessale] = React.useState();
       
   
   
       
       async function ActivePopulateQuote(e){ //this functions onClick...
         const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'}) 
         const data = await req.json();
         //if (data.status ==='ok'){
           console.log(data) // all 15k objects...
          //console.log(data);
          let sales = [];
          let fourteen = [];
          let thirty = [];
          let fortyfive = [];
          let ninety = [];
          let onetwenty = [];
          let onetwoone = [];
      
          
              let great14 = []; // 0 here
              let great30 = [];
              let great45 = [];
              let great90 = [];
              let great120 = [];
              let great121 = [];
   
              let list14 = []; // 0 here
              let list30 = [];
              let list45 = [];
              let list90 = [];
              let list120 = [];
              let list121 = [];
   
           
              
   
              let averagelistprice = [];
              
          for (let i = 0; i<data.length; i++){
            if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
              sales.push(data[i]);
              sales.sort((a, b) => b.listprice - a.listprice);
              console.log(sales);  
              if (data[i].DOM <= 14){
                fourteen.push(data[i]);
                console.log(fourteen);
                fourteen.sort((a, b) => b.listprice - a.listprice);
                setSubaruWRX(fourteen);
                //fourteen[i].differential
              }
              if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}`){
               averagelistprice.push(data[i]);
               console.log(averagelistprice);
               //fourteen[i].differential
             }
              if (data[i].DOM > 14 && data[i].DOM <= 30){
                thirty.push(data[i]);
                thirty.sort((a, b) => b.listprice - a.listprice);
                setSubaruWRX1(thirty);
              }
              if (data[i].DOM > 30 && data[i].DOM <= 45){
                fortyfive.push(data[i]);
                fortyfive.sort((a, b) => b.listprice - a.listprice);
                setSubaruWRX2(fortyfive);
              }
              if (data[i].DOM > 45 && data[i].DOM <= 90){
                ninety.push(data[i]);
                console.log(ninety);
                ninety.sort((a, b) => b.listprice - a.listprice);
                setSubaruWRX3(ninety);
              }
              if (data[i].DOM > 90 && data[i].DOM <= 120){
                onetwenty.push(data[i]);
                onetwenty.sort((a, b) => b.listprice - a.listprice);
                setSubaruWRX4(onetwenty);
              }
              if (data[i].DOM > 120){
                onetwoone.push(data[i]);
                onetwoone.sort((a, b) => b.listprice - a.listprice);
                setSubaruWRX5(onetwoone);
              }
              //if (data[i].saleprice >= data[i].listprice && data[i].DOM <= 14 ){
              //  great14.push(data[i]);
              //  console.log(great14);
             // }
             // if (data[i].saleprice >= data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
             //   great30.push(data[i]);
             // }
             // if (data[i].saleprice >= data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
              //  great45.push(data[i]);
             // }
              //if (data[i].saleprice >= data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
              //  great90.push(data[i]);
             // }
            //  if (data[i].saleprice >= data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
              //  great120.push(data[i]);
             // }
             // if (data[i].saleprice >= data[i].listprice && data[i].DOM > 120){
             if (data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
               list30.push(data[i]);
               list30.sort((a, b) => b.listprice - a.listprice);
             }
             if (data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
               list45.push(data[i]);
               list45.sort((a, b) => b.listprice - a.listprice);
             }
             if (data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
               list90.push(data[i]);
               list90.sort((a, b) => b.listprice - a.listprice);
             }
             if (data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
               list120.push(data[i]);
               list120.sort((a, b) => b.listprice - a.listprice);
             }
             if (data[i].listprice && data[i].DOM > 120){
               list121.push(data[i]);
               list121.sort((a, b) => b.listprice - a.listprice);
             }
            
      
   
           
   
   
   
              let sales11 = sales.length;
              let sale14 = fourteen.length; //provides the length of all sales above=
              let sale30 = thirty.length;
              let sale45 = fortyfive.length;
              let sale90 = ninety.length;
              let sale120 = onetwenty.length;
              let sale121 = onetwoone.length;
      
      
              let lengthgreat14 = great14.length; //provides the length of sales above= list via specified DOM 
              let lengthgreat30 = great30.length;
              let lengthgreat45 = great45.length;
              let lengthgreat90 = great90.length;
              let lengthgreat120 = great120.length;
              let lengthgreat121 = great121.length;
      
              const atabove14 =  Math.round((sale14 / sales11) * 100);
              const atabove30 =  Math.round((sale30 / sales11)  * 100);
              const atabove45 =  Math.round((sale45 / sales11)  * 100);
              const atabove90 =  Math.round((sale90 / sales11)  * 100);
              const atabove120 =  Math.round((sale120 / sales11)  * 100);
              const atabove121 =  Math.round((sale121 / sales11)  * 100);
   
              let listAlength = list14.length; //provides the length of sales above= list via specified DOM 
              let listBlength = list30.length;
              let listClength = list45.length;
              let listDlength = list90.length;
              let listElength = list120.length;
              let listFlength = list121.length;
      
      
      
   
         
          
      
      
              document.getElementById('s14').innerHTML = sale14;
              document.getElementById('s30').innerHTML = sale30;
              document.getElementById('s45').innerHTML = sale45;
              document.getElementById('s90').innerHTML = sale90;
              document.getElementById('s120').innerHTML = sale120;
              document.getElementById('s121').innerHTML = sale121;
      
              document.getElementById('r14').innerHTML = `${atabove14}%`;
              document.getElementById('r30').innerHTML = `${atabove30}%`;
              document.getElementById('r45').innerHTML = `${atabove45}%`;
              document.getElementById('r90').innerHTML = `${atabove90}%`;
              document.getElementById('r120').innerHTML = `${atabove120}%`;
              document.getElementById('r121').innerHTML = `${atabove121}%`;
    
              document.getElementById('fr14').innerHTML = `${sale14}/ ${sales11}`;
              document.getElementById('fr30').innerHTML = `${sale30} / ${sales11}`;
              document.getElementById('fr45').innerHTML = `${sale45} / ${sales11}`;
              document.getElementById('fr90').innerHTML = `${sale90} / ${sales11}`;
              document.getElementById('fr120').innerHTML = `${sale120} / ${sales11}`;
              document.getElementById('fr121').innerHTML = `${sale121} / ${sales11}`;
   
   
   
              const formatter = new Intl.NumberFormat('en-US', {
               style: 'currency',
               currency: 'USD',
               minimumFractionDigits: 0
              })
      
      ///////////////////////////////////////////////////
              let differential = 0;
       
              function add(item, counter, array){
                      differential+=(item.listprice); //NaN
                     }
   
                     list14.forEach(add);
   
                     let differentialB = 0;
                     function add2(item, counter, array){
                       differentialB+=(item.listprice);
                     }
   
                     list30.forEach(add2);
   
                     let differentialC = 0;
                     function add3(item, counter, array){
                       differentialC+=(item.listprice);
                     }
   
                     list45.forEach(add3);
   
                     let differentialD = 0;
                     function add4(item, counter, array){
                       differentialD+=(item.listprice);
                     }
   
                     list90.forEach(add4);
   
                     let differentialE = 0;
                     function add5(item, counter, array){
                       differentialE+=(item.listprice);
                     }
   
                     list120.forEach(add5);
   
                     let differentialF = 0;
                     function add6(item, counter, array){
                       differentialF+=(item.listprice);
                     }
   
                     list121.forEach(add6);
   
   
                     let differential13 = 0;
                     function add13(item, counter, array){
                      differential13+=(item.DOM);
                     }
                     sales.forEach(add13);
                     
          
                     let differential15 = 0;
                     function add15(item, counter, array){
                      differential15+=(item.listprice);
                     }
                     averagelistprice.forEach(add15);
          
                    
                   
      
                     let listAavgdiff = formatter.format(Math.round(differential / listAlength) || 0);
                     let listBavgdiff = formatter.format(Math.round(differentialB / listBlength) || 0);
                     let listCavgdiff = formatter.format(Math.round(differentialC / listClength) || 0);
                     let listDavgdiff = formatter.format(Math.round(differentialD / listDlength) || 0);
                     let listEavgdiff = formatter.format(Math.round(differentialE / listElength) || 0);
   
   
   
   
    
                     setBelowdiffratesPlanAavg(formatter.format(Math.round(differential / listAlength))); //title
                     setBelowdiffratesPlanBavg(formatter.format(Math.round(differentialB / listBlength))); //title
                     setBelowdiffratesPlanCavg(formatter.format(Math.round(differentialC / listClength))); //title
                     setBelowdiffratesPlanDavg(formatter.format(Math.round(differentialD / listDlength))); //title
                     setBelowdiffratesPlanEavg(formatter.format(Math.round(differentialE / listElength))); //title
                     setBelowdiffratesPlanFavg(formatter.format(Math.round(differentialF / listFlength))); //title
   
                    
             
                     
           
           
           
                      let avgDOMpopulate = Math.round(differential13 / sales.length);
                      let avgListpopulate = formatter.format(Math.round(differential15 / averagelistprice.length));
           
           
           
                      document.getElementById('avgListpopulate').innerHTML = `${avgListpopulate} List`;
                      document.getElementById('avgDOMpopulate').innerHTML = `${avgDOMpopulate} Days`;
           
            
      
      
                     }
                   }
                 }
    
    
   
   
   
   
   
   
   
   
   
                 const [onebedroom, setOnebedroom] = React.useState([]);
   
                  ////pagination...
   
   
   const [currentPage14, setCurrentPage14] = React.useState(0);
   
   
   
   function handlePageClick14({ selected: selectedPage}){
   setCurrentPage14(selectedPage);
   }
   
   const offset14 = currentPage14 * PER_PAGE;
   
   const currentPageData14 = onebedroom
   .slice(offset14, offset14 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
          <Popup
            trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
            position="center"
            modal
            nested       
          >
   
   <div className="modal" tabindex='0'>
   
       
       <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
        </div>
            
          </Popup>
        
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount14 = Math.ceil(onebedroom.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
   
                
            
   const [twobedroom, setTwobedroom] = React.useState([]);
            
   ////pagination...
   
   
   const [currentPage15, setCurrentPage15] = React.useState(0);
   
   
   
   function handlePageClick15({ selected: selectedPage}){
   setCurrentPage15(selectedPage);
   }
   
   const offset15 = currentPage15 * PER_PAGE;
   
   const currentPageData15 = twobedroom
   .slice(offset15, offset15 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
   <Popup
   trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
   position="center"
   modal
   nested       
   >
   
   <div className="modal" tabindex='0'>
   
   
   <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
   </div>
   
   </Popup>
   
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount15 = Math.ceil(twobedroom.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
            
       const [threebedroom, setThreebedroom] = React.useState([]);
            
              
            ////pagination...
   
   
   const [currentPage16, setCurrentPage16] = React.useState(0);
   
   
   
   function handlePageClick16({ selected: selectedPage}){
   setCurrentPage16(selectedPage);
   }
   
   const offset16 = currentPage16 * PER_PAGE;
   
   const currentPageData16 = threebedroom
   .slice(offset16, offset16 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
   <Popup
   trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
   position="center"
   modal
   nested       
   >
   
   <div className="modal" tabindex='0'>
   
   
   <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
   </div>
   
   </Popup>
   
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount16 = Math.ceil(threebedroom.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
                
                const [fourbedroom, setFourbedroom] = React.useState([]);
            
                 ////pagination...
   
   
   const [currentPage17, setCurrentPage17] = React.useState(0);
   
   
   
   function handlePageClick17({ selected: selectedPage}){
   setCurrentPage17(selectedPage);
   }
   
   const offset17 = currentPage17 * PER_PAGE;
   
   const currentPageData17 = fourbedroom
   .slice(offset17, offset17 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
   <Popup
   trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
   position="center"
   modal
   nested       
   >
   
   <div className="modal" tabindex='0'>
   
   
   <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
   </div>
   
   </Popup>
   
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount17 = Math.ceil(fourbedroom.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
                
            
            
            
                const [fivebedroom, setFivebedroom] = React.useState([]);
            
                  ////pagination...
   
   
   const [currentPage18, setCurrentPage18] = React.useState(0);
   
   
   
   function handlePageClick18({ selected: selectedPage}){
   setCurrentPage18(selectedPage);
   }
   
   const offset18 = currentPage18 * PER_PAGE;
   
   const currentPageData18 = fivebedroom
   .slice(offset18, offset18 + PER_PAGE)
   .map((item, index) => (
   
   <ul data-index={index}>
   <br/>
   <div className='borders'>
   <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img>
   <br/>
   
   <Popup
   trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td>}
   position="center"
   modal
   nested       
   >
   
   <div className="modal" tabindex='0'>
   
   
   <div className="header">West Manor</div>
              <div>
                
              
      
              <ul data-index={index}>
      <br/>
      <div className='borders'>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photosMAIN}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[1]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[2]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[3]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[4]}></img><br/>
       <img style={{zIndex: '7', height: '375px', width: '715px'}} src={item.photos[5]}></img>
       <br/>
       <br/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.streetAddress}, {item.townstate}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td><br/>
       <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   </div>
   </ul>
   
   
   
   </div>
   </div>
   
   </Popup>
   
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {item.bedrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {item.bathrooms}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   
   <br/>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
   
   </div>
   </ul>
   
   
   
   ));
   
   const pageCount18 = Math.ceil(fivebedroom.length / PER_PAGE); 
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
         const [belowdiffratesPlanAavgbed, setBelowdiffratesPlanAavgbed] = React.useState();
         const [belowdiffratesPlanBavgbed, setBelowdiffratesPlanBavgbed] = React.useState();
         const [belowdiffratesPlanCavgbed, setBelowdiffratesPlanCavgbed] = React.useState();
         const [belowdiffratesPlanDavgbed, setBelowdiffratesPlanDavgbed] = React.useState();
         const [belowdiffratesPlanEavgbed, setBelowdiffratesPlanEavgbed] = React.useState();
   
   
                 async function ActivePopulateQuoteBeds(e){ //this functions onClick...
                   const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'}) 
                   const data = await req.json();
                   //if (data.status ==='ok'){
                     console.log(data) // all 15k objects...
                    //console.log(data);
                    let sales = [];
                
                
                        let onebed = [];
                        let twobed = [];
                        let threebed = [];
                        let fourbed = [];
                        let fivebed = [];
                        
             
                        
                    for (let i = 0; i<data.length; i++){
                      if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
                        sales.push(data[i]);
                        console.log(sales);
                        sales.sort((a, b) => b.listprice - a.listprice);
                      if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && data[i].bedrooms === 1){
                         onebed.push(data[i]);
                         console.log(onebed);
                         onebed.sort((a, b) => b.listprice - a.listprice);
                         setOnebedroom(onebed);
                       }
                      if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && data[i].bedrooms === 2){
                         twobed.push(data[i]);
                         console.log(twobed);
                         twobed.sort((a, b) => b.listprice - a.listprice);
                         setTwobedroom(twobed);
                       }
                      if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && data[i].bedrooms === 3){
                         threebed.push(data[i]);
                         console.log(threebed);
                         threebed.sort((a, b) => b.listprice - a.listprice);
                         setThreebedroom(threebed);
                       }
                      if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!"  && data[i].bedrooms === 4){
                         fourbed.push(data[i]);
                         console.log(fourbed);
                         fourbed.sort((a, b) => b.listprice - a.listprice);
                         setFourbedroom(fourbed);
                       }
                     if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && data[i].bedrooms >= 5){ 
                         fivebed.push(data[i]);
                         console.log(fivebed);
                         fivebed.sort((a, b) => b.listprice - a.listprice);
                         setFivebedroom(fivebed);
                       }
             
                
             
                        
             
                       let onebedlength = onebed.length;
                       let twobedlength = twobed.length;
                       let threebedlength = threebed.length;
                       let fourbedlength = fourbed.length;
                       let fivebedlength = fivebed.length;
             
             
   
                
                
                
             
                        document.getElementById('onebed').innerHTML = onebedlength;
                        document.getElementById('twobed').innerHTML = twobedlength;
                        document.getElementById('threebed').innerHTML = threebedlength;
                        document.getElementById('fourbed').innerHTML = fourbedlength;
                        document.getElementById('fivebed').innerHTML = fivebedlength;
   
   
                        const formatter = new Intl.NumberFormat('en-US', {
                         style: 'currency',
                         currency: 'USD',
                         minimumFractionDigits: 0
                        })
                
                ///////////////////////////////////////////////////
                        let differential = 0;
                 
                        function add(item, counter, array){
                                differential+=(item.listprice); //NaN
                               }
             
                               onebed.forEach(add);
             
                               let differentialB = 0;
                               function add2(item, counter, array){
                                 differentialB+=(item.listprice);
                               }
             
                               twobed.forEach(add2);
             
                               let differentialC = 0;
                               function add3(item, counter, array){
                                 differentialC+=(item.listprice);
                               }
             
                               threebed.forEach(add3);
             
                               let differentialD = 0;
                               function add4(item, counter, array){
                                 differentialD+=(item.listprice);
                               }
             
                               fourbed.forEach(add4);
             
                               let differentialE = 0;
                               function add5(item, counter, array){
                                 differentialE+=(item.listprice);
                               }
             
                               fivebed.forEach(add5);
             
                               
                               
                    
                    
                              
                             
                
                               let listAavgdiff = formatter.format(Math.round(differential / onebedlength) || 0);
                               let listBavgdiff = formatter.format(Math.round(differentialB / twobedlength) || 0);
                               let listCavgdiff = formatter.format(Math.round(differentialC / threebedlength) || 0);
                               let listDavgdiff = formatter.format(Math.round(differentialD / fourbedlength) || 0);
                               let listEavgdiff = formatter.format(Math.round(differentialE / fivebedlength) || 0);
             
             
             
             
              
                               setBelowdiffratesPlanAavgbed(formatter.format(Math.round(differential / onebedlength))); //title
                               setBelowdiffratesPlanBavgbed(formatter.format(Math.round(differentialB / twobedlength))); //title
                               setBelowdiffratesPlanCavgbed(formatter.format(Math.round(differentialC / threebedlength))); //title
                               setBelowdiffratesPlanDavgbed(formatter.format(Math.round(differentialD / fourbedlength))); //title
                               setBelowdiffratesPlanEavgbed(formatter.format(Math.round(differentialE / fivebedlength))); //title
                       
                    
                
                
                  
                
                
                               }
                             }
                           }
   
   
   
   
     ///////////////////////////////////////////////////////////////////////////////////////////////////
   
   
     
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   function myFunction(){
     var popup = document.getElementById('toggle');
     popup.classList.toggle("show");
   }
   
   
   const [julius, setJulius] = React.useState([]);
const [caesar, setCaesar] = React.useState([]);

const [linda, setLinda] = React.useState(0);
const [ann, setAnn] = React.useState(0);


async function NoPlaceLikeHome(e){ //this functions onClick...

 const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'}) 
 const data = await req.json();
 //if (data.status ==='ok'){
   console.log(data) // all 15k objects...
  //console.log(data);
  let sales = [];

  let filters = [];

  // new array... <==  ********** .filter(sales);
      
  for (let i = 0; i<data.length; i++){
    if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
      sales.push(data[i]);
          sales.sort((a, b) => a.listprice - b.listprice);
      filters.push(data[i]);
      filters.sort((a,b) => a.listprice - b.listprice);
     /// setJulius(filters.indexOf(document.getElementById('toggle')).splice(filters.indexOf(document.getElementById('toggle')),1));



    
      
  

 const status  = document.getElementById('noplacelikehome');

 let html = '';

 const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 0
  })


            // html = '<div>';
             sales.forEach(item => {                    
                 html += `
                 <div class='listprice64' tabindex='0'>
                 <img src="${item.photosMAIN}" width="100%" height="100%"/>
                 <a id='toggle' onclick='alert(${sales.indexOf(item)})' class='listpricetext64'>${formatter.format(item.listprice)} </a>
                   <p>
                          ${item.bedrooms} bds
                          ${item.bathrooms} ba
                          ${item.livingArea} sqft<br>
                          ${item.address}<br>
                          ${item.townstate} ${item.zipcode}n<br>
                     </p>
                
                 </div>
                 `;
            
           //  html += '</div">';



             status.innerHTML = html;


            

            

              

             setJulius(sales);



            


            // setJulius(filters.indexOf(sales).splice(item,1));
           
      

             })


          


}



}
}













           




async function Toto(e){ //this functions onClick...

 const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS', {mode: 'cors'}) 
 const data = await req.json();
 //if (data.status ==='ok'){
   console.log(data) // all 15k objects...
  //console.log(data);
  let sales = [];

  let filters = [];
      
  for (let i = 0; i<data.length; i++){
    if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice >= `${pricevalue}` && data[i].listprice < `${pricevalue2}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
  
     sales.push(data[i]);
      console.log(sales);  
      sales.sort((a, b) => b.listprice - a.listprice);

      filters.push(data[i]);
      filters.sort((a, b) => b.listprice - a.listprice);

     //  setCaesar(filters.indexOf(document.getElementById('toggle')).splice(filters.indexOf(document.getElementById('toggle')), 1));
     
  

 const status  = document.getElementById('toto');

 let html = '';

 const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 0
  })


             html = '<div>';
             sales.forEach(item => {                    
                 html += `
                     <div class='listprice64' tabindex='0'>
                     <img src="${item.photosMAIN}" width="100%" height="100%"/>
                    
                         <div id='toggle' onclick='alert(${sales.indexOf(item)})' class='listpricetext64'>${formatter.format(item.listprice)}</div>
                         <p>
                         ${item.bedrooms} bds
                         ${item.bathrooms} ba
                         ${item.livingArea} sqft<br>
                         ${item.address}<br>
                         ${item.townstate} ${item.zipcode}n<br>
                    </p>
                     
                     </div>
                 `;
            
             html += '</div">';



             status.innerHTML = html;

             
            
             
             
           setCaesar(sales);

           // setCaesar2(sales.indexOf(item).splice(item,1));

          //  setCaesar(filters.indexOf(sales).splice(item,1));

             
      


             })

}
}
}





              
              
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /////////////////////////////////hover functionality////////////////////////////////////////////////
   
       const contentStyle = { background: 'rgb(84,84,84)' };
       const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
       const arrowStyle = { color: '#000' };
   
       var [modalIsOpen, setIsOpen] = React.useState(false);
                       
       let subtitle;
       
     
       function openModal() {
         setIsOpen(true);
       }
     
       function afterOpenModal() {
         // references are now sync'd and can be accessed.
         subtitle.style.color = 'rgb(34,34,34)';
       }
     
       function closeModal() {
         setIsOpen(false);
       }
   
   
   
   
       function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
                return [hovering, onHoverProps]
            }
    
            
                const [buttonAIsHovering, buttonAHoverProps] = useHover();
                const [buttonBIsHovering, buttonBHoverProps] = useHover();
                const [buttonCIsHovering, buttonCHoverProps] = useHover();
                const [buttonDIsHovering, buttonDHoverProps] = useHover();
                const [buttonEIsHovering, buttonEHoverProps] = useHover();
   
   
   
   







        
       
     
       return (<>

<div className='background64ctg'>
                <a className='fontnav64ctg' style={{zIndex: '7', position: 'absolute', left: '75px', top: '45px' }}href='/activesinglefamily' {...buttonDHoverProps}>{buttonDIsHovering ? 'Click here to applyscience' : 'Single Family'}</a>
                  <a className='fontnav64ctg' style={{zIndex: '7', position: 'absolute', left: '310px', top: '45px' }}href="/active" {...buttonEHoverProps}>{buttonEIsHovering ? 'Click here to applyscience' : 'MultiFamily'}</a>
                  <div id="batsymbol" className='fontwater' style={{zIndex: '7', position: 'absolute', left: '470px', top: '20px', width: '317px', height: '157px', borderRadius: '50%', background: 'rgb(16, 16, 16)', border: '3.5px solid rgb(34,34,34)' }}></div>
                 
                  <div className='titlewater64' style={{zIndex: '7', position: 'absolute', left: '475px', top: '190px' }}>West Enterprises</div>
                  <a className='fontnav64ctg' style={{zIndex: '7', position: 'absolute', left: '815px', top: '45px' }}href='/activecondo' {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here to Create your Account' : 'Condominium'}</a>
                  <a className='fontnav64ctg' style={{zIndex: '7', position: 'absolute', left: '1050px', top: '45px' }}href='/activecommercial' {...buttonCHoverProps}>{buttonCIsHovering ? 'Click here to applyscience' : 'Commercial'}</a>
                  </div>    
   <div className='waterbackgroundctgactive'>
   <img id='ntdoubleu297' style={{height: '280px', width: '950px', left: '200px', top: '250px', position: 'absolute' }}  src={multifam} alt='math' />
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '275px' }}href='#map'>MAP</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '325px' }}href="/condo">Seller</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '375px' }}href='/condobuyer'>Buyer</a>
     <Popup trigger={<a id='mortgagecalcreact' className='innerelementwater642' style={{zIndex: '7', position: 'absolute', left: '45px', top: '425px' }} href="#batsymbol">Mortgage Calculator</a>}
   position='center' modal nested>
      <div className="modalmtgcalc" tabindex='0'>
        
      <form onSubmit={(e) => e.preventDefault()}>
      <div className='bordermtgcalc'>
       <h1 className='titlewatermtgcalc' style={{zIndex: '7', position: 'absolute', left: '15px', top: '0.5px' }} >West Enterprises</h1>
       <h2 className='h1mtgcalc' style={{zIndex: '7', position: 'absolute', left: '120px', top: '65px' }}>Mortgage Calc</h2>
       <div>
        <img className='calc2' src={cave} style={{zIndex: '7', position: 'absolute', left: '20px', top: '72px' }}/>
        </div>
       
       
        <div>
        <img className='calc' src={Calc} />
        </div>
       <div className='divmtgcalc' style={{zIndex: '7', position: 'absolute', left: '10px', top: '150px' }}>
      <span className='spanmtgcalc'>Home Value $</span>
       <input className='inputmtgcalc' style={{zIndex: '7', position: 'absolute', left: '150px'}} placeholder="Enter the home value" type='number' value={homeValue} onkeyup={calculateLoanAmount} onInput={(e) => setHomeValue(e.target.value)}/>
       </div>
       <br/>
       <div style={{zIndex: '7', position: 'absolute', left: '10px', top: '200px' }}>
      <span className='spanmtgcalc' >Down Payments $</span>
       <input className='inputmtgcalc' style={{zIndex: '7', position: 'absolute', left: '150px'}} placeholder="Enter your down payment(s)" type='number' value={downPayment} onkeyup={calculateLoanAmount} onInput={(e) => setDownPayment(e.target.value)} />
       </div>
       <br/>
       <div style={{zIndex: '7', position: 'absolute', left: '10px', top: '250px' }}>
      <span className='spanmtgcalc'>Loan Amount $</span>
       <input className='inputmtgcalc' style={{zIndex: '7', position: 'absolute', left: '150px'}} placeholder="Enter loan amount" type='number' value={loanAmount} onInput={(e) => setLoanAmount(e.target.value)}/>
       </div>
       <br/>
       <div style={{zIndex: '7', position: 'absolute', left: '10px', top: '300px' }}>
      <span className='spanmtgcalc'>Interest Rate %</span>
       <input className='inputmtgcalc' style={{zIndex: '7', position: 'absolute', left: '150px'}} placeholder="Enter your interest rate %" type='number' value={interestRate} onInput={(e) => setInterestRate(e.target.value)} />
       </div>
       <br/>
       <div style={{zIndex: '7', position: 'absolute', left: '10px', top: '350px' }}>
       <span className='spanmtgcalc' >Loan Duration (yrs)</span>
       <input className='inputmtgcalc' style={{zIndex: '7', position: 'absolute', left: '150px'}} placeholder="Enter loan duration (yrs)" type='number' value={loanDuration} onInput={(e) => setLoanDuration(e.target.value)} />
       </div>
        
        
        <h4 className='hmtgcalc' style={{zIndex: '7', position: 'absolute', left: '10px', top: '415px' }}>Monthy Payment: ${parseFloat(monthlyPayment.toFixed(2))}</h4>
        <button
        style={{zIndex: '7', position: 'absolute', left: '20px', top: '390px' }}
        className='buttonmtgcalc'
        type='submit'
        onClick={calculateMonthlyPayment}
        >Calculate
        </button>
       </div>
      </form>


       
      </div>
  
  </Popup>
     <br/>
     <br/>
     <div className='hashh666'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '250px' }}>Condominium</div>
   <div className='hashh666'  style={{zIndex: '7', position: 'absolute', left: '1187px', top: '250px' }}>Active</div>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '1160px', top: '275px' }}href='/activewatercondo'>WaterFront</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '1160px', top: '325px' }}href="/activecondo">Suburb</a>
     <div>
          <ul>
        <li style={{zIndex: '7', position: 'absolute', left: '1175px', top: '370px' }}>
          <a className='innerelementwater642' href="/ctgcondo">Female Seller</a>
          </li>
          <li style={{zIndex: '7', position: 'absolute', left: '1175px', top: '395px' }}>
          <a className='innerelementwater642' href="/ctgcondobuyer">Female Buyer</a>
        </li>
         </ul>
         </div>
     <a className='hashhctg'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '1780px' }} href='#imme'>Active Listings Search</a>
     <a className='hashhctg'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '1800px' }} href='#map'>Mapping</a>
     <div id='imme' className='activetitle' style={{zIndex: '7', position: 'absolute', left: '395px', top: '511px' }}>Active Condominium</div>
     <div className='hashhctg' style={{zIndex: '7', position: 'absolute', left: '995px', top: '545px' }}>***Click numbers to view Listings</div>
  <select style={{zIndex: '7', position: 'absolute', left: '45px', top: '591px' }}
                  placeholder='County'
                  value={pricerangecounty1}
                  onChange={(e) => setPricerangecounty1(e.target.value)}
                  >
                 <option id='value' style={{zIndex: '7', position: 'absolute', left: '45px', top: '591px' }}>---Choose County--</option>
                 {GLOBE1.states.map((value, key) => {
                 return(
                  <option id='value' style={{zIndex: '7', position: 'absolute', left: '45px', top: '591px' }} value={value.name} key={key}>{value.name}</option>);
                 })}
                 </select>
                  <select style={{zIndex: '7', position: 'absolute', left: '45px', top: '611px' }}
                  placeholder='State'
                  value={selectedState2}
                  onChange={(e) => setSelectedState2(e.target.value)}
                  >
                    <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '611px' }}>--Choose State--</option>
                    {availableState2?.counties.map((e, key) => {
                      return (
                        <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '611px' }} value={e.name} key={key}>{e.name}</option>
                      );
                    })}
                    </select>
                 
                 <select style={{zIndex: '7', position: 'absolute', left: '45px', top: '631px' }}
                  placeholder='Town'
                  value={pricerangetown1}
                  onChange={(e) => setPricerangetown1(e.target.value)}>
                    <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '631px' }}>--Choose Town--</option>
                    {availableTowns2?.towns.map((e, key) => {
                      return (
                        <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '631px' }}value={e.name} key={key}>
                        {e}
                        </option>
                      );
                    })}
                  </select>
      <input className='input' style={{zIndex: '7', position: 'absolute', left: '540px', top: '611px'}} type='number' onChange={(e)=> setPricevalue(e.target.value)}/> 
     <input className='input' style={{zIndex: '7', position: 'absolute', left: '740px', top: '611px'}}type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
     <Button id='benjamin' className='button' style={{zIndex: '7', position: 'absolute', left: '948px', top: '595px'}} variant='dark' type="button" value='Submit' onClick={()=> {ActivePopulateQuote(); ActivePopulateQuoteBeds(); NoPlaceLikeHome(); Toto();}}>Apply Science</Button>

     <div className='a1water' style={{zIndex: '7', position: 'absolute', left: '158px', top: '680px' }}># Listings</div>
         <div className='a1water' style={{zIndex: '7', position: 'absolute', left: '270px', top: '680px' }}>% Total Market</div>
         <div className='a1water' style={{zIndex: '7', position: 'absolute', left: '410px', top: '680px' }}>Avg. List Price</div>
  
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '30px', top: '736px' }}>$100k - $349k</div>
              
   <Popup trigger={<a id ='threek' title={listratesPlanAavg} href='#/threek' className='awater' style={{zIndex: '7', position: 'absolute', left: '185px', top: '720px' }}></a>}
   position='center' modal nested>
 {close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount4}
            onPageChange={handlePageClick4}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData4}
         
        </div>
      </div>
    )}
  </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '155px', top: '736px' }}>___________</div>
                 <div id ='s3k' className='awater' style={{zIndex: '7', position: 'absolute', left: '315px', top: '720px' }}></div>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '285px', top: '736px' }}>___________</div>
                 <div id ='avglist3k' className='awater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '720px' }}></div>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '736px' }}>___________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '30px', top: '811px' }}>$350k - $499k</div>
   <Popup trigger={<a id ='fourk' title={listratesPlanBavg} href='#/fourk' className='awater' style={{zIndex: '7', position: 'absolute', left: '185px', top: '796px' }}></a>}
   position='center' modal nested>
 {close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount5}
            onPageChange={handlePageClick5}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData5}
         
        </div>
      </div>
    )}
  </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '155px', top: '811px' }}>___________</div>
                 <a id ='s4k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '315px', top: '796px' }}></a>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '285px', top: '811px' }}>___________</div>
                 <div id ='avglist4k' className='awater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '796px' }}></div>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '811px' }}>___________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '30px', top: '886px' }}>$500k - $749k</div>
     <Popup trigger={<a id ='sevenk' title={listratesPlanCavg} className='awater' href='#/sevenk' style={{zIndex: '7', position: 'absolute', left: '185px', top: '871px' }}></a>}
     position='center' modal nested>
   {close => (
      
        <div className="modal" tabindex='0'>
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">West Enterprises Applied Science</div>
          <div className="actions">
            <ReactPaginate
              previousLabel={"<- Previous"}
              nextLabel={"Next ->"}
              pageCount={pageCount6}
              onPageChange={handlePageClick6}
              initialPage={0}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
              />
              {currentPageData6}
           
          </div>
        </div>
      )}
    </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '155px', top: '886px' }}>___________</div>
                 <a id ='s7k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '315px', top: '871px' }}></a>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '285px', top: '886px' }}>___________</div>
                 <div id ='avglist7k' className='awater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '871px' }}></div>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '886px' }}>___________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '30px', top: '961px' }}>$750k +</div>
   <Popup trigger={<a id ='sevenfivek' title={listratesPlanDavg} href='#/sevenfivek' className='awater' style={{zIndex: '7', position: 'absolute', left: '185px', top: '946px'}} ></a>}
   position='center' modal nested>
 {close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount7}
            onPageChange={handlePageClick7}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData7}
         
        </div>
      </div>
    )}
  </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '155px', top: '961px' }}>___________</div>
                 <a id ='s75k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '315px', top: '946px' }}></a>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '285px', top: '961px' }}>___________</div>
                 <div id ='avglist75k' className='awater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '946px' }}></div>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '415px', top: '961px' }}>___________</div>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
               
                 <Button id='benjamin' className='button' style={{zIndex: '7', position: 'absolute', left: '199px', top: '595px'}} variant='dark' type="button" value='Submit' onClick={()=> {ghostreconcampaign();}}>Apply Science</Button>

                      <br/>
                      <br/>
                      <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '430px', top: '631px', width: '76px', height: '30.5px', borderRadius: '31%', background: 'rgb(135, 135, 135)', border: '3.5px solid rgb(64, 64, 64)' }}></div>
       <div id='avgDOMpopulate' className='a12water' title={avgsalesavg} style={{zIndex: '7', position: 'absolute', left: '445px', top: '639px' }}></div>
       <br/>
       <br/>
       <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '591px', width: '126px', height: '31.5px', borderRadius: '31%', background: 'rgb(135, 135, 135)', border: '3.5px solid rgb(64, 64, 64)' }}></div>
       <div id='avgListpopulate' className='a12water' title={listsaleslist} style={{zIndex: '7', position: 'absolute', left: '415px', top: '599px' }}></div>
       <br/>
     <br/>
       <br/>
       <select style={{zIndex: '7', position: 'absolute', left: '540px', top: '591px' }}
          placeholder='County'
          value={county3}
          onChange={(e) => setCounty3(e.target.value)}
          >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '540px', top: '591px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '540px', top: '591px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '681px', top: '591px' }}
          placeholder='State'
          value={selectedState3}
          onChange={(e) => setSelectedState3(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '681px', top: '591px' }}>--Choose State--</option>
            {availableState3?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '681px', top: '591px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '807px', top: '591px' }}
          placeholder='Town'
          value={town2}
          onChange={(e) => setTown2(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '807px', top: '591px' }}>--Choose Town--</option>
            {availableTowns3?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '807px', top: '591px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
       <br/>
       <br/>
       <br/>
       <div id='kristen' style={{zIndex: '7', position: 'absolute', left: '50px', top: '891px', width: '18rem'}}></div>
       <br/>
       <br/>







       <div className='a1water' style={{zIndex: '7', position: 'absolute', left: '663px', top: '642px' }}># Listings</div>
         <div className='a1water' style={{zIndex: '7', position: 'absolute', left: '793px', top: '642px' }}>% Total Market</div>




                          <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '570px', top: '671px' }}>0-14 days</a>
                          <a></a>                       
                           <Popup trigger={<a id='s14'  href='#/s14' title={belowdiffratesPlanAavg} className='a1water' style={{zIndex: '7', position: 'absolute', left: '690px', top: '671px' }}></a>}
                           position='center' modal nested>
                         {close => (
                            
                              <div className="modal" tabindex='0'>
                                <button className="close" onClick={close}>
                                  &times;
                                </button>
                                <div className="header">West Enterprises Applied Science</div>
                                <div className="actions">
                                  <ReactPaginate
                                    previousLabel={"<- Previous"}
                                    nextLabel={"Next ->"}
                                    pageCount={pageCount8}
                                    onPageChange={handlePageClick8}
                                    initialPage={0}
                                    containerClassName={"pagination"}
                                    previousLinkClassName={"pagination__link"}
                                    nextLinkClassName={"pagination__link--disabled"}
                                    activeClassName={"pagination__link--active"}
                                    />
                                    {currentPageData8}
                                 
                                </div>
                              </div>
                            )}
                          </Popup>
                          
                      <a></a>
                          <div id='fr14' className='a1water' style={{zIndex: '7', position: 'absolute', left: '755px', top: '671px' }}></div>
                          <a></a>
                          <div id='r14' title={totallessdiff14} className='a1water' style={{zIndex: '7', position: 'absolute', left: '842px', top: '671px' }}></div>
                          <br/>
                          <br/>
                          <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '570px', top: '746px' }}>15-30 days</a>
                          <a></a>
   <Popup trigger={<a id='s30' title={belowdiffratesPlanBavg} href='#/s30' className='a1water' style={{zIndex: '7', position: 'absolute', left: '690px', top: '746px' }}></a>}
   position='center' modal nested>
 {close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount9}
            onPageChange={handlePageClick9}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData9}
         
        </div>
      </div>
    )}
  </Popup>          
                          <a></a>
                          <div id='fr30' className='a1water' style={{zIndex: '7', position: 'absolute', left: '755px', top: '746px' }}></div>
                          <a></a>
                          <div id='r30' title={totallessdiff30} className='a1water' style={{zIndex: '7', position: 'absolute', left: '842px', top: '746px' }}></div>
                          <br/>
                          <br/>
                          <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '570px', top: '821px' }}>31-45 days</a>
                          <a></a>
  <Popup trigger={<a id='s45' href='#/s45' title={belowdiffratesPlanCavg} className='a1water' style={{zIndex: '7', position: 'absolute', left: '690px', top: '821px' }}></a>}
  position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount10}
           onPageChange={handlePageClick10}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData10}
        
       </div>
     </div>
   )}
 </Popup>                    
                          <a></a>
                          <div id='fr45' className='a1water' style={{zIndex: '7', position: 'absolute', left: '755px', top: '821px' }}></div>
                          <a></a>
                          <div id='r45' title={totallessdiff45} className='a1water' style={{zIndex: '7', position: 'absolute', left: '842px', top: '821px' }}></div>                         
                          <br/>
                          <br/>
                          <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '570px', top: '896px' }}>46-90 days</a>
                          <a></a>
  <Popup trigger={<a id='s90' title={belowdiffratesPlanDavg} href='#/s90' className='a1water' style={{zIndex: '7', position: 'absolute', left: '690px', top: '896px' }}></a>}
  position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount11}
           onPageChange={handlePageClick11}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData11}
        
       </div>
     </div>
   )}
 </Popup>        
  
                         <a></a>
                          <div id='fr90' className='a1water' style={{zIndex: '7', position: 'absolute', left: '755px', top: '896px' }}></div>
                          <a></a>
                          <div id='r90' title={totallessdiff90} className='a1water' style={{zIndex: '7', position: 'absolute', left: '842px', top: '896px' }}></div>
                          <br/>
                          <br/>
                          <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '570px', top: '971px' }}>91-120 days</a>
                          <a></a>
   <Popup trigger={<a id='s120' href='#/s120' title={belowdiffratesPlanEavg} className='a1water' style={{zIndex: '7', position: 'absolute', left: '690px', top: '971px' }}></a>}
   position='center' modal nested>
 {close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount12}
            onPageChange={handlePageClick12}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData12}
         
        </div>
      </div>
    )}
  </Popup>      
           <a></a>
                          <div id='fr120' className='a1water' style={{zIndex: '7', position: 'absolute', left: '755px', top: '971px' }}></div>
                          <a></a>
                          <div id='r120' title={totallessdiff120} className='a1water' style={{zIndex: '7', position: 'absolute', left: '842px', top: '971px' }}></div>
                          <br/>
                          <br/>
                          <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '570px', top: '1046px' }}>121+ days</a>
                          <a></a>
   <Popup trigger={<a id='s121' title={belowdiffratesPlanFavg} href='#/s121' className='a1water' style={{zIndex: '7', position: 'absolute', left: '690px', top: '1046px' }}></a>}
   position='center' modal nested>
 {close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount13}
            onPageChange={handlePageClick13}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData13}
         
        </div>
      </div>
    )}
  </Popup>                               
                          <a></a>
                          <div id='fr121' className='a1water' style={{zIndex: '7', position: 'absolute', left: '755px', top: '1046px' }}></div>
                          <a></a>
                          <div id='r121' title={totallessdiff121} className='a1water' style={{zIndex: '7', position: 'absolute', left: '842px', top: '1046px' }}></div>
                          <br/>











                          <h5 className='a1water' style={{zIndex: '7', position: 'absolute', left: '1080px', top: '630px'}}>Number of Beds</h5>
                          <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '996px', top: '711px' }}>1 Beds</div>
                    
                    <Popup trigger={<a id ='onebed' title={belowdiffratesPlanAavgbed} href='#/onebed' className='awater' style={{zIndex: '7', position: 'absolute', left: '1116px', top: '695px' }} ></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount14}
           onPageChange={handlePageClick14}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData14}
        
       </div>
     </div>
   )}
 </Popup>
                    <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1086px', top: '711px' }}>______________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '996px', top: '801px' }}>2 Beds</div>
                 <Popup trigger={<a id ='twobed' title={belowdiffratesPlanBavgbed} href='#/twobed' className='awater' style={{zIndex: '7', position: 'absolute', left: '1116px', top: '784px' }}></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount15}
           onPageChange={handlePageClick15}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData15}
        
       </div>
     </div>
   )}
 </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1086px', top: '801px' }}>______________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '996px', top: '876px' }}>3 Beds</div>  
                 <Popup trigger={ <a  id='threebed' title={belowdiffratesPlanCavgbed} href='#/threebed' className='awater' style={{zIndex: '7', position: 'absolute', left: '1116px', top: '860px'}} ></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount16}
           onPageChange={handlePageClick16}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData16}
        
       </div>
     </div>
   )}
 </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1086px', top: '876px' }}>______________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '996px', top: '951px' }}>4 Beds</div>
                 <Popup trigger={<a id ='fourbed' title={belowdiffratesPlanDavgbed} href='#/fourbed' className='awater' style={{zIndex: '7', position: 'absolute', left: '1116px', top: '935px'}} ></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount17}
           onPageChange={handlePageClick17}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData17}
        
       </div>
     </div>
   )}
 </Popup>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1086px', top: '951px' }}>______________</div>
                 <br/>
                 <br/>
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '996px', top: '1026px' }}>5+ Beds</div>
                
                 <Popup trigger={<a id ='fivebed' title={belowdiffratesPlanEavgbed} href='#/fivebed' className='awater' style={{zIndex: '7', position: 'absolute', left: '1116px', top: '1010px'}} ></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount18}
           onPageChange={handlePageClick18}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData18}
        
       </div>
     </div>
   )}
 </Popup>
                
                 <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1086px', top: '1026px' }}>______________</div>
                      <br/>
                      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '1070px' }}>----------------------------------------------</div>
                      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1070px' }}>----------------------------------------------</div>
                      <img style={{height: '401px', width: '1350px', position: 'absolute', top: '2195px' }} src={hottubbubblezzz} alt='pixa'/>
                   



       
       
       
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
     
     
     
     
     <div className='seperator2'></div>
     <br/>
    
         <br/>

         
         
         
         
         
        
        
        
        
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '1148.5px', width: '252px', height: '100px', borderRadius: '50%', background: 'rgb(16, 16, 16)', border: '3.5px solid rgb(34,34,34)' }}></div>
        
         <div className='fontwatersign' style={{zIndex: '7', position: 'absolute', left: '575px', top: '1158.5px'}}>WEST</div>
        
        
        
        
        
         <a className='hashhctg'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '1125px' }} href='#geocoder'>Previous Market History</a>
     <a className='hashhctg'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '1145px' }} href='#imme'>Active Listings Search</a>
         <div style={{left: '218px', top: '1185px', position: 'absolute' }} className="sidebar">
             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
     </div>

     
    
     <Popup
trigger={<div id='noplacelikehome' className='listpricediv' style={{zIndex: '7', position: 'absolute', left: '12px', top: '1171px' }}></div>}
position="center"
modal
nested       
>
  {julius.map((julius) => 

<div className="modal" tabindex='0'>

<div className="header">West Manor</div>
        <div>

        <ul>
<br/>
<div className='borders'>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={julius.photosMAIN}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={julius.photos[1]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={julius.photos[2]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={julius.photos[3]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={julius.photos[4]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={julius.photos[5]}></img>
 <br/>
 <br/>
 
 <br/>
 <br/>
 <br/>
 <br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {julius.streetAddress}, {julius.townstate}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {julius.listprice}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {julius.bedrooms}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {julius.bathrooms}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {julius.DOM}</td><br/>
</div>
</ul>


          
        



</div>
</div>
       )}

</Popup>




    

    <Popup
trigger={<div id='toto' className='listpricediv' style={{zIndex: '7', position: 'absolute', left: '1067px', top: '1171px' }}></div>}
position="center"
modal
nested       
>
{caesar.map((caesar) =>

<div className="modal" tabindex='0'>


<div className="header">West Manor</div>
        <div>

        <ul>
<br/>
<div className='borders'>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={caesar.photosMAIN}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={caesar.photos[1]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={caesar.photos[2]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={caesar.photos[3]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={caesar.photos[4]}></img><br/>
 <img style={{zIndex: '7', height: '375px', width: '715px'}} src={caesar.photos[5]}></img>
 <br/>
 <br/>
 
 <br/>
 <br/>
 <br/>
 <br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {caesar.streetAddress}, {caesar.townstate}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {caesar.listprice}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Bedrooms: {caesar.bedrooms}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Bathrooms: {caesar.bathrooms}</td><br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {caesar.DOM}</td><br/>
</div>
</ul>
          
        



</div>
</div>

)}

</Popup>




  <div id='map' style={{left: '234px', top: '1185px', height: '82.5%', width: '64.3%', position: 'absolute' }} ref={mapContainer} />
  <div id="geocoder" style={{zIndex: '1', left: '550px', margin_left: '-25%', top: '1720px', position: 'absolute', width: '775px', height: '31px' }}></div>
           
       

       




  <a className='hashhctg'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '532px' }} href='#geocoder'>Previous Market History</a>
     <a className='hashhctg'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '552px' }} href='#map'>Mapping</a>
     </div>
     <div className='waterbackgroundctgactive'></div>
   <h5 id='headerstatetop22' style={{zIndex: '7', position: 'absolute', left: '820px', top: '425px' }}></h5>
  


   <div className='awater' style={{zIndex: '7', position: 'absolute', left: '430px', top: '1790px' }}>Previous 5 Month Market Condition Sales</div>
   <h2 className='yeartitle' style={{zIndex: '7', position: 'absolute', left: '905px', top: '1779px' }}>2022</h2>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '915px', top: '1875px' }}>Price Range</div>
   <br/>
   <br/>
   <Popup trigger={<a id ='inject' className='awater' href='#/inject' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1894px' }}></a>}
   position='center' modal nested>
{close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData}
         
        </div>
      </div>
    )}
  </Popup>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1909px' }}>Listings Sold - ____________</div>
   <a id ='harley' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '1075px', top: '1894px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '990px', top: '1909px' }}>Avg. Sale____________</div>
   <a id ='sultan' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1969px' }} ></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1984px' }}>Avg. DOM - ______________</div>
   <a id ='oj' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '1075px', top: '1969px' }}></a>
   <div  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '990px', top: '1984px' }}>Avg. List___________</div>
    <Popup trigger={<a id ='threebears'  title={titleavgdiff} className='awater' href='#/threebears' style={{zIndex: '7', position: 'absolute', left: '820px', top: '2046px' }}></a>}
    position='center' modal nested>
 {close => (
     
       <div className="modal" tabindex='0'>
         <button className="close" onClick={close}>
           &times;
         </button>
         <div className="header">West Enterprises Applied Science</div>
         <div className="actions">
           <ReactPaginate
             previousLabel={"<- Previous"}
             nextLabel={"Next ->"}
             pageCount={pageCount1}
             onPageChange={handlePageClick1}
             initialPage={0}
             containerClassName={"pagination"}
             previousLinkClassName={"pagination__link"}
             nextLinkClassName={"pagination__link--disabled"}
             activeClassName={"pagination__link--active"}
             />
             {currentPageData1}
          
         </div>
       </div>
     )}
   </Popup>
  <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2059px' }}>sale price rate_____________</div> 
   <a id='lordof' href='#/lordof' className='awater' style={{zIndex: '7', position: 'absolute', left: '1105px', top: '2046px' }}></a>   
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '990px', top: '2059px' }}>Avg. Differential___________</div>
   <a id ='min' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '770px', top: '2119px' }}></a>
   <a id ='max' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '870px', top: '2119px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2134px' }}>low - high</div>
   <br/>
   <br/>
   <div id="container" style={{zIndex: '7', position: 'absolute', left: '300px', top: '2889px' }}>
   </div>
   <br/>
   <br/>
   <br/>
   <h5 id='headerstatetop21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '230px', top: '1714px' }}></h5>
   
   <h2 className='yeartitle' style={{zIndex: '7', position: 'absolute', left: '305px', top: '1779px' }}>2022</h2>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '315px', top: '1875px' }}>Town $100k+</div>
   <br/>
   <br/>
   <Popup trigger={<a id='inject21' className='awater' href='#/inject21' style={{zIndex: '7', position: 'absolute', left: '215px', top: '1894px' }}></a>}
   position='center' modal nested>
{close => (
    
      <div className="modal" tabindex='0'>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount3}
            onPageChange={handlePageClick3}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData3}
         
        </div>
      </div>
    )}
  </Popup>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1909px' }}>Listings Sold - ______________</div>
   <a id ='harley21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '475px', top: '1894px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '1909px' }}>Avg. Sale_____________</div>
   <a id ='sultan21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '215px', top: '1969px' }} ></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1984px' }}>Avg. DOM - _______________</div>
   <a id ='oj21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '475px', top: '1969px' }}></a>
   <div  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '1984px' }}>Avg. List_____________</div>
  <Popup trigger={<a id ='threebears21' title={titleavgdiff2} href='#/threebears21' className='awater' style={{zIndex: '7', position: 'absolute', left: '215px', top: '2046px' }}></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal" tabindex='0'>
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount2}
           onPageChange={handlePageClick2}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData2}
        
       </div>
     </div>
   )}
 </Popup>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '2059px' }}>sale price rate - ___________</div>
   <a id ='lordof21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2046px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '2059px' }}>Avg. Differential_____________</div>
   <a id ='min21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '150px', top: '2119px' }}></a>
   <a id ='max21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '260px', top: '2119px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '2134px' }}>low - high</div>
   <br/>
   <br/>
     <br/>
     <br/>
     <div id='townhash' style={{zIndex: '7', position: 'absolute', left: '75px', top: '2189px', height: '3px' }}>_______________________________________________________________________</div>
     <br/>
     <br/>
     
       
       
       
       
       
       </>)
            }

            export default ActiveCondoCtg; 












