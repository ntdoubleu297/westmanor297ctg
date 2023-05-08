import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap';
//import './badbank3k.css';
import { useState } from 'react';
  import image from './West-Enterprises.jpeg';
  import './navbar.css';
  //import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
  import {useCallback } from 'react';
  import './mapbox.css';
  //import mapboxgl from 'mapbox-gl';
  import { useRef, useEffect } from 'react';






function Login(){


///////////////////////////////////////////////////////////////////////////////////////////


function renderPosts(singlefamily){
  const norfolkcounty = [];
for (let i=0; i < singlefamily.length; i++){
  if (singlefamily[i].county === 'Norfolk'){
    norfolkcounty.push(singlefamily[i]);
  } 
}
return norfolkcounty;
document.getElementById('inject').innerHTML = JSON.stringify(norfolkcounty);
} 



 ////////////////////////////////////////////////////////////////////////////////

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
            


            //<Nav.Link href="/deposit" {...buttonBHoverProps}>{buttonBIsHovering ? 'Click here to make a Deposit' : 'Deposit/Withdraw'}</Nav.Link>
             


        //////////////////////////////////////////////////////////////
const counties = [
  { state: "MA", county: "Norfolk", town: ['Avon', 'Bellingham', 'Braintree', 'Brookline', 'Canton', 'Cohasset', 'Dedham', 'Dover', 'Foxboro', 'Franklin', 'Holbrook', 'Medfield', 'Medway', 'Millis', 'Milton', 'Needham', 'Norfolk', 'Norwood', 'Plainville', 'Quincy', 'Randolph', 'Sharon', 'Stoughton', 'Walpole', 'Wellesley', 'Westwood', 'Weymouth', 'Wrentham'] },
  { state: "MA", county: "Middlesex", town: ['Acton', 'Arlington', 'Ashby', 'Ashland', 'Ayer', 'Bedford', 'Belmont', 'Billerica', 'Boxborough', 'Burlington',  'Cambridge', 'Carlisle', 'Chelmsford',  'Concord', 'Dracut',  'Dunstable', 'Everett', 'Framingham', 'Groton', 'Holliston', 'Hopkinton', 'Hudson', 'Lexington', 'Lincoln',  'Littleton', 'Lowell', 'Malden', 'Marlborough', 'Maynard', 'Medford', 'Melrose', 'Natick', 'Newton', 'North Reading', 'Pepperell', 'Reading', 'Sherborn', 'Shirley', 'Somerville', 'Stoneham', 'Stow', 'Sudbury', 'Tewksbury', 'Townsend', 'Tyngsborough', 'Wakefield', 'Waltham', 'Watertown', 'Wayland', 'Westford', 'Weston', 'Wilmington', 'Winchester', 'Woburn' ] },
  { state: "MA", county: "Essex", town: ['Amesbury', 'Andover', 'Beverly', 'Boxford', 'Danvers', 'Essex', 'Georgetown',  'Gloucester', 'Groveland', 'Hamilton', 'Haverhill', 'Ipswich',  'Lawrence', 'Lynn', 'Lynnfield', 'Manchester',  'Marblehead',  'Merrimac', 'Methuen', 'Middleton', 'Nahant', 'Newbury',  'Newburyport', 'North Andover', 'Peabody', 'Rockport',  'Rowley', 'Salem', 'Salisbury', 'Saugus',  'Swampscott', 'Topsfield', 'Wenham',  'West Newbury'] },
  { state: "MA", county: "Worcester", town: ['Ashburnham', 'Athol',  'Auburn', 'Barre', 'Berlin', 'Blackstone', 'Bolton', 'Boylston', 'Brookfield', 'Charlton', 'Clinton',  'Devens', 'Douglas',  'Dudley', 'East Brookfield', 'Fitchburg', 'Gardner', 'Grafton',  'Hardwick', 'Harvard', 'Holde', 'Hopedale', 'Hubbardston', 'Lancaster',  'Leicester', 'Leominster', 'Lunenbur',  'Mendon', 'Milford', 'Millbury', 'Millville', 'New Braintree', 'North Brookfield', 'Northborough',  'Northbridge', 'Oakham', 'Oxford', 'Paxton', 'Petersham', 'Phillipston', 'Princeton', 'Royalston', 'Rutland', 'Shrewsbury', 'Southboroug',  'Southbridge', 'Spencer', 'Sterling', 'Sturbridge', 'Sutton', 'Templeton', 'Upton',  'Uxbridge',  'Warren',  'Webster',  'West Boylston', 'West Brookfield',  'Westborough', 'Westminster', 'Winchendon', 'Worcester']},
  { state: "MA", county: "Plymouth", town: ['Abington', 'Bridgewater', 'Brockton',  'Carver',  'Duxbury',  'East Bridgewater', 'Halifax', 'Hanover', 'Hanson', 'Hingham',  'Hull', 'Kingston',  'Lakeville',  'Marion',  'Marshfield', 'Mattapoisett', 'Middleboro',  'Norwell',  'Pembroke', 'Plymouth', 'Plympton', 'Rochester', 'Rockland', 'Scituate', 'Wareham', 'West Bridgewater', 'Whitman'] },
  { state: "MA", county: "Suffolk", town: ['Boston', 'Chelsea', 'Revere', 'Winthrop']},  // zip codez
  { state: "MA", county: "Bristol", town: ['Acushnet', 'Attleboro', 'Berkley', 'Dartmouth', 'Dighton', 'Easton', 'Fairhaven', 'Fall River', 'Freetown', 'Mansfield', 'New Bedford', 'North Attleboro', 'Norton', 'Raynham', 'Rehoboth', 'Seekonk', 'Somerset', 'Swansea', 'Taunton', 'Westport']},
  { state: "MA", county: "Barnstable", town: ['Barnstable', 'Bourne', 'Brewster', 'Chatham', 'Dennis', 'Eastham', 'Falmouth', 'Harwich', 'Mashpee', 'Orleans', 'Provincetown', 'Sandwich', 'Truro', 'Wellfleet', 'Yarmouth']}, // town expansion on 'Barnstable'...
  { state: "MA", county: "Hampden", town: ['Agawam', 'Blandford', 'Brimfield', 'Chester', 'Chicopee', 'East Longmeadow', 'Granville', 'Hampden', 'Holland', 'Holyoke', 'Longmeadow', 'Ludlow', 'Monson', 'Montgomery', 'Palmer', 'Russell', 'Southwick', 'Springfield', 'Westfield', 'Wilbraham']},
  { state: "MA", county: "Hampshire", town: ['Amherst', 'Belchertown', 'Chesterfield', 'Cummington', 'Easthampton', 'Goshen', 'Granby', 'Hadley', 'Hatfield', 'Huntington', 'Middlefield', 'Northampton', 'Pelham', 'Plainfield', 'South Hadley', 'Southampton', 'Ware', 'Westhampton', 'Williamsburg', 'Worthington, MA']},
  { state: "MA", county: "Berkshire", town: ['Adams', 'Alford', 'Becket', 'Cheshire', 'Clarksburg', 'Dalton', 'Egremont', 'Florida', 'Great Barrington', 'Hancock', 'Hinsdale', 'Lanesborough', 'Lee', 'Lenox', 'Monterey', 'Mount Washington', 'New Ashford', 'New Marlboro', 'North Adams', 'Otis', 'Peru', 'Pittsfield', 'Richmond', 'Sandisfield', 'Savoy', 'Sheffield', 'Stockbridge', 'Tyringham', 'Washington', 'West Stockbridge', 'Williamstown', 'Windsor']},
  { state: "MA", county: "Dukes", town: ['Aquinnah', 'Chilmark', 'Edgartown', 'Gosnold', 'Oak Bluffs', 'Tisbury']},
  { state: "MA", county: "Franklin", town: ['Ashfield', 'Bernardston', 'Buckland', 'Charlemont', 'Colrain', 'Conway', 'Deerfield', 'Erving', 'Gill', 'Greenfield', 'Hawley',  'Heath', 'Leverett', 'Leyden', 'Monroe',  'Montague', 'New Salem', 'Northfield', 'Orange', 'Rowe', 'Shelburne', 'Shutesbury', 'Sunderland', 'Warwick', 'Wendell', 'Whately']}
];  


  

const [selectedCountry, setSelectedCountry] = React.useState();
const [selectedState, setSelectedState] = React.useState();
const [selectedCity, setSelectedCity] = React.useState();

const availableCountries = counties.find((c) => c.state === selectedCountry);
const availableStates = counties.find((c) => c.county === selectedState);
const availableTowns = counties.find((c) => c.town === selectedCity);


////////////////////////////////////////////////////////////////////////////////////////////////////////

React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('http://localhost:3000/singlefamily22')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let sales = [];
    let threek = [];
    let fourk = [];
    let sevenk = [];
    let sevenfivek = [];
    for (let i = 0; i<data.length; i++){
      if (data[i].county ==='Barnstable' && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
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
}, []);




React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('http://localhost:3000/singlefamily22')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let sales21 = [];
    let threek21 = [];
    let fourk21 = [];
    let sevenk21 = [];
    let sevenfivek21 = [];
    for (let i = 0; i<data.length; i++){
      if (data[i].county ==='Barnstable' && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" ){
        sales21.push(data[i]);
        //console.log(sales);
        if (data[i].saleprice > 100000 && data[i].saleprice <= 349999){
          threek21.push(data[i]);
        }
        if (data[i].saleprice > 349999 && data[i].saleprice <= 499999){
          fourk21.push(data[i]);
        }
        if (data[i].saleprice > 499999 && data[i].saleprice <= 749999){
          sevenk21.push(data[i]);
        }
        if (data[i].saleprice > 749999){
          sevenfivek21.push(data[i]);
        }

        
        const sales3k21 = threek21.length;
        const sales4k21 = fourk21.length;
        const sales7k21 = sevenk21.length;
        const sales75k21 = sevenfivek21.length;


        document.getElementById('threek21').innerHTML = sales3k21;
        document.getElementById('fourk21').innerHTML = sales4k21;
        document.getElementById('sevenk21').innerHTML = sales7k21;
        document.getElementById('sevenfivek21').innerHTML = sales75k21;

        //let DOM = 0;
        //let DOM2 = 0;
        //let DOM3 = 0;
        //let DOM4 = 0;
        //function add(item, counter, array){
         //DOM+=(item.DOM);//spot on excel
         //DOM2+=(item.DOM);
         //DOM3+=(item.DOM);
         //DOM4+=(item.DOM);
        //}
        //threek21.forEach(add); /////////////// double check the avg DOM JS...
        //console.log(DOM);
       //let average3k21 = Math.round(DOM / sales3k21);
       //document.getElementById('s3k21').innerHTML = average3k21;
       //fourk21.forEach(add);
       //let average4k21 = Math.round(DOM2 / sales4k);
       //document.getElementById('s4k21').innerHTML = average4k21;
       //sevenk21.forEach(add);
       //let average7k21 = Math.round(DOM3 / sales7k);
       //document.getElementById('s7k21').innerHTML = average7k21;
       //sevenfivek21.forEach(add);
       //let average75k21 = Math.round(DOM4 / sales75k);
       //document.getElementById('s75k21').innerHTML = average75k21;
      //}

        //}  //setData(JSON.stringify(data));
       }
      } 
    });
}, []);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  //fetch('http://localhost:5000/record')
  fetch('http://localhost:3000/singlefamily22')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let norfolkcounty = [];
    for (let i = 0; i<data.length; i++){
      if (data[i].county ==='Barnstable' && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
        norfolkcounty.push(data[i]);
       // console.log(norfolkcounty);

       let length = norfolkcounty.length;
      // console.log(length);
      document.getElementById('inject').innerHTML = length;
      
      
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
      let average = Math.round(saleprice / length);
      let averagelist = Math.round(listprice / length);
      let avgdom = Math.round(DOM / length );
      let avgdiff = Math.round(differential / length);
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
    return norfolkcounty;       
    //setData(JSON.stringify(norfolkcounty)); //data
  });
}, []); //{data} below is simply the [data, setData] that we have set the useState - set once we call that backend 

