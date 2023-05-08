import image from './bank.jpeg';
import ImageSlider from './appnw';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
//import './suburb.css';
import './waterfront.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import multifamily from './multifam.jpg';
import MIT from './MIT.png';
import Popup from 'reactjs-popup';




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

function Carousel() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-70.9, 42.35],
        zoom: 2,
      });
  
      // only want to work with the map after it has fully loaded
      // if you try to add sources and layers before the map has loaded
      // things will not work properly
      map.on("load", () => {
  
  
  
  
  
        map.loadImage(
          'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
          (error, image) => {
          if (error) throw error;
           
          // Add the image to the map style.
          map.addImage('cat', image);
         
        // bus routes source
        // another example of using a geojson source
        // this time we are hitting an ESRI API that returns
        // data in the geojson format
        // see https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson
  
        // Add a data source containing one point feature.
    map.addSource('mapbox-streets', {
      'type': 'geojson',
      'data': {
      'type': 'FeatureCollection',
      'features': [
      {
      'type': 'Feature',
      'geometry': {
      'type': 'Point',
      'coordinates': 
      
  [-77.4144, 25.0759],
        
    
      }
      },
  
      {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': 
        
    [-70.4144, 20.0759],
          
      
        }
        },
        {
          'type': 'Feature',
          'geometry': {
          'type': 'Point',
          'coordinates': 
          
      [-65.4144, 23.0759],
            
        
          }
          }
  
        
  
      ]
      }
      });
  
  
  // add a symbol layer - icon
  map.addLayer({
    id: "mapbox-streets-symbol",
    type: "symbol",
    source: "mapbox-streets",
      layout: {
          'icon-image': 'cat',
          'icon-size': 0.1
       }
  });
  
  
  
  
  
  ////////////////////////////////////
  
  ////////////////////////
  
  
    });
  
    
  
    ///////\\\\\\\\\\\\\\\\\\\\\\\
        
      
  
        }); 
    
        // cleanup function to remove map on unmount
        return () => map.remove();
      }, []);
        
      
      //if (map.current) return; // initialize map only once
       // map.current = new mapboxgl.Map({
       // container: mapContainer.current,
       // style: 'mapbox://styles/mapbox/dark-v10',
       // center: [lng, lat],
       // zoom: zoom
       // });
       // }); 









  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  mapboxgl.accessToken = 'pk.eyJ1IjoibnRkb3VibGV1Mjk3IiwiYSI6ImNsMmdrNXphbjAwcnEzY21tNXJ4bWcyNW4ifQ.OZFbUr0XHn455XBjG5od1Q';

   
   const MAcounty = ['Norfolk','Middlesex','Essex','Worcester','Plymouth','Suffolk','Bristol','Barnstable','Hampden','Hampshire','Berkshire','Dukes','Franklin'];
   
  


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



