import React from "react";
import ReactBootstrap from'react-bootstrap';
import axios from'axios';
import Context from'./context';
//import CreateAccount from'./createaccount';
import'./alldata.css';
import {Button} from'react-bootstrap';

//import'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from'react-bootstrap/DropdownButton';
import Dropdown from'react-bootstrap/Dropdown';









//function AllData(){
  //const ctx = React.useContext(UserContext);
  //return (
   // <>
  //  <h5>All Data in Store</h5>
   // {JSON.stringify(ctx)}<br/>
  //  </>
 // );
//}












function Datarough(){ //initial java rough draft page AllData();


const [data, setData] = React.useState('');
//const [number, setNumber] = React.useState('');









React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  //fetch('http://localhost:5000/record')
  fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
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
    setData(JSON.stringify(norfolkcounty)); //data
  });
}, []); //{data} below is simply the [data, setData] that we have set the useState - set once we call that backend 

const [data1, setData1] = React.useState('');

React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
  .then(response => response.json())
  .then(data => {
   // console.log(data);
    let greatless = []; // 1665 objects here
    let great = []; // 0 here
    let less = [];
    const maxmin = [];
    for (let i = 0; i<data.length; i++){
    if (data[i].county ==='Barnstable' && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!"){
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
}, []); //{data} below is simply the [data, setData] that we have set the useState - set once we call that backend 


React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let sales = [];
    let threek = [];
    let fourk = [];
    let sevenk = [];
    let sevenfivek = [];
    for (let i = 0; i<data.length; i++){
      if (data[i].county ==='Barnstable' && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
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
        threek.forEach(add);
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
  fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
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
      if (data[i].county ==='Barnstable' && data[i].year === 2022 && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
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
        if (data[i].saleprice >= data[i].listprice && data[i].DOM <= 14 ){
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

        const atabove14 =  lengthgreat14 / sale14 * 100;
        const atabove30 =  lengthgreat30 / sale30  * 100;
        const atabove45 =  lengthgreat45 / sale45  * 100;
        const atabove90 =  lengthgreat90 / sale90  * 100;
        const atabove120 =  lengthgreat120 / sale120  * 100;
        const atabove121 =  lengthgreat121 / sale121  * 100;





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
}, []);

React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
  fetch('http://localhost:5000/record')
  .then(response => response.json())
  .then(data => {
    console.log(data);
   
   // setData(JSON.stringify(data));
  });
}, []);







////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////
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













var [date, setDate] = React.useState(''); //'2/1/2022'
var [pricevalue, setPricevalue] = React.useState(0);
var [pricevalue2, setPricevalue2] = React.useState(0);

async function populateQuote(e){ //this functions onClick...
  const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
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
      if (data[i].county ==='Barnstable' && data[i].listprice !=='AUCTION' && data[i].differenial !== "#VALUE!" ){
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
        if (data[i].DOM > 120 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`){
          onetwoone.push(data[i]);
        }
        if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice >= data[i].listprice && data[i].DOM <= 14 ){
          great14.push(data[i]);
          console.log(great14);
        }
        if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice >= data[i].listprice && data[i].DOM > 14 && data[i].DOM <= 30){
          great30.push(data[i]);
        }
        if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice >= data[i].listprice && data[i].DOM > 30 && data[i].DOM <= 45){
          great45.push(data[i]);
        }
        if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice >= data[i].listprice && data[i].DOM > 45 && data[i].DOM <= 90){
          great90.push(data[i]);
        }
        if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice >= data[i].listprice && data[i].DOM > 90 && data[i].DOM <= 120){
          great120.push(data[i]);
        }
        if (data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}` && data[i].saleprice >= data[i].listprice && data[i].DOM > 120){
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

        const atabove14 =  lengthgreat14 / sale14 * 100;
        const atabove30 =  lengthgreat30 / sale30  * 100;
        const atabove45 =  lengthgreat45 / sale45  * 100;
        const atabove90 =  lengthgreat90 / sale90  * 100;
        const atabove120 =  lengthgreat120 / sale120  * 100;
        const atabove121 =  lengthgreat121 / sale121  * 100;

        


        document.getElementById('sales14').innerHTML = sale14;
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

        document.getElementById('calvalue').innerHTML = `${date}`;


      }
    }
  }

 

    async function oneQuarterly(e){ //this functions onClick...
      const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
      const data = await req.json();
      //if (data.status ==='ok'){
        console.log(data) // all 15k objects...
       

        let barnstablecounty = [];
        let great = [];
        for (let i = 0; i<data.length; i++){
          if (data[i].status ==='SLD' && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`&& data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2022'|| data[i].saledate ==='1/2/2022' || data[i].saledate ==='1/3/2022' || data[i].saledate ==='1/4/2022' || data[i].saledate ==='1/5/2022' || data[i].saledate ==='1/6/2022' || data[i].saledate ==='1/7/2022' || data[i].saledate ==='1/8/2022' || data[i].saledate ==='1/9/2022' || data[i].saledate ==='1/10/2022' || data[i].saledate ==='1/11/2022' || data[i].saledate ==='1/12/2022' || data[i].saledate ==='1/13/2022' || data[i].saledate ==='1/14/2022' || data[i].saledate ==='1/15/2022' || data[i].saledate ==='1/16/2022' || data[i].saledate ==='1/17/2022' || data[i].saledate ==='1/18/2022' || data[i].saledate ==='1/19/2022' || data[i].saledate ==='1/20/2022' || data[i].saledate ==='1/21/2022' || data[i].saledate ==='1/22/2022' || data[i].saledate ==='1/23/2022' || data[i].saledate ==='1/24/2022' || data[i].saledate ==='1/25/2022' || data[i].saledate ==='1/26/2022' || data[i].saledate ==='1/27/2022'|| data[i].saledate ==='1/28/2022'|| data[i].saledate ==='1/29/2022' || data[i].saledate ==='1/30/2022' || data[i].saledate ==='1/31/2022'
          || data[i].saledate ==='2/1/2022' || data[i].saledate ==='2/2/2022' || data[i].saledate ==='2/3/2022' || data[i].saledate ==='2/4/2022' || data[i].saledate ==='2/5/2022' || data[i].saledate ==='2/6/2022' || data[i].saledate ==='2/7/2022' || data[i].saledate ==='2/8/2022' || data[i].saledate ==='2/9/2022' || data[i].saledate ==='2/10/2022' || data[i].saledate ==='2/11/2022' || data[i].saledate ==='2/12/2022' || data[i].saledate ==='2/13/2022' || data[i].saledate ==='2/14/2022' || data[i].saledate ==='2/15/2022'|| data[i].saledate ==='2/16/2022'|| data[i].saledate ==='2/17/2022' || data[i].saledate ==='2/18/2022' || data[i].saledate ==='2/19/2022' || data[i].saledate ==='2/20/2022' || data[i].saledate ==='2/21/2022' || data[i].saledate ==='2/22/2022' || data[i].saledate ==='2/23/2022' || data[i].saledate ==='2/24/2022' || data[i].saledate ==='2/25/2022' || data[i].saledate ==='2/26/2022'|| data[i].saledate ==='2/27/2022' || data[i].saledate ==='2/28/2022'
          || data[i].saledate ==='3/1/2022' || data[i].saledate ==='3/2/2022'|| data[i].saledate ==='3/3/2022' || data[i].saledate ==='3/4/2022' || data[i].saledate ==='3/5/2022' || data[i].saledate ==='3/6/2022' || data[i].saledate ==='3/7/2022' || data[i].saledate ==='3/8/2022' || data[i].saledate ==='3/9/2022'|| data[i].saledate ==='3/10/2022'|| data[i].saledate ==='3/11/2022' || data[i].saledate ==='3/12/2022'|| data[i].saledate === '3/13/2022'|| data[i].saledate ==='3/14/2022' || data[i].saledate ==='3/15/2022' || data[i].saledate ==='3/16/2022' || data[i].saledate ==='3/17/2022' || data[i].saledate ==='3/18/2022' || data[i].saledate ==='3/19/2022' || data[i].saledate ==='3/20/2022' || data[i].saledate ==='3/21/2022'|| data[i].saledate ==='3/22/2022' || data[i].saledate ==='3/23/2022' || data[i].saledate ==='3/24/2022' || data[i].saledate ==='3/25/2022' || data[i].saledate ==='3/26/2022' || data[i].saledate ==='3/27/2022'|| data[i].saledate ==='3/28/2022' || data[i].saledate ==='3/29/2022' || data[i].saledate ==='3/30/2022' || data[i].saledate ==='3/31/2022')){
            barnstablecounty.push(data[i]);

            if (data[i].saleprice >= data[i].listprice){
              great.push(data[i]);
              console.log(great);
            }
          
            console.log(barnstablecounty.saledate);

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


    }

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


const [pricevalue3, setPricevalue3] = React.useState(0);
const [pricevalue4, setPricevalue4] = React.useState(0);
const [date11, setDate11] = React.useState('');
const [openarray, setOpenarray] = React.useState([]);

const [twentyonearray, setTwentyonearray ] = React.useState([...index21]);
var [spliceindex, setSpliceindex] = React.useState(0);
console.log(spliceindex);
console.log(date11);

function dateIndex(e){

for (let i = 0; i < index22.length; i++){


console.log(document.getElementById('value').value);
if (document.getElementById('value').value === index22[i]){
console.log(index22.indexOf(index22[i]));
openarray.push(index22.splice(index22.indexOf(index22[i]), 120));
return openarray;
console.log(openarray);
}

}
}
//console.log(dateIndex);

const [openarray21, setOpenarray21] = React.useState([]); 

function dateIndex21(e){

for (let i = 0; i < index21.length; i++){



if (document.getElementById('value').value.substring(0,4) === index21[i].substring(0,4)){
console.log(index21.indexOf(index21[i])); //
openarray21.push(index21.splice(index21.indexOf(index21[i]), 120));
return openarray21;
console.log(openarray21);
}

}
}







async function businessplanning(e){ 
e.preventDefault();

dateIndex();
dateIndex21();



const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
const data = await req.json()
console.log(data); ////////////// all console.logs to here... 

let newArray = [...openarray];
let newArray21 = [...openarray21];

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

// 2021 variables
let planF = [];
let planFatabove = [];
let planG = [];
let planGatabove = [];
let planH = [];
let planHatabove = [];
let planI = [];
let planIatabove = [];
let planJ = [];
let planJatabove = [];

for (let i = 0; i<data.length; i++){
  if (data[i].county === 'Barnstable' && data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13] || data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] ||
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

    if (data[i].saleprice >= data[i].listprice && data[i].year === 2022 && (data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13])){
      planAatabove.push(data[i]);
      console.log(planAatabove);
    }

    let planAatabovelength = planAatabove.length;
    console.log(planAatabovelength);

    if (data[i].year === 2022 && data[i].saledate === newArray[0][0] || data[i].saledate === newArray[0][1] || data[i].saledate === newArray[0][2] || data[i].saledate === newArray[0][3] || data[i].saledate === newArray[0][4] || data[i].saledate === newArray[0][5] || data[i].saledate === newArray[0][6] || data[i].saledate === newArray[0][7] || data[i].saledate === newArray[0][8] || data[i].saledate === newArray[0][9] || data[i].saledate === newArray[0][10] || data[i].saledate === newArray[0][11] || data[i].saledate === newArray[0][12] || data[i].saledate === newArray[0][13]){
      planA.push(data[i]);
      console.log(planA);
    }

    ////// 0-14days  2021 F...
   if (data[i].saleprice >= data[i].listprice && data[i].year === 2021 && (data[i].saledate === newArray21[0][1] || data[i].saledate === newArray21[0][2] || data[i].saledate === newArray21[0][3] || data[i].saledate === newArray21[0][4] || data[i].saledate === newArray21[0][5] || data[i].saledate === newArray21[0][6] || data[i].saledate === newArray21[0][7] || data[i].saledate === newArray21[0][8] || data[i].saledate === newArray21[0][9] || data[i].saledate === newArray21[0][10] || data[i].saledate === newArray21[0][11] || data[i].saledate === newArray21[0][12] || data[i].saledate === newArray21[0][13])){
      planFatabove.push(data[i]);
      console.log(planFatabove);
    }

    let planFatabovelength = planFatabove.length;
    console.log(planFatabovelength);

    if (data[i].year === 2021 && (data[i].saledate === newArray21[0][0] || data[i].saledate === newArray21[0][1] || data[i].saledate === newArray21[0][2] || data[i].saledate === newArray21[0][3] || data[i].saledate === newArray21[0][4] || data[i].saledate === newArray21[0][5] || data[i].saledate === newArray21[0][6] || data[i].saledate === newArray21[0][7] || data[i].saledate === newArray21[0][8] || data[i].saledate === newArray21[0][9] || data[i].saledate === newArray21[0][10] || data[i].saledate === newArray21[0][11] || data[i].saledate === newArray21[0][12] || data[i].saledate === newArray21[0][13])){
      planF.push(data[i]);
      console.log(planF);
    }

    //////

    if (data[i].year === 2022 && data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29]){
      planB.push(data[i]);
      console.log(planB);
    }
    if (data[i].year === 2022 && data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] ||data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] ){
      planC.push(data[i]);
      console.log(planC);
    }
    if (data[i].year === 2022 && data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
      || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
      || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89]){
      planD.push(data[i]);
      console.log(planD);
    }
    if (data[i].year === 2022 && data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
      || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119]){
      planE.push(data[i]);
      console.log(planE);
    }

    let planElength = planE.length;
    console.log(planE.length);



    let length2 = planB.length; // total sales all 90 days consecutive...
    console.log(length2);

    let planAlength = planA.length;
    console.log(planAlength);

    let planFlength = planF.length;
    console.log(planFlength);

    
// A/F 0-14 days 2022/2021
    document.getElementById('planAsales').innerHTML = planAlength;
    document.getElementById('planFsales').innerHTML = planFlength;


    let ratePlanA = Math.round(( planAatabovelength / planAlength ) * 100); 
    let ratePlanF = Math.round(( planFatabovelength / planFlength ) * 100); 

    document.getElementById('planArate').innerHTML = ratePlanA;
    document.getElementById('planFrate').innerHTML = ratePlanF; 


   
     
     
     if (data[i].year === 2022 && data[i].saleprice >= data[i].listprice && (data[i].saledate === newArray[0][14] || data[i].saledate === newArray[0][15] || data[i].saledate === newArray[0][16] || data[i].saledate === newArray[0][17] || data[i].saledate === newArray[0][18] || data[i].saledate === newArray[0][19] || data[i].saledate === newArray[0][20] || data[i].saledate === newArray[0][21] || data[i].saledate === newArray[0][22] || data[i].saledate === newArray[0][23] || data[i].saledate === newArray[0][24] || data[i].saledate === newArray[0][25] || data[i].saledate === newArray[0][26] || data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29])){
      planBatabove.push(data[i]);
      console.log(planBatabove);  //gz
    }

    let planBatabovelength = planBatabove.length;
    console.log(planBatabovelength);

    let planBlength = planB.length;
    console.log(planBlength);

    document.getElementById('planBsales').innerHTML = planBlength;

    let ratePlanB = Math.round(( planBatabovelength / planBlength ) * 100); 

    document.getElementById('planBrate').innerHTML = ratePlanB;


    if (data[i].year === 2022 && data[i].saleprice >= data[i].listprice && (data[i].saledate === newArray[0][27] || data[i].saledate === newArray[0][28] || data[i].saledate === newArray[0][29] || data[i].saledate === newArray[0][30] || data[i].saledate === newArray[0][31] || data[i].saledate === newArray[0][32] || data[i].saledate === newArray[0][33] || data[i].saledate === newArray[0][34] || data[i].saledate === newArray[0][35] || data[i].saledate === newArray[0][36] || data[i].saledate === newArray[0][37] || data[i].saledate === newArray[0][38] || data[i].saledate === newArray[0][39] || data[i].saledate === newArray[0][40] || data[i].saledate === newArray[0][41] || data[i].saledate === newArray[0][42] || data[i].saledate === newArray[0][43] || data[i].saledate === newArray[0][44] )){
      planCatabove.push(data[i]);
      console.log(planCatabove);  //gz
    }

    let planCatabovelength = planCatabove.length;
    console.log(planCatabovelength);

    let planClength = planC.length;
    console.log(planClength);

    document.getElementById('planCsales').innerHTML = planClength;

    let ratePlanC = Math.round(( planCatabovelength / planClength ) * 100); 

    document.getElementById('planCrate').innerHTML = ratePlanC;

    if (data[i].year === 2022 && data[i].saleprice >= data[i].listprice && (data[i].saledate === newArray[0][45] || data[i].saledate === newArray[0][46] || data[i].saledate === newArray[0][47] || data[i].saledate === newArray[0][48] || data[i].saledate === newArray[0][49] || data[i].saledate === newArray[0][50] || data[i].saledate === newArray[0][51] || data[i].saledate === newArray[0][52] || data[i].saledate === newArray[0][53] || data[i].saledate === newArray[0][54] || data[i].saledate === newArray[0][56] || data[i].saledate === newArray[0][57] || data[i].saledate === newArray[0][58] ||data[i].saledate === newArray[0][59] || data[i].saledate === newArray[0][60] 
      || data[i].saledate === newArray[0][61] || data[i].saledate === newArray[0][62] || data[i].saledate === newArray[0][63] || data[i].saledate === newArray[0][64] || data[i].saledate === newArray[0][65] || data[i].saledate === newArray[0][66] || data[i].saledate === newArray[0][67] || data[i].saledate === newArray[0][68] || data[i].saledate === newArray[0][69] || data[i].saledate === newArray[0][70] || data[i].saledate === newArray[0][71] || data[i].saledate === newArray[0][72] || data[i].saledate === newArray[0][73] ||data[i].saledate === newArray[0][74] || data[i].saledate === newArray[0][75]
      || data[i].saledate === newArray[0][76] || data[i].saledate === newArray[0][77] || data[i].saledate === newArray[0][78] || data[i].saledate === newArray[0][79] || data[i].saledate === newArray[0][80] || data[i].saledate === newArray[0][81] || data[i].saledate === newArray[0][82] || data[i].saledate === newArray[0][83] || data[i].saledate === newArray[0][84] || data[i].saledate === newArray[0][85] || data[i].saledate === newArray[0][86] || data[i].saledate === newArray[0][87] || data[i].saledate === newArray[0][88] ||data[i].saledate === newArray[0][89])){
      planDatabove.push(data[i]);
      console.log(planDatabove);  //gz
    }

    let planDatabovelength = planDatabove.length;
    console.log(planDatabovelength);

    let planDlength = planD.length;
    console.log(planDlength);

    document.getElementById('planDsales').innerHTML = planDlength;

    let ratePlanD = Math.round(( planDatabovelength / planDlength ) * 100); 

    document.getElementById('planDrate').innerHTML = ratePlanD;

    if (data[i].year === 2022 && data[i].saleprice >= data[i].listprice && (data[i].saledate === newArray[0][90] || data[i].saledate === newArray[0][91] || data[i].saledate === newArray[0][92] || data[i].saledate === newArray[0][93] || data[i].saledate === newArray[0][94] || data[i].saledate === newArray[0][95] || data[i].saledate === newArray[0][96] || data[i].saledate === newArray[0][97] || data[i].saledate === newArray[0][98] || data[i].saledate === newArray[0][99] || data[i].saledate === newArray[0][100] || data[i].saledate === newArray[0][101] || data[i].saledate === newArray[0][102] ||data[i].saledate === newArray[0][103] || data[i].saledate === newArray[0][104] 
      || data[i].saledate === newArray[0][105] || data[i].saledate === newArray[0][106] || data[i].saledate === newArray[0][107] || data[i].saledate === newArray[0][108] || data[i].saledate === newArray[0][109] || data[i].saledate === newArray[0][110] || data[i].saledate === newArray[0][111] || data[i].saledate === newArray[0][112] || data[i].saledate === newArray[0][113] || data[i].saledate === newArray[0][114] || data[i].saledate === newArray[0][115] || data[i].saledate === newArray[0][116] || data[i].saledate === newArray[0][117] ||data[i].saledate === newArray[0][118] || data[i].saledate === newArray[0][119])){
      planEatabove.push(data[i]);
      console.log(planEatabove);  
    }

    

    let planEatabovelength = planEatabove.length;
    console.log(planEatabovelength);

    document.getElementById('planEsales').innerHTML = planElength;

    let ratePlanE = Math.round(( planEatabovelength / planElength ) * 100); 

    document.getElementById('planErate').innerHTML = ratePlanE;







///////////////////////////////////////////////////
    let differential = 0;
    let differentialB = 0;
    let differentialC = 0;
    let differentialD = 0;
    let differentialE = 0;
    let differentialF = 0;
           function add(item, counter, array){
            differential+=(item.differential); //NaN
            differentialB+=(item.differential);
            differentialC+=(item.differential);
            differentialD+=(item.differential);
            differentialE+=(item.differential);
            differentialF+=(item.differential);
           }
           planA.forEach(add);
           planB.forEach(add);
           planC.forEach(add);
           planD.forEach(add);
           planE.forEach(add);
           planF.forEach(add);

           let planAavgdiff = Math.round(differential / planAlength);
           let planFavgdiff = Math.round(differentialF / planFlength);
           let planBavgdiff = Math.round(differentialB / planBlength);
           let planCavgdiff = Math.round(differentialC / planClength);
           let planDavgdiff = Math.round(differentialD / planDlength);
           let planEavgdiff = Math.round(differentialE / planElength);

           
           
          document.getElementById('planAdiff').innerHTML = planAavgdiff;
          document.getElementById('planFdiff').innerHTML = planFavgdiff;

         document.getElementById('planBdiff').innerHTML = planBavgdiff;

         document.getElementById('planCdiff').innerHTML = planCavgdiff;

         document.getElementById('planDdiff').innerHTML = planDavgdiff;

         document.getElementById('planEdiff').innerHTML = planEavgdiff;


           
  
  

          


          }
                  
  
}

}












    async function oneQuarterly(e){ //this functions onClick...
      const req = await fetch('https://serverwestdeploy.herokuapp.com/prototypeJS')
      const data = await req.json();
      //if (data.status ==='ok'){
        console.log(data) // all 15k objects...


        
       

        let barnstablecounty = [];
        let great = [];
        for (let i = 0; i<data.length; i++){
          if (data[i].county ==='Barnstable' && data[i].year === 2019 && data[i].saleprice >= `${pricevalue}` && data[i].saleprice < `${pricevalue2}`&& data[i].listprice !=='AUCTION' && data[i].differential !== "#VALUE!" && (data[i].saledate ==='1/1/2022'|| data[i].saledate ==='1/2/2022' || data[i].saledate ==='1/3/2022' || data[i].saledate ==='1/4/2022' || data[i].saledate ==='1/5/2022' || data[i].saledate ==='1/6/2022' || data[i].saledate ==='1/7/2022' || data[i].saledate ==='1/8/2022' || data[i].saledate ==='1/9/2022' || data[i].saledate ==='1/10/2022' || data[i].saledate ==='1/11/2022' || data[i].saledate ==='1/12/2022' || data[i].saledate ==='1/13/2022' || data[i].saledate ==='1/14/2022' || data[i].saledate ==='1/15/2022' || data[i].saledate ==='1/16/2022' || data[i].saledate ==='1/17/2022' || data[i].saledate ==='1/18/2022' || data[i].saledate ==='1/19/2022' || data[i].saledate ==='1/20/2022' || data[i].saledate ==='1/21/2022' || data[i].saledate ==='1/22/2022' || data[i].saledate ==='1/23/2022' || data[i].saledate ==='1/24/2022' || data[i].saledate ==='1/25/2022' || data[i].saledate ==='1/26/2022' || data[i].saledate ==='1/27/2022'|| data[i].saledate ==='1/28/2022'|| data[i].saledate ==='1/29/2022' || data[i].saledate ==='1/30/2022' || data[i].saledate ==='1/31/2022'
          || data[i].saledate ==='2/1/2022' || data[i].saledate ==='2/2/2022' || data[i].saledate ==='2/3/2022' || data[i].saledate ==='2/4/2022' || data[i].saledate ==='2/5/2022' || data[i].saledate ==='2/6/2022' || data[i].saledate ==='2/7/2022' || data[i].saledate ==='2/8/2022' || data[i].saledate ==='2/9/2022' || data[i].saledate ==='2/10/2022' || data[i].saledate ==='2/11/2022' || data[i].saledate ==='2/12/2022' || data[i].saledate ==='2/13/2022' || data[i].saledate ==='2/14/2022' || data[i].saledate ==='2/15/2022'|| data[i].saledate ==='2/16/2022'|| data[i].saledate ==='2/17/2022' || data[i].saledate ==='2/18/2022' || data[i].saledate ==='2/19/2022' || data[i].saledate ==='2/20/2022' || data[i].saledate ==='2/21/2022' || data[i].saledate ==='2/22/2022' || data[i].saledate ==='2/23/2022' || data[i].saledate ==='2/24/2022' || data[i].saledate ==='2/25/2022' || data[i].saledate ==='2/26/2022'|| data[i].saledate ==='2/27/2022' || data[i].saledate ==='2/28/2022'
          || data[i].saledate ==='3/1/2022' || data[i].saledate ==='3/2/2022'|| data[i].saledate ==='3/3/2022' || data[i].saledate ==='3/4/2022' || data[i].saledate ==='3/5/2022' || data[i].saledate ==='3/6/2022' || data[i].saledate ==='3/7/2022' || data[i].saledate ==='3/8/2022' || data[i].saledate ==='3/9/2022'|| data[i].saledate ==='3/10/2022'|| data[i].saledate ==='3/11/2022' || data[i].saledate ==='3/12/2022'|| data[i].saledate === '3/13/2022'|| data[i].saledate ==='3/14/2022' || data[i].saledate ==='3/15/2022' || data[i].saledate ==='3/16/2022' || data[i].saledate ==='3/17/2022' || data[i].saledate ==='3/18/2022' || data[i].saledate ==='3/19/2022' || data[i].saledate ==='3/20/2022' || data[i].saledate ==='3/21/2022'|| data[i].saledate ==='3/22/2022' || data[i].saledate ==='3/23/2022' || data[i].saledate ==='3/24/2022' || data[i].saledate ==='3/25/2022' || data[i].saledate ==='3/26/2022' || data[i].saledate ==='3/27/2022'|| data[i].saledate ==='3/28/2022' || data[i].saledate ==='3/29/2022' || data[i].saledate ==='3/30/2022' || data[i].saledate ==='3/31/2022')){
            barnstablecounty.push(data[i]);

            if (data[i].saleprice >= data[i].listprice){
              great.push(data[i]);
              console.log(great);
            }
          
            console.log(barnstablecounty.saledate);

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


    }
  















    const twenty = [
    '1/1/2020','1/2/2020','1/3/2020','1/4/2020','1/5/2020','1/6/2020','1/7/2020','1/8/2020','1/9/2020','1/10/2020','1/11/2020','1/12/2020','1/13/2020','1/14/2020','1/15/2020','1/16/2020','1/17/2020','1/18/2020','1/19/2020','1/20/2020','1/21/2020','1/22/2020','1/23/2020','1/24/2020','1/25/2020','1/26/2020','1/27/2020','1/28/2020','1/29/2020','1/30/2020','1/31/2020',
    '2/1/2020','2/2/2020','2/3/2020','2/4/2020','2/5/2020','2/6/2020','2/7/2020','2/8/2020','2/9/2020','2/10/2020','2/11/2020','2/12/2020','2/13/2020','2/14/2020','2/15/2020','2/16/2020','2/17/2020','2/18/2020','2/19/2020','2/20/2020','2/21/2020','2/22/2020','2/23/2020','2/24/2020','2/25/2020','2/26/2020','2/27/2020','2/28/2020','2/29/2020',
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



        const nineteen = [
        '1/1/2019','1/2/2019','1/3/2019','1/4/2019','1/5/2019','1/6/2019','1/7/2019','1/8/2019','1/9/2019','1/10/2019','1/11/2019','1/12/2019','1/13/2019','1/14/2019','1/15/2019','1/16/2019','1/17/2019','1/18/2019','1/19/2019','1/20/2019','1/21/2019','1/22/2019','1/23/2019','1/24/2019','1/25/2019','1/26/2019','1/27/2019','1/28/2019','1/29/2019','1/30/2019','1/31/2019',
        '2/1/2019','2/2/2019','2/3/2019','2/4/2019','2/5/2019','2/6/2019','2/7/2019','2/8/2019','2/9/2019','2/10/2019','2/11/2019','2/12/2019','2/13/2019','2/14/2019','2/15/2019','2/16/2019','2/17/2019','2/18/2019','2/19/2019','2/20/2019','2/21/2019','2/22/2019','2/23/2019','2/24/2019','2/25/2019','2/26/2019','2/27/2019','2/28/2019',
        '3/1/2019','3/2/2019','3/3/2019','3/4/2019','3/5/2019','3/6/2019','3/7/2019','3/8/2019','3/9/2019','3/10/2019','3/11/2019','3/12/2019','3/13/2019','3/14/2019','3/15/2019','3/16/2019','3/17/2019','3/18/2019','3/19/2019','3/20/2019','3/21/2019','3/22/2019','3/23/2019','3/24/2019','3/25/2019','3/26/2019','3/27/2019','3/28/2019','3/29/2019','3/30/2019','3/31/2019',
        '4/1/2019','4/2/2019','4/3/2019','4/4/2019','4/5/2019','4/6/2019','4/7/2019','4/8/2019','4/9/2019','4/10/2019','4/11/2019','4/12/2019','4/13/2019','4/14/2019','4/15/2019','4/16/2019','4/17/2019','4/18/2019','4/19/2019','4/20/2019','4/21/2019','4/22/2019','4/23/2019','4/24/2019','4/25/2019','4/26/2019','4/27/2019','4/28/2019','4/29/2019','4/30/2019',
        '5/1/2019','5/2/2019','5/3/2019','5/4/2019','5/5/2019','5/6/2019','5/7/2019','5/8/2019','5/9/2019','5/10/2019','5/11/2019','5/12/2019','5/13/2019','5/14/2019','5/15/2019','5/16/2019','5/17/2019','5/18/2019','5/19/2019','5/20/2019','5/21/2019','5/22/2019','5/23/2019','5/24/2019','5/25/2019','5/26/2019','5/27/2019','5/28/2019','5/29/2019','5/30/2019','5/31/2019',
        '6/1/2019','6/2/2019','6/3/2019','6/4/2019','6/5/2019','6/6/2019','6/7/2019','6/8/2019','6/9/2019','6/10/2019','6/11/2019','6/12/2019','6/13/2019','6/14/2019','6/15/2019','6/16/2019','6/17/2019','6/18/2019','6/19/2019','6/20/2019','6/21/2019','6/22/2019','6/23/2019','6/24/2019','6/25/2019','6/26/2019','6/27/2019','6/28/2019','6/29/2019','6/30/2019',
        '7/1/2019','7/2/2019','7/3/2019','7/4/2019','7/5/2019','7/6/2019','7/7/2019','7/8/2019','7/9/2019','7/10/2019','7/11/2019','7/12/2019','7/13/2019','7/14/2019','7/15/2019','7/16/2019','7/17/2019','7/18/2019','7/19/2019','7/20/2019','7/21/2019','7/22/2019','7/23/2019','7/24/2019','7/25/2019','7/26/2019','7/27/2019','7/28/2019','7/29/2019','7/30/2019','7/31/2019',
        '8/1/2019','8/2/2019','8/3/2019','8/4/2019','8/5/2019','8/6/2019','8/7/2019','8/8/2019','8/9/2019','8/10/2019','8/11/2019','8/12/2019','8/13/2019','8/14/2019','8/15/2019','8/16/2019','8/17/2019','8/18/2019','8/19/2019','8/20/2019','8/21/2019','8/22/2019','8/23/2019','8/24/2019','8/25/2019','8/26/2019','8/27/2019','8/28/2019','8/29/2019','8/30/2019','8/31/2019',
        '9/1/2019','9/2/2019','9/3/2019','9/4/2019','9/5/2019','9/6/2019','9/7/2019','9/8/2019','9/9/2019','9/10/2019','9/11/2019','9/12/2019','9/13/2019','9/14/2019','9/15/2019','9/16/2019','9/17/2019','9/18/2019','9/19/2019','9/20/2019','9/21/2019','9/22/2019','9/23/2019','9/24/2019','9/25/2019','9/26/2019','9/27/2019','9/28/2019','9/29/2019','9/30/2019',
        '10/1/2019','10/2/2019','10/3/2019','10/4/2019','10/5/2019','10/6/2019','10/7/2019','10/8/2019','10/9/2019','10/10/2019','10/11/2019','10/12/2019','10/13/2019','10/14/2019','10/15/2019','10/16/2019','10/17/2019','10/18/2019','10/19/2019','10/20/2019','10/21/2019','10/22/2019','10/23/2019','10/24/2019','10/25/2019','10/26/2019','10/27/2019','10/28/2019','10/29/2019','10/30/2019','10/31/2019',
        '11/1/2019','11/2/2019','11/3/2019','11/4/2019','11/5/2019','11/6/2019','11/7/2019','11/8/2019','11/9/2019','11/10/2019','11/11/2019','11/12/2019','11/13/2019','11/14/2019','11/15/2019','11/16/2019','11/17/2019','11/18/2019','11/19/2019','11/20/2019','11/21/2019','11/22/2019','11/23/2019','11/24/2019','11/25/2019','11/26/2019','11/27/2019','11/28/2019','11/29/2019','11/30/2019','12/1/2019',
        '12/2/2019','12/3/2019','12/4/2019','12/5/2019','12/6/2019','12/7/2019','12/8/2019','12/9/2019','12/10/2019','12/11/2019','12/12/2019','12/13/2019','12/14/2019','12/15/2019','12/16/2019','12/17/2019','12/18/2019','12/19/2019','12/20/2019','12/21/2019','12/22/2019','12/23/2019','12/24/2019','12/25/2019','12/26/2019','12/27/2019','12/28/2019','12/29/2019','12/30/2019','12/31/2019'
            ];



        


            return(<>
            
            <h5>All Data in Store</h5>
    {data} 
    <a id='inject' href='#'></a>
    <a id='harley' href='#'></a>
    <a id='oj' href='#'></a>
    <a id='sultan' href='#'></a>
    <a id='lordof' href='#'></a>
    <a id='threebears' href='#'></a>
    <a id='max' href='#'></a>
    <a id='min' href='#'></a>
    <br/>
    <br/>
    <br/>
    <a id='threek' href='#'></a>
    <a id='fourk' href='#'></a>
    <a id='sevenk' href='#'></a>
    <a id='sevenfivek' href='#'></a>
    <br/>
    <br/>
    <br/>
    <br/>
    <a id='s3k' href='#'></a>
    <a id='s4k' href='#'></a>
    <a id='s7k' href='#'></a>
    <a id='s75k' href='#'></a>
    <br/>
    <br/>
    <br/>
    <br/>
    <a id='s14' href='#'></a>
    <a id='s30' href='#'></a>
    <a id='s45' href='#'></a>
    <a id='s90' href='#'></a>
    <a id='s120' href='#'></a>
    <a id='s121' href='#'></a>
    <br/>
    <a id='r14' href='#'></a>
    <a id='r30' href='#'></a>
    <a id='r45' href='#'></a>
    <a id='r90' href='#'></a>
    <a id='r120' href='#'></a>
    <a id='r121' href='#'></a>
    <br/> 
    <a id='d14' href='#'></a>
    <a id='d30' href='#'></a>
    <a id='d45' href='#'></a>
    <a id='d90' href='#'></a>
    <a id='d120' href='#'></a>
    <a id='d121' href='#'></a>
    <br/>
    <br/>
    <br/>
    <select id='value' value={date} onChange={(e)=> setDate(e.target.value)}> 
    <option>---Choose Date---</option>
    {twentytwo.map((index) => {
return (
  <option value={index}>
    {index}
  </option>
);
    })}
    </select>
    <input type='number' onChange={(e)=> setPricevalue(e.target.value)}/>
    <input type='number' onChange={(e)=> setPricevalue2(e.target.value)}/>
    <Button variant='dark' type="button" value='Submit' onClick={businessplanning}>Click Me</Button>
    <br/>
    <br/>
    <br/>
    <br/>
    <a id='sales14' href='#'></a>
    <a id='sales30' href='#'></a>
    <a id='sales45' href='#'></a>
    <a id='sales90' href='#'></a>
    <a id='sales120' href='#'></a>
    <a id='sales121' href='#'></a>
    <br/>
    <a id='rates14' href='#'></a>
    <a id='rates30' href='#'></a>
    <a id='rates45' href='#'></a>
    <a id='rates90' href='#'></a>
    <a id='rates120' href='#'></a>
    <a id='rates121' href='#'></a>
    <br/>
    <a id='duff14' href='#'></a>
    <a id='duff30' href='#'></a>
    <a id='duff45' href='#'></a>
    <a id='duff90' href='#'></a>
    <a id='duff120' href='#'></a>
    <a id='duff121' href='#'></a>
    <br/>
    <br/>
    <a id='calvalue' href='#'></a>
    <br/>
    <Button variant='dark' type="button" value='Submit' onClick={oneQuarterly}>Quarterly</Button>
    <a id='quarterly' href='#'></a>
    <a id='lordof2' href='#'></a>
    <a id='sultan2' href='#'></a>
    <a id='catchmaxmil' href='#'></a>
    <br/>
    <br/>
    <br/>
    <a id='planAsales'></a>
    <a id='planArate'></a>
    <a id='planAdiff'></a>
    <br/>
    <br/>
    <a id='planBsales'></a>
    <a id='planBrate'></a>
    <a id='planBdiff'></a>
    <br/>
    <br/>
    <a id='planCsales'></a>
    <a id='planCrate'></a>
    <a id='planCdiff'></a>
    <br/>
    <br/>
    <a id='planDsales'></a>
    <a id='planDrate'></a>
    <a id='planDdiff'></a>
    <br/>
    <br/>
    <a id='planEsales'></a>
    <a id='planErate'></a>
    <a id='planEdiff'></a>
    <br/>
    <br/>
    <div> 2021 0-14 </div>
    <a id='planFsales'></a>
    <a id='planFrate'></a>
    <a id='planFdiff'></a>

   
  
  




            
            
            
            
            
            
            
            
            </>)


           
    }

    export default Datarough;