import React from "react";
   import ReactBootstrap from'react-bootstrap';
   import axios from'axios';
   import Context from'./context';
   //import CreateAccount from'./createaccount';
  // import'./alldata.css';
   import './suburb.css';
   //import './waterfront.css';
   import {Button} from'react-bootstrap';
   
   //import'bootstrap/dist/css/bootstrap.min.css';
   import DropdownButton from'react-bootstrap/DropdownButton';
   import Dropdown from'react-bootstrap/Dropdown';
   import image from './bank.jpeg';
   
   
   
   
   
   
   
   
   
   //function AllData(){
     //const ctx = React.useContext(UserContext);
     //return (
      // <>
     //  <h5>All Data in Store</h5>
      // {JSON.stringify(ctx)}<br/>
     //  </>
    // );
   //}
   
   function Buyercom(){
   
     
     
   
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
   
   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
     //fetch('http://localhost:5000/record')
     firstdateIndex();
     fetch('http://localhost:3000/singlefamily22')
     .then(response => response.json())
     .then(data => {
     let newArray = [...firstopenarray];
       //console.log(data);
       let norfolkcounty = [];
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
   
          let length = norfolkcounty.length;
         // console.log(length);
         document.getElementById('inject').innerHTML = length;
         document.getElementById('headerstatetop22').innerHTML = '5 month previous Total Market @ ' + `${newArray[0][0]}` + ' thru ' + `${newArray[0][143]}`; // showing 80...
   
         
         
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
   }, [county, price1, price2, datetop, towntop]); //{data} below is simply the [data, setData] that we have set the useState - set once we call that backend 
   
   
   
   const [data1, setData1] = React.useState('');
   const [titleavgdiff, setTitleavgdiff] = React.useState(0);
   
   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
     
     firstdateIndex();
     fetch('http://localhost:3000/singlefamily22')
     .then(response => response.json())
     .then(data => {
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
         
       if (data[i].saleprice >= data[i].listprice){
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

       
      
       setTitleavgdiff(Math.round(differential / greatV));
    

      
      //document.getElementById('lordof').innerHTML = avgdiff;
       
       
       
       let lengthgreat = great.length;
       //console.log(lengthgreat);
      

       let lengthless = greatless.length;
       //console.log(lengthless);
   
   
       let greaterthan = Math.round((greatV / lengthless) * 100);
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
   }, [county, price1, price2, datetop, towntop]); 
   
   
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////
         
   //////// 2021 market data
   const [openarraytop21, setOpenarraytop21] = React.useState([]);
   
   function firstdateIndex21(e){
   
   for (let i = 0; i < index21.length; i++){
   
   
   console.log(document.getElementById('datetopvalue').value);
   if ((document.getElementById('datetopvalue').value).substring(0, 5) === index21[i].substring(0, 5)){
   console.log(index21.indexOf(index21[i]));
   openarraytop21.push(index21.splice(index21.indexOf(index21[i]), 120));
   return openarraytop21;
   console.log(openarraytop21);
   }
   }
   }
   console.log(firstdateIndex21);
   
   
   
   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
     //fetch('http://localhost:5000/record')
     firstdateIndex21();
     fetch('http://localhost:3000/singlefamily22')
     .then(response => response.json())
     .then(data => {
       let newArray = [...openarraytop21];
       //console.log(data);
       let norfolkcounty = [];
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
   
          let length = norfolkcounty.length;
         // console.log(length);
         document.getElementById('inject21').innerHTML = length;
   
         document.getElementById('headerstatetop21').innerHTML = '5 month previous Total Market @ ' + `${newArray[0][0]}` + ' thru ' + `${newArray[0][153]}`; // showing 80...
   
         
         
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
   }, [county, price1, price2, datetop, towntop]); 

   const [titleavgdiff2, setTitleavgdiff2] = React.useState(0);
   
   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
     firstdateIndex21();
     fetch('http://localhost:3000/singlefamily22')
     .then(response => response.json())
     .then(data => {
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
   

       let greatV = great.length;
   
       let greaterthan = Math.round((greatV / lengthless) * 100);
       document.getElementById('threebears21').innerHTML = `${greaterthan}%` 
          
       


       let differential = 0;
       function add(item, counter, array){
        differential+=(item.differential); //NaN
       }
       great.forEach(add);
       console.log(differential);


       
      
       setTitleavgdiff2(Math.round(differential / greatV));
       //setData(JSON.stringify(data));
       const pricemax = Math.max(...greatless.map(item => item.saleprice));
       //console.log(pricemax);
       document.getElementById('max21').innerHTML = pricemax;
   
       const pricemin = Math.min(...greatless.map(item => item.saleprice));
       //console.log(pricemin);
       document.getElementById('min21').innerHTML = pricemin;
        
      
      }
     }
     });
   }, [county, price1, price2, datetop, towntop]); 
   
   
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   //Barnstable county regardless of timeline - price point sales avg DOM year recent - no calender state...
   
   const [pricerangecounty1, setPricerangecounty1] = React.useState();
   const [pricerangetown1, setPricerangetown1] = React.useState();
   const [selectedState2, setSelectedState2] = React.useState(); // MA

   const availableState2 = GLOBE1.states.find((s) => s.name === pricerangecounty1); // that is what this says...
   const availableTowns2 = availableState2?.counties?.find( //
    (c) => c.name === selectedState2 //
    ); //
   
   
   
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
        if (data[i].county === `${pricerangecounty1}`&& data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2022' || data[i].saledate ==='1/2/2022' || data[i].saledate ==='1/3/2022' || data[i].saledate ==='1/4/2022' || data[i].saledate ==='1/5/2022' || data[i].saledate ==='1/6/2022' || data[i].saledate ==='1/7/2022' || data[i].saledate ==='1/8/2022' || data[i].saledate ==='1/9/2022' || data[i].saledate ==='1/10/2022' || data[i].saledate ==='1/11/2022' || data[i].saledate ==='1/12/2022' || data[i].saledate ==='1/13/2022' || data[i].saledate ==='1/14/2022' || data[i].saledate ==='1/15/2022' || data[i].saledate ==='1/16/2022' || data[i].saledate ==='1/17/2022' || data[i].saledate ==='1/18/2022' || data[i].saledate ==='1/19/2022' || data[i].saledate ==='1/20/2022' || data[i].saledate ==='1/21/2022' || data[i].saledate ==='1/22/2022' || data[i].saledate ==='1/23/2022' || data[i].saledate ==='1/24/2022' || data[i].saledate ==='1/25/2022' || data[i].saledate ==='1/26/2022' || data[i].saledate ==='1/27/2022'|| data[i].saledate ==='1/28/2022'|| data[i].saledate ==='1/29/2022' || data[i].saledate ==='1/30/2022' || data[i].saledate ==='1/31/2022'
        || data[i].saledate === '2/1/2022' || data[i].saledate ==='2/2/2022' || data[i].saledate ==='2/3/2022' || data[i].saledate ==='2/4/2022' || data[i].saledate ==='2/5/2022' || data[i].saledate ==='2/6/2022' || data[i].saledate ==='2/7/2022' || data[i].saledate ==='2/8/2022' || data[i].saledate ==='2/9/2022' || data[i].saledate ==='2/10/2022' || data[i].saledate ==='2/11/2022' || data[i].saledate ==='2/12/2022' || data[i].saledate ==='2/13/2022' || data[i].saledate ==='2/14/2022' || data[i].saledate ==='2/15/2022'|| data[i].saledate ==='2/16/2022'|| data[i].saledate ==='2/17/2022' || data[i].saledate ==='2/18/2022' || data[i].saledate ==='2/19/2022' || data[i].saledate ==='2/20/2022' || data[i].saledate ==='2/21/2022' || data[i].saledate ==='2/22/2022' || data[i].saledate ==='2/23/2022' || data[i].saledate ==='2/24/2022' || data[i].saledate ==='2/25/2022' || data[i].saledate ==='2/26/2022'|| data[i].saledate ==='2/27/2022' || data[i].saledate ==='2/28/2022'
        || data[i].saledate === '3/1/2022' || data[i].saledate ==='3/2/2022'|| data[i].saledate ==='3/3/2022' || data[i].saledate ==='3/4/2022' || data[i].saledate ==='3/5/2022' || data[i].saledate ==='3/6/2022' || data[i].saledate ==='3/7/2022' || data[i].saledate ==='3/8/2022' || data[i].saledate ==='3/9/2022'|| data[i].saledate ==='3/10/2022'|| data[i].saledate ==='3/11/2022' || data[i].saledate ==='3/12/2022'|| data[i].saledate === '3/13/2022'|| data[i].saledate ==='3/14/2022' || data[i].saledate ==='3/15/2022' || data[i].saledate ==='3/16/2022' || data[i].saledate ==='3/17/2022' || data[i].saledate ==='3/18/2022' || data[i].saledate ==='3/19/2022' || data[i].saledate ==='3/20/2022' || data[i].saledate ==='3/21/2022'|| data[i].saledate ==='3/22/2022' || data[i].saledate ==='3/23/2022' || data[i].saledate ==='3/24/2022' || data[i].saledate ==='3/25/2022' || data[i].saledate ==='3/26/2022' || data[i].saledate ==='3/27/2022'|| data[i].saledate ==='3/28/2022' || data[i].saledate ==='3/29/2022' || data[i].saledate ==='3/30/2022' || data[i].saledate ==='3/31/2022' || data[i].saledate ==='4/1/2022'|| data[i].saledate ==='4/2/2022' || data[i].saledate ==='4/3/2022' || data[i].saledate ==='4/4/2022' || data[i].saledate ==='4/5/2022' || data[i].saledate ==='4/6/2022' || data[i].saledate ==='4/7/2022' || data[i].saledate ==='4/8/2022' || data[i].saledate ==='4/9/2022' || data[i].saledate ==='4/10/2022' || data[i].saledate ==='4/11/2022' || data[i].saledate ==='4/12/2022' || data[i].saledate ==='4/13/2022' || data[i].saledate ==='4/14/2022' || data[i].saledate ==='4/15/2022' || data[i].saledate ==='4/16/2022' || data[i].saledate ==='4/17/2022' || data[i].saledate ==='4/18/2022' || data[i].saledate ==='4/19/2022' || data[i].saledate ==='4/20/2022' || data[i].saledate ==='4/21/2022' || data[i].saledate ==='4/22/2022' || data[i].saledate ==='4/23/2022' || data[i].saledate ==='4/24/2022' || data[i].saledate ==='4/25/2022' || data[i].saledate ==='4/26/2022' || data[i].saledate ==='4/27/2022'|| data[i].saledate ==='4/28/2022'|| data[i].saledate ==='4/29/2022' || data[i].saledate ==='4/30/2022' 
        || data[i].saledate === '5/1/2022' || data[i].saledate ==='5/2/2022' || data[i].saledate ==='5/3/2022' || data[i].saledate ==='5/4/2022' || data[i].saledate ==='5/5/2022' || data[i].saledate ==='5/6/2022' || data[i].saledate ==='5/7/2022' || data[i].saledate ==='5/8/2022' || data[i].saledate ==='5/9/2022' || data[i].saledate ==='5/10/2022' || data[i].saledate ==='5/11/2022' || data[i].saledate ==='5/12/2022' || data[i].saledate ==='5/13/2022' || data[i].saledate ==='5/14/2022' || data[i].saledate ==='5/15/2022'|| data[i].saledate ==='5/16/2022'|| data[i].saledate ==='5/17/2022' || data[i].saledate ==='5/18/2022' || data[i].saledate ==='5/19/2022' || data[i].saledate ==='5/20/2022' || data[i].saledate ==='5/21/2022' || data[i].saledate ==='5/22/2022' || data[i].saledate ==='5/23/2022' || data[i].saledate ==='5/24/2022' || data[i].saledate ==='5/25/2022' || data[i].saledate ==='5/26/2022'|| data[i].saledate ==='5/27/2022' || data[i].saledate ==='5/28/2022'
        || data[i].saledate === '5/29/2022' || data[i].saledate === '5/30/2022' || data[i].saledate ==='5/31/2022') ){
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
   }, [pricerangecounty1, pricerangetown1]);
   
   
   
   
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
        if (data[i].county === `${pricerangecounty1}`&& data[i].townstate === `${pricerangetown1}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2021' || data[i].saledate ==='1/2/2021' || data[i].saledate ==='1/3/2021' || data[i].saledate ==='1/4/2021' || data[i].saledate ==='1/5/2021' || data[i].saledate ==='1/6/2021' || data[i].saledate ==='1/7/2021' || data[i].saledate ==='1/8/2021' || data[i].saledate ==='1/9/2021' || data[i].saledate ==='1/10/2021' || data[i].saledate ==='1/11/2021' || data[i].saledate ==='1/12/2021' || data[i].saledate ==='1/13/2021' || data[i].saledate ==='1/14/2021' || data[i].saledate ==='1/15/2021' || data[i].saledate ==='1/16/2021' || data[i].saledate ==='1/17/2021' || data[i].saledate ==='1/18/2021' || data[i].saledate ==='1/19/2021' || data[i].saledate ==='1/20/2021' || data[i].saledate ==='1/21/2021' || data[i].saledate ==='1/22/2021' || data[i].saledate ==='1/23/2021' || data[i].saledate ==='1/24/2021' || data[i].saledate ==='1/25/2021' || data[i].saledate ==='1/26/2021' || data[i].saledate ==='1/27/2021'|| data[i].saledate ==='1/28/2021'|| data[i].saledate ==='1/29/2021' || data[i].saledate ==='1/30/2021' || data[i].saledate ==='1/31/2021'
        || data[i].saledate === '2/1/2021' || data[i].saledate ==='2/2/2021' || data[i].saledate ==='2/3/2021' || data[i].saledate ==='2/4/2021' || data[i].saledate ==='2/5/2021' || data[i].saledate ==='2/6/2021' || data[i].saledate ==='2/7/2021' || data[i].saledate ==='2/8/2021' || data[i].saledate ==='2/9/2021' || data[i].saledate ==='2/10/2021' || data[i].saledate ==='2/11/2021' || data[i].saledate ==='2/12/2021' || data[i].saledate ==='2/13/2021' || data[i].saledate ==='2/14/2021' || data[i].saledate ==='2/15/2021'|| data[i].saledate ==='2/16/2021'|| data[i].saledate ==='2/17/2021' || data[i].saledate ==='2/18/2021' || data[i].saledate ==='2/19/2021' || data[i].saledate ==='2/20/2021' || data[i].saledate ==='2/21/2021' || data[i].saledate ==='2/22/2021' || data[i].saledate ==='2/23/2021' || data[i].saledate ==='2/24/2021' || data[i].saledate ==='2/25/2021' || data[i].saledate ==='2/26/2021'|| data[i].saledate ==='2/27/2021' || data[i].saledate ==='2/28/2021'
        || data[i].saledate === '3/1/2021' || data[i].saledate ==='3/2/2021'|| data[i].saledate ==='3/3/2021' || data[i].saledate ==='3/4/2021' || data[i].saledate ==='3/5/2021' || data[i].saledate ==='3/6/2021' || data[i].saledate ==='3/7/2021' || data[i].saledate ==='3/8/2021' || data[i].saledate ==='3/9/2021'|| data[i].saledate ==='3/10/2021'|| data[i].saledate ==='3/11/2021' || data[i].saledate ==='3/12/2021'|| data[i].saledate === '3/13/2021'|| data[i].saledate ==='3/14/2021' || data[i].saledate ==='3/15/2021' || data[i].saledate ==='3/16/2021' || data[i].saledate ==='3/17/2021' || data[i].saledate ==='3/18/2021' || data[i].saledate ==='3/19/2021' || data[i].saledate ==='3/20/2021' || data[i].saledate ==='3/21/2021'|| data[i].saledate ==='3/22/2021' || data[i].saledate ==='3/23/2021' || data[i].saledate ==='3/24/2021' || data[i].saledate ==='3/25/2021' || data[i].saledate ==='3/26/2021' || data[i].saledate ==='3/27/2021'|| data[i].saledate ==='3/28/2021' || data[i].saledate ==='3/29/2021' || data[i].saledate ==='3/30/2021' || data[i].saledate ==='3/31/2021' || data[i].saledate ==='4/1/2021'|| data[i].saledate ==='4/2/2021' || data[i].saledate ==='4/3/2021' || data[i].saledate ==='4/4/2021' || data[i].saledate ==='4/5/2021' || data[i].saledate ==='4/6/2021' || data[i].saledate ==='4/7/2021' || data[i].saledate ==='4/8/2021' || data[i].saledate ==='4/9/2021' || data[i].saledate ==='4/10/2021' || data[i].saledate ==='4/11/2021' || data[i].saledate ==='4/12/2021' || data[i].saledate ==='4/13/2021' || data[i].saledate ==='4/14/2021' || data[i].saledate ==='4/15/2021' || data[i].saledate ==='4/16/2021' || data[i].saledate ==='4/17/2021' || data[i].saledate ==='4/18/2021' || data[i].saledate ==='4/19/2021' || data[i].saledate ==='4/20/2021' || data[i].saledate ==='4/21/2021' || data[i].saledate ==='4/22/2021' || data[i].saledate ==='4/23/2021' || data[i].saledate ==='4/24/2021' || data[i].saledate ==='4/25/2021' || data[i].saledate ==='4/26/2021' || data[i].saledate ==='4/27/2021'|| data[i].saledate ==='4/28/2021'|| data[i].saledate ==='4/29/2021' || data[i].saledate ==='4/30/2021' || 
        data[i].saledate === '5/1/2021' || data[i].saledate ==='5/2/2021' || data[i].saledate ==='5/3/2021' || data[i].saledate ==='5/4/2021' || data[i].saledate ==='5/5/2021' || data[i].saledate ==='5/6/2021' || data[i].saledate ==='5/7/2021' || data[i].saledate ==='5/8/2021' || data[i].saledate ==='5/9/2021' || data[i].saledate ==='5/10/2021' || data[i].saledate ==='5/11/2021' || data[i].saledate ==='5/12/2021' || data[i].saledate ==='5/13/2021' || data[i].saledate ==='5/14/2021' || data[i].saledate ==='5/15/2021'|| data[i].saledate ==='5/16/2021'|| data[i].saledate ==='5/17/2021' || data[i].saledate ==='5/18/2021' || data[i].saledate ==='5/19/2021' || data[i].saledate ==='5/20/2021' || data[i].saledate ==='5/21/2021' || data[i].saledate ==='5/22/2021' || data[i].saledate ==='5/23/2021' || data[i].saledate ==='5/24/2021' || data[i].saledate ==='5/25/2021' || data[i].saledate ==='5/26/2021'|| data[i].saledate ==='5/27/2021' || data[i].saledate ==='5/28/2021'
       || data[i].saledate === '5/29/2021' || data[i].saledate === '5/30/2021' || data[i].saledate ==='5/31/2021') ){
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
   }, [pricerangetown1, pricerangecounty1]);
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
   React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
     fetch('http://localhost:3000/singlefamily22')
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
     fetch('http://localhost:3000/singlefamily22')
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
   
   async function populateQuoteperc(e){ //this functions onClick...
     const req = await fetch('http://localhost:3000/singlefamily22')
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
   
           const below14 =  Math.round((lengthless14 / sale14) * 100);
           const below30 =  Math.round((lengthless30 / sale30)  * 100);
           const below45 =  Math.round((lengthless45 / sale45)  * 100);
           const below90 =  Math.round((lengthless90 / sale90)  * 100);
           const below120 =  Math.round((lengthless120 / sale120)  * 100);
           const below121 =  Math.round((lengthless121 / sale121)  * 100);
   
           
   
   
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
   
   
          
           // console.log(saleprice);
          let averagediff14 = Math.round( differential / sale14 );
          let averagediff30 = Math.round( differential2 / sale30 );
          let averagediff45 = Math.round( differential3 / sale45 );
          let averagediff90 = Math.round( (differential4) / sale90 );
          let averagediff120 = Math.round( differential5 / sale120 );
          let averagediff121 = Math.round( differential6 / sale121 );
   
           
          
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
   
     
     //////////////////////////////////////////////////////////////////////////////////////////////////////
     const [firstentirearray, setFirstentirearray] = React.useState([]);

     function entireArrayIndex(e){
   
      for (let i = 0; i < index22.length; i++){
      
      
      console.log(document.getElementById('datetopvalue').value);
      if (document.getElementById('datetopvalue').value === index22[i]){
      console.log(index22.indexOf(index22[i]));
      firstentirearray.push(index22.splice(index22.indexOf(index22[i]), 365));
      return firstentirearray;
      console.log(firstentirearray);
      }
      
      
      }
      }
      console.log(entireArrayIndex);
      



     React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
      entireArrayIndex();
      fetch('http://localhost:3000/singlefamily22')
       .then(response => response.json())
       .then(data => {
         console.log(data) // all 15k objects...
         let newArray = [...firstentirearray]
              
   
               let barnstablecounty = [];
               let great = [];
               for (let i = 0; i<data.length; i++){
                 if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === newArray[0][365] || data[i].saledate === newArray[0][364] || data[i].saledate ==='1/3/2022' || data[i].saledate ==='1/4/2022' || data[i].saledate ==='1/5/2022' || data[i].saledate ==='1/6/2022' || data[i].saledate ==='1/7/2022' || data[i].saledate ==='1/8/2022' || data[i].saledate ==='1/9/2022' || data[i].saledate ==='1/10/2022' || data[i].saledate ==='1/11/2022' || data[i].saledate ==='1/12/2022' || data[i].saledate ==='1/13/2022' || data[i].saledate ==='1/14/2022' || data[i].saledate ==='1/15/2022' || data[i].saledate ==='1/16/2022' || data[i].saledate ==='1/17/2022' || data[i].saledate ==='1/18/2022' || data[i].saledate ==='1/19/2022' || data[i].saledate ==='1/20/2022' || data[i].saledate ==='1/21/2022' || data[i].saledate ==='1/22/2022' || data[i].saledate ==='1/23/2022' || data[i].saledate ==='1/24/2022' || data[i].saledate ==='1/25/2022' || data[i].saledate ==='1/26/2022' || data[i].saledate ==='1/27/2022'|| data[i].saledate ==='1/28/2022'|| data[i].saledate ==='1/29/2022' || data[i].saledate ==='1/30/2022' || data[i].saledate ==='1/31/2022'
                 || data[i].saledate === '2/1/2022' || data[i].saledate ==='2/2/2022' || data[i].saledate ==='2/3/2022' || data[i].saledate ==='2/4/2022' || data[i].saledate ==='2/5/2022' || data[i].saledate ==='2/6/2022' || data[i].saledate ==='2/7/2022' || data[i].saledate ==='2/8/2022' || data[i].saledate ==='2/9/2022' || data[i].saledate ==='2/10/2022' || data[i].saledate ==='2/11/2022' || data[i].saledate ==='2/12/2022' || data[i].saledate ==='2/13/2022' || data[i].saledate ==='2/14/2022' || data[i].saledate ==='2/15/2022'|| data[i].saledate ==='2/16/2022'|| data[i].saledate ==='2/17/2022' || data[i].saledate ==='2/18/2022' || data[i].saledate ==='2/19/2022' || data[i].saledate ==='2/20/2022' || data[i].saledate ==='2/21/2022' || data[i].saledate ==='2/22/2022' || data[i].saledate ==='2/23/2022' || data[i].saledate ==='2/24/2022' || data[i].saledate ==='2/25/2022' || data[i].saledate ==='2/26/2022'|| data[i].saledate ==='2/27/2022' || data[i].saledate ==='2/28/2022'
                 || data[i].saledate === '3/1/2022' || data[i].saledate ==='3/2/2022'|| data[i].saledate ==='3/3/2022' || data[i].saledate ==='3/4/2022' || data[i].saledate ==='3/5/2022' || data[i].saledate ==='3/6/2022' || data[i].saledate ==='3/7/2022' || data[i].saledate ==='3/8/2022' || data[i].saledate ==='3/9/2022'|| data[i].saledate ==='3/10/2022'|| data[i].saledate ==='3/11/2022' || data[i].saledate ==='3/12/2022'|| data[i].saledate === '3/13/2022'|| data[i].saledate ==='3/14/2022' || data[i].saledate ==='3/15/2022' || data[i].saledate ==='3/16/2022' || data[i].saledate ==='3/17/2022' || data[i].saledate ==='3/18/2022' || data[i].saledate ==='3/19/2022' || data[i].saledate ==='3/20/2022' || data[i].saledate ==='3/21/2022'|| data[i].saledate ==='3/22/2022' || data[i].saledate ==='3/23/2022' || data[i].saledate ==='3/24/2022' || data[i].saledate ==='3/25/2022' || data[i].saledate ==='3/26/2022' || data[i].saledate ==='3/27/2022'|| data[i].saledate ==='3/28/2022' || data[i].saledate ==='3/29/2022' || data[i].saledate ==='3/30/2022' || data[i].saledate ==='3/31/2022' && data[i].saledate ==='4/1/2022'|| data[i].saledate ==='4/2/2022' || data[i].saledate ==='4/3/2022' || data[i].saledate ==='4/4/2022' || data[i].saledate ==='4/5/2022' || data[i].saledate ==='4/6/2022' || data[i].saledate ==='4/7/2022' || data[i].saledate ==='4/8/2022' || data[i].saledate ==='4/9/2022' || data[i].saledate ==='4/10/2022' || data[i].saledate ==='4/11/2022' || data[i].saledate ==='4/12/2022' || data[i].saledate ==='4/13/2022' || data[i].saledate ==='4/14/2022' || data[i].saledate ==='4/15/2022' || data[i].saledate ==='4/16/2022' || data[i].saledate ==='4/17/2022' || data[i].saledate ==='4/18/2022' || data[i].saledate ==='4/19/2022' || data[i].saledate ==='4/20/2022' || data[i].saledate ==='4/21/2022' || data[i].saledate ==='4/22/2022' || data[i].saledate ==='4/23/2022' || data[i].saledate ==='4/24/2022' || data[i].saledate ==='4/25/2022' || data[i].saledate ==='4/26/2022' || data[i].saledate ==='4/27/2022'|| data[i].saledate ==='4/28/2022'|| data[i].saledate ==='4/29/2022' || data[i].saledate ==='4/30/2022' || 
                  data[i].saledate === '5/1/2022' || data[i].saledate ==='5/2/2022' || data[i].saledate ==='5/3/2022' || data[i].saledate ==='5/4/2022' || data[i].saledate ==='5/5/2022' || data[i].saledate ==='5/6/2022' || data[i].saledate ==='5/7/2022' || data[i].saledate ==='5/8/2022' || data[i].saledate ==='5/9/2022' || data[i].saledate ==='5/10/2022' || data[i].saledate ==='5/11/2022' || data[i].saledate ==='5/12/2022' || data[i].saledate ==='5/13/2022' || data[i].saledate ==='5/14/2022' || data[i].saledate ==='5/15/2022'|| data[i].saledate ==='5/16/2022'|| data[i].saledate ==='5/17/2022' || data[i].saledate ==='5/18/2022' || data[i].saledate ==='5/19/2022' || data[i].saledate ==='5/20/2022' || data[i].saledate ==='5/21/2022' || data[i].saledate ==='5/22/2022' || data[i].saledate ==='5/23/2022' || data[i].saledate ==='5/24/2022' || data[i].saledate ==='5/25/2022' || data[i].saledate ==='5/26/2022'|| data[i].saledate ==='5/27/2022' || data[i].saledate ==='5/28/2022'
                 || data[i].saledate === '5/29/2022' || data[i].saledate ==='5/30/2022'|| data[i].saledate ==='5/31/2022')){
                   barnstablecounty.push(data[i]);
   
                   if (data[i].saleprice >= data[i].listprice){
                     great.push(data[i]);
                     //jconsole.log(great);
                   }
                 
                  // console.log(barnstablecounty.saledate);
       
                  let length = barnstablecounty.length;
                 // console.log(length);
                 document.getElementById('quarterly').innerHTML = length;
                 
                 let greatlength = great.length;
                 let atorabove = Math.round((greatlength / length) * 100);
                 document.getElementById('catchmaxmil').innerHTML = atorabove;
                 
                 
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
                 // console.log(saleprice);
                // let average = Math.round(saleprice / length);
                // let averagelist = Math.round(listprice / length);
                 let avgdom = Math.round(DOM / length );
                 let avgdiff = Math.round(differential / length);
                 //console.log(average);
                // console.log(averagelist);
                 //console.log(avgdiff);
                // document.getElementById('harley2').innerHTML = average;
                // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
                 
                document.getElementById('sultan2').innerHTML = avgdom;
                 document.getElementById('lordof2').innerHTML = avgdiff;
   
               }
           
             }
          
           //setData(JSON.stringify(data));
         });
       }, [pricerangecounty1, pricerangetown1]);
   
   
       React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
         fetch('http://localhost:3000/singlefamily22')
         .then(response => response.json())
         .then(data => {
           console.log(data) // all 15k objects...
                
     
                 let barnstablecounty = [];
                 let great = [];
                 for (let i = 0; i<data.length; i++){
                   if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2021 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2021'|| data[i].saledate ==='1/2/2021' || data[i].saledate ==='1/3/2021' || data[i].saledate ==='1/4/2021' || data[i].saledate ==='1/5/2021' || data[i].saledate ==='1/6/2021' || data[i].saledate ==='1/7/2021' || data[i].saledate ==='1/8/2021' || data[i].saledate ==='1/9/2021' || data[i].saledate ==='1/10/2021' || data[i].saledate ==='1/11/2021' || data[i].saledate ==='1/12/2021' || data[i].saledate ==='1/13/2021' || data[i].saledate ==='1/14/2021' || data[i].saledate ==='1/15/2021' || data[i].saledate ==='1/16/2021' || data[i].saledate ==='1/17/2021' || data[i].saledate ==='1/18/2021' || data[i].saledate ==='1/19/2021' || data[i].saledate ==='1/20/2021' || data[i].saledate ==='1/21/2021' || data[i].saledate ==='1/22/2021' || data[i].saledate ==='1/23/2021' || data[i].saledate ==='1/24/2021' || data[i].saledate ==='1/25/2021' || data[i].saledate ==='1/26/2021' || data[i].saledate ==='1/27/2021'|| data[i].saledate ==='1/28/2021'|| data[i].saledate ==='1/29/2021' || data[i].saledate ==='1/30/2021' || data[i].saledate ==='1/31/2021'
                   || data[i].saledate === '2/1/2021' || data[i].saledate ==='2/2/2021' || data[i].saledate ==='2/3/2021' || data[i].saledate ==='2/4/2021' || data[i].saledate ==='2/5/2021' || data[i].saledate ==='2/6/2021' || data[i].saledate ==='2/7/2021' || data[i].saledate ==='2/8/2021' || data[i].saledate ==='2/9/2021' || data[i].saledate ==='2/10/2021' || data[i].saledate ==='2/11/2021' || data[i].saledate ==='2/12/2021' || data[i].saledate ==='2/13/2021' || data[i].saledate ==='2/14/2021' || data[i].saledate ==='2/15/2021'|| data[i].saledate ==='2/16/2021'|| data[i].saledate ==='2/17/2021' || data[i].saledate ==='2/18/2021' || data[i].saledate ==='2/19/2021' || data[i].saledate ==='2/20/2021' || data[i].saledate ==='2/21/2021' || data[i].saledate ==='2/22/2021' || data[i].saledate ==='2/23/2021' || data[i].saledate ==='2/24/2021' || data[i].saledate ==='2/25/2021' || data[i].saledate ==='2/26/2021'|| data[i].saledate ==='2/27/2021' || data[i].saledate ==='2/28/2021'
                   || data[i].saledate === '3/1/2021' || data[i].saledate ==='3/2/2021'|| data[i].saledate ==='3/3/2021' || data[i].saledate ==='3/4/2021' || data[i].saledate ==='3/5/2021' || data[i].saledate ==='3/6/2021' || data[i].saledate ==='3/7/2021' || data[i].saledate ==='3/8/2021' || data[i].saledate ==='3/9/2021'|| data[i].saledate ==='3/10/2021'|| data[i].saledate ==='3/11/2021' || data[i].saledate ==='3/12/2021'|| data[i].saledate === '3/13/2021'|| data[i].saledate ==='3/14/2021' || data[i].saledate ==='3/15/2021' || data[i].saledate ==='3/16/2021' || data[i].saledate ==='3/17/2021' || data[i].saledate ==='3/18/2021' || data[i].saledate ==='3/19/2021' || data[i].saledate ==='3/20/2021' || data[i].saledate ==='3/21/2021'|| data[i].saledate ==='3/22/2021' || data[i].saledate ==='3/23/2021' || data[i].saledate ==='3/24/2021' || data[i].saledate ==='3/25/2021' || data[i].saledate ==='3/26/2021' || data[i].saledate ==='3/27/2021'|| data[i].saledate ==='3/28/2021' || data[i].saledate ==='3/29/2021' || data[i].saledate ==='3/30/2021' || data[i].saledate ==='3/31/2021' && data[i].saledate ==='4/1/2021'|| data[i].saledate ==='4/2/2021' || data[i].saledate ==='4/3/2021' || data[i].saledate ==='4/4/2021' || data[i].saledate ==='4/5/2021' || data[i].saledate ==='4/6/2021' || data[i].saledate ==='4/7/2021' || data[i].saledate ==='4/8/2021' || data[i].saledate ==='4/9/2021' || data[i].saledate ==='4/10/2021' || data[i].saledate ==='4/11/2021' || data[i].saledate ==='4/12/2021' || data[i].saledate ==='4/13/2021' || data[i].saledate ==='4/14/2021' || data[i].saledate ==='4/15/2021' || data[i].saledate ==='4/16/2021' || data[i].saledate ==='4/17/2021' || data[i].saledate ==='4/18/2021' || data[i].saledate ==='4/19/2021' || data[i].saledate ==='4/20/2021' || data[i].saledate ==='4/21/2021' || data[i].saledate ==='4/22/2021' || data[i].saledate ==='4/23/2021' || data[i].saledate ==='4/24/2021' || data[i].saledate ==='4/25/2021' || data[i].saledate ==='4/26/2021' || data[i].saledate ==='4/27/2021'|| data[i].saledate ==='4/28/2021'|| data[i].saledate ==='4/29/2021' || data[i].saledate ==='4/30/2021' || 
                    data[i].saledate === '5/1/2021' || data[i].saledate ==='5/2/2021' || data[i].saledate ==='5/3/2021' || data[i].saledate ==='5/4/2021' || data[i].saledate ==='5/5/2021' || data[i].saledate ==='5/6/2021' || data[i].saledate ==='5/7/2021' || data[i].saledate ==='5/8/2021' || data[i].saledate ==='5/9/2021' || data[i].saledate ==='5/10/2021' || data[i].saledate ==='5/11/2021' || data[i].saledate ==='5/12/2021' || data[i].saledate ==='5/13/2021' || data[i].saledate ==='5/14/2021' || data[i].saledate ==='5/15/2021'|| data[i].saledate ==='5/16/2021'|| data[i].saledate ==='5/17/2021' || data[i].saledate ==='5/18/2021' || data[i].saledate ==='5/19/2021' || data[i].saledate ==='5/20/2021' || data[i].saledate ==='5/21/2021' || data[i].saledate ==='5/22/2021' || data[i].saledate ==='5/23/2021' || data[i].saledate ==='5/24/2021' || data[i].saledate ==='5/25/2021' || data[i].saledate ==='5/26/2021'|| data[i].saledate ==='5/27/2021' || data[i].saledate ==='5/28/2021'
                   || data[i].saledate === '5/29/2021' || data[i].saledate ==='5/30/2021'|| data[i].saledate ==='5/31/2021')){
                     barnstablecounty.push(data[i]);
                     if (data[i].saleprice >= data[i].listprice){
                       great.push(data[i]);
                       //jconsole.log(great);
                     }
                   
                    // console.log(barnstablecounty.saledate);
         
                    let length = barnstablecounty.length;
                   // console.log(length);
                   document.getElementById('quarterly21').innerHTML = length;
                   
                   let greatlength = great.length;
                   let atorabove = Math.round((greatlength / length) * 100);
                   document.getElementById('catchmaxmil21').innerHTML = atorabove;
                   
                   
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
                   // console.log(saleprice);
                  // let average = Math.round(saleprice / length);
                  // let averagelist = Math.round(listprice / length);
                   let avgdom = Math.round(DOM / length );
                   let avgdiff = Math.round(differential / length);
                   //console.log(average);
                  // console.log(averagelist);
                   //console.log(avgdiff);
                  // document.getElementById('harley2').innerHTML = average;
                  // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
                   
                  document.getElementById('sultan212').innerHTML = avgdom;
                   document.getElementById('lordof212').innerHTML = avgdiff;
     
                 }
             
               }
            
             //setData(JSON.stringify(data));
           });
         }, [pricerangecounty1, pricerangetown1]);
   
   
         React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
           fetch('http://localhost:3000/singlefamily22')
           .then(response => response.json())
           .then(data => {
             console.log(data) // all 15k objects...
                  
       
                   let barnstablecounty = [];
                   let great = [];
                   for (let i = 0; i<data.length; i++){
                     if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2020 && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2020'|| data[i].saledate ==='1/2/2020' || data[i].saledate ==='1/3/2020' || data[i].saledate ==='1/4/2020' || data[i].saledate ==='1/5/2020' || data[i].saledate ==='1/6/2020' || data[i].saledate ==='1/7/2020' || data[i].saledate ==='1/8/2020' || data[i].saledate ==='1/9/2020' || data[i].saledate ==='1/10/2020' || data[i].saledate ==='1/11/2020' || data[i].saledate ==='1/12/2020' || data[i].saledate ==='1/13/2020' || data[i].saledate ==='1/14/2020' || data[i].saledate ==='1/15/2020' || data[i].saledate ==='1/16/2020' || data[i].saledate ==='1/17/2020' || data[i].saledate ==='1/18/2020' || data[i].saledate ==='1/19/2020' || data[i].saledate ==='1/20/2020' || data[i].saledate ==='1/21/2020' || data[i].saledate ==='1/22/2020' || data[i].saledate ==='1/23/2020' || data[i].saledate ==='1/24/2020' || data[i].saledate ==='1/25/2020' || data[i].saledate ==='1/26/2020' || data[i].saledate ==='1/27/2020'|| data[i].saledate ==='1/28/2020'|| data[i].saledate ==='1/29/2020' || data[i].saledate ==='1/30/2020' || data[i].saledate ==='1/31/2020'
                     || data[i].saledate === '2/1/2020' || data[i].saledate ==='2/2/2020' || data[i].saledate ==='2/3/2020' || data[i].saledate ==='2/4/2020' || data[i].saledate ==='2/5/2020' || data[i].saledate ==='2/6/2020' || data[i].saledate ==='2/7/2020' || data[i].saledate ==='2/8/2020' || data[i].saledate ==='2/9/2020' || data[i].saledate ==='2/10/2020' || data[i].saledate ==='2/11/2020' || data[i].saledate ==='2/12/2020' || data[i].saledate ==='2/13/2020' || data[i].saledate ==='2/14/2020' || data[i].saledate ==='2/15/2020'|| data[i].saledate ==='2/16/2020'|| data[i].saledate ==='2/17/2020' || data[i].saledate ==='2/18/2020' || data[i].saledate ==='2/19/2020' || data[i].saledate ==='2/20/2020' || data[i].saledate ==='2/21/2020' || data[i].saledate ==='2/22/2020' || data[i].saledate ==='2/23/2020' || data[i].saledate ==='2/24/2020' || data[i].saledate ==='2/25/2020' || data[i].saledate ==='2/26/2020'|| data[i].saledate ==='2/27/2020' || data[i].saledate ==='2/28/2020'
                     || data[i].saledate === '3/1/2020' || data[i].saledate ==='3/2/2020'|| data[i].saledate ==='3/3/2020' || data[i].saledate ==='3/4/2020' || data[i].saledate ==='3/5/2020' || data[i].saledate ==='3/6/2020' || data[i].saledate ==='3/7/2020' || data[i].saledate ==='3/8/2020' || data[i].saledate ==='3/9/2020'|| data[i].saledate ==='3/10/2020'|| data[i].saledate ==='3/11/2020' || data[i].saledate ==='3/12/2020'|| data[i].saledate === '3/13/2020'|| data[i].saledate ==='3/14/2020' || data[i].saledate ==='3/15/2020' || data[i].saledate ==='3/16/2020' || data[i].saledate ==='3/17/2020' || data[i].saledate ==='3/18/2020' || data[i].saledate ==='3/19/2020' || data[i].saledate ==='3/20/2020' || data[i].saledate ==='3/21/2020'|| data[i].saledate ==='3/22/2020' || data[i].saledate ==='3/23/2020' || data[i].saledate ==='3/24/2020' || data[i].saledate ==='3/25/2020' || data[i].saledate ==='3/26/2020' || data[i].saledate ==='3/27/2020'|| data[i].saledate ==='3/28/2020' || data[i].saledate ==='3/29/2020' || data[i].saledate ==='3/30/2020' || data[i].saledate ==='3/31/2020' && data[i].saledate ==='4/1/2020'|| data[i].saledate ==='4/2/2020' || data[i].saledate ==='4/3/2020' || data[i].saledate ==='4/4/2020' || data[i].saledate ==='4/5/2020' || data[i].saledate ==='4/6/2020' || data[i].saledate ==='4/7/2020' || data[i].saledate ==='4/8/2020' || data[i].saledate ==='4/9/2020' || data[i].saledate ==='4/10/2020' || data[i].saledate ==='4/11/2020' || data[i].saledate ==='4/12/2020' || data[i].saledate ==='4/13/2020' || data[i].saledate ==='4/14/2020' || data[i].saledate ==='4/15/2020' || data[i].saledate ==='4/16/2020' || data[i].saledate ==='4/17/2020' || data[i].saledate ==='4/18/2020' || data[i].saledate ==='4/19/2020' || data[i].saledate ==='4/20/2020' || data[i].saledate ==='4/21/2020' || data[i].saledate ==='4/22/2020' || data[i].saledate ==='4/23/2020' || data[i].saledate ==='4/24/2020' || data[i].saledate ==='4/25/2020' || data[i].saledate ==='4/26/2020' || data[i].saledate ==='4/27/2020'|| data[i].saledate ==='4/28/2020'|| data[i].saledate ==='4/29/2020' || data[i].saledate ==='4/30/2020' || 
                      data[i].saledate === '5/1/2020' || data[i].saledate ==='5/2/2020' || data[i].saledate ==='5/3/2020' || data[i].saledate ==='5/4/2020' || data[i].saledate ==='5/5/2020' || data[i].saledate ==='5/6/2020' || data[i].saledate ==='5/7/2020' || data[i].saledate ==='5/8/2020' || data[i].saledate ==='5/9/2020' || data[i].saledate ==='5/10/2020' || data[i].saledate ==='5/11/2020' || data[i].saledate ==='5/12/2020' || data[i].saledate ==='5/13/2020' || data[i].saledate ==='5/14/2020' || data[i].saledate ==='5/15/2020'|| data[i].saledate ==='5/16/2020'|| data[i].saledate ==='5/17/2020' || data[i].saledate ==='5/18/2020' || data[i].saledate ==='5/19/2020' || data[i].saledate ==='5/20/2020' || data[i].saledate ==='5/21/2020' || data[i].saledate ==='5/22/2020' || data[i].saledate ==='5/23/2020' || data[i].saledate ==='5/24/2020' || data[i].saledate ==='5/25/2020' || data[i].saledate ==='5/26/2020'|| data[i].saledate ==='5/27/2020' || data[i].saledate ==='5/28/2020'
                     || data[i].saledate === '5/29/2020' || data[i].saledate ==='5/30/2020'|| data[i].saledate ==='5/31/2020')){
                       barnstablecounty.push(data[i]);
                       if (data[i].saleprice >= data[i].listprice){
                         great.push(data[i]);
                         //jconsole.log(great);
                       }
                     
                      // console.log(barnstablecounty.saledate);
           
                      let length = barnstablecounty.length;
                     // console.log(length);
                     document.getElementById('quarterly20').innerHTML = length;
                     
                     let greatlength = great.length;
                     let atorabove = Math.round((greatlength / length) * 100);
                     document.getElementById('catchmaxmil20').innerHTML = atorabove;
                     
                     
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
                     // console.log(saleprice);
                    // let average = Math.round(saleprice / length);
                    // let averagelist = Math.round(listprice / length);
                     let avgdom = Math.round(DOM / length );
                     let avgdiff = Math.round(differential / length);
                     //console.log(average);
                    // console.log(averagelist);
                     //console.log(avgdiff);
                    // document.getElementById('harley2').innerHTML = average;
                    // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
                     
                    document.getElementById('sultan20').innerHTML = avgdom;
                     document.getElementById('lordof20').innerHTML = avgdiff;
       
                   }
               
                 }
              
               //setData(JSON.stringify(data));
             });
           }, [pricerangecounty1, pricerangetown1]);
   
           React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
             fetch('http://localhost:3000/singlefamily22')
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
                         if (data[i].saleprice >= data[i].listprice){
                           great.push(data[i]);
                           //jconsole.log(great);
                         }
                       
                        // console.log(barnstablecounty.saledate);
             
                        let length = barnstablecounty.length;
                       // console.log(length);
                       document.getElementById('quarterly19').innerHTML = length;
                       
                       let greatlength = great.length;
                       let atorabove = Math.round((greatlength / length) * 100);
                       document.getElementById('catchmaxmil19').innerHTML = atorabove;
                       
                       
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
                       // console.log(saleprice);
                      // let average = Math.round(saleprice / length);
                      // let averagelist = Math.round(listprice / length);
                       let avgdom = Math.round(DOM / length );
                       let avgdiff = Math.round(differential / length);
                       //console.log(average);
                      // console.log(averagelist);
                       //console.log(avgdiff);
                      // document.getElementById('harley2').innerHTML = average;
                      // document.getElementById('oj2').innerHTML = averagelist; // this avg sale price number is correct...  
                       
                      document.getElementById('sultan19').innerHTML = avgdom;
                       document.getElementById('lordof19').innerHTML = avgdiff;
         
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
             // commercial render...
             const [totallessdiff240, setTotallessdiff240] = React.useState(0);
             const [totallessdiff301, setTotallessdiff301] = React.useState(0);

     
             React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
               fetch('http://localhost:3000/singlefamily22')
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

                 // commercial render...
                 let twofourzero = [];
                 let threehundredone = [];
             
                 
                     let great14 = []; // 0 here
                     let great30 = [];
                     let great45 = [];
                     let great90 = [];
                     let great120 = [];
                     let great121 = []; 

                     // commercial render...
                     let twofourzero1 = [];
                     let threehundredone1 = [];
                     
                 for (let i = 0; i<data.length; i++){
                   if (data[i].county === `${pricerangecounty1}` && data[i].townstate === `${pricerangetown1}` && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
                     sales.push(data[i]);
                     console.log(sales);
                     if (data[i].DOM <= 30){
                       fourteen.push(data[i]);
                       console.log(fourteen);
                       //fourteen[i].differential
                     }
                     if (data[i].DOM > 31 && data[i].DOM <= 60){
                       thirty.push(data[i]);
                     }
                     if (data[i].DOM > 61 && data[i].DOM <= 90){
                       fortyfive.push(data[i]);
                     }
                     if (data[i].DOM > 91 && data[i].DOM <= 120){
                       ninety.push(data[i]);
                       console.log(ninety);
                     }
                     if (data[i].DOM > 121 && data[i].DOM <= 180){
                       onetwenty.push(data[i]);
                     }
                     if (data[i].DOM > 181 && data[i].DOM <= 240){ // copy/paste residential render...
                       onetwoone.push(data[i]);
                     }
                     if (data[i].DOM > 241 && data[i].DOM <= 300){ // commercial render...
                      twofourzero.push(data[i]);
                    }
                    if (data[i].DOM > 301){ // commercial render...
                      threehundredone.push(data[i]);
                    }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM <= 30 ){
                       great14.push(data[i]);
                       console.log(great14);
                     }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM > 31 && data[i].DOM <= 60){
                       great30.push(data[i]);
                     }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM > 61 && data[i].DOM <= 90){
                       great45.push(data[i]);
                     }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM > 91 && data[i].DOM <= 120){
                       great90.push(data[i]);
                     }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM > 121 && data[i].DOM <= 180){
                       great120.push(data[i]);
                     }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM > 181 && data[i].DOM <= 240){
                       great121.push(data[i]);
                     }
                     if (data[i].saleprice < data[i].listprice && data[i].DOM > 241 && data[i].DOM <= 300){ // commercial render..
                      twofourzero1.push(data[i]);
                    }
                    if (data[i].saleprice < data[i].listprice && data[i].DOM > 300){ // commercial render...
                      threehundredone1.push(data[i]); // bigger than 300days and above= list price
                    }
             
             
                     let sale14 = fourteen.length; //provides the length of all sales above=
                     let sale30 = thirty.length;
                     let sale45 = fortyfive.length;
                     let sale90 = ninety.length;
                     let sale120 = onetwenty.length;
                     let sale121 = onetwoone.length;
                     //commercial render...
                     let sale240 = twofourzero.length; //commercial render 
                     let sale301 = threehundredone.length; //commercial render
             
             
                     let lengthgreat14 = great14.length; //provides the length of sales above= list via specified DOM 
                     let lengthgreat30 = great30.length;
                     let lengthgreat45 = great45.length;
                     let lengthgreat90 = great90.length;
                     let lengthgreat120 = great120.length;
                     let lengthgreat121 = great121.length; 
                     //commercial render...
                     let lengthgreat240 = twofourzero1.length;
                     let lengthgreat301 = threehundredone1.length;
             
                     const atabove14 =  Math.round((lengthgreat14 / sale14) * 100);
                     const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100);
                     const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100);
                     const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100);
                     const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100);
                     const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100);
                     //commercial render...
                     let atabove240 = Math.round((lengthgreat240 / sale240) * 100);
                     let atabove301 = Math.round((lengthgreat301 / sale301) * 100);
             
             
             
             
             
                     document.getElementById('s14').innerHTML = sale14;
                     document.getElementById('s30').innerHTML = sale30;
                     document.getElementById('s45').innerHTML = sale45;
                     document.getElementById('s90').innerHTML = sale90;
                     document.getElementById('s120').innerHTML = sale120;
                     document.getElementById('s121').innerHTML = sale121;
                     // commercial render...
                     document.getElementById('s240').innerHTML = sale240;
                     document.getElementById('s301').innerHTML = sale301;
             
                     document.getElementById('r14').innerHTML = `${atabove14}%`;
                     document.getElementById('r30').innerHTML = `${atabove30}%`;
                     document.getElementById('r45').innerHTML = `${atabove45}%`;
                     document.getElementById('r90').innerHTML = `${atabove90}%`;
                     document.getElementById('r120').innerHTML = `${atabove120}%`;
                     document.getElementById('r121').innerHTML = `${atabove121}%`;
                     //commercial render...
                     document.getElementById('r240').innerHTML = `${atabove240}%`;
                     document.getElementById('r301').innerHTML = `${atabove301}%`;
   
                     document.getElementById('fr14').innerHTML = `${lengthgreat14}/ ${sale14}`;
                     document.getElementById('fr30').innerHTML = `${lengthgreat30} / ${sale30}`;
                     document.getElementById('fr45').innerHTML = `${lengthgreat45} / ${sale45}`;
                     document.getElementById('fr90').innerHTML = `${lengthgreat90} / ${sale90}`;
                     document.getElementById('fr120').innerHTML = `${lengthgreat120} / ${sale120}`;
                     document.getElementById('fr121').innerHTML = `${lengthgreat121} / ${sale121}`;
                     //commercial render...
                     document.getElementById('fr240').innerHTML = `${lengthgreat240} / ${sale240}`;
                     document.getElementById('fr301').innerHTML = `${lengthgreat301} / ${sale301}`;
             
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

                     // commercial render....
                     let differential13 = 0;
                     function add13(item, counter, array){
                       differential13+=(item.differential);
                     }
                     twofourzero.forEach(add13); // all sales 240-300

                    

                     let differential14 = 0;
                     function add14(item, counter, array){
                       differential14+=(item.differential);
                     }
                     threehundredone.forEach(add14); //all sales 301+


                     let differential15 = 0;
                     function add15(item, counter, array){
                       differential15+=(item.differential);
                     }
                     twofourzero1.forEach(add15); //all sales above= 240-300

                     setTotallessdiff240(Math.round(differential15 / lengthgreat240));

                     let differential16 = 0;
                     function add16(item, counter, array){
                       differential16+=(item.differential);
                     }
                     threehundredone1.forEach(add16); //all sales above= 301+

                     setTotallessdiff301(Math.round(differential16 / lengthgreat301));


                     // commercial render UP...


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
                    //commercial render...
                    let averagediff240 = Math.round(differential13 / sale240);
                    let averagediff301 = Math.round(differential14 / sale301);
             
                     
                    
                     document.getElementById('d14').innerHTML = averagediff14;
                     document.getElementById('d30').innerHTML = averagediff30;
                     document.getElementById('d45').innerHTML = averagediff45;
                     document.getElementById('d90').innerHTML = averagediff90;
                     document.getElementById('d120').innerHTML = averagediff120;
                     document.getElementById('d121').innerHTML = averagediff121;
                    //commercial render...
                     document.getElementById('d240').innerHTML = averagediff240;
                     document.getElementById('d301').innerHTML = averagediff301;
                   
                    }
                     
                   }
                
                 //setData(JSON.stringify(data));
               });
             }, [pricerangecounty1, pricerangetown1]);
   
   
             ///////////////////////////////////////////////////////////////////////////////////////////////////////////
         
   var [date, setDate] = React.useState(''); //'2/1/2022'
   var [pricevalue, setPricevalue] = React.useState(0);
   var [pricevalue2, setPricevalue2] = React.useState(0);



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
   //commercial render...
   const [belowdiffrates240avg, setBelowdiffrates240avg] = React.useState(0);
   const [belowdiffrates301avg, setBelowdiffrates301avg] = React.useState(0);

   async function populateQuote(e){ //this functions onClick...
     const req = await fetch('http://localhost:3000/singlefamily22')
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
       //commercial render...
       let twofourzero = [];
       let threehundredone = [];
   
       let great14 = []; // 0 here
       let great30 = [];
       let great45 = [];
       let great90 = [];
       let great120 = [];
       let great121 = [];
       //commercial render...
       let twofourzero1 = [];
       let threehundredone1 = [];
   
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
           if (data[i].DOM <= 30 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             fourteen.push(data[i]);
             console.log(fourteen);
             //fourteen[i].differential
           }
           if (data[i].DOM > 31 && data[i].DOM <= 60 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             thirty.push(data[i]);
           }
           if (data[i].DOM > 61 && data[i].DOM <= 90 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             fortyfive.push(data[i]);
           }
           if (data[i].DOM > 91 && data[i].DOM <= 120 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` ){
             ninety.push(data[i]);
             console.log(ninety);
           }
           if (data[i].DOM > 121 && data[i].DOM <= 180 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             onetwenty.push(data[i]);
           }
           if (data[i].DOM > 180 && data[i].DOM <= 240 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
             onetwoone.push(data[i]);
           }
           //commercial render...
           if (data[i].DOM > 240 && data[i].DOM <= 300 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
            twofourzero.push(data[i]);
          }
          if (data[i].DOM > 300 && data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
            threehundredone.push(data[i]);
          }
          //
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM <= 30 ){
             great14.push(data[i]);
             console.log(great14);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 31 && data[i].DOM <= 60){
             great30.push(data[i]);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 60 && data[i].DOM <= 90){
             great45.push(data[i]);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
             great90.push(data[i]);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 120 && data[i].DOM <= 180){
             great120.push(data[i]);
           }
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 180 && data[i].DOM <= 240){
             great121.push(data[i]);
           }
           //commercial render...
           if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 240 && data[i].DOM <= 300){
            twofourzero1.push(data[i]);
          }
          if (data[i].county === `${county3}` && data[i].townstate === `${town2}` && data[i].year === 2022 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice < data[i].listprice && data[i].DOM > 300){
            threehundredone1.push(data[i]);
          }
          //
           
           
           let sale14 = fourteen.length; //provides the length of all sales above=
           let sale30 = thirty.length;
           let sale45 = fortyfive.length;
           let sale90 = ninety.length;
           let sale120 = onetwenty.length;
           let sale121 = onetwoone.length;
           //commercial render...
           let sale240 = twofourzero.length;
           let sale301 = threehundredone.length;
   
           let lengthgreat14 = great14.length; //provides the length of sales above= list via specified DOM 
           let lengthgreat30 = great30.length;
           let lengthgreat45 = great45.length;
           let lengthgreat90 = great90.length;
           let lengthgreat120 = great120.length;
           let lengthgreat121 = great121.length;
           //commerical render...
           let lengthgreat240 = twofourzero1.length;
           let lengthgreat301 = threehundredone1.length;
   
           const atabove14 =  Math.round((lengthgreat14 / sale14) * 100);
           const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100);
           const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100);
           const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100);
           const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100);
           const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100);
           //commercial render...
           const atabove240 = Math.round((lengthgreat240 / sale240) * 100);
           const atabove301 = Math.round((lengthgreat301 / sale301) * 100);
   
           
   
   
           document.getElementById('sales14').innerHTML = sale14;
           document.getElementById('sales30').innerHTML = sale30;
           document.getElementById('sales45').innerHTML = sale45;
           document.getElementById('sales90').innerHTML = sale90;
           document.getElementById('sales120').innerHTML = sale120;
           document.getElementById('sales121').innerHTML = sale121;
           //commercial render...
           document.getElementById('sales240').innerHTML = sale240;
           document.getElementById('sales301').innerHTML = sale301;
   
   
   
           document.getElementById('rates14').innerHTML = `${atabove14}%`;
           document.getElementById('rates30').innerHTML = `${atabove30}%`;
           document.getElementById('rates45').innerHTML = `${atabove45}%`;
           document.getElementById('rates90').innerHTML = `${atabove90}%`;
           document.getElementById('rates120').innerHTML = `${atabove120}%`;
           document.getElementById('rates121').innerHTML = `${atabove121}%`;
           //commercial render...
           document.getElementById('rates240').innerHTML = `${atabove240}%`;
           document.getElementById('rates301').innerHTML = `${atabove301}%`;
   
           document.getElementById('fraction14').innerHTML = `${lengthgreat14}/${sale14}`;
           document.getElementById('fraction30').innerHTML = `${lengthgreat30}/${sale30}`;
           document.getElementById('fraction45').innerHTML = `${lengthgreat45}/${sale45}`;
           document.getElementById('fraction90').innerHTML = `${lengthgreat90}/${sale90}`;
           document.getElementById('fraction120').innerHTML = `${lengthgreat120}/${sale120}`;
           document.getElementById('fraction121').innerHTML = `${lengthgreat121}/${sale121}`;
           //commercial render...
           document.getElementById('fraction240').innerHTML = `${lengthgreat240}/${sale240}`;
           document.getElementById('fraction301').innerHTML = `${lengthgreat301}/${sale301}`;
   
   
   
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

           //commercial render...

           let differential13 = 0;
           function add13(item, counter, array){
             differential13+=(item.differential);
           }
   
           twofourzero.forEach(add13); 
           console.log(differential13);

           let differential14 = 0;
           function add14(item, counter, array){
             differential14+=(item.differential);
           }
   
           threehundredone.forEach(add14); 
           console.log(differential14);

           let differential15 = 0;
           function add15(item, counter, array){
             differential15+=(item.differential);
           }
   
           twofourzero1.forEach(add15); 
           console.log(differential15);

           let differential16 = 0;
           function add16(item, counter, array){
             differential16+=(item.differential);
           }
   
           threehundredone1.forEach(add16); 
           console.log(differential16);

           /////////////// commercial render UP...

   
   
   
   
   
   
          
           // console.log(saleprice);
          let averagediff14 = Math.round( differential / sale14 );
          let averagediff30 = Math.round( differential2 / sale30 );
          let averagediff45 = Math.round( differential3 / sale45 );
          let averagediff90 = Math.round( (differential4) / sale90 );
          let averagediff120 = Math.round( differential5 / sale120 );
          let averagediff121 = Math.round( differential6 / sale121 );
          //commercial render...
          let averagediff240 = Math.round( differential13 / sale240 );
          let averagediff301 = Math.round( differential14 / sale301 );
          


        setBelowdiffrates14avg(Math.round( differential7 / lengthgreat14 )); // title
        setBelowdiffrates30avg(Math.round( differential8 / lengthgreat30 )); // title
        setBelowdiffrates45avg(Math.round( differential9 / lengthgreat45 )); // title
        setBelowdiffrates90avg(Math.round( differential10 / lengthgreat90 )); // title
        setBelowdiffrates120avg(Math.round( differential11 / lengthgreat120 )); // title
        setBelowdiffrates121avg(Math.round( differential12 / lengthgreat121 )); // title
        // commercial render...
        setBelowdiffrates240avg(Math.round( differential15 / lengthgreat240 )); // title
        setBelowdiffrates301avg(Math.round( differential16 / lengthgreat301 )); // title

        
   
           
          
           document.getElementById('duff14').innerHTML = averagediff14;
           document.getElementById('duff30').innerHTML = averagediff30;
           document.getElementById('duff45').innerHTML = averagediff45;
           document.getElementById('duff90').innerHTML = averagediff90;
           document.getElementById('duff120').innerHTML = averagediff120;
           document.getElementById('duff121').innerHTML = averagediff121;
           //commercial render...
           document.getElementById('duff240').innerHTML = averagediff240;
           document.getElementById('duff301').innerHTML = averagediff301;

   
           //document.getElementById('calvalue').innerHTML = `${date}`;
   
   
         }
       }
     }
   
     //////////////////////////////////////////////////////////////////////////////////////////////////////
     
     async function DOM85PopulateQuote(e){ //this functions onClick...
      const req = await fetch('http://localhost:3000/singlefamily22') 
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
        const req = await fetch('http://localhost:3000/singlefamily22') 
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
   var [plandate, setPlandate] = React.useState(''); 
   //const [date, setDate] = React.useState('');
   const [openarray, setOpenarray] = React.useState([]);
   
   const [sales22, setSales22] = React.useState();
   
   
   
   const [county2, setCounty2] = React.useState('');
   const [town3, setTown3] = React.useState('');
   const [selectedState5, setSelectedState5] = React.useState(''); // MA

   const availableState5 = GLOBE1.states.find((s) => s.name === county2); // that is what this says...
   const availableTowns5 = availableState5?.counties?.find( //
    (c) => c.name === selectedState5 //
    ); //
   
   
   
   
   
   function dateIndex(e){
   
   for (let i = 0; i < index22.length; i++){
   
   
   console.log(document.getElementById('valueplan').value);
   if (document.getElementById('valueplan').value === index22[i]){
   console.log(index22.indexOf(index22[i]));
   openarray.push(index22.splice(index22.indexOf(index22[i]), 240)); //commercial render..
   return openarray;
   console.log(openarray);
   }
   
   
   }
   }
   console.log(dateIndex);


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

  
   
  
   
   async function businessplanning(e){ 
     //e.preventDefault();
   
     dateIndex();
     
   
   
     const req = await fetch('http://localhost:3000/singlefamily22')
       const data = await req.json()
       console.log(data); ////////////// all console.logs to here... 
   
       let newArray = [...openarray];
       console.log(newArray);
       console.log(newArray[0][1]); // correct...
       console.log(newArray[0][13]);
       document.getElementById('date14').innerHTML = `${newArray[0][0]}` + ' - ' + `${newArray[0][29]}` + ' 0-30 days ';
       document.getElementById('date30').innerHTML = `${newArray[0][30]}` + ' - ' + `${newArray[0][59]}` + ' 31-60 days ';
       document.getElementById('date45').innerHTML = `${newArray[0][60]}` + ' - ' + `${newArray[0][89]}` + ' 61-90 days ';
       document.getElementById('date90').innerHTML = `${newArray[0][90]}` + ' - ' + `${newArray[0][119]}` + ' 91-120 days ';
       document.getElementById('date120').innerHTML = `${newArray[0][20]}` + ' - ' + `${newArray[0][179]}` + ' 121-180 days ';
       
   
     
   
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
           || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] ||
           data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] || data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] ||data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179] || data[i].saledate === newArray[0][180] || data[i].saledate === newArray[0][181] || data[i].saledate === newArray[0][182] || data[i].saledate === newArray[0][183] || data[i].saledate === newArray[0][184] || data[i].saledate === newArray[0][185] || data[i].saledate === newArray[0][186] || data[i].saledate === newArray[0][187] || data[i].saledate === newArray[0][188] || data[i].saledate === newArray[0][189] 
           || data[i].saledate === newArray[0][190] || data[i].saledate === newArray[0][191] || data[i].saledate === newArray[0][192] || data[i].saledate === newArray[0][193] || data[i].saledate === newArray[0][194] || data[i].saledate === newArray[0][195] || data[i].saledate === newArray[0][196] || data[i].saledate === newArray[0][197] || data[i].saledate === newArray[0][198] || data[i].saledate === newArray[0][199] || data[i].saledate === newArray[0][200] || data[i].saledate === newArray[0][201] || data[i].saledate === newArray[0][202] || data[i].saledate === newArray[0][203]
           || data[i].saledate === newArray[0][204] || data[i].saledate === newArray[0][205] || data[i].saledate === newArray[0][206] || data[i].saledate === newArray[0][207] || data[i].saledate === newArray[0][208] || data[i].saledate === newArray[0][209] || data[i].saledate === newArray[0][210] || data[i].saledate === newArray[0][211] || data[i].saledate === newArray[0][212] || data[i].saledate === newArray[0][213] || data[i].saledate === newArray[0][214] || data[i].saledate === newArray[0][215] || data[i].saledate === newArray[0][216] || data[i].saledate === newArray[0][217] || data[i].saledate === newArray[0][218] || data[i].saledate === newArray[0][219] 
           || data[i].saledate === newArray[0][220] || data[i].saledate === newArray[0][221] || data[i].saledate === newArray[0][222] || data[i].saledate === newArray[0][223] || data[i].saledate === newArray[0][224] || data[i].saledate === newArray[0][225] || data[i].saledate === newArray[0][226] || data[i].saledate === newArray[0][227] || data[i].saledate === newArray[0][228] || data[i].saledate === newArray[0][229] || data[i].saledate === newArray[0][230] || data[i].saledate === newArray[0][231] || data[i].saledate === newArray[0][232] || data[i].saledate === newArray[0][233]
           || data[i].saledate === newArray[0][234] || data[i].saledate === newArray[0][235] || data[i].saledate === newArray[0][236] || data[i].saledate === newArray[0][237] || data[i].saledate === newArray[0][238] || data[i].saledate === newArray[0][239])){
           planK.push(data[i]);
           console.log(planK); //1 object here...
           console.log(newArray[0][1]);
           
   
           let length = planK.length; // total sales all 90 days consecutive...
           console.log(length);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || 
            data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
             planAatabove.push(data[i]);
             console.log(planAatabove);
           }
   
           let planAatabovelength = planAatabove.length;
           console.log(planAatabovelength);
   
           if (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] ||
            data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
             planA.push(data[i]);
             console.log(planA);
           }
   
           if (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ||
            data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59]){
             planB.push(data[i]);
             console.log(planB);
           }
           if (data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
            || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
             planC.push(data[i]);
             console.log(planC);
           }
           if (data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
            || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
             planD.push(data[i]);
             console.log(planD);
           }
           if (data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] ||data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] 
            || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] ||data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] ||
            data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] || data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] ||data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] 
            || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] || data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179]){
             planE.push(data[i]);
             console.log(planE);
           }
   
           let planElength = planE.length;
           console.log(planE.length);
   
   
   
           let length2 = planB.length; // total sales all 90 days consecutive...
           console.log(length2);
   
           let planAlength = planA.length;
           console.log(planAlength);
   
           
   
           document.getElementById('planAsales').innerHTML = planAlength;

           setPlanA22sales(planAlength);
   
           let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100); 
   
           document.getElementById('planArate').innerHTML = `${ratePlanA}%`;

           setPlanA22rates(ratePlanA);
   
           let fractionPlanA = `${planAatabovelength} / ${planAlength}`;
           document.getElementById('fractionArate').innerHTML = fractionPlanA;

           setPlanA22atabove(planAatabovelength); 
           setPlanA22salelength(planAlength); 
   
   
          
            
            
            if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ||
              data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59])){
             planBatabove.push(data[i]);
             console.log(planBatabove);  //gz
           }
   
           let planBatabovelength = planBatabove.length;
           console.log(planBatabovelength);
   
           let planBlength = planB.length;
           console.log(planBlength);
   
           document.getElementById('planBsales').innerHTML = planBlength;
           setPlanB22sales(planBlength);
   
           let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100); 
   
           document.getElementById('planBrate').innerHTML = `${ratePlanB}%`;

           setPlanB22rates(ratePlanB);
   
           let fractionPlanB = `${planBatabovelength} / ${planBlength}`;
           document.getElementById('fractionBrate').innerHTML = fractionPlanB;

           setPlanB22atabove(planBatabovelength); 
           setPlanB22salelength(planBlength); 
   
   
           if (data[i].saleprice < data[i].listprice && ( data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
            || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
             planCatabove.push(data[i]);
             console.log(planCatabove);  //gz
           }
   
           let planCatabovelength = planCatabove.length;
           console.log(planCatabovelength);
   
           let planClength = planC.length;
           console.log(planClength);
   
           document.getElementById('planCsales').innerHTML = planClength;
           setPlanC22sales(planClength);
   
           let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100); 
   
           document.getElementById('planCrate').innerHTML = `${ratePlanC}%`;
           setPlanC22rates(ratePlanC);
   
           let fractionPlanC = `${planCatabovelength} / ${planClength}`;
           document.getElementById('fractionCrate').innerHTML = fractionPlanC;

           setPlanC22atabove(planCatabovelength);
           setPlanC22salelength(planClength); 
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
            || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
             planDatabove.push(data[i]);
             console.log(planDatabove);  //gz
           }
   
           let planDatabovelength = planDatabove.length;
           console.log(planDatabovelength);
   
           let planDlength = planD.length;
           console.log(planDlength);
   
           document.getElementById('planDsales').innerHTML = planDlength;
           setPlanD22sales(planDlength);

   
           let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100); 
   
           document.getElementById('planDrate').innerHTML = `${ratePlanD}%`;
           setPlanD22rates(ratePlanD);
   
           let fractionPlanD = `${planDatabovelength} / ${planDlength}`;
           document.getElementById('fractionDrate').innerHTML = fractionPlanD;

           setPlanD22atabove(planDatabovelength);
           setPlanD22salelength(planDlength); 

   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] ||data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] 
            || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] ||data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] ||
            data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] || data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] ||data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] 
            || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] || data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179])){
             planEatabove.push(data[i]);
             console.log(planEatabove);  
           }
   
           
   
           let planEatabovelength = planEatabove.length;
           console.log(planEatabovelength);
   
           document.getElementById('planEsales').innerHTML = planElength;
           setPlanE22sales(planElength);
   
           let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100); 

           
   
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
                 
                
   
                  let planAavgdiff = Math.round(differential / planAlength);
                  let planBavgdiff = Math.round(differentialB / planBlength);
                  let planCavgdiff = Math.round(differentialC / planClength);
                  let planDavgdiff = Math.round(differentialD / planDlength);
                  let planEavgdiff = Math.round(differentialE / planElength );

                  setBelowdiffratesPlanAavg(Math.round(differentialbelowA / planAatabovelength)); //title
                  setBelowdiffratesPlanBavg(Math.round(differentialbelowB / planBatabovelength)); //title
                  setBelowdiffratesPlanCavg(Math.round(differentialbelowC / planCatabovelength)); //title
                  setBelowdiffratesPlanDavg(Math.round(differentialbelowD / planDatabovelength)); //title
                  setBelowdiffratesPlanEavg(Math.round(differentialbelowE / planEatabovelength)); //title
                  
                 document.getElementById('planAdiff').innerHTML = planAavgdiff;

                 setPlanA22diff(planAavgdiff);
   
                document.getElementById('planBdiff').innerHTML = planBavgdiff;

                setPlanB22diff(planBavgdiff);
   
                document.getElementById('planCdiff').innerHTML = planCavgdiff;

                setPlanC22diff(planCavgdiff);
   
                document.getElementById('planDdiff').innerHTML = planDavgdiff;

                setPlanD22diff(planDavgdiff);
   
                document.getElementById('planEdiff').innerHTML = planEavgdiff;

                setPlanE22diff(planEavgdiff);
   
   
                  
         
         
   
                 
   
   
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
   
   function dateIndex21(e){
   
   for (let i = 0; i < index21.length; i++){
   
   
   console.log(document.getElementById('valueplan').value);
   if ((document.getElementById('valueplan').value).substring(0, 5) === index21[i].substring(0, 5)){
   console.log(index21.indexOf(index21[i]));
   openarray21.push(index21.splice(index21.indexOf(index21[i]), 240)); //commercial render...
   return openarray21;
   console.log(openarray21);
   }
   
   
   }
   }
   console.log(dateIndex21);

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
   
   
   
   async function businessplanning21(e){ 
     //e.preventDefault();
   
     dateIndex21();
     
   
   
     const req = await fetch('http://localhost:3000/singlefamily22')
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
          || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] ||
          data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] || data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] ||data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179] || data[i].saledate === newArray[0][180] || data[i].saledate === newArray[0][181] || data[i].saledate === newArray[0][182] || data[i].saledate === newArray[0][183] || data[i].saledate === newArray[0][184] || data[i].saledate === newArray[0][185] || data[i].saledate === newArray[0][186] || data[i].saledate === newArray[0][187] || data[i].saledate === newArray[0][188] || data[i].saledate === newArray[0][189] 
          || data[i].saledate === newArray[0][190] || data[i].saledate === newArray[0][191] || data[i].saledate === newArray[0][192] || data[i].saledate === newArray[0][193] || data[i].saledate === newArray[0][194] || data[i].saledate === newArray[0][195] || data[i].saledate === newArray[0][196] || data[i].saledate === newArray[0][197] || data[i].saledate === newArray[0][198] || data[i].saledate === newArray[0][199] || data[i].saledate === newArray[0][200] || data[i].saledate === newArray[0][201] || data[i].saledate === newArray[0][202] || data[i].saledate === newArray[0][203]
          || data[i].saledate === newArray[0][204] || data[i].saledate === newArray[0][205] || data[i].saledate === newArray[0][206] || data[i].saledate === newArray[0][207] || data[i].saledate === newArray[0][208] || data[i].saledate === newArray[0][209] || data[i].saledate === newArray[0][210] || data[i].saledate === newArray[0][211] || data[i].saledate === newArray[0][212] || data[i].saledate === newArray[0][213] || data[i].saledate === newArray[0][214] || data[i].saledate === newArray[0][215] || data[i].saledate === newArray[0][216] || data[i].saledate === newArray[0][217] || data[i].saledate === newArray[0][218] || data[i].saledate === newArray[0][219] 
          || data[i].saledate === newArray[0][220] || data[i].saledate === newArray[0][221] || data[i].saledate === newArray[0][222] || data[i].saledate === newArray[0][223] || data[i].saledate === newArray[0][224] || data[i].saledate === newArray[0][225] || data[i].saledate === newArray[0][226] || data[i].saledate === newArray[0][227] || data[i].saledate === newArray[0][228] || data[i].saledate === newArray[0][229] || data[i].saledate === newArray[0][230] || data[i].saledate === newArray[0][231] || data[i].saledate === newArray[0][232] || data[i].saledate === newArray[0][233]
          || data[i].saledate === newArray[0][234] || data[i].saledate === newArray[0][235] || data[i].saledate === newArray[0][236] || data[i].saledate === newArray[0][237] || data[i].saledate === newArray[0][238] || data[i].saledate === newArray[0][239])){
           planK.push(data[i]);
           console.log(planK); //1 object here...
           console.log(newArray[0][1]);
           
   
           let length = planK.length; // total sales all 90 days consecutive...
           console.log(length);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || 
            data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
             planAatabove.push(data[i]);
             console.log(planAatabove);
           }
   
           let planAatabovelength = planAatabove.length;
           console.log(planAatabovelength);
   
           if (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || 
            data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
             planA.push(data[i]);
             console.log(planA);
           }
   
           if (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ||
            data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59]){
             planB.push(data[i]);
             console.log(planB);
           }
           if (data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
            || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
             planC.push(data[i]);
             console.log(planC);
           }
           if (data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
            || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
             planD.push(data[i]);
             console.log(planD);
           }
           if (data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] ||data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] 
            || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] ||data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] ||
            data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] || data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] ||data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] 
            || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] || data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179]){
             planE.push(data[i]);
             console.log(planE);
           }
   
           let planElength = planE.length;
           console.log(planE.length);
   
   
   
           let length2 = planB.length; // total sales all 90 days consecutive...
           console.log(length2);
   
           let planAlength = planA.length;
           console.log(planAlength);
   
           
   
           document.getElementById('planAsales21').innerHTML = planAlength;

           setPlanA21sales(planAlength);
   
           let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100); 
   
           document.getElementById('planArate21').innerHTML = `${ratePlanA}%`;
           setPlanA21rates(ratePlanA);
   
           let fractionPlanA21 = `${planAatabovelength} / ${planAlength}`;
           document.getElementById('fractionArate21').innerHTML = fractionPlanA21;

           setPlanA21atabove(planAatabovelength);
           setPlanA21salelength(planAlength);
   
   
          
            
            
            if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ||
              data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59])){
             planBatabove.push(data[i]);
             console.log(planBatabove);  //gz
           }
   
           let planBatabovelength = planBatabove.length;
           console.log(planBatabovelength);
   
           let planBlength = planB.length;
           console.log(planBlength);
   
           document.getElementById('planBsales21').innerHTML = planBlength;

           setPlanB21sales(planBlength);
   
           let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100); 
   
           document.getElementById('planBrate21').innerHTML = `${ratePlanB}%`;
           setPlanB21rates(ratePlanB);
   
           let fractionPlanB21 = `${planBatabovelength} / ${planBlength}`;
           document.getElementById('fractionBrate21').innerHTML = fractionPlanB21;

           setPlanB21atabove(planBatabovelength);
           setPlanB21salelength(planBlength);
   
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
            || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
             planCatabove.push(data[i]);
             console.log(planCatabove);  //gz
           }
   
           let planCatabovelength = planCatabove.length;
           console.log(planCatabovelength);
   
           let planClength = planC.length;
           console.log(planClength);
   
           document.getElementById('planCsales21').innerHTML = planClength;

           setPlanC21sales(planClength);
   
           let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100); 
   
           document.getElementById('planCrate21').innerHTML = `${ratePlanC}%`;
           setPlanC21rates(ratePlanC);
   
           let fractionPlanC21 = `${planCatabovelength} / ${planClength}`;
           document.getElementById('fractionCrate21').innerHTML = fractionPlanC21;

           setPlanC21atabove(planCatabovelength);
           setPlanC21salelength(planClength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
            || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
             planDatabove.push(data[i]);
             console.log(planDatabove);  //gz
           }
   
           let planDatabovelength = planDatabove.length;
           console.log(planDatabovelength);
   
           let planDlength = planD.length;
           console.log(planDlength);
   
           document.getElementById('planDsales21').innerHTML = planDlength;

           setPlanD21sales(planDlength);
   
           let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100); 
   
           document.getElementById('planDrate21').innerHTML = `${ratePlanD}%`;
           setPlanD21rates(ratePlanD);
   
           let fractionPlanD21 = `${planDatabovelength} / ${planDlength}`;
           document.getElementById('fractionDrate21').innerHTML = fractionPlanD21;

           setPlanD21atabove(planDatabovelength);
           setPlanD21salelength(planDlength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] ||data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] 
            || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] ||data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] ||
            data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] || data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] ||data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] 
            || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] || data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179])){
             planEatabove.push(data[i]);
             console.log(planEatabove);  
           }
   
           
   
           let planEatabovelength = planEatabove.length;
           console.log(planEatabovelength);
   
           document.getElementById('planEsales21').innerHTML = planElength;

           setPlanE21sales(planElength);
   
           let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100); 
   
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
                 
                

   
                  let planAavgdiff = Math.round(differential / planAlength);
                  let planBavgdiff = Math.round(differentialB / planBlength);
                  let planCavgdiff = Math.round(differentialC / planClength);
                  let planDavgdiff = Math.round(differentialD / planDlength);
                  let planEavgdiff = Math.round(differentialE / planElength );

                  setBelowdiffratesPlanA21avg(Math.round(differentialbelowA21 / planAatabovelength)); //title
                  setBelowdiffratesPlanB21avg(Math.round(differentialbelowB21 / planBatabovelength)); //title
                  setBelowdiffratesPlanC21avg(Math.round(differentialbelowC21 / planCatabovelength)); //title
                  setBelowdiffratesPlanD21avg(Math.round(differentialbelowD21 / planDatabovelength)); //title
                  setBelowdiffratesPlanE21avg(Math.round(differentialbelowE21 / planEatabovelength)); //title
                  
   
                  
                  
                 document.getElementById('planAdiff21').innerHTML = planAavgdiff;

                 setPlanA21diff(planAavgdiff);
   
                document.getElementById('planBdiff21').innerHTML = planBavgdiff;

                setPlanB22diff(planBavgdiff);
   
                document.getElementById('planCdiff21').innerHTML = planCavgdiff;

                setPlanC22diff(planCavgdiff);
   
                document.getElementById('planDdiff21').innerHTML = planDavgdiff;

                setPlanD22diff(planDavgdiff);
   
                document.getElementById('planEdiff21').innerHTML = planEavgdiff;

                setPlanE22diff(planEavgdiff);
   
   
                  
         
         
   
                 
   
   
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
   
   function dateIndex20(e){
   
   for (let i = 0; i < index21.length; i++){
   
   
   console.log(document.getElementById('valueplan').value);
   if ((document.getElementById('valueplan').value).substring(0, 5) === index20[i].substring(0, 5)){
   console.log(index20.indexOf(index20[i]));
   openarray20.push(index20.splice(index20.indexOf(index20[i]), 120));
   return openarray20;
   console.log(openarray20);
   }
   }
   }
   console.log(dateIndex20);

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

   const [planA20salelength, setPlanA20salelength] = React.useState(0);
   const [planB20salelength, setPlanB20salelength] = React.useState(0);
   const [planC20salelength, setPlanC20salelength] = React.useState(0);
   const [planD20salelength, setPlanD20salelength] = React.useState(0);
   const [planE20salelength, setPlanE20salelength] = React.useState(0);
   const [planF20salelength, setPlanF20salelength] = React.useState(0);
   
   
   
   
   
   
   async function businessplanning20(e, businessplanning, businessplanning21){ 
     //e.preventDefault();
   
     dateIndex20();
     
   
   
     const req = await fetch('http://localhost:3000/singlefamily22')
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
          || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] ||
          data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] || data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] ||data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179] || data[i].saledate === newArray[0][180] || data[i].saledate === newArray[0][181] || data[i].saledate === newArray[0][182] || data[i].saledate === newArray[0][183] || data[i].saledate === newArray[0][184] || data[i].saledate === newArray[0][185] || data[i].saledate === newArray[0][186] || data[i].saledate === newArray[0][187] || data[i].saledate === newArray[0][188] || data[i].saledate === newArray[0][189] 
          || data[i].saledate === newArray[0][190] || data[i].saledate === newArray[0][191] || data[i].saledate === newArray[0][192] || data[i].saledate === newArray[0][193] || data[i].saledate === newArray[0][194] || data[i].saledate === newArray[0][195] || data[i].saledate === newArray[0][196] || data[i].saledate === newArray[0][197] || data[i].saledate === newArray[0][198] || data[i].saledate === newArray[0][199] || data[i].saledate === newArray[0][200] || data[i].saledate === newArray[0][201] || data[i].saledate === newArray[0][202] || data[i].saledate === newArray[0][203]
          || data[i].saledate === newArray[0][204] || data[i].saledate === newArray[0][205] || data[i].saledate === newArray[0][206] || data[i].saledate === newArray[0][207] || data[i].saledate === newArray[0][208] || data[i].saledate === newArray[0][209] || data[i].saledate === newArray[0][210] || data[i].saledate === newArray[0][211] || data[i].saledate === newArray[0][212] || data[i].saledate === newArray[0][213] || data[i].saledate === newArray[0][214] || data[i].saledate === newArray[0][215] || data[i].saledate === newArray[0][216] || data[i].saledate === newArray[0][217] || data[i].saledate === newArray[0][218] || data[i].saledate === newArray[0][219] 
          || data[i].saledate === newArray[0][220] || data[i].saledate === newArray[0][221] || data[i].saledate === newArray[0][222] || data[i].saledate === newArray[0][223] || data[i].saledate === newArray[0][224] || data[i].saledate === newArray[0][225] || data[i].saledate === newArray[0][226] || data[i].saledate === newArray[0][227] || data[i].saledate === newArray[0][228] || data[i].saledate === newArray[0][229] || data[i].saledate === newArray[0][230] || data[i].saledate === newArray[0][231] || data[i].saledate === newArray[0][232] || data[i].saledate === newArray[0][233]
          || data[i].saledate === newArray[0][234] || data[i].saledate === newArray[0][235] || data[i].saledate === newArray[0][236] || data[i].saledate === newArray[0][237] || data[i].saledate === newArray[0][238] || data[i].saledate === newArray[0][239])){
           planK.push(data[i]);
           console.log(planK); //1 object here...
           console.log(newArray[0][1]);
           
   
           let length = planK.length; // total sales all 90 days consecutive...
           console.log(length);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saleprice >= data[i].listprice && data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || 
            data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
             planAatabove.push(data[i]);
             console.log(planAatabove);
           }
   
           let planAatabovelength = planAatabove.length;
           console.log(planAatabovelength);
   
           if (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || 
            data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
             planA.push(data[i]);
             console.log(planA);
           }
   
           if (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ||
            data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59]){
             planB.push(data[i]);
             console.log(planB);
           }
           if (data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
            || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
             planC.push(data[i]);
             console.log(planC);
           }
           if (data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
            || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
             planD.push(data[i]);
             console.log(planD);
           }
           if (data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] ||data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] 
            || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] ||data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] ||
            data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] || data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] ||data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] 
            || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] || data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179]){
             planE.push(data[i]);
             console.log(planE);
           }
   
           let planElength = planE.length;
           console.log(planE.length);
   
   
   
           let length2 = planB.length; // total sales all 90 days consecutive...
           console.log(length2);
   
           let planAlength = planA.length;
           console.log(planAlength);
   
           
   
           document.getElementById('planAsales20').innerHTML = planAlength;

           setPlanA20sales(planAlength);
   
           let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100); 
   
           document.getElementById('planArate20').innerHTML = `${ratePlanA}%`;

           setPlanA20rates(ratePlanA);
   
           let fractionPlanA20 = `${planAatabovelength} / ${planAlength}`;
           document.getElementById('fractionArate20').innerHTML = fractionPlanA20;

           setPlanA20atabove(planAatabovelength);
           setPlanA20salelength(planAlength);
   
          
            
            
            if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ||
              data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59])){
             planBatabove.push(data[i]);
             console.log(planBatabove);  //gz
           }
   
           let planBatabovelength = planBatabove.length;
           console.log(planBatabovelength);
   
           let planBlength = planB.length;
           console.log(planBlength);
   
           document.getElementById('planBsales20').innerHTML = planBlength;

           setPlanB20sales(planBlength);
   
           let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100); 
   
           document.getElementById('planBrate20').innerHTML = `${ratePlanB}%`;
           setPlanB20rates(ratePlanB);
   
           let fractionPlanB20 = `${planBatabovelength} / ${planBlength}`;
           document.getElementById('fractionBrate20').innerHTML = fractionPlanB20;

           setPlanB20atabove(planBatabovelength);
           setPlanB20salelength(planBlength);
   
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][60] || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
            || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
             planCatabove.push(data[i]);
             console.log(planCatabove);  //gz
           }
   
           let planCatabovelength = planCatabove.length;
           console.log(planCatabovelength);
   
           let planClength = planC.length;
           console.log(planClength);
   
           document.getElementById('planCsales20').innerHTML = planClength;

           setPlanC20sales(planClength);
   
           let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100); 
   
           document.getElementById('planCrate20').innerHTML = `${ratePlanC}%`;
           setPlanC20rates(ratePlanC);
   
           let fractionPlanC20 = `${planCatabovelength} / ${planClength}`;
           document.getElementById('fractionCrate20').innerHTML = fractionPlanC20;

           setPlanC20atabove(planCatabovelength);
           setPlanC20salelength(planClength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][89] || data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
            || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
             planDatabove.push(data[i]);
             console.log(planDatabove);  //gz
           }
   
           let planDatabovelength = planDatabove.length;
           console.log(planDatabovelength);
   
           let planDlength = planD.length;
           console.log(planDlength);
   
           document.getElementById('planDsales20').innerHTML = planDlength;

           setPlanD20sales(planDlength);
   
           let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100); 
   
           document.getElementById('planDrate20').innerHTML = `${ratePlanD}%`;
           setPlanD20rates(ratePlanD);
   
           let fractionPlanD20 = `${planDatabovelength} / ${planDlength}`;
           document.getElementById('fractionDrate20').innerHTML = fractionPlanD20;

           setPlanD20atabove(planDatabovelength);
           setPlanD20salelength(planDlength);
   
           if (data[i].saleprice < data[i].listprice && (data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] ||data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] 
            || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] ||data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] ||
            data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] || data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] ||data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] 
            || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] || data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179])){
             planEatabove.push(data[i]);
             console.log(planEatabove);  
           }
   
           
   
           let planEatabovelength = planEatabove.length;
           console.log(planEatabovelength);
   
           document.getElementById('planEsales20').innerHTML = planElength;

           setPlanE20sales(planElength);
   
           let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100); 
   
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
                 
                
   
                  let planAavgdiff = Math.round(differential / planAlength);
                  let planBavgdiff = Math.round(differentialB / planBlength);
                  let planCavgdiff = Math.round(differentialC / planClength);
                  let planDavgdiff = Math.round(differentialD / planDlength);
                  let planEavgdiff = Math.round(differentialE / planElength );

                  setBelowdiffratesPlanA20avg(Math.round(differentialbelowA20 / planAatabovelength)); //title
                  setBelowdiffratesPlanB20avg(Math.round(differentialbelowB20 / planBatabovelength)); //title
                  setBelowdiffratesPlanC20avg(Math.round(differentialbelowC20 / planCatabovelength)); //title
                  setBelowdiffratesPlanD20avg(Math.round(differentialbelowD20 / planDatabovelength)); //title
                  setBelowdiffratesPlanE20avg(Math.round(differentialbelowE20 / planEatabovelength)); //title
                  
   
   
                  
                  
                 document.getElementById('planAdiff20').innerHTML = planAavgdiff;

                 setPlanA20diff(planAavgdiff);
   
                document.getElementById('planBdiff20').innerHTML = planBavgdiff;

                setPlanB20diff(planBavgdiff);
   
                document.getElementById('planCdiff20').innerHTML = planCavgdiff;

                setPlanC20diff(planCavgdiff);
   
                document.getElementById('planDdiff20').innerHTML = planDavgdiff;

                setPlanD20diff(planDavgdiff);
   
                document.getElementById('planEdiff20').innerHTML = planEavgdiff;

                setPlanE20diff(planEavgdiff);
   
   
                
                 
   
   
                 }
                         
         
       }
     
   }
   
   
   async function battingAvg5(){

    let strike1 = await businessplanning(); 
    let strike2 = await businessplanning21(); 
    let strike3 = await businessplanning20();


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
    
    document.getElementById('avgDsales').innerHTML = planCavgsales;

    let planEavgsum = ((planE22sales) + (planE21sales) + (planE20sales));
    let planEavgsales = Math.round((planEavgsum / 3) * 10) / 10;

    document.getElementById('avgEsales').innerHTML = planEavgsales;

    ///////////////////////rates averages////////////////////////////////

    let planAsumrate = ((planA22rates) + (planA21rates) + (planA20rates));
    let planAavgrate = Math.round((planAsumrate / 3) * 10) / 10;

     document.getElementById('avgArate').innerHTML = `${planAavgrate}%`;

    let planBsumrate = ((planB22rates) + (planB21rates) + (planB20rates));
    let planBavgrate = Math.round((planBsumrate / 3) * 10) / 10;

      document.getElementById('avgBrate').innerHTML = `${planBavgrate}%`;

      let planCsumrate = ((planC22rates) + (planC21rates) + (planC20rates));
      let planCavgrate = Math.round((planCsumrate / 3) * 10) / 10;

      document.getElementById('avgCrate').innerHTML = `${planCavgrate}%`;

      let planDsumrate = ((planD22rates) + (planD21rates) + (planD20rates));
      let planDavgrate = Math.round((planDsumrate / 3) * 10) / 10;

     document.getElementById('avgDrate').innerHTML = `${planDavgrate}%`;

     let planEsumrate = ((planE22rates) + (planE21rates) + (planE20rates));
     let planEavgrate = Math.round((planEsumrate / 3) * 10) / 10;

     document.getElementById('avgErate').innerHTML = `${planEavgrate}%`;

     ////////////////// avg differentials ///////////////////

     let planAavgdiffsum = ((planA22diff) + (planA21diff) + (planA20diff));
     let planAavgdiffavg = Math.round((planAavgdiffsum / 3) * 10) / 10;

     document.getElementById('avgAdiff').innerHTML = planAavgdiffavg;

     let planBavgdiffsum = ((planB22diff) + (planB21diff) + (planB20diff));
     let planBavgdiffavg = Math.round((planBavgdiffsum / 3) * 10) / 10;

     document.getElementById('avgBdiff').innerHTML = planBavgdiffavg;

     let planCavgdiffsum = ((planC22diff) + (planC21diff) + (planC20diff));
     let planCavgdiffavg = Math.round((planCavgdiffsum / 3) * 10) / 10;

     document.getElementById('avgCdiff').innerHTML = planCavgdiffavg;

     let planDavgdiffsum = ((planD22diff) + (planD21diff) + (planD20diff));
     let planDavgdiffavg = Math.round((planDavgdiffsum / 3) * 10) / 10;

     document.getElementById('avgDdiff').innerHTML = planDavgdiffavg;

     let planEavgdiffsum = ((planE22diff) + (planE21diff) + (planE20diff));
     let planEavgdiffavg = Math.round((planEavgdiffsum / 3) * 10) / 10;
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
     //commerical render...
     const [belowdiffratesMF240avg, setBelowdiffratesMF240avg] = React.useState(0);
     const [belowdiffratesMF301avg, setBelowdiffratesMF301avg] = React.useState(0);


     
     async function marketflush21(e){ //this functions onClick...
       dateIndex21();
       const req = await fetch('http://localhost:3000/singlefamily22')
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
         //commercial render...
         let twofourzero = [];
         let threehundredone = [];
     
         let great14 = []; // 0 here
         let great30 = [];
         let great45 = [];
         let great90 = [];
         let great120 = [];
         let great121 = [];
         //commerical render...
         let twofourzero1 = [];
         let threehundredone1 = [];
     
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
            || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] || data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119] || data[i].saledate === newArray[0][120] || data[i].saledate === newArray[0][121] || data[i].saledate === newArray[0][122] || data[i].saledate === newArray[0][123] || data[i].saledate === newArray[0][124] || data[i].saledate === newArray[0][125] || data[i].saledate === newArray[0][126] || data[i].saledate === newArray[0][127] || data[i].saledate === newArray[0][128] || data[i].saledate === newArray[0][129] || data[i].saledate === newArray[0][130] || data[i].saledate === newArray[0][131] || data[i].saledate === newArray[0][132] || data[i].saledate === newArray[0][133] || data[i].saledate === newArray[0][134] || data[i].saledate === newArray[0][135] || data[i].saledate === newArray[0][136] || data[i].saledate === newArray[0][137] || data[i].saledate === newArray[0][138] || data[i].saledate === newArray[0][139] || data[i].saledate === newArray[0][140] || data[i].saledate === newArray[0][141] || data[i].saledate === newArray[0][142] || data[i].saledate === newArray[0][143] || data[i].saledate === newArray[0][144] || data[i].saledate === newArray[0][145] || data[i].saledate === newArray[0][146] || data[i].saledate === newArray[0][147] || data[i].saledate === newArray[0][148] || data[i].saledate === newArray[0][149] || data[i].saledate === newArray[0][150] || data[i].saledate === newArray[0][151] || data[i].saledate === newArray[0][152] || data[i].saledate === newArray[0][153] || data[i].saledate === newArray[0][154] || data[i].saledate === newArray[0][155] || data[i].saledate === newArray[0][156] || data[i].saledate === newArray[0][157] || data[i].saledate === newArray[0][158] || data[i].saledate === newArray[0][159] || data[i].saledate === newArray[0][160] || data[i].saledate === newArray[0][161] ||
            data[i].saledate === newArray[0][162] || data[i].saledate === newArray[0][163] || data[i].saledate === newArray[0][164] || data[i].saledate === newArray[0][165] || data[i].saledate === newArray[0][166] || data[i].saledate === newArray[0][167] || data[i].saledate === newArray[0][168] || data[i].saledate === newArray[0][169] || data[i].saledate === newArray[0][170] || data[i].saledate === newArray[0][171] || data[i].saledate === newArray[0][172] || data[i].saledate === newArray[0][173] || data[i].saledate === newArray[0][174] || data[i].saledate === newArray[0][175] ||data[i].saledate === newArray[0][176] || data[i].saledate === newArray[0][177] || data[i].saledate === newArray[0][178] || data[i].saledate === newArray[0][179] || data[i].saledate === newArray[0][180] || data[i].saledate === newArray[0][181] || data[i].saledate === newArray[0][182] || data[i].saledate === newArray[0][183] || data[i].saledate === newArray[0][184] || data[i].saledate === newArray[0][185] || data[i].saledate === newArray[0][186] || data[i].saledate === newArray[0][187] || data[i].saledate === newArray[0][188] || data[i].saledate === newArray[0][189] 
            || data[i].saledate === newArray[0][190] || data[i].saledate === newArray[0][191] || data[i].saledate === newArray[0][192] || data[i].saledate === newArray[0][193] || data[i].saledate === newArray[0][194] || data[i].saledate === newArray[0][195] || data[i].saledate === newArray[0][196] || data[i].saledate === newArray[0][197] || data[i].saledate === newArray[0][198] || data[i].saledate === newArray[0][199] || data[i].saledate === newArray[0][200] || data[i].saledate === newArray[0][201] || data[i].saledate === newArray[0][202] || data[i].saledate === newArray[0][203]
            || data[i].saledate === newArray[0][204] || data[i].saledate === newArray[0][205] || data[i].saledate === newArray[0][206] || data[i].saledate === newArray[0][207] || data[i].saledate === newArray[0][208] || data[i].saledate === newArray[0][209] || data[i].saledate === newArray[0][210] || data[i].saledate === newArray[0][211] || data[i].saledate === newArray[0][212] || data[i].saledate === newArray[0][213] || data[i].saledate === newArray[0][214] || data[i].saledate === newArray[0][215] || data[i].saledate === newArray[0][216] || data[i].saledate === newArray[0][217] || data[i].saledate === newArray[0][218] || data[i].saledate === newArray[0][219] 
            || data[i].saledate === newArray[0][220] || data[i].saledate === newArray[0][221] || data[i].saledate === newArray[0][222] || data[i].saledate === newArray[0][223] || data[i].saledate === newArray[0][224] || data[i].saledate === newArray[0][225] || data[i].saledate === newArray[0][226] || data[i].saledate === newArray[0][227] || data[i].saledate === newArray[0][228] || data[i].saledate === newArray[0][229] || data[i].saledate === newArray[0][230] || data[i].saledate === newArray[0][231] || data[i].saledate === newArray[0][232] || data[i].saledate === newArray[0][233]
            || data[i].saledate === newArray[0][234] || data[i].saledate === newArray[0][235] || data[i].saledate === newArray[0][236] || data[i].saledate === newArray[0][237] || data[i].saledate === newArray[0][238] || data[i].saledate === newArray[0][239])){
             sales.push(data[i]);
             console.log(sales);
             if (data[i].DOM <= 30){
               fourteen.push(data[i]);
               console.log(fourteen);
               //fourteen[i].differential
             }
             if (data[i].DOM > 30 && data[i].DOM <= 60){
               thirty.push(data[i]);
             }
             if (data[i].DOM > 60 && data[i].DOM <= 90){
               fortyfive.push(data[i]);
             }
             if (data[i].DOM > 91 && data[i].DOM <= 120){
               ninety.push(data[i]);
               console.log(ninety);
             }
             if (data[i].DOM > 121 && data[i].DOM <= 180){
               onetwenty.push(data[i]);
             }
             if (data[i].DOM > 180 && data[i].DOM <= 240){
               onetwoone.push(data[i]);
             }
             //commercal render...
             if (data[i].DOM > 240 && data[i].DOM <= 300){
              twofourzero.push(data[i]);
            }
            if (data[i].DOM > 300){
              threehundredone.push(data[i]);
            }
            //

             if (data[i].saleprice < data[i].listprice && data[i].DOM <= 30 ){
               great14.push(data[i]);
               console.log(great14);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 60){
               great30.push(data[i]);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 60 && data[i].DOM <= 90){
               great45.push(data[i]);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 91 && data[i].DOM <= 120){
               great90.push(data[i]);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 121 && data[i].DOM <= 180){
               great120.push(data[i]);
             }
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 181 && data[i].DOM <= 241){
               great121.push(data[i]);
             }
             //commercial render...
             if (data[i].saleprice < data[i].listprice && data[i].DOM > 241 && data[i].DOM <= 300){
              twofourzero1.push(data[i]);
            }
            if (data[i].saleprice < data[i].listprice && data[i].DOM > 300){
              threehundredone1.push(data[i]);
            }
             
             
             let sale14 = fourteen.length; //provides the length of all sales above=
             let sale30 = thirty.length;
             let sale45 = fortyfive.length;
             let sale90 = ninety.length;
             let sale120 = onetwenty.length;
             let sale121 = onetwoone.length;
             //commerical render...
             let sale240 = twofourzero.length;
             let sale301 = threehundredone.length;
     
             let lengthgreat14 = great14.length; //provides the length of sales above= list via specified DOM 
             let lengthgreat30 = great30.length;
             let lengthgreat45 = great45.length;
             let lengthgreat90 = great90.length;
             let lengthgreat120 = great120.length;
             let lengthgreat121 = great121.length;
             //commerical render...
             let lengthgreat240 = twofourzero1.length;
             let lengthgreat301 = threehundredone1.length;
     
             const atabove14 =  Math.round((lengthgreat14 / sale14) * 100);
             const atabove30 =  Math.round((lengthgreat30 / sale30)  * 100);
             const atabove45 =  Math.round((lengthgreat45 / sale45)  * 100);
             const atabove90 =  Math.round((lengthgreat90 / sale90)  * 100);
             const atabove120 =  Math.round((lengthgreat120 / sale120)  * 100);
             const atabove121 =  Math.round((lengthgreat121 / sale121)  * 100);
             //commerical render...
             const atabove240 =  Math.round((lengthgreat240 / sale240)  * 100);
             const atabove301 =  Math.round((lengthgreat301 / sale301)  * 100);


             document.getElementById('fraction14flush').innerHTML = `${lengthgreat14}` + '/' + `${sale14}`;
             document.getElementById('fraction30flush').innerHTML = `${lengthgreat30}` + '/' + `${sale30}`;
             document.getElementById('fraction45flush').innerHTML = `${lengthgreat45}` + '/' + `${sale45}`;
             document.getElementById('fraction90flush').innerHTML = `${lengthgreat90}` + '/' + `${sale90}`;
             document.getElementById('fraction120flush').innerHTML = `${lengthgreat120}` + '/' + `${sale120}`;
             document.getElementById('fraction121flush').innerHTML = `${lengthgreat121}` + '/' + `${sale121}`;
            //commercial render...
            //document.getElementById('fraction240flush').innerHTML = `${lengthgreat120}` + '/' + `${sale120}`;
            //document.getElementById('fraction301flush').innerHTML = `${lengthgreat121}` + '/' + `${sale121}`;
             
     
     
             document.getElementById('sales14flush').innerHTML = sale14;
             document.getElementById('sales30flush').innerHTML = sale30;
             document.getElementById('sales45flush').innerHTML = sale45;
             document.getElementById('sales90flush').innerHTML = sale90;
             document.getElementById('sales120flush').innerHTML = sale120;
             document.getElementById('sales121flush').innerHTML = sale121;
             //commercial render...
             //document.getElementById('sales240flush').innerHTML = sale240;
             //document.getElementById('sales301flush').innerHTML = sale301;

     
     
     
             document.getElementById('rates14flush').innerHTML = `${atabove14}%`;
             document.getElementById('rates30flush').innerHTML = `${atabove30}%`;
             document.getElementById('rates45flush').innerHTML = `${atabove45}%`;
             document.getElementById('rates90flush').innerHTML = `${atabove90}%`;
             document.getElementById('rates120flush').innerHTML = `${atabove120}%`;
             document.getElementById('rates121flush').innerHTML = `${atabove121}%`;
             //commercial render...
             //document.getElementById('rates240flush').innerHTML = `${atabove240}%`;
             //document.getElementById('rates301flush').innerHTML = `${atabove301}%`;
     
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
             

             //commercial render...

             let differential13 = 0;
             function add13(item, counter, array){
               differential13+=(item.differential);
             }
     
             twofourzero.forEach(add13); 
             console.log(differential13);

             let differential14 = 0;
             function add14(item, counter, array){
               differential14+=(item.differential);
             }
     
             threehundredone.forEach(add14); 
             console.log(differential14);

             let differential15 = 0;
             function add15(item, counter, array){
               differential15+=(item.differential);
             }
     
             twofourzero1.forEach(add15); 
             console.log(differential15);

             let differential16 = 0;
             function add16(item, counter, array){
               differential16+=(item.differential);
             }
     
             threehundredone1.forEach(add16); 
             console.log(differential16);
             ///

     
     
            
             // console.log(saleprice);
            let averagediff14 = Math.round( differential / sale14 );
            let averagediff30 = Math.round( differential2 / sale30 );
            let averagediff45 = Math.round( differential3 / sale45 );
            let averagediff90 = Math.round( (differential4) / sale90 );
            let averagediff120 = Math.round( differential5 / sale120 );
            let averagediff121 = Math.round( differential6 / sale121 );
            //commercial render...
            //let averagediff240 = Math.round( differential13 / sale240 );
            //let averagediff301 = Math.round( differential14 / sale301 );

            
            setBelowdiffratesMF14avg(Math.round(differential7 / lengthgreat14));
            setBelowdiffratesMF30avg(Math.round(differential8 / lengthgreat30));
            setBelowdiffratesMF45avg(Math.round(differential9 / lengthgreat45));
            setBelowdiffratesMF90avg(Math.round(differential10 / lengthgreat90));
            setBelowdiffratesMF120avg(Math.round(differential11 / lengthgreat120));
            setBelowdiffratesMF121avg(Math.round(differential12 / lengthgreat121));
            //commercial render...
            //setBelowdiffratesMF240avg(Math.round(differential15 / lengthgreat240));
            //setBelowdiffratesMF301avg(Math.round(differential16 / lengthgreat301));



     
             document.getElementById('duff14flush').innerHTML = averagediff14;
             document.getElementById('duff30flush').innerHTML = averagediff30;
             document.getElementById('duff45flush').innerHTML = averagediff45;
             document.getElementById('duff90flush').innerHTML = averagediff90;
             document.getElementById('duff120flush').innerHTML = averagediff120;
             document.getElementById('duff121flush').innerHTML = averagediff121;
             //commerical render...
             //document.getElementById('duff240flush').innerHTML = averagediff240;
             //document.getElementById('duff320flush').innerHTML = averagediff301;

     
             //document.getElementById('calvalue').innerHTML = `${date}`;
     
     
           }
         }
       }
       
   
   
         
   
   
   
   
     
   
   
   
   
     
             
             
   
   
      
   
       return(
         <>

   

   <div className='innerelementback'>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '275px' }}href='/home'>Home JS</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '325px' }}href="/active">Active</a>
     <a className='innerelementwater' style={{zIndex: '7', position: 'absolute', left: '45px', top: '375px' }}href='/buyercom'>Buyer</a>
     </div>
     <div className='waterbackground'></div>
   <h5 id='headerstatetop22' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '425px' }}></h5>
   <div className='seperator'></div>
   
   <h2 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '970px', top: '475px' }}>2022</h2>
   <br/>
   <br/>
   <a id ='inject' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '520px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '525px' }}>Listings Sold - ____________</div>
   <a id ='harley' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '1075px', top: '520px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '990px', top: '525px' }}>Avg. Sale____________</div>
   <a id ='sultan' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '595px' }} ></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '600px' }}>Avg. DOM - ______________</div>
   <a id ='oj' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '1075px', top: '595px' }}></a>
   <div  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '990px', top: '600px' }}>Avg. List___________</div>
   <a id ='threebears' title={titleavgdiff} href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '670px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '675px' }}>sale price rate_____________</div>
   <a id ='lordof' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '1105px', top: '670px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '990px', top: '675px' }}>Avg. Differential___________</div>
   <a id ='min' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '770px', top: '745px' }}></a>
   <a id ='max' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '870px', top: '745px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '750px' }}>low - high</div>
   <br/>
   <br/>
   <div id="container" style={{zIndex: '7', position: 'absolute', left: '300px', top: '1600px' }}>
   </div>
   <br/>
   <br/>
   <br/>
   <h5 id='headerstatetop21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '230px', top: '425px' }}></h5>
   
   <h2 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '330px', top: '475px' }}>2021</h2>
   <br/>
   <br/>
   <a id ='inject21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '215px', top: '520px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '525px' }}># Listings Sold - ______________</div>
   <a id ='harley21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '520px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '525px' }}>Avg. Sale_____________</div>
   <a id ='sultan21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '215px', top: '595px' }} ></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '600px' }}>Avg. DOM - _______________</div>
   <a id ='oj21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '595px' }}></a>
   <div  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '600px' }}>Avg. List_____________</div>
   <a id ='threebears21' title={titleavgdiff2} href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '215px', top: '670px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '675px' }}>sale price rate - ___________</div>
   <a id ='lordof21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '670px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '400px', top: '675px' }}>Avg. Differential_____________</div>
   <a id ='min21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '150px', top: '745px' }}></a>
   <a id ='max21' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '240px', top: '745px' }}></a>
   <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '750px' }}>low - high</div>
   <br/>
   <br/>
    <select style={{zIndex: '7', position: 'absolute', left: '990px', top: '720px' }}
    placeholder='County'
    value={county}
    onChange={(e) => setCounty(e.target.value)}
    >
      <option id='value' style={{zIndex: '7', position: 'absolute', left: '990px', top: '720px' }}>---Choose County--</option>
      {GLOBE1.states.map((value, key) => {
        return(
          <option id='value' style={{zIndex: '7', position: 'absolute', left: '990px', top: '720px' }} value={value.name} key={key}>{value.name}</option>);
        })}
        </select>
          <select style={{zIndex: '7', position: 'absolute', left: '990px', top: '745px' }}
          placeholder='State'
          value={selectedState1}
          onChange={(e) => setSelectedState1(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '745px' }}>--Choose State--</option>
            {availableState1?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '745px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '990px', top: '770px' }}
          placeholder='Town'
          value={towntop}
          onChange={(e) => setTowntop(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '770px' }}>--Choose Town--</option>
            {availableTowns1?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '990px', top: '770px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
       
        
        <select id='datetopvalue' style={{zIndex: '7', position: 'absolute', left: '990px', top: '845px' }} value={datetop} onChange={(e)=> setDatetop(e.target.value)}> 
       <option>---Choose Date---</option>
       {twentytwo.map((index) => {
   return (
     <option value={index}>
       {index}
     </option>
   );
       })}
       </select>
   <br/>
   <br/>
       <input style={{zIndex: '7', position: 'absolute', left: '1000px', top: '800px' }}type='number' onChange={(e)=> setPrice1(e.target.value)}/>
       <input style={{zIndex: '7', position: 'absolute', left: '1000px', top: '825px' }}type='number' onChange={(e)=> setPrice2(e.target.value)}/>
   
     <br/>
     <br/>
     <br/>
     <div style={{zIndex: '7', position: 'absolute', left: '75px', top: '900px', height: '3px' }}>_______________________________________________________________________</div>
     <br/>
     <br/>
     <div className='seperator2'></div>
     <br/>
         <br/>
         <h2 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1000px' }}>Price Range</h2>
         <h2 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '240px', top: '1000px' }}>2021</h2>
         <h2 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1000px' }}>2022</h2>
         <h2 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1000px' }}>Avg. DOM 2022</h2>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1075px' }}>$100k - $349k</div>
         <a id='threek21'className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1070px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1075px' }}>______________</div>
         <a id ='threek' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1070px' }} ></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1075px' }}>______________</div>
         <a id ='s3k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1070px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1075px' }}>______________</div>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1150px' }}>$350k - $499k</div>
         <a id='fourk21'className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1145px' }} ></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1150px' }}>______________</div>
         <a id ='fourk' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1145px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1150px' }}>______________</div>
         <a id ='s4k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1145px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1150px' }}>______________</div>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1225px' }}>$500k - $749k</div>
         <a id='sevenk21'className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1220px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1225px' }}>______________</div>
         <a id ='sevenk' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1220px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1225px' }}>______________</div>
         <a id ='s7k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1220px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1225px' }}>______________</div>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1300px' }}>$750k +</div>
         <a id='sevenfivek21'className='awater' style={{zIndex: '7', position: 'absolute', left: '235px', top: '1290px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '205px', top: '1300px' }}>______________</div>
         <a id ='sevenfivek' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '370px', top: '1290px'}} ></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '340px', top: '1300px' }}>______________</div>
         <a id ='s75k' href='#' className='awater' style={{zIndex: '7', position: 'absolute', left: '505px', top: '1290px' }}></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '480px', top: '1300px' }}>______________</div>
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
          <select style={{zIndex: '7', position: 'absolute', left: '75px', top: '1345px' }}
          placeholder='State'
          value={selectedState2}
          onChange={(e) => setSelectedState2(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '75px', top: '1345px' }}>--Choose State--</option>
            {availableState2?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '75px', top: '1345px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '275px', top: '1335px' }}
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
       <input style={{zIndex: '7', position: 'absolute', left: '85px', top: '1375px' }}type='number' onChange={(e)=> setPrice1(e.target.value)}/>
       <input style={{zIndex: '7', position: 'absolute', left: '285px', top: '1375px' }}type='number' onChange={(e)=> setPrice2(e.target.value)}/>
   <br/>
   <br/>
   <img src={image} width={350} height={350} style={{zIndex: '7', position: 'absolute', left: '250px', top: '1500px' }}></img>
   <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1550px' }}>0-14 days</a>
         <a></a>
         <div id='sales14perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '220px', top: '1550px' }}></div>
         <a></a>
         <div id='fraction14perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '320px', top: '1550px' }}></div>
         <a></a>
         <div id='rates14perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '420px', top: '1550px' }}></div>
         <a></a>
         <div id='duff14perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '520px', top: '1550px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1600px' }}>15-30 days</a>
         <a></a>
         <div id='sales30perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '220px', top: '1600px' }}></div>
         <a></a>
         <div id='fraction30perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '320px', top: '1600px' }}></div>
         <a></a>
         <div id='rates30perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '420px', top: '1600px' }}></div>
         <a></a>
         <div id='duff30perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '520px', top: '1600px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1650px' }}>31-45 days</a>
         <a></a>
         <div id='sales45perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '220px', top: '1650px' }}></div>
         <a></a>
         <div id='fraction45perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '320px', top: '1650px' }}></div>
         
         <a></a>
         <div id='rates45perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '420px', top: '1650px' }}></div>
         <a></a>
         <div id='duff45perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '520px', top: '1650px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1700px' }}>46-90 days</a>
         <a></a>
         <div id='sales90perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '220px', top: '1700px' }}></div>
         <a></a>
         <div id='fraction90perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '320px', top: '1700px' }}></div>
         <a></a>
         <div id='rates90perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '420px', top: '1700px' }}></div>
         <a></a>
         <div id='duff90perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '520px', top: '1700px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1750px' }}>91-120 days</a>
         <a></a>
         <div id='sales120perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '220px', top: '1750px' }}></div>
         <a></a>
         <div id='fraction120perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '320px', top: '1750px' }}></div>
         <a></a>
         <div id='rates120perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '420px', top: '1750px' }}></div>
         <div id='duff120perc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '520px', top: '1750px' }}></div>
         <br/>
         <br/>
         <br/>
         <div className='fontwater' id='DOMTotalsalesinnerElement' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1450px'}}></div>
         <div className='fontwater' id='DOM85innerElement' style={{zIndex: '7', position: 'absolute', left: '100px', top: '1500px'}}></div>
         <a></a>
         <br/>
         <div className='seperator3'></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1850px' }}>1/1/2022 - 3/31/2022</div>
         <a></a>
         <div id='quarterly' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1850px' }}></div>
         <a></a>
         <div id='catchmaxmil' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1850px' }}></div>
         <a></a>
         <div id='lordof2' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1850px' }}></div>
         <div id='sultan2' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1850px' }}></div>
        <br/>
        <br/>
        <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1900px' }}>1/1/2021 - $Today:</div>
         <a></a>
         <div id='quarterly21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1900px' }}></div>
         <a></a>
         <div id='catchmaxmil21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1900px' }}></div>
         <a></a>
         <div id='lordof212'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1900px' }}></div>
         <div id='sultan212'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1900px' }}></div>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '75px', top: '1950px' }}>1/1/2020 - $Today:</div>
         <a></a>
         <div id='quarterly20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '250px', top: '1950px' }}></div>
         <a></a>
         <div id='catchmaxmil20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '350px', top: '1950px' }}></div>
         <a></a>
         <div id='lordof20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '450px', top: '1950px' }}></div>
         <div id='sultan20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '550px', top: '1950px' }}></div>
         <br/>
         <br/>
         <br/>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '210px', top: '930px' }}>West Enterprises #applyscience Product Model</h5>
     <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '725px', top: '930px'}}>REPEAT via days on market IE [1/1/2021-12/31/2021]</h5>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1000px' }}>0-30 days</a>
         <a></a>
         <div id='s14'  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1000px' }}></div>
         <a></a>
         <div id='fr14' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1000px' }}></div>
         <a></a>
         <div id='r14' title={totallessdiff14} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1000px' }}></div>
         <a></a>
         <div id='d14' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1000px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1050px' }}>31-60 days</a>
         <a></a>
         <div id='s30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1050px' }}></div>
         <a></a>
         <div id='fr30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1050px' }}></div>
         <a></a>
         <div id='r30' title={totallessdiff30} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1050px' }}></div>
         <a></a>
         <div id='d30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1050px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1100px' }}>61-90 days</a>
         <a></a>
         <div id='s45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1100px' }}></div>
         <a></a>
         <div id='fr45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1100px' }}></div>
         <a></a>
         <div id='r45' title={totallessdiff45} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1100px' }}></div>
         <a></a>
         <div id='d45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1100px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1150px' }}>91-120 days</a>
         <a></a>
         <div id='s90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1150px' }}></div>
         <a></a>
         <div id='fr90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1150px' }}></div>
         <a></a>
         <div id='r90' title={totallessdiff90} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1150px' }}></div>
         <a></a>
         <div id='d90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1150px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1200px' }}>121-180 days</a>
         <a></a>
         <div id='s120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1200px' }}></div>
         <a></a>
         <div id='fr120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1200px' }}></div>
         <a></a>
         <div id='r120' title={totallessdiff120} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1200px' }}></div>
         <a></a>
         <div id='d120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1200px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' id='matchesmaloneinf' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1250px' }}>181-240 days</a>
         <a></a>
         <div id='s121' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1250px' }}></div>
         <a></a>
         <div id='fr121' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1250px' }}></div>
         <a></a>
         <div id='r121' title={totallessdiff121} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1250px' }}></div>
         <a></a>
         <div id='d121' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1250px' }}></div>
         <br/>
         <a className='fontwater' id='matchesmaloneinf' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1300px' }}>241-300 days</a>
         <a></a>
         <div id='s240' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1300px' }}></div>
         <a></a>
         <div id='fr240' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1300px' }}></div>
         <a></a>
         <div id='r240' title={totallessdiff240} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1300px' }}></div>
         <a></a>
         <div id='d240' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1300px' }}></div>
         <br/>
         <a className='fontwater' id='matchesmaloneinf' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1350px' }}>301+ days</a>
         <a></a>
         <div id='s301' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1350px' }}></div>
         <a></a>
         <div id='fr301' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1350px' }}></div>
         <a></a>
         <div id='r301' title={totallessdiff301} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1350px' }}></div>
         <a></a>
         <div id='d301' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1350px' }}></div>
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
          <select style={{zIndex: '7', position: 'absolute', left: '1050px', top: '1450px' }}
          placeholder='State'
          value={selectedState3}
          onChange={(e) => setSelectedState3(e.target.value)}
          >
            <option style={{zIndex: '7', position: 'absolute', left: '1050px', top: '1450px' }}>--Choose State--</option>
            {availableState3?.counties.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '1050px', top: '1450px' }} value={e.name} key={key}>{e.name}</option>
              );
            })}
            </select>
       
        <select style={{zIndex: '7', position: 'absolute', left: '900px', top: '1470px' }}
          placeholder='Town'
          value={town2}
          onChange={(e) => setTown2(e.target.value)}>
            <option style={{zIndex: '7', position: 'absolute', left: '900px', top: '1470px' }}>--Choose Town--</option>
            {availableTowns3?.towns.map((e, key) => {
              return (
                <option style={{zIndex: '7', position: 'absolute', left: '900px', top: '1470px' }}value={e.name} key={key}>
                {e}
                </option>
              );
            })}
          </select>
       <br/>
       <br/>
       <input style={{zIndex: '7', position: 'absolute', left: '700px', top: '1450px'}} type='number' onChange={(e)=> setPricevalue(e.target.value)}/>
     <input style={{zIndex: '7', position: 'absolute', left: '700px', top: '1470px'}}type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
     <Button style={{zIndex: '7', position: 'absolute', left: '700px', top: '1500px'}} variant='dark' type="button" value='Submit' onClick={() => {populateQuote(); DOM85PopulateQuote(); DOM85AbovePopulateQuote();}}>Apply Science</Button>
     <div id='DOM85populatequote' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '1500px'}}></div>
     <div id='DOM85abovepopulatequote' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '1515px'}}></div>
     <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1575px' }}>0-30 days</a>
         <a></a>
         <div id='sales14' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1575px' }}></div>
         <a></a>
         <div id='fraction14' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1575px' }}></div>
         <a></a>
         <div id='rates14' title={belowdiffrates14avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1575px' }}></div>
         <a></a>
         <div id='duff14' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1575px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1625px' }}>31-60 days</a>
         <a></a>
         <div id='sales30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1625px' }}></div>
         <a></a>
         <div id='fraction30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1625px' }}></div>
         <a></a>
         <div id='rates30' title={belowdiffrates30avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1625px' }}></div>
         <a></a>
         <div id='duff30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1625px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1675px' }}>61-90 days</a>
         <a></a>
         <div id='sales45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1675px' }}></div>
         <a></a>
         <div id='fraction45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1675px' }}></div>
         
         <a></a>
         <div id='rates45' title={belowdiffrates45avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1675px' }}></div>
         <a></a>
         <div id='duff45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1675px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1725px' }}>91-120 days</a>
         <a></a>
         <div id='sales90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1725px' }}></div>
         <a></a>
         <div id='fraction90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1725px' }}></div>
         <a></a>
         <div id='rates90' title={belowdiffrates90avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1725px' }}></div>
         <a></a>
         <div id='duff90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1725px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1775px' }}>121-180 days</a>
         <a></a>
         <div id='sales120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1775px' }}></div>
         <a></a>
         <div id='fraction120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1775px' }}></div>
         <a></a>
         <div id='rates120' title={belowdiffrates120avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1775px' }}></div>
         <a></a>
         <div id='duff120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1775px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1825px' }}>181-240</a>
         <a></a>
         <div id='sales121' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1825px' }}></div>
         <a></a>
         <div id='fraction121' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1825px' }}></div>
         <a></a>
         <div id='rates121' title={belowdiffrates121avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1825px' }}></div>
         <a></a>
         <div id='duff121' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1825px' }}></div>
         <br/>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1875px' }}>241-300</a>
         <a></a>
         <div id='sales240' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1875px' }}></div>
         <a></a>
         <div id='fraction240' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1875px' }}></div>
         <a></a>
         <div id='rates240' title={belowdiffrates240avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1875px' }}></div>
         <a></a>
         <div id='duff240' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1875px' }}></div>
         <br/> 
         <br/>
         <br/>
         <a id='matchesmaloneinfin' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '1925px' }}>301+</a>
         <a></a>
         <div id='sales301' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '820px', top: '1925px' }}></div>
         <a></a>
         <div id='fraction301' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '1925px' }}></div>
         <a></a>
         <div id='rates301' title={belowdiffrates301avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1020px', top: '1925px' }}></div>
         <a></a>
         <div id='duff301' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1120px', top: '1925px' }}></div>
         <br/>
       <select style={{zIndex: '7', position: 'absolute', left: '100px', top: '1925px' }}
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
       <input style={{zIndex: '7', position: 'absolute', left: '250px', top: '2050px' }}type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
       <Button style={{zIndex: '7', position: 'absolute', left: '400px', top: '2050px' }}variant='dark' type="button" value='Submit' onClick={marketANT}>Click Me</Button>
         <br/>
   
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2150px' }}>-|-Example from May/June 2022 -gridlines1/7 -|-</div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2100px', width: '1100px', height: '300px', borderRadius: '0%', background: 'grey' }}></div>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2100px'}}>[Year]</h5>
         <div id='salespermonthavg' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '30px', top: '2100px'}}></div>
         <div id='updownperc' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '30px', top: '2200px'}}></div>
         <div id='yearCurrent' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2200px' }}></div>
         <div id='yearCall' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2300px' }}></div>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2100px'}}>$June</h5>
         <div id='currentmonth1' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2200px' }}></div>
         <div id='month1' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '300px', top: '2300px' }}></div>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2100px'}}>$July</h5>
         <div id='currentmonth2' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2200px' }}></div>
         <div id='month2' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '500px', top: '2300px' }}></div>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2100px'}}>$August</h5>
         <div id='currentmonth3' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2200px' }}></div>
         <div id='month3' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2300px' }}></div>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2100px'}}>$September</h5>
         <div id='currentmonth4' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2200px' }}></div>
         <div id='month4' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '900px', top: '2300px' }}></div>
         <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2100px'}}>Total for Year</h5>
         <div  id='totalyearANT' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2200px' }}></div>
         <div id='yearPrevious' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1100px', top: '2300px' }}></div>
         <br/>
         <br/>
         <br/>
         <button onClick={loadPage}style={{zIndex: '7', position: 'absolute', left: '100px', top: '2450px' }} >Show/Hide Row</button>
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
         <select id='valueplan' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2500px' }} value={plandate} onChange={(e)=> setPlandate(e.target.value)}> 
       <option>---Choose Date---</option>
       {twentytwo.map((index) => {
   return (
     <option value={index}>
       {index}
     </option>
   );
       })}
       </select>
       <input style={{zIndex: '7', position: 'absolute', left: '100px', top: '2550px' }}type='number' onChange={(e)=> setPricevalue3(e.target.value)}/>
       <input style={{zIndex: '7', position: 'absolute', left: '250px', top: '2550px' }}type='number' onChange={(e)=> setPricevalue4(e.target.value)}/>
       <Button style={{zIndex: '7', position: 'absolute', left: '400px', top: '2550px' }}variant='dark' type="button" value='Submit' onClick={()=> {businessplanning(); businessplanning21(); businessplanning20(); battingAvg5(); marketflush21();}}>Click Me</Button>
   
       <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2600px'}}>#APPLYSCIENCE - Seller Agency Residential - 
         Per Specific Price Point - Example from date 9/6/2018 - Add Price Reduction data if possible... </h5>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '2750px', width: '530px', height: '300px', borderRadius: '31%', background: 'grey', border: '3.5px solid rgb(51, 153, 255)' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '2750px', width: '530px', height: '300px', borderRadius: '31%', background: 'grey', border: '3.5px solid rgb(51, 153, 255)' }}></div>
         <br/>
         <a id='date14' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '260px', top: '2765px' }}></a>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2830px' }}>$2022:</div>
         <a></a>
         <div id='planAsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2830px' }}></div>
         <a></a>
         <div id='fractionArate' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2830px' }}></div>
         <a></a>
         <div id='planArate' title={belowdiffratesPlanAavg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2830px' }}></div>
         <div id='planAdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2830px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2880px' }}>$2021:</div>
         <a></a>
         <div  id='planAsales21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2880px' }}></div>
         <a></a>
         <div id='fractionArate21'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2880px' }}></div>
         <a></a>
         <div  id='planArate21' title={belowdiffratesPlanA21avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2880px' }}></div>
         <div  id='planAdiff21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2880px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2930px' }}>$2020:</div>
         <a></a>
         <div id='planAsales20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2930px' }}></div>
         <a></a>
         <div id='fractionArate20'  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2930px' }}></div>
         <a></a>
         <div id='planArate20' title={belowdiffratesPlanA20avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2930px' }}></div>
         <div id='planAdiff20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2930px' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '2960px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgAsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '2990px' }}></div>
         <a></a>
         <div id='avgAfraction' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '2990px' }}></div>
         <a></a>
         <div id='avgArate' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '2990px' }}></div>
         <div id='avgAdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '2990px' }}></div>
         <br/>
         <br/>
         <br/>
         <a id='date30' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '860px', top: '2765px' }}></a>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2830px' }}>$2022:</div>
         <a></a>
         <div id='planBsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2830px' }}></div>
         <a></a>
         <div id='fractionBrate'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2830px' }}></div>
         <a></a>
         <div id='planBrate' title={belowdiffratesPlanBavg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2830px' }}></div>
         <div id='planBdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2830px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2880px' }}>$2021:</div>
         <a></a>
         <div id='planBsales21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2880px' }}></div>
         <a></a>
         <div id='fractionBrate21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2880px' }}></div>
         <a></a>
         <div id='planBrate21' title={belowdiffratesPlanB21avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2880px' }}></div>
         <div id='planBdiff21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2880px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2930px' }}>$2020:</div>
         <a></a>
         <div id='planBsales20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2930px' }}></div>
         <a></a>
         <div id='fractionBrate20'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2930px' }}></div>
         <a></a>
         <div id='planBrate20' title={belowdiffratesPlanB20avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2930px' }}></div>
         <div id='planBdiff20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2930px' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '2960px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgBsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '2990px' }}></div>
         <a></a>
         <div id='avgBfraction' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '2990px' }}></div>
         <a></a>
         <div id='avgBrate' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '2990px' }}></div>
         <div id='avgBdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '2990px' }}></div>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '3095px', width: '530px', height: '300px', borderRadius: '31%', background: 'grey', border: '3.5px solid rgb(51, 153, 255)' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '3095px', width: '530px', height: '300px', borderRadius: '31%', background: 'grey', border: '3.5px solid rgb(51, 153, 255)' }}></div>
         <br/>
         <br/>
         <br/>
         <a id='date45' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '260px', top: '3110px' }}></a>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3175px' }}>$2022:</div>
         <a></a>
         <div id='planCsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3175px' }}></div>
         <a></a>
         <div id='fractionCrate'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3175px' }}></div>
         <a></a>
         <div id='planCrate' title={belowdiffratesPlanCavg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3175px' }}></div>
         <div id='planCdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3175px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3225px' }}>$2021:</div>
         <a></a>
         <div id='planCsales21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3225px' }}></div>
         <a></a>
         <div id='fractionCrate21'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3225px' }}></div>
         <a></a>
         <div id='planCrate21' title={belowdiffratesPlanC21avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3225px' }}></div>
         <div id='planCdiff21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3225px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3275px' }}>$2020:</div>
         <a></a>
         <div id='planCsales20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3275px' }}></div>
         <a></a>
         <div id='fractionCrate20'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3275px' }}></div>
         <a></a>
         <div id='planCrate20' title={belowdiffratesPlanC20avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3275px' }}></div>
         <div id='planCdiff20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3275px' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3310px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgCsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3340px' }}></div>
         <a></a>
         <div id='avgCfraction' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3340px' }}></div>
         <a></a>
         <div id='avgCrate' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3340px' }}></div>
         <div id='avgCdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3340px' }}></div>
         <br/>
         <br/>
         <br/>
         <a id='date90' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '860px', top: '3110px' }}></a>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3175px' }}>$2022:</div>
         <a></a>
         <div id='planDsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3175px' }}></div>
         <a></a>
         <div id='fractionDrate'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3175px' }}></div>
         <a></a>
         <div id='planDrate' title={belowdiffratesPlanDavg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3175px' }}></div>
         <div id='planDdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3175px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3225px' }}>$2021:</div>
         <a></a>
         <div id='planDsales21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3225px' }}></div>
         <a></a>
         <div id='fractionDrate21'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3225px' }}></div>
         <a></a>
         <div id='planDrate21' title={belowdiffratesPlanD21avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3225px' }}></div>
         <div id='planDdiff21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3225px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3275px' }}>$2020:</div>
         <a></a>
         <div id='planDsales20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3275px' }}></div>
         <a></a>
         <div id='fractionDrate20'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3275px' }}></div>
         <a></a>
         <div id='planDrate20' title={belowdiffratesPlanD20avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3275px' }}></div>
         <div id='planDdiff20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3275px' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3310px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgDsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3340px' }}></div>
         <a></a>
         <div id='avgDfraction' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '920px', top: '3340px' }}></div>
         <a></a>
         <div id='avgDrate' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3340px' }}></div>
         <div id='avgDdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1135px', top: '3340px' }}></div>
         <br/>
         <br/>
         <br/>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '100px', top: '3440px', width: '530px', height: '300px', borderRadius: '31%', background: 'grey', border: '3.5px solid rgb(51, 153, 255)' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '700px', top: '3440px', width: '530px', height: '365px', borderRadius: '10%', background: 'grey', border: '4.5px solid rgb(64, 64, 64)' }}></div>
         <br/>
         <br/>
         <a id='date120' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '260px', top: '3450px' }}></a>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3515px' }}>$2022:</div>
         <a></a>
         <div id='planEsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3515px' }}></div>
         <a></a>
         <div id='fractionErate'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3515px' }}></div>
         <a></a>
         <div id='planErate' title={belowdiffratesPlanEavg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3515px' }}></div>
         <div id='planEdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3515px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3565px' }}>$2021:</div>
         <a></a>
         <div id='planEsales21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3565px' }}></div>
         <a></a>
         <div id='fractionErate21'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3565px' }}></div>
         <a></a>
         <div id='planErate21' title={belowdiffratesPlanE21avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3565px' }}></div>
         <div id='planEdiff21' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3565px' }}></div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3615px' }}>$2020:</div>
         <a></a>
         <div id='planEsales20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3615px' }}></div>
         <a></a>
         <div id='fractionErate20'className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3615px' }}></div>
         <a></a>
         <div id='planErate20' title={belowdiffratesPlanE20avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3615px' }}></div>
         <div id='planEdiff20' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3615px' }}></div>
         <div className='fontwater' style={{zIndex: '7', position: 'absolute', left: '120px', top: '3645px' }}>__________________________________________________________</div>
         <br/>
         <br/>
         <br/>
         <a></a>
         <div id='avgEsales' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '225px', top: '3675px' }}></div>
         <a></a>
         <div id='avgEfraction' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '325px', top: '3675px' }}></div>
         <a></a>
         <div id='avgErate'  className='fontwater' style={{zIndex: '7', position: 'absolute', left: '425px', top: '3675px' }}></div>
         <div id='avgEdiff' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '525px', top: '3675px' }}></div>
         <br/>
         <br/>
   
         <br/>
     <h5 className='fontwater' style={{zIndex: '7', position: 'absolute', left: '880px', top: '3450px'}}>[180days 2021 bp]</h5>
     <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3510px' }}>0-30 days</a>
         <a></a>
         <div id='sales14flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3510px' }}></div>
         <a></a>
         <div id='fraction14flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3510px' }}></div>
         <a></a>
         <div id='rates14flush' title={belowdiffratesMF14avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3510px' }}></div>
         <a></a>
         <div id='duff14flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3510px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3560px' }}>31-60 days</a>
         <a></a>
         <div id='sales30flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3560px' }}></div>
         <a></a>
         <div id='fraction30flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3560px' }}></div>
         <a></a>
         <div id='rates30flush' title={belowdiffratesMF30avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3560px' }}></div>
         <a></a>
         <div id='duff30flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3560px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3610px' }}>61-90 days</a>
         <a></a>
         <div id='sales45flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3610px' }}></div>
         <a></a>
         <div id='fraction45flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3610px' }}></div>
         <a></a>
         <div id='rates45flush' title={belowdiffratesMF45avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3610px' }}></div>
         <a></a>
         <div id='duff45flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3610px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3660px' }}>91-120 days</a>
         <a></a>
         <div id='sales90flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3660px' }}></div>
         <a></a>
         <div id='fraction90flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3660px' }}></div>
         <a></a>
         <div id='rates90flush' title={belowdiffratesMF90avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3660px' }}></div>
         <a></a>
         <div id='duff90flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3660px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3710px' }}>121-180 days</a>
         <a></a>
         <div id='sales120flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3710px' }}></div>
         <a></a>
         <div id='fraction120flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3710px' }}></div>
         <a></a>
         <div id='rates120flush' title={belowdiffratesMF120avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3710px' }}></div>
         <a></a>
         <div id='duff120flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3710px' }}></div>
         <br/>
         <br/>
         <a className='fontwater' style={{zIndex: '7', position: 'absolute', left: '720px', top: '3760px' }}>181-240 days</a>
         <a></a>
         <div id='sales121flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '825px', top: '3760px' }}></div>
         <a></a>
         <div id='fraction121flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '930px', top: '3760px' }}></div>
         <a></a>
         <div id='rates121flush' title={belowdiffratesMF121avg} className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1035px', top: '3760px' }}></div>
         <a></a>
         <div id='duff121flush' className='fontwater' style={{zIndex: '7', position: 'absolute', left: '1140px', top: '3760px' }}></div>
         <br/>
   
   
       
       
   
   
        
   
         </>
       );
     }
   
     export default Buyercom;
   