const [data1, setData1] = React.useState('');

React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('http://localhost:3000/singlefamily22')
  .then(response => response.json())
  .then(data => {
   // console.log(data);
    let greatless = []; // 1665 objects here
    let great = []; // 0 here
    let less = [];
    const maxmin = [];
    for (let i = 0; i<data.length; i++){
    if (data[i].county ==='Barnstable' && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!"){
      greatless.push(data[i]); // 1665 objects here
      
    if (data[i].saleprice >= data[i].listprice){
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


    let greaterthan = Math.round((lengthgreat / lengthless) * 100);
    document.getElementById('threebears').innerHTML = `${greaterthan}%` 
    }   
    //setData(JSON.stringify(data));
    const pricemax = Math.max(...greatless.map(item => item.saleprice));
    //console.log(pricemax);
    document.getElementById('max').innerHTML = pricemax;

    const pricemin = Math.min(...greatless.map(item => item.saleprice));
    //console.log(pricemin);
    document.getElementById('min').innerHTML = pricemin;
    
  }
  });
}, []); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////
      
//////// 2021 market data

React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  //fetch('http://localhost:5000/record')
  fetch('http://localhost:3000/singlefamily22')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let norfolkcounty = [];
    for (let i = 0; i<data.length; i++){
      if (data[i].county ==='Barnstable' && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
        norfolkcounty.push(data[i]);
       // console.log(norfolkcounty);

       let length = norfolkcounty.length;
      // console.log(length);
      document.getElementById('inject21').innerHTML = length;
      
      
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
      let average = Math.round(saleprice / length);
      let averagelist = Math.round(listprice / length);
      let avgdom = Math.round(DOM / length );
      let avgdiff = Math.round(differential / length);
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
    return norfolkcounty;       
    //setData(JSON.stringify(norfolkcounty)); //data
  });
}, []); 