const [pricerangecounty1, setPricerangecounty1] = React.useState();
   const [pricerangetown1, setPricerangetown1] = React.useState();
   const [selectedState2, setSelectedState2] = React.useState(); // MA

   const availableState2 = GLOBE1.states.find((s) => s.name === pricerangecounty1); // that is what this says...
   const availableTowns2 = availableState2?.counties?.find( //
    (c) => c.name === selectedState2 //
    ); //
   
   
   const [totalState, setTotalState] = React.useState([]);

   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
     fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
     .then(response => response.json())
     .then(data => {
       console.log(data);
       let sales = [];
       let threek = [];
       let fourk = [];
       let sevenk = [];
       let sevenfivek = [];
       for (let i = 0; i<data.length; i++){
         if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
           sales.push(data[i]);
           //console.log(sales);
           if (data[i].saleprice > 100000 && data[i].saleprice <= 349999){
             threek.push(data[i]);
           }
           if (data[i].saleprice > 349999 && data[i].saleprice <= 499999){
             fourk.push(data[i]);
           }
           if (data[i].saleprice > 499999 && data[i].saleprice <= 749999){
             sevenk.push(data[i]);
             setTotalState(sevenk);
           }
           if (data[i].saleprice > 749999){
             sevenfivek.push(data[i]);
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
          let average3k = Math.round(DOM / sales3k);
          document.getElementById('s3k').innerHTML = average3k;
          fourk.forEach(add);
          let average4k = Math.round(DOM2 / sales4k);
          document.getElementById('s4k').innerHTML = average4k;
          sevenk.forEach(add);
          let average7k = Math.round(DOM3 / sales7k);
          document.getElementById('s7k').innerHTML = average7k;
          sevenfivek.forEach(add);
          let average75k = Math.round(DOM4 / sales75k);
          document.getElementById('s75k').innerHTML = average75k;
         }
   
           }  //setData(JSON.stringify(data));
     });
   }, [pricerangecounty1, pricerangetown1]);
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
 React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
    fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
  
  }  //setData(JSON.stringify(data));
  });
  }, [pricerangecounty1, pricerangetown1]);
  
  
  
  
  React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
    fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
  
  }  //setData(JSON.stringify(data));
  });
  }, [pricerangecounty1, pricerangetown1]);
  
  
  
  
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

  const [county3, setCounty3] = React.useState('');
  const [town2, setTown2] = React.useState('');

  var [pricevalue, setPricevalue] = React.useState(0);
   var [pricevalue2, setPricevalue2] = React.useState(0); 

   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
    fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
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
          
      for (let i = 0; i<data.length; i++){
        if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
          sales.push(data[i]);
          console.log(sales);
          if (data[i].DOM <= 14){
            fourteen.push(data[i]);
            console.log(fourteen);
            //fourteen[i].differential
          }
          if (data[i].DOM > 14 && data[i].DOM <= 30){
            thirty.push(data[i]);
          }
          if (data[i].DOM > 30 && data[i].DOM <= 45){
            fortyfive.push(data[i]);
          }
          if (data[i].DOM > 45 && data[i].DOM <= 90){
            ninety.push(data[i]);
            console.log(ninety);
          }
          if (data[i].DOM > 90 && data[i].DOM <= 120){
            onetwenty.push(data[i]);
          }
          if (data[i].DOM > 120){
            onetwoone.push(data[i]);
          }
          if (data[i].saleprice < data[i].listprice && data[i].DOM <= 14 ){
            great14.push(data[i]);
            console.log(great14);
          }
          if (data[i].saleprice >= data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
            great30.push(data[i]);
          }
          if (data[i].saleprice >= data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
            great45.push(data[i]);
          }
          if (data[i].saleprice >= data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
            great90.push(data[i]);
          }
          if (data[i].saleprice >= data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
            great120.push(data[i]);
          }
          if (data[i].saleprice >= data[i].listprice && data[i].DOM > 120){
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
  
          const atabove14 =  Math.round((lengthgreat14 / sale14) * 100);
          const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100);
          const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100);
          const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100);
          const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100);
          const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100);
  
  
  
  
  
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

          
          
          setTotallessdiff14(Math.round(differential7 / lengthgreat14));

          let differential8 = 0;
          function add8(item, counter, array){
            differential8+=(item.differential);
          }
          great30.forEach(add8);

          
          
          setTotallessdiff30(Math.round(differential8 / lengthgreat30));

          let differential9 = 0;
          function add9(item, counter, array){
            differential9+=(item.differential);
          }
          great45.forEach(add9);

          
          
          setTotallessdiff45(Math.round(differential9 / lengthgreat45));

          let differential10 = 0;
          function add10(item, counter, array){
            differential10+=(item.differential);
          }
          great90.forEach(add10);

          
          
          setTotallessdiff90(Math.round(differential10 / lengthgreat90));

          let differential11 = 0;
          function add11(item, counter, array){
            differential11+=(item.differential);
          }
          great120.forEach(add11);

          
          
          setTotallessdiff120(Math.round(differential11 / lengthgreat120));


          let differential12 = 0;
          function add12(item, counter, array){
            differential12+=(item.differential);
          }
          great121.forEach(add12);

          
          
          setTotallessdiff121(Math.round(differential12 / lengthgreat121));
          
          
  
        
  
  
         
          // console.log(saleprice);
         let averagediff14 = Math.round( differential / sale14 );
         let averagediff30 = Math.round( differential2 / sale30 );
         let averagediff45 = Math.round( differential3 / sale45 );
         let averagediff90 = Math.round( (differential4) / sale90 );
         let averagediff120 = Math.round( differential5 / sale120 );
         let averagediff121 = Math.round( differential6 / sale121 );
  
          
         
          document.getElementById('d14').innerHTML = averagediff14;
          document.getElementById('d30').innerHTML = averagediff30;
          document.getElementById('d45').innerHTML = averagediff45;
          document.getElementById('d90').innerHTML = averagediff90;
          document.getElementById('d120').innerHTML = averagediff120;
          document.getElementById('d121').innerHTML = averagediff121;
  
  
        }
          
        }
     
      //setData(JSON.stringify(data));
    });
  }, [pricerangecounty1, pricerangetown1]);


 


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




     
      
      var barnstabletowns = ['Barnstable, MA',  'Bourne, MA', 'Brewster, MA',  'Chatham, MA',  'Dennis, MA',  'Eastham, MA',  'Falmouth, MA', 'Harwich, MA',  'Mashpee, MA', 'Orleans, MA', 'Provincetown, MA', 'Sandwich, MA',  'Truro, MA', 'Wellfleet, MA',  'Yarmouth, MA'];
      
     
   
     ////////////// marketANT useEffect below 4 avg sale per month...
      
      React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
        fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
          //console.log(data);
          
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
            if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
              sales.push(data[i]);
              console.log(sales);
              if (data[i].year === 2022){
                yearCurrent.push(data[i]);
                console.log(yearCurrent);
              }
      
              let yearCurrentlength = yearCurrent.length;
              console.log(yearCurrentlength);
              document.getElementById('yearCurrent').innerHTML = `2022 [${yearCurrentlength}]`;
      
              if (data[i].year === 2021 && data[i].townstate === `${pricerangetown1}`){
                yearPrevious.push(data[i]);
                console.log(yearPrevious);
              }
      
              let yearPreviouslength = yearPrevious.length;
              console.log(yearPreviouslength);
              document.getElementById('yearPrevious').innerHTML = `[${yearPreviouslength}] total '21`;
      
              if (data[i].year === 2021 && data[i].townstate === `${pricerangetown1}` && ( data[i].saledate === '1/1/2021' || data[i].saledate === '1/2/2021' || data[i].saledate === '1/3/2021' || data[i].saledate === '1/4/2021' || data[i].saledate === '1/5/2021' || data[i].saledate === '1/6/2021' || data[i].saledate === '1/7/2021' || data[i].saledate === '1/8/2021' || data[i].saledate === '1/9/2021' || data[i].saledate === '1/10/2021' || data[i].saledate === '1/11/2021' || data[i].saledate === '1/12/2021' || data[i].saledate === '1/13/2021' || data[i].saledate === '1/14/2021' || data[i].saledate === '1/15/2021' || data[i].saledate === '1/16/2021' || data[i].saledate === '1/17/2021' || data[i].saledate === '1/18/2021' || data[i].saledate === '1/19/2021' || data[i].saledate === '1/20/2021' || data[i].saledate === '1/21/ || data[i].saledate === 021' || data[i].saledate === '1/22/2021' || data[i].saledate === '1/23/2021' || data[i].saledate === '1/24/2021' || data[i].saledate === '1/25/2021' || data[i].saledate === '1/26/2021' || data[i].saledate === '1/27/2021' || data[i].saledate === '1/28/2021' || data[i].saledate === '1/29/2021' || data[i].saledate === '1/30/2021' || data[i].saledate === '1/31/2021' || 
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
            
             document.getElementById('updownperc').innerHTML = Math.round((updown * 100)) + '%';
      
             
             let percentpie = yearPreviouslength * updown;
             console.log(percentpie);
      
      
            
              let increase = Math.round(yearPreviouslength + percentpie);
              console.log(increase);
      
              let decrease = Math.round(yearPreviouslength - percentpie);
              console.log(decrease);
      
              var number = 0;
              number += (document.getElementById('yearCurrent').value > document.getElementById('yearCall').value) ? (-1 * (decrease)) : (1 * (increase));
              console.log(number);
             
              document.getElementById('totalyearANT').innerHTML = `${number} anticipated`;
             
      
              document.getElementById('salespermonthavg').innerHTML = Math.round((number / 12));
      
      
      
              if (data[i].year === 2021 && (data[i].saledate === '6/1/2021' || data[i].saledate ==='6/2/2021' || data[i].saledate ==='6/3/2021' || data[i].saledate ==='6/4/2021' || data[i].saledate ==='6/5/2021' || data[i].saledate ==='6/6/2021' || data[i].saledate ==='6/7/2021' || data[i].saledate ==='6/8/2021' || data[i].saledate ==='6/9/2021' || data[i].saledate ==='6/10/2021' || data[i].saledate ==='6/11/2021' || data[i].saledate ==='6/12/2021' || data[i].saledate ==='6/13/2021' || data[i].saledate ==='6/14/2021' || data[i].saledate ==='6/15/2021' || data[i].saledate ==='6/16/2021' || data[i].saledate ==='6/17/2021' || data[i].saledate ==='6/18/2021' || data[i].saledate ==='6/19/2021' || data[i].saledate ==='6/20/2021' || data[i].saledate ==='6/21/2021' || data[i].saledate ==='6/22/2021' || data[i].saledate ==='6/23/2021' || data[i].saledate ==='6/24/2021' || data[i].saledate ==='6/25/2021' || data[i].saledate ==='6/26/2021' || data[i].saledate ==='6/27/2021' || data[i].saledate ==='6/28/2021' || data[i].saledate ==='6/29/2021' || data[i].saledate ==='6/30/2021')){
                month1.push(data[i]);
                console.log(month1);
               }
               if (data[i].year === 2021 && data[i].townstate === `${pricerangetown1}` && (data[i].saledate === '7/1/2021' || data[i].saledate ==='7/2/2021' || data[i].saledate ==='7/3/2021' || data[i].saledate ==='7/4/2021' || data[i].saledate ==='7/5/2021' || data[i].saledate ==='7/7/2021' || data[i].saledate ==='7/7/2021' || data[i].saledate ==='7/8/2021' || data[i].saledate ==='7/9/2021' || data[i].saledate ==='7/10/2021' || data[i].saledate ==='7/11/2021' || data[i].saledate ==='7/12/2021' || data[i].saledate ==='7/13/2021' || data[i].saledate ==='7/14/2021' || data[i].saledate ==='7/15/2021' || data[i].saledate ==='7/17/2021' || data[i].saledate ==='7/17/2021' || data[i].saledate ==='7/18/2021' || data[i].saledate ==='7/19/2021' || data[i].saledate ==='7/20/2021' || data[i].saledate ==='7/21/2021' || data[i].saledate ==='7/22/2021' || data[i].saledate ==='7/23/2021' || data[i].saledate ==='7/24/2021' || data[i].saledate ==='7/25/2021' || data[i].saledate ==='7/27/2021' || data[i].saledate ==='7/27/2021' || data[i].saledate ==='7/28/2021' || data[i].saledate ==='7/29/2021' || data[i].saledate ==='7/30/2021')){
                month2.push(data[i]);
                console.log(month2);
               }
               if (data[i].year === 2021 && data[i].townstate === `${pricerangetown1}` && (data[i].saledate === '8/1/2021' || data[i].saledate ==='8/2/2021' || data[i].saledate ==='8/3/2021' || data[i].saledate ==='8/4/2021' || data[i].saledate ==='8/5/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/8/2021' || data[i].saledate ==='8/9/2021' || data[i].saledate ==='8/10/2021' || data[i].saledate ==='8/11/2021' || data[i].saledate ==='8/12/2021' || data[i].saledate ==='8/13/2021' || data[i].saledate ==='8/14/2021' || data[i].saledate ==='8/15/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/18/2021' || data[i].saledate ==='8/19/2021' || data[i].saledate ==='8/20/2021' || data[i].saledate ==='8/21/2021' || data[i].saledate ==='8/22/2021' || data[i].saledate ==='8/23/2021' || data[i].saledate ==='8/24/2021' || data[i].saledate ==='8/25/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/28/2021' || data[i].saledate ==='8/29/2021' || data[i].saledate ==='8/30/2021')){
                month3.push(data[i]);
                console.log(month3);
              }
              if (data[i].year === 2021 && data[i].townstate === `${pricerangetown1}` && (data[i].saledate === '9/1/2021' || data[i].saledate ==='9/2/2021' || data[i].saledate ==='9/3/2021' || data[i].saledate ==='9/4/2021' || data[i].saledate ==='9/5/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/9/2021' || data[i].saledate ==='9/10/2021' || data[i].saledate ==='9/11/2021' || data[i].saledate ==='9/12/2021' || data[i].saledate ==='9/13/2021' || data[i].saledate ==='9/14/2021' || data[i].saledate ==='9/15/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/19/2021' || data[i].saledate ==='9/20/2021' || data[i].saledate ==='9/21/2021' || data[i].saledate ==='9/22/2021' || data[i].saledate ==='9/23/2021' || data[i].saledate ==='9/24/2021' || data[i].saledate ==='9/25/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/29/2021' || data[i].saledate ==='9/30/2021')){
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
    });
}, [pricerangecounty1, pricerangetown1]);


