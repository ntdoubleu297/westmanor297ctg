import React, {useState} from "react";
import {render} from 'react-dom';
   import ReactBootstrap from'react-bootstrap';
   import axios from'axios';
   import Context from'./context';
   //import CreateAccount from'./createaccount';
   import'./alldata.css';
   import './waterfront.css';
   //import './waterfront64.css';
  // import './suburb.css';
   import {Button} from'react-bootstrap';
   import { useNavigate } from "react-router";
   import Card from 'react-bootstrap/Card';
   import image from './bank.jpeg';
   //import Popup from './Popup'
   import Popup from 'reactjs-popup';
   //import 'reactjs-popup/dist/index.css';
   import Carousel from 'react-bootstrap/Carousel';
   import { Component } from "react";
    import Slider from "react-slick";
 import ImageSlider from './appnw';
 import './appnw';
 import pixa from './pixabay.jpg';
 import matheus from './matheus.jpg';
 import { useHistory } from 'react-router-dom';
 import chicago from './chicagowheel.jpg';
 import 'mapbox-gl/dist/mapbox-gl.css';
 import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
//import React, { useRef, useEffect, useState } from 'react';
import { useEffect, useRef } from 'react'; 
import texas from './texaswater.jpeg';
import westpalmbsat from './westpalmbsat.jpeg';
import Modal from 'react-modal';
import MITstreets from './MITstreets.png';
import MIT from './MIT.png';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import capewater from './capewater.png';
import hottubbubblezzz from './hottubbubblezzz.jpg'; 

   
   //import'bootstrap/dist/css/bootstrap.min.css';
   import DropdownButton from'react-bootstrap/DropdownButton';
   import Dropdown from'react-bootstrap/Dropdown';
   

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CardGroup from 'react-bootstrap/CardGroup'; 

import ReactPaginate from 'react-paginate';

//import RobMussi from './BatmanForeverntdoubleu297210.png';
import NeilWhite from './BatmanForeverntdoubleu2976lah.png';








   
   
   
   
   
   
   
   
   
   
   
   //function AllData(){
     //const ctx = React.useContext(UserContext);
     //return (
      // <>
     //  <h5>All Data in Store</h5>
      // {JSON.stringify(ctx)}<br/>
     //  </>
    // );
   //}
   
   function AllDataSingleFamilyBuyer(){

    mapboxgl.accessToken = 'pk.eyJ1IjoibnRkb3VibGV1Mjk3IiwiYSI6ImNsMmdrNXphbjAwcnEzY21tNXJ4bWcyNW4ifQ.OZFbUr0XHn455XBjG5od1Q';

   
   const MAcounty = ['Norfolk','Middlesex','Essex','Worcester','Plymouth','Suffolk','Bristol','Barnstable','Hampden','Hampshire','Berkshire','Dukes','Franklin'];
   
  


 const GLOBE = {
  states: [
    {
  name: 'Norfolk', 
  counties: [{
     // name: 'Norfolk',
      towns: ['Avon, MA', 'Bellingham, MA', 'Braintree, MA',  'Brookline, MA', 'Canton, MA', 'Cohasset, MA', 'Dedham, MA', 'Dover, MA', 'Foxboro, MA', 'Franklin, MA', 'Holbrook, MA', 'Medfield, MA', 'Medway, MA', 'Millis, MA', 'Milton, MA', 'Needham, MA',  'Norfolk, MA', 'Norwood, MA', 'Plainville, MA', 'Quincy, MA', 'Randolph, MA', 'Sharon, MA', 'Stoughton, MA', 'Walpole, MA', 'Wellesley, MA', 'Westwood, MA', 'Weymouth, MA', 'Wrentham, MA']
  }
  ]
},
{name: 'Middlesex', counties: [{name: 'MA', towns: ['Acton, MA',  'Arlington, MA', 'Ashby, MA', 'Ashland, MA', 'Ayer, MA', 'Bedford, MA', 'Belmont, MA', 'Billerica, MA', 'Boxborough, MA', 'Burlington, MA',  'Cambridge, MA',  'Carlisle, MA', 'Chelmsford, MA',  'Concord, MA', 'Dracut, MA', 'Dunstable, MA', 'Everett, MA', 'Framingham, MA', 'Groton, MA', 'Holliston, MA', 'Hopkinton, MA', 'Hudson, MA', 'Lexington, MA', 'Lincoln, MA',  'Littleton, MA',  'Lowell, MA',  'Malden, MA', 'Marlborough, MA', 'Maynard, MA', 'Medford, MA', 'Melrose, MA', 'Natick, MA', 'Newton, MA', 'North Reading, MA',  'Pepperell, MA', 'Reading, MA', 'Sherborn, MA',  'Shirley, MA; Somerville, MA', 'Stoneham, MA', 'Stow, MA', 'Sudbury, MA', 'Tewksbury, MA', 'Townsend, MA; Tyngsborough, MA', 'Wakefield, MA', 'Waltham, MA', 'Watertown, MA', 'Wayland, MA', 'Westford, MA', 'Weston, MA', 'Wilmington, MA', 'Winchester, MA', 'Woburn, MA']}]},
{name: 'Essex', counties: [{name: 'MA', towns: ['Amesbury, MA',  'Andover, MA', 'Beverly, MA', 'Boxford, MA', 'Danvers, MA', 'Essex, MA', 'Georgetown, MA', 'Gloucester, MA', 'Groveland, MA',  'Hamilton, MA', 'Haverhill, MA', 'Ipswich, MA', 'Lawrence, MA', 'Lynn, MA; Lynnfield, MA', 'Manchester, MA', 'Marblehead, MA',  'Merrimac, MA', 'Methuen, MA; Middleton, MA', 'Nahant, MA',  'Newbury, MA',  'Newburyport, MA; North Andover, MA', 'Peabody, MA',  'Rockport, MA',  'Rowley, MA', 'Salem, MA', 'Salisbury, MA', 'Saugus, MA',  'Swampscott, MA', 'Topsfield, MA', 'Wenham, MA',  'West Newbury, MA']}]},
{name: 'Worcester', counties: [{name: 'MA', towns: ['Ashburnham, MA', 'Athol, MA',  'Auburn, MA',  'Barre, MA',  'Berlin, MA', 'Blackstone, MA',  'Bolton, MA', 'Boylston, MA',  'Brookfield, MA', 'Charlton, MA', 'Clinton, MA', 'Devens, MA', 'Douglas, MA',  'Dudley, MA', 'East Brookfield, MA', 'Fitchburg, MA', 'Gardner, MA', 'Grafton, MA',  'Hardwick, MA', 'Harvard, MA', 'Holden, MA', 'Hopedale, MA', 'Hubbardston, MA', 'Lancaster, MA', 'Leicester, MA',  'Leominster, MA',  'Lunenburg, MA', 'Mendon, MA', 'Milford, MA',  'Millbury, MA', 'Millville, MA', 'New Braintree, MA', 'North Brookfield, MA', 'Northborough, MA',  'Northbridge, MA', 'Oakham, MA',  'Oxford, MA', 'Paxton, MA', 'Petersham, MA', 'Phillipston, MA',  'Princeton, MA',  'Royalston, MA',  'Rutland, MA',  'Shrewsbury, MA',  'Southborough, MA', 'Southbridge, MA', 'Spencer, MA', 'Sterling, MA', 'Sturbridge, MA',  'Sutton, MA',  'Templeton, MA', 'Upton, MA',  'Uxbridge, MA',  'Warren, MA',  'Webster, MA',  'West Boylston, MA', 'West Brookfield, MA', 'Westborough, MA', 'Westminster, MA',  'Winchendon, MA', 'Worcester, MA']}]},
{name: 'Plymouth', counties: [{name: 'MA', towns: ['Abington, MA', 'Bridgewater, MA', 'Brockton, MA', 'Carver, MA',  'Duxbury, MA',  'East Bridgewater, MA', 'Halifax, MA',  'Hanover, MA', 'Hanson, MA', 'Hingham, MA',  'Hull, MA', 'Kingston, MA',  'Lakeville, MA',  'Marion, MA',  'Marshfield, MA', 'Mattapoisett, MA', 'Middleboro, MA',  'Norwell, MA',  'Pembroke, MA', 'Plymouth, MA',  'Plympton, MA', 'Rochester, MA', 'Rockland, MA', 'Scituate, MA', 'Wareham, MA', 'West Bridgewater, MA', 'Whitman, MA']}]},
{name: 'Suffolk', counties: [{name: 'MA', towns: ['Boston, MA', 'Chelsea, MA', 'Revere, MA', 'Winthrop, MA']}]},
{name: 'Bristol', counties: [{name: 'MA', towns: ['Acushnet, MA', 'Attleboro, MA', 'Berkley, MA', 'Dartmouth, MA',  'Dighton, MA',  'Easton, MA', 'Fairhaven, MA', 'Fall River, MA', 'Freetown, MA', 'Mansfield, MA', 'New Bedford, MA', 'North Attleboro, MA', 'Norton, MA', 'Raynham, MA', 'Rehoboth, MA', 'Seekonk, MA', 'Somerset, MA',  'Swansea, MA', 'Taunton, MA', 'Westport, MA']}]},
{name: 'Barnstable', counties: [{name: 'MA', towns: ['Barnstable, MA',  'Bourne, MA', 'Brewster, MA',  'Chatham, MA',  'Dennis, MA',  'Eastham, MA',  'Falmouth, MA', 'Harwich, MA',  'Mashpee, MA', 'Orleans, MA', 'Provincetown, MA', 'Sandwich, MA',  'Truro, MA', 'Wellfleet, MA',  'Yarmouth, MA']}]},
{name: 'Hampden', counties: [{name: 'MA', towns: ['Agawam, MA',  'Blandford, MA', 'Brimfield, MA', 'Chester, MA',  'Chicopee, MA',  'East Longmeadow, MA', 'Granville, MA', 'Hampden, MA', 'Holland, MA', 'Holyoke, MA', 'Longmeadow, MA', 'Ludlow, MA',  'Monson, MA',  'Montgomery, MA', 'Palmer, MA', 'Russell, MA', 'Southwick, MA', 'Springfield, MA', 'Westfield, MA', 'Wilbraham, MA']}]},
{name: 'Hampshire', counties: [{name: 'MA', towns: ['Amherst, MA',  'Belchertown, MA',  'Chesterfield, MA', 'Cummington, MA', 'Easthampton, MA',  'Goshen, MA', 'Granby, MA',  'Hadley, MA',  'Hatfield, MA', 'Huntington, MA',  'Middlefield, MA', 'Northampton, MA', 'Pelham, MA',  'Plainfield, MA',  'South Hadley, MA', 'Southampton, MA', 'Ware, MA', 'Westhampton, MA', 'Williamsburg, MA', 'Worthington, MA']}]},
{name: 'Berkshire', counties: [{name: 'MA', towns: ['Adams, MA', 'Alford, MA', 'Becket, MA', 'Cheshire, MA', 'Clarksburg, MA', 'Dalton, MA', 'Egremont, MA', 'Florida, MA', 'Great Barrington, MA',  'Hancock, MA',  'Hinsdale, MA', 'Lanesborough, MA',  'Lee, MA', 'Lenox, MA', 'Monterey, MA; Mount Washington, MA', 'New Ashford, MA', 'New Marlboro, MA', 'North Adams, MA',  'Otis, MA', 'Peru, MA', 'Pittsfield, MA',  'Richmond, MA', 'Sandisfield, MA',  'Savoy, MA',  'Sheffield, MA', 'Stockbridge, MA', 'Tyringham, MA', 'Washington, MA', 'West Stockbridge, MA',  'Williamstown, MA', 'Windsor, MA']}]},
{name: 'Dukes', counties: [{name: 'MA', towns: ['Aquinnah, MA',  'Chilmark, MA',  'Edgartown, MA', 'Gosnold, MA',  'Oak Bluffs, MA', 'Tisbury, MA']}]},
{name: 'Franklin', counties: [{name: 'MA', towns: ['Ashfield, MA', 'Bernardston, MA', 'Buckland, MA', 'Charlemont, MA', 'Colrain, MA', 'Conway, MA', 'Deerfield, MA', 'Erving, MA; Gill, MA',  'Greenfield, MA',  'Hawley, MA',  'Heath, MA',  'Leverett, MA', 'Leyden, MA',  'Monroe, MA',  'Montague, MA',  'New Salem, MA', 'Northfield, MA', 'Orange, MA', 'Rowe, MA',  'Shelburne, MA', 'Shutesbury, MA',  'Sunderland, MA',  'Warwick, MA',  'Wendell, MA', 'Whately, MA']}]}
]
};   


const [selectedCounty, setSelectedCounty] = React.useState(); // MA counties
const [selectedTown, setSelectedTown] = React.useState(); //...
const [selectedState, setSelectedState] = React.useState(); // MA

const availableState = GLOBE.states.find((s) => s.name === selectedCounty); // that is what this says...
const availableTowns = availableState?.counties?.find( //
  (c) => c.name === selectedState //
); //


//const mapContainer = useRef(null);
//const map = useRef(null);
//const [lng, setLng] = useState(-70.9);
//const [lat, setLat] = useState(42.35);
//const [zoom, setZoom] = useState(9);



//useEffect(() => {
   // if (map.current) return; // initialize map only once
   // map.current = new mapboxgl.Map({
   // container: mapContainer.current,
   // style: 'mapbox://styles/mapbox/streets-v11',
  //  center: [lng, lat],
  //  zoom: zoom
   // });
   // });

   // <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '2725px' }} ref={mapContainer} className="map-container" />
   // <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '3125px' }} ref={mapContainer} className="map-container" />

   const [datetop, setDatetop] = React.useState('');

   
   
   function firstdateIndex(e){
   
   for (let i = 0; i < index22.length; i++){
   
   
   console.log(document.getElementById('datetopvalue').value);
   if (document.getElementById('datetopvalue').value === index22[i]){
   console.log(index22.indexOf(index22[i]));
   firstopenarray.unshift(index22.slice(index22.indexOf(index22[i]), 153));
   return firstopenarray;
   console.log(firstopenarray);
   }
   
   
   }
   }
   console.log(firstdateIndex);

  

   const [firstentirearray, setFirstentirearray] = React.useState([]);



  
  
   
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   const GLOBE1 = {
    states: [
      {
    name: 'Norfolk', 
    counties: [{
        name: 'MA',
        towns: ['Avon, MA', 'Bellingham, MA', 'Braintree, MA',  'Brookline, MA', 'Canton, MA', 'Cohasset, MA', 'Dedham, MA', 'Dover, MA', 'Foxboro, MA', 'Franklin, MA', 'Holbrook, MA', 'Medfield, MA', 'Medway, MA', 'Millis, MA', 'Milton, MA', 'Needham, MA',  'Norfolk, MA', 'Norwood, MA', 'Plainville, MA', 'Quincy, MA', 'Randolph, MA', 'Sharon, MA', 'Stoughton, MA', 'Walpole, MA', 'Wellesley, MA', 'Westwood, MA', 'Weymouth, MA', 'Wrentham, MA']
    }
    ]
  },
  {name: 'Middlesex', counties: [{name: 'MA', towns: ['Acton, MA',  'Arlington, MA', 'Ashby, MA', 'Ashland, MA', 'Ayer, MA', 'Bedford, MA', 'Belmont, MA', 'Billerica, MA', 'Boxborough, MA', 'Burlington, MA',  'Cambridge, MA',  'Carlisle, MA', 'Chelmsford, MA',  'Concord, MA', 'Dracut, MA', 'Dunstable, MA', 'Everett, MA', 'Framingham, MA', 'Groton, MA', 'Holliston, MA', 'Hopkinton, MA', 'Hudson, MA', 'Lexington, MA', 'Lincoln, MA',  'Littleton, MA',  'Lowell, MA',  'Malden, MA', 'Marlborough, MA', 'Maynard, MA', 'Medford, MA', 'Melrose, MA', 'Natick, MA', 'Newton, MA', 'North Reading, MA',  'Pepperell, MA', 'Reading, MA', 'Sherborn, MA',  'Shirley, MA; Somerville, MA', 'Stoneham, MA', 'Stow, MA', 'Sudbury, MA', 'Tewksbury, MA', 'Townsend, MA; Tyngsborough, MA', 'Wakefield, MA', 'Waltham, MA', 'Watertown, MA', 'Wayland, MA', 'Westford, MA', 'Weston, MA', 'Wilmington, MA', 'Winchester, MA', 'Woburn, MA']}]},
  {name: 'Essex', counties: [{name: 'MA', towns: ['Amesbury, MA',  'Andover, MA', 'Beverly, MA', 'Boxford, MA', 'Danvers, MA', 'Essex, MA', 'Georgetown, MA', 'Gloucester, MA', 'Groveland, MA',  'Hamilton, MA', 'Haverhill, MA', 'Ipswich, MA', 'Lawrence, MA', 'Lynn, MA; Lynnfield, MA', 'Manchester, MA', 'Marblehead, MA',  'Merrimac, MA', 'Methuen, MA; Middleton, MA', 'Nahant, MA',  'Newbury, MA',  'Newburyport, MA; North Andover, MA', 'Peabody, MA',  'Rockport, MA',  'Rowley, MA', 'Salem, MA', 'Salisbury, MA', 'Saugus, MA',  'Swampscott, MA', 'Topsfield, MA', 'Wenham, MA',  'West Newbury, MA']}]},
  {name: 'Worcester', counties: [{name: 'MA', towns: ['Ashburnham, MA', 'Athol, MA',  'Auburn, MA',  'Barre, MA',  'Berlin, MA', 'Blackstone, MA',  'Bolton, MA', 'Boylston, MA',  'Brookfield, MA', 'Charlton, MA', 'Clinton, MA', 'Devens, MA', 'Douglas, MA',  'Dudley, MA', 'East Brookfield, MA', 'Fitchburg, MA', 'Gardner, MA', 'Grafton, MA',  'Hardwick, MA', 'Harvard, MA', 'Holden, MA', 'Hopedale, MA', 'Hubbardston, MA', 'Lancaster, MA', 'Leicester, MA',  'Leominster, MA',  'Lunenburg, MA', 'Mendon, MA', 'Milford, MA',  'Millbury, MA', 'Millville, MA', 'New Braintree, MA', 'North Brookfield, MA', 'Northborough, MA',  'Northbridge, MA', 'Oakham, MA',  'Oxford, MA', 'Paxton, MA', 'Petersham, MA', 'Phillipston, MA',  'Princeton, MA',  'Royalston, MA',  'Rutland, MA',  'Shrewsbury, MA',  'Southborough, MA', 'Southbridge, MA', 'Spencer, MA', 'Sterling, MA', 'Sturbridge, MA',  'Sutton, MA',  'Templeton, MA', 'Upton, MA',  'Uxbridge, MA',  'Warren, MA',  'Webster, MA',  'West Boylston, MA', 'West Brookfield, MA', 'Westborough, MA', 'Westminster, MA',  'Winchendon, MA', 'Worcester, MA']}]},
  {name: 'Plymouth', counties: [{name: 'MA', towns: ['Abington, MA', 'Bridgewater, MA', 'Brockton, MA', 'Carver, MA',  'Duxbury, MA',  'East Bridgewater, MA', 'Halifax, MA',  'Hanover, MA', 'Hanson, MA', 'Hingham, MA',  'Hull, MA', 'Kingston, MA',  'Lakeville, MA',  'Marion, MA',  'Marshfield, MA', 'Mattapoisett, MA', 'Middleboro, MA',  'Norwell, MA',  'Pembroke, MA', 'Plymouth, MA',  'Plympton, MA', 'Rochester, MA', 'Rockland, MA', 'Scituate, MA', 'Wareham, MA', 'West Bridgewater, MA', 'Whitman, MA']}]},
  {name: 'Suffolk', counties: [{name: 'MA', towns: ['Boston, MA', 'Chelsea, MA', 'Revere, MA', 'Winthrop, MA']}]},
  {name: 'Bristol', counties: [{name: 'MA', towns: ['Acushnet, MA', 'Attleboro, MA', 'Berkley, MA', 'Dartmouth, MA',  'Dighton, MA',  'Easton, MA', 'Fairhaven, MA', 'Fall River, MA', 'Freetown, MA', 'Mansfield, MA', 'New Bedford, MA', 'North Attleboro, MA', 'Norton, MA', 'Raynham, MA', 'Rehoboth, MA', 'Seekonk, MA', 'Somerset, MA',  'Swansea, MA', 'Taunton, MA', 'Westport, MA']}]},
  {name: 'Barnstable', counties: [{name: 'MA', towns: ['Barnstable, MA',  'Bourne, MA', 'Brewster, MA',  'Chatham, MA',  'Dennis, MA',  'Eastham, MA',  'Falmouth, MA', 'Harwich, MA',  'Mashpee, MA', 'Orleans, MA', 'Provincetown, MA', 'Sandwich, MA',  'Truro, MA', 'Wellfleet, MA',  'Yarmouth, MA']}]},
  {name: 'Hampden', counties: [{name: 'MA', towns: ['Agawam, MA',  'Blandford, MA', 'Brimfield, MA', 'Chester, MA',  'Chicopee, MA',  'East Longmeadow, MA', 'Granville, MA', 'Hampden, MA', 'Holland, MA', 'Holyoke, MA', 'Longmeadow, MA', 'Ludlow, MA',  'Monson, MA',  'Montgomery, MA', 'Palmer, MA', 'Russell, MA', 'Southwick, MA', 'Springfield, MA', 'Westfield, MA', 'Wilbraham, MA']}]},
  {name: 'Hampshire', counties: [{name: 'MA', towns: ['Amherst, MA',  'Belchertown, MA',  'Chesterfield, MA', 'Cummington, MA', 'Easthampton, MA',  'Goshen, MA', 'Granby, MA',  'Hadley, MA',  'Hatfield, MA', 'Huntington, MA',  'Middlefield, MA', 'Northampton, MA', 'Pelham, MA',  'Plainfield, MA',  'South Hadley, MA', 'Southampton, MA', 'Ware, MA', 'Westhampton, MA', 'Williamsburg, MA', 'Worthington, MA']}]},
  {name: 'Berkshire', counties: [{name: 'MA', towns: ['Adams, MA', 'Alford, MA', 'Becket, MA', 'Cheshire, MA', 'Clarksburg, MA', 'Dalton, MA', 'Egremont, MA', 'Florida, MA', 'Great Barrington, MA',  'Hancock, MA',  'Hinsdale, MA', 'Lanesborough, MA',  'Lee, MA', 'Lenox, MA', 'Monterey, MA; Mount Washington, MA', 'New Ashford, MA', 'New Marlboro, MA', 'North Adams, MA',  'Otis, MA', 'Peru, MA', 'Pittsfield, MA',  'Richmond, MA', 'Sandisfield, MA',  'Savoy, MA',  'Sheffield, MA', 'Stockbridge, MA', 'Tyringham, MA', 'Washington, MA', 'West Stockbridge, MA',  'Williamstown, MA', 'Windsor, MA']}]},
  {name: 'Dukes', counties: [{name: 'MA', towns: ['Aquinnah, MA',  'Chilmark, MA',  'Edgartown, MA', 'Gosnold, MA',  'Oak Bluffs, MA', 'Tisbury, MA']}]},
  {name: 'Franklin', counties: [{name: 'MA', towns: ['Ashfield, MA', 'Bernardston, MA', 'Buckland, MA', 'Charlemont, MA', 'Colrain, MA', 'Conway, MA', 'Deerfield, MA', 'Erving, MA; Gill, MA',  'Greenfield, MA',  'Hawley, MA',  'Heath, MA',  'Leverett, MA', 'Leyden, MA',  'Monroe, MA',  'Montague, MA',  'New Salem, MA', 'Northfield, MA', 'Orange, MA', 'Rowe, MA',  'Shelburne, MA', 'Shutesbury, MA',  'Sunderland, MA',  'Warwick, MA',  'Wendell, MA', 'Whately, MA']}]}
  ]
  };  

     //const [county, setCounty] = React.useState();
  
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
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
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
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 


async function brucewayne22a(e){ 
  //e.preventDefault();

  firstdateIndex();
  


  const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
    const data = await req.json()
    console.log(data); ////////////// all console.logs to here... 

    let newArray = [...firstopenarray];
    //console.log(data);

    let norfolkcounty = [];
    let norfolkcountygreat = [];
    for (let i = 0; i<data.length; i++){
      if ((data[i].year === 2022 && data[i].county === `${county}` && data[i].townstate === `${towntop}` && data[i].saleprice > `${price1}` && data[i].saleprice < `${price2}`) && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
        data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
        || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
        || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
        || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
        || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][1211] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] 
        || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143]
        || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153]) ){
        norfolkcounty.push(data[i]);
       // console.log(norfolkcounty);
       norfolkcounty.sort((a, b) => a.saleprice - b.saleprice);
       setWestmanor(norfolkcounty);

       if (data[i].saleprice < data[i].listprice){
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
  
    firstdateIndex();
    
  
  
    const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
      const data = await req.json()
      console.log(data); ////////////// all console.logs to here... 

      let newArray = [...firstopenarray];
      // console.log(data);
       let greatless = []; // 1665 objects here
       let great = []; // 0 here
       let less = [];
       const maxmin = [];
       for (let i = 0; i<data.length; i++){
       if ((data[i].year === 2022 && data[i].county === `${county}` && data[i].townstate === `${towntop}` && data[i].saleprice > `${price1}` && data[i].saleprice < `${price2}`) && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
         data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
         || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
         || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
         || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
         || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][1211] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] 
         || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143]
         || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153]) ){
         greatless.push(data[i]); // 1665 objects here
         
       if (data[i].saleprice < data[i].listprice){
         great.push(data[i]);
         //console.log(great);
       }
       if (data[i].saleprice < data[i].listprice){
         less.push(data[i]);
         //console.log(less);
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
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount2 = Math.ceil(norfolkcountygreat21.length / PER_PAGE);  


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   
   
   function firstdateIndex21(e){
   
   for (let i = 0; i < index21.length; i++){
   
   
   console.log(document.getElementById('datetopvalue').value);
   if ((document.getElementById('datetopvalue').value).substring(0, 5) === index21[i].substring(0, 5)){
   console.log(index21.indexOf(index21[i]));
   openarraytop21.unshift(index21.splice(index21.indexOf(index21[i]), 120));
   return openarraytop21;
   console.log(openarraytop21);
   }
   }
   }
   console.log(firstdateIndex21);



   
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
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount3 = Math.ceil(westmanor21.length / PER_PAGE);  


////////////////////////////////////////////////////////////////////////////////////////////////////////////



  
   async function brucewayne21a(e){ 
    //e.preventDefault();
  
    firstdateIndex21();
    
  
  
    const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
      const data = await req.json()
      console.log(data); ////////////// all console.logs to here... 

      let newArray = [...openarraytop21];
      //console.log(data);
      let norfolkcounty = [];
      let norfolkcountygreat = [];
      for (let i = 0; i<data.length; i++){
        if ((data[i].year === 2021 && data[i].county === `${county}` && data[i].townstate === `${towntop}` && data[i].saleprice > `${price1}` && data[i].saleprice < `${price2}`) && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
          data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
          || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
          || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
          || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
          || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][1211] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] 
          || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143]
          || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153]) ){
          norfolkcounty.push(data[i]);
         // console.log(norfolkcounty);
         norfolkcounty.sort((a, b) => a.saleprice - b.saleprice);
         setWestmanor21(norfolkcounty);


         if (data[i].saleprice < data[i].listprice){
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


   async function brucewayne21b(e){ 
    //e.preventDefault();

    const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
    const data = await req.json()
    console.log(data); ////////////// all console.logs to here... 

  
    firstdateIndex21();

    let newArray = [...openarraytop21];
       // console.log(data);
       let greatless = []; // 1665 objects here
       let great = []; // 0 here
       let less = [];
       const maxmin = [];
       for (let i = 0; i<data.length; i++){
       if ((data[i].year === 2021 && data[i].county === `${county}` && data[i].townstate === `${towntop}` && data[i].saleprice > `${price1}` && data[i].saleprice < `${price2}`) && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
         data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
         || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
         || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
         || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
         || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][1211] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] 
         || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143]
         || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153])){
         greatless.push(data[i]); // 1665 objects here
         
       if (data[i].saleprice < data[i].listprice){
         great.push(data[i]);
         //console.log(great);
       }
       if (data[i].saleprice < data[i].listprice){
         less.push(data[i]);
         //console.log(less);
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


  
   
   
   
   
   ///////////////////////////////////
   //Barnstable county regardless of timeline - price point sales avg DOM year recent - no calender state...
   
   const [pricerangecounty1, setPricerangecounty1] = React.useState();
   const [pricerangetown1, setPricerangetown1] = React.useState();
   const [selectedState2, setSelectedState2] = React.useState(); // MA

   const availableState2 = GLOBE1.states.find((s) => s.name === pricerangecounty1); // that is what this says...
   const availableTowns2 = availableState2?.counties?.find( //
    (c) => c.name === selectedState2 //
    ); //

    const [threek13, setThreek13] = React.useState([]);

////pagination...


const [currentPage4, setCurrentPage4] = React.useState(0);




function handlePageClick4({ selected: selectedPage}){
  setCurrentPage4(selectedPage);
}

const offset4 = currentPage4 * PER_PAGE;

const currentPageData4 = threek13
.slice(offset4, offset4 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount4 = Math.ceil(threek13.length / PER_PAGE);  


////////////////////////////////////////////////////////////////////////////////////////////////////////////


const [fourk13, setFourk13] = React.useState([]);

////pagination...




const [currentPage6, setCurrentPage6] = React.useState(0);


function handlePageClick6({ selected: selectedPage}){
  setCurrentPage6(selectedPage);
}





const offset6 = currentPage6 * PER_PAGE;

const currentPageData6 = fourk13
.slice(offset6, offset6 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

const pageCount6 = Math.ceil(fourk13.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


const [fourk14, setFourk14] = React.useState([]);

////pagination...




const [currentPage7, setCurrentPage7] = React.useState(0);


function handlePageClick7({ selected: selectedPage}){
  setCurrentPage7(selectedPage);
}





const offset7 = currentPage7 * PER_PAGE;

const currentPageData7 = fourk14
.slice(offset7, offset7 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

const pageCount7 = Math.ceil(fourk14.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////












const [sevenk13, setSevenk13] = React.useState([]); 

    ////pagination...




const [currentPage9, setCurrentPage9] = React.useState(0);


function handlePageClick9({ selected: selectedPage}){
  setCurrentPage9(selectedPage);
}





const offset9 = currentPage9 * PER_PAGE;

const currentPageData9 = sevenk13
.slice(offset9, offset9 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

const pageCount9 = Math.ceil(sevenk13.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////




const [sevenfivek13, setSevenfivek13] = React.useState([]);


////pagination...




const [currentPage11, setCurrentPage11] = React.useState(0);


function handlePageClick11({ selected: selectedPage}){
setCurrentPage11(selectedPage);
}


const offset11 = currentPage11 * PER_PAGE;

const currentPageData11 = sevenfivek13
.slice(offset11, offset11 + PER_PAGE)
.map((item, index) => (

<ul data-index={index}>
<br/>
<div className='borders'>
<img className='modalin' src={image}></img>
<br/>

        <Popup
          trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
          position="center"
          modal
          nested       
        >

<div className="modal">

     
      <div className="header">West Manor</div>
      <div>
        
      

      <ul data-index={index}>
<br/>
<div className='borders'>
<img className='modalin' src={image}></img>
<br/>
<br/>
<br/>
<br/>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
<td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
<td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
<td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
</div>
</ul>



</div>
      </div>
          
        </Popup>
      


<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>

</div>
</ul>



));

const pageCount11 = Math.ceil(sevenfivek13.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////





   



    async function populateQuoteperc(e){ //this functions onClick...
      const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
      const data = await req.json();
      //if (data.status ==='ok'){
        console.log(data) // all 15k objects...
        
        let sales= [];
        let fourteen = [];
        let thirty = [];
        let fortyfive = [];
        let ninety = [];
        let onetwenty = [];
        let onetwoone = [];
    
        let less14 = []; // 0 here
        let less30 = [];
        let less45 = [];
        let less90 = [];
        let less120 = [];
        let less121 = [];
    
        let twentytwo = [
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
        
        
    
    
        //dateArray.slice(setDate, ...dateArray(setDate[91])); console.log(dateArray);
    
    
        for (let i = 0; i<data.length; i++){
          if (data[i].county ===`${county3}` && data[i].townstate === `${town2}` && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
            sales.push(data[i]);
            console.log(sales);
            if (data[i].DOM <= 14 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
              fourteen.push(data[i]);
              console.log(fourteen);
              //fourteen[i].differential
            }
            if (data[i].DOM > 14 && data[i].DOM <= 30 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
              thirty.push(data[i]);
            }
            if (data[i].DOM > 30 && data[i].DOM <= 45 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
              fortyfive.push(data[i]);
            }
            if (data[i].DOM > 45 && data[i].DOM <= 90 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` ){
              ninety.push(data[i]);
              console.log(ninety);
            }
            if (data[i].DOM > 90 && data[i].DOM <= 120 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
              onetwenty.push(data[i]);
            } 
    
    
            
    
            /////// less than or equal to arrays below...
    
            if (data[i].DOM > 120 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
              onetwoone.push(data[i]);
            }
            if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM <= 14 ){
              less14.push(data[i]);
              console.log(less14);
            }
            if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
              less30.push(data[i]);
            }
            if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
              less45.push(data[i]);
            }
            if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
              less90.push(data[i]);
            }
            if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
              less120.push(data[i]);
            }
            if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 120){
              less121.push(data[i]);
            }
            
            
            let sale14 = fourteen.length; //provides the length of all sales 
            let sale30 = thirty.length;
            let sale45 = fortyfive.length;
            let sale90 = ninety.length;
            let sale120 = onetwenty.length;
            let sale121 = onetwoone.length;
    
            let lengthless14 = less14.length; //provides the length of all sales below list price seperated via specified DOM 
            let lengthless30 = less30.length;
            let lengthless45 = less45.length;
            let lengthless90 = less90.length;
            let lengthless120 = less120.length;
            let lengthless121 = less121.length;
    
            const below14 =  Math.round((lengthless14 / sale14) * 100) || 0;
            const below30 =  Math.round((lengthless30 / sale30)  * 100) || 0;
            const below45 =  Math.round((lengthless45 / sale45)  * 100) || 0;
            const below90 =  Math.round((lengthless90 / sale90)  * 100) || 0;
            const below120 =  Math.round((lengthless120 / sale120)  * 100) || 0;
            const below121 =  Math.round((lengthless121 / sale121)  * 100) || 0;
    
            
    
    
            document.getElementById('sales14').innerHTML = sale14;
            document.getElementById('sales30').innerHTML = sale30;
            document.getElementById('sales45').innerHTML = sale45;
            document.getElementById('sales90').innerHTML = sale90;
            document.getElementById('sales120').innerHTML = sale120;
            document.getElementById('sales121').innerHTML = sale121;
    
    
    
            document.getElementById('rates14').innerHTML = `${below14}%`;
            document.getElementById('rates30').innerHTML = `${below30}%`;
            document.getElementById('rates45').innerHTML = `${below45}%`;
            document.getElementById('rates90').innerHTML = `${below90}%`;
            document.getElementById('rates120').innerHTML = `${below120}%`;
            document.getElementById('rates121').innerHTML = `${below121}%`;
    
            document.getElementById('fraction14').innerHTML = `${lengthless14}/${sale14}`;
            document.getElementById('fraction30').innerHTML = `${lengthless30}/${sale30}`;
            document.getElementById('fraction45').innerHTML = `${lengthless45}/${sale45}`;
            document.getElementById('fraction90').innerHTML = `${lengthless90}/${sale90}`;
            document.getElementById('fraction120').innerHTML = `${lengthless120}/${sale120}`;
            document.getElementById('fraction121').innerHTML = `${lengthless121}/${sale121}`;
    
            let differential = 0;
            function add(item, counter, array){
             differential+=(item.differential); 
            }
            fourteen.forEach(add);
            console.log(differential);
    
            let differential2 = 0;
            function add2(item, counter, array){
              differential2+=(item.differential);
            }
            thirty.forEach(add2);
            console.log(differential);
            
            let differential3 = 0;
            
            function add3(item, counter, array){
              differential3+=(item.differential);
            }
    
            fortyfive.forEach(add3);
    
            let differential4 = 0;
            function add4(item, counter, array){
              differential4+=(item.differential);
            }
    
            ninety.forEach(add4);
    
            let differential5 = 0;
            function add5(item, counter, array){
              differential5+=(item.differential);
            }
    
            onetwenty.forEach(add5); 
    
            let differential6 = 0;
            function add6(item, counter, array){
              differential6+=(item.differential);
            }
    
            onetwoone.forEach(add6); 
            console.log(differential6);
 
            const formatter = new Intl.NumberFormat('en-US', {
             style: 'currency',
             currency: 'USD',
             minimumFractionDigits: 0
            })
    
    
           
            // console.log(saleprice);
           let averagediff14 = formatter.format(Math.round( differential / sale14 ) || 0);
           let averagediff30 = formatter.format(Math.round( differential2 / sale30 ) || 0);
           let averagediff45 = formatter.format(Math.round( differential3 / sale45 ) || 0);
           let averagediff90 = formatter.format(Math.round( (differential4) / sale90 ) || 0);
           let averagediff120 = formatter.format(Math.round( differential5 / sale120 ) || 0);
           let averagediff121 = formatter.format(Math.round( differential6 / sale121 ) || 0);
    
            
           
            document.getElementById('duff14').innerHTML = averagediff14;
            document.getElementById('duff30').innerHTML = averagediff30;
            document.getElementById('duff45').innerHTML = averagediff45;
            document.getElementById('duff90').innerHTML = averagediff90;
            document.getElementById('duff120').innerHTML = averagediff120;
            document.getElementById('duff121').innerHTML = averagediff121;
    
            //document.getElementById('calvalue').innerHTML = `${date}`;
    
    
          }
        }
      }









   
      async function sealteam1(e){ 
        //e.preventDefault();
    
        const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
        const data = await req.json()
        console.log(data); ////////////// all console.logs to here... 
    
        let sales = [];
         let threek = [];
         let fourk = [];
         let sevenk = [];
         let sevenfivek = [];
         for (let i = 0; i<data.length; i++){
            if (data[i].county === `${pricerangecounty1}`&& data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2022' || data[i].saledate ==='1/2/2022' || data[i].saledate ==='1/3/2022' || data[i].saledate ==='1/4/2022' || data[i].saledate ==='1/5/2022' || data[i].saledate ==='1/6/2022' || data[i].saledate ==='1/7/2022' || data[i].saledate ==='1/8/2022' || data[i].saledate ==='1/9/2022' || data[i].saledate ==='1/10/2022' || data[i].saledate ==='1/11/2022' || data[i].saledate ==='1/12/2022' || data[i].saledate ==='1/13/2022' || data[i].saledate ==='1/14/2022' || data[i].saledate ==='1/15/2022' || data[i].saledate ==='1/16/2022' || data[i].saledate ==='1/17/2022' || data[i].saledate ==='1/18/2022' || data[i].saledate ==='1/19/2022' || data[i].saledate ==='1/20/2022' || data[i].saledate ==='1/21/2022' || data[i].saledate ==='1/22/2022' || data[i].saledate ==='1/23/2022' || data[i].saledate ==='1/24/2022' || data[i].saledate ==='1/25/2022' || data[i].saledate ==='1/26/2022' || data[i].saledate ==='1/27/2022'|| data[i].saledate ==='1/28/2022'|| data[i].saledate ==='1/29/2022' || data[i].saledate ==='1/30/2022' || data[i].saledate ==='1/31/2022'
            || data[i].saledate === '2/1/2022' || data[i].saledate ==='2/2/2022' || data[i].saledate ==='2/3/2022' || data[i].saledate ==='2/4/2022' || data[i].saledate ==='2/5/2022' || data[i].saledate ==='2/6/2022' || data[i].saledate ==='2/7/2022' || data[i].saledate ==='2/8/2022' || data[i].saledate ==='2/9/2022' || data[i].saledate ==='2/10/2022' || data[i].saledate ==='2/11/2022' || data[i].saledate ==='2/12/2022' || data[i].saledate ==='2/13/2022' || data[i].saledate ==='2/14/2022' || data[i].saledate ==='2/15/2022'|| data[i].saledate ==='2/16/2022'|| data[i].saledate ==='2/17/2022' || data[i].saledate ==='2/18/2022' || data[i].saledate ==='2/19/2022' || data[i].saledate ==='2/20/2022' || data[i].saledate ==='2/21/2022' || data[i].saledate ==='2/22/2022' || data[i].saledate ==='2/23/2022' || data[i].saledate ==='2/24/2022' || data[i].saledate ==='2/25/2022' || data[i].saledate ==='2/26/2022'|| data[i].saledate ==='2/27/2022' || data[i].saledate ==='2/28/2022'
            || data[i].saledate === '3/1/2022' || data[i].saledate ==='3/2/2022'|| data[i].saledate ==='3/3/2022' || data[i].saledate ==='3/4/2022' || data[i].saledate ==='3/5/2022' || data[i].saledate ==='3/6/2022' || data[i].saledate ==='3/7/2022' || data[i].saledate ==='3/8/2022' || data[i].saledate ==='3/9/2022'|| data[i].saledate ==='3/10/2022'|| data[i].saledate ==='3/11/2022' || data[i].saledate ==='3/12/2022'|| data[i].saledate === '3/13/2022'|| data[i].saledate ==='3/14/2022' || data[i].saledate ==='3/15/2022' || data[i].saledate ==='3/16/2022' || data[i].saledate ==='3/17/2022' || data[i].saledate ==='3/18/2022' || data[i].saledate ==='3/19/2022' || data[i].saledate ==='3/20/2022' || data[i].saledate ==='3/21/2022'|| data[i].saledate ==='3/22/2022' || data[i].saledate ==='3/23/2022' || data[i].saledate ==='3/24/2022' || data[i].saledate ==='3/25/2022' || data[i].saledate ==='3/26/2022' || data[i].saledate ==='3/27/2022'|| data[i].saledate ==='3/28/2022' || data[i].saledate ==='3/29/2022' || data[i].saledate ==='3/30/2022' || data[i].saledate ==='3/31/2022' || data[i].saledate ==='4/1/2022'|| data[i].saledate ==='4/2/2022' || data[i].saledate ==='4/3/2022' || data[i].saledate ==='4/4/2022' || data[i].saledate ==='4/5/2022' || data[i].saledate ==='4/6/2022' || data[i].saledate ==='4/7/2022' || data[i].saledate ==='4/8/2022' || data[i].saledate ==='4/9/2022' || data[i].saledate ==='4/10/2022' || data[i].saledate ==='4/11/2022' || data[i].saledate ==='4/12/2022' || data[i].saledate ==='4/13/2022' || data[i].saledate ==='4/14/2022' || data[i].saledate ==='4/15/2022' || data[i].saledate ==='4/16/2022' || data[i].saledate ==='4/17/2022' || data[i].saledate ==='4/18/2022' || data[i].saledate ==='4/19/2022' || data[i].saledate ==='4/20/2022' || data[i].saledate ==='4/21/2022' || data[i].saledate ==='4/22/2022' || data[i].saledate ==='4/23/2022' || data[i].saledate ==='4/24/2022' || data[i].saledate ==='4/25/2022' || data[i].saledate ==='4/26/2022' || data[i].saledate ==='4/27/2022'|| data[i].saledate ==='4/28/2022'|| data[i].saledate ==='4/29/2022' || data[i].saledate ==='4/30/2022' 
            || data[i].saledate === '5/1/2022' || data[i].saledate ==='5/2/2022' || data[i].saledate ==='5/3/2022' || data[i].saledate ==='5/4/2022' || data[i].saledate ==='5/5/2022' || data[i].saledate ==='5/6/2022' || data[i].saledate ==='5/7/2022' || data[i].saledate ==='5/8/2022' || data[i].saledate ==='5/9/2022' || data[i].saledate ==='5/10/2022' || data[i].saledate ==='5/11/2022' || data[i].saledate ==='5/12/2022' || data[i].saledate ==='5/13/2022' || data[i].saledate ==='5/14/2022' || data[i].saledate ==='5/15/2022'|| data[i].saledate ==='5/16/2022'|| data[i].saledate ==='5/17/2022' || data[i].saledate ==='5/18/2022' || data[i].saledate ==='5/19/2022' || data[i].saledate ==='5/20/2022' || data[i].saledate ==='5/21/2022' || data[i].saledate ==='5/22/2022' || data[i].saledate ==='5/23/2022' || data[i].saledate ==='5/24/2022' || data[i].saledate ==='5/25/2022' || data[i].saledate ==='5/26/2022'|| data[i].saledate ==='5/27/2022' || data[i].saledate ==='5/28/2022'
            || data[i].saledate === '5/29/2022' || data[i].saledate === '5/30/2022' || data[i].saledate ==='5/31/2022') ){
                 sales.push(data[i]);
             //console.log(sales);

             if (data[i].saleprice > 100000 && data[i].saleprice <= 349999){
               threek.push(data[i]);
               threek.sort((a, b) => a.saleprice - b.saleprice);
               setThreek13(threek);
             }
             if (data[i].saleprice > 349999 && data[i].saleprice <= 499999){
               fourk.push(data[i]);
               fourk.sort((a, b) => a.saleprice - b.saleprice);
               setFourk13(fourk);
             }
             if (data[i].saleprice > 499999 && data[i].saleprice <= 749999){
               sevenk.push(data[i]);
               sevenk.sort((a, b) => a.saleprice - b.saleprice);
               setSevenk13(sevenk);
             }
             if (data[i].saleprice > 749999){
               sevenfivek.push(data[i]);
               sevenfivek.sort((a, b) => a.saleprice - b.saleprice);
               setSevenfivek13(sevenfivek);
             }
     
             
             const sales3k = threek.length;
             const sales4k = fourk.length;
             const sales7k = sevenk.length;
             const sales75k = sevenfivek.length;
     
     
             document.getElementById('threek').innerHTML = sales3k;
             document.getElementById('fourk').innerHTML = sales4k;
             document.getElementById('sevenk').innerHTML = sales7k;
             document.getElementById('sevenfivek').innerHTML = sales75k;
     
             let DOM = 0;
             let DOM2 = 0;
             let DOM3 = 0;
             let DOM4 = 0;
             function add(item, counter, array){
              DOM+=(item.DOM);//spot on excel
              DOM2+=(item.DOM);
              DOM3+=(item.DOM);
              DOM4+=(item.DOM);
             }
             threek.forEach(add); /////////////// double check the avg DOM JS...
             //console.log(DOM);
            let average3k = Math.round(DOM / sales3k) || 0;
            document.getElementById('s3k').innerHTML = average3k;
            fourk.forEach(add);
            let average4k = Math.round(DOM2 / sales4k) || 0;
            document.getElementById('s4k').innerHTML = average4k;
            sevenk.forEach(add);
            let average7k = Math.round(DOM3 / sales7k) || 0;
            document.getElementById('s7k').innerHTML = average7k;
            sevenfivek.forEach(add);
            let average75k = Math.round(DOM4 / sales75k) || 0;
            document.getElementById('s75k').innerHTML = average75k;
           }
     
             }  //setData(JSON.stringify(data));
      
    
            
          
          }
         
        
      
      
       
      
          
          
  
  
  
  
  
     
    
     
     
const [threek14, setThreek14] = React.useState([]);

     




////pagination...


const [currentPage5, setCurrentPage5] = React.useState(0);




function handlePageClick5({ selected: selectedPage}){
  setCurrentPage5(selectedPage);
}

const offset5 = currentPage5 * PER_PAGE;

const currentPageData5 = threek14
.slice(offset5, offset5 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount5 = Math.ceil(threek14.length / PER_PAGE);  


////////////////////////////////////////////////////////////////////////////////////////////////////////////



     const [sevenk14, setSevenk14] = React.useState([]);   



     ////pagination...
     
     
     
     
     const [currentPage8, setCurrentPage8] = React.useState(0);
     
     
     function handlePageClick8({ selected: selectedPage}){
       setCurrentPage8(selectedPage);
     }
     
     
     
     
     const offset8 = currentPage8 * PER_PAGE;
     
     const currentPageData8 = sevenk14
     .slice(offset8, offset8 + PER_PAGE)
     .map((item, index) => (
     
       <ul data-index={index}>
       <br/>
       <div className='borders'>
        <img className='modalin' src={image}></img>
        <br/>
        
                 <Popup
                   trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
                   position="center"
                   modal
                   nested       
                 >
       
       <div className="modal">
       
              
               <div className="header">West Manor</div>
               <div>
                 
               
       
               <ul data-index={index}>
       <br/>
       <div className='borders'>
        <img className='modalin' src={image}></img>
        <br/>
        <br/>
        <br/>
        <br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
        </div>
        </ul>
        
        
       
       </div>
               </div>
                   
                 </Popup>
               
        
        
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
       
        </div>
        </ul>
       
        
        
       ));
     
     const pageCount8 = Math.ceil(sevenk14.length / PER_PAGE); 
     
     
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////



     const [sevenfivek14, setSevenfivek14] = React.useState([]);


     ////pagination...
     
     
     
     
     const [currentPage10, setCurrentPage10] = React.useState(0);
     
     
     function handlePageClick10({ selected: selectedPage}){
       setCurrentPage10(selectedPage);
     }
     
     
     
     
     const offset10 = currentPage10 * PER_PAGE;
     
     const currentPageData10 = sevenfivek14
     .slice(offset10, offset10 + PER_PAGE)
     .map((item, index) => (
     
       <ul data-index={index}>
       <br/>
       <div className='borders'>
        <img className='modalin' src={image}></img>
        <br/>
        
                 <Popup
                   trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
                   position="center"
                   modal
                   nested       
                 >
       
       <div className="modal">
       
              
               <div className="header">West Manor</div>
               <div>
                 
               
       
               <ul data-index={index}>
       <br/>
       <div className='borders'>
        <img className='modalin' src={image}></img>
        <br/>
        <br/>
        <br/>
        <br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
        <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
        </div>
        </ul>
        
        
       
       </div>
               </div>
                   
                 </Popup>
               
        
        
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
        <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
       
        </div>
        </ul>
       
        
        
       ));
     
     const pageCount10 = Math.ceil(sevenfivek14.length / PER_PAGE); 
  
  
  
  
     async function sealteam2(e){ 
      //e.preventDefault();
  
      const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
      const data = await req.json()
      console.log(data); ////////////// all console.logs to here... 
  
      let sales21 = [];
      let threek21 = [];
      let fourk21 = [];
      let sevenk21 = [];
      let sevenfivek21 = [];
      for (let i = 0; i<data.length; i++){
        if (data[i].county === `${pricerangecounty1}`&& data[i].townstate === `${pricerangetown1}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2021' || data[i].saledate ==='1/2/2021' || data[i].saledate ==='1/3/2021' || data[i].saledate ==='1/4/2021' || data[i].saledate ==='1/5/2021' || data[i].saledate ==='1/6/2021' || data[i].saledate ==='1/7/2021' || data[i].saledate ==='1/8/2021' || data[i].saledate ==='1/9/2021' || data[i].saledate ==='1/10/2021' || data[i].saledate ==='1/11/2021' || data[i].saledate ==='1/12/2021' || data[i].saledate ==='1/13/2021' || data[i].saledate ==='1/14/2021' || data[i].saledate ==='1/15/2021' || data[i].saledate ==='1/16/2021' || data[i].saledate ==='1/17/2021' || data[i].saledate ==='1/18/2021' || data[i].saledate ==='1/19/2021' || data[i].saledate ==='1/20/2021' || data[i].saledate ==='1/21/2021' || data[i].saledate ==='1/22/2021' || data[i].saledate ==='1/23/2021' || data[i].saledate ==='1/24/2021' || data[i].saledate ==='1/25/2021' || data[i].saledate ==='1/26/2021' || data[i].saledate ==='1/27/2021'|| data[i].saledate ==='1/28/2021'|| data[i].saledate ==='1/29/2021' || data[i].saledate ==='1/30/2021' || data[i].saledate ==='1/31/2021'
        || data[i].saledate === '2/1/2021' || data[i].saledate ==='2/2/2021' || data[i].saledate ==='2/3/2021' || data[i].saledate ==='2/4/2021' || data[i].saledate ==='2/5/2021' || data[i].saledate ==='2/6/2021' || data[i].saledate ==='2/7/2021' || data[i].saledate ==='2/8/2021' || data[i].saledate ==='2/9/2021' || data[i].saledate ==='2/10/2021' || data[i].saledate ==='2/11/2021' || data[i].saledate ==='2/12/2021' || data[i].saledate ==='2/13/2021' || data[i].saledate ==='2/14/2021' || data[i].saledate ==='2/15/2021'|| data[i].saledate ==='2/16/2021'|| data[i].saledate ==='2/17/2021' || data[i].saledate ==='2/18/2021' || data[i].saledate ==='2/19/2021' || data[i].saledate ==='2/20/2021' || data[i].saledate ==='2/21/2021' || data[i].saledate ==='2/22/2021' || data[i].saledate ==='2/23/2021' || data[i].saledate ==='2/24/2021' || data[i].saledate ==='2/25/2021' || data[i].saledate ==='2/26/2021'|| data[i].saledate ==='2/27/2021' || data[i].saledate ==='2/28/2021'
        || data[i].saledate === '3/1/2021' || data[i].saledate ==='3/2/2021'|| data[i].saledate ==='3/3/2021' || data[i].saledate ==='3/4/2021' || data[i].saledate ==='3/5/2021' || data[i].saledate ==='3/6/2021' || data[i].saledate ==='3/7/2021' || data[i].saledate ==='3/8/2021' || data[i].saledate ==='3/9/2021'|| data[i].saledate ==='3/10/2021'|| data[i].saledate ==='3/11/2021' || data[i].saledate ==='3/12/2021'|| data[i].saledate === '3/13/2021'|| data[i].saledate ==='3/14/2021' || data[i].saledate ==='3/15/2021' || data[i].saledate ==='3/16/2021' || data[i].saledate ==='3/17/2021' || data[i].saledate ==='3/18/2021' || data[i].saledate ==='3/19/2021' || data[i].saledate ==='3/20/2021' || data[i].saledate ==='3/21/2021'|| data[i].saledate ==='3/22/2021' || data[i].saledate ==='3/23/2021' || data[i].saledate ==='3/24/2021' || data[i].saledate ==='3/25/2021' || data[i].saledate ==='3/26/2021' || data[i].saledate ==='3/27/2021'|| data[i].saledate ==='3/28/2021' || data[i].saledate ==='3/29/2021' || data[i].saledate ==='3/30/2021' || data[i].saledate ==='3/31/2021' || data[i].saledate ==='4/1/2021'|| data[i].saledate ==='4/2/2021' || data[i].saledate ==='4/3/2021' || data[i].saledate ==='4/4/2021' || data[i].saledate ==='4/5/2021' || data[i].saledate ==='4/6/2021' || data[i].saledate ==='4/7/2021' || data[i].saledate ==='4/8/2021' || data[i].saledate ==='4/9/2021' || data[i].saledate ==='4/10/2021' || data[i].saledate ==='4/11/2021' || data[i].saledate ==='4/12/2021' || data[i].saledate ==='4/13/2021' || data[i].saledate ==='4/14/2021' || data[i].saledate ==='4/15/2021' || data[i].saledate ==='4/16/2021' || data[i].saledate ==='4/17/2021' || data[i].saledate ==='4/18/2021' || data[i].saledate ==='4/19/2021' || data[i].saledate ==='4/20/2021' || data[i].saledate ==='4/21/2021' || data[i].saledate ==='4/22/2021' || data[i].saledate ==='4/23/2021' || data[i].saledate ==='4/24/2021' || data[i].saledate ==='4/25/2021' || data[i].saledate ==='4/26/2021' || data[i].saledate ==='4/27/2021'|| data[i].saledate ==='4/28/2021'|| data[i].saledate ==='4/29/2021' || data[i].saledate ==='4/30/2021' || 
        data[i].saledate === '5/1/2021' || data[i].saledate ==='5/2/2021' || data[i].saledate ==='5/3/2021' || data[i].saledate ==='5/4/2021' || data[i].saledate ==='5/5/2021' || data[i].saledate ==='5/6/2021' || data[i].saledate ==='5/7/2021' || data[i].saledate ==='5/8/2021' || data[i].saledate ==='5/9/2021' || data[i].saledate ==='5/10/2021' || data[i].saledate ==='5/11/2021' || data[i].saledate ==='5/12/2021' || data[i].saledate ==='5/13/2021' || data[i].saledate ==='5/14/2021' || data[i].saledate ==='5/15/2021'|| data[i].saledate ==='5/16/2021'|| data[i].saledate ==='5/17/2021' || data[i].saledate ==='5/18/2021' || data[i].saledate ==='5/19/2021' || data[i].saledate ==='5/20/2021' || data[i].saledate ==='5/21/2021' || data[i].saledate ==='5/22/2021' || data[i].saledate ==='5/23/2021' || data[i].saledate ==='5/24/2021' || data[i].saledate ==='5/25/2021' || data[i].saledate ==='5/26/2021'|| data[i].saledate ==='5/27/2021' || data[i].saledate ==='5/28/2021'
       || data[i].saledate === '5/29/2021' || data[i].saledate === '5/30/2021' || data[i].saledate ==='5/31/2021') ){
          sales21.push(data[i]);
          //console.log(sales);
        
          if (data[i].saleprice > 100000 && data[i].saleprice <= 349999){
            threek21.push(data[i]);
            threek21.sort((a, b) => a.saleprice - b.saleprice);
            setThreek14(threek21);
          }
          if (data[i].saleprice > 349999 && data[i].saleprice <= 499999){
            fourk21.push(data[i]);
            fourk21.sort((a, b) => a.saleprice - b.saleprice);
            setFourk14(fourk21);
          }
          if (data[i].saleprice > 499999 && data[i].saleprice <= 749999){
            sevenk21.push(data[i]);
            sevenk21.sort((a, b) => a.saleprice - b.saleprice);
            setSevenk14(sevenk21);
          }
          if (data[i].saleprice > 749999){
            sevenfivek21.push(data[i]);
            setSevenfivek14(sevenfivek21);
          }
  
          
          const sales3k21 = threek21.length;
          const sales4k21 = fourk21.length;
          const sales7k21 = sevenk21.length;
          const sales75k21 = sevenfivek21.length;
  
  
          document.getElementById('threek21').innerHTML = sales3k21;
          document.getElementById('fourk21').innerHTML = sales4k21;
          document.getElementById('sevenk21').innerHTML = sales7k21;
          document.getElementById('sevenfivek21').innerHTML = sales75k21;
  
         
         }
        } 
  
     
   
           }  
    
  
          
        
        
       
  
  
  
  
     
     
     
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
  
  
     async function sealteam3(e){ 
      //e.preventDefault();
  
      const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
      const data = await req.json()
      console.log(data); ////////////// all console.logs to here... 
  
      let sales85 = [];
      for (let i = 0; i<data.length; i++){
        if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
          sales85.push(data[i]);
          console.log(sales85);
  let TotalSales = [...sales85];
  console.log(TotalSales); // 74
         
  
  let TotalSalesamount = TotalSales.length;
  let EightFiveSales = Math.round((.85 * TotalSalesamount));
  let length85 = EightFiveSales;
  console.log(length85);
  
  let salesplice = TotalSales.splice(0, length85);  // 85% in accordance 
  console.log(salesplice); //62
  
  let sortTotalsalesDOM = salesplice.sort(function(a,b){
    return a.DOM - b.DOM;
  })
  console.log(sortTotalsalesDOM); // 63 in days on market order... this array is correct...
  
  let DOMTotalsales = (sortTotalsalesDOM[sortTotalsalesDOM.length - 1]);
  console.log(DOMTotalsales);
  
  let DOMTotalsalesinnerElement = DOMTotalsales.DOM; // **USE INDEX DOT NOTATION ex. data[i][0].DOM - should return 80...
  console.log(DOMTotalsalesinnerElement);
  
  document.getElementById('DOMTotalsalesinnerElement').innerHTML = '85% of sales sold @ ' + `${DOMTotalsalesinnerElement}` + 'days of ' + `${TotalSalesamount}` + ' Total Sales'; // showing 80...
  
  
  }
  
  }
  
    
  
         
         }
        
  
     
   
           
    
  
          
  
  
  
  
     
     
  
  
  
  
     async function sealteam4(e){ 
      //e.preventDefault();
  
      const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
      const data = await req.json()
      console.log(data); ////////////// all console.logs to here... 
  
      let sales85 = [];
      for (let i = 0; i<data.length; i++){
        if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].listprice < data[i].saleprice && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
          sales85.push(data[i]);
          console.log(sales85);
  let TotalSales = [...sales85];
  console.log(TotalSales); // 74
         
  
  let TotalSalesamount = TotalSales.length;
  let EightFiveSales = Math.round((.85 * TotalSalesamount));
  let length85 = EightFiveSales;
  console.log(length85);
  
  let salesplice = TotalSales.splice(0, length85);  // 85% in accordance 
  console.log(salesplice); //62
  
  let sortTotalsalesDOM = salesplice.sort(function(a,b){
    return a.DOM - b.DOM;
  })
  console.log(sortTotalsalesDOM); // 63 in days on market order... this array is correct...
  
  let DOMTotalsales = (sortTotalsalesDOM[sortTotalsalesDOM.length - 1]);
  console.log(DOMTotalsales);
  
  let DOMTotalsalesinnerElement = DOMTotalsales.DOM; // **USE INDEX DOT NOTATION ex. data[i][0].DOM - should return 80...
  console.log(DOMTotalsalesinnerElement);
  
  
  
  
  document.getElementById('DOM85innerElement').innerHTML = '85% of sales above list price sold @ ' + `${DOMTotalsalesinnerElement}` + 'days of ' + `${TotalSalesamount}` + ' Total Sales'; // showing 80...
  
  
  
  
  
  
  }
  
  }
  
      
  }
  
  
  
    
  
         
         
        
     
     
     
     
 // data[i].saledate ==='4/1/2022'|| data[i].saledate ==='4/2/2022' || data[i].saledate ==='4/3/2022' || data[i].saledate ==='4/4/2022' || data[i].saledate ==='4/5/2022' || data[i].saledate ==='4/6/2022' || data[i].saledate ==='4/7/2022' || data[i].saledate ==='4/8/2022' || data[i].saledate ==='4/9/2022' || data[i].saledate ==='4/10/2022' || data[i].saledate ==='4/11/2022' || data[i].saledate ==='4/12/2022' || data[i].saledate ==='4/13/2022' || data[i].saledate ==='4/14/2022' || data[i].saledate ==='4/15/2022' || data[i].saledate ==='4/16/2022' || data[i].saledate ==='4/17/2022' || data[i].saledate ==='4/18/2022' || data[i].saledate ==='4/19/2022' || data[i].saledate ==='4/20/2022' || data[i].saledate ==='4/21/2022' || data[i].saledate ==='4/22/2022' || data[i].saledate ==='4/23/2022' || data[i].saledate ==='4/24/2022' || data[i].saledate ==='4/25/2022' || data[i].saledate ==='4/26/2022' || data[i].saledate ==='4/27/2022'|| data[i].saledate ==='4/28/2022'|| data[i].saledate ==='4/29/2022' || data[i].saledate ==='4/30/2022'
     
     
     
     
     
     
     
     
       
       //////////////////////////////////////////////////////////////////////////////////////////////////////
       var [date, setDate] = React.useState(''); //'2/1/2022'
       var [pricevalue, setPricevalue] = React.useState(0);
       var [pricevalue2, setPricevalue2] = React.useState(0); 


       const [lastyear, setLastyear] = React.useState([]);

       ////pagination...
               
            
       const [currentPage80, setCurrentPage80] = React.useState(0);
            
            
       function handlePageClick80({ selected: selectedPage}){
         setCurrentPage80(selectedPage);
       }
       
       
       
       
       const offset80 = currentPage80 * PER_PAGE;
       
       const currentPageData80 = lastyear
       .slice(offset80, offset80 + PER_PAGE)
       .map((item, index) => (
       
         <ul data-index={index}>
         <br/>
         <div className='borders'>
          <img className='modalin' src={image}></img>
          <br/>
          
                   <Popup
                     trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
                     position="center"
                     modal
                     nested       
                   >
         
         <div className="modal">
         
                
                 <div className="header">West Manor</div>
                 <div>
                   
                 
         
                 <ul data-index={index}>
         <br/>
         <div className='borders'>
          <img className='modalin' src={image}></img>
          <br/>
          <br/>
          <br/>
          <br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
          </div>
          </ul>
          
          
         
         </div>
                 </div>
                     
                   </Popup>
                 
          
          
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
         
          </div>
          </ul>
         
          
          
         ));
       
       const pageCount80 = Math.ceil(lastyear.length / PER_PAGE); 
       
       
       
              const [lastyear2, setLastyear2] = React.useState([]);
       
              ////pagination...
               
            
       const [currentPage81, setCurrentPage81] = React.useState(0);
            
            
       function handlePageClick81({ selected: selectedPage}){
         setCurrentPage81(selectedPage);
       }
       
       
       
       
       const offset81 = currentPage81 * PER_PAGE;
       
       const currentPageData81 = lastyear2
       .slice(offset81, offset81 + PER_PAGE)
       .map((item, index) => (
       
         <ul data-index={index}>
         <br/>
         <div className='borders'>
          <img className='modalin' src={image}></img>
          <br/>
          
                   <Popup
                     trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
                     position="center"
                     modal
                     nested       
                   >
         
         <div className="modal">
         
                
                 <div className="header">West Manor</div>
                 <div>
                   
                 
         
                 <ul data-index={index}>
         <br/>
         <div className='borders'>
          <img className='modalin' src={image}></img>
          <br/>
          <br/>
          <br/>
          <br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
          <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
          </div>
          </ul>
          
          
         
         </div>
                 </div>
                     
                   </Popup>
                 
          
          
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
          <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
         
          </div>
          </ul>
         
          
          
         ));
       
       const pageCount81 = Math.ceil(lastyear2.length / PER_PAGE); 
       
       
       
       
       
       
       
 
  
  
       const [popquoteJan, setPopquoteJan] = React.useState(0);
  
       async function sealteam5(e){ 
         //e.preventDefault();
        // entireArrayIndex(); // dont need
 
 
         const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
         const data = await req.json()
         console.log(data); ////////////// all console.logs to here... 
 
         let newArray = [...firstentirearray]
               
    
         let barnstablecounty = [];
         let great = [];
         for (let i = 0; i<data.length; i++){
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice <= `${pricevalue2}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/3/2021' || data[i].saledate ==='1/4/2021' || data[i].saledate ==='1/5/2021' || data[i].saledate ==='1/6/2021' || data[i].saledate ==='1/7/2021' || data[i].saledate ==='1/8/2021' || data[i].saledate ==='1/9/2021' || data[i].saledate ==='1/10/2021' || data[i].saledate ==='1/11/2021' || data[i].saledate ==='1/12/2021' || data[i].saledate ==='1/13/2021' || data[i].saledate ==='1/14/2021' || data[i].saledate ==='1/15/2021' || data[i].saledate ==='1/16/2021' || data[i].saledate ==='1/17/2021' || data[i].saledate ==='1/18/2021' || data[i].saledate ==='1/19/2021' || data[i].saledate ==='1/20/2021' || data[i].saledate ==='1/21/2021' || data[i].saledate ==='1/22/2021' || data[i].saledate ==='1/23/2021' || data[i].saledate ==='1/24/2021' || data[i].saledate ==='1/25/2021' || data[i].saledate ==='1/26/2021' || data[i].saledate ==='1/27/2021'|| data[i].saledate ==='1/28/2021'|| data[i].saledate ==='1/29/2021' || data[i].saledate ==='1/30/2021' || data[i].saledate ==='1/31/2021'
           || data[i].saledate === '2/1/2021' || data[i].saledate ==='2/2/2021' || data[i].saledate ==='2/3/2021' || data[i].saledate ==='2/4/2021' || data[i].saledate ==='2/5/2021' || data[i].saledate ==='2/6/2021' || data[i].saledate ==='2/7/2021' || data[i].saledate ==='2/8/2021' || data[i].saledate ==='2/9/2021' || data[i].saledate ==='2/10/2021' || data[i].saledate ==='2/11/2021' || data[i].saledate ==='2/12/2021' || data[i].saledate ==='2/13/2021' || data[i].saledate ==='2/14/2021' || data[i].saledate ==='2/15/2021'|| data[i].saledate ==='2/16/2021'|| data[i].saledate ==='2/17/2021' || data[i].saledate ==='2/18/2021' || data[i].saledate ==='2/19/2021' || data[i].saledate ==='2/20/2021' || data[i].saledate ==='2/21/2021' || data[i].saledate ==='2/22/2021' || data[i].saledate ==='2/23/2021' || data[i].saledate ==='2/24/2021' || data[i].saledate ==='2/25/2021' || data[i].saledate ==='2/26/2021'|| data[i].saledate ==='2/27/2021' || data[i].saledate ==='2/28/2021'
           || data[i].saledate === '3/1/2021' || data[i].saledate ==='3/2/2021'|| data[i].saledate ==='3/3/2021' || data[i].saledate ==='3/4/2021' || data[i].saledate ==='3/5/2021' || data[i].saledate ==='3/6/2021' || data[i].saledate ==='3/7/2021' || data[i].saledate ==='3/8/2021' || data[i].saledate ==='3/9/2021'|| data[i].saledate ==='3/10/2021'|| data[i].saledate ==='3/11/2021' || data[i].saledate ==='3/12/2021'|| data[i].saledate === '3/13/2021'|| data[i].saledate ==='3/14/2021' || data[i].saledate ==='3/15/2021' || data[i].saledate ==='3/16/2021' || data[i].saledate ==='3/17/2021' || data[i].saledate ==='3/18/2021' || data[i].saledate ==='3/19/2021' || data[i].saledate ==='3/20/2021' || data[i].saledate ==='3/21/2021'|| data[i].saledate ==='3/22/2021' || data[i].saledate ==='3/23/2021' || data[i].saledate ==='3/24/2021' || data[i].saledate ==='3/25/2021' || data[i].saledate ==='3/26/2021' || data[i].saledate ==='3/27/2021'|| data[i].saledate ==='3/28/2021' || data[i].saledate ==='3/29/2021' || data[i].saledate ==='3/30/2021' || data[i].saledate ==='3/31/2021')){
             barnstablecounty.push(data[i]);
             setLastyear(barnstablecounty);
 
             if (data[i].saleprice < data[i].listprice){
               great.push(data[i]);
               setLastyear2(great);
               //jconsole.log(great);
             }
           
            // console.log(barnstablecounty.saledate);
 
            let length = barnstablecounty.length;
           // console.log(length);
           document.getElementById('quarterly').innerHTML = length;
           
           let greatlength = great.length;
           let atorabove = Math.round((greatlength / length) * 100);
           document.getElementById('catchmaxmil').innerHTML = `${atorabove}%`;
           
           
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
            barnstablecounty.forEach(add);
         
 
            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
             })
           // console.log(saleprice);
          // let average = Math.round(saleprice / length);
          // let averagelist = Math.round(listprice / length);
           let avgdom = Math.round(DOM / length );
           let avgdiff = formatter.format(Math.round(differential / length));


           let differential2 = 0
            function add2(item, counter, array){
             differential2+=(item.differential);
            }
            great.forEach(add2);

          
           //console.log(average);
          // console.log(averagelist);
           //console.log(avgdiff);
          // document.getElementById('harley2').innerHTML = average;
          // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
           
          document.getElementById('sultan2').innerHTML = `${avgdom}`;
           document.getElementById('lordof2').innerHTML = avgdiff;

       setPopquoteJan(formatter.format(Math.round( differential2 / greatlength ))); // title
 

 
         }
     
       }
     
     
     
     
     
     }
     
     
     
     
     const [lastyear3, setLastyear3] = React.useState([]);

       ////pagination...
       
    
const [currentPage82, setCurrentPage82] = React.useState(0);
    
    
function handlePageClick82({ selected: selectedPage}){
 setCurrentPage82(selectedPage);
}




const offset82 = currentPage82 * PER_PAGE;

const currentPageData82 = lastyear3
.slice(offset82, offset82 + PER_PAGE)
.map((item, index) => (

 <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
 
 <div className="modal">
 
        
         <div className="header">West Manor</div>
         <div>
           
         
 
         <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  <br/>
  <br/>
  <br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  </div>
  </ul>
  
  
 
 </div>
         </div>
             
           </Popup>
         
  
  
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
 
  </div>
  </ul>
 
  
  
 ));

const pageCount82 = Math.ceil(lastyear3.length / PER_PAGE); 




     const [lastyear4, setLastyear4] = React.useState([]);

      ////pagination...
       
    
const [currentPage83, setCurrentPage83] = React.useState(0);
    
    
function handlePageClick83({ selected: selectedPage}){
 setCurrentPage83(selectedPage);
}




const offset83 = currentPage83 * PER_PAGE;

const currentPageData83 = lastyear4
.slice(offset83, offset83 + PER_PAGE)
.map((item, index) => (

 <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
 
 <div className="modal">
 
        
         <div className="header">West Manor</div>
         <div>
           
         
 
         <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  <br/>
  <br/>
  <br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  </div>
  </ul>
  
  
 
 </div>
         </div>
             
           </Popup>
         
  
  
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
 
  </div>
  </ul>
 
  
  
 ));

const pageCount83 = Math.ceil(lastyear4.length / PER_PAGE); 


 
 
      const [popquoteApril, setPopquoteApril] = React.useState(0);
 
 
        async function sealteam6(e){ 
         //e.preventDefault();
        // entireArrayIndex(); doesnt fire here.....
 
 
         const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
         const data = await req.json()
         console.log(data); ////////////// all console.logs to here... 
 
         let barnstablecounty = [];
         let great = [];
         for (let i = 0; i<data.length; i++){
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice <= `${pricevalue2}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='4/1/2021'|| data[i].saledate ==='4/2/2021' || data[i].saledate ==='4/3/2021' || data[i].saledate ==='4/4/2021' || data[i].saledate ==='4/5/2021' || data[i].saledate ==='4/6/2021' || data[i].saledate ==='4/7/2021' || data[i].saledate ==='4/8/2021' || data[i].saledate ==='4/9/2021' || data[i].saledate ==='4/10/2021' || data[i].saledate ==='4/11/2021' || data[i].saledate ==='4/12/2021' || data[i].saledate ==='4/13/2021' || data[i].saledate ==='4/14/2021' || data[i].saledate ==='4/15/2021' || data[i].saledate ==='4/16/2021' || data[i].saledate ==='4/17/2021' || data[i].saledate ==='4/18/2021' || data[i].saledate ==='4/19/2021' || data[i].saledate ==='4/20/2021' || data[i].saledate ==='4/21/2021' || data[i].saledate ==='4/22/2021' || data[i].saledate ==='4/23/2021' || data[i].saledate ==='4/24/2021' || data[i].saledate ==='4/25/2021' || data[i].saledate ==='4/26/2021' || data[i].saledate ==='4/27/2021'|| data[i].saledate ==='4/28/2021'|| data[i].saledate ==='4/29/2021' || data[i].saledate ==='4/30/2021' || 
            data[i].saledate === '5/1/2021' || data[i].saledate ==='5/2/2021' || data[i].saledate ==='5/3/2021' || data[i].saledate ==='5/4/2021' || data[i].saledate ==='5/5/2021' || data[i].saledate ==='5/6/2021' || data[i].saledate ==='5/7/2021' || data[i].saledate ==='5/8/2021' || data[i].saledate ==='5/9/2021' || data[i].saledate ==='5/10/2021' || data[i].saledate ==='5/11/2021' || data[i].saledate ==='5/12/2021' || data[i].saledate ==='5/13/2021' || data[i].saledate ==='5/14/2021' || data[i].saledate ==='5/15/2021'|| data[i].saledate ==='5/16/2021'|| data[i].saledate ==='5/17/2021' || data[i].saledate ==='5/18/2021' || data[i].saledate ==='5/19/2021' || data[i].saledate ==='5/20/2021' || data[i].saledate ==='5/21/2021' || data[i].saledate ==='5/22/2021' || data[i].saledate ==='5/23/2021' || data[i].saledate ==='5/24/2021' || data[i].saledate ==='5/25/2021' || data[i].saledate ==='5/26/2021'|| data[i].saledate ==='5/27/2021' || data[i].saledate ==='5/28/2021'
           || data[i].saledate === '5/29/2021' || data[i].saledate === '5/30/2021' || data[i].saledate ==='5/31/2021', data[i].saledate === '6/1/2020' || data[i].saledate ==='6/2/2020' || data[i].saledate ==='6/3/2021' || data[i].saledate ==='6/4/2021' || data[i].saledate ==='6/5/2021' || data[i].saledate ==='6/6/2021' || data[i].saledate ==='6/7/2021' || data[i].saledate ==='6/8/2021' || data[i].saledate ==='6/9/2021' || data[i].saledate ==='6/10/2021' || data[i].saledate ==='6/11/2021' || data[i].saledate ==='6/12/2021' || data[i].saledate ==='6/13/2021' || data[i].saledate ==='6/14/2021' || data[i].saledate ==='6/15/2021'|| data[i].saledate ==='6/16/2021'|| data[i].saledate ==='6/17/2021' || data[i].saledate ==='6/18/2021' || data[i].saledate ==='6/19/2021' || data[i].saledate ==='6/20/2021' || data[i].saledate ==='6/21/2021' || data[i].saledate ==='6/22/2021' || data[i].saledate ==='6/23/2021' || data[i].saledate ==='6/24/2021' || data[i].saledate ==='6/25/2021' || data[i].saledate ==='6/26/2021'|| data[i].saledate ==='6/27/2021' || data[i].saledate ==='6/28/2021', data[i].saledate ==='6/29/2021' || data[i].saledate ==='6/30/2021')){
             barnstablecounty.push(data[i]);
             setLastyear3(barnstablecounty);
             if (data[i].saleprice < data[i].listprice){
               great.push(data[i]);
               //jconsole.log(great);
               setLastyear4(great);
             }
           
            // console.log(barnstablecounty.saledate);
 
            let length = barnstablecounty.length;
           // console.log(length);
           document.getElementById('quarterly21').innerHTML = length;
           
           let greatlength = great.length;
           let atorabove = Math.round((greatlength / length) * 100);
           document.getElementById('catchmaxmil21').innerHTML = `${atorabove}%`;
           
           
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
            barnstablecounty.forEach(add);
            
 
            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
             })
           // console.log(saleprice);
          // let average = Math.round(saleprice / length);
          // let averagelist = Math.round(listprice / length);
           let avgdom = Math.round(DOM / length ) || 0;
           let avgdiff = formatter.format(Math.round(differential / length) || 0);


           let differential2 = 0;
           function add2(item, counter, array){
            differential2+=(item.differential); //NaN
           }
           great.forEach(add2);
           
           //console.log(average);
          // console.log(averagelist);
           //console.log(avgdiff);
          // document.getElementById('harley2').innerHTML = average;
          // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
           
          document.getElementById('sultan212').innerHTML = avgdom;
           document.getElementById('lordof212').innerHTML = avgdiff;

           setPopquoteApril(formatter.format(Math.round( differential2 / greatlength ))); // title
 
         }
     
       }
 
         
 
     }
     
       
     const [lastyear5, setLastyear5] = React.useState([]);

       ////pagination...
       
    
const [currentPage84, setCurrentPage84] = React.useState(0);
    
    
function handlePageClick84({ selected: selectedPage}){
 setCurrentPage84(selectedPage);
}




const offset84 = currentPage84 * PER_PAGE;

const currentPageData84 = lastyear5
.slice(offset84, offset84 + PER_PAGE)
.map((item, index) => (

 <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
 
 <div className="modal">
 
        
         <div className="header">West Manor</div>
         <div>
           
         
 
         <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  <br/>
  <br/>
  <br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  </div>
  </ul>
  
  
 
 </div>
         </div>
             
           </Popup>
         
  
  
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
 
  </div>
  </ul>
 
  
  
 ));

const pageCount84 = Math.ceil(lastyear5.length / PER_PAGE); 

      
 
     const [lastyear6, setLastyear6] = React.useState([]);

      ////pagination...
       
    
const [currentPage85, setCurrentPage85] = React.useState(0);
    
    
function handlePageClick85({ selected: selectedPage}){
 setCurrentPage85(selectedPage);
}




const offset85 = currentPage85 * PER_PAGE;

const currentPageData85 = lastyear6
.slice(offset85, offset85 + PER_PAGE)
.map((item, index) => (

 <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
 
 <div className="modal">
 
        
         <div className="header">West Manor</div>
         <div>
           
         
 
         <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  <br/>
  <br/>
  <br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  </div>
  </ul>
  
  
 
 </div>
         </div>
             
           </Popup>
         
  
  
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
 
  </div>
  </ul>
 
  
  
 ));

const pageCount85 = Math.ceil(lastyear6.length / PER_PAGE); 


 
   const [popquoteJuly, setPopquoteJuly] = React.useState(0);
       
   
 
          async function zerodark30(e){ 
           //e.preventDefault();
          // entireArrayIndex(); doesnt fire here.....
   
   
           const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
           const data = await req.json()
           console.log(data); ////////////// all console.logs to here... 
 
 
           let barnstablecounty = [];
           let great = [];
           for (let i = 0; i<data.length; i++){
             if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice <= `${pricevalue2}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='7/1/2021'|| data[i].saledate ==='7/2/2021' || data[i].saledate ==='7/3/2021' || data[i].saledate ==='7/4/2021' || data[i].saledate ==='7/5/2021' || data[i].saledate ==='7/6/2021' || data[i].saledate ==='7/7/2021' || data[i].saledate ==='7/8/2021' || data[i].saledate ==='7/9/2021' || data[i].saledate ==='7/10/2021' || data[i].saledate ==='7/11/2021' || data[i].saledate ==='7/12/2021' || data[i].saledate ==='7/13/2021' || data[i].saledate ==='7/14/2021' || data[i].saledate ==='7/15/2021' || data[i].saledate ==='7/16/2021' || data[i].saledate ==='7/17/2021' || data[i].saledate ==='7/18/2021' || data[i].saledate ==='7/19/2021' || data[i].saledate ==='7/20/2021' || data[i].saledate ==='7/21/2021' || data[i].saledate ==='7/22/2021' || data[i].saledate ==='7/23/2021' || data[i].saledate ==='7/24/2021' || data[i].saledate ==='7/25/2021' || data[i].saledate ==='7/26/2021' || data[i].saledate ==='7/27/2021'|| data[i].saledate ==='7/28/2021'|| data[i].saledate ==='7/29/2021' || data[i].saledate ==='7/30/2021' || data[i].saledate ==='7/31/2021'
             || data[i].saledate === '8/1/2021' || data[i].saledate ==='8/2/2021' || data[i].saledate ==='8/3/2021' || data[i].saledate ==='8/4/2021' || data[i].saledate ==='8/5/2021' || data[i].saledate ==='8/6/2021' || data[i].saledate ==='8/7/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/9/2021' || data[i].saledate ==='8/10/2021' || data[i].saledate ==='8/11/2021' || data[i].saledate ==='8/12/2021' || data[i].saledate ==='8/13/2021' || data[i].saledate ==='8/14/2021' || data[i].saledate ==='8/15/2021'|| data[i].saledate ==='8/16/2021'|| data[i].saledate ==='8/17/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/19/2021' || data[i].saledate ==='8/20/2021' || data[i].saledate ==='8/21/2021' || data[i].saledate ==='8/22/2021' || data[i].saledate ==='8/23/2021' || data[i].saledate ==='8/24/2021' || data[i].saledate ==='8/25/2021' || data[i].saledate ==='8/26/2021'|| data[i].saledate ==='8/27/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/29/2021'|| data[i].saledate ==='8/30/2021' || data[i].saledate ==='8/31/2021' 
             || data[i].saledate === '9/1/2021' || data[i].saledate ==='9/2/2021'|| data[i].saledate ==='9/3/2021' || data[i].saledate ==='9/4/2021' || data[i].saledate ==='9/5/2021' || data[i].saledate ==='9/6/2021' || data[i].saledate ==='9/7/2021' || data[i].saledate ==='9/8/2021' || data[i].saledate ==='9/9/2021'|| data[i].saledate ==='9/10/2021'|| data[i].saledate ==='9/11/2021' || data[i].saledate ==='9/12/2021'|| data[i].saledate === '9/13/2021'|| data[i].saledate ==='9/14/2021' || data[i].saledate ==='9/15/2021' || data[i].saledate ==='9/16/2021' || data[i].saledate ==='9/17/2021' || data[i].saledate ==='9/18/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/20/2021' || data[i].saledate ==='9/21/2021'|| data[i].saledate ==='9/22/2021' || data[i].saledate ==='9/23/2021' || data[i].saledate ==='9/24/2021' || data[i].saledate ==='9/25/2021' || data[i].saledate ==='9/26/2021' || data[i].saledate ==='9/27/2021'|| data[i].saledate ==='9/28/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/30/2021')){
               barnstablecounty.push(data[i]);
               setLastyear5(barnstablecounty);
               if (data[i].saleprice < data[i].listprice){
                 great.push(data[i]);
                 //jconsole.log(great);
                 setLastyear6(great);
               }
             
              // console.log(barnstablecounty.saledate);
   
              let length = barnstablecounty.length;
             // console.log(length);
             document.getElementById('quarterly20').innerHTML = length;
             
             let greatlength = great.length;
             let atorabove = Math.round((greatlength / length) * 100);
             document.getElementById('catchmaxmil20').innerHTML =`${atorabove}%`;
             
             
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
              barnstablecounty.forEach(add);
 
              const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
               })
             // console.log(saleprice);
            // let average = Math.round(saleprice / length);
            // let averagelist = Math.round(listprice / length);
             let avgdom = Math.round(DOM / length ) || 0;
             let avgdiff = formatter.format(Math.round(differential / length) || 0);

             let differential2 = 0;
           function add2(item, counter, array){
            differential2+=(item.differential); //NaN
           }
           great.forEach(add2);
             //console.log(average);
            // console.log(averagelist);
             //console.log(avgdiff);
            // document.getElementById('harley2').innerHTML = average;
            // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
             
            document.getElementById('sultan20').innerHTML = avgdom;
             document.getElementById('lordof20').innerHTML = avgdiff;

             setPopquoteJuly(formatter.format(Math.round( differential2 / greatlength ))); // title
 
           }
       
         }
   
         
   
           }


           const [lastyear7, setLastyear7] = React.useState([]);

           ////pagination...
       
    
const [currentPage86, setCurrentPage86] = React.useState(0);
    
    
function handlePageClick86({ selected: selectedPage}){
 setCurrentPage86(selectedPage);
}




const offset86 = currentPage86 * PER_PAGE;

const currentPageData86 = lastyear7
.slice(offset86, offset86 + PER_PAGE)
.map((item, index) => (

 <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
 
 <div className="modal">
 
        
         <div className="header">West Manor</div>
         <div>
           
         
 
         <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  <br/>
  <br/>
  <br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  </div>
  </ul>
  
  
 
 </div>
         </div>
             
           </Popup>
         
  
  
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
 
  </div>
  </ul>
 
  
  
 ));

const pageCount86 = Math.ceil(lastyear7.length / PER_PAGE); 


 
           const [lastyear8, setLastyear8] = React.useState([]);


           ////pagination...
       
    
const [currentPage87, setCurrentPage87] = React.useState(0);
    
    
function handlePageClick87({ selected: selectedPage}){
 setCurrentPage87(selectedPage);
}




const offset87 = currentPage87 * PER_PAGE;

const currentPageData87 = lastyear8
.slice(offset87, offset87 + PER_PAGE)
.map((item, index) => (

 <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  
           <Popup
             trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
             position="center"
             modal
             nested       
           >
 
 <div className="modal">
 
        
         <div className="header">West Manor</div>
         <div>
           
         
 
         <ul data-index={index}>
 <br/>
 <div className='borders'>
  <img className='modalin' src={image}></img>
  <br/>
  <br/>
  <br/>
  <br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  </div>
  </ul>
  
  
 
 </div>
         </div>
             
           </Popup>
         
  
  
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
  <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
 
  </div>
  </ul>
 
  
  
 ));

const pageCount87 = Math.ceil(lastyear8.length / PER_PAGE); 


   const [popquoteOctober, setPopquoteOctober] = React.useState(0);

           async function jack10suit(e){ 
             //e.preventDefault();
            // entireArrayIndex(); doesnt fire here.....
     
     
             const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
             const data = await req.json()
             console.log(data); ////////////// all console.logs to here... 
     
             let barnstablecounty = [];
             let great = [];
             for (let i = 0; i<data.length; i++){
               if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice <= `${pricevalue2}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='10/1/2021'|| data[i].saledate ==='10/2/2021' || data[i].saledate ==='10/3/2021' || data[i].saledate ==='10/4/2021' || data[i].saledate ==='10/5/2021' || data[i].saledate ==='10/6/2021' || data[i].saledate ==='10/7/2021' || data[i].saledate ==='10/8/2021' || data[i].saledate ==='10/9/2021' || data[i].saledate ==='10/10/2021' || data[i].saledate ==='10/11/2021' || data[i].saledate ==='10/12/2021' || data[i].saledate ==='10/13/2021' || data[i].saledate ==='10/14/2021' || data[i].saledate ==='10/15/2021' || data[i].saledate ==='10/16/2021' || data[i].saledate ==='10/17/2021' || data[i].saledate ==='10/18/2021' || data[i].saledate ==='10/19/2021' || data[i].saledate ==='10/20/2021' || data[i].saledate ==='10/21/2021' || data[i].saledate ==='10/22/2021' || data[i].saledate ==='10/23/2021' || data[i].saledate ==='10/24/2021' || data[i].saledate ==='10/25/2021' || data[i].saledate ==='10/26/2021' || data[i].saledate ==='10/27/2021'|| data[i].saledate ==='10/28/2021'|| data[i].saledate ==='10/29/2021' || data[i].saledate ==='10/30/2021' || data[i].saledate === '10/31/2021'
               || data[i].saledate === '11/1/2021' || data[i].saledate ==='11/2/2021' || data[i].saledate ==='11/3/2021' || data[i].saledate ==='11/4/2021' || data[i].saledate ==='11/5/2021' || data[i].saledate ==='11/6/2021' || data[i].saledate ==='11/7/2021' || data[i].saledate ==='11/8/2021' || data[i].saledate ==='11/9/2021' || data[i].saledate ==='11/10/2021' || data[i].saledate ==='11/11/2021' || data[i].saledate ==='11/12/2021' || data[i].saledate ==='11/13/2021' || data[i].saledate ==='11/14/2021' || data[i].saledate ==='11/15/2021'|| data[i].saledate ==='11/16/2021'|| data[i].saledate ==='11/17/2021' || data[i].saledate ==='11/18/2021' || data[i].saledate ==='11/19/2021' || data[i].saledate ==='11/20/2021' || data[i].saledate ==='11/21/2021' || data[i].saledate ==='11/22/2021' || data[i].saledate ==='11/23/2021' || data[i].saledate ==='11/24/2021' || data[i].saledate === '11/25/2021' || data[i].saledate ==='11/26/2021'|| data[i].saledate ==='11/27/2021' || data[i].saledate ==='11/28/2021'
               || data[i].saledate === '11/29/2021' || data[i].saledate === '11/30/2021' || data[i].saledate ==='11/31/2021', data[i].saledate === '12/1/2020' || data[i].saledate ==='12/2/2020' || data[i].saledate ==='12/3/2021' || data[i].saledate ==='12/4/2021' || data[i].saledate ==='12/5/2021' || data[i].saledate ==='12/6/2021' || data[i].saledate ==='12/7/2021' || data[i].saledate ==='12/8/2021' || data[i].saledate ==='12/9/2021' || data[i].saledate ==='12/10/2021' || data[i].saledate ==='12/11/2021' || data[i].saledate ==='12/12/2021' || data[i].saledate ==='12/13/2021' || data[i].saledate ==='12/14/2021' || data[i].saledate ==='12/15/2021'|| data[i].saledate ==='12/16/2021'|| data[i].saledate ==='12/17/2021' || data[i].saledate ==='12/18/2021' || data[i].saledate ==='12/19/2021' || data[i].saledate ==='12/20/2021' || data[i].saledate ==='12/21/2021' || data[i].saledate ==='12/22/2021' || data[i].saledate ==='12/23/2021' || data[i].saledate ==='12/24/2021' || data[i].saledate ==='12/25/2021' || data[i].saledate ==='12/26/2021'|| data[i].saledate ==='12/27/2021' || data[i].saledate ==='12/28/2021', data[i].saledate ==='12/29/2021' || data[i].saledate ==='12/30/2021')){
                 barnstablecounty.push(data[i]);
                 setLastyear7(barnstablecounty);
                 if (data[i].saleprice < data[i].listprice){
                   great.push(data[i]);
                   //jconsole.log(great);
                   setLastyear8(great);
                 }
               
                // console.log(barnstablecounty.saledate);
     
                let length = barnstablecounty.length;
               // console.log(length);
               document.getElementById('quarterly19').innerHTML = length;
               
               let greatlength = great.length;
               let atorabove = Math.round((greatlength / length) * 100);
               document.getElementById('catchmaxmil19').innerHTML = `${atorabove}%`;
               
               
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
                barnstablecounty.forEach(add);
     
                const formatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0
                 })
               // console.log(saleprice);
              // let average = Math.round(saleprice / length);
              // let averagelist = Math.round(listprice / length);
               let avgdom = Math.round(DOM / length ) || 0;
               let avgdiff = formatter.format(Math.round(differential / length) || 0);


               let differential2 = 0;
               function add2(item, counter, array){
                differential2+=(item.differential); //NaN
               }
               great.forEach(add2);
               //console.log(average);
              // console.log(averagelist);
               //console.log(avgdiff);
              // document.getElementById('harley2').innerHTML = average;
              // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
               
              document.getElementById('sultan211').innerHTML = avgdom;
               document.getElementById('lordof211').innerHTML = avgdiff;

               setPopquoteOctober(formatter.format(Math.round( differential2 / greatlength ))); // title
     
             }
         
           }
     
             
     
         }
         
  
        

    
        
        
  
  
  
  
  
     
          
  
     
             React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
               fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
               .then(response => response.json())
               .then(data => {
                 console.log(data) // all 15k objects...
                      
           
                       let barnstablecounty = [];
                       let great = [];
                       for (let i = 0; i<data.length; i++){
                         if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2019 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2019'|| data[i].saledate ==='1/2/2019' || data[i].saledate ==='1/3/2019' || data[i].saledate ==='1/4/2019' || data[i].saledate ==='1/5/2019' || data[i].saledate ==='1/6/2019' || data[i].saledate ==='1/7/2019' || data[i].saledate ==='1/8/2019' || data[i].saledate ==='1/9/2019' || data[i].saledate ==='1/10/2019' || data[i].saledate ==='1/11/2019' || data[i].saledate ==='1/12/2019' || data[i].saledate ==='1/13/2019' || data[i].saledate ==='1/14/2019' || data[i].saledate ==='1/15/2019' || data[i].saledate ==='1/16/2019' || data[i].saledate ==='1/17/2019' || data[i].saledate ==='1/18/2019' || data[i].saledate ==='1/19/2019' || data[i].saledate ==='1/20/2019' || data[i].saledate ==='1/21/2019' || data[i].saledate ==='1/22/2019' || data[i].saledate ==='1/23/2019' || data[i].saledate ==='1/24/2019' || data[i].saledate ==='1/25/2019' || data[i].saledate ==='1/26/2019' || data[i].saledate ==='1/27/2019'|| data[i].saledate ==='1/28/2019'|| data[i].saledate ==='1/29/2019' || data[i].saledate ==='1/30/2019' || data[i].saledate ==='1/31/2019'
                           || data[i].saledate === '2/1/2019' || data[i].saledate ==='2/2/2019' || data[i].saledate ==='2/3/2019' || data[i].saledate ==='2/4/2019' || data[i].saledate ==='2/5/2019' || data[i].saledate ==='2/6/2019' || data[i].saledate ==='2/7/2019' || data[i].saledate ==='2/8/2019' || data[i].saledate ==='2/9/2019' || data[i].saledate ==='2/10/2019' || data[i].saledate ==='2/11/2019' || data[i].saledate ==='2/12/2019' || data[i].saledate ==='2/13/2019' || data[i].saledate ==='2/14/2019' || data[i].saledate ==='2/15/2019'|| data[i].saledate ==='2/16/2019'|| data[i].saledate ==='2/17/2019' || data[i].saledate ==='2/18/2019' || data[i].saledate ==='2/19/2019' || data[i].saledate ==='2/20/2019' || data[i].saledate ==='2/21/2019' || data[i].saledate ==='2/22/2019' || data[i].saledate ==='2/23/2019' || data[i].saledate ==='2/24/2019' || data[i].saledate ==='2/25/2019' || data[i].saledate ==='2/26/2019'|| data[i].saledate ==='2/27/2019' || data[i].saledate ==='2/28/2019'
                           || data[i].saledate === '3/1/2019' || data[i].saledate ==='3/2/2019'|| data[i].saledate ==='3/3/2019' || data[i].saledate ==='3/4/2019' || data[i].saledate ==='3/5/2019' || data[i].saledate ==='3/6/2019' || data[i].saledate ==='3/7/2019' || data[i].saledate ==='3/8/2019' || data[i].saledate ==='3/9/2019'|| data[i].saledate ==='3/10/2019'|| data[i].saledate ==='3/11/2019' || data[i].saledate ==='3/12/2019'|| data[i].saledate === '3/13/2019'|| data[i].saledate ==='3/14/2019' || data[i].saledate ==='3/15/2019' || data[i].saledate ==='3/16/2019' || data[i].saledate ==='3/17/2019' || data[i].saledate ==='3/18/2019' || data[i].saledate ==='3/19/2019' || data[i].saledate ==='3/20/2019' || data[i].saledate ==='3/21/2019'|| data[i].saledate ==='3/22/2019' || data[i].saledate ==='3/23/2019' || data[i].saledate ==='3/24/2019' || data[i].saledate ==='3/25/2019' || data[i].saledate ==='3/26/2019' || data[i].saledate ==='3/27/2019'|| data[i].saledate ==='3/28/2019' || data[i].saledate ==='3/29/2019' || data[i].saledate ==='3/30/2019' || data[i].saledate ==='3/31/2019' && data[i].saledate ==='4/1/2019'|| data[i].saledate ==='4/2/2019' || data[i].saledate ==='4/3/2019' || data[i].saledate ==='4/4/2019' || data[i].saledate ==='4/5/2019' || data[i].saledate ==='4/6/2019' || data[i].saledate ==='4/7/2019' || data[i].saledate ==='4/8/2019' || data[i].saledate ==='4/9/2019' || data[i].saledate ==='4/10/2019' || data[i].saledate ==='4/11/2019' || data[i].saledate ==='4/12/2019' || data[i].saledate ==='4/13/2019' || data[i].saledate ==='4/14/2019' || data[i].saledate ==='4/15/2019' || data[i].saledate ==='4/16/2019' || data[i].saledate ==='4/17/2019' || data[i].saledate ==='4/18/2019' || data[i].saledate ==='4/19/2019' || data[i].saledate ==='4/20/2019' || data[i].saledate ==='4/21/2019' || data[i].saledate ==='4/22/2019' || data[i].saledate ==='4/23/2019' || data[i].saledate ==='4/24/2019' || data[i].saledate ==='4/25/2019' || data[i].saledate ==='4/26/2019' || data[i].saledate ==='4/27/2019'|| data[i].saledate ==='4/28/2019'|| data[i].saledate ==='4/29/2019' || data[i].saledate ==='4/30/2019' || 
                           data[i].saledate === '5/1/2019' || data[i].saledate ==='5/2/2019' || data[i].saledate ==='5/3/2019' || data[i].saledate ==='5/4/2019' || data[i].saledate ==='5/5/2019' || data[i].saledate ==='5/6/2019' || data[i].saledate ==='5/7/2019' || data[i].saledate ==='5/8/2019' || data[i].saledate ==='5/9/2019' || data[i].saledate ==='5/10/2019' || data[i].saledate ==='5/11/2019' || data[i].saledate ==='5/12/2019' || data[i].saledate ==='5/13/2019' || data[i].saledate ==='5/14/2019' || data[i].saledate ==='5/15/2019'|| data[i].saledate ==='5/16/2019'|| data[i].saledate ==='5/17/2019' || data[i].saledate ==='5/18/2019' || data[i].saledate ==='5/19/2019' || data[i].saledate ==='5/20/2019' || data[i].saledate ==='5/21/2019' || data[i].saledate ==='5/22/2019' || data[i].saledate ==='5/23/2019' || data[i].saledate ==='5/24/2019' || data[i].saledate ==='5/25/2019' || data[i].saledate ==='5/26/2019'|| data[i].saledate ==='5/27/2019' || data[i].saledate ==='5/28/2019'
                           || data[i].saledate === '5/29/2019' || data[i].saledate ==='5/30/2019'|| data[i].saledate ==='5/31/2019')){
                           barnstablecounty.push(data[i]);
                           console.log(barnstablecounty); // 1
                           if (data[i].saleprice < data[i].listprice){
                             great.push(data[i]);
                             //jconsole.log(great);
                           }
                         
                          // console.log(barnstablecounty.saledate);
               
                          let length = barnstablecounty.length;
                         // console.log(length);
                        // document.getElementById('quarterly19').innerHTML = length;
                         
                         let greatlength = great.length;
                         let atorabove = Math.round((greatlength / length) * 100);
                        // document.getElementById('catchmaxmil19').innerHTML = atorabove;
                         
                         
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
                          barnstablecounty.forEach(add);
  
                          const formatter = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0
                           })
                         // console.log(saleprice);
                        // let average = Math.round(saleprice / length);
                        // let averagelist = Math.round(listprice / length);
                         let avgdom = Math.round(DOM / length ) || 0;
                         let avgdiff = formatter.format(Math.round(differential / length) || 0);
                         //console.log(average);
                        // console.log(averagelist);
                         //console.log(avgdiff);
                        // document.getElementById('harley2').innerHTML = average;
                        // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
                         
                      //  document.getElementById('sultan19').innerHTML = avgdom;
                       //  document.getElementById('lordof19').innerHTML = avgdiff;
           
                       }
                   
                     }
                  
                   //setData(JSON.stringify(data));
                 });
               }, [pricerangecounty1, pricerangetown1]);
     
     
               ///////////////////////////////////////////////////////////////////////////////////////////
     
               const [totallessdiff14, setTotallessdiff14] = React.useState(0);
               const [totallessdiff30, setTotallessdiff30] = React.useState(0);
               const [totallessdiff45, setTotallessdiff45] = React.useState(0);
               const [totallessdiff90, setTotallessdiff90] = React.useState(0);
               const [totallessdiff120, setTotallessdiff120] = React.useState(0);
               const [totallessdiff121, setTotallessdiff121] = React.useState(0);
  
               const [fourteen12, setFourteen12] = React.useState([]);

 ////pagination...


 const [currentPage12, setCurrentPage12] = React.useState(0);


 function handlePageClick12({ selected: selectedPage}){
   setCurrentPage12(selectedPage);
 }
 
 
 
 
 
 const offset12 = currentPage12 * PER_PAGE;
 
 const currentPageData12 = fourteen12
 .slice(offset12, offset12 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount12 = Math.ceil(fourteen12.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 







               const [thirty12, setThirty12] = React.useState([]);


               ////pagination...


 const [currentPage14, setCurrentPage14] = React.useState(0);


 function handlePageClick14({ selected: selectedPage}){
   setCurrentPage14(selectedPage);
 }
 
 
 
 
 
 const offset14 = currentPage14 * PER_PAGE;
 
 const currentPageData14 = thirty12
 .slice(offset14, offset14 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount14 = Math.ceil(thirty12.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 


      const [fortyfive12, setFortyfive12] = React.useState([]);




  ////pagination...


  const [currentPage16, setCurrentPage16] = React.useState(0);


  function handlePageClick16({ selected: selectedPage}){
    setCurrentPage16(selectedPage);
  }
  
  
  
  
  
  const offset16 = currentPage16 * PER_PAGE;
  
  const currentPageData16 = fortyfive12
  .slice(offset16, offset16 + PER_PAGE)
  .map((item, index) => (
  
    <ul data-index={index}>
    <br/>
    <div className='borders'>
     <img className='modalin' src={image}></img>
     <br/>
     
              <Popup
                trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
                position="center"
                modal
                nested       
              >
    
    <div className="modal">
    
           
            <div className="header">West Manor</div>
            <div>
              
            
    
            <ul data-index={index}>
    <br/>
    <div className='borders'>
     <img className='modalin' src={image}></img>
     <br/>
     <br/>
     <br/>
     <br/>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
     <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
     </div>
     </ul>
     
     
    
    </div>
            </div>
                
              </Popup>
            
     
     
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
     <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    
     </div>
     </ul>
    
     
     
    ));
  
   const pageCount16 = Math.ceil(fortyfive12.length / PER_PAGE); 
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  


               const [ninety12, setNinety12] = React.useState([]);
////pagination...


const [currentPage18, setCurrentPage18] = React.useState(0);


function handlePageClick18({ selected: selectedPage}){
  setCurrentPage18(selectedPage);
}





const offset18 = currentPage18 * PER_PAGE;

const currentPageData18 = ninety12
.slice(offset18, offset18 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount18 = Math.ceil(ninety12.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////











  const [onetwenty12, setOnetwenty12] = React.useState([]);


               ////pagination...


const [currentPage20, setCurrentPage20] = React.useState(0);


function handlePageClick20({ selected: selectedPage}){
  setCurrentPage20(selectedPage);
}





const offset20 = currentPage20 * PER_PAGE;

const currentPageData20 = onetwenty12
.slice(offset20, offset20 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount20 = Math.ceil(onetwenty12.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////











               const [onetwoone12, setOnetwoone12] = React.useState([]);
 ////pagination...


 const [currentPage22, setCurrentPage22] = React.useState(0);


 function handlePageClick22({ selected: selectedPage}){
   setCurrentPage22(selectedPage);
 }
 
 
 
 
 
 const offset22 = currentPage22 * PER_PAGE;
 
 const currentPageData22 = onetwoone12
 .slice(offset22, offset22 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount22 = Math.ceil(onetwoone12.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 









const [fourteengreat14, setFourteengreat14] = React.useState([]);


                ////pagination...


 const [currentPage13, setCurrentPage13] = React.useState(0);


 function handlePageClick13({ selected: selectedPage}){
   setCurrentPage13(selectedPage);
 }
 
 
 
 
 
 const offset13 = currentPage13 * PER_PAGE;
 
 const currentPageData13 = fourteengreat14
 .slice(offset13, offset13 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount13 = Math.ceil(fourteengreat14.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 








const [thirtygreat30, setThirtygreat30] = React.useState([]);

               ////pagination...


 const [currentPage15, setCurrentPage15] = React.useState(0);


 function handlePageClick15({ selected: selectedPage}){
   setCurrentPage15(selectedPage);
 }
 
 
 
 
 
 const offset15 = currentPage15 * PER_PAGE;
 
 const currentPageData15 = thirtygreat30
 .slice(offset15, offset15 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount15 = Math.ceil(thirtygreat30.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 









               const [fortyfivegreat45, setFortyfivegreat45] = React.useState([]);
////pagination...


const [currentPage17, setCurrentPage17] = React.useState(0);


function handlePageClick17({ selected: selectedPage}){
  setCurrentPage17(selectedPage);
}





const offset17 = currentPage17 * PER_PAGE;

const currentPageData17 = fortyfivegreat45
.slice(offset17, offset17 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount17 = Math.ceil(fortyfivegreat45.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////








               const [ninetygreat90, setNinetygreat90] = React.useState([]);

////pagination...


const [currentPage19, setCurrentPage19] = React.useState(0);


function handlePageClick19({ selected: selectedPage}){
  setCurrentPage19(selectedPage);
}





const offset19 = currentPage19 * PER_PAGE;

const currentPageData19 = ninetygreat90
.slice(offset19, offset19 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount19 = Math.ceil(ninetygreat90.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////





               const [onetwentygreat120, setOnetwentygreat120] = React.useState([]);

    ////pagination...


const [currentPage21, setCurrentPage21] = React.useState(0);


function handlePageClick21({ selected: selectedPage}){
  setCurrentPage21(selectedPage);
}





const offset21 = currentPage21 * PER_PAGE;

const currentPageData21 = onetwentygreat120
.slice(offset21, offset21 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount21 = Math.ceil(onetwentygreat120.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////




  
const [onetwoonegreat121, setOnetwoonegreat121] = React.useState([]);

               ////pagination...


 const [currentPage23, setCurrentPage23] = React.useState(0);


 function handlePageClick23({ selected: selectedPage}){
   setCurrentPage23(selectedPage);
 }
 
 
 
 
 
 const offset23 = currentPage23 * PER_PAGE;
 
 const currentPageData23 = onetwoonegreat121
 .slice(offset23, offset23 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount23 = Math.ceil(onetwoonegreat121.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 

  
  
  
  
               async function straitofhormuz5(e){ 
                //e.preventDefault();
               // entireArrayIndex(); doesnt fire here.....
        
        
                const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
                const data = await req.json()
                console.log(data); ////////////// all console.logs to here... 
  
  
  
                let sales = [];
                   let fourteen = [];
                   let thirty = [];
                   let fortyfive = [];
                   let ninety = [];
                   let onetwenty = [];
                   let onetwoone = [];

                   let fourteengreat = [];
                   let thirtygreat = [];
                   let fortyfivegreat = [];
                   let ninetygreat = [];
                   let onetwentygreat = [];
                   let onetwoonegreat = [];
               
                   
                       let great14 = []; // 0 here
                       let great30 = [];
                       let great45 = [];
                       let great90 = [];
                       let great120 = [];
                       let great121 = [];
                       
                   for (let i = 0; i<data.length; i++){
                     if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
                       sales.push(data[i]);
                       console.log(sales);
                       if (data[i].DOM <= 14){
                         fourteen.push(data[i]);
                         console.log(fourteen);
                         fourteen.sort((a, b) => a.saleprice - b.saleprice);
                         setFourteen12(fourteen);
                         //fourteen[i].differential
                       }
                       if (data[i].DOM <= 14 && data[i].saleprice < data[i].listprice){
                        fourteengreat.push(data[i]);
                        fourteengreat.sort((a, b) => a.saleprice - b.saleprice);
                        setFourteengreat14(fourteengreat);
                      }
                       if (data[i].DOM > 14 && data[i].DOM <= 30){
                         thirty.push(data[i]);
                         thirty.sort((a, b) => a.saleprice - b.saleprice);
                         setThirty12(thirty);
                       }
                       if (data[i].DOM > 14 && data[i].DOM <= 30 && data[i].saleprice < data[i].listprice){
                        thirtygreat.push(data[i]);
                        thirtygreat.sort((a, b) => a.saleprice - b.saleprice);
                        setThirtygreat30(thirtygreat);
                      }



                       if (data[i].DOM > 30 && data[i].DOM <= 45){
                         fortyfive.push(data[i]);
                         fortyfive.sort((a, b) => a.saleprice - b.saleprice);
                         setFortyfive12(fortyfive);
                       }
                       if (data[i].DOM > 30 && data[i].DOM <= 45 && data[i].saleprice < data[i].listprice){
                        fortyfivegreat.push(data[i]);
                        fortyfivegreat.sort((a, b) => a.saleprice - b.saleprice);
                        setFortyfivegreat45(fortyfivegreat);
                      }

                       if (data[i].DOM > 45 && data[i].DOM <= 90){
                         ninety.push(data[i]);
                         console.log(ninety);
                         ninety.sort((a, b) => a.saleprice - b.saleprice);
                         setNinety12(ninety);
                       }
                       if (data[i].DOM > 45 && data[i].DOM <= 90 && data[i].saleprice < data[i].listprice){
                        ninetygreat.push(data[i]);
                        ninetygreat.sort((a, b) => a.saleprice - b.saleprice);
                        setNinetygreat90(ninetygreat);
                      }


                       if (data[i].DOM > 90 && data[i].DOM <= 120){
                         onetwenty.push(data[i]);
                         onetwenty.sort((a, b) => a.saleprice - b.saleprice);
                         setOnetwenty12(onetwenty);
                       }
                       if (data[i].DOM > 90 && data[i].DOM <= 120 && data[i].saleprice < data[i].listprice){
                        onetwentygreat.push(data[i]);
                        onetwentygreat.sort((a, b) => a.saleprice - b.saleprice);
                        setOnetwentygreat120(onetwentygreat);
                      }

                       if (data[i].DOM > 120){
                         onetwoone.push(data[i]);
                         onetwoone.sort((a, b) => a.saleprice - b.saleprice);
                         setOnetwoone12(onetwoone);
                       }
                       if (data[i].DOM > 120 && data[i].saleprice < data[i].listprice){
                        onetwoonegreat.push(data[i]);
                        onetwoonegreat.sort((a, b) => a.saleprice - b.saleprice);
                        setOnetwoonegreat121(onetwentygreat);
                      }


                       if (data[i].saleprice < data[i].listprice && data[i].DOM <= 14 ){
                         great14.push(data[i]);
                         console.log(great14);
                       }
                       if (data[i].saleprice < data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
                         great30.push(data[i]);
                       }
                       if (data[i].saleprice < data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
                         great45.push(data[i]);
                       }
                       if (data[i].saleprice < data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
                         great90.push(data[i]);
                       }
                       if (data[i].saleprice < data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
                         great120.push(data[i]);
                       }
                       if (data[i].saleprice < data[i].listprice && data[i].DOM > 120){
                         great121.push(data[i]);
                       }
               
               
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
               
                       const atabove14 =  Math.round((lengthgreat14 / sale14) * 100 || 0);
                       const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100 || 0);
                       const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100 || 0);
                       const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100 || 0);
                       const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100 || 0);
                       const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100 || 0);
               
               
               
               
               
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
     
                       document.getElementById('fr14').innerHTML = `${lengthgreat14}/ ${sale14}`;
                       document.getElementById('fr30').innerHTML = `${lengthgreat30} / ${sale30}`;
                       document.getElementById('fr45').innerHTML = `${lengthgreat45} / ${sale45}`;
                       document.getElementById('fr90').innerHTML = `${lengthgreat90} / ${sale90}`;
                       document.getElementById('fr120').innerHTML = `${lengthgreat120} / ${sale120}`;
                       document.getElementById('fr121').innerHTML = `${lengthgreat121} / ${sale121}`;
               
                       let differential = 0;
                       function add(item, counter, array){
                        differential+=(item.differential); 
                       }
                       fourteen.forEach(add);
                       console.log(differential);
  
                      
               
                       let differential2 = 0;
                       function add2(item, counter, array){
                         differential2+=(item.differential);
                       }
                       thirty.forEach(add2);
                       console.log(differential);
                       
                       let differential3 = 0;
                       
                       function add3(item, counter, array){
                         differential3+=(item.differential);
                       }
               
                       fortyfive.forEach(add3);
               
                       let differential4 = 0;
                       function add4(item, counter, array){
                         differential4+=(item.differential);
                       }
               
                       ninety.forEach(add4);
               
                       let differential5 = 0;
                       function add5(item, counter, array){
                         differential5+=(item.differential);
                       }
               
                       onetwenty.forEach(add5); 
               
                       let differential6 = 0;
                       function add6(item, counter, array){
                         differential6+=(item.differential);
                       }
               
                       onetwoone.forEach(add6); 
                       console.log(differential6);
  
                       let differential7 = 0;
                       function add7(item, counter, array){
                         differential7+=(item.differential);
                       }
                       great14.forEach(add7);
  
                       const formatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0
                       })
  
                       
                       
                       setTotallessdiff14(formatter.format(Math.round(differential7 / lengthgreat14)));
  
                       let differential8 = 0;
                       function add8(item, counter, array){
                         differential8+=(item.differential);
                       }
                       great30.forEach(add8);
  
                       
                       
                       setTotallessdiff30(formatter.format(Math.round(differential8 / lengthgreat30)));
  
                       let differential9 = 0;
                       function add9(item, counter, array){
                         differential9+=(item.differential);
                       }
                       great45.forEach(add9);
  
                       
                       
                       setTotallessdiff45(formatter.format(Math.round(differential9 / lengthgreat45)));
  
                       let differential10 = 0;
                       function add10(item, counter, array){
                         differential10+=(item.differential);
                       }
                       great90.forEach(add10);
  
                       
                       
                       setTotallessdiff90(formatter.format(Math.round(differential10 / lengthgreat90)));
  
                       let differential11 = 0;
                       function add11(item, counter, array){
                         differential11+=(item.differential);
                       }
                       great120.forEach(add11);
  
                       
                       
                       setTotallessdiff120(formatter.format(Math.round(differential11 / lengthgreat120)));
  
  
                       let differential12 = 0;
                       function add12(item, counter, array){
                         differential12+=(item.differential);
                       }
                       great121.forEach(add12);
  
                       
                       
                       setTotallessdiff121(formatter.format(Math.round(differential12 / lengthgreat121)));
                       
                       
               
                     
               
               
                      
                       // console.log(saleprice);
                      let averagediff14 = formatter.format(Math.round( differential / sale14 ) || 0);
                      let averagediff30 = formatter.format(Math.round( differential2 / sale30 ) || 0);
                      let averagediff45 = formatter.format(Math.round( differential3 / sale45 ) || 0);
                      let averagediff90 = formatter.format(Math.round( (differential4) / sale90 ) || 0);
                      let averagediff120 = formatter.format(Math.round( differential5 / sale120 ) || 0);
                      let averagediff121 = formatter.format(Math.round( differential6 / sale121 ) || 0);
               
                       
                      
                       document.getElementById('d14').innerHTML = averagediff14;
                       document.getElementById('d30').innerHTML = averagediff30;
                       document.getElementById('d45').innerHTML = averagediff45;
                       document.getElementById('d90').innerHTML = averagediff90;
                       document.getElementById('d120').innerHTML = averagediff120;
                       document.getElementById('d121').innerHTML = averagediff121;
               
               
                     }
                       
                     }
      
      
               
      
                }
            
              
        

            

        
   
   
             ///////////////////////////////////////////////////////////////////////////////////////////////////////////
         
  // var [date, setDate] = React.useState(''); //'2/1/2022'
  // var [pricevalue, setPricevalue] = React.useState(0);
  // var [pricevalue2, setPricevalue2] = React.useState(0); 



   const [county3, setCounty3] = React.useState('');
   const [town2, setTown2] = React.useState('');
   const [selectedState3, setSelectedState3] = React.useState(''); // MA

   const availableState3 = GLOBE1.states.find((s) => s.name === county3); // that is what this says...
   const availableTowns3 = availableState3?.counties?.find( //
    (c) => c.name === selectedState3 //
    ); //
   
   ///////////////////////////////////////////////////////////////////////////////

   const [belowdiffrates14avg, setBelowdiffrates14avg] = React.useState(0);
   const [belowdiffrates30avg, setBelowdiffrates30avg] = React.useState(0);
   const [belowdiffrates45avg, setBelowdiffrates45avg] = React.useState(0);
   const [belowdiffrates90avg, setBelowdiffrates90avg] = React.useState(0);
   const [belowdiffrates120avg, setBelowdiffrates120avg] = React.useState(0);
   const [belowdiffrates121avg, setBelowdiffrates121avg] = React.useState(0);

   const [avgsalesavg, setAvgsalesavg] = React.useState(0);
   const [listsaleslist, setListsaleslist] = React.useState();
   const [salesalessale, setSalesalessale] = React.useState();



   const [fourteen11, setFourteen11] = React.useState([]);

     ////pagination...


 const [currentPage24, setCurrentPage24] = React.useState(0);


 function handlePageClick24({ selected: selectedPage}){
   setCurrentPage24(selectedPage);
 }
 
 
 
 
 
 const offset24 = currentPage24 * PER_PAGE;
 
 const currentPageData24 = fourteen11
 .slice(offset24, offset24 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount24 = Math.ceil(fourteen11.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////




   const [thirty11, setThirty11] = React.useState([]);

 ////pagination...


 const [currentPage26, setCurrentPage26] = React.useState(0);


 function handlePageClick26({ selected: selectedPage}){
   setCurrentPage26(selectedPage);
 }
 
 
 
 
 
 const offset26 = currentPage26 * PER_PAGE;
 
 const currentPageData26 = thirty11
 .slice(offset26, offset26 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount26 = Math.ceil(thirty11.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 






   const [fortyfive11, setFortyfive11] = React.useState([]);

   ////pagination...


const [currentPage28, setCurrentPage28] = React.useState(0);


function handlePageClick28({ selected: selectedPage}){
  setCurrentPage28(selectedPage);
}





const offset28 = currentPage28 * PER_PAGE;

const currentPageData28 = fortyfive11
.slice(offset28, offset28 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount28 = Math.ceil(fortyfive11.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////



   const [ninety11, setNinety11] = React.useState([]);
   ////pagination...


const [currentPage30, setCurrentPage30] = React.useState(0);


function handlePageClick30({ selected: selectedPage}){
  setCurrentPage30(selectedPage);
}





const offset30 = currentPage30 * PER_PAGE;

const currentPageData30 = ninety11
.slice(offset30, offset30 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount30 = Math.ceil(ninety11.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [onetwenty11, setOnetwenty11] = React.useState([]);

 ////pagination...


 const [currentPage32, setCurrentPage32] = React.useState(0);


 function handlePageClick32({ selected: selectedPage}){
   setCurrentPage32(selectedPage);
 }
 
 
 
 
 
 const offset32 = currentPage32 * PER_PAGE;
 
 const currentPageData32 = onetwenty11
 .slice(offset32, offset32 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount32 = Math.ceil(onetwenty11.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [onetwoone11, setOnetwoone11] = React.useState([]);


   ////pagination...


 const [currentPage35, setCurrentPage35] = React.useState(0);


 function handlePageClick35({ selected: selectedPage}){
   setCurrentPage35(selectedPage);
 }
 
 
 
 
 
 const offset35 = currentPage35 * PER_PAGE;
 
 const currentPageData35 = onetwoone11
 .slice(offset35, offset35 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount35 = Math.ceil(onetwoone11.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 

   
   
   const [great14pq, setGreat14pq] = React.useState([]);
 
   ////pagination...


 const [currentPage25, setCurrentPage25] = React.useState(0);


 function handlePageClick25({ selected: selectedPage}){
   setCurrentPage25(selectedPage);
 }
 
 
 
 
 
 const offset25 = currentPage25 * PER_PAGE;
 
 const currentPageData25 = great14pq
 .slice(offset25, offset25 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount25 = Math.ceil(great14pq.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////



   const [great30pq, setGreat30pq] = React.useState([]);
////pagination...


const [currentPage27, setCurrentPage27] = React.useState(0);


function handlePageClick27({ selected: selectedPage}){
  setCurrentPage27(selectedPage);
}





const offset27 = currentPage27 * PER_PAGE;

const currentPageData27 = great30pq
.slice(offset27, offset27 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount27 = Math.ceil(great30pq.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [great45pq, setGreat45pq] = React.useState([]);
////pagination...


const [currentPage29, setCurrentPage29] = React.useState(0);


function handlePageClick29({ selected: selectedPage}){
  setCurrentPage29(selectedPage);
}





const offset29 = currentPage29 * PER_PAGE;

const currentPageData29 = great45pq
.slice(offset29, offset29 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount29 = Math.ceil(great45pq.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////




   const [great90pq, setGreat90pq] = React.useState([]);

////pagination...


const [currentPage31, setCurrentPage31] = React.useState(0);


function handlePageClick31({ selected: selectedPage}){
  setCurrentPage31(selectedPage);
}





const offset31 = currentPage31 * PER_PAGE;

const currentPageData31 = great90pq
.slice(offset31, offset31 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount31 = Math.ceil(great90pq.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [great120pq, setGreat120pq] = React.useState([]);

////pagination...


const [currentPage33, setCurrentPage33] = React.useState(0);


function handlePageClick33({ selected: selectedPage}){
  setCurrentPage33(selectedPage);
}





const offset33 = currentPage33 * PER_PAGE;

const currentPageData33 = great120pq
.slice(offset33, offset33 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount33 = Math.ceil(great120pq.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const [great121pq, setGreat121pq] = React.useState([]);


   ////pagination...


const [currentPage34, setCurrentPage34] = React.useState(0);


function handlePageClick34({ selected: selectedPage}){
  setCurrentPage34(selectedPage);
}





const offset34 = currentPage34 * PER_PAGE;

const currentPageData34 = great121pq
.slice(offset34, offset34 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount34 = Math.ceil(great121pq.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////






   async function populateQuote(e){ //this functions onClick...
     const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'}) 
     const data = await req.json();
     //if (data.status ==='ok'){
       console.log(data) // all 15k objects...
       
       let sales = [];  
       let fourteen = [];  
       let thirty = [];  
       let fortyfive = []; 
       let ninety = [];  
       let onetwenty = [];  
       let onetwoone = [];  

       let averagesaleprice = [];  
       let averagelistprice = [];
   
       let great14 = []; // 0 here 
       let great30 = [];
       let great45 = [];
       let great90 = [];
       let great120 = [];
       let great121 = [];
   
       let twentytwo = [
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
       
       
   
   
       //dateArray.slice(setDate, ...dateArray(setDate[91])); console.log(dateArray);
   
   
       for (let i = 0; i<data.length; i++){
         if (data[i].county ===`${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
           sales.push(data[i]);
           console.log(sales); // 690 objects rendered....
           console.log(data);

           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
            averagesaleprice.push(data[i]);
            console.log(averagesaleprice);
            //fourteen[i].differential
          }

          if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
            averagelistprice.push(data[i]);
            console.log(averagelistprice);
            //fourteen[i].differential
          }


           if (data[i].DOM <= 14 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             fourteen.push(data[i]);
             console.log(fourteen);
             //fourteen[i].differential
             fourteen.sort((a, b) => a.saleprice - b.saleprice);
             setFourteen11(fourteen);
           }
           if (data[i].DOM > 14 && data[i].DOM <= 30 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             thirty.push(data[i]);
             thirty.sort((a, b) => a.saleprice - b.saleprice);
             setThirty11(thirty);
           }
           if (data[i].DOM > 30 && data[i].DOM <= 45 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             fortyfive.push(data[i]);
             fortyfive.sort((a, b) => a.saleprice - b.saleprice);
             setFortyfive11(fortyfive);
           }
           if (data[i].DOM > 45 && data[i].DOM <= 90 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` ){
             ninety.push(data[i]);
             console.log(ninety);
             ninety.sort((a, b) => a.saleprice - b.saleprice);
             setNinety11(ninety);
           }
           if (data[i].DOM > 90 && data[i].DOM <= 120 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             onetwenty.push(data[i]);
             onetwenty.sort((a, b) => a.saleprice - b.saleprice);
             setOnetwenty11(onetwenty);
           }
           if (data[i].DOM > 120 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             onetwoone.push(data[i]);
             onetwoone.sort((a, b) => a.saleprice - b.saleprice);
             setOnetwoone11(onetwoone);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM <= 14 ){
             great14.push(data[i]);
             console.log(great14);
             great14.sort((a, b) => a.saleprice - b.saleprice);
             setGreat14pq(great14);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
             great30.push(data[i]);
             great30.sort((a, b) => a.saleprice - b.saleprice);
             setGreat30pq(great30);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
             great45.push(data[i]);
             great45.sort((a, b) => a.saleprice - b.saleprice);
             setGreat45pq(great45);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
             great90.push(data[i]);
             great90.sort((a, b) => a.saleprice - b.saleprice);
             setGreat90pq(great90);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
             great120.push(data[i]);
             great120.sort((a, b) => a.saleprice - b.saleprice);
             setGreat120pq(great120);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 120){
             great121.push(data[i]);
             great121.sort((a, b) => a.saleprice - b.saleprice);
             setGreat121pq(great121);
           }
           
           
           let sale14 = fourteen.length; //provides the length of all sales above= fourteen.length;
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
   
           const atabove14 =  Math.round((lengthgreat14 / sale14) * 100) || 0;
           const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100) || 0;
           const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100) || 0;
           const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100) || 0;
           const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100) || 0;
           const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100) || 0;
   
           
   
   
           document.getElementById('sales14').innerHTML = sale14; //
           document.getElementById('sales30').innerHTML = sale30;
           document.getElementById('sales45').innerHTML = sale45;
           document.getElementById('sales90').innerHTML = sale90;
           document.getElementById('sales120').innerHTML = sale120;
           document.getElementById('sales121').innerHTML = sale121;
   
   
   
           document.getElementById('rates14').innerHTML = `${atabove14}%`;
           document.getElementById('rates30').innerHTML = `${atabove30}%`;
           document.getElementById('rates45').innerHTML = `${atabove45}%`;
           document.getElementById('rates90').innerHTML = `${atabove90}%`;
           document.getElementById('rates120').innerHTML = `${atabove120}%`;
           document.getElementById('rates121').innerHTML = `${atabove121}%`;
   
           document.getElementById('fraction14').innerHTML = `${lengthgreat14}/${sale14}`;
           document.getElementById('fraction30').innerHTML = `${lengthgreat30}/${sale30}`;
           document.getElementById('fraction45').innerHTML = `${lengthgreat45}/${sale45}`;
           document.getElementById('fraction90').innerHTML = `${lengthgreat90}/${sale90}`;
           document.getElementById('fraction120').innerHTML = `${lengthgreat120}/${sale120}`;
           document.getElementById('fraction121').innerHTML = `${lengthgreat121}/${sale121}`;
   
   
   
           let differential = 0;
           function add(item, counter, array){
            differential+=(item.differential); 
           }
           fourteen.forEach(add);
           console.log(fourteen); // 0
   
           let differential2 = 0;
           function add2(item, counter, array){
             differential2+=(item.differential);
           }
           thirty.forEach(add2);
           console.log(differential2);
           
           let differential3 = 0;
           
           function add3(item, counter, array){
             differential3+=(item.differential);
           }
   
           fortyfive.forEach(add3);
   
           let differential4 = 0;
           function add4(item, counter, array){
             differential4+=(item.differential);
           }
   
           ninety.forEach(add4);
   
           let differential5 = 0;
           function add5(item, counter, array){
             differential5+=(item.differential);
           }
   
           onetwenty.forEach(add5); //sales.forEach(add5);
           console.log(differential5);
           console.log(sales);
   
           let differential6 = 0;
           function add6(item, counter, array){
             differential6+=(item.differential);
           }
   
           onetwoone.forEach(add6); 
           console.log(differential6);

           let differential7 = 0;
           function add7(item, counter, array){
             differential7+=(item.differential);
           }
   
           great14.forEach(add7); 
           console.log(differential7);

           let differential8 = 0;
           function add8(item, counter, array){
             differential8+=(item.differential);
           }
   
           great30.forEach(add8); 
           console.log(differential8);

           let differential9 = 0;
           function add9(item, counter, array){
             differential9+=(item.differential);
           }
   
           great45.forEach(add9); 
           console.log(differential9);

           let differential10 = 0;
           function add10(item, counter, array){
             differential10+=(item.differential);
           }
   
           great90.forEach(add10); 
           console.log(differential10);

           let differential11 = 0;
           function add11(item, counter, array){
             differential11+=(item.differential);
           }
   
           great120.forEach(add11); 
           console.log(differential11);

           let differential12 = 0;
           function add12(item, counter, array){
             differential12+=(item.differential);
           }
   
           great121.forEach(add12); 
           console.log(great121);

           let differential13 = 0;
           function add13(item, counter, array){
            differential13+=(item.DOM);
           }
           sales.forEach(add13);
           
           let differential14 = 0;
           function add14(item, counter, array){
            differential14+=(item.saleprice);
           }
           averagesaleprice.forEach(add14);

           let differential15 = 0;
           function add15(item, counter, array){
            differential15+=(item.listprice);
           }
           averagelistprice.forEach(add15);




           const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
           })
          



           let avgDOMpopulate = Math.round(differential13 / sales.length);
           let avgSalepopulate = formatter.format(Math.round(differential14 / averagesaleprice.length));
           let avgListpopulate = formatter.format(Math.round(differential15 / averagelistprice.length));



           document.getElementById('avgListpopulate').innerHTML = `${avgListpopulate} List`;
           document.getElementById('avgSalepopulate').innerHTML = `${avgSalepopulate} Sale`;
           document.getElementById('avgDOMpopulate').innerHTML = `${avgDOMpopulate} Days`;



   
   
   
   
   
          
           // console.log(saleprice);
          let averagediff14 = formatter.format(Math.round( differential / sale14 ) || 0);
          let averagediff30 = formatter.format(Math.round( differential2 / sale30 ) || 0);
          let averagediff45 = formatter.format(Math.round( differential3 / sale45 ) || 0);
          let averagediff90 = formatter.format(Math.round( (differential4) / sale90 ) || 0);
          let averagediff120 = formatter.format(Math.round( differential5 / sale120 ) || 0);
          let averagediff121 = formatter.format(Math.round( differential6 / sale121 ) || 0);


        setBelowdiffrates14avg(formatter.format(Math.round( differential7 / lengthgreat14 ))); // title
        setBelowdiffrates30avg(formatter.format(Math.round( differential8 / lengthgreat30 ))); // title
        setBelowdiffrates45avg(formatter.format(Math.round( differential9 / lengthgreat45 ))); // title
        setBelowdiffrates90avg(formatter.format(Math.round( differential10 / lengthgreat90 ))); // title
        setBelowdiffrates120avg(formatter.format(Math.round( differential11 / lengthgreat120 ))); // title
        setBelowdiffrates121avg(formatter.format(Math.round( differential12 / lengthgreat121 ))); // title

        setAvgsalesavg('Average Days on Market'); // title
        setListsaleslist('Average List Price'); // title
        setSalesalessale('Average Sale Price'); // title


       
        
   
           
          
           document.getElementById('duff14').innerHTML = averagediff14;
           document.getElementById('duff30').innerHTML = averagediff30;
           document.getElementById('duff45').innerHTML = averagediff45;
           document.getElementById('duff90').innerHTML = averagediff90;
           document.getElementById('duff120').innerHTML = averagediff120;
           document.getElementById('duff121').innerHTML = averagediff121;
   
           //document.getElementById('calvalue').innerHTML = `${date}`;


           <div>
           <Popup trigger={<a id='sales45' className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1725px' }}></a>}
              position='center'>
               <div></div>
              </Popup>
              </div>
   
   
         }
       }
     }


    
   
     //////////////////////////////////////////////////////////////////////////////////////////////////////
     
     async function DOM85PopulateQuote(e){ //this functions onClick...
      const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'}) 
      const data = await req.json();
      //if (data.status ==='ok'){
        console.log(data) // all 15k objects...
        
        let sales85 = [];
        
        let yearCurrent = [];
        let yearPrevious = [];
        let yearcall2021 = [];
        let month1 = [];
        let month2 = [];
        let month3 = [];
        let month4 = [];
    
        let twentyone = [
          '1/1/2021','1/2/2021','1/3/2021','1/4/2021','1/5/2021','1/6/2021','1/7/2021','1/8/2021','1/9/2021','1/10/2021','1/11/2021','1/12/2021','1/13/2021','1/14/2021','1/15/2021','1/16/2021','1/17/2021','1/18/2021','1/19/2021','1/20/2021','1/21/2021','1/22/2021','1/23/2021','1/24/2021','1/25/2021','1/26/2021','1/27/2021','1/28/2021','1/29/2021','1/30/2021','1/31/2021',
          '2/1/2021','2/2/2021','2/3/2021','2/4/2021','2/5/2021','2/6/2021','2/7/2021','2/8/2021','2/9/2021','2/10/2021','2/11/2021','2/12/2021','2/13/2021','2/14/2021','2/15/2021','2/16/2021','2/17/2021','2/18/2021','2/19/2021','2/20/2021','2/21/2021','2/22/2021','2/23/2021','2/24/2021','2/25/2021','2/26/2021','2/27/2021','2/28/2021',
          '3/1/2021','3/2/2021','3/3/2021','3/4/2021','3/5/2021','3/6/2021','3/7/2021','3/8/2021','3/9/2021','3/10/2021','3/11/2021','3/12/2021','3/13/2021','3/14/2021','3/15/2021','3/16/2021','3/17/2021','3/18/2021','3/19/2021','3/20/2021','3/21/2021','3/22/2021','3/23/2021','3/24/2021','3/25/2021','3/26/2021','3/27/2021','3/28/2021','3/29/2021','3/30/2021','3/31/2021',
          '4/1/2021','4/2/2021','4/3/2021','4/4/2021','4/5/2021','4/6/2021','4/7/2021','4/8/2021','4/9/2021','4/10/2021','4/11/2021','4/12/2021','4/13/2021','4/14/2021','4/15/2021','4/16/2021','4/17/2021','4/18/2021','4/19/2021','4/20/2021','4/21/2021','4/22/2021','4/23/2021','4/24/2021','4/25/2021','4/26/2021','4/27/2021','4/28/2021','4/29/2021','4/30/2021',
          '5/1/2021','5/2/2021','5/3/2021','5/4/2021','5/5/2021','5/6/2021','5/7/2021','5/8/2021','5/9/2021','5/10/2021','5/11/2021','5/12/2021','5/13/2021','5/14/2021','5/15/2021','5/16/2021','5/17/2021','5/18/2021','5/19/2021','5/20/2021','5/21/2021','5/22/2021','5/23/2021','5/24/2021','5/25/2021','5/26/2021','5/27/2021','5/28/2021','5/29/2021','5/30/2021','5/31/2021',
          '6/1/2021','6/2/2021','6/3/2021','6/4/2021','6/5/2021','6/6/2021','6/7/2021','6/8/2021','6/9/2021','6/10/2021','6/11/2021','6/12/2021','6/13/2021','6/14/2021','6/15/2021','6/16/2021','6/17/2021','6/18/2021','6/19/2021','6/20/2021','6/21/2021','6/22/2021','6/23/2021','6/24/2021','6/25/2021','6/26/2021','6/27/2021','6/28/2021','6/29/2021','6/30/2021',
          '7/1/2021','7/2/2021','7/3/2021','7/4/2021','7/5/2021','7/6/2021','7/7/2021','7/8/2021','7/9/2021','7/10/2021','7/11/2021','7/12/2021','7/13/2021','7/14/2021','7/15/2021','7/16/2021','7/17/2021','7/18/2021','7/19/2021','7/20/2021','7/21/2021','7/22/2021','7/23/2021','7/24/2021','7/25/2021','7/26/2021','7/27/2021','7/28/2021','7/29/2021','7/30/2021','7/31/2021',
          '8/1/2021','8/2/2021','8/3/2021','8/4/2021','8/5/2021','8/6/2021','8/7/2021','8/8/2021','8/9/2021','8/10/2021','8/11/2021','8/12/2021','8/13/2021','8/14/2021','8/15/2021','8/16/2021','8/17/2021','8/18/2021','8/19/2021','8/20/2021','8/21/2021','8/22/2021','8/23/2021','8/24/2021','8/25/2021','8/26/2021','8/27/2021','8/28/2021','8/29/2021','8/30/2021','8/31/2021',
          '9/1/2021','9/2/2021','9/3/2021','9/4/2021','9/5/2021','9/6/2021','9/7/2021','9/8/2021','9/9/2021','9/10/2021','9/11/2021','9/12/2021','9/13/2021','9/14/2021','9/15/2021','9/16/2021','9/17/2021','9/18/2021','9/19/2021','9/20/2021','9/21/2021','9/22/2021','9/23/2021','9/24/2021','9/25/2021','9/26/2021','9/27/2021','9/28/2021','9/29/2021','9/30/2021',
          '10/1/2021','10/2/2021','10/3/2021','10/4/2021','10/5/2021','10/6/2021','10/7/2021','10/8/2021','10/9/2021','10/10/2021','10/11/2021','10/12/2021','10/13/2021','10/14/2021','10/15/2021','10/16/2021','10/17/2021','10/18/2021','10/19/2021','10/20/2021','10/21/2021','10/22/2021','10/23/2021','10/24/2021','10/25/2021','10/26/2021','10/27/2021','10/28/2021','10/29/2021','10/30/2021','10/31/2021',
          '11/1/2021','11/2/2021','11/3/2021','11/4/2021','11/5/2021','11/6/2021','11/7/2021','11/8/2021','11/9/2021','11/10/2021','11/11/2021','11/12/2021','11/13/2021','11/14/2021','11/15/2021','11/16/2021','11/17/2021','11/18/2021','11/19/2021','11/20/2021','11/21/2021','11/22/2021','11/23/2021','11/24/2021','11/25/2021','11/26/2021','11/27/2021','11/28/2021','11/29/2021','11/30/2021','12/1/2021',
          '12/2/2021','12/3/2021','12/4/2021','12/5/2021','12/6/2021','12/7/2021','12/8/2021','12/9/2021','12/10/2021','12/11/2021','12/12/2021','12/13/2021','12/14/2021','12/15/2021','12/16/2021','12/17/2021','12/18/2021','12/19/2021','12/20/2021','12/21/2021','12/22/2021','12/23/2021','12/24/2021','12/25/2021','12/26/2021','12/27/2021','12/28/2021','12/29/2021','12/30/2021','12/31/2021'
              ];
    
              var index21 = [twentyone[0], twentyone[1], twentyone[2], twentyone[3], twentyone[4], twentyone[5], twentyone[6], twentyone[7], twentyone[8], twentyone[9], twentyone[10], twentyone[11], twentyone[12], twentyone[13], twentyone[14], twentyone[15], twentyone[16], twentyone[17], twentyone[18], twentyone[19], twentyone[20], twentyone[21], twentyone[22], twentyone[23], twentyone[24], twentyone[25], twentyone[26], twentyone[27], twentyone[28], twentyone[29], twentyone[30],
    twentyone[31], twentyone[32], twentyone[33], twentyone[34], twentyone[35], twentyone[36], twentyone[37], twentyone[38], twentyone[39], twentyone[40], twentyone[41], twentyone[42], twentyone[43], twentyone[44], twentyone[45], twentyone[46], twentyone[47], twentyone[48], twentyone[49], twentyone[50], twentyone[51], twentyone[52], twentyone[53], twentyone[54], twentyone[55], twentyone[56], twentyone[57], twentyone[58], twentyone[59], twentyone[60], twentyone[61],
    twentyone[62], twentyone[63], twentyone[64], twentyone[65], twentyone[66], twentyone[67], twentyone[68], twentyone[69], twentyone[70], twentyone[71], twentyone[72], twentyone[73], twentyone[74], twentyone[75], twentyone[76], twentyone[77], twentyone[78], twentyone[79], twentyone[80], twentyone[81], twentyone[82], twentyone[83], twentyone[84], twentyone[85], twentyone[86], twentyone[87], twentyone[88], twentyone[89], twentyone[90], twentyone[91], twentyone[92],
    twentyone[93], twentyone[94], twentyone[95], twentyone[96], twentyone[97], twentyone[98], twentyone[99], twentyone[100], twentyone[101], twentyone[102], twentyone[103], twentyone[104], twentyone[105], twentyone[106], twentyone[107], twentyone[108], twentyone[109], twentyone[110], twentyone[111], twentyone[112], twentyone[113], twentyone[114], twentyone[115], twentyone[116], twentyone[117], twentyone[118], twentyone[119], twentyone[120], twentyone[121], twentyone[122], twentyone[123],
    twentyone[124], twentyone[125], twentyone[126], twentyone[127], twentyone[128], twentyone[129], twentyone[130], twentyone[131], twentyone[132], twentyone[133], twentyone[134], twentyone[135], twentyone[136], twentyone[137], twentyone[138], twentyone[139], twentyone[140], twentyone[141], twentyone[142], twentyone[143], twentyone[144], twentyone[145], twentyone[146], twentyone[147], twentyone[148], twentyone[149], twentyone[150], twentyone[151], twentyone[152], twentyone[153], twentyone[154], 
    twentyone[155], twentyone[156], twentyone[157], twentyone[158], twentyone[159], twentyone[160], twentyone[161], twentyone[162], twentyone[163], twentyone[164], twentyone[165], twentyone[166], twentyone[167], twentyone[168], twentyone[169], twentyone[170], twentyone[171], twentyone[172], twentyone[173], twentyone[174], twentyone[175], twentyone[176], twentyone[177], twentyone[178], twentyone[179], twentyone[180], twentyone[181], twentyone[182], twentyone[183], twentyone[184], twentyone[185],
    twentyone[186], twentyone[187], twentyone[188], twentyone[189], twentyone[190], twentyone[191], twentyone[192], twentyone[193], twentyone[194], twentyone[195], twentyone[196], twentyone[197], twentyone[198], twentyone[199], twentyone[200], twentyone[201], twentyone[202], twentyone[203], twentyone[204], twentyone[205], twentyone[206], twentyone[207], twentyone[208], twentyone[209], twentyone[210], twentyone[211], twentyone[212], twentyone[213], twentyone[214], twentyone[215], twentyone[216],
    twentyone[217], twentyone[218], twentyone[219], twentyone[220], twentyone[221], twentyone[222], twentyone[223], twentyone[224], twentyone[225], twentyone[226], twentyone[227], twentyone[228], twentyone[229], twentyone[230], twentyone[231], twentyone[232], twentyone[233], twentyone[234], twentyone[235], twentyone[236], twentyone[237], twentyone[238], twentyone[239], twentyone[240], twentyone[241], twentyone[242], twentyone[243], twentyone[244], twentyone[245], twentyone[246], twentyone[247],
    twentyone[248], twentyone[249], twentyone[250], twentyone[251], twentyone[252], twentyone[253], twentyone[254], twentyone[255], twentyone[256], twentyone[257], twentyone[258], twentyone[259], twentyone[260], twentyone[261], twentyone[262], twentyone[263], twentyone[264], twentyone[265], twentyone[267], twentyone[268], twentyone[269], twentyone[270], twentyone[271], twentyone[272], twentyone[273], twentyone[274], twentyone[275], twentyone[276], twentyone[277], twentyone[278], twentyone[279],
    twentyone[280], twentyone[281], twentyone[282], twentyone[283], twentyone[284], twentyone[285], twentyone[286], twentyone[287], twentyone[288], twentyone[289], twentyone[290], twentyone[291], twentyone[292], twentyone[293], twentyone[294], twentyone[295], twentyone[296], twentyone[297], twentyone[298], twentyone[299], twentyone[300], twentyone[301], twentyone[302], twentyone[303], twentyone[304], twentyone[305], twentyone[306], twentyone[307], twentyone[308], twentyone[309], twentyone[310],
    twentyone[311], twentyone[312], twentyone[313], twentyone[314], twentyone[315], twentyone[316], twentyone[317], twentyone[318], twentyone[319], twentyone[320], twentyone[321], twentyone[322], twentyone[323], twentyone[324], twentyone[325], twentyone[326], twentyone[327], twentyone[328], twentyone[329], twentyone[330], twentyone[331], twentyone[332], twentyone[333], twentyone[334], twentyone[335], twentyone[336], twentyone[337], twentyone[338], twentyone[339], twentyone[340], twentyone[341],
    twentyone[342], twentyone[343], twentyone[344], twentyone[345], twentyone[346], twentyone[347], twentyone[348], twentyone[349], twentyone[350], twentyone[351], twentyone[352], twentyone[353], twentyone[354], twentyone[355], twentyone[356], twentyone[357], twentyone[358], twentyone[359], twentyone[360], twentyone[361], twentyone[362], twentyone[363], twentyone[364]];
    console.log(index21);
    
    
        
        
    
    
        //dateArray.slice(setDate, ...dateArray(setDate[91])); console.log(dateArray);
    
    
        for (let i = 0; i<data.length; i++){
          if(data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
            sales85.push(data[i]);
            console.log(sales85);
          
            
    /////// TOTAL SALES 85 //////////////
           
   let TotalSales = [...sales85];
   console.log(TotalSales); 
          
   
   let TotalSalesamount = TotalSales.length;
   let EightFiveSales = Math.round((.85 * TotalSalesamount));
   let length85 = EightFiveSales;
   console.log(length85);
   
   let salesplice = TotalSales.splice(0, length85);  // 85% in accordance 
   console.log(salesplice); //62
   
   let sortTotalsalesDOM = salesplice.sort(function(a,b){
     return a.DOM - b.DOM;
   })
   console.log(sortTotalsalesDOM); // 63 in days on market order... this array is correct...
   
   let DOMTotalsales = (sortTotalsalesDOM[sortTotalsalesDOM.length - 1]);
   console.log(DOMTotalsales);
   
   let DOMTotalsalesinnerElement = DOMTotalsales.DOM; // **USE INDEX DOT NOTATION ex. data[i][0].DOM - should return 80...
   console.log(DOMTotalsalesinnerElement);
   
   document.getElementById('DOM85populatequote').innerHTML = '85% of sales sold @ ' + `${DOMTotalsalesinnerElement}` + 'days of ' + `${TotalSalesamount}` + ' Total Sales'; // showing 80...
    
    
    
          }
        }
      }


      async function DOM85AbovePopulateQuote(e){ //this functions onClick...
        const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'}) 
        const data = await req.json();
        //if (data.status ==='ok'){
          console.log(data) // all 15k objects...
          
          let salesabove = [];
          
          let yearCurrent = [];
          let yearPrevious = [];
          let yearcall2021 = [];
          let month1 = [];
          let month2 = [];
          let month3 = [];
          let month4 = [];
      
          let twentyone = [
            '1/1/2021','1/2/2021','1/3/2021','1/4/2021','1/5/2021','1/6/2021','1/7/2021','1/8/2021','1/9/2021','1/10/2021','1/11/2021','1/12/2021','1/13/2021','1/14/2021','1/15/2021','1/16/2021','1/17/2021','1/18/2021','1/19/2021','1/20/2021','1/21/2021','1/22/2021','1/23/2021','1/24/2021','1/25/2021','1/26/2021','1/27/2021','1/28/2021','1/29/2021','1/30/2021','1/31/2021',
            '2/1/2021','2/2/2021','2/3/2021','2/4/2021','2/5/2021','2/6/2021','2/7/2021','2/8/2021','2/9/2021','2/10/2021','2/11/2021','2/12/2021','2/13/2021','2/14/2021','2/15/2021','2/16/2021','2/17/2021','2/18/2021','2/19/2021','2/20/2021','2/21/2021','2/22/2021','2/23/2021','2/24/2021','2/25/2021','2/26/2021','2/27/2021','2/28/2021',
            '3/1/2021','3/2/2021','3/3/2021','3/4/2021','3/5/2021','3/6/2021','3/7/2021','3/8/2021','3/9/2021','3/10/2021','3/11/2021','3/12/2021','3/13/2021','3/14/2021','3/15/2021','3/16/2021','3/17/2021','3/18/2021','3/19/2021','3/20/2021','3/21/2021','3/22/2021','3/23/2021','3/24/2021','3/25/2021','3/26/2021','3/27/2021','3/28/2021','3/29/2021','3/30/2021','3/31/2021',
            '4/1/2021','4/2/2021','4/3/2021','4/4/2021','4/5/2021','4/6/2021','4/7/2021','4/8/2021','4/9/2021','4/10/2021','4/11/2021','4/12/2021','4/13/2021','4/14/2021','4/15/2021','4/16/2021','4/17/2021','4/18/2021','4/19/2021','4/20/2021','4/21/2021','4/22/2021','4/23/2021','4/24/2021','4/25/2021','4/26/2021','4/27/2021','4/28/2021','4/29/2021','4/30/2021',
            '5/1/2021','5/2/2021','5/3/2021','5/4/2021','5/5/2021','5/6/2021','5/7/2021','5/8/2021','5/9/2021','5/10/2021','5/11/2021','5/12/2021','5/13/2021','5/14/2021','5/15/2021','5/16/2021','5/17/2021','5/18/2021','5/19/2021','5/20/2021','5/21/2021','5/22/2021','5/23/2021','5/24/2021','5/25/2021','5/26/2021','5/27/2021','5/28/2021','5/29/2021','5/30/2021','5/31/2021',
            '6/1/2021','6/2/2021','6/3/2021','6/4/2021','6/5/2021','6/6/2021','6/7/2021','6/8/2021','6/9/2021','6/10/2021','6/11/2021','6/12/2021','6/13/2021','6/14/2021','6/15/2021','6/16/2021','6/17/2021','6/18/2021','6/19/2021','6/20/2021','6/21/2021','6/22/2021','6/23/2021','6/24/2021','6/25/2021','6/26/2021','6/27/2021','6/28/2021','6/29/2021','6/30/2021',
            '7/1/2021','7/2/2021','7/3/2021','7/4/2021','7/5/2021','7/6/2021','7/7/2021','7/8/2021','7/9/2021','7/10/2021','7/11/2021','7/12/2021','7/13/2021','7/14/2021','7/15/2021','7/16/2021','7/17/2021','7/18/2021','7/19/2021','7/20/2021','7/21/2021','7/22/2021','7/23/2021','7/24/2021','7/25/2021','7/26/2021','7/27/2021','7/28/2021','7/29/2021','7/30/2021','7/31/2021',
            '8/1/2021','8/2/2021','8/3/2021','8/4/2021','8/5/2021','8/6/2021','8/7/2021','8/8/2021','8/9/2021','8/10/2021','8/11/2021','8/12/2021','8/13/2021','8/14/2021','8/15/2021','8/16/2021','8/17/2021','8/18/2021','8/19/2021','8/20/2021','8/21/2021','8/22/2021','8/23/2021','8/24/2021','8/25/2021','8/26/2021','8/27/2021','8/28/2021','8/29/2021','8/30/2021','8/31/2021',
            '9/1/2021','9/2/2021','9/3/2021','9/4/2021','9/5/2021','9/6/2021','9/7/2021','9/8/2021','9/9/2021','9/10/2021','9/11/2021','9/12/2021','9/13/2021','9/14/2021','9/15/2021','9/16/2021','9/17/2021','9/18/2021','9/19/2021','9/20/2021','9/21/2021','9/22/2021','9/23/2021','9/24/2021','9/25/2021','9/26/2021','9/27/2021','9/28/2021','9/29/2021','9/30/2021',
            '10/1/2021','10/2/2021','10/3/2021','10/4/2021','10/5/2021','10/6/2021','10/7/2021','10/8/2021','10/9/2021','10/10/2021','10/11/2021','10/12/2021','10/13/2021','10/14/2021','10/15/2021','10/16/2021','10/17/2021','10/18/2021','10/19/2021','10/20/2021','10/21/2021','10/22/2021','10/23/2021','10/24/2021','10/25/2021','10/26/2021','10/27/2021','10/28/2021','10/29/2021','10/30/2021','10/31/2021',
            '11/1/2021','11/2/2021','11/3/2021','11/4/2021','11/5/2021','11/6/2021','11/7/2021','11/8/2021','11/9/2021','11/10/2021','11/11/2021','11/12/2021','11/13/2021','11/14/2021','11/15/2021','11/16/2021','11/17/2021','11/18/2021','11/19/2021','11/20/2021','11/21/2021','11/22/2021','11/23/2021','11/24/2021','11/25/2021','11/26/2021','11/27/2021','11/28/2021','11/29/2021','11/30/2021','12/1/2021',
            '12/2/2021','12/3/2021','12/4/2021','12/5/2021','12/6/2021','12/7/2021','12/8/2021','12/9/2021','12/10/2021','12/11/2021','12/12/2021','12/13/2021','12/14/2021','12/15/2021','12/16/2021','12/17/2021','12/18/2021','12/19/2021','12/20/2021','12/21/2021','12/22/2021','12/23/2021','12/24/2021','12/25/2021','12/26/2021','12/27/2021','12/28/2021','12/29/2021','12/30/2021','12/31/2021'
                ];
      
                var index21 = [twentyone[0], twentyone[1], twentyone[2], twentyone[3], twentyone[4], twentyone[5], twentyone[6], twentyone[7], twentyone[8], twentyone[9], twentyone[10], twentyone[11], twentyone[12], twentyone[13], twentyone[14], twentyone[15], twentyone[16], twentyone[17], twentyone[18], twentyone[19], twentyone[20], twentyone[21], twentyone[22], twentyone[23], twentyone[24], twentyone[25], twentyone[26], twentyone[27], twentyone[28], twentyone[29], twentyone[30],
      twentyone[31], twentyone[32], twentyone[33], twentyone[34], twentyone[35], twentyone[36], twentyone[37], twentyone[38], twentyone[39], twentyone[40], twentyone[41], twentyone[42], twentyone[43], twentyone[44], twentyone[45], twentyone[46], twentyone[47], twentyone[48], twentyone[49], twentyone[50], twentyone[51], twentyone[52], twentyone[53], twentyone[54], twentyone[55], twentyone[56], twentyone[57], twentyone[58], twentyone[59], twentyone[60], twentyone[61],
      twentyone[62], twentyone[63], twentyone[64], twentyone[65], twentyone[66], twentyone[67], twentyone[68], twentyone[69], twentyone[70], twentyone[71], twentyone[72], twentyone[73], twentyone[74], twentyone[75], twentyone[76], twentyone[77], twentyone[78], twentyone[79], twentyone[80], twentyone[81], twentyone[82], twentyone[83], twentyone[84], twentyone[85], twentyone[86], twentyone[87], twentyone[88], twentyone[89], twentyone[90], twentyone[91], twentyone[92],
      twentyone[93], twentyone[94], twentyone[95], twentyone[96], twentyone[97], twentyone[98], twentyone[99], twentyone[100], twentyone[101], twentyone[102], twentyone[103], twentyone[104], twentyone[105], twentyone[106], twentyone[107], twentyone[108], twentyone[109], twentyone[110], twentyone[111], twentyone[112], twentyone[113], twentyone[114], twentyone[115], twentyone[116], twentyone[117], twentyone[118], twentyone[119], twentyone[120], twentyone[121], twentyone[122], twentyone[123],
      twentyone[124], twentyone[125], twentyone[126], twentyone[127], twentyone[128], twentyone[129], twentyone[130], twentyone[131], twentyone[132], twentyone[133], twentyone[134], twentyone[135], twentyone[136], twentyone[137], twentyone[138], twentyone[139], twentyone[140], twentyone[141], twentyone[142], twentyone[143], twentyone[144], twentyone[145], twentyone[146], twentyone[147], twentyone[148], twentyone[149], twentyone[150], twentyone[151], twentyone[152], twentyone[153], twentyone[154], 
      twentyone[155], twentyone[156], twentyone[157], twentyone[158], twentyone[159], twentyone[160], twentyone[161], twentyone[162], twentyone[163], twentyone[164], twentyone[165], twentyone[166], twentyone[167], twentyone[168], twentyone[169], twentyone[170], twentyone[171], twentyone[172], twentyone[173], twentyone[174], twentyone[175], twentyone[176], twentyone[177], twentyone[178], twentyone[179], twentyone[180], twentyone[181], twentyone[182], twentyone[183], twentyone[184], twentyone[185],
      twentyone[186], twentyone[187], twentyone[188], twentyone[189], twentyone[190], twentyone[191], twentyone[192], twentyone[193], twentyone[194], twentyone[195], twentyone[196], twentyone[197], twentyone[198], twentyone[199], twentyone[200], twentyone[201], twentyone[202], twentyone[203], twentyone[204], twentyone[205], twentyone[206], twentyone[207], twentyone[208], twentyone[209], twentyone[210], twentyone[211], twentyone[212], twentyone[213], twentyone[214], twentyone[215], twentyone[216],
      twentyone[217], twentyone[218], twentyone[219], twentyone[220], twentyone[221], twentyone[222], twentyone[223], twentyone[224], twentyone[225], twentyone[226], twentyone[227], twentyone[228], twentyone[229], twentyone[230], twentyone[231], twentyone[232], twentyone[233], twentyone[234], twentyone[235], twentyone[236], twentyone[237], twentyone[238], twentyone[239], twentyone[240], twentyone[241], twentyone[242], twentyone[243], twentyone[244], twentyone[245], twentyone[246], twentyone[247],
      twentyone[248], twentyone[249], twentyone[250], twentyone[251], twentyone[252], twentyone[253], twentyone[254], twentyone[255], twentyone[256], twentyone[257], twentyone[258], twentyone[259], twentyone[260], twentyone[261], twentyone[262], twentyone[263], twentyone[264], twentyone[265], twentyone[267], twentyone[268], twentyone[269], twentyone[270], twentyone[271], twentyone[272], twentyone[273], twentyone[274], twentyone[275], twentyone[276], twentyone[277], twentyone[278], twentyone[279],
      twentyone[280], twentyone[281], twentyone[282], twentyone[283], twentyone[284], twentyone[285], twentyone[286], twentyone[287], twentyone[288], twentyone[289], twentyone[290], twentyone[291], twentyone[292], twentyone[293], twentyone[294], twentyone[295], twentyone[296], twentyone[297], twentyone[298], twentyone[299], twentyone[300], twentyone[301], twentyone[302], twentyone[303], twentyone[304], twentyone[305], twentyone[306], twentyone[307], twentyone[308], twentyone[309], twentyone[310],
      twentyone[311], twentyone[312], twentyone[313], twentyone[314], twentyone[315], twentyone[316], twentyone[317], twentyone[318], twentyone[319], twentyone[320], twentyone[321], twentyone[322], twentyone[323], twentyone[324], twentyone[325], twentyone[326], twentyone[327], twentyone[328], twentyone[329], twentyone[330], twentyone[331], twentyone[332], twentyone[333], twentyone[334], twentyone[335], twentyone[336], twentyone[337], twentyone[338], twentyone[339], twentyone[340], twentyone[341],
      twentyone[342], twentyone[343], twentyone[344], twentyone[345], twentyone[346], twentyone[347], twentyone[348], twentyone[349], twentyone[350], twentyone[351], twentyone[352], twentyone[353], twentyone[354], twentyone[355], twentyone[356], twentyone[357], twentyone[358], twentyone[359], twentyone[360], twentyone[361], twentyone[362], twentyone[363], twentyone[364]];
      console.log(index21);
      
      
          
          
      
      
          //dateArray.slice(setDate, ...dateArray(setDate[91])); console.log(dateArray);
      
      
          for (let i = 0; i<data.length; i++){
            if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= data[i].listprice && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
              salesabove.push(data[i]);
              console.log(salesabove);

               ////////// TOTAL SALES ABOVEW 85 //////////////

   let TotalSales2 = [...salesabove];
   console.log(TotalSales2); // 74
          
   
   let TotalSalesamount2 = TotalSales2.length;
   let EightFiveSales2 = Math.round((.85 * TotalSalesamount2));
   let length852 = EightFiveSales2;
   console.log(length852);
   
   let salesplice2 = TotalSales2.splice(0, length852);  // 85% in accordance 
   console.log(salesplice2); //62
   
   let sortTotalsalesDOM2 = salesplice2.sort(function(a,b){
     return a.DOM - b.DOM;
   })
   console.log(sortTotalsalesDOM2); // 63 in days on market order... this array is correct...
   
   let DOMTotalsales2 = (sortTotalsalesDOM2[sortTotalsalesDOM2.length - 1]);
   console.log(DOMTotalsales2);
   
   let DOMTotalsalesinnerElement2 = DOMTotalsales2.DOM; // **USE INDEX DOT NOTATION ex. data[i][0].DOM - should return 80...
   console.log(DOMTotalsalesinnerElement2);
   
   
   
   
   document.getElementById('DOM85abovepopulatequote').innerHTML = '85% of sales above list price sold @ ' + `${DOMTotalsalesinnerElement2}` + 'days of ' + `${TotalSalesamount2}` + ' Total Sales'; // showing 80...
   
   
            
            
              

      
      
            }
          }
        }


      



   
     ////////////////////////////////////////////////// market anticipations by month...
   
   //var [town, setTown] = React.useState(''); //'2/1/2022'
   var [pricevalue, setPricevalue] = React.useState(0);
   var [pricevalue2, setPricevalue2] = React.useState(0);
   const [valueupdown, setValueupdown] = React.useState(0);
   const [yearANT, setYearANT] = React.useState(0); 
   const [percent, setPercent] = React.useState(0);
   
   var barnstabletowns = ['Barnstable, MA',  'Bourne, MA', 'Brewster, MA',  'Chatham, MA',  'Dennis, MA',  'Eastham, MA',  'Falmouth, MA', 'Harwich, MA',  'Mashpee, MA', 'Orleans, MA', 'Provincetown, MA', 'Sandwich, MA',  'Truro, MA', 'Wellfleet, MA',  'Yarmouth, MA'];
   
   const [county4, setCounty4] = React.useState('');
   const [town, setTown] = React.useState('');
   const [selectedState4, setSelectedState4] = React.useState(''); // MA

   const availableState4 = GLOBE1.states.find((s) => s.name === county4); // that is what this says...
   const availableTowns4 = availableState4?.counties?.find( //
    (c) => c.name === selectedState4 //
    ); //
   

   
   async function marketANT(e){ //this functions onClick...
     const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'}) 
     const data = await req.json();
     //if (data.status ==='ok'){
       console.log(data) // all 15k objects...
       
       let sales= [];
       
       let yearCurrent = [];
       let yearPrevious = [];
       let yearcall2021 = [];
       let month1 = [];
       let month2 = [];
       let month3 = [];
       let month4 = [];
   
       let twentyone = [
         '1/1/2021','1/2/2021','1/3/2021','1/4/2021','1/5/2021','1/6/2021','1/7/2021','1/8/2021','1/9/2021','1/10/2021','1/11/2021','1/12/2021','1/13/2021','1/14/2021','1/15/2021','1/16/2021','1/17/2021','1/18/2021','1/19/2021','1/20/2021','1/21/2021','1/22/2021','1/23/2021','1/24/2021','1/25/2021','1/26/2021','1/27/2021','1/28/2021','1/29/2021','1/30/2021','1/31/2021',
         '2/1/2021','2/2/2021','2/3/2021','2/4/2021','2/5/2021','2/6/2021','2/7/2021','2/8/2021','2/9/2021','2/10/2021','2/11/2021','2/12/2021','2/13/2021','2/14/2021','2/15/2021','2/16/2021','2/17/2021','2/18/2021','2/19/2021','2/20/2021','2/21/2021','2/22/2021','2/23/2021','2/24/2021','2/25/2021','2/26/2021','2/27/2021','2/28/2021',
         '3/1/2021','3/2/2021','3/3/2021','3/4/2021','3/5/2021','3/6/2021','3/7/2021','3/8/2021','3/9/2021','3/10/2021','3/11/2021','3/12/2021','3/13/2021','3/14/2021','3/15/2021','3/16/2021','3/17/2021','3/18/2021','3/19/2021','3/20/2021','3/21/2021','3/22/2021','3/23/2021','3/24/2021','3/25/2021','3/26/2021','3/27/2021','3/28/2021','3/29/2021','3/30/2021','3/31/2021',
         '4/1/2021','4/2/2021','4/3/2021','4/4/2021','4/5/2021','4/6/2021','4/7/2021','4/8/2021','4/9/2021','4/10/2021','4/11/2021','4/12/2021','4/13/2021','4/14/2021','4/15/2021','4/16/2021','4/17/2021','4/18/2021','4/19/2021','4/20/2021','4/21/2021','4/22/2021','4/23/2021','4/24/2021','4/25/2021','4/26/2021','4/27/2021','4/28/2021','4/29/2021','4/30/2021',
         '5/1/2021','5/2/2021','5/3/2021','5/4/2021','5/5/2021','5/6/2021','5/7/2021','5/8/2021','5/9/2021','5/10/2021','5/11/2021','5/12/2021','5/13/2021','5/14/2021','5/15/2021','5/16/2021','5/17/2021','5/18/2021','5/19/2021','5/20/2021','5/21/2021','5/22/2021','5/23/2021','5/24/2021','5/25/2021','5/26/2021','5/27/2021','5/28/2021','5/29/2021','5/30/2021','5/31/2021',
         '6/1/2021','6/2/2021','6/3/2021','6/4/2021','6/5/2021','6/6/2021','6/7/2021','6/8/2021','6/9/2021','6/10/2021','6/11/2021','6/12/2021','6/13/2021','6/14/2021','6/15/2021','6/16/2021','6/17/2021','6/18/2021','6/19/2021','6/20/2021','6/21/2021','6/22/2021','6/23/2021','6/24/2021','6/25/2021','6/26/2021','6/27/2021','6/28/2021','6/29/2021','6/30/2021',
         '7/1/2021','7/2/2021','7/3/2021','7/4/2021','7/5/2021','7/6/2021','7/7/2021','7/8/2021','7/9/2021','7/10/2021','7/11/2021','7/12/2021','7/13/2021','7/14/2021','7/15/2021','7/16/2021','7/17/2021','7/18/2021','7/19/2021','7/20/2021','7/21/2021','7/22/2021','7/23/2021','7/24/2021','7/25/2021','7/26/2021','7/27/2021','7/28/2021','7/29/2021','7/30/2021','7/31/2021',
         '8/1/2021','8/2/2021','8/3/2021','8/4/2021','8/5/2021','8/6/2021','8/7/2021','8/8/2021','8/9/2021','8/10/2021','8/11/2021','8/12/2021','8/13/2021','8/14/2021','8/15/2021','8/16/2021','8/17/2021','8/18/2021','8/19/2021','8/20/2021','8/21/2021','8/22/2021','8/23/2021','8/24/2021','8/25/2021','8/26/2021','8/27/2021','8/28/2021','8/29/2021','8/30/2021','8/31/2021',
         '9/1/2021','9/2/2021','9/3/2021','9/4/2021','9/5/2021','9/6/2021','9/7/2021','9/8/2021','9/9/2021','9/10/2021','9/11/2021','9/12/2021','9/13/2021','9/14/2021','9/15/2021','9/16/2021','9/17/2021','9/18/2021','9/19/2021','9/20/2021','9/21/2021','9/22/2021','9/23/2021','9/24/2021','9/25/2021','9/26/2021','9/27/2021','9/28/2021','9/29/2021','9/30/2021',
         '10/1/2021','10/2/2021','10/3/2021','10/4/2021','10/5/2021','10/6/2021','10/7/2021','10/8/2021','10/9/2021','10/10/2021','10/11/2021','10/12/2021','10/13/2021','10/14/2021','10/15/2021','10/16/2021','10/17/2021','10/18/2021','10/19/2021','10/20/2021','10/21/2021','10/22/2021','10/23/2021','10/24/2021','10/25/2021','10/26/2021','10/27/2021','10/28/2021','10/29/2021','10/30/2021','10/31/2021',
         '11/1/2021','11/2/2021','11/3/2021','11/4/2021','11/5/2021','11/6/2021','11/7/2021','11/8/2021','11/9/2021','11/10/2021','11/11/2021','11/12/2021','11/13/2021','11/14/2021','11/15/2021','11/16/2021','11/17/2021','11/18/2021','11/19/2021','11/20/2021','11/21/2021','11/22/2021','11/23/2021','11/24/2021','11/25/2021','11/26/2021','11/27/2021','11/28/2021','11/29/2021','11/30/2021','12/1/2021',
         '12/2/2021','12/3/2021','12/4/2021','12/5/2021','12/6/2021','12/7/2021','12/8/2021','12/9/2021','12/10/2021','12/11/2021','12/12/2021','12/13/2021','12/14/2021','12/15/2021','12/16/2021','12/17/2021','12/18/2021','12/19/2021','12/20/2021','12/21/2021','12/22/2021','12/23/2021','12/24/2021','12/25/2021','12/26/2021','12/27/2021','12/28/2021','12/29/2021','12/30/2021','12/31/2021'
             ];
   
             var index21 = [twentyone[0], twentyone[1], twentyone[2], twentyone[3], twentyone[4], twentyone[5], twentyone[6], twentyone[7], twentyone[8], twentyone[9], twentyone[10], twentyone[11], twentyone[12], twentyone[13], twentyone[14], twentyone[15], twentyone[16], twentyone[17], twentyone[18], twentyone[19], twentyone[20], twentyone[21], twentyone[22], twentyone[23], twentyone[24], twentyone[25], twentyone[26], twentyone[27], twentyone[28], twentyone[29], twentyone[30],
   twentyone[31], twentyone[32], twentyone[33], twentyone[34], twentyone[35], twentyone[36], twentyone[37], twentyone[38], twentyone[39], twentyone[40], twentyone[41], twentyone[42], twentyone[43], twentyone[44], twentyone[45], twentyone[46], twentyone[47], twentyone[48], twentyone[49], twentyone[50], twentyone[51], twentyone[52], twentyone[53], twentyone[54], twentyone[55], twentyone[56], twentyone[57], twentyone[58], twentyone[59], twentyone[60], twentyone[61],
   twentyone[62], twentyone[63], twentyone[64], twentyone[65], twentyone[66], twentyone[67], twentyone[68], twentyone[69], twentyone[70], twentyone[71], twentyone[72], twentyone[73], twentyone[74], twentyone[75], twentyone[76], twentyone[77], twentyone[78], twentyone[79], twentyone[80], twentyone[81], twentyone[82], twentyone[83], twentyone[84], twentyone[85], twentyone[86], twentyone[87], twentyone[88], twentyone[89], twentyone[90], twentyone[91], twentyone[92],
   twentyone[93], twentyone[94], twentyone[95], twentyone[96], twentyone[97], twentyone[98], twentyone[99], twentyone[100], twentyone[101], twentyone[102], twentyone[103], twentyone[104], twentyone[105], twentyone[106], twentyone[107], twentyone[108], twentyone[109], twentyone[110], twentyone[111], twentyone[112], twentyone[113], twentyone[114], twentyone[115], twentyone[116], twentyone[117], twentyone[118], twentyone[119], twentyone[120], twentyone[121], twentyone[122], twentyone[123],
   twentyone[124], twentyone[125], twentyone[126], twentyone[127], twentyone[128], twentyone[129], twentyone[130], twentyone[131], twentyone[132], twentyone[133], twentyone[134], twentyone[135], twentyone[136], twentyone[137], twentyone[138], twentyone[139], twentyone[140], twentyone[141], twentyone[142], twentyone[143], twentyone[144], twentyone[145], twentyone[146], twentyone[147], twentyone[148], twentyone[149], twentyone[150], twentyone[151], twentyone[152], twentyone[153], twentyone[154], 
   twentyone[155], twentyone[156], twentyone[157], twentyone[158], twentyone[159], twentyone[160], twentyone[161], twentyone[162], twentyone[163], twentyone[164], twentyone[165], twentyone[166], twentyone[167], twentyone[168], twentyone[169], twentyone[170], twentyone[171], twentyone[172], twentyone[173], twentyone[174], twentyone[175], twentyone[176], twentyone[177], twentyone[178], twentyone[179], twentyone[180], twentyone[181], twentyone[182], twentyone[183], twentyone[184], twentyone[185],
   twentyone[186], twentyone[187], twentyone[188], twentyone[189], twentyone[190], twentyone[191], twentyone[192], twentyone[193], twentyone[194], twentyone[195], twentyone[196], twentyone[197], twentyone[198], twentyone[199], twentyone[200], twentyone[201], twentyone[202], twentyone[203], twentyone[204], twentyone[205], twentyone[206], twentyone[207], twentyone[208], twentyone[209], twentyone[210], twentyone[211], twentyone[212], twentyone[213], twentyone[214], twentyone[215], twentyone[216],
   twentyone[217], twentyone[218], twentyone[219], twentyone[220], twentyone[221], twentyone[222], twentyone[223], twentyone[224], twentyone[225], twentyone[226], twentyone[227], twentyone[228], twentyone[229], twentyone[230], twentyone[231], twentyone[232], twentyone[233], twentyone[234], twentyone[235], twentyone[236], twentyone[237], twentyone[238], twentyone[239], twentyone[240], twentyone[241], twentyone[242], twentyone[243], twentyone[244], twentyone[245], twentyone[246], twentyone[247],
   twentyone[248], twentyone[249], twentyone[250], twentyone[251], twentyone[252], twentyone[253], twentyone[254], twentyone[255], twentyone[256], twentyone[257], twentyone[258], twentyone[259], twentyone[260], twentyone[261], twentyone[262], twentyone[263], twentyone[264], twentyone[265], twentyone[267], twentyone[268], twentyone[269], twentyone[270], twentyone[271], twentyone[272], twentyone[273], twentyone[274], twentyone[275], twentyone[276], twentyone[277], twentyone[278], twentyone[279],
   twentyone[280], twentyone[281], twentyone[282], twentyone[283], twentyone[284], twentyone[285], twentyone[286], twentyone[287], twentyone[288], twentyone[289], twentyone[290], twentyone[291], twentyone[292], twentyone[293], twentyone[294], twentyone[295], twentyone[296], twentyone[297], twentyone[298], twentyone[299], twentyone[300], twentyone[301], twentyone[302], twentyone[303], twentyone[304], twentyone[305], twentyone[306], twentyone[307], twentyone[308], twentyone[309], twentyone[310],
   twentyone[311], twentyone[312], twentyone[313], twentyone[314], twentyone[315], twentyone[316], twentyone[317], twentyone[318], twentyone[319], twentyone[320], twentyone[321], twentyone[322], twentyone[323], twentyone[324], twentyone[325], twentyone[326], twentyone[327], twentyone[328], twentyone[329], twentyone[330], twentyone[331], twentyone[332], twentyone[333], twentyone[334], twentyone[335], twentyone[336], twentyone[337], twentyone[338], twentyone[339], twentyone[340], twentyone[341],
   twentyone[342], twentyone[343], twentyone[344], twentyone[345], twentyone[346], twentyone[347], twentyone[348], twentyone[349], twentyone[350], twentyone[351], twentyone[352], twentyone[353], twentyone[354], twentyone[355], twentyone[356], twentyone[357], twentyone[358], twentyone[359], twentyone[360], twentyone[361], twentyone[362], twentyone[363], twentyone[364]];
   console.log(index21);
   
   
       
       
   
   
       //dateArray.slice(setDate, ...dateArray(setDate[91])); console.log(dateArray);
   
   
       for (let i = 0; i<data.length; i++){
         if (data[i].county === `${county4}` && data[i].townstate === `${town}` && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
           sales.push(data[i]);
           console.log(sales);
           if (data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             yearCurrent.push(data[i]);
             console.log(yearCurrent);
           }
   
           let yearCurrentlength = yearCurrent.length;
           console.log(yearCurrentlength);
           document.getElementById('yearCurrent').innerHTML = `2022 [${yearCurrentlength}]`;
   
           if (data[i].year === 2021 && data[i].townstate === `${town}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             yearPrevious.push(data[i]);
             console.log(yearPrevious);
           }
   
           let yearPreviouslength = yearPrevious.length;
           console.log(yearPreviouslength);
           document.getElementById('yearPrevious').innerHTML = `[${yearPreviouslength}] total '21`;
   
           if (data[i].year === 2021 && data[i].townstate === `${town}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && ( data[i].saledate === '1/1/2021' || data[i].saledate === '1/2/2021' || data[i].saledate === '1/3/2021' || data[i].saledate === '1/4/2021' || data[i].saledate === '1/5/2021' || data[i].saledate === '1/6/2021' || data[i].saledate === '1/7/2021' || data[i].saledate === '1/8/2021' || data[i].saledate === '1/9/2021' || data[i].saledate === '1/10/2021' || data[i].saledate === '1/11/2021' || data[i].saledate === '1/12/2021' || data[i].saledate === '1/13/2021' || data[i].saledate === '1/14/2021' || data[i].saledate === '1/15/2021' || data[i].saledate === '1/16/2021' || data[i].saledate === '1/17/2021' || data[i].saledate === '1/18/2021' || data[i].saledate === '1/19/2021' || data[i].saledate === '1/20/2021' || data[i].saledate === '1/21/ || data[i].saledate === 021' || data[i].saledate === '1/22/2021' || data[i].saledate === '1/23/2021' || data[i].saledate === '1/24/2021' || data[i].saledate === '1/25/2021' || data[i].saledate === '1/26/2021' || data[i].saledate === '1/27/2021' || data[i].saledate === '1/28/2021' || data[i].saledate === '1/29/2021' || data[i].saledate === '1/30/2021' || data[i].saledate === '1/31/2021' || 
           data[i].saledate === '2/1/2021' || data[i].saledate === '2/2/2021' || data[i].saledate === '2/3/2021' || data[i].saledate === '2/4/2021' || data[i].saledate === '2/5/2021' || data[i].saledate === '2/6/2021' || data[i].saledate === '2/7/2021' || data[i].saledate === '2/8/2021' || data[i].saledate === '2/9/2021' || data[i].saledate === '2/10/2021' || data[i].saledate === '2/11/2021' || data[i].saledate === '2/12/2021' || data[i].saledate === '2/13/2021' || data[i].saledate === '2/14/2021' || data[i].saledate === '2/15/2021' || data[i].saledate === '2/16/2021' || data[i].saledate === '2/17/2021' || data[i].saledate === '2/18/2021' || data[i].saledate === '2/19/2021' || data[i].saledate === '2/20/2021' || data[i].saledate === '2/21/ || data[i].saledate === 021' || data[i].saledate === '2/22/2021' || data[i].saledate === '2/23/2021' || data[i].saledate === '2/24/2021' || data[i].saledate === '2/25/2021' || data[i].saledate === '2/26/2021' || data[i].saledate === '2/27/2021' || data[i].saledate === '2/28/2021' || 
           data[i].saledate === '3/1/2021' || data[i].saledate === '3/2/2021' || data[i].saledate === '3/3/2021' || data[i].saledate === '3/4/2021' || data[i].saledate === '3/5/2021' || data[i].saledate === '3/6/2021' || data[i].saledate === '3/7/2021' || data[i].saledate === '3/8/2021' || data[i].saledate === '3/9/2021' || data[i].saledate === '3/10/2021' || data[i].saledate === '3/11/2021' || data[i].saledate === '3/12/2021' || data[i].saledate === '3/13/2021' || data[i].saledate === '3/14/2021' || data[i].saledate === '3/15/2021' || data[i].saledate === '3/16/2021' || data[i].saledate === '3/17/2021' || data[i].saledate === '3/18/2021' || data[i].saledate === '3/19/2021' || data[i].saledate === '3/20/2021' || data[i].saledate === '3/21/ || data[i].saledate === 021' || data[i].saledate === '3/22/2021' || data[i].saledate === '3/23/2021' || data[i].saledate === '3/24/2021' || data[i].saledate === '3/25/2021' || data[i].saledate === '3/26/2021' || data[i].saledate === '3/27/2021' || data[i].saledate === '3/28/2021' || data[i].saledate === '3/29/2021' || data[i].saledate === '3/30/2021' || data[i].saledate === '3/31/2021' ||
           data[i].saledate === '4/1/2021' || data[i].saledate === '4/2/2021' || data[i].saledate === '4/3/2021' || data[i].saledate === '4/4/2021' || data[i].saledate === '4/5/2021' || data[i].saledate === '4/6/2021' || data[i].saledate === '4/7/2021' || data[i].saledate === '4/8/2021' || data[i].saledate === '4/9/2021' || data[i].saledate === '4/10/2021' || data[i].saledate === '4/11/2021' || data[i].saledate === '4/12/2021' || data[i].saledate === '4/13/2021' || data[i].saledate === '4/14/2021' || data[i].saledate === '4/15/2021' || data[i].saledate === '4/16/2021' || data[i].saledate === '4/17/2021' || data[i].saledate === '4/18/2021' || data[i].saledate === '4/19/2021' || data[i].saledate === '4/20/2021' || data[i].saledate === '4/21/ || data[i].saledate === 021' || data[i].saledate === '4/22/2021' || data[i].saledate === '4/23/2021' || data[i].saledate === '4/24/2021' || data[i].saledate === '4/25/2021' || data[i].saledate === '4/26/2021' || data[i].saledate === '4/27/2021' || data[i].saledate === '4/28/2021' || data[i].saledate === '4/29/2021' || data[i].saledate === '4/30/2021' || 
           data[i].saledate === '5/1/2021' || data[i].saledate === '5/2/2021' || data[i].saledate === '5/3/2021' || data[i].saledate === '5/4/2021' || data[i].saledate === '5/5/2021' || data[i].saledate === '5/6/2021' || data[i].saledate === '5/7/2021' || data[i].saledate === '5/8/2021' || data[i].saledate === '5/9/2021' || data[i].saledate === '5/10/2021' || data[i].saledate === '5/11/2021' || data[i].saledate === '5/12/2021' || data[i].saledate === '5/13/2021' || data[i].saledate === '5/14/2021' || data[i].saledate === '5/15/2021' || data[i].saledate === '5/16/2021' || data[i].saledate === '5/17/2021' || data[i].saledate === '5/18/2021' || data[i].saledate === '5/19/2021' || data[i].saledate === '5/20/2021' || data[i].saledate === '5/21/ || data[i].saledate === 021' || data[i].saledate === '5/22/2021' || data[i].saledate === '5/23/2021' || data[i].saledate === '5/24/2021' || data[i].saledate === '5/25/2021' || data[i].saledate === '5/26/2021' || data[i].saledate === '5/27/2021' || data[i].saledate === '5/28/2021' || data[i].saledate === '5/29/2021' || data[i].saledate === '5/30/2021' || data[i].saledate === '5/31/2021')){
             yearcall2021.push(data[i]);
             console.log(yearcall2021);
           }
   
   
           let yearCallength = yearcall2021.length;
           console.log(yearCallength);
           document.getElementById('yearCall').innerHTML = `2021 [${yearCallength}]`;
   
          
   
          // let decimal = percent;
          let perc = (Math.min(yearCallength, yearCurrentlength)) / (Math.max(yearCallength, yearCurrentlength));
          console.log(perc);  //correct 0.65...
   
          let updown = 1 - perc;
          console.log(updown);
         
          document.getElementById('updownperc').innerHTML = Math.round((updown * 100)) + `% inventory increase/decrease`;
   
          
          let percentpie = yearPreviouslength * updown;
          console.log(percentpie);
   
   
         
           let increase = Math.round(yearPreviouslength + percentpie);
           console.log(increase);
   
           let decrease = Math.round(yearPreviouslength - percentpie);
           console.log(decrease);
   
    



           var number = 0;
           number += (yearCurrentlength > yearCallength) ? (1 * (increase)) : (1 * (decrease));
           console.log(number);
          
           document.getElementById('totalyearANT').innerHTML = `${number} anticipated`;
          
           let groundround = Math.round((number / 12));


           document.getElementById('salespermonthavg').innerHTML = `${groundround} Sales per Month AVG`;
   
   
   
           if (data[i].year === 2021 && data[i].townstate === `${town}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && (data[i].saledate === '6/1/2021' || data[i].saledate ==='6/2/2021' || data[i].saledate ==='6/3/2021' || data[i].saledate ==='6/4/2021' || data[i].saledate ==='6/5/2021' || data[i].saledate ==='6/6/2021' || data[i].saledate ==='6/7/2021' || data[i].saledate ==='6/8/2021' || data[i].saledate ==='6/9/2021' || data[i].saledate ==='6/10/2021' || data[i].saledate ==='6/11/2021' || data[i].saledate ==='6/12/2021' || data[i].saledate ==='6/13/2021' || data[i].saledate ==='6/14/2021' || data[i].saledate ==='6/15/2021' || data[i].saledate ==='6/16/2021' || data[i].saledate ==='6/17/2021' || data[i].saledate ==='6/18/2021' || data[i].saledate ==='6/19/2021' || data[i].saledate ==='6/20/2021' || data[i].saledate ==='6/21/2021' || data[i].saledate ==='6/22/2021' || data[i].saledate ==='6/23/2021' || data[i].saledate ==='6/24/2021' || data[i].saledate ==='6/25/2021' || data[i].saledate ==='6/26/2021' || data[i].saledate ==='6/27/2021' || data[i].saledate ==='6/28/2021' || data[i].saledate ==='6/29/2021' || data[i].saledate ==='6/30/2021')){
             month1.push(data[i]);
             console.log(month1);
            }
            if (data[i].year === 2021 && data[i].townstate === `${town}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && (data[i].saledate === '7/1/2021' || data[i].saledate ==='7/2/2021' || data[i].saledate ==='7/3/2021' || data[i].saledate ==='7/4/2021' || data[i].saledate ==='7/5/2021' || data[i].saledate ==='7/7/2021' || data[i].saledate ==='7/7/2021' || data[i].saledate ==='7/8/2021' || data[i].saledate ==='7/9/2021' || data[i].saledate ==='7/10/2021' || data[i].saledate ==='7/11/2021' || data[i].saledate ==='7/12/2021' || data[i].saledate ==='7/13/2021' || data[i].saledate ==='7/14/2021' || data[i].saledate ==='7/15/2021' || data[i].saledate ==='7/17/2021' || data[i].saledate ==='7/17/2021' || data[i].saledate ==='7/18/2021' || data[i].saledate ==='7/19/2021' || data[i].saledate ==='7/20/2021' || data[i].saledate ==='7/21/2021' || data[i].saledate ==='7/22/2021' || data[i].saledate ==='7/23/2021' || data[i].saledate ==='7/24/2021' || data[i].saledate ==='7/25/2021' || data[i].saledate ==='7/27/2021' || data[i].saledate ==='7/27/2021' || data[i].saledate ==='7/28/2021' || data[i].saledate ==='7/29/2021' || data[i].saledate ==='7/30/2021')){
             month2.push(data[i]);
             console.log(month2);
            }
            if (data[i].year === 2021 && data[i].townstate === `${town}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && (data[i].saledate === '8/1/2021' || data[i].saledate ==='8/2/2021' || data[i].saledate ==='8/3/2021' || data[i].saledate ==='8/4/2021' || data[i].saledate ==='8/5/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/9/2021' || data[i].saledate ==='8/10/2021' || data[i].saledate ==='8/11/2021' || data[i].saledate ==='8/12/2021' || data[i].saledate ==='8/13/2021' || data[i].saledate ==='8/14/2021' || data[i].saledate ==='8/15/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/19/2021' || data[i].saledate ==='8/20/2021' || data[i].saledate ==='8/21/2021' || data[i].saledate ==='8/22/2021' || data[i].saledate ==='8/23/2021' || data[i].saledate ==='8/24/2021' || data[i].saledate ==='8/25/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/29/2021' || data[i].saledate ==='8/30/2021')){
             month3.push(data[i]);
             console.log(month3);
           }
           if (data[i].year === 2021 && data[i].townstate === `${town}` && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && (data[i].saledate === '9/1/2021' || data[i].saledate ==='9/2/2021' || data[i].saledate ==='9/3/2021' || data[i].saledate ==='9/4/2021' || data[i].saledate ==='9/5/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/10/2021' || data[i].saledate ==='9/11/2021' || data[i].saledate ==='9/12/2021' || data[i].saledate ==='9/13/2021' || data[i].saledate ==='9/14/2021' || data[i].saledate ==='9/15/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/20/2021' || data[i].saledate ==='9/21/2021' || data[i].saledate ==='9/22/2021' || data[i].saledate ==='9/23/2021' || data[i].saledate ==='9/24/2021' || data[i].saledate ==='9/25/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/30/2021')){
             month4.push(data[i]);
             console.log(month4);
           }
     
   
   
         
          let month1length = month1.length;
          console.log(month1length);
          document.getElementById('month1').innerHTML = `${month1length}sld`;
   
         
   
          let month2length = month2.length;
          console.log(month2length);
          document.getElementById('month2').innerHTML = `${month2length}sld`;
   
         
   
         let month3length = month3.length;
          console.log(month3length);
          document.getElementById('month3').innerHTML = `${month3length}sld`;
   
   
        
   
         let month4length = month4.length;
         console.log(month4length);
         document.getElementById('month4').innerHTML = `${month4length}sld`;
   
   
         let month1ratio = month1length / yearPreviouslength;
   
         let currentmonth1 =  Math.round((number * month1ratio));
         document.getElementById('currentmonth1').innerHTML = `*${currentmonth1} ant`;
   
         let month2ratio = month2length / yearPreviouslength;
   
         let currentmonth2 =  Math.round(number * month2ratio);
         document.getElementById('currentmonth2').innerHTML = `*${currentmonth2} ant`;
   
         let month3ratio = month3length / yearPreviouslength;
   
         let currentmonth3 =  Math.round((number * month3ratio));
         document.getElementById('currentmonth3').innerHTML = `*${currentmonth3} ant`;
   
         let month4ratio = month4length / yearPreviouslength;
   
         let currentmonth4 =  Math.round((number * month4ratio));
         document.getElementById('currentmonth4').innerHTML = `*${currentmonth4} ant`;
   
   
   
   
   
   
   
   
   
   
   
   
   
           
          
           
           
           
          // let decimal = yearCallength / yearCurrentlength;
          // console.log(decimal);
           
          
   
   
   
   
         }
       }
     }
   
     
    
   
     
     async function loadPage(e){ //this functions onClick...
       const req = await fetch('http://localhost:/businessplan1.html/')
       const data = await req.text();
       //if (data.status ==='ok'){
         //console.log(data)
          // all 15k objects...
          const element = document.getElementById('contenttest');
          element.innerHTML = data;
     }

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
   
   const [pricevalue3, setPricevalue3] = React.useState(0);
   const [pricevalue4, setPricevalue4] = React.useState(0);


   const [plandate, setPlandate] = React.useState(); 
   //const [date, setDate] = React.useState('');
   
   
   const [sales22, setSales22] = React.useState();
   
   
   
   const [county2, setCounty2] = React.useState('');
   const [town3, setTown3] = React.useState('');
   const [selectedState5, setSelectedState5] = React.useState(''); // MA

   const availableState5 = GLOBE1.states.find((s) => s.name === county2); // that is what this says...
   const availableTowns5 = availableState5?.counties?.find( //
    (c) => c.name === selectedState5 //
    ); //
   
   
   
   
   
  // function dateIndex(e){
   
  // for (let i = 0; i < index22.length; i++){
   
   
  // console.log(document.getElementById('valueplan').value);
  // if (document.getElementById('valueplan').value === index22[i]){
  // console.log(index22.indexOf(index22[i]));
  // openarray.push(index22.splice(index22.indexOf(index22[i]), 120));
  // return openarray;
  // console.log(openarray);
  // }
   
   
  // }
  // }
  // console.log(dateIndex);
const [openarray, setOpenarray] = React.useState([]);


   async function dateIndex(e){

    
   
    for (let i = 0; i < twentytwo.length; i++){
    
    
    console.log(document.getElementById('valueplan').value);
    if (document.getElementById('valueplan').value === twentytwo[i]){
    console.log(twentytwo.indexOf(twentytwo[i]));
    openarray.unshift(twentytwo.splice(twentytwo.indexOf(twentytwo[i]), 120));
    return openarray;
    console.log(openarray); 
    }
    
    
    }
    }
    console.log(openarray);


   


 


   const [belowdiffratesPlanAavg, setBelowdiffratesPlanAavg] = React.useState(0);
   const [belowdiffratesPlanBavg, setBelowdiffratesPlanBavg] = React.useState(0);
   const [belowdiffratesPlanCavg, setBelowdiffratesPlanCavg] = React.useState(0);
   const [belowdiffratesPlanDavg, setBelowdiffratesPlanDavg] = React.useState(0);
   const [belowdiffratesPlanEavg, setBelowdiffratesPlanEavg] = React.useState(0);

   const [planA22sales, setPlanA22sales] = React.useState(0);
   const [planB22sales, setPlanB22sales] = React.useState(0);
   const [planC22sales, setPlanC22sales] = React.useState(0);
   const [planD22sales, setPlanD22sales] = React.useState(0);
   const [planE22sales, setPlanE22sales] = React.useState(0);
   const [planF22sales, setPlanF22sales] = React.useState(0);

   const [planA22rates, setPlanA22rates] = React.useState(0);
   const [planB22rates, setPlanB22rates] = React.useState(0);
   const [planC22rates, setPlanC22rates] = React.useState(0);
   const [planD22rates, setPlanD22rates] = React.useState(0);
   const [planE22rates, setPlanE22rates] = React.useState(0);
   const [planF22rates, setPlanF22rates] = React.useState(0);

   const [planA22diff, setPlanA22diff] = React.useState(0);
   const [planB22diff, setPlanB22diff] = React.useState(0);
   const [planC22diff, setPlanC22diff] = React.useState(0);
   const [planD22diff, setPlanD22diff] = React.useState(0);
   const [planE22diff, setPlanE22diff] = React.useState(0);
   const [planF22diff, setPlanF22diff] = React.useState(0);

   const [planA22atabove, setPlanA22atabove] = React.useState(0);
   const [planB22atabove, setPlanB22atabove] = React.useState(0);
   const [planC22atabove, setPlanC22atabove] = React.useState(0);
   const [planD22atabove, setPlanD22atabove] = React.useState(0);
   const [planE22atabove, setPlanE22atabove] = React.useState(0);
   const [planF22atabove, setPlanF22atabove] = React.useState(0);

   const [planA22salelength, setPlanA22salelength] = React.useState(0);
   const [planB22salelength, setPlanB22salelength] = React.useState(0);
   const [planC22salelength, setPlanC22salelength] = React.useState(0);
   const [planD22salelength, setPlanD22salelength] = React.useState(0);
   const [planE22salelength, setPlanE22salelength] = React.useState(0);
   const [planF22salelength, setPlanF22salelength] = React.useState(0);

   
   
   
   
   const [subaruWRX, setSubaruWRX] = React.useState([]);

 ////pagination...


 const [currentPage36, setCurrentPage36] = React.useState(0);


 function handlePageClick36({ selected: selectedPage}){
   setCurrentPage36(selectedPage);
 }
 
 
 
 
 
 const offset36 = currentPage36 * PER_PAGE;
 
 const currentPageData36 = subaruWRX
 .slice(offset36, offset36 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount36 = Math.ceil(subaruWRX.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 








   const [subaruWRX2, setSubaruWRX2] = React.useState([]);
////pagination...


const [currentPage42, setCurrentPage42] = React.useState(0);


function handlePageClick42({ selected: selectedPage}){
  setCurrentPage42(selectedPage);
}





const offset42 = currentPage42 * PER_PAGE;

const currentPageData42 = subaruWRX2
.slice(offset42, offset42 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount42 = Math.ceil(subaruWRX2.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////\

   const [subaruWRX3, setSubaruWRX3] = React.useState([]);
////pagination...


const [currentPage48, setCurrentPage48] = React.useState(0);


function handlePageClick48({ selected: selectedPage}){
  setCurrentPage48(selectedPage);
}





const offset48 = currentPage48 * PER_PAGE;

const currentPageData48 = subaruWRX3
.slice(offset48, offset48 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount48 = Math.ceil(subaruWRX3.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [subaruWRX4, setSubaruWRX4] = React.useState([]);
////pagination...


const [currentPage54, setCurrentPage54] = React.useState(0);


function handlePageClick54({ selected: selectedPage}){
  setCurrentPage54(selectedPage);
}





const offset54 = currentPage54 * PER_PAGE;

const currentPageData54 = subaruWRX4
.slice(offset54, offset54 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount54 = Math.ceil(subaruWRX4.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [subaruWRX5, setSubaruWRX5] = React.useState([]);
////pagination...


const [currentPage60, setCurrentPage60] = React.useState(0);


function handlePageClick60({ selected: selectedPage}){
  setCurrentPage60(selectedPage);
}





const offset60 = currentPage60 * PER_PAGE;

const currentPageData60 = subaruWRX5
.slice(offset60, offset60 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount60 = Math.ceil(subaruWRX5.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////




   const [planAatabovegreat, setPlanAatabovegreat] = React.useState([]);

   ////pagination...


 const [currentPage37, setCurrentPage37] = React.useState(0);


 function handlePageClick37({ selected: selectedPage}){
   setCurrentPage37(selectedPage);
 }
 
 
 
 
 
 const offset37 = currentPage37 * PER_PAGE;
 
 const currentPageData37 = planAatabovegreat
 .slice(offset37, offset37 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount37= Math.ceil(planAatabovegreat.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


   const [planBatabovegreat, setPlanBatabovegreat] = React.useState([]);
////pagination...


const [currentPage43, setCurrentPage43] = React.useState(0);


function handlePageClick43({ selected: selectedPage}){
  setCurrentPage43(selectedPage);
}





const offset43 = currentPage43 * PER_PAGE;

const currentPageData43 = planBatabovegreat
.slice(offset43, offset43 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount43 = Math.ceil(planBatabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [planCatabovegreat, setPlanCatabovegreat] = React.useState([]);
  ////pagination...


const [currentPage49, setCurrentPage49] = React.useState(0);


function handlePageClick49({ selected: selectedPage}){
  setCurrentPage49(selectedPage);
}





const offset49 = currentPage49 * PER_PAGE;

const currentPageData49 = planCatabovegreat
.slice(offset49, offset49 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount49 = Math.ceil(planCatabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [planDatabovegreat, setPlanDatabovegreat] = React.useState([]);
////pagination...


const [currentPage55, setCurrentPage55] = React.useState(0);


function handlePageClick55({ selected: selectedPage}){
  setCurrentPage55(selectedPage);
}





const offset55 = currentPage55 * PER_PAGE;

const currentPageData55 = planDatabovegreat
.slice(offset55, offset55 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount55 = Math.ceil(planDatabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [planEatabovegreat, setPlanEatabovegreat] = React.useState([]);


////pagination...


const [currentPage61, setCurrentPage61] = React.useState(0);


function handlePageClick61({ selected: selectedPage}){
  setCurrentPage61(selectedPage);
}





const offset61 = currentPage61 * PER_PAGE;

const currentPageData61 = planEatabovegreat
.slice(offset61, offset61 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount61 = Math.ceil(planEatabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////






 
   async function businessplanning(e){ 
     //e.preventDefault();
   
     dateIndex();
  
  
  
     
   
   
     const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
       const data = await req.json()
       console.log(data); ////////////// all console.logs to here... 
   
       let newArray = [...openarray];
      
       console.log(newArray);
       console.log(newArray[0][1]); // correct...
       console.log(newArray[0][13]);
       document.getElementById('date14').innerHTML = `${newArray[0][0]}` + ' - ' + `${newArray[0][13]}` + ' 0-14 days ';
       document.getElementById('date30').innerHTML = `${newArray[0][14]}` + ' - ' + `${newArray[0][29]}` + ' 15-30 days ';
       document.getElementById('date45').innerHTML = `${newArray[0][30]}` + ' - ' + `${newArray[0][44]}` + ' 31-45 days ';
       document.getElementById('date90').innerHTML = `${newArray[0][45]}` + ' - ' + `${newArray[0][89]}` + ' 46-90 days ';
       document.getElementById('date120').innerHTML = `${newArray[0][90]}` + ' - ' + `${newArray[0][119]}` + ' 91-120 days ';
       
   
     
   
       let planK = [];
       let planA = [];
       let planAatabove = [];
       let planB = [];
       let planBatabove = [];
       let planC = [];
       let planCatabove = [];
       let planD = [];
       let planDatabove = [];
       let planE = [];
       let planEatabove = [];
   
       for (let i = 0; i<data.length; i++){
         if (data[i].county === `${county2}` && data[i].townstate === `${town3}` && data[i].saleprice >= `${pricevalue3}` && data[i].saleprice < `${pricevalue4}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
           data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
           || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
           || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
           || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
           || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] )){
           planK.push(data[i]);
           console.log(planK); //1 object here...
           console.log(newArray[0][1]);
           
   
           let length = planK.length; // total sales all 90 days consecutive...
           console.log(length);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13])){
             planAatabove.push(data[i]);
             console.log(planAatabove);
             planAatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanAatabovegreat(planAatabove);
           }
   
           let planAatabovelength = planAatabove.length;
           console.log(planAatabovelength);
   
           if (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13]){
             planA.push(data[i]);
             console.log(planA);
             planA.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX(planA);
           }
   
           if (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
             planB.push(data[i]);
             console.log(planB);
             planB.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX2(planB);
           }
           if (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ){
             planC.push(data[i]);
             console.log(planC);
             planC.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX3(planC);
           }
           if (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
             || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
             || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
             planD.push(data[i]);
             console.log(planD);
             planD.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX4(planD);
           }
           if (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
             || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
             planE.push(data[i]);
             console.log(planE);
             planE.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX5(planE);
           }
   
           let planElength = planE.length;
           console.log(planE.length);
   
   
   
           let length2 = planB.length; // total sales all 90 days consecutive...
           console.log(length2);
   
           let planAlength = planA.length;
           console.log(planAlength);
   
           
   
           document.getElementById('planAsales').innerHTML = planAlength;

           setPlanA22sales(planAlength);
   
           let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100) || 0; 
   
           document.getElementById('planArate').innerHTML = `${ratePlanA}%`;

           setPlanA22rates(ratePlanA);
   
           let fractionPlanA = `${planAatabovelength} / ${planAlength}`;
           document.getElementById('fractionArate').innerHTML = fractionPlanA;

           setPlanA22atabove(planAatabovelength); 
           setPlanA22salelength(planAlength); 
   
   
          
            
            
            if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
             planBatabove.push(data[i]);
             console.log(planBatabove);
             setPlanBatabovegreat(planBatabove);  //gz
           }
   
           let planBatabovelength = planBatabove.length;
           console.log(planBatabovelength);
   
           let planBlength = planB.length;
           console.log(planBlength);
   
           document.getElementById('planBsales').innerHTML = planBlength;
           setPlanB22sales(planBlength);
   
           let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100) || 0; 
   
           document.getElementById('planBrate').innerHTML = `${ratePlanB}%`;

           setPlanB22rates(ratePlanB);
   
           let fractionPlanB = `${planBatabovelength} / ${planBlength}`;
           document.getElementById('fractionBrate').innerHTML = fractionPlanB;

           setPlanB22atabove(planBatabovelength); 
           setPlanB22salelength(planBlength); 
   
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] )){
             planCatabove.push(data[i]);
             console.log(planCatabove);  //gz
             setPlanCatabovegreat(planCatabove);
           }
   
           let planCatabovelength = planCatabove.length;
           console.log(planCatabovelength);
   
           let planClength = planC.length;
           console.log(planClength);
   
           document.getElementById('planCsales').innerHTML = planClength;
           setPlanC22sales(planClength);
   
           let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100) || 0; 
   
           document.getElementById('planCrate').innerHTML = `${ratePlanC}%`;
           setPlanC22rates(ratePlanC);
   
           let fractionPlanC = `${planCatabovelength} / ${planClength}`;
           document.getElementById('fractionCrate').innerHTML = fractionPlanC;

           setPlanC22atabove(planCatabovelength);
           setPlanC22salelength(planClength); 
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
             || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
             || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
             planDatabove.push(data[i]);
             console.log(planDatabove);  //gz
             setPlanDatabovegreat(planDatabove);
           }
   
           let planDatabovelength = planDatabove.length;
           console.log(planDatabovelength);
   
           let planDlength = planD.length;
           console.log(planDlength);
   
           document.getElementById('planDsales').innerHTML = planDlength;
           setPlanD22sales(planDlength);

   
           let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100) || 0; 
   
           document.getElementById('planDrate').innerHTML = `${ratePlanD}%`;
           setPlanD22rates(ratePlanD);
   
           let fractionPlanD = `${planDatabovelength} / ${planDlength}`;
           document.getElementById('fractionDrate').innerHTML = fractionPlanD;

           setPlanD22atabove(planDatabovelength);
           setPlanD22salelength(planDlength); 

   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
             || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
             planEatabove.push(data[i]);
             console.log(planEatabove);  
             setPlanEatabovegreat(planEatabove);
           }
   
           
   
           let planEatabovelength = planEatabove.length;
           console.log(planEatabovelength);
   
           document.getElementById('planEsales').innerHTML = planElength;
           setPlanE22sales(planElength);
   
           let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100) || 0; 

           
   
           document.getElementById('planErate').innerHTML = `${ratePlanE}%`; 
           setPlanE22rates(ratePlanE);
   
           let fractionPlanE = `${planEatabovelength} / ${planElength}`;
           document.getElementById('fractionErate').innerHTML = fractionPlanE;
           
           setPlanE22atabove(planEatabovelength);
           setPlanE22salelength(planElength); 
   
     
   
   
   
   ///////////////////////////////////////////////////
           let differential = 0;
    
           function add(item, counter, array){
                   differential+=(item.differential); //NaN
                  }

                  planA.forEach(add);

                  let differentialB = 0;
                  function add2(item, counter, array){
                    differentialB+=(item.differential);
                  }

                  planB.forEach(add2);

                  let differentialC = 0;
                  function add3(item, counter, array){
                    differentialC+=(item.differential);
                  }

                  planC.forEach(add3);

                  let differentialD = 0;
                  function add4(item, counter, array){
                    differentialD+=(item.differential);
                  }

                  planD.forEach(add4);

                  let differentialE = 0;
                  function add5(item, counter, array){
                    differentialE+=(item.differential);
                  }

                  planE.forEach(add5);

                  ///////////// title... //////////

                  let differentialbelowA = 0;
                  function add6(item, counter, array){
                    differentialbelowA+=(item.differential);
                  }

                  planAatabove.forEach(add6);

                  let differentialbelowB = 0;
                  function add7(item, counter, array){
                    differentialbelowB+=(item.differential);
                  }

                  planBatabove.forEach(add7);

                  let differentialbelowC = 0;
                  function add8(item, counter, array){
                    differentialbelowC+=(item.differential);
                  }

                  planCatabove.forEach(add8);

                  let differentialbelowD = 0;
                  function add9(item, counter, array){
                    differentialbelowD+=(item.differential);
                  }
                  planDatabove.forEach(add9);

                  let differentialbelowE = 0; 
                  function add10(item, counter, array){
                    differentialbelowE+=(item.differential);
                  }
                  planEatabove.forEach(add10);  
                  
                  const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                   })
                 
                
   
                  let planAavgdiff = formatter.format(Math.round(differential / planAlength) || 0);
                  let planBavgdiff = formatter.format(Math.round(differentialB / planBlength) || 0);
                  let planCavgdiff = formatter.format(Math.round(differentialC / planClength) || 0);
                  let planDavgdiff = formatter.format(Math.round(differentialD / planDlength) || 0);
                  let planEavgdiff = formatter.format(Math.round(differentialE / planElength) || 0);


                  let planAavgdiff1 = Math.round(differential / planAlength)  || 0;
                  let planBavgdiff2 = Math.round(differentialB / planBlength) || 0;
                  let planCavgdiff3 = Math.round(differentialC / planClength) || 0;
                  let planDavgdiff4 = Math.round(differentialD / planDlength) || 0;
                  let planEavgdiff5 = Math.round(differentialE / planElength) || 0;


                  setBelowdiffratesPlanAavg(formatter.format(Math.round(differentialbelowA / planAatabovelength)) || 0); //title
                  setBelowdiffratesPlanBavg(formatter.format(Math.round(differentialbelowB / planBatabovelength)) || 0); //title
                  setBelowdiffratesPlanCavg(formatter.format(Math.round(differentialbelowC / planCatabovelength)) || 0); //title
                  setBelowdiffratesPlanDavg(formatter.format(Math.round(differentialbelowD / planDatabovelength)) || 0); //title
                  setBelowdiffratesPlanEavg(formatter.format(Math.round(differentialbelowE / planEatabovelength)) || 0); //title
                  
                 
                 
                document.getElementById('planAdiff').innerHTML = planAavgdiff;

                setPlanA22diff(planAavgdiff1);
   
                document.getElementById('planBdiff').innerHTML = planBavgdiff;

                setPlanB22diff(planBavgdiff2);
   
                document.getElementById('planCdiff').innerHTML = planCavgdiff;

                setPlanC22diff(planCavgdiff3);
   
                document.getElementById('planDdiff').innerHTML = planDavgdiff;

                setPlanD22diff(planDavgdiff4);
   
                document.getElementById('planEdiff').innerHTML = planEavgdiff;

                setPlanE22diff(planEavgdiff5);
                 
   
   
                 }
                         
         
       }
     
   }
   
   
   //////////// 2021 business planning async....
   
   var twentyone = [
     '1/1/2021','1/2/2021','1/3/2021','1/4/2021','1/5/2021','1/6/2021','1/7/2021','1/8/2021','1/9/2021','1/10/2021','1/11/2021','1/12/2021','1/13/2021','1/14/2021','1/15/2021','1/16/2021','1/17/2021','1/18/2021','1/19/2021','1/20/2021','1/21/2021','1/22/2021','1/23/2021','1/24/2021','1/25/2021','1/26/2021','1/27/2021','1/28/2021','1/29/2021','1/30/2021','1/31/2021',
     '2/1/2021','2/2/2021','2/3/2021','2/4/2021','2/5/2021','2/6/2021','2/7/2021','2/8/2021','2/9/2021','2/10/2021','2/11/2021','2/12/2021','2/13/2021','2/14/2021','2/15/2021','2/16/2021','2/17/2021','2/18/2021','2/19/2021','2/20/2021','2/21/2021','2/22/2021','2/23/2021','2/24/2021','2/25/2021','2/26/2021','2/27/2021','2/28/2021',
     '3/1/2021','3/2/2021','3/3/2021','3/4/2021','3/5/2021','3/6/2021','3/7/2021','3/8/2021','3/9/2021','3/10/2021','3/11/2021','3/12/2021','3/13/2021','3/14/2021','3/15/2021','3/16/2021','3/17/2021','3/18/2021','3/19/2021','3/20/2021','3/21/2021','3/22/2021','3/23/2021','3/24/2021','3/25/2021','3/26/2021','3/27/2021','3/28/2021','3/29/2021','3/30/2021','3/31/2021',
     '4/1/2021','4/2/2021','4/3/2021','4/4/2021','4/5/2021','4/6/2021','4/7/2021','4/8/2021','4/9/2021','4/10/2021','4/11/2021','4/12/2021','4/13/2021','4/14/2021','4/15/2021','4/16/2021','4/17/2021','4/18/2021','4/19/2021','4/20/2021','4/21/2021','4/22/2021','4/23/2021','4/24/2021','4/25/2021','4/26/2021','4/27/2021','4/28/2021','4/29/2021','4/30/2021',
     '5/1/2021','5/2/2021','5/3/2021','5/4/2021','5/5/2021','5/6/2021','5/7/2021','5/8/2021','5/9/2021','5/10/2021','5/11/2021','5/12/2021','5/13/2021','5/14/2021','5/15/2021','5/16/2021','5/17/2021','5/18/2021','5/19/2021','5/20/2021','5/21/2021','5/22/2021','5/23/2021','5/24/2021','5/25/2021','5/26/2021','5/27/2021','5/28/2021','5/29/2021','5/30/2021','5/31/2021',
     '6/1/2021','6/2/2021','6/3/2021','6/4/2021','6/5/2021','6/6/2021','6/7/2021','6/8/2021','6/9/2021','6/10/2021','6/11/2021','6/12/2021','6/13/2021','6/14/2021','6/15/2021','6/16/2021','6/17/2021','6/18/2021','6/19/2021','6/20/2021','6/21/2021','6/22/2021','6/23/2021','6/24/2021','6/25/2021','6/26/2021','6/27/2021','6/28/2021','6/29/2021','6/30/2021',
     '7/1/2021','7/2/2021','7/3/2021','7/4/2021','7/5/2021','7/6/2021','7/7/2021','7/8/2021','7/9/2021','7/10/2021','7/11/2021','7/12/2021','7/13/2021','7/14/2021','7/15/2021','7/16/2021','7/17/2021','7/18/2021','7/19/2021','7/20/2021','7/21/2021','7/22/2021','7/23/2021','7/24/2021','7/25/2021','7/26/2021','7/27/2021','7/28/2021','7/29/2021','7/30/2021','7/31/2021',
     '8/1/2021','8/2/2021','8/3/2021','8/4/2021','8/5/2021','8/6/2021','8/7/2021','8/8/2021','8/9/2021','8/10/2021','8/11/2021','8/12/2021','8/13/2021','8/14/2021','8/15/2021','8/16/2021','8/17/2021','8/18/2021','8/19/2021','8/20/2021','8/21/2021','8/22/2021','8/23/2021','8/24/2021','8/25/2021','8/26/2021','8/27/2021','8/28/2021','8/29/2021','8/30/2021','8/31/2021',
     '9/1/2021','9/2/2021','9/3/2021','9/4/2021','9/5/2021','9/6/2021','9/7/2021','9/8/2021','9/9/2021','9/10/2021','9/11/2021','9/12/2021','9/13/2021','9/14/2021','9/15/2021','9/16/2021','9/17/2021','9/18/2021','9/19/2021','9/20/2021','9/21/2021','9/22/2021','9/23/2021','9/24/2021','9/25/2021','9/26/2021','9/27/2021','9/28/2021','9/29/2021','9/30/2021',
     '10/1/2021','10/2/2021','10/3/2021','10/4/2021','10/5/2021','10/6/2021','10/7/2021','10/8/2021','10/9/2021','10/10/2021','10/11/2021','10/12/2021','10/13/2021','10/14/2021','10/15/2021','10/16/2021','10/17/2021','10/18/2021','10/19/2021','10/20/2021','10/21/2021','10/22/2021','10/23/2021','10/24/2021','10/25/2021','10/26/2021','10/27/2021','10/28/2021','10/29/2021','10/30/2021','10/31/2021',
     '11/1/2021','11/2/2021','11/3/2021','11/4/2021','11/5/2021','11/6/2021','11/7/2021','11/8/2021','11/9/2021','11/10/2021','11/11/2021','11/12/2021','11/13/2021','11/14/2021','11/15/2021','11/16/2021','11/17/2021','11/18/2021','11/19/2021','11/20/2021','11/21/2021','11/22/2021','11/23/2021','11/24/2021','11/25/2021','11/26/2021','11/27/2021','11/28/2021','11/29/2021','11/30/2021','12/1/2021',
     '12/2/2021','12/3/2021','12/4/2021','12/5/2021','12/6/2021','12/7/2021','12/8/2021','12/9/2021','12/10/2021','12/11/2021','12/12/2021','12/13/2021','12/14/2021','12/15/2021','12/16/2021','12/17/2021','12/18/2021','12/19/2021','12/20/2021','12/21/2021','12/22/2021','12/23/2021','12/24/2021','12/25/2021','12/26/2021','12/27/2021','12/28/2021','12/29/2021','12/30/2021','12/31/2021'
         ];
   
         var index21 = [twentyone[0], twentyone[1], twentyone[2], twentyone[3], twentyone[4], twentyone[5], twentyone[6], twentyone[7], twentyone[8], twentyone[9], twentyone[10], twentyone[11], twentyone[12], twentyone[13], twentyone[14], twentyone[15], twentyone[16], twentyone[17], twentyone[18], twentyone[19], twentyone[20], twentyone[21], twentyone[22], twentyone[23], twentyone[24], twentyone[25], twentyone[26], twentyone[27], twentyone[28], twentyone[29], twentyone[30],
   twentyone[31], twentyone[32], twentyone[33], twentyone[34], twentyone[35], twentyone[36], twentyone[37], twentyone[38], twentyone[39], twentyone[40], twentyone[41], twentyone[42], twentyone[43], twentyone[44], twentyone[45], twentyone[46], twentyone[47], twentyone[48], twentyone[49], twentyone[50], twentyone[51], twentyone[52], twentyone[53], twentyone[54], twentyone[55], twentyone[56], twentyone[57], twentyone[58], twentyone[59], twentyone[60], twentyone[61],
   twentyone[62], twentyone[63], twentyone[64], twentyone[65], twentyone[66], twentyone[67], twentyone[68], twentyone[69], twentyone[70], twentyone[71], twentyone[72], twentyone[73], twentyone[74], twentyone[75], twentyone[76], twentyone[77], twentyone[78], twentyone[79], twentyone[80], twentyone[81], twentyone[82], twentyone[83], twentyone[84], twentyone[85], twentyone[86], twentyone[87], twentyone[88], twentyone[89], twentyone[90], twentyone[91], twentyone[92],
   twentyone[93], twentyone[94], twentyone[95], twentyone[96], twentyone[97], twentyone[98], twentyone[99], twentyone[100], twentyone[101], twentyone[102], twentyone[103], twentyone[104], twentyone[105], twentyone[106], twentyone[107], twentyone[108], twentyone[109], twentyone[110], twentyone[111], twentyone[112], twentyone[113], twentyone[114], twentyone[115], twentyone[116], twentyone[117], twentyone[118], twentyone[119], twentyone[120], twentyone[121], twentyone[122], twentyone[123],
   twentyone[124], twentyone[125], twentyone[126], twentyone[127], twentyone[128], twentyone[129], twentyone[130], twentyone[131], twentyone[132], twentyone[133], twentyone[134], twentyone[135], twentyone[136], twentyone[137], twentyone[138], twentyone[139], twentyone[140], twentyone[141], twentyone[142], twentyone[143], twentyone[144], twentyone[145], twentyone[146], twentyone[147], twentyone[148], twentyone[149], twentyone[150], twentyone[151], twentyone[152], twentyone[153], twentyone[154], 
   twentyone[155], twentyone[156], twentyone[157], twentyone[158], twentyone[159], twentyone[160], twentyone[161], twentyone[162], twentyone[163], twentyone[164], twentyone[165], twentyone[166], twentyone[167], twentyone[168], twentyone[169], twentyone[170], twentyone[171], twentyone[172], twentyone[173], twentyone[174], twentyone[175], twentyone[176], twentyone[177], twentyone[178], twentyone[179], twentyone[180], twentyone[181], twentyone[182], twentyone[183], twentyone[184], twentyone[185],
   twentyone[186], twentyone[187], twentyone[188], twentyone[189], twentyone[190], twentyone[191], twentyone[192], twentyone[193], twentyone[194], twentyone[195], twentyone[196], twentyone[197], twentyone[198], twentyone[199], twentyone[200], twentyone[201], twentyone[202], twentyone[203], twentyone[204], twentyone[205], twentyone[206], twentyone[207], twentyone[208], twentyone[209], twentyone[210], twentyone[211], twentyone[212], twentyone[213], twentyone[214], twentyone[215], twentyone[216],
   twentyone[217], twentyone[218], twentyone[219], twentyone[220], twentyone[221], twentyone[222], twentyone[223], twentyone[224], twentyone[225], twentyone[226], twentyone[227], twentyone[228], twentyone[229], twentyone[230], twentyone[231], twentyone[232], twentyone[233], twentyone[234], twentyone[235], twentyone[236], twentyone[237], twentyone[238], twentyone[239], twentyone[240], twentyone[241], twentyone[242], twentyone[243], twentyone[244], twentyone[245], twentyone[246], twentyone[247],
   twentyone[248], twentyone[249], twentyone[250], twentyone[251], twentyone[252], twentyone[253], twentyone[254], twentyone[255], twentyone[256], twentyone[257], twentyone[258], twentyone[259], twentyone[260], twentyone[261], twentyone[262], twentyone[263], twentyone[264], twentyone[265], twentyone[267], twentyone[268], twentyone[269], twentyone[270], twentyone[271], twentyone[272], twentyone[273], twentyone[274], twentyone[275], twentyone[276], twentyone[277], twentyone[278], twentyone[279],
   twentyone[280], twentyone[281], twentyone[282], twentyone[283], twentyone[284], twentyone[285], twentyone[286], twentyone[287], twentyone[288], twentyone[289], twentyone[290], twentyone[291], twentyone[292], twentyone[293], twentyone[294], twentyone[295], twentyone[296], twentyone[297], twentyone[298], twentyone[299], twentyone[300], twentyone[301], twentyone[302], twentyone[303], twentyone[304], twentyone[305], twentyone[306], twentyone[307], twentyone[308], twentyone[309], twentyone[310],
   twentyone[311], twentyone[312], twentyone[313], twentyone[314], twentyone[315], twentyone[316], twentyone[317], twentyone[318], twentyone[319], twentyone[320], twentyone[321], twentyone[322], twentyone[323], twentyone[324], twentyone[325], twentyone[326], twentyone[327], twentyone[328], twentyone[329], twentyone[330], twentyone[331], twentyone[332], twentyone[333], twentyone[334], twentyone[335], twentyone[336], twentyone[337], twentyone[338], twentyone[339], twentyone[340], twentyone[341],
   twentyone[342], twentyone[343], twentyone[344], twentyone[345], twentyone[346], twentyone[347], twentyone[348], twentyone[349], twentyone[350], twentyone[351], twentyone[352], twentyone[353], twentyone[354], twentyone[355], twentyone[356], twentyone[357], twentyone[358], twentyone[359], twentyone[360], twentyone[361], twentyone[362], twentyone[363], twentyone[364]];
   console.log(index21);
   
   
   
   //const [pricevalue3, setPricevalue3] = React.useState(0);
   //const [pricevalue4, setPricevalue4] = React.useState(0);
   //const [date, setDate] = React.useState('');
   //const [openarray, setOpenarray] = React.useState([]);
   //console.log(date11);


     
 
    
      
   
   const [openarray21, setOpenarray21] = React.useState([]);
  

   
   async function dateIndex21(e){ 
   
   for (let i = 0; i < index21.length; i++){
   
   
   console.log(document.getElementById('valueplan').value);
   if ((document.getElementById('valueplan').value).substring(0, 5) === index21[i].substring(0, 5)){
   console.log(index21.indexOf(index21[i]));
   openarray21.unshift(index21.splice(index21.indexOf(index21[i]), 120));
   return openarray21;
   console.log(openarray21); //
   }
   
   
   }
   }
   console.log(openarray21); // showing 2 arrays duplicate...

   const [belowdiffratesPlanA21avg, setBelowdiffratesPlanA21avg] = React.useState(0);
   const [belowdiffratesPlanB21avg, setBelowdiffratesPlanB21avg] = React.useState(0);
   const [belowdiffratesPlanC21avg, setBelowdiffratesPlanC21avg] = React.useState(0);
   const [belowdiffratesPlanD21avg, setBelowdiffratesPlanD21avg] = React.useState(0);
   const [belowdiffratesPlanE21avg, setBelowdiffratesPlanE21avg] = React.useState(0);
   

   const [planA21sales, setPlanA21sales] = React.useState(0);
   const [planB21sales, setPlanB21sales] = React.useState(0);
   const [planC21sales, setPlanC21sales] = React.useState(0);
   const [planD21sales, setPlanD21sales] = React.useState(0);
   const [planE21sales, setPlanE21sales] = React.useState(0);
   const [planF21sales, setPlanF21sales] = React.useState(0);

   const [planA21rates, setPlanA21rates] = React.useState(0);
   const [planB21rates, setPlanB21rates] = React.useState(0);
   const [planC21rates, setPlanC21rates] = React.useState(0);
   const [planD21rates, setPlanD21rates] = React.useState(0);
   const [planE21rates, setPlanE21rates] = React.useState(0);
   const [planF21rates, setPlanF21rates] = React.useState(0);

   const [planA21diff, setPlanA21diff] = React.useState(0);
   const [planB21diff, setPlanB21diff] = React.useState(0);
   const [planC21diff, setPlanC21diff] = React.useState(0);
   const [planD21diff, setPlanD21diff] = React.useState(0);
   const [planE21diff, setPlanE21diff] = React.useState(0);
   const [planF21diff, setPlanF21diff] = React.useState(0);

   const [planA21atabove, setPlanA21atabove] = React.useState(0);
   const [planB21atabove, setPlanB21atabove] = React.useState(0);
   const [planC21atabove, setPlanC21atabove] = React.useState(0);
   const [planD21atabove, setPlanD21atabove] = React.useState(0);
   const [planE21atabove, setPlanE21atabove] = React.useState(0);
   const [planF21atabove, setPlanF21atabove] = React.useState(0);

   const [planA21salelength, setPlanA21salelength] = React.useState(0);
   const [planB21salelength, setPlanB21salelength] = React.useState(0);
   const [planC21salelength, setPlanC21salelength] = React.useState(0);
   const [planD21salelength, setPlanD21salelength] = React.useState(0);
   const [planE21salelength, setPlanE21salelength] = React.useState(0);
   const [planF21salelength, setPlanF21salelength] = React.useState(0);



   const [subaruWRX211, setSubaruWRX211] = React.useState([]);
 ////pagination...


 const [currentPage38, setCurrentPage38] = React.useState(0);


 function handlePageClick38({ selected: selectedPage}){
   setCurrentPage38(selectedPage);
 }
 
 
 
 
 
 const offset38 = currentPage38 * PER_PAGE;
 
 const currentPageData38 = subaruWRX211
 .slice(offset38, offset38 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount38 = Math.ceil(subaruWRX211.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [subaruWRX212, setSubaruWRX212] = React.useState([]);

   ////pagination...


const [currentPage44, setCurrentPage44] = React.useState(0);


function handlePageClick44({ selected: selectedPage}){
  setCurrentPage44(selectedPage);
}





const offset44 = currentPage44 * PER_PAGE;

const currentPageData44 = subaruWRX212
.slice(offset44, offset44 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount44 = Math.ceil(subaruWRX212.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [subaruWRX213, setSubaruWRX213] = React.useState([]);
  ////pagination...


const [currentPage50, setCurrentPage50] = React.useState(0);


function handlePageClick50({ selected: selectedPage}){
  setCurrentPage50(selectedPage);
}





const offset50 = currentPage50 * PER_PAGE;

const currentPageData50 = subaruWRX213
.slice(offset50, offset50 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount50 = Math.ceil(subaruWRX213.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [subaruWRX214, setSubaruWRX214] = React.useState([]);
////pagination...


const [currentPage56, setCurrentPage56] = React.useState(0);


function handlePageClick56({ selected: selectedPage}){
  setCurrentPage56(selectedPage);
}





const offset56 = currentPage56 * PER_PAGE;

const currentPageData56 = subaruWRX214
.slice(offset56, offset56 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount56 = Math.ceil(subaruWRX214.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////



   const [subaruWRX215, setSubaruWRX215] = React.useState([]);

////pagination...


const [currentPage62, setCurrentPage62] = React.useState(0);


function handlePageClick62({ selected: selectedPage}){
  setCurrentPage62(selectedPage);
}





const offset62 = currentPage62 * PER_PAGE;

const currentPageData62 = subaruWRX215
.slice(offset62, offset62 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount62 = Math.ceil(subaruWRX215.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////






   const [planA21atabovegreat, setPlanA21atabovegreat] = React.useState([]);
////pagination...


const [currentPage39, setCurrentPage39] = React.useState(0);


function handlePageClick39({ selected: selectedPage}){
  setCurrentPage39(selectedPage);
}





const offset39 = currentPage39 * PER_PAGE;

const currentPageData39 = planA21atabovegreat
.slice(offset39, offset39 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount39 = Math.ceil(planA21atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////



   const [planB21atabovegreat, setPlanB21atabovegreat] = React.useState([]);
 ////pagination...


 const [currentPage45, setCurrentPage45] = React.useState(0);


 function handlePageClick45({ selected: selectedPage}){
   setCurrentPage45(selectedPage);
 }
 
 
 
 
 
 const offset45 = currentPage45 * PER_PAGE;
 
 const currentPageData45 = planB21atabovegreat
 .slice(offset45, offset45 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount45 = Math.ceil(planB21atabovegreat.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [planC21atabovegreat, setPlanC21atabovegreat] = React.useState([]);

   ////pagination...


const [currentPage51, setCurrentPage51] = React.useState(0);


function handlePageClick51({ selected: selectedPage}){
  setCurrentPage51(selectedPage);
}





const offset51 = currentPage51 * PER_PAGE;

const currentPageData51 = planC21atabovegreat
.slice(offset51, offset51 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount51 = Math.ceil(planC21atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [planD21atabovegreat, setPlanD21atabovegreat] = React.useState([]);
////pagination...


const [currentPage57, setCurrentPage57] = React.useState(0);


function handlePageClick57({ selected: selectedPage}){
  setCurrentPage57(selectedPage);
}





const offset57 = currentPage57 * PER_PAGE;

const currentPageData57 = planD21atabovegreat
.slice(offset57, offset57 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount57 = Math.ceil(planD21atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [planE21atabovegreat, setPlanE21atabovegreat] = React.useState([]);

   ////pagination...


const [currentPage63, setCurrentPage63] = React.useState(0);


function handlePageClick63({ selected: selectedPage}){
  setCurrentPage63(selectedPage);
}





const offset63 = currentPage63 * PER_PAGE;

const currentPageData63 = planE21atabovegreat
.slice(offset63, offset63 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount63 = Math.ceil(planE21atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////








   
   
   
   async function businessplanning21(e){ 
     //e.preventDefault();
   
     dateIndex21();

     //index21irene();
     
   
   
     const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
       const data = await req.json()
       console.log(data); ////////////// all console.logs to here... 
   
       let newArray = [...openarray21];
       console.log(newArray);
       console.log(newArray[0][1]); // correct...
       console.log(newArray[0][13]);
   
       let planK = [];
       let planA = [];
       let planAatabove = [];
       let planB = [];
       let planBatabove = [];
       let planC = [];
       let planCatabove = [];
       let planD = [];
       let planDatabove = [];
       let planE = [];
       let planEatabove = [];
   
       for (let i = 0; i<data.length; i++){
         if (data[i].county === `${county2}` && data[i].townstate === `${town3}` && data[i].saleprice >= `${pricevalue3}` && data[i].saleprice < `${pricevalue4}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
           data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
           || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
           || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
           || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
           || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] )){
           planK.push(data[i]);
           console.log(planK); //1 object here...
           console.log(newArray[0][1]);
           
   
           let length = planK.length; // total sales all 90 days consecutive...
           console.log(length);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13])){
             planAatabove.push(data[i]);
             console.log(planAatabove);
             planAatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanA21atabovegreat(planAatabove);
           }
   
           let planAatabovelength = planAatabove.length;
           console.log(planAatabovelength);
   
           if (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13]){
             planA.push(data[i]);
             console.log(planA);
             planA.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX211(planA);
           }
   
           if (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
             planB.push(data[i]);
             console.log(planB);
             planB.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX212(planB);
           }
           if (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ){
             planC.push(data[i]);
             console.log(planC);
             planC.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX213(planC);
           }
           if (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
             || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
             || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
             planD.push(data[i]);
             console.log(planD);
             planD.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX214(planD);
           }
           if (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
             || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
             planE.push(data[i]);
             console.log(planE);
             planE.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX215(planE);
           }
   
           let planElength = planE.length;
           console.log(planE.length);
   
   
   
           let length2 = planB.length; // total sales all 90 days consecutive...
           console.log(length2);
   
           let planAlength = planA.length;
           console.log(planAlength);
   
           
   
           document.getElementById('planAsales21').innerHTML = planAlength;

           setPlanA21sales(planAlength);
   
           let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100) || 0; 
   
           document.getElementById('planArate21').innerHTML = `${ratePlanA}%`;
           setPlanA21rates(ratePlanA);
   
           let fractionPlanA21 = `${planAatabovelength} / ${planAlength}`;
           document.getElementById('fractionArate21').innerHTML = fractionPlanA21;

           setPlanA21atabove(planAatabovelength);
           setPlanA21salelength(planAlength);
   
   
          
            
            
            if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
             planBatabove.push(data[i]);
             console.log(planBatabove);  //gz
             planBatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanB21atabovegreat(planBatabove);
           }
   
           let planBatabovelength = planBatabove.length;
           console.log(planBatabovelength);
   
           let planBlength = planB.length;
           console.log(planBlength);
   
           document.getElementById('planBsales21').innerHTML = planBlength;

           setPlanB21sales(planBlength);
   
           let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100) || 0; 
   
           document.getElementById('planBrate21').innerHTML = `${ratePlanB}%`;
           setPlanB21rates(ratePlanB);
   
           let fractionPlanB21 = `${planBatabovelength} / ${planBlength}`;
           document.getElementById('fractionBrate21').innerHTML = fractionPlanB21;

           setPlanB21atabove(planBatabovelength);
           setPlanB21salelength(planBlength);
   
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] )){
             planCatabove.push(data[i]);
             console.log(planCatabove);  //gz
             planCatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanC21atabovegreat(planCatabove);
           }
   
           let planCatabovelength = planCatabove.length;
           console.log(planCatabovelength);
   
           let planClength = planC.length;
           console.log(planClength);
   
           document.getElementById('planCsales21').innerHTML = planClength;

           setPlanC21sales(planClength);
   
           let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100) || 0; 
   
           document.getElementById('planCrate21').innerHTML = `${ratePlanC}%`;
           setPlanC21rates(ratePlanC);
   
           let fractionPlanC21 = `${planCatabovelength} / ${planClength}`;
           document.getElementById('fractionCrate21').innerHTML = fractionPlanC21;

           setPlanC21atabove(planCatabovelength);
           setPlanC21salelength(planClength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
             || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
             || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
             planDatabove.push(data[i]);
             console.log(planDatabove);  //gz
             planDatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanD21atabovegreat(planDatabove);
           }
   
           let planDatabovelength = planDatabove.length;
           console.log(planDatabovelength);
   
           let planDlength = planD.length;
           console.log(planDlength);
   
           document.getElementById('planDsales21').innerHTML = planDlength;

           setPlanD21sales(planDlength);
   
           let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100) || 0; 
   
           document.getElementById('planDrate21').innerHTML = `${ratePlanD}%`;
           setPlanD21rates(ratePlanD);
   
           let fractionPlanD21 = `${planDatabovelength} / ${planDlength}`;
           document.getElementById('fractionDrate21').innerHTML = fractionPlanD21;

           setPlanD21atabove(planDatabovelength);
           setPlanD21salelength(planDlength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
             || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
             planEatabove.push(data[i]);
             console.log(planEatabove);  
             planEatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanE21atabovegreat(planEatabove);
           }
   
           
   
           let planEatabovelength = planEatabove.length;
           console.log(planEatabovelength);
   
           document.getElementById('planEsales21').innerHTML = planElength;

           setPlanE21sales(planElength);
   
           let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100) || 0; 
   
           document.getElementById('planErate21').innerHTML = `${ratePlanE}%`;
           setPlanE21rates(ratePlanE);
   
           let fractionPlanE21 = `${planEatabovelength} / ${planElength}`;
           document.getElementById('fractionErate21').innerHTML = fractionPlanE21;

           setPlanE21atabove(planEatabovelength);
           setPlanE21salelength(planElength);
   
   


          ///////////////////////////////////////////////////
           let differential = 0;
    
           function add(item, counter, array){
                   differential+=(item.differential); //NaN
                  }

                  planA.forEach(add);

                  let differentialB = 0;
                  function add2(item, counter, array){
                    differentialB+=(item.differential);
                  }

                  planB.forEach(add2);

                  let differentialC = 0;
                  function add3(item, counter, array){
                    differentialC+=(item.differential);
                  }

                  planC.forEach(add3);

                  let differentialD = 0;
                  function add4(item, counter, array){
                    differentialD+=(item.differential);
                  }

                  planD.forEach(add4);

                  let differentialE = 0;
                  function add5(item, counter, array){
                    differentialE+=(item.differential);
                  }

                  planE.forEach(add5);

                  ///////////// title... //////////

                  let differentialbelowA21 = 0;
                  function add6(item, counter, array){
                    differentialbelowA21+=(item.differential);
                  }

                  planAatabove.forEach(add6);

                  let differentialbelowB21 = 0;
                  function add7(item, counter, array){
                    differentialbelowB21+=(item.differential);
                  }

                  planBatabove.forEach(add7);

                  let differentialbelowC21 = 0;
                  function add8(item, counter, array){
                    differentialbelowC21+=(item.differential);
                  }

                  planCatabove.forEach(add8);

                  let differentialbelowD21 = 0;
                  function add9(item, counter, array){
                    differentialbelowD21+=(item.differential);
                  }
                  planDatabove.forEach(add9);

                  let differentialbelowE21 = 0; 
                  function add10(item, counter, array){
                    differentialbelowE21+=(item.differential);
                  }
                  planEatabove.forEach(add10);        

                  const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                   })
                 
                

   
                  let planAavgdiff = formatter.format(Math.round(differential / planAlength) || 0);
                  let planBavgdiff = formatter.format(Math.round(differentialB / planBlength) || 0);
                  let planCavgdiff = formatter.format(Math.round(differentialC / planClength) || 0);
                  let planDavgdiff = formatter.format(Math.round(differentialD / planDlength) || 0);
                  let planEavgdiff = formatter.format(Math.round(differentialE / planElength ) || 0);



                  let planAavgdiff1 = Math.round(differential / planAlength)  || 0;
                  let planBavgdiff2 = Math.round(differentialB / planBlength) || 0;
                  let planCavgdiff3 = Math.round(differentialC / planClength) || 0;
                  let planDavgdiff4 = Math.round(differentialD / planDlength) || 0;
                  let planEavgdiff5 = Math.round(differentialE / planElength) || 0;


                  setBelowdiffratesPlanA21avg(formatter.format(Math.round(differentialbelowA21 / planAatabovelength)) || 0); //title
                  setBelowdiffratesPlanB21avg(formatter.format(Math.round(differentialbelowB21 / planBatabovelength)) || 0); //title
                  setBelowdiffratesPlanC21avg(formatter.format(Math.round(differentialbelowC21 / planCatabovelength)) || 0); //title
                  setBelowdiffratesPlanD21avg(formatter.format(Math.round(differentialbelowD21 / planDatabovelength)) || 0); //title
                  setBelowdiffratesPlanE21avg(formatter.format(Math.round(differentialbelowE21 / planEatabovelength)) || 0); //title
                  
   
                  
                  
                 document.getElementById('planAdiff21').innerHTML = planAavgdiff;

                 setPlanA21diff(planAavgdiff1);
   
                document.getElementById('planBdiff21').innerHTML = planBavgdiff;

                setPlanB21diff(planBavgdiff2);
   
                document.getElementById('planCdiff21').innerHTML = planCavgdiff;

                setPlanC21diff(planCavgdiff3);
   
                document.getElementById('planDdiff21').innerHTML = planDavgdiff;

                setPlanD21diff(planDavgdiff4);
   
                document.getElementById('planEdiff21').innerHTML = planEavgdiff;

                setPlanE21diff(planEavgdiff5);
   
   
                  
         
         
   
                 
   
   
                 }
                         
         
       }
     
   }
   
   
   /////////////// 2020 business planning async...
   
   
   
   var twenty = [
     '1/1/2020','1/2/2020','1/3/2020','1/4/2020','1/5/2020','1/6/2020','1/7/2020','1/8/2020','1/9/2020','1/10/2020','1/11/2020','1/12/2020','1/13/2020','1/14/2020','1/15/2020','1/16/2020','1/17/2020','1/18/2020','1/19/2020','1/20/2020','1/21/2020','1/22/2020','1/23/2020','1/24/2020','1/25/2020','1/26/2020','1/27/2020','1/28/2020','1/29/2020','1/30/2020','1/31/2020',
     '2/1/2020','2/2/2020','2/3/2020','2/4/2020','2/5/2020','2/6/2020','2/7/2020','2/8/2020','2/9/2020','2/10/2020','2/11/2020','2/12/2020','2/13/2020','2/14/2020','2/15/2020','2/16/2020','2/17/2020','2/18/2020','2/19/2020','2/20/2020','2/21/2020','2/22/2020','2/23/2020','2/24/2020','2/25/2020','2/26/2020','2/27/2020','2/28/2020',
     '3/1/2020','3/2/2020','3/3/2020','3/4/2020','3/5/2020','3/6/2020','3/7/2020','3/8/2020','3/9/2020','3/10/2020','3/11/2020','3/12/2020','3/13/2020','3/14/2020','3/15/2020','3/16/2020','3/17/2020','3/18/2020','3/19/2020','3/20/2020','3/21/2020','3/22/2020','3/23/2020','3/24/2020','3/25/2020','3/26/2020','3/27/2020','3/28/2020','3/29/2020','3/30/2020','3/31/2020',
     '4/1/2020','4/2/2020','4/3/2020','4/4/2020','4/5/2020','4/6/2020','4/7/2020','4/8/2020','4/9/2020','4/10/2020','4/11/2020','4/12/2020','4/13/2020','4/14/2020','4/15/2020','4/16/2020','4/17/2020','4/18/2020','4/19/2020','4/20/2020','4/21/2020','4/22/2020','4/23/2020','4/24/2020','4/25/2020','4/26/2020','4/27/2020','4/28/2020','4/29/2020','4/30/2020',
     '5/1/2020','5/2/2020','5/3/2020','5/4/2020','5/5/2020','5/6/2020','5/7/2020','5/8/2020','5/9/2020','5/10/2020','5/11/2020','5/12/2020','5/13/2020','5/14/2020','5/15/2020','5/16/2020','5/17/2020','5/18/2020','5/19/2020','5/20/2020','5/21/2020','5/22/2020','5/23/2020','5/24/2020','5/25/2020','5/26/2020','5/27/2020','5/28/2020','5/29/2020','5/30/2020','5/31/2020',
     '6/1/2020','6/2/2020','6/3/2020','6/4/2020','6/5/2020','6/6/2020','6/7/2020','6/8/2020','6/9/2020','6/10/2020','6/11/2020','6/12/2020','6/13/2020','6/14/2020','6/15/2020','6/16/2020','6/17/2020','6/18/2020','6/19/2020','6/20/2020','6/21/2020','6/22/2020','6/23/2020','6/24/2020','6/25/2020','6/26/2020','6/27/2020','6/28/2020','6/29/2020','6/30/2020',
     '7/1/2020','7/2/2020','7/3/2020','7/4/2020','7/5/2020','7/6/2020','7/7/2020','7/8/2020','7/9/2020','7/10/2020','7/11/2020','7/12/2020','7/13/2020','7/14/2020','7/15/2020','7/16/2020','7/17/2020','7/18/2020','7/19/2020','7/20/2020','7/21/2020','7/22/2020','7/23/2020','7/24/2020','7/25/2020','7/26/2020','7/27/2020','7/28/2020','7/29/2020','7/30/2020','7/31/2020',
     '8/1/2020','8/2/2020','8/3/2020','8/4/2020','8/5/2020','8/6/2020','8/7/2020','8/8/2020','8/9/2020','8/10/2020','8/11/2020','8/12/2020','8/13/2020','8/14/2020','8/15/2020','8/16/2020','8/17/2020','8/18/2020','8/19/2020','8/20/2020','8/21/2020','8/22/2020','8/23/2020','8/24/2020','8/25/2020','8/26/2020','8/27/2020','8/28/2020','8/29/2020','8/30/2020','8/31/2020',
     '9/1/2020','9/2/2020','9/3/2020','9/4/2020','9/5/2020','9/6/2020','9/7/2020','9/8/2020','9/9/2020','9/10/2020','9/11/2020','9/12/2020','9/13/2020','9/14/2020','9/15/2020','9/16/2020','9/17/2020','9/18/2020','9/19/2020','9/20/2020','9/21/2020','9/22/2020','9/23/2020','9/24/2020','9/25/2020','9/26/2020','9/27/2020','9/28/2020','9/29/2020','9/30/2020',
     '10/1/2020','10/2/2020','10/3/2020','10/4/2020','10/5/2020','10/6/2020','10/7/2020','10/8/2020','10/9/2020','10/10/2020','10/11/2020','10/12/2020','10/13/2020','10/14/2020','10/15/2020','10/16/2020','10/17/2020','10/18/2020','10/19/2020','10/20/2020','10/21/2020','10/22/2020','10/23/2020','10/24/2020','10/25/2020','10/26/2020','10/27/2020','10/28/2020','10/29/2020','10/30/2020','10/31/2020',
     '11/1/2020','11/2/2020','11/3/2020','11/4/2020','11/5/2020','11/6/2020','11/7/2020','11/8/2020','11/9/2020','11/10/2020','11/11/2020','11/12/2020','11/13/2020','11/14/2020','11/15/2020','11/16/2020','11/17/2020','11/18/2020','11/19/2020','11/20/2020','11/21/2020','11/22/2020','11/23/2020','11/24/2020','11/25/2020','11/26/2020','11/27/2020','11/28/2020','11/29/2020','11/30/2020','12/1/2020',
     '12/2/2020','12/3/2020','12/4/2020','12/5/2020','12/6/2020','12/7/2020','12/8/2020','12/9/2020','12/10/2020','12/11/2020','12/12/2020','12/13/2020','12/14/2020','12/15/2020','12/16/2020','12/17/2020','12/18/2020','12/19/2020','12/20/2020','12/21/2020','12/22/2020','12/23/2020','12/24/2020','12/25/2020','12/26/2020','12/27/2020','12/28/2020','12/29/2020','12/30/2020','12/31/2020'
         ];
   
         var index20 = [twenty[0], twenty[1], twenty[2], twenty[3], twenty[4], twenty[5], twenty[6], twenty[7], twenty[8], twenty[9], twenty[10], twenty[11], twenty[12], twenty[13], twenty[14], twenty[15], twenty[16], twenty[17], twenty[18], twenty[19], twenty[20], twenty[21], twenty[22], twenty[23], twenty[24], twenty[25], twenty[26], twenty[27], twenty[28], twenty[29], twenty[30],
   twenty[31], twenty[32], twenty[33], twenty[34], twenty[35], twenty[36], twenty[37], twenty[38], twenty[39], twenty[40], twenty[41], twenty[42], twenty[43], twenty[44], twenty[45], twenty[46], twenty[47], twenty[48], twenty[49], twenty[50], twenty[51], twenty[52], twenty[53], twenty[54], twenty[55], twenty[56], twenty[57], twenty[58], twenty[59], twenty[60], twenty[61],
   twenty[62], twenty[63], twenty[64], twenty[65], twenty[66], twenty[67], twenty[68], twenty[69], twenty[70], twenty[71], twenty[72], twenty[73], twenty[74], twenty[75], twenty[76], twenty[77], twenty[78], twenty[79], twenty[80], twenty[81], twenty[82], twenty[83], twenty[84], twenty[85], twenty[86], twenty[87], twenty[88], twenty[89], twenty[90], twenty[91], twenty[92],
   twenty[93], twenty[94], twenty[95], twenty[96], twenty[97], twenty[98], twenty[99], twenty[100], twenty[101], twenty[102], twenty[103], twenty[104], twenty[105], twenty[106], twenty[107], twenty[108], twenty[109], twenty[110], twenty[111], twenty[112], twenty[113], twenty[114], twenty[115], twenty[116], twenty[117], twenty[118], twenty[119], twenty[120], twenty[121], twenty[122], twenty[123],
   twenty[124], twenty[125], twenty[126], twenty[127], twenty[128], twenty[129], twenty[130], twenty[131], twenty[132], twenty[133], twenty[134], twenty[135], twenty[136], twenty[137], twenty[138], twenty[139], twenty[140], twenty[141], twenty[142], twenty[143], twenty[144], twenty[145], twenty[146], twenty[147], twenty[148], twenty[149], twenty[150], twenty[151], twenty[152], twenty[153], twenty[154], 
   twenty[155], twenty[156], twenty[157], twenty[158], twenty[159], twenty[160], twenty[161], twenty[162], twenty[163], twenty[164], twenty[165], twenty[166], twenty[167], twenty[168], twenty[169], twenty[170], twenty[171], twenty[172], twenty[173], twenty[174], twenty[175], twenty[176], twenty[177], twenty[178], twenty[179], twenty[180], twenty[181], twenty[182], twenty[183], twenty[184], twenty[185],
   twenty[186], twenty[187], twenty[188], twenty[189], twenty[190], twenty[191], twenty[192], twenty[193], twenty[194], twenty[195], twenty[196], twenty[197], twenty[198], twenty[199], twenty[200], twenty[201], twenty[202], twenty[203], twenty[204], twenty[205], twenty[206], twenty[207], twenty[208], twenty[209], twenty[210], twenty[211], twenty[212], twenty[213], twenty[214], twenty[215], twenty[216],
   twenty[217], twenty[218], twenty[219], twenty[220], twenty[221], twenty[222], twenty[223], twenty[224], twenty[225], twenty[226], twenty[227], twenty[228], twenty[229], twenty[230], twenty[231], twenty[232], twenty[233], twenty[234], twenty[235], twenty[236], twenty[237], twenty[238], twenty[239], twenty[240], twenty[241], twenty[242], twenty[243], twenty[244], twenty[245], twenty[246], twenty[247],
   twenty[248], twenty[249], twenty[250], twenty[251], twenty[252], twenty[253], twenty[254], twenty[255], twenty[256], twenty[257], twenty[258], twenty[259], twenty[260], twenty[261], twenty[262], twenty[263], twenty[264], twenty[265], twenty[267], twenty[268], twenty[269], twenty[270], twenty[271], twenty[272], twenty[273], twenty[274], twenty[275], twenty[276], twenty[277], twenty[278], twenty[279],
   twenty[280], twenty[281], twenty[282], twenty[283], twenty[284], twenty[285], twenty[286], twenty[287], twenty[288], twenty[289], twenty[290], twenty[291], twenty[292], twenty[293], twenty[294], twenty[295], twenty[296], twenty[297], twenty[298], twenty[299], twenty[300], twenty[301], twenty[302], twenty[303], twenty[304], twenty[305], twenty[306], twenty[307], twenty[308], twenty[309], twenty[310],
   twenty[311], twenty[312], twenty[313], twenty[314], twenty[315], twenty[316], twenty[317], twenty[318], twenty[319], twenty[320], twenty[321], twenty[322], twenty[323], twenty[324], twenty[325], twenty[326], twenty[327], twenty[328], twenty[329], twenty[330], twenty[331], twenty[332], twenty[333], twenty[334], twenty[335], twenty[336], twenty[337], twenty[338], twenty[339], twenty[340], twenty[341],
   twenty[342], twenty[343], twenty[344], twenty[345], twenty[346], twenty[347], twenty[348], twenty[349], twenty[350], twenty[351], twenty[352], twenty[353], twenty[354], twenty[355], twenty[356], twenty[357], twenty[358], twenty[359], twenty[360], twenty[361], twenty[362], twenty[363], twenty[364]];
   console.log(index20);



     
     
 
   const [openarray20, setOpenarray20] = React.useState([]);
   
   async function dateIndex20(e){
   
   for (let i = 0; i < index21.length; i++){
   
   
   console.log(document.getElementById('valueplan').value);
   if ((document.getElementById('valueplan').value).substring(0, 5) === index20[i].substring(0, 5)){
   console.log(index20.indexOf(index20[i]));
   openarray20.unshift(index20.splice(index20.indexOf(index20[i]), 120));
   return openarray20;
   console.log(openarray20);
   }
   }
   }
   console.log(openarray20);



   const [belowdiffratesPlanA20avg, setBelowdiffratesPlanA20avg] = React.useState(0);
   const [belowdiffratesPlanB20avg, setBelowdiffratesPlanB20avg] = React.useState(0);
   const [belowdiffratesPlanC20avg, setBelowdiffratesPlanC20avg] = React.useState(0);
   const [belowdiffratesPlanD20avg, setBelowdiffratesPlanD20avg] = React.useState(0);
   const [belowdiffratesPlanE20avg, setBelowdiffratesPlanE20avg] = React.useState(0);

   const [planA20sales, setPlanA20sales] = React.useState(0);
   const [planB20sales, setPlanB20sales] = React.useState(0);
   const [planC20sales, setPlanC20sales] = React.useState(0);
   const [planD20sales, setPlanD20sales] = React.useState(0);
   const [planE20sales, setPlanE20sales] = React.useState(0);
   const [planF20sales, setPlanF20sales] = React.useState(0);

   const [planA20rates, setPlanA20rates] = React.useState(0);
   const [planB20rates, setPlanB20rates] = React.useState(0);
   const [planC20rates, setPlanC20rates] = React.useState(0);
   const [planD20rates, setPlanD20rates] = React.useState(0);
   const [planE20rates, setPlanE20rates] = React.useState(0);
   const [planF20rates, setPlanF20rates] = React.useState(0);

   const [planA20diff, setPlanA20diff] = React.useState(0);
   const [planB20diff, setPlanB20diff] = React.useState(0);
   const [planC20diff, setPlanC20diff] = React.useState(0);
   const [planD20diff, setPlanD20diff] = React.useState(0);
   const [planE20diff, setPlanE20diff] = React.useState(0);
   const [planF20diff, setPlanF20diff] = React.useState(0);

   const [planA20atabove, setPlanA20atabove] = React.useState(0);
   const [planB20atabove, setPlanB20atabove] = React.useState(0);
   const [planC20atabove, setPlanC20atabove] = React.useState(0);
   const [planD20atabove, setPlanD20atabove] = React.useState(0);
   const [planE20atabove, setPlanE20atabove] = React.useState(0);
   const [planF20atabove, setPlanF20atabove] = React.useState(0);


   const [planA20atabovegreat, setPlanA20atabovegreat] = React.useState([]);
////pagination...


const [currentPage41, setCurrentPage41] = React.useState(0);


function handlePageClick41({ selected: selectedPage}){
  setCurrentPage41(selectedPage);
}





const offset41 = currentPage41 * PER_PAGE;

const currentPageData41 = planA20atabovegreat
.slice(offset41, offset41 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount41 = Math.ceil(planA20atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [planB20atabovegreat, setPlanB20atabovegreat] = React.useState([]);

////pagination...


const [currentPage47, setCurrentPage47] = React.useState(0);


function handlePageClick47({ selected: selectedPage}){
  setCurrentPage47(selectedPage);
}





const offset47 = currentPage47 * PER_PAGE;

const currentPageData47 = planB20atabovegreat
.slice(offset47, offset47 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount47 = Math.ceil(planB20atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [planC20atabovegreat, setPlanC20atabovegreat] = React.useState([]);
 ////pagination...


 const [currentPage53, setCurrentPage53] = React.useState(0);


 function handlePageClick53({ selected: selectedPage}){
   setCurrentPage53(selectedPage);
 }
 
 
 
 
 
 const offset53 = currentPage53 * PER_PAGE;
 
 const currentPageData53 = planC20atabovegreat
 .slice(offset53, offset53 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount53 = Math.ceil(planC20atabovegreat.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////




   const [planD20atabovegreat, setPlanD20atabovegreat] = React.useState([]);
////pagination...


const [currentPage59, setCurrentPage59] = React.useState(0);


function handlePageClick59({ selected: selectedPage}){
  setCurrentPage59(selectedPage);
}





const offset59 = currentPage59 * PER_PAGE;

const currentPageData59 = planD20atabovegreat
.slice(offset59, offset59 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount59 = Math.ceil(planD20atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [planE20atabovegreat, setPlanE20atabovegreat] = React.useState([]);
////pagination...


const [currentPage65, setCurrentPage65] = React.useState(0);


function handlePageClick65({ selected: selectedPage}){
  setCurrentPage65(selectedPage);
}





const offset65 = currentPage65 * PER_PAGE;

const currentPageData65 = planE20atabovegreat
.slice(offset65, offset65 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount65 = Math.ceil(planE20atabovegreat.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////











   const [planA20salelength, setPlanA20salelength] = React.useState(0);
   const [planB20salelength, setPlanB20salelength] = React.useState(0);
   const [planC20salelength, setPlanC20salelength] = React.useState(0);
   const [planD20salelength, setPlanD20salelength] = React.useState(0);
   const [planE20salelength, setPlanE20salelength] = React.useState(0);
   const [planF20salelength, setPlanF20salelength] = React.useState(0);


   
   const [subaruWRX201, setSubaruWRX201] = React.useState([]);
////pagination...


const [currentPage40, setCurrentPage40] = React.useState(0);


function handlePageClick40({ selected: selectedPage}){
  setCurrentPage40(selectedPage);
}





const offset40 = currentPage40 * PER_PAGE;

const currentPageData40 = subaruWRX201
.slice(offset40, offset40 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount40 = Math.ceil(subaruWRX201.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [subaruWRX202, setSubaruWRX202] = React.useState([]);
   ////pagination...


 const [currentPage46, setCurrentPage46] = React.useState(0);


 function handlePageClick46({ selected: selectedPage}){
   setCurrentPage46(selectedPage);
 }
 
 
 
 
 
 const offset46 = currentPage46 * PER_PAGE;
 
 const currentPageData46 = subaruWRX202
 .slice(offset46, offset46 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount46 = Math.ceil(subaruWRX202.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [subaruWRX203, setSubaruWRX203] = React.useState([]);
 ////pagination...


 const [currentPage52, setCurrentPage52] = React.useState(0);


 function handlePageClick52({ selected: selectedPage}){
   setCurrentPage52(selectedPage);
 }
 
 
 
 
 
 const offset52 = currentPage52 * PER_PAGE;
 
 const currentPageData52 = subaruWRX203
 .slice(offset52, offset52 + PER_PAGE)
 .map((item, index) => (
 
   <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    
             <Popup
               trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
               position="center"
               modal
               nested       
             >
   
   <div className="modal">
   
          
           <div className="header">West Manor</div>
           <div>
             
           
   
           <ul data-index={index}>
   <br/>
   <div className='borders'>
    <img className='modalin' src={image}></img>
    <br/>
    <br/>
    <br/>
    <br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
    </div>
    </ul>
    
    
   
   </div>
           </div>
               
             </Popup>
           
    
    
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
    <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   
    </div>
    </ul>
   
    
    
   ));
 
  const pageCount52 = Math.ceil(subaruWRX203.length / PER_PAGE); 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////


   const [subaruWRX204, setSubaruWRX204] = React.useState([]);
////pagination...


const [currentPage58, setCurrentPage58] = React.useState(0);


function handlePageClick58({ selected: selectedPage}){
  setCurrentPage58(selectedPage);
}





const offset58 = currentPage58 * PER_PAGE;

const currentPageData58 = subaruWRX204
.slice(offset58, offset58 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount58 = Math.ceil(subaruWRX204.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [subaruWRX205, setSubaruWRX205] = React.useState([]);

   ////pagination...


const [currentPage64, setCurrentPage64] = React.useState(0);


function handlePageClick64({ selected: selectedPage}){
  setCurrentPage64(selectedPage);
}





const offset64 = currentPage64 * PER_PAGE;

const currentPageData64 = subaruWRX205
.slice(offset64, offset64 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount64 = Math.ceil(subaruWRX205.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////   
   
   
   
   async function businessplanning20(e, businessplanning, businessplanning21){ 
     //e.preventDefault();
   
     dateIndex20();
   
     
   
   
     const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
       const data = await req.json()
       console.log(data); ////////////// all console.logs to here... 
   
       let newArray = [...openarray20];
       console.log(newArray);
       console.log(newArray[0][1]); // correct...
       console.log(newArray[0][13]);
   
       let planK = [];
       let planA = [];
       let planAatabove = [];
       let planB = [];
       let planBatabove = [];
       let planC = [];
       let planCatabove = [];
       let planD = [];
       let planDatabove = [];
       let planE = [];
       let planEatabove = [];
   
       for (let i = 0; i<data.length; i++){
         if (data[i].county === `${county2}` && data[i].townstate === `${town3}` && data[i].saleprice >= `${pricevalue3}` && data[i].saleprice < `${pricevalue4}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
           data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
           || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
           || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
           || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
           || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] )){
           planK.push(data[i]);
           console.log(planK); //1 object here...
           console.log(newArray[0][1]);
           
   
           let length = planK.length; // total sales all 90 days consecutive...
           console.log(length);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13])){
             planAatabove.push(data[i]);
             console.log(planAatabove);
             planAatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanA20atabovegreat(planAatabove);
           }
   
           let planAatabovelength = planAatabove.length;
           console.log(planAatabovelength);
   
           if (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13]){
             planA.push(data[i]);
             console.log(planA);
             planA.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX201(planA);
           }
   
           if (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
             planB.push(data[i]);
             console.log(planB);
             planB.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX202(planB);
           }
           if (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ){
             planC.push(data[i]);
             console.log(planC);
             planC.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX203(planC);
           }
           if (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
             || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
             || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
             planD.push(data[i]);
             console.log(planD);
             planD.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX204(planD);
           }
           if (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
             || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
             planE.push(data[i]);
             console.log(planE);
             planE.sort((a, b) => a.saleprice - b.saleprice);
             setSubaruWRX205(planE);
           }
   
           let planElength = planE.length;
           console.log(planE.length);
   
   
   
           let length2 = planB.length; // total sales all 90 days consecutive...
           console.log(length2);
   
           let planAlength = planA.length;
           console.log(planAlength);
   
           
   
           document.getElementById('planAsales20').innerHTML = planAlength;

           setPlanA20sales(planAlength);
   
           let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100) || 0; 
   
           document.getElementById('planArate20').innerHTML = `${ratePlanA}%`;

           setPlanA20rates(ratePlanA);
   
           let fractionPlanA20 = `${planAatabovelength} / ${planAlength}`;
           document.getElementById('fractionArate20').innerHTML = fractionPlanA20;

           setPlanA20atabove(planAatabovelength);
           setPlanA20salelength(planAlength);
   
          
            
            
            if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
             planBatabove.push(data[i]);
             console.log(planBatabove);  //gz
             planBatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanB20atabovegreat(planBatabove);
           }
   
           let planBatabovelength = planBatabove.length;
           console.log(planBatabovelength);
   
           let planBlength = planB.length;
           console.log(planBlength);
   
           document.getElementById('planBsales20').innerHTML = planBlength;

           setPlanB20sales(planBlength);
   
           let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100) || 0; 
   
           document.getElementById('planBrate20').innerHTML = `${ratePlanB}%`;
           setPlanB20rates(ratePlanB);
   
           let fractionPlanB20 = `${planBatabovelength} / ${planBlength}`;
           document.getElementById('fractionBrate20').innerHTML = fractionPlanB20;

           setPlanB20atabove(planBatabovelength);
           setPlanB20salelength(planBlength);
   
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] )){
             planCatabove.push(data[i]);
             console.log(planCatabove);  //gz
             planCatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanC20atabovegreat(planCatabove);
           }
   
           let planCatabovelength = planCatabove.length;
           console.log(planCatabovelength);
   
           let planClength = planC.length;
           console.log(planClength);
   
           document.getElementById('planCsales20').innerHTML = planClength;

           setPlanC20sales(planClength);
   
           let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100) || 0; 
   
           document.getElementById('planCrate20').innerHTML = `${ratePlanC}%`;
           setPlanC20rates(ratePlanC);
   
           let fractionPlanC20 = `${planCatabovelength} / ${planClength}`;
           document.getElementById('fractionCrate20').innerHTML = fractionPlanC20;

           setPlanC20atabove(planCatabovelength);
           setPlanC20salelength(planClength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
             || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
             || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
             planDatabove.push(data[i]);
             console.log(planDatabove);  //gz
             planDatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanD20atabovegreat(planDatabove);
           }
   
           let planDatabovelength = planDatabove.length;
           console.log(planDatabovelength);
   
           let planDlength = planD.length;
           console.log(planDlength);
   
           document.getElementById('planDsales20').innerHTML = planDlength;

           setPlanD20sales(planDlength);
   
           let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100) || 0; 
   
           document.getElementById('planDrate20').innerHTML = `${ratePlanD}%`;
           setPlanD20rates(ratePlanD);
   
           let fractionPlanD20 = `${planDatabovelength} / ${planDlength}`;
           document.getElementById('fractionDrate20').innerHTML = fractionPlanD20;

           setPlanD20atabove(planDatabovelength);
           setPlanD20salelength(planDlength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
             || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
             planEatabove.push(data[i]);
             console.log(planEatabove); 
             planEatabove.sort((a, b) => a.saleprice - b.saleprice);
             setPlanE20atabovegreat(planEatabove);
           }
   
           
   
           let planEatabovelength = planEatabove.length;
           console.log(planEatabovelength);
   
           document.getElementById('planEsales20').innerHTML = planElength;

           setPlanE20sales(planElength);
   
           let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100) || 0; 
   
           document.getElementById('planErate20').innerHTML = `${ratePlanE}%`;
           setPlanE20rates(ratePlanE);
   
           let fractionPlanE20 = `${planEatabovelength} / ${planElength}`;
           document.getElementById('fractionErate20').innerHTML = fractionPlanE20;

           setPlanE20atabove(planEatabovelength);
           setPlanE20salelength(planElength);
   
   


                   ///////////////////////////////////////////////////
           let differential = 0;
    
           function add(item, counter, array){
                   differential+=(item.differential); //NaN
                  }

                  planA.forEach(add);

                  let differentialB = 0;
                  function add2(item, counter, array){
                    differentialB+=(item.differential);
                  }

                  planB.forEach(add2);

                  let differentialC = 0;
                  function add3(item, counter, array){
                    differentialC+=(item.differential);
                  }

                  planC.forEach(add3);

                  let differentialD = 0;
                  function add4(item, counter, array){
                    differentialD+=(item.differential);
                  }

                  planD.forEach(add4);

                  let differentialE = 0;
                  function add5(item, counter, array){
                    differentialE+=(item.differential);
                  }

                  planE.forEach(add5);

                  ///////////// title... //////////

                  let differentialbelowA20 = 0;
                  function add6(item, counter, array){
                    differentialbelowA20+=(item.differential);
                  }

                  planAatabove.forEach(add6);

                  let differentialbelowB20 = 0;
                  function add7(item, counter, array){
                    differentialbelowB20+=(item.differential);
                  }

                  planBatabove.forEach(add7);

                  let differentialbelowC20 = 0;
                  function add8(item, counter, array){
                    differentialbelowC20+=(item.differential);
                  }

                  planCatabove.forEach(add8);

                  let differentialbelowD20 = 0;
                  function add9(item, counter, array){
                    differentialbelowD20+=(item.differential);
                  }
                  planDatabove.forEach(add9);

                  let differentialbelowE20 = 0; 
                  function add10(item, counter, array){
                    differentialbelowE20+=(item.differential);
                  }
                  planEatabove.forEach(add10);   
                  
                  const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                   })
                 
                
   
                  let planAavgdiff = formatter.format(Math.round(differential / planAlength) || 0);
                  let planBavgdiff = formatter.format(Math.round(differentialB / planBlength) || 0);
                  let planCavgdiff = formatter.format(Math.round(differentialC / planClength) || 0);
                  let planDavgdiff = formatter.format(Math.round(differentialD / planDlength) || 0);
                  let planEavgdiff = formatter.format(Math.round(differentialE / planElength) || 0);


                  let planAavgdiff1 = Math.round(differential / planAlength)  || 0;
                  let planBavgdiff2 = Math.round(differentialB / planBlength) || 0;
                  let planCavgdiff3 = Math.round(differentialC / planClength) || 0;
                  let planDavgdiff4 = Math.round(differentialD / planDlength) || 0;
                  let planEavgdiff5 = Math.round(differentialE / planElength) || 0;




                  setBelowdiffratesPlanA20avg(formatter.format(Math.round(differentialbelowA20 / planAatabovelength)) || 0); //title
                  setBelowdiffratesPlanB20avg(formatter.format(Math.round(differentialbelowB20 / planBatabovelength)) || 0); //title
                  setBelowdiffratesPlanC20avg(formatter.format(Math.round(differentialbelowC20 / planCatabovelength)) || 0); //title
                  setBelowdiffratesPlanD20avg(formatter.format(Math.round(differentialbelowD20 / planDatabovelength)) || 0); //title
                  setBelowdiffratesPlanE20avg(formatter.format(Math.round(differentialbelowE20 / planEatabovelength)) || 0); //title
                  
   
   
                  
                  
                document.getElementById('planAdiff20').innerHTML = planAavgdiff;

                setPlanA20diff(planAavgdiff1);  
   
                document.getElementById('planBdiff20').innerHTML = planBavgdiff;

                setPlanB20diff(planBavgdiff2);
   
                document.getElementById('planCdiff20').innerHTML = planCavgdiff;

                setPlanC20diff(planCavgdiff3);
   
                document.getElementById('planDdiff20').innerHTML = planDavgdiff;

                setPlanD20diff(planDavgdiff4);
   
                document.getElementById('planEdiff20').innerHTML = planEavgdiff;

                setPlanE20diff(planEavgdiff5);
   
   
                
                 
   
   
                 }
                         
         
       }
     
   }


   ///////////////////////////////////////////////////////////////////////////////////////////////
   
   
   async function battingAvg5(){

    //let strike1 = await businessplanning();
   // let strike2 = await businessplanning21(); 
   // let strike3 = await businessplanning20();



     businessplanning(); 
     businessplanning21(); 
     businessplanning20();





    let planAavgsum = ((planA22sales) + (planA21sales) + (planA20sales));
    let planAavgsales = Math.round((planAavgsum / 3) * 10) / 10;
   
    document.getElementById('avgAsales').innerHTML = planAavgsales;

    let planBavgsum = ((planB22sales) + (planB21sales) + (planB20sales));
    let planBavgsales = Math.round((planBavgsum / 3) * 10) / 10;

    document.getElementById('avgBsales').innerHTML = planBavgsales;
    
    
    let planCavgsum = ((planC22sales) + (planC21sales) + (planC20sales));
    let planCavgsales = Math.round((planCavgsum / 3) * 10) / 10;
    
    document.getElementById('avgCsales').innerHTML = planCavgsales;

    let planDavgsum = ((planD22sales) + (planD21sales) + (planD20sales));
    let planDavgsales = Math.round((planDavgsum / 3) * 10) / 10;
    
    document.getElementById('avgDsales').innerHTML = planDavgsales;

    let planEavgsum = ((planE22sales) + (planE21sales) + (planE20sales));
    let planEavgsales = Math.round((planEavgsum / 3) * 10) / 10;

    document.getElementById('avgEsales').innerHTML = planEavgsales;

    ///////////////////////rates averages////////////////////////////////

    let planAsumrate = ((planA22rates) + (planA21rates) + (planA20rates));
    let planAavgrate = Math.round((planAsumrate / 3)) || 0;

     document.getElementById('avgArate').innerHTML = `${planAavgrate}%`;

    let planBsumrate = ((planB22rates) + (planB21rates) + (planB20rates));
    let planBavgrate = Math.round((planBsumrate / 3)) || 0;

      document.getElementById('avgBrate').innerHTML = `${planBavgrate}%`;

      let planCsumrate = ((planC22rates) + (planC21rates) + (planC20rates));
      let planCavgrate = Math.round((planCsumrate / 3)) || 0;

      document.getElementById('avgCrate').innerHTML = `${planCavgrate}%`;

      let planDsumrate = ((planD22rates) + (planD21rates) + (planD20rates));
      let planDavgrate = Math.round((planDsumrate / 3)) || 0;

     document.getElementById('avgDrate').innerHTML = `${planDavgrate}%`;

     let planEsumrate = ((planE22rates) + (planE21rates) + (planE20rates));
     let planEavgrate = Math.round((planEsumrate / 3)) || 0;

     document.getElementById('avgErate').innerHTML = `${planEavgrate}%`;

     ////////////////// avg differentials ///////////////////


   




     const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
     })




     let planAavgdiffsum = Math.round(((planA22diff) + (planA21diff) + (planA20diff)));
     let planAavgdiffavg = formatter.format(Math.round((planAavgdiffsum) / 3) || 0);

     document.getElementById('avgAdiff').innerHTML = planAavgdiffavg;

     let planBavgdiffsum = Math.round(((planB22diff) + (planB21diff) + (planB20diff)));
     let planBavgdiffavg = formatter.format(Math.round((planBavgdiffsum / 3)) || 0);

     document.getElementById('avgBdiff').innerHTML = planBavgdiffavg;

     let planCavgdiffsum = Math.round(((planC22diff) + (planC21diff) + (planC20diff)));
     let planCavgdiffavg = formatter.format(Math.round((planCavgdiffsum / 3)) || 0);

     document.getElementById('avgCdiff').innerHTML = planCavgdiffavg;

     let planDavgdiffsum = Math.round(((planD22diff) + (planD21diff) + (planD20diff)));
     let planDavgdiffavg = formatter.format(Math.round((planDavgdiffsum / 3)) || 0);

     document.getElementById('avgDdiff').innerHTML = planDavgdiffavg;

     let planEavgdiffsum = Math.round(((planE22diff) + (planE21diff) + (planE20diff)));
     let planEavgdiffavg = formatter.format(Math.round((planEavgdiffsum / 3)) || 0);
     document.getElementById('avgEdiff').innerHTML = planEavgdiffavg;


     ///////////////////////////// fraction AVG state //////////////////////////////


  


     let planAatabove = ((planA22atabove) + (planA21atabove) + (planA20atabove));
     let planBatabove = ((planB22atabove) + (planB21atabove) + (planB20atabove));
     let planCatabove = ((planC22atabove) + (planC21atabove) + (planC20atabove));
     let planDatabove = ((planD22atabove) + (planD21atabove) + (planD20atabove));
     let planEatabove = ((planE22atabove) + (planE21atabove) + (planE20atabove));

     let abovefractionA = Math.round(((planAatabove) / 3) * 10) / 10;
     let abovefractionB = Math.round(((planBatabove) / 3) * 10) / 10;
     let abovefractionC = Math.round(((planCatabove) / 3) * 10) / 10;
     let abovefractionD = Math.round(((planDatabove) / 3) * 10) / 10;
     let abovefractionE = Math.round(((planEatabove) / 3) * 10) / 10;


     let planAsalelength = ((planA22salelength) + (planA21salelength) + (planA20salelength));
     let planBsalelength = ((planB22salelength) + (planB21salelength) + (planB20salelength));
     let planCsalelength = ((planC22salelength) + (planC21salelength) + (planC20salelength));
     let planDsalelength = ((planD22salelength) + (planD21salelength) + (planD20salelength));
     let planEsalelength = ((planE22salelength) + (planE21salelength) + (planE20salelength));

     
     let bottomfractionA = Math.round(((planAsalelength) / 3) * 10) / 10;
     let bottomfractionB = Math.round(((planBsalelength) / 3) * 10) / 10;
     let bottomfractionC = Math.round(((planCsalelength) / 3) * 10) / 10;
     let bottomfractionD = Math.round(((planDsalelength) / 3) * 10) / 10;
     let bottomfractionE = Math.round(((planEsalelength) / 3) * 10) / 10;

     document.getElementById('avgAfraction').innerHTML = `${abovefractionA} / ${bottomfractionA}`;
     document.getElementById('avgBfraction').innerHTML = `${abovefractionB} / ${bottomfractionB}`;
     document.getElementById('avgCfraction').innerHTML = `${abovefractionC} / ${bottomfractionC}`;
     document.getElementById('avgDfraction').innerHTML = `${abovefractionD} / ${bottomfractionD}`;
     document.getElementById('avgEfraction').innerHTML = `${abovefractionE} / ${bottomfractionE}`;



   }




   function clearAvg5(){


    document.getElementById('avgAsales').innerHTML = '';
    document.getElementById('avgBsales').innerHTML = '';
    document.getElementById('avgCsales').innerHTML = '';
    document.getElementById('avgDsales').innerHTML = '';
    document.getElementById('avgEsales').innerHTML = '';

    document.getElementById('avgArate').innerHTML = '';
    document.getElementById('avgBrate').innerHTML = '';
    document.getElementById('avgCrate').innerHTML = '';
    document.getElementById('avgDrate').innerHTML = '';
    document.getElementById('avgErate').innerHTML = '';

    document.getElementById('avgAdiff').innerHTML = '';
    document.getElementById('avgBdiff').innerHTML = '';
    document.getElementById('avgCdiff').innerHTML = '';
    document.getElementById('avgDdiff').innerHTML = '';
    document.getElementById('avgEdiff').innerHTML = '';

    document.getElementById('avgAfraction').innerHTML = '';
    document.getElementById('avgBfraction').innerHTML = '';
    document.getElementById('avgCfraction').innerHTML = '';
    document.getElementById('avgDfraction').innerHTML = '';
    document.getElementById('avgEfraction').innerHTML = '';

}

   
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
       ///////////////////////////////////////////// previous year data via 120 bp state above....
     
     //var [date, setDate] = React.useState(''); //'2/1/2022'
     //var [pricevalue, setPricevalue] = React.useState(0);
     //var [pricevalue2, setPricevalue2] = React.useState(0);

     const [belowdiffratesMF14avg, setBelowdiffratesMF14avg] = React.useState(0);
     const [belowdiffratesMF30avg, setBelowdiffratesMF30avg] = React.useState(0);
     const [belowdiffratesMF45avg, setBelowdiffratesMF45avg] = React.useState(0);
     const [belowdiffratesMF90avg, setBelowdiffratesMF90avg] = React.useState(0);
     const [belowdiffratesMF120avg, setBelowdiffratesMF120avg] = React.useState(0);
     const [belowdiffratesMF121avg, setBelowdiffratesMF121avg] = React.useState(0);


     const [headlights, setHeadlights] = React.useState([]);
///pagination...


const [currentPage66, setCurrentPage66] = React.useState(0);


function handlePageClick66({ selected: selectedPage}){
  setCurrentPage66(selectedPage);
}





const offset66 = currentPage66 * PER_PAGE;

const currentPageData66 = headlights
.slice(offset66, offset66 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount66 = Math.ceil(headlights.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////









     const [headlights2, setHeadlights2] = React.useState([]);
     ///pagination...


const [currentPage68, setCurrentPage68] = React.useState(0);


function handlePageClick68({ selected: selectedPage}){
  setCurrentPage68(selectedPage);
}





const offset68 = currentPage68 * PER_PAGE;

const currentPageData68 = headlights2
.slice(offset68, offset68 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount68 = Math.ceil(headlights2.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [headlights3, setHeadlights3] = React.useState([]);
///pagination...


const [currentPage70, setCurrentPage70] = React.useState(0);


function handlePageClick70({ selected: selectedPage}){
  setCurrentPage70(selectedPage);
}





const offset70 = currentPage70 * PER_PAGE;

const currentPageData70 = headlights3
.slice(offset70, offset70 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount70 = Math.ceil(headlights3.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [headlights4, setHeadlights4] = React.useState([]);
///pagination...


const [currentPage72, setCurrentPage72] = React.useState(0);


function handlePageClick72({ selected: selectedPage}){
  setCurrentPage72(selectedPage);
}





const offset72 = currentPage72 * PER_PAGE;

const currentPageData72 = headlights4
.slice(offset72, offset72 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount72 = Math.ceil(headlights4.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////\

     const [headlights5, setHeadlights5] = React.useState([]);
///pagination...


const [currentPage74, setCurrentPage74] = React.useState(0);


function handlePageClick74({ selected: selectedPage}){
  setCurrentPage74(selectedPage);
}





const offset74 = currentPage74 * PER_PAGE; // fix

const currentPageData74 = headlights5
.slice(offset74, offset74 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount74 = Math.ceil(headlights5.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [headlights6, setHeadlights6] = React.useState([]);

///pagination...


const [currentPage76, setCurrentPage76] = React.useState(0);


function handlePageClick76({ selected: selectedPage}){
  setCurrentPage76(selectedPage);
}





const offset76 = currentPage76 * PER_PAGE;

const currentPageData76 = headlights6
.slice(offset76, offset76 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount76 = Math.ceil(headlights6.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////



     const [greatgun14, setGreatgun14] = React.useState([]);
///pagination...


const [currentPage67, setCurrentPage67] = React.useState(0);


function handlePageClick67({ selected: selectedPage}){
  setCurrentPage67(selectedPage);
}





const offset67 = currentPage67 * PER_PAGE;

const currentPageData67 = greatgun14
.slice(offset67, offset67 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount67 = Math.ceil(greatgun14.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [greatgun30, setGreatgun30] = React.useState([]);
///pagination...


const [currentPage69, setCurrentPage69] = React.useState(0);


function handlePageClick69({ selected: selectedPage}){
  setCurrentPage69(selectedPage);
}





const offset69 = currentPage69 * PER_PAGE;

const currentPageData69 = greatgun30
.slice(offset69, offset69 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount69 = Math.ceil(greatgun30.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [greatgun45, setGreatgun45] = React.useState([]);
///pagination...


const [currentPage71, setCurrentPage71] = React.useState(0);


function handlePageClick71({ selected: selectedPage}){
  setCurrentPage71(selectedPage);
}





const offset71 = currentPage71 * PER_PAGE;

const currentPageData71 = greatgun45
.slice(offset71, offset71 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount71 = Math.ceil(greatgun45.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [greatgun90, setGreatgun90] = React.useState([]);

///pagination...


const [currentPage73, setCurrentPage73] = React.useState(0);


function handlePageClick73({ selected: selectedPage}){
  setCurrentPage73(selectedPage);
}





const offset73 = currentPage73 * PER_PAGE;

const currentPageData73 = greatgun90
.slice(offset73, offset73 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount73 = Math.ceil(greatgun90.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [greatgun120, setGreatgun120] = React.useState([]);
///pagination...


const [currentPage75, setCurrentPage75] = React.useState(0);


function handlePageClick75({ selected: selectedPage}){
  setCurrentPage75(selectedPage);
}





const offset75 = currentPage75 * PER_PAGE;

const currentPageData75 = greatgun120
.slice(offset75, offset75 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount75 = Math.ceil(greatgun120.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const [greatgun121, setGreatgun121] = React.useState([]);

     ///pagination...


const [currentPage77, setCurrentPage77] = React.useState(0);


function handlePageClick77({ selected: selectedPage}){
  setCurrentPage77(selectedPage);
}





const offset77 = currentPage77 * PER_PAGE;

const currentPageData77 = greatgun121
.slice(offset77, offset77 + PER_PAGE)
.map((item, index) => (

  <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   
            <Popup
              trigger={<td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td>}
              position="center"
              modal
              nested       
            >
  
  <div className="modal">
  
         
          <div className="header">West Manor</div>
          <div>
            
          
  
          <ul data-index={index}>
  <br/>
  <div className='borders'>
   <img className='modalin' src={image}></img>
   <br/>
   <br/>
   <br/>
   <br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Address: {item.address}, {item.townstate}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td><br/>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
   </div>
   </ul>
   
   
  
  </div>
          </div>
              
            </Popup>
          
   
   
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>List Price: {item.listprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Price Differential: {item.differential}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Price: {item.saleprice}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Days On Market: {item.DOM}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>County: {item.county}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Property Type: {item.propertytype}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Sale Date: {item.saledate}</td>
   <td className='inborder' ref={(_subtitle) => (subtitle = _subtitle)}>Description: {item.description}</td>
  
   </div>
   </ul>
  
   
   
  ));

 const pageCount77 = Math.ceil(greatgun121.length / PER_PAGE); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////




     
     async function marketflush21(e){ //this functions onClick...
     //  dateIndex21();
     // index21irene();

       const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
       const data = await req.json();
       //if (data.status ==='ok'){
         console.log(data) // all 15k objects... 
       
           let newArray = [...openarray21];
           console.log(newArray);
           console.log(newArray[0][1]); // correct...
           console.log(newArray[0][13]);
       
       
         
         let sales= [];
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
     
         let twentytwo = [
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
         
         
     
     
         //dateArray.slice(setDate, ...dateArray(setDate[91])); console.log(dateArray);
     
     
         for (let i = 0; i<data.length; i++){
     
           if (data[i].county === `${county2}` && data[i].townstate === `${town3}` && data[i].saleprice >= `${pricevalue3}` && data[i].saleprice < `${pricevalue4}` && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
             data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] || data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][55] ||data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] || data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] 
             || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] || data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75] || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83]
             || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] || data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] 
             || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] || data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113]
             || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] )){
             sales.push(data[i]);
             console.log(sales);
             if (data[i].DOM <= 14){
               fourteen.push(data[i]);
               console.log(fourteen);
               //fourteen[i].differential
               fourteen.sort((a, b) => a.saleprice - b.saleprice);
               setHeadlights(fourteen);
             }
             if (data[i].DOM > 14 && data[i].DOM <= 30){
               thirty.push(data[i]);
               thirty.sort((a, b) => a.saleprice - b.saleprice);
               setHeadlights2(thirty);
             }
             if (data[i].DOM > 30 && data[i].DOM <= 45){
               fortyfive.push(data[i]);
               fortyfive.sort((a, b) => a.saleprice - b.saleprice);
               setHeadlights3(fortyfive);
             }
             if (data[i].DOM > 45 && data[i].DOM <= 90){
               ninety.push(data[i]);
               console.log(ninety);
               ninety.sort((a, b) => a.saleprice - b.saleprice);
               setHeadlights4(ninety);
             }
             if (data[i].DOM > 90 && data[i].DOM <= 120){
               onetwenty.push(data[i]);
               onetwenty.sort((a, b) => a.saleprice - b.saleprice);
               setHeadlights5(onetwenty);
             }
             if (data[i].DOM > 120){
               onetwoone.push(data[i]);
               onetwoone.sort((a, b) => a.saleprice - b.saleprice);
               setHeadlights6(onetwoone);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM <= 14 ){
               great14.push(data[i]);
               console.log(great14);
               great14.sort((a, b) => a.saleprice - b.saleprice);
               setGreatgun14(great14);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
               great30.push(data[i]);
               great30.sort((a, b) => a.saleprice - b.saleprice);
               setGreatgun30(great30);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
               great45.push(data[i]);
               great45.sort((a, b) => a.saleprice - b.saleprice);
               setGreatgun45(great45);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
               great90.push(data[i]);
               great90.sort((a, b) => a.saleprice - b.saleprice);
               setGreatgun90(great90);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
               great120.push(data[i]);
               great120.sort((a, b) => a.saleprice - b.saleprice);
               setGreatgun120(great120);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 120){
               great121.push(data[i]);
               great121.sort((a, b) => a.saleprice - b.saleprice);
               setGreatgun121(great121);
             }
             
             
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
     
             const atabove14 =  Math.round((lengthgreat14 / sale14) * 100) || 0;
             const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100) || 0;
             const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100) || 0;
             const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100) || 0;
             const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100) || 0;
             const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100) || 0;

             document.getElementById('fraction14flush').innerHTML = `${lengthgreat14}` + '/' + `${sale14}`;
             document.getElementById('fraction30flush').innerHTML = `${lengthgreat30}` + '/' + `${sale30}`;
             document.getElementById('fraction45flush').innerHTML = `${lengthgreat45}` + '/' + `${sale45}`;
             document.getElementById('fraction90flush').innerHTML = `${lengthgreat90}` + '/' + `${sale90}`;
             document.getElementById('fraction120flush').innerHTML = `${lengthgreat120}` + '/' + `${sale120}`;
             document.getElementById('fraction121flush').innerHTML = `${lengthgreat121}` + '/' + `${sale121}`;
     
             
     
     
             document.getElementById('sales14flush').innerHTML = sale14;
             document.getElementById('sales30flush').innerHTML = sale30;
             document.getElementById('sales45flush').innerHTML = sale45;
             document.getElementById('sales90flush').innerHTML = sale90;
             document.getElementById('sales120flush').innerHTML = sale120;
             document.getElementById('sales121flush').innerHTML = sale121;
     
     
     
             document.getElementById('rates14flush').innerHTML = `${atabove14}%`;
             document.getElementById('rates30flush').innerHTML = `${atabove30}%`;
             document.getElementById('rates45flush').innerHTML = `${atabove45}%`;
             document.getElementById('rates90flush').innerHTML = `${atabove90}%`;
             document.getElementById('rates120flush').innerHTML = `${atabove120}%`;
             document.getElementById('rates121flush').innerHTML = `${atabove121}%`;
     
             let differential = 0;
             function add(item, counter, array){
              differential+=(item.differential); 
             }
             fourteen.forEach(add);
             console.log(differential);
     
             let differential2 = 0;
             function add2(item, counter, array){
               differential2+=(item.differential);
             }
             thirty.forEach(add2);
             console.log(differential);
             
             let differential3 = 0;
             
             function add3(item, counter, array){
               differential3+=(item.differential);
             }
     
             fortyfive.forEach(add3);
     
             let differential4 = 0;
             function add4(item, counter, array){
               differential4+=(item.differential);
             }
     
             ninety.forEach(add4);
     
             let differential5 = 0;
             function add5(item, counter, array){
               differential5+=(item.differential);
             }
     
             onetwenty.forEach(add5); 
     
             let differential6 = 0;
             function add6(item, counter, array){
               differential6+=(item.differential);
             }
     
             onetwoone.forEach(add6); 
             console.log(differential6);

             let differential7 = 0;
             function add7(item, counter, array){
               differential7+=(item.differential);
             }
     
             great14.forEach(add7); 
             console.log(differential7);

             let differential8 = 0;
             function add8(item, counter, array){
               differential8+=(item.differential);
             }
     
             great30.forEach(add8); 
             console.log(differential8);

             let differential9 = 0;
             function add9(item, counter, array){
               differential9+=(item.differential);
             }
     
             great45.forEach(add9); 
             console.log(differential9);

             let differential10 = 0;
             function add10(item, counter, array){
               differential10+=(item.differential);
             }
     
             great90.forEach(add10); 
             console.log(differential10);

             let differential11 = 0;
             function add11(item, counter, array){
               differential11+=(item.differential);
             }
     
             great120.forEach(add11); 
             console.log(differential11);

             let differential12 = 0;
             function add12(item, counter, array){
               differential12+=(item.differential);
             }
     
             great121.forEach(add12); 
             console.log(differential12);

             const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
             })
     
     
            
             // console.log(saleprice);
            let averagediff14 = formatter.format(Math.round( differential / sale14 ) || 0);
            let averagediff30 = formatter.format(Math.round( differential2 / sale30 ) || 0);
            let averagediff45 = formatter.format(Math.round( differential3 / sale45 ) || 0);
            let averagediff90 = formatter.format(Math.round( (differential4) / sale90 ) || 0);
            let averagediff120 = formatter.format(Math.round( differential5 / sale120 ) || 0);
            let averagediff121 = formatter.format(Math.round( differential6 / sale121 ) || 0);

            
            setBelowdiffratesMF14avg(formatter.format(Math.round(differential7 / lengthgreat14)) || 0);
            setBelowdiffratesMF30avg(formatter.format(Math.round(differential8 / lengthgreat30)) || 0);
            setBelowdiffratesMF45avg(formatter.format(Math.round(differential9 / lengthgreat45)) || 0);
            setBelowdiffratesMF90avg(formatter.format(Math.round(differential10 / lengthgreat90)) || 0);
            setBelowdiffratesMF120avg(formatter.format(Math.round(differential11 / lengthgreat120)) || 0);
            setBelowdiffratesMF121avg(formatter.format(Math.round(differential12 / lengthgreat121)) || 0);


     
             document.getElementById('duff14flush').innerHTML = averagediff14;
             document.getElementById('duff30flush').innerHTML = averagediff30;
             document.getElementById('duff45flush').innerHTML = averagediff45;
             document.getElementById('duff90flush').innerHTML = averagediff90;
             document.getElementById('duff120flush').innerHTML = averagediff120;
             document.getElementById('duff121flush').innerHTML = averagediff121;
     
             //document.getElementById('calvalue').innerHTML = `${date}`;
     
     
           }
         }
       }



       /////////////////////////////////////////////////


      // React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
       // entireArrayIndex();
       // fetch('http://localhost:3000/singlefamily22')
       //  .then(response => response.json())
        // .then(data => {
         //  console.log(data) // all 15k objects...
          // let sales22 = [];
       //for (let i = 0; i<data.length; i++){
       //  if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
         //  sales22.push(data[i]);
           //console.log(sales);
          
                 //  let html = '';
                   
                 //  const settings = {
                 //   dots: true,
                  //  infinite: true,
                  //  speed: 500,
                  //  slidesToShow: 1,
                  //  slidesToScroll: 1,
                  //  autoplay: true,
                   // fade: true
                //  };

                  // sales22.forEach((item)=> {
                  //  html += `<Carousel fade {...settings}>
                  //  <Carousel.Item>
                   //   <img
                     //   src=${image}
                      //  alt="First slide"
                    //  />
                    //  <Carousel.Caption>
                     //  <h3>I am going outside to play soccer with my friends</h3>
                     //   <p> 
                      //  MLS#: ${item.MLS}
                      //  Status: ${item.status}
                      //  Address: ${item.address}
                      //  TownState: ${item.townstate}
                     //   description: ${item.description}
                     //   List Price: ${item.listprice}
                     //   Sale Price: ${item.saleprice}
                      //  DOM: ${item.DOM}
                      //  Differential: ${item.differential}
                      //  County: ${item.county}
                      //  Property Type: ${item.propertytype}
                       //  Sale Date: ${item.saledate}
                      // </p>
                     // </Carousel.Caption>
                   // </Carousel.Item>
                  //  </Carousel>`;

                 //  })

                 //  document.getElementById('kristen').innerHTML = html; 

                   
                  
     
              //   }
            
             //setData(JSON.stringify(data));
             //   }

              //  });
       //  }, [pricerangecounty1, pricerangetown1]); 



         async function PopUp(e, props){ //this functions onClick...
          dateIndex21();
          const req = await fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
          const data = await req.json();
          //if (data.status ==='ok'){
            console.log(data) // all 15k objects... 

            let sales22 = [];
            for (let i = 0; i<data.length; i++){
              if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
                sales22.push(data[i]);
                //console.log(sales);
               
                        let html = '';
                        
     
                        sales22.forEach((item)=> {
                         html += `${item.address}`;
     
                        })
     
                        document.getElementById('popup').innerHTML = html; 
     
        
        
              }
            }
          }
   
   



        // React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
        //  entireArrayIndex();
         // fetch('http://localhost:3000/singlefamily22')
        //   .then(response => response.json())
         //  .then(data => {
         //    console.log(data) // all 15k objects...
         //    let sales22 = [];
        // for (let i = 0; i<data.length; i++){
         //  if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
          //   sales22.push(data[i]);
             //console.log(sales);

          //   const slides = [
          //   {url: image, title: 'Beach'},
          //    {url: image, title: 'Boat'},
          //   {url: image, title: 'Forest'},
          //    {url: image, title: 'City'},
          //    {url: image, title: 'Italy'},
         // ];

                 // let html = '';

                  //   const containerStyles = {
                  //    width: '500px',
                   //   height: '280px',
                   //   margin: '0 auto'
                 // }
                     
  
                     //sales22.forEach((item)=> {
                     // html += ` <div4>
                    //  <h5>Hello monsterlessons</h5>
                    //  <div5 style={containerStyles}>
                     // <ImageSlider slides={slides}/>
                 // </div5>
                //  </div4>`;
                //}
                    // )
  
                    // document.getElementById('kristen').innerHTML = html; 
  
                     
                    
       
                 //  }
              
               //setData(JSON.stringify(data));
                //  }
  
                //  });
         //  }, [pricerangecounty1, pricerangetown1]);
         
     
       
   
   
   
     
         const [show, setShow] = React.useState(true);
         //const navigate = useNavigate();
  
  
  
         function theShow(){
          setShow(false);
        }
  
        function showBack(){
          setShow(true);
        }
  
        function goBack(){
          window.history.back();
        }
  
      
  
  
  
  
  
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
  
                    const [modalIsOpen, setIsOpen] = React.useState(false);
                    
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

  


   
   
      
   
       return (show) ? ( 
         <>
  <div className='background'>
<a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '75px', top: '45px' }}href='/activesinglefamily' {...buttonDHoverProps}>{buttonDIsHovering ? 'Click here to applyscience' : 'Single Family'}</a>
  <a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '310px', top: '45px' }}href="/active" {...buttonEHoverProps}>{buttonEIsHovering ? 'Click here to applyscience' : 'MultiFamily'}</a>
  <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '470px', top: '20px', width: '317px', height: '157px', borderRadius: '50%', background: 'rgb(16, 16, 16)', border: '3.5px solid rgb(34,34,34)' }}></div>
  <img src={NeilWhite} width={255} height={350} style={{zIndex: '7', position: 'absolute', left: '500px', top: '54px' }} />
  <div className='titlewater' style={{zIndex: '7', position: 'absolute', left: '475px', top: '190px' }}>West Enterprises</div>
  <a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '815px', top: '45px' }}href='/activecondo' {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here to Create your Account' : 'Condominium'}</a>
  <a className='fontnav' style={{zIndex: '7', position: 'absolute', left: '1050px', top: '45px' }}href='/activecommercial' {...buttonCHoverProps}>{buttonCIsHovering ? 'Click here to applyscience' : 'Commercial'}</a>

  </div>    
   <div className='innerelementback64'>
   <img id='ntdoubleu297' style={{height: '280px', width: '950px', left: '200px', top: '250px', position: 'absolute' }}  src={matheus} alt='math' />
   <div className='hashh65'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '250px' }}>Single Family</div>
   <div className='hashh65'  style={{zIndex: '7', position: 'absolute', left: '1187px', top: '250px' }}>Buyer</div>
     <a className='innerelementwater64' style={{zIndex: '7', position: 'absolute', left: '45px', top: '275px' }}href='/home'>Home JS</a>
     <a className='innerelementwater64' style={{zIndex: '7', position: 'absolute', left: '45px', top: '325px' }}href="/activewatersinglefamily">Active</a>
     <a className='innerelementwater64' style={{zIndex: '7', position: 'absolute', left: '45px', top: '375px' }}href='/alldatasinglefamily'>Seller</a>
     <br/>
     <a className='innerelementwater64' style={{zIndex: '7', position: 'absolute', left: '1160px', top: '275px' }}href='/singlefamilybuyer'>Suburb</a>
     <a className='innerelementwater64' style={{zIndex: '7', position: 'absolute', left: '1160px', top: '325px' }}href="/ctg">Female</a>
     <div>
          <ul>
        <li style={{zIndex: '7', position: 'absolute', left: '1175px', top: '370px' }}>
          <a className='innerelementwater64sm' href="/ctgsinglefamily">Female Seller</a>
          </li>
          <li style={{zIndex: '7', position: 'absolute', left: '1175px', top: '395px' }}>
          <a className='innerelementwater64sm' href="/ctg">Female Buyer</a>
        </li>
         </ul>
         </div>
     <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '475px' }} href='#populatequote11'>Price Range</a>
     <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '501px' }} href='#marketANThashh'>Market ANT</a>
     <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '526px' }} href='#mozart'>Business Planning</a>
     <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '72px', top: '552px' }} href='#townhash'>Town</a>
     </div>
     <div className='waterbackground64'></div>
   <h5 id='headerstatetop22' style={{zIndex: '7', position: 'absolute', left: '820px', top: '425px' }}></h5>
   <div className='seperator64'></div>
   <div className='awater64' style={{zIndex: '7', position: 'absolute', left: '430px', top: '531px' }}>Previous 5 Month Market Condition Sales</div>
   <h2 className='yeartitle641' style={{zIndex: '7', position: 'absolute', left: '905px', top: '510px' }}>2022</h2>
   <br/>
   <br/>
   <Popup trigger={<a id ='inject' className='awater64' href='#/inject' style={{zIndex: '7', position: 'absolute', left: '820px', top: '605px' }}></a>}
   position='center' modal nested>
{close => (
    
      <div className="modal">
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
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '620px' }}>Listings Sold - ____________</div>
   <a id ='harley' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '1075px', top: '605px' }}></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '990px', top: '620px' }}>Avg. Sale____________</div>
   <a id ='sultan' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '680px' }} ></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '695px' }}>Avg. DOM - ______________</div>
   <a id ='oj' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '1075px', top: '680px' }}></a>
   <div  className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '990px', top: '695px' }}>Avg. List___________</div>
    <Popup trigger={<a id ='threebears'  title={titleavgdiff} className='awater64' href='#/threebears' style={{zIndex: '7', position: 'absolute', left: '820px', top: '755px' }}></a>}
    position='center' modal nested>
 {close => (
     
       <div className="modal">
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
  <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '770px' }}>sale price rate_____________</div> 
   <a id='lordof' href='#/lordof' className='awater64' style={{zIndex: '7', position: 'absolute', left: '1105px', top: '755px' }}></a>   
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '990px', top: '770px' }}>Avg. Differential___________</div>
   <a id ='min' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '770px', top: '830px' }}></a>
   <a id ='max' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '870px', top: '830px' }}></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '845px' }}>low - high</div>
   <br/>
   <br/>
   <div id="container" style={{zIndex: '7', position: 'absolute', left: '300px', top: '1600px' }}>
   </div>
   <br/>
   <br/>
   <br/>
   <h5 id='headerstatetop21' className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '230px', top: '425px' }}></h5>
   
   <h2 className='yeartitle641' style={{zIndex: '7', position: 'absolute', left: '305px', top: '510px' }}>2021</h2>
   <br/>
   <br/>
   <Popup trigger={<a id='inject21' className='awater64' href='#/inject21' style={{zIndex: '7', position: 'absolute', left: '215px', top: '605px' }}></a>}
   position='center' modal nested>
{close => (
    
      <div className="modal">
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
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '620px' }}>Listings Sold - ______________</div>
   <a id ='harley21' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '475px', top: '605px' }}></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '400px', top: '620px' }}>Avg. Sale_____________</div>
   <a id ='sultan21' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '215px', top: '680px' }} ></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '695px' }}>Avg. DOM - _______________</div>
   <a id ='oj21' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '475px', top: '680px' }}></a>
   <div  className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '400px', top: '695px' }}>Avg. List_____________</div>
  <Popup trigger={<a id ='threebears21' title={titleavgdiff2} href='#/threebears21' className='awater64' style={{zIndex: '7', position: 'absolute', left: '215px', top: '755px' }}></a>}
    position='center' modal nested>
{close => (
   
     <div className="modal">
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
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '770px' }}>sale price rate - ___________</div>
   <a id ='lordof21' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '755px' }}></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '400px', top: '770px' }}>Avg. Differential_____________</div>
   <a id ='min21' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '150px', top: '830px' }}></a>
   <a id ='max21' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '260px', top: '830px' }}></a>
   <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '845px' }}>low - high</div>
   <br/>
   <br/>
    <select style={{zIndex: '7', position: 'absolute', left: '990px', top: '850px' }}
    placeholder='County'
    value={county}
    onChange={(e) => setCounty(e.target.value)}
    >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '850px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '990px', top: '860px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '990px', top: '870px' }}
          placeholder='State'
          value={selectedState1}
          onChange={(e) => setSelectedState1(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '870px' }}>--Choose State--</option>
            {availableState1?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '870px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '990px', top: '890px' }}
          placeholder='Town'
          value={towntop}
          onChange={(e) => setTowntop(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '890px' }}>--Choose Town--</option>
            {availableTowns1?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '890px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
       
        
        <select id='datetopvalue' style={{zIndex: '7', position: 'absolute', left: '990px', top: '910px' }} value={datetop} onChange={(e)=> setDatetop(e.target.value)}> 
       <option>---Choose Date---</option>
       {twentytwo?.map((e, key) => {
   return (
     <option value={e} key={key}>
       {e}
     </option>
   );
       })}
       </select>
   <br/>
   <br/>
       <input style={{zIndex: '7', position: 'absolute', left: '990px', top: '800px' }}type='number' onChange={(e)=> setPrice1(e.target.value)}/>
       <input style={{zIndex: '7', position: 'absolute', left: '990px', top: '825px' }}type='number' onChange={(e)=> setPrice2(e.target.value)}/>
   
     <br/>
     <br/>
     <br/>
     <div id='townhash' style={{zIndex: '7', position: 'absolute', left: '75px', top: '900px', height: '3px' }}>_______________________________________________________________________</div>
     <br/>
     <br/>
     <br/>
     <Button className='button64' style={{zIndex: '7', position: 'absolute', left: '860px', top: '885px' }}variant='dark' type="button" value='Submit' onClick={()=> {brucewayne22a(); brucewayne22b(); brucewayne21a(); brucewayne21b();}}>Apply Science</Button>
         <br/>
         <h2 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px',  top: '1000px' }}>Price Range</h2>
         <h2 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '240px', top: '1000px' }}>2021</h2>
         <h2 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1000px' }}>2022</h2>
         <h2 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1000px' }}>Avg. DOM 2022</h2>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1075px' }}>$100k - $349k</div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1075px' }}>______________</div>
   <Popup trigger={<a id ='threek21' className='awater64' href='#/threek21' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1060px' }}></a>}
   position='center' modal nested>
{close => (
  
    <div className="modal">
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
  <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1075px' }}>______________</div>     
  <Popup trigger={<a id ='threek' className='awater64' href='#/threek' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1060px' }}></a>}
    position='center' modal nested>
 {close => (
   
     <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1075px' }}>______________</div>
         <a id ='s3k' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1060px' }}></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1075px' }}>______________</div>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1150px' }}>$350k - $499k</div>
   <Popup trigger={<a id ='fourk' className='awater64' href='#/fourk' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1135px' }}></a>}
   position='center' modal nested>
{close => (
  
    <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1150px' }}>______________</div>
  <Popup trigger={<a id ='fourk21' className='awater64' href='#/fourk21' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1135px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1150px' }}>______________</div>
         <a id ='s4k' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1135px' }}></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1150px' }}>______________</div>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1225px' }}>$500k - $749k</div>         
   <Popup trigger={<a id='sevenk21' className='awater64' href='#/sevenk21' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1210px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1225px' }}>______________</div>
   <Popup trigger={<a id ='sevenk' className='awater64' href='#/sevenk' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1210px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1225px' }}>______________</div>
         <a id ='s7k' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1210px' }}></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1225px' }}>______________</div>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1300px' }}>$750k +</div>      
  <Popup trigger={<a id ='sevenfivek21' className='awater64' href='#/sevenfivek21' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1285px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1300px' }}>______________</div> 
       
   <Popup trigger={<a id ='sevenfivek' className='awater64' href='#/sevenfivek' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1285px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1300px' }}>______________</div>
         <a id ='s75k' href='#' className='awater64' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1285px' }}></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1300px' }}>______________</div>
         <br/>
         <br/>
         <select style={{zIndex: '7', position: 'absolute', left: '75px', top: '1335px' }}
          placeholder='County'
          value={pricerangecounty1}
          onChange={(e) => setPricerangecounty1(e.target.value)}
          >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1335px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1335px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '75px', top: '1355px' }}
          placeholder='State'
          value={selectedState2}
          onChange={(e) => setSelectedState2(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '75px', top: '1355px' }}>--Choose State--</option>
            {availableState2?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '75px', top: '1345px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '225px', top: '1335px' }}
          placeholder='Town'
          value={pricerangetown1}
          onChange={(e) => setPricerangetown1(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '275px', top: '1335px' }}>--Choose Town--</option>
            {availableTowns2?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '275px', top: '1335px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
         <br/>
         <br/>
         <Button className='button64' style={{zIndex: '7', position: 'absolute', left: '217px', top: '1357px' }}variant='dark' type="button" value='Submit' onClick={()=> {sealteam1(); sealteam2(); sealteam3(); sealteam4(); straitofhormuz5();}}>Apply Science</Button>
   <br/>
   <br/>
   <img style={{height: '360px', width: '570px', left: '55px', top: '1415px', position: 'absolute' }}  src={chicago} alt='chicagowheel' />
   <br/>
   <br/>
   <div id = 'statusx' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1500px' }}></div>
  
         <br/>
         <br/>
         <div className='fontwater64' id='DOMTotalsalesinnerElement' style={{zIndex: '7', position: 'absolute', left: '88px', top: '1425px'}}></div>
         <div className='fontwater64' id='DOM85innerElement' style={{zIndex: '7', position: 'absolute', left: '88px', top: '1450px'}}></div>
         <a></a>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1806px' }}>1/1/2021 - 3/31/2021:</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '240px', top: '1781px' }}>sales</div>
         <a></a>
         <Popup trigger={<a id='quarterly' className='awater64' href='#/quarterly' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1806px' }} ></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount80}
          onPageChange={handlePageClick80}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData80}
       
      </div> 
    </div>
  )}
 </Popup>      
         <a></a>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '310px', top: '1781px' }}>at/above rate</div>
         <Popup trigger={<a id='catchmaxmil' className='awater64' title={popquoteJan} href='#/catchmaxmil' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1806px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount81}
          onPageChange={handlePageClick81}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData81}
       
      </div> 
    </div>
  )}
 </Popup>      
         <div ></div>
         <a></a>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '435px', top: '1781px' }}>differential</div>
         <div id='lordof2' className='awater64' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1806px' }}></div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1781px' }}>DOMavg</div>
         <div id='sultan2' className='awater64' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1806px' }}></div>
        <br/>
        <br/>
        <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1856px' }}>4/1/2021 - 6/30/2021:</div>
         <a></a>
         <Popup trigger={<a id='quarterly21' className='awater64' href='#/quarterly21' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1856px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount82}
          onPageChange={handlePageClick82}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData82}
       
      </div> 
    </div>
  )}
 </Popup>      
         <a></a>
         <Popup trigger={<a id='catchmaxmil21' className='awater64' title={popquoteApril} href='#/catchmaxmil21' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1856px' }} ></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount83}
          onPageChange={handlePageClick83}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData83}
       
      </div> 
    </div>
  )}
 </Popup>      
         <div ></div>
         <a></a>
         <div id='lordof212'className='awater64' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1856px' }}></div>
         <div id='sultan212'className='awater64' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1856px' }}></div>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1906px' }}>7/1/2021 - 9/30/2021:</div>
         <a></a>
         <Popup trigger={<a id='quarterly20' className='awater64' href='#/quarterly20' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1906px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount84}
          onPageChange={handlePageClick84}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData84}
       
      </div> 
    </div>
  )}
 </Popup>      
         <a></a>
         <Popup trigger={<a id='catchmaxmil20' className='awater64' title={popquoteJuly} href='#/catchmaxmil20' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1906px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount85}
          onPageChange={handlePageClick85}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData85}
       
      </div> 
    </div>
  )}
 </Popup>      
         <div ></div>
         <a></a>
         <div id='lordof20' className='awater64' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1906px' }}></div>
         <div id='sultan20' className='awater64' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1906px' }}></div>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1956px' }}>10/1/2021 - 12/31/2021:</div>
         <a></a>
         <Popup trigger={<a id='quarterly19' className='awater64' href='#/quarterly19' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1956px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount86}
          onPageChange={handlePageClick86}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData86}
       
      </div> 
    </div>
  )}
 </Popup>   
         <a></a>
         <Popup trigger={<a id='catchmaxmil19' className='awater64' title={popquoteOctober} href='#/catchmaxmil19' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1956px' }} ></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount87}
          onPageChange={handlePageClick87}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData87}
       
      </div> 
    </div>
  )}
 </Popup>   
         <a></a>
         <div id='lordof211' className='awater64' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1956px' }}></div>
         <div id='sultan211' className='awater64' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1956px' }}></div>
         <br/>
         <br/>
         <br/>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '41px', top: '915px' }} href='#mozart'>Business Planning</a>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '41px', top: '935px' }} href='#marketANThashh'>Market ANT</a>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '41px', top: '955px' }} href='#populatequote11'>Price Range</a>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '41px', top: '975px' }} href='#ntdoubleu297'>Nav297</a>
         <h5  className='awater64' style={{zIndex: '7', position: 'absolute', left: '160px', top: '915px' }}>Previous 5 Month Market Condition Sales</h5>
     <h5 className='awater64' style={{zIndex: '7', position: 'absolute', left: '731px', top: '915px'}}>Previous 5 Month Market Condition Sales 2022</h5>
     <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '977px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '936px', top: '977px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1115px', top: '977px' }}>differential</div>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1000px' }}>0-14 days</a>
         <a></a>
    <Popup trigger={<a id ='s14' className='a1water64' href='#/s14' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1000px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
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
         <div id='fr14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1000px' }}></div>
         <a></a>
   <Popup trigger={<a id='r14' title={totallessdiff14} href='#/r14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1000px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <div id='d14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1000px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1075px' }}>15-30 days</a>
         <a></a>
  <Popup trigger={<a id ='s30' className='a1water64' href='#/s30' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1075px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
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
         <a></a>
         <div id='fr30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1075px' }}></div>
         <a></a>
  <Popup trigger={<a id='r30' title={totallessdiff30} href='#/r30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1075px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
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
         <a></a>
         <div id='d30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1075px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1150px' }}>31-45 days</a>
         <a></a>
   <Popup trigger={<a id ='s45' className='a1water64' href='#/s45' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1150px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <a></a>
         <div id='fr45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1150px' }}></div>
         <a></a>
   <Popup trigger={<a id='r45' title={totallessdiff45} href='#/r45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1150px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <a></a>
         <div id='d45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1150px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1225px' }}>46-90 days</a>
         <a></a>
   <Popup trigger={<a id ='s90' className='a1water64' href='#/s90' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1225px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
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
         <a></a>
         <div id='fr90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1225px' }}></div>
         <a></a>
   <Popup trigger={<a id='r90' title={totallessdiff90} href='#/r90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1225px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount19}
          onPageChange={handlePageClick19}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData19}
       
      </div> 
    </div>
  )}
 </Popup>            
         <a></a>
         <div id='d90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1225px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1300px' }}>91-120 days</a>
         <a></a>
   <Popup trigger={<a id ='s120' className='a1water64' href='#/s120' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1300px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount20}
          onPageChange={handlePageClick20}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData20}
       
      </div> 
    </div>
  )}
 </Popup>       
         <a></a>
         <div id='fr120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1300px' }}></div>
         <a></a>
   <Popup trigger={<a id='r120' title={totallessdiff120} href='#/r120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1300px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount21}
          onPageChange={handlePageClick21}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData21}
       
      </div> 
    </div>
  )}
 </Popup>       
         <a></a>
         <div id='d120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1300px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1375px' }}>121+ days</a>
         <a></a>
   <Popup trigger={<a id ='s121' className='a1water64' href='#/s121' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1375px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount22}
          onPageChange={handlePageClick22}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData22}
       
      </div> 
    </div>
  )}
 </Popup>        
         <a></a>
         <div id='fr121' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1375px' }}></div>
         <a></a>
  <Popup trigger={<a id='r121' title={totallessdiff121} href='#/r121' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1375px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount23}
         onPageChange={handlePageClick23}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData23}
      
     </div> 
   </div>
 )}
</Popup>        
         <a></a>
         <div id='d121' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1375px' }}></div>
         <br/>
     <br/>
     <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '1400px' }}>----------------------------------------------</div>
     <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1400px' }}>----------------------------------------------</div>
       <br/>
       <br/>
       <select style={{zIndex: '7', position: 'absolute', left: '900px', top: '1450px' }}
          placeholder='County'
          value={county3}
          onChange={(e) => setCounty3(e.target.value)}
          >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '900px', top: '1450px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '900px', top: '1450px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '900px', top: '1470px' }}
          placeholder='State'
          value={selectedState3}
          onChange={(e) => setSelectedState3(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '900px', top: '1470px' }}>--Choose State--</option>
            {availableState3?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '900px', top: '1470px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '900px', top: '1490px' }}
          placeholder='Town'
          value={town2}
          onChange={(e) => setTown2(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '900px', top: '1490px' }}>--Choose Town--</option>
            {availableTowns3?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '900px', top: '1490px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
       <br/>
       <br/>
       <br/>
       <div id='kristen' style={{zIndex: '7', position: 'absolute', left: '50px', top: '1470px', width: '18rem'}}></div>
       <br/>
       <br/>
      
       <h5 className='awater64' id='populatequote11' style={{zIndex: '7', position: 'absolute', left: '715px', top: '1380px'}}>Previous 5 Month Market Condition Sales 2022</h5>
       <br/>
       <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '1045px', top: '1442.5px', width: '76px', height: '30.5px', borderRadius: '31%', background: 'rgb(135, 135, 135)', border: '3.5px solid rgb(64, 64, 64)' }}></div>
       <div id='avgDOMpopulate' className='a12water64' title={avgsalesavg} style={{zIndex: '7', position: 'absolute', left: '1060px', top: '1450.5px' }}></div>
       <br/>
       <br/>
       <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '1130px', top: '1442.5px', width: '126px', height: '31.5px', borderRadius: '31%', background: 'rgb(135, 135, 135)', border: '3.5px solid rgb(64, 64, 64)' }}></div>
       <div id='avgListpopulate' className='a12water64' title={listsaleslist} style={{zIndex: '7', position: 'absolute', left: '1145px', top: '1450.5px' }}></div>
       <br/>
       <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '1130px', top: '1480px', width: '126px', height: '31.5px', borderRadius: '31%', background: 'rgb(135, 135, 135)', border: '3.5px solid rgb(64, 64, 64)' }}></div>
       <div id='avgSalepopulate' className='a12water64' title={salesalessale} style={{zIndex: '7', position: 'absolute', left: '1145px', top: '1488px' }}></div>

       <input style={{zIndex: '7', position: 'absolute', left: '700px', top: '1450px'}} type='number' onChange={(e)=> setPricevalue(e.target.value)}/>
     <input style={{zIndex: '7', position: 'absolute', left: '700px', top: '1470px'}}type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
     <Button id='benjamin' className='button64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1500px'}} variant='dark' type="button" value='Submit' onClick={() => {populateQuote(); DOM85PopulateQuote(); DOM85AbovePopulateQuote(); sealteam5(); sealteam6(); zerodark30(); jack10suit();}}>Apply Science</Button>
     <div id='DOM85populatequote' className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '835px', top: '1515px'}}></div>
     <div id='DOM85abovepopulatequote' className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '835px', top: '1530px'}}></div>
     <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1575px' }}>0-14 days</a>
         <a></a>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1550px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '936px', top: '1550px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1115px', top: '1550px' }}>differential</div>
  <Popup trigger={<a id ='sales14' className='a1water64' href='#/sales14' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1575px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount24}
         onPageChange={handlePageClick24}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData24}
      
     </div> 
   </div>
 )}
</Popup>     
         <a></a>
         <div id='fraction14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1575px' }}></div>
         <a></a>     
   <Popup trigger={<a id='rates14' title={belowdiffrates14avg} href='#/rates14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1575px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount25}
          onPageChange={handlePageClick25}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData25}
       
      </div> 
    </div>
  )}
 </Popup>    
         <a></a>
         <div id='duff14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1575px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1650px' }}>15-30 days</a>
         <a></a> 
  <Popup trigger={<a id ='sales30' className='a1water64' href='#/sales30' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1650px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount26}
         onPageChange={handlePageClick26}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData26}
      
     </div> 
   </div>
 )}
</Popup>    
         <a></a>
         <div id='fraction30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1650px' }}></div>
         <a></a>
   <Popup trigger={<a id='rates30' title={belowdiffrates30avg} href='#/rates30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1650px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount27}
          onPageChange={handlePageClick27}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData27}
       
      </div> 
    </div>
  )}
 </Popup>    
         <a></a>
         <div id='duff30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1650px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1725px' }}>31-45 days</a>
         <a></a>  
  <Popup trigger={<a id ='sales45' className='a1water64' href='#/sales45' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1725px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount28}
         onPageChange={handlePageClick28}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData28}
      
     </div> 
   </div>
 )}
</Popup>    
         <a></a>
         <div id='fraction45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1725px' }}></div> 
         <a></a>
  <Popup trigger={ <a id='rates45' title={belowdiffrates45avg} href='#/rates45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1725px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount29}
         onPageChange={handlePageClick29}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData29}
      
     </div> 
   </div>
 )}
</Popup>    
        
         <a></a>
         <div id='duff45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1725px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1800px' }}>46-90 days</a>
         <a></a>      
  <Popup trigger={<a id='sales90' className='awater64' href='#/sales90' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1800px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount30}
         onPageChange={handlePageClick30}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData30}
      
     </div> 
   </div>
 )}
</Popup>    
         <a></a>
         <div id='fraction90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1800px' }}></div>
         <a></a>
   <Popup trigger={<a id='rates90' title={belowdiffrates90avg} href='#/rates90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1800px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount31}
          onPageChange={handlePageClick31}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData31}
       
      </div> 
    </div>
  )}
 </Popup>    
         <a></a>
         <div id='duff90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1800px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1875px' }}>91-120 days</a>
         <a></a>
    <Popup trigger={<a id ='sales120' className='a1water64' href='#/sales120' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1875px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount32}
           onPageChange={handlePageClick32}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData32}
        
       </div> 
     </div>
   )}
  </Popup>    
         <a></a>
         <div id='fraction120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1875px' }}></div>
         <a></a>
   <Popup trigger={<a id='rates120' title={belowdiffrates120avg} href='#/rates120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1875px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount33}
          onPageChange={handlePageClick33}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData33}
       
      </div> 
    </div>
  )}
 </Popup>    

         <a></a>
         <div id='duff120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1875px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1950px' }}>121+ days</a>
         <a></a>
  <Popup trigger={<a id ='sales121' className='a1water64' href='#/sales121' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1950px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount35}
         onPageChange={handlePageClick35}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData35}
      
     </div> 
   </div>
 )}
</Popup>    
         <a></a>
         <div id='fraction121' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1950px' }}></div>
         <a></a>  
         <Popup trigger={<a id='rates121' title={belowdiffrates121avg} href='#/rates121' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1950px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount34}
          onPageChange={handlePageClick34}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData34}
       
      </div> 
    </div>
  )}
 </Popup>   
         <a></a>
         <div id='duff121' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1950px' }}></div>
         <br/>
         <br/> 
         <br/>
       <select style={{zIndex: '7', position: 'absolute', left: '100px', top: '1975px' }}
          placeholder='County'
          value={county4}
          onChange={(e) => setCounty4(e.target.value)}
          >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1975px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1975px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '100px', top: '2000px' }}
          placeholder='State'
          value={selectedState4}
          onChange={(e) => setSelectedState4(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '100px', top: '2000px' }}>--Choose State--</option>
            {availableState4?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '100px', top: '2000px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '100px', top: '2025px' }}
          placeholder='Town'
          value={town}
          onChange={(e) => setTown(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '100px', top: '2025px' }}>--Choose Town--</option>
            {availableTowns4?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '100px', top: '2025px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
       <br/>
       <br/>
       <input style={{zIndex: '7', position: 'absolute', left: '100px', top: '2050px' }}type='number' onChange={(e)=> setPricevalue(e.target.value)}/>
       <input style={{zIndex: '7', position: 'absolute', left: '305px', top: '2050px' }}type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
       <Button className='button64' style={{zIndex: '7', position: 'absolute', left: '510px', top: '2040px' }}variant='dark' type="button" value='Submit' onClick={marketANT}>Apply Science</Button>
       <a id='mozart' className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '235px', top: '2025px' }} href='#ntdoubleu297'>Nav297</a>
        <a id='marketANThashh' className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '295px', top: '2025px' }} href='#townhash'>Town</a>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '345px', top: '2025px' }} href='#mozart'>Business Planning</a>
         <br/>
   
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2150px' }}>-|-Example from May/June 2022 -gridlines1/7 -|-</div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2100px', width: '1100px', height: '300px', borderRadius: '0%', background: 'rgb(120, 120, 120)' }}></div>
         <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2100px'}}>[Year]</h5>
         <div id='salespermonthavg' className='marketantfont264' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2040px'}}></div>
         <div id='updownperc' className='marketantfont264' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1980px'}}></div>
         <div id='yearCurrent' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2200px' }}></div>
         <div id='yearCall' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2300px' }}></div>
         <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2100px'}}>$June</h5>
         <div id='currentmonth1' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2200px' }}></div>
         <div id='month1' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2300px' }}></div>
         <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2100px'}}>$July</h5>
         <div id='currentmonth2' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2200px' }}></div>
         <div id='month2' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2300px' }}></div>
         <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2100px'}}>$August</h5>
         <div id='currentmonth3' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2200px' }}></div>
         <div id='month3' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2300px' }}></div>
         <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2100px'}}>$September</h5>
         <div id='currentmonth4' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2200px' }}></div>
         <div id='month4' className='a1water64ant' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2300px' }}></div>
         <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2100px'}}>Total for Year</h5>
         <div  id='totalyearANT' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2200px' }}></div>
         <div id='yearPrevious' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2300px' }}></div>
         <br/>
         <br/>
         <br/>
         <a id='mozart' className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '100px', top: '2450px' }} href='#ntdoubleu297'>Nav297</a>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '170px', top: '2450px' }} href='#townhash'>Town</a>
         <a className='hashh64'  style={{zIndex: '7', position: 'absolute', left: '240px', top: '2450px' }} href='#populatequote11'>Price Point</a>
         <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '2600px' }}id='contenttest'></div>
         <br/>
         <br/> 
   
         <br/>
       <select style={{zIndex: '7', position: 'absolute', left: '250px', top: '2500px' }}
          placeholder='County'
          value={county2}
          onChange={(e) => setCounty2(e.target.value)}
          >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '250px', top: '2500px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '250px', top: '2500px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '400px', top: '2500px' }}
          placeholder='State'
          value={selectedState5}
          onChange={(e) => setSelectedState5(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '400px', top: '2500px' }}>--Choose State--</option>
            {availableState5?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '400px', top: '2500px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '250px', top: '2525px' }}
          placeholder='Town'
          value={town3}
          onChange={(e) => setTown3(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '250px', top: '2525px' }}>--Choose Town--</option>
            {availableTowns5?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '250px', top: '2525px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
         <br/>
         <br/>
         <select id='valueplan' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2500px' }} type='text' onChange={(e)=> setPlandate(e.target.value)}> 
       <option>---Choose Date---</option>
       {twentytwo.map((index) => {
   return (
     <option value={index}>
       {index}
     </option>
   );
       })}
       </select>
       
       <input id='inputback1' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2550px' }}type='number' onChange={(e)=> setPricevalue3(e.target.value)}/>
       <input id='inputback2' style={{zIndex: '7', position: 'absolute', left: '305px', top: '2550px' }}type='number' onChange={(e)=> setPricevalue4(e.target.value)}/>
       <Button className='button64' id='businessplanning11' style={{zIndex: '7', position: 'absolute', left: '510px', top: '2538px' }}variant='dark' type="button" value='Submit' onClick={()=> {businessplanning(); businessplanning21(); businessplanning20(); clearAvg5(); marketflush21();}}>Apply Science</Button>

       <Button className='buttonAVG' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2650px' }}variant='dark' type="button" value='Submit' onClick={()=> {battingAvg5();}}>Show Averages</Button>

       <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '75px', top: '2700px', width: '1181px', height: '1300px', borderRadius: '0%', background: 'rgb(73, 73, 73)' }}></div>

       <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2600px'}}>#APPLYSCIENCE - Seller Agency Residential - 
         Per Specific Price Point - Example from date 9/6/2018 - Add Price Reduction data if possible... </h5>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2750px', width: '530px', height: '300px', borderRadius: '31%', background: 'rgb(120, 120, 120)', border: '3.5px solid rgb(101, 101, 101)' }}></div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '220px', top: '2794px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '336px', top: '2794px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2794px' }}>differential</div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2750px', width: '530px', height: '300px', borderRadius: '31%', background: 'rgb(120, 120, 120)', border: '3.5px solid rgb(101, 101, 101)' }}></div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '2794px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '946px', top: '2794px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1110px', top: '2794px' }}>differential</div>
         <br/>
         <a id='date14' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '260px', top: '2765px' }}></a>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2830px' }}>$2022:</div>
         <a></a>
    <Popup trigger={<a id ='planAsales' className='a1water64' href='#/planAsales' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2830px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount36}
           onPageChange={handlePageClick36}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData36}
        
       </div> 
     </div>
   )}
  </Popup>    
         <a></a>
         <div id='fractionArate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2830px' }}></div>
         <a></a>
    <Popup trigger={<a id='planArate' title={belowdiffratesPlanAavg} href='#/planArate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2830px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount37}
           onPageChange={handlePageClick37}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData37}
        
       </div> 
     </div>
   )}
  </Popup>  
         <div id='planAdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2830px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2880px' }}>$2021:</div>
         <a></a> 
     <Popup trigger={<a id ='planAsales21' className='a1water64' href='#/planAsales21' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2880px' }}></a>}
     position='center' modal nested>
   {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount38}
            onPageChange={handlePageClick38}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData38}
         
        </div> 
      </div>
    )}
   </Popup>  
         <a></a>
         <div id='fractionArate21'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2880px' }}></div>
         <a></a>
    <Popup trigger={<a id='planArate21' title={belowdiffratesPlanA21avg} href='#/planArate21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2880px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount39}
           onPageChange={handlePageClick39}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData39}
        
       </div> 
     </div>
   )}
  </Popup>      
         <div  id='planAdiff21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2880px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2930px' }}>$2020:</div>
         <a></a>
   <Popup trigger={<a id ='planAsales20' className='a1water64' href='#/planAsales20' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2930px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount40}
          onPageChange={handlePageClick40}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData40}
       
      </div> 
    </div>
  )}
 </Popup>  
         <a></a>
         <div id='fractionArate20'  className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2930px' }}></div>
         <a></a>
  <Popup trigger={<a id='planArate20' title={belowdiffratesPlanA20avg} href='#/planArate20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2930px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount41}
         onPageChange={handlePageClick41}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData41}
      
     </div> 
   </div>
 )}
</Popup>         
         <div id='planAdiff20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2930px' }}></div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2960px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>   
        <div id ='avgAsales' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2990px' }}></div>
         <a></a>
         <div id='avgAfraction' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2990px' }}></div>
         <a></a>
         <div id='avgArate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2990px' }}></div>
         <div id='avgAdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2990px' }}></div>
         <br/>
         <br/>
         <br/>
         <a id='date30' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '860px', top: '2765px' }}></a>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2830px' }}>$2022:</div>
         <a></a>  
  <Popup trigger={<a id ='planBsales' className='a1water64' href='#/planBsales' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2830px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount42}
         onPageChange={handlePageClick42}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData42}
      
     </div> 
   </div>
 )}
</Popup>         
         <a></a>
         <div id='fractionBrate'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2830px' }}></div>
         <a></a>   
  <Popup trigger={<a id='planBrate' title={belowdiffratesPlanBavg} href='#/planBrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2830px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount43}
         onPageChange={handlePageClick43}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData43}
      
     </div> 
   </div>
 )}
</Popup>      
         <div id='planBdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2830px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2880px' }}>$2021:</div>
         <a></a>  
  <Popup trigger={<a id ='planBsales21' className='a1water64' href='#/planBsales21' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2880px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount44}
         onPageChange={handlePageClick44}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData44}
      
     </div> 
   </div>
 )}
</Popup> 
         <a></a>
         <div id='fractionBrate21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2880px' }}></div>
         <a></a>
   <Popup trigger={<a id='planBrate21' title={belowdiffratesPlanB21avg} href='#/planBrate21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2880px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount45}
          onPageChange={handlePageClick45}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData45}
       
      </div> 
    </div>
  )}
 </Popup> 
        
         <div id='planBdiff21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2880px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2930px' }}>$2020:</div>
         <a></a>
   <Popup trigger={<a id ='planBsales20' className='a1water64' href='#/planBsales20' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2930px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount46}
          onPageChange={handlePageClick46}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData46}
       
      </div> 
    </div>
  )}
 </Popup> 

         <a></a>
         <div id='fractionBrate20'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2930px' }}></div>
         <a></a>
  <Popup trigger={<a id='planBrate20' title={belowdiffratesPlanB20avg} href='#/planBrate20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2930px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount47}
          onPageChange={handlePageClick47}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData47}
       
      </div> 
    </div>
  )}
 </Popup>          
         <div id='planBdiff20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2930px' }}></div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2960px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgBsales' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2990px' }}></div>
         <a></a>
         <div id='avgBfraction' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2990px' }}></div>
         <a></a>
         <div id='avgBrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2990px' }}></div>
         <div id='avgBdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2990px' }}></div>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '3095px', width: '530px', height: '300px', borderRadius: '31%', background: 'rgb(120, 120, 120)', border: '3.5px solid rgb(101, 101, 101)' }}></div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '220px', top: '3139px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '336px', top: '3139px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '500px', top: '3139px' }}>differential</div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '3095px', width: '530px', height: '300px', borderRadius: '31%', background: 'rgb(120, 120, 120)', border: '3.5px solid rgb(101, 101, 101)' }}></div>
         <br/>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '3139px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '946px', top: '3139px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1110px', top: '3139px' }}>differential</div>     
         <br/>
         <br/>
         <a id='date45' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '260px', top: '3110px' }}></a>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3175px' }}>$2022:</div>
         <a></a>  
   <Popup trigger={<a id ='planCsales' className='a1water64' href='#/planCsales' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3175px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount48}
          onPageChange={handlePageClick48}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData48}
       
      </div> 
    </div>
  )}
 </Popup>         
         <a></a>
         <div id='fractionCrate'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3175px' }}></div>
         <a></a> 
   <Popup trigger={<a id='planCrate' title={belowdiffratesPlanCavg} href='#/planCrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3175px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount49}
          onPageChange={handlePageClick49}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData49}
       
      </div> 
    </div>
  )}
 </Popup>             
         <div id='planCdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3175px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3225px' }}>$2021:</div>
         <a></a>
     <Popup trigger={<a id ='planCsales21' className='a1water64' href='#/planCsales21' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3225px' }}></a>}
     position='center' modal nested>
   {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">West Enterprises Applied Science</div>
        <div className="actions">
          <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount50}
            onPageChange={handlePageClick50}
            initialPage={0}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            />
            {currentPageData50}
         
        </div> 
      </div>
    )}
   </Popup>       
         <a></a>
         <div id='fractionCrate21'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3225px' }}></div>
         <a></a>
   <Popup trigger={<a id='planCrate21' title={belowdiffratesPlanC21avg} href='#/planCrate21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3225px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount51}
          onPageChange={handlePageClick51}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData51}
       
      </div> 
    </div>
  )}
 </Popup>         
         <div id='planCdiff21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3225px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3275px' }}>$2020:</div>
         <a></a>   
   <Popup trigger={<a id='planCsales20' className='a1water64' href='#/planCsales20' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3275px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount52}
          onPageChange={handlePageClick52}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData52}
       
      </div> 
    </div>
  )}
 </Popup>    
         <a></a>
         <div id='fractionCrate20'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3275px' }}></div>
         <a></a>
    <Popup trigger={<a id='planCrate20' title={belowdiffratesPlanC20avg} href='#/planCrate20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3275px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount53}
           onPageChange={handlePageClick53}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData53}
        
       </div> 
     </div>
   )}
  </Popup>        
         <div id='planCdiff21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3225px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3275px' }}>$2020:</div>
         <a></a>
         <div id='planCdiff20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3275px' }}></div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3310px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgCsales' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3340px' }}></div>
         <a></a>
         <div id='avgCfraction' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3340px' }}></div>
         <a></a>
         <div id='avgCrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3340px' }}></div>
         <div id='avgCdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3340px' }}></div>
         <br/>
         <br/>
         <br/>
         <a id='date90' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '860px', top: '3110px' }}></a>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3175px' }}>$2022:</div>
         <a></a>
   <Popup trigger={<a id ='planDsales' className='a1water64' href='#/planDsales' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3175px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount54}
          onPageChange={handlePageClick54}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData54}
       
      </div> 
    </div>
  )}
 </Popup>       
         <a></a>
         <div id='fractionDrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3175px' }}></div>
         <a></a>
   <Popup trigger={<a id='planDrate' title={belowdiffratesPlanDavg} href='#/planDrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3175px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount55}
          onPageChange={handlePageClick55}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData55}
       
      </div> 
    </div>
  )}
 </Popup>       
         <div id='planDdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3175px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3225px' }}>$2021:</div>
         <a></a>
  <Popup trigger={<a id='planDsales21' className='a1water64' href='#/planDsales21' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3225px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount56}
         onPageChange={handlePageClick56}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData56}
      
     </div> 
   </div>
 )}
</Popup>       
         <a></a>
         <div id='fractionDrate21'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3225px' }}></div>
         <a></a>
   <Popup trigger={<a id='planDrate21' title={belowdiffratesPlanD21avg} href='#/planDrate21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3225px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount57}
          onPageChange={handlePageClick57}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData57}
       
      </div> 
    </div>
  )}
 </Popup>               
         <div id='planDdiff21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3225px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3275px' }}>$2020:</div>
         <a></a>
   <Popup trigger={<a id ='planDsales20' className='a1water64' href='#/planDsales20' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3275px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount58}
          onPageChange={handlePageClick58}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData58}
       
      </div> 
    </div>
  )}
 </Popup>        
         <div id='fractionDrate20'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3275px' }}></div>
         <a></a> 
   <Popup trigger={<a id='planDrate20' title={belowdiffratesPlanD20avg} href='#/planDrate20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3275px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount59}
          onPageChange={handlePageClick59}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData59}
       
      </div> 
    </div>
  )}
 </Popup>            
         <div id='planDdiff20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3275px' }}></div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3310px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgDsales' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3340px' }}></div>
         <a></a>
         <div id='avgDfraction' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '920px', top: '3340px' }}></div>
         <a></a>
         <div id='avgDrate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3340px' }}></div>
         <div id='avgDdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1135px', top: '3340px' }}></div>
         <br/>
         <br/>
         <br/>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '100px', top: '3440px', width: '530px', height: '300px', borderRadius: '31%', background: 'rgb(120, 120, 120)', border: '3.5px solid rgb(101, 101, 101)' }}></div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '220px', top: '3488px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '336px', top: '3488px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '500px', top: '3488px' }}>differential</div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '700px', top: '3440px', width: '530px', height: '365px', borderRadius: '10%', background: 'rgb(120, 120, 120)', border: '3.5px solid rgb(101, 101, 101)' }}></div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '820px', top: '3486px' }}>sales</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '946px', top: '3486px' }}>at/above rate</div>
         <div className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1110px', top: '3486px' }}>differential</div>      
         <br/>
         <br/>
         <a id='date120' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '260px', top: '3450px' }}></a>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3515px' }}>$2022:</div>
         <a></a>
   <Popup trigger={<a id ='planEsales' className='a1water64' href='#/planEsales' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3515px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount60}
          onPageChange={handlePageClick60}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData60}
       
      </div> 
    </div>
  )}
 </Popup>       
         <a></a>
         <div id='fractionErate'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3515px' }}></div>
         <a></a>
  <Popup trigger={<a id='planErate' title={belowdiffratesPlanEavg} href='#/planErate' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3515px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount61}
         onPageChange={handlePageClick61}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData61}
      
     </div> 
   </div>
 )}
</Popup>                
         <div id='planEdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3515px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3565px' }}>$2021:</div>
         <a></a>
   <Popup trigger={<a id='planEsales21' className='a1water64' href='#/planEsales21' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3565px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount62}
          onPageChange={handlePageClick62}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData62}
       
      </div> 
    </div>
  )}
 </Popup>      
         <a></a>
         <div id='fractionErate21'className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3565px' }}></div>
         <a></a>
   <Popup trigger={<a id='planErate21' title={belowdiffratesPlanE21avg} href='#/planErate21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3565px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount63}
          onPageChange={handlePageClick63}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData63}
       
      </div> 
    </div>
  )}
 </Popup>            
         <div id='planEdiff21' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3565px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3615px' }}>$2020:</div>
         <a></a>
  <Popup trigger={<a id='planEsales20' className='a1water64' href='#/planEsales20' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3615px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount64}
         onPageChange={handlePageClick64}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData64}
      
     </div> 
   </div>
 )}
</Popup>  
         <a></a>
         <div id='fractionErate20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3615px' }}></div>
         <a></a>
    <Popup trigger={<a id='planErate20' title={belowdiffratesPlanE20avg} href='#/planErate20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3615px' }}></a>}
    position='center' modal nested>
  {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header">West Enterprises Applied Science</div>
       <div className="actions">
         <ReactPaginate
           previousLabel={"<- Previous"}
           nextLabel={"Next ->"}
           pageCount={pageCount65}
           onPageChange={handlePageClick65}
           initialPage={0}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link--active"}
           />
           {currentPageData65}
        
       </div> 
     </div>
   )}
  </Popup>            
         <div id='planEdiff20' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3615px' }}></div>
         <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3645px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgEsales' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3675px' }}></div>
         <a></a>
         <div id='avgEfraction' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3675px' }}></div>
         <a></a>
         <div id='avgErate'  className='a1water64' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3675px' }}></div>
         <div id='avgEdiff' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3675px' }}></div>
         <br/>
         <br/>
   
         <br/>
     <h5 className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '890px', top: '3435px'}}>[Timeframe 2021 Sales]</h5>
     <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3510px' }}>0-14 days</a>
         <a></a>
   <Popup trigger={<a id ='sales14flush' className='a1water64' href='#/sales14flush' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3510px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount66}
          onPageChange={handlePageClick66}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData66}
       
      </div> 
    </div>
  )}
 </Popup>           
         <a></a>
         <div id='fraction14flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3510px' }}></div>
         <a></a>
  <Popup trigger={ <a id='rates14flush' title={belowdiffratesMF14avg} href='#/rates14flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3510px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount67}
         onPageChange={handlePageClick67}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData67}
      
     </div> 
   </div>
 )}
</Popup>                    
         <a></a>
         <div id='duff14flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3510px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3560px' }}>15-30 days</a>
         <a></a>
  <Popup trigger={<a id ='sales30flush' className='a1water64' href='#/sales30flush' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3560px' }}></a> }
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount68}
         onPageChange={handlePageClick68}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData68}
      
     </div> 
   </div>
 )}
</Popup>        
         <a></a>
         <div id='fraction30flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3560px' }}></div>
         <a></a>
          <Popup trigger={<a id='rates30flush' title={belowdiffratesMF30avg} href='#/rates30flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3560px' }}></a>}
          position='center' modal nested>
        {close => (
           <div className="modal">
             <button className="close" onClick={close}>
               &times;
             </button>
             <div className="header">West Enterprises Applied Science</div>
             <div className="actions">
               <ReactPaginate
                 previousLabel={"<- Previous"}
                 nextLabel={"Next ->"}
                 pageCount={pageCount69}
                 onPageChange={handlePageClick69}
                 initialPage={0}
                 containerClassName={"pagination"}
                 previousLinkClassName={"pagination__link"}
                 nextLinkClassName={"pagination__link--disabled"}
                 activeClassName={"pagination__link--active"}
                 />
                 {currentPageData69}
              
             </div> 
           </div>
         )}
        </Popup>          
         <a></a>
         <div id='duff30flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3560px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3610px' }}>31-45 days</a>
         <a></a>
   <Popup trigger={<a id='sales45flush' className='a1water64' href='#/sales45flush' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3610px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount70}
          onPageChange={handlePageClick70}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData70}
       
      </div> 
    </div>
  )}
 </Popup>   
         <a></a>
         <div id='fraction45flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3610px' }}></div>
         <a></a>
   <Popup trigger={ <a id='rates45flush' title={belowdiffratesMF45avg} href='#/rates45flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3610px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount71}
          onPageChange={handlePageClick71}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData71}
       
      </div> 
    </div>
  )}
 </Popup>           
         <a></a>
         <div id='duff45flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3610px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3660px' }}>46-90 days</a>
         <a></a>
   <Popup trigger={<a id ='sales90flush' className='a1water64' href='#/sales90flush' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3660px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount72}
          onPageChange={handlePageClick72}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData72}
       
      </div> 
    </div>
  )}
 </Popup>  
         <a></a>
         <div id='fraction90flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3660px' }}></div>
         <a></a>
   <Popup trigger={<a id='rates90flush' title={belowdiffratesMF90avg} href='#/rates90flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3660px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount73}
          onPageChange={handlePageClick73}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData73}
       
      </div> 
    </div>
  )}
 </Popup>           
         <a></a>
         <div id='duff90flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3660px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3710px' }}>91-120 days</a>
         <a></a>
  <Popup trigger={<a id ='sales120flush' className='a1water64' href='#/sales120flush' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3710px' }}></a>}
  position='center' modal nested>
{close => (
   <div className="modal">
     <button className="close" onClick={close}>
       &times;
     </button>
     <div className="header">West Enterprises Applied Science</div>
     <div className="actions">
       <ReactPaginate
         previousLabel={"<- Previous"}
         nextLabel={"Next ->"}
         pageCount={pageCount74}
         onPageChange={handlePageClick74}
         initialPage={0}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination__link"}
         nextLinkClassName={"pagination__link--disabled"}
         activeClassName={"pagination__link--active"}
         />
         {currentPageData74}
      
     </div> 
   </div>
 )}
</Popup>    
         <a></a>
         <div id='fraction120flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3710px' }}></div>
         <a></a>
   <Popup trigger={ <a id='rates120flush' title={belowdiffratesMF120avg} href='#/rates120flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3710px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount75}
          onPageChange={handlePageClick75}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData75}
       
      </div> 
    </div>
  )}
 </Popup>            
         <a></a>
         <div id='duff120flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3710px' }}></div>
         <br/>
         <br/>
         <a className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3760px' }}>121+ days</a>
         <a></a>
   <Popup trigger={<a id ='sales121flush' className='a1water64' href='#/sales121flush' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3760px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount76}
          onPageChange={handlePageClick76}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData76}
       
      </div> 
    </div>
  )}
 </Popup>   
         <a></a>
         <div id='fraction121flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3760px' }}></div>
         <a></a>
   <Popup trigger={ <a id='rates121flush' title={belowdiffratesMF121avg} href='#/rates121flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3760px' }}></a>}
   position='center' modal nested>
 {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">West Enterprises Applied Science</div>
      <div className="actions">
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount77}
          onPageChange={handlePageClick77}
          initialPage={0}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          />
          {currentPageData77}
       
      </div> 
    </div>
  )}
 </Popup>          
         <a></a>
         <div id='duff121flush' className='a1water64' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3760px' }}></div>
         <br/>
         <img style={{height: '375px', width: '1500px', position: 'absolute', top: '4100px' }} src={pixa} alt='pixa'/>
         
         
         
         </>

         ) : (
          
          

<Card
bg='primary'
text='white'
style={{ width: '18rem' }}
className="mb-2"
body={show}
> 

<Card.Header>Foxwoods Resort Casino</Card.Header>
<form>
<Card.Body>
<h2></h2>
<br/>
<div>WITHDRAW</div>
<input type='text' placeholder='Enter Withdrawal' style={{ width: '13rem' }} name="mode" id="mode-select"/><br/>
<div style={{color: 'red'}}></div> 
<div id='pval' >{pricevalue}</div>
<div id='pval2'>{pricevalue2}</div>
<br/>
<br/>
<br/>
<Button onClick={showBack} variant='light' type="button" value='Submit' >Withdraw</Button> <br/>
<br/>
<Button onClick={showBack} variant='dark' type="button" value='Submit'>Deposit</Button> <br/>
</Card.Body>
</form>
</Card>
  
    

);   
        
       
         }
   
     export default AllDataSingleFamilyBuyer;