React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('http://localhost:3000/singlefamily22')
  .then(response => response.json())
  .then(data => {
   // console.log(data);
    let greatless = []; // 1665 objects here
    let great = []; // 0 here
    let less = [];
    const maxmin = [];
    for (let i = 0; i<data.length; i++){
    if (data[i].county ==='Barnstable' && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!"){
      greatless.push(data[i]); // 1665 objects here
      
    if (data[i].saleprice >= data[i].listprice){
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


    let greaterthan = Math.round((lengthgreat / lengthless) * 100);
    document.getElementById('threebears21').innerHTML = `${greaterthan}%` 
    }   
    //setData(JSON.stringify(data));
    const pricemax = Math.max(...greatless.map(item => item.saleprice));
    //console.log(pricemax);
    document.getElementById('max21').innerHTML = pricemax;

    const pricemin = Math.min(...greatless.map(item => item.saleprice));
    //console.log(pricemin);
    document.getElementById('min21').innerHTML = pricemin;
    
  }
  });
}, []); 


/////////////////////////////////////////////////// market anticipations by month...

var [town, setTown] = React.useState(''); //'2/1/2022'
var [pricevalue, setPricevalue] = React.useState(0);
var [pricevalue2, setPricevalue2] = React.useState(0);
const [valueupdown, setValueupdown] = React.useState(0);
const [yearANT, setYearANT] = React.useState(0); 
const [percent, setPercent] = React.useState(0);