////////////// marketANT useEffect above 4 avg sale per month...


React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
    fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      
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
        if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022){
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
    });
}, [pricerangecounty1, pricerangetown1]);



      //////////////////////////////////////////////////////////////////////////////////////////////////////
     
      React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
        fetch('http://localhost:3000/singlefamily22', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
          //console.log(data);
          
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
            if(data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022){
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
        });
    }, [pricerangecounty1, pricerangetown1]);



 
     

    const contentStyle = { background: 'rgb(84,84,84)' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#000' };





     
   
  

  return (
    <>
   <div className='grid'>
 <header>
 <div className='innerelementback'>
    <div style={{height: '280px', width: '950px', left: '501px', top: '530px', position: 'absolute' }} className='yeartitle'>Active Single Family</div>
    <img style={{height: '280px', width: '950px', left: '200px', top: '250px', position: 'absolute' }}  src={multifamily} alt='math' />
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '275px' }}href='/home'>Home JS</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '325px' }}href="/carapp">Active</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '375px' }}href='/ctg'>Buyer</a>
     </div>
        </header>
      <aside>
      <div id='DOM85populatequote'></div>
      </aside>
      <article>
        <div style={{left: '218px', top: '595px', position: 'absolute' }} className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div style={{left: '218px', top: '595px', position: 'absolute' }} ref={mapContainer} className="map-container" />
       <input type='text' placeholder='address here...Courtney Koke8591' className='maininput' style={{left: '280px', top: '1110px', position: 'absolute', width: '775px', height: '31px' }} />
      </article>
      <aside>
        <div id='salespermonthavg'></div>
        <div id='DOM85abovepopulatequote'></div>
        
      </aside>
      <footer>    
            
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1290px' }}>$100k - $349k</div>
            <a id ='threek' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1274px' }} ></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1290px' }}>______________</div>
            <a id ='s3k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1274px' }}></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1290px' }}>______________</div>
            <br/>
            <br/>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1380px' }}>$350k - $499k</div>
            <a id ='fourk' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1365px' }}></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1380px' }}>______________</div>
            <a id ='s4k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1365px' }}></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1380px' }}>______________</div>
            <br/>
            <br/>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1455px' }}>$500k - $749k</div>