var barnstabletowns = ['Barnstable, MA',  'Bourne, MA', 'Brewster, MA',  'Chatham, MA',  'Dennis, MA',  'Eastham, MA',  'Falmouth, MA', 'Harwich, MA',  'Mashpee, MA', 'Orleans, MA', 'Provincetown, MA', 'Sandwich, MA',  'Truro, MA', 'Wellfleet, MA',  'Yarmouth, MA'];




async function marketANT(e){ //this functions onClick...
  const req = await fetch('http://localhost:3000/singlefamily22')
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
      if (data[i].county ==='Barnstable' && data[i].townstate === `${town}` && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
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

       document.getElementById('updownperc').innerHTML = Math.round((updown * 100)) + '%';

       let percentpie = yearPreviouslength * updown;
       console.log(percentpie);


      
        let increase = Math.round(yearPreviouslength + percentpie);
        console.log(increase);

        let decrease = Math.round(yearPreviouslength - percentpie);
        console.log(decrease);

        var number = 0;
        number += (document.getElementById('yearCurrent').value > document.getElementById('yearCall').value) ? (-1 * (increase)) : (1 * (increase));
        console.log(number);
        document.getElementById('totalyearANT').innerHTML = `${number} anticipated`;
        document.getElementById('salespermonthavg').innerHTML = Math.round((number / 12));



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




       

return(

<>

<div className='background'>
  <a className='innerelement' style={{zIndex: '7', position: 'absolute', left: '45px', top: '275px' }}href='/home'>Home JS</a>
  <a className='innerelement' style={{zIndex: '7', position: 'absolute', left: '45px', top: '325px' }}href="#">CTG</a>
  <a className='innerelement' style={{zIndex: '7', position: 'absolute', left: '45px', top: '375px' }}href='#'>Buyer/Seller</a>
  </div>
  <div className='body'>

  <h5 className='opening' style={{zIndex: '7', position: 'absolute', left: '420px', top: '300px' }}>West Enterprises #applyscience Product Model</h5>
      <br/>
      <br/>
      <h2 className='opening' style={{zIndex: '7', position: 'absolute', left: '280px', top: '410px' }}>Price Range</h2>
      <h2 className='opening' style={{zIndex: '7', position: 'absolute', left: '570px', top: '410px' }}>2021</h2>
      <h2 className='opening' style={{zIndex: '7', position: 'absolute', left: '820px', top: '410px' }}>2022</h2>
      <h2 className='opening' style={{zIndex: '7', position: 'absolute', left: '1000px', top: '410px' }}>Avg. DOM 2022</h2>
      <br/>
      <br/>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '280px', top: '500px' }}>$100k - $349k</div>
      <a id='threek21'className='opening' style={{zIndex: '7', position: 'absolute', left: '580px', top: '470px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '520px', top: '500px' }}>______________</div>
      <a id ='threek' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '830px', top: '470px' }} ></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '500px' }}>______________</div>
      <a id ='s3k' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '1060px', top: '470px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '1000px', top: '500px' }}>______________</div>
      <br/>
      <br/>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '280px', top: '600px' }}>$350k - $499k</div>
      <a id='fourk21'className='opening' style={{zIndex: '7', position: 'absolute', left: '580px', top: '570px' }} ></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '520px', top: '600px' }}>______________</div>
      <a id ='fourk' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '830px', top: '570px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '600px' }}>______________</div>
      <a id ='s4k' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '1060px', top: '570px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '1000px', top: '600px' }}>______________</div>
      <br/>
      <br/>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '280px', top: '700px' }}>$500k - $749k</div>
      <a id='sevenk21'className='opening' style={{zIndex: '7', position: 'absolute', left: '580px', top: '670px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '520px', top: '700px' }}>______________</div>
      <a id ='sevenk' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '830px', top: '670px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '700px' }}>______________</div>
      <a id ='s7k' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '1060px', top: '670px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '1000px', top: '700px' }}>______________</div>
      <br/>
      <br/>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '280px', top: '800px' }}>$750k +</div>
      <a id='sevenfivek21'className='opening' style={{zIndex: '7', position: 'absolute', left: '580px', top: '770px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '520px', top: '800px' }}>______________</div>
      <a id ='sevenfivek' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '830px', top: '770px'}} ></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '800px' }}>______________</div>
      <a id ='s75k' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '1060px', top: '770px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '1000px', top: '800px' }}>______________</div>
      <br/>
      <br/>

    <h5 className='opening' style={{zIndex: '7', position: 'absolute', left: '420px', top: '900px' }}>Total County Market: 1/1/2022-5/31/2022[No Price Range]</h5>

      <h2 className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '950px' }}>2022</h2>
      <br/>
      <br/>
      <a id ='inject' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '500px', top: '1020px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1050px' }}># Listings Sold - _______________</div>
      <a id ='harley' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '860px', top: '1020px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '1050px' }}>Avg. Sale_____________</div>
      <a id ='sultan' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '475px', top: '1120px' }} ></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1150px' }}>Avg. DOM - _______________</div>
      <a id ='oj' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '860px', top: '1120px' }}></a>
      <div  className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '1150px' }}>Avg. List_____________</div>
      <a id ='threebears' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '470px', top: '1230px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1250px' }}>sale price rate</div>
      <a id ='lordof' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '930px', top: '1220px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '1250px' }}>Avg. Differential_____________</div>
      <a id ='min' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1320px' }}></a>
      <a id ='max' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '740px', top: '1320px' }}></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1350px' }}>Ranges: $X - X low - high</div>
      <br/>
      <br/>
      <div id="container" style={{zIndex: '7', position: 'absolute', left: '300px', top: '1600px' }}>
  </div>
  <br/>
  <br/>
  <br/>
  <h5 className='opening' style={{zIndex: '7', position: 'absolute', left: '420px', top: '1700px' }}>Total County Market: 1/1/2021-5/31/2021[No Price Range]</h5>