<Popup trigger={ <a id ='sevenk' className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1440px' }}></a>}
   position='center' modal nested>
{close => (
    
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Modal Title </div>
        <div className="content">
        {totalState.map((item, index) => (

<ul data-index={index}>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>{item.DOM}</td>
 <br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>{item.address}</td>
 <br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>{item.saleprice}</td>
 <br/>
 <td ref={(_subtitle) => (subtitle = _subtitle)}>{item.listprice}</td>
 </ul>
))}
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
           
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1455px' }}>______________</div>
            <a id ='s7k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1440px' }}></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1455px' }}>______________</div>
            <br/>
            <br/>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1530px' }}>$750k +</div>
            <a id ='sevenfivek' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1505px'}} ></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1530px' }}>______________</div>
            <a id ='s75k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1505px' }}></a>
            <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1530px' }}>______________</div>
            <br/>
            <br/>
            <select style={{zIndex: '7', position: 'absolute', left: '45px', top: '1170px' }}
             placeholder='County'
             value={pricerangecounty1}
             onChange={(e) => setPricerangecounty1(e.target.value)}
             >
            <option id='value' style={{zIndex: '7', position: 'absolute', left: '45px', top: '1170px' }}>---Choose County--</option>
            {GLOBE1.states.map((value, key) => {
            return(
             <option id='value' style={{zIndex: '7', position: 'absolute', left: '45px', top: '1170px' }} value={value.name} key={key}>{value.name}</option>);
            })}
            </select>
             <select style={{zIndex: '7', position: 'absolute', left: '45px', top: '1190px' }}
             placeholder='State'
             value={selectedState2}
             onChange={(e) => setSelectedState2(e.target.value)}
             >
               <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '1190px' }}>--Choose State--</option>
               {availableState2?.counties.map((e, key) => {
                 return (
                   <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '1190px' }} value={e.name} key={key}>{e.name}</option>
                 );
               })}
               </select>
            
            <select style={{zIndex: '7', position: 'absolute', left: '45px', top: '1210px' }}
             placeholder='Town'
             value={pricerangetown1}
             onChange={(e) => setPricerangetown1(e.target.value)}>
               <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '1210px' }}>--Choose Town--</option>
               {availableTowns2?.towns.map((e, key) => {
                 return (
                   <option style={{zIndex: '7', position: 'absolute', left: '45px', top: '121tg mn0px' }}value={e.name} key={key}>
                   {e}
                   </option>
                 );
               })}
             </select>
            <br/>
            <br/>
            <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '210px', top: '1160px' }}>West Enterprises #applyscience Product Model</h5>
                 <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '725px', top: '1160px'}}>REPEAT via days on market IE [1/1/2021-12/31/2021]</h5>
                     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1230px' }}>0-14 days</a>
                     <a></a>
                     <div id='s14'  className='a1water' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1230px' }}></div>
                     <a></a>
                     <div id='fr14' className='a1water' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1230px' }}></div>
                     <a></a>
                     <div id='r14' title={totallessdiff14} className='a1water' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1230px' }}></div>
                     <a></a>
                     <div id='d14' className='a1water' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1230px' }}></div>
                     <br/>
                     <br/>
                     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1305px' }}>15-30 days</a>
                     <a></a>
                     <div id='s30' className='a1water' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1305px' }}></div>
                     <a></a>
                     <div id='fr30' className='a1water' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1305px' }}></div>
                     <a></a>
                     <div id='r30' title={totallessdiff30} className='a1water' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1305px' }}></div>
                     <a></a>
                     <div id='d30' className='a1water' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1305px' }}></div>
                     <br/>
                     <br/>
                     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1380px' }}>31-45 days</a>
                     <a></a>
                     <div id='s45' className='a1water' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1380px' }}></div>
                     <a></a>
                     <div id='fr45' className='a1water' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1380px' }}></div>
                     <a></a>
                     <div id='r45' title={totallessdiff45} className='a1water' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1380px' }}></div>
                     <a></a>
                     <div id='d45' className='a1water' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1380px' }}></div>
                     <br/>
                     <br/>
                     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1455px' }}>46-90 days</a>
                     <a></a>
                     <div id='s90' className='a1water' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1455px' }}></div>
                     <a></a>
                     <div id='fr90' className='a1water' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1455px' }}></div>
                     <a></a>
                     <div id='r90' title={totallessdiff90} className='a1water' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1455px' }}></div>
                     <a></a>
                     <div id='d90' className='a1water' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1455px' }}></div>
                     <br/>
                     <br/>
                     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1530px' }}>91-120 days</a>
                     <a></a>
                     <div id='s120' className='a1water' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1530px' }}></div>
                     <a></a>
                     <div id='fr120' className='a1water' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1530px' }}></div>
                     <a></a>
                     <div id='r120' title={totallessdiff120} className='a1water' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1530px' }}></div>
                     <a></a>
                     <div id='d120' className='a1water' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1530px' }}></div>
                     <br/>
                     <br/>
                     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1605px' }}>121+ days</a>
                     <a></a>
                     <div id='s121' className='a1water' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1605px' }}></div>
                     <a></a>
                     <div id='fr121' className='a1water' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1605px' }}></div>
                     <a></a>
                     <div id='r121' title={totallessdiff121} className='a1water' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1605px' }}></div>
                     <a></a>
                     <div id='d121' className='a1water' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1605px' }}></div>
                     <br/>
                 <br/>
                 <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '1615px' }}>----------------------------------------------</div>
                 <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1615px' }}>----------------------------------------------</div>

                 <button onClick={openModal}>Open Modal</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                      <input />
                      <button>tab navigation</button>
                      <button>stays</button>
                      <button>inside</button>
                      <button>the modal</button>
                    </form>
                  </Modal>
          
      </footer>
      </div>

</>
  
  );
}

     export default Carousel; 