<h2 className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1750px' }}>2021</h2>
<br/>
<br/>
<a id ='inject21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '500px', top: '1820px' }}></a>
<div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1850px' }}># Listings Sold - _______________</div>
<a id ='harley21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '860px', top: '1820px' }}></a>
<div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '1850px' }}>Avg. Sale_____________</div>
<a id ='sultan21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '475px', top: '1920px' }} ></a>
<div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '1950px' }}>Avg. DOM - _______________</div>
<a id ='oj21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '860px', top: '1920px' }}></a>
<div  className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '1950px' }}>Avg. List_____________</div>
<a id ='threebears21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '470px', top: '2030px' }}></a>
<div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2020px' }}>sale price rate</div>
<a id ='lordof21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2020px' }}></a>
<div className='opening' style={{zIndex: '7', position: 'absolute', left: '770px', top: '2050px' }}>Avg. Differential_____________</div>
<a id ='min21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '550px', top: '2120px' }}></a>
<a id ='max21' href='#' className='aopen' style={{zIndex: '7', position: 'absolute', left: '740px', top: '2120px' }}></a>
<div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2150px' }}>Ranges: $X - X low - high</div>
<br/>
<br/>
<div id="container" style={{zIndex: '7', position: 'absolute', left: '300px', top: '2400px' }}>
</div>
<br/>
<br/>
<br/>
<br/>
      <select id='value' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2300px' }} value={town} onChange={(e)=> setTown(e.target.value)}> 
    <option>---Choose Town---</option>
    {barnstabletowns.map((index) => {
return (
  <option value={index}>
    {index}
  </option>
);
    })}
    </select>

    <input style={{zIndex: '7', position: 'absolute', left: '100px', top: '2350px' }}type='number' onChange={(e)=> setPricevalue(e.target.value)}/>
    <input style={{zIndex: '7', position: 'absolute', left: '250px', top: '2350px' }}type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
    <Button style={{zIndex: '7', position: 'absolute', left: '400px', top: '2350px' }}variant='dark' type="button" value='Submit' onClick={marketANT}>Click Me</Button>
      <br/>

      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '2450px' }}>-|-Example from May/June 2022 -gridlines1/7 -|-</div>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '2400px', width: '1200px', height: '300px', borderRadius: '0%', background: 'grey' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '100px', top: '2400px'}}>[Year]</h5>
      <div id='salespermonthavg' className='opening' style={{zIndex: '7', position: 'absolute', left: '30px', top: '2400px'}}></div>
      <div id='updownperc' className='opening' style={{zIndex: '7', position: 'absolute', left: '30px', top: '2500px'}}></div>
      <div id='yearCurrent' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2500px' }}></div>
      <div id='yearCall'style={{zIndex: '7', position: 'absolute', left: '100px', top: '2600px' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '2400px'}}>$June</h5>
      <div id='currentmonth1' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2500px' }}></div>
      <div id='month1'style={{zIndex: '7', position: 'absolute', left: '300px', top: '2600px' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '500px', top: '2400px'}}>$July</h5>
      <div id='currentmonth2' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2500px' }}></div>
      <div id='month2' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2600px' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '700px', top: '2400px'}}>$August</h5>
      <div id='currentmonth3' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2500px' }}></div>
      <div id='month3' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2600px' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '900px', top: '2400px'}}>$September</h5>
      <div id='currentmonth4' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2500px' }}></div>
      <div id='month4' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2600px' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2400px'}}>Total for Year</h5>
      <div  id='totalyearANT' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2500px' }}></div>
      <div id='yearPrevious'style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2600px' }}></div>

  <div className='select'>

<h2>Cascading or Dependent Dropdown using React</h2>

<div>
<label>State - </label>
<select
placeholder="State"
value={selectedCountry}
onChange={(e) => setSelectedCountry(e.target.value)}
>
<option>--Choose State--</option>
{counties.map((value, key) => {
return (
  <option value={value.state} key={key}>
    {value.state}
  </option>
);
})}
</select>
</div>

<div>
<label>County - </label>
<select
placeholder="County"
value={selectedState}
onChange={(e) => setSelectedState(e.target.value)}
>
<option>--Choose County--</option>
{counties.map((value, key) => {
return (
  <option value={value.county} key={key}>
    {value.county}
  </option>
);
})}
</select>
</div>

<div>
<label>City/Town - </label>
<select
placeholder="City/Town"
value={selectedCity}
onChange={(e) => setSelectedCity(e.target.value)}
>
<option>--Choose City--</option>
{counties.map((value, key) => {
return (
  <option value={value.town} key={key}>
    {value.town}
  </option>
);
})}
</select>
</div>

</div>
  </div>
</>

);
}        

export default Login;