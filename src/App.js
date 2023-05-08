import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import {State} from 'react';
 
// We import all the components we need in our app
import Navbar from "./components/navbarbb";
//import RecordList from "./components/recordList";
//import Edit from "./components/edit";
import CreateAccount from "./components/createaccount";
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import Home from './components/home';
import Login from './components/login';
import ApplyScience from './components/applyscience';
import ApplyScienceWaterFront from './components/applysciencewaterfront';
import Ctg from './components/ctg';
import Buyercom from './components/buyercom';
import Active from './components/active';
//import Map from './components/mapbox';
import AllDataMulti from './components/alldatamulti';
import {
    HashRouter
  } from 'react-router-dom'; 
import L from './components/salaries.json';
import Carousel from './components/carapp';
import CarappWaterFront from './components/carappwaterfront';
import MultiFamily from './components/multifamily';
import ActiveMultiFamilyCtg from './components/activemultifamilyctg'; 
import ActiveWaterMulti from './components/activewatermulti';
import SingleFamily from './components/singlefamily';
import ActiveWaterSingleFamily from './components/activewatersinglefamily';
import AllDataSingleFamily from './components/alldatasinglefamily';
import ActiveSingleFamily from './components/activesinglefamily';
import ActiveSingleFamilyCtg from './components/activesinglefamilyctg'; 
import ActiveCommercial from './components/activecommercial';
import ActiveWaterCommercial from './components/activewatercommercial';
import ActiveCommercialCtg from './components/activecommercialctg'; 
import Condo from './components/condo';
import AllDataCondo from './components/alldatacondo';
import ActiveCondo from './components/activecondo';
import ActiveCondoCtg from './components/activecondoctg'; 
import ActiveWaterCondo from './components/activewatercondo';
import MultiFamilyBuyer from './components/multifamilybuyer';
import CondoBuyer from './components/condobuyer';
import SingleFamilyBuyer from './components/singlefamilybuyer';
import AllDataSingleFamilyBuyer from './components/alldatasinglefamilybuyer';
import AllDataMultiFamilyBuyer from './components/alldatamultifamilybuyer';
import AllDataCondoBuyer from './components/alldatacondobuyer';
import CtgSingleFamily from './components/ctgsinglefamily';
import CtgMultiFamily from './components/ctgmultifamily';
import CtgMultiFamilyBuyer from './components/ctgmultifamilybuyer';
import CtgCondo from './components/ctgcondo';
import CtgCondoBuyer from './components/ctgcondobuyer';








 
const App = () => {

  
 
  //{this.state.isActive ? <h1>Hello React</h1> : null }
   // <button onClick={this.handleShow}>Show</button>
   // <button onClick={this.handleHide}>Hide</button>
   // { (this.state.isNavBarHidden) ? null : <NavBar /> }


 return (
    
   <div>
        
    

     <div className="container" style={{padding: "0px"}}></div>
     <Routes>
              <Route path="/activesinglefamily" element={<ActiveSingleFamily/>} /> 
               <Route path="/createaccount" element={<CreateAccount />} />
               <Route path="/login" element={<Login/>} /> 
               <Route path='/singlefamily' element={<SingleFamily/>}/>
               <Route path='/singlefamilybuyer' element={<SingleFamilyBuyer/>}/>
               <Route path='/ctgsinglefamily' element={<CtgSingleFamily/>}/>
               <Route path='/ctg/' element={<Ctg/>}/>
               <Route path='/ctgmultifamily' element={<CtgMultiFamily/>}/>
               <Route path='/ctgcondo' element={<CtgCondo/>}/>
               <Route path='/ctgcondobuyer' element={<CtgCondoBuyer/>}/>
               <Route path='/ctgmultifamilybuyer' element={<CtgMultiFamilyBuyer/>}/>
               <Route path='/condobuyer' element={<CondoBuyer/>}/>
               <Route path="/alldatacondobuyer/" element={<AllDataCondoBuyer/>} /> 
               <Route path="/" exact element={<ActiveSingleFamily/>} /> 
               <Route path="/activesinglefamilyctg/" element={<ActiveSingleFamilyCtg/>} /> 
               <Route path="/activewatersinglefamily/" element={<ActiveWaterSingleFamily/>} /> 
               <Route path="/alldatasinglefamily/" element={<AllDataSingleFamily/>} /> 
               <Route path="/alldatasinglefamilybuyer/" element={<AllDataSingleFamilyBuyer/>} /> 
               <Route path="/alldata/" element={<AllData/>} /> 
               <Route path="/alldatamulti/" element={<AllDataMulti/>} /> 
               <Route path="/alldatamultifamilybuyer/" element={<AllDataMultiFamilyBuyer/>} /> 
               <Route path="/activewatermulti/" element={<ActiveWaterMulti/>} /> 
               <Route path='/carapp' element={<Carousel/>}/>
               <Route path='/carappwaterfront' element={<CarappWaterFront/>}/>
               <Route path="/applyscience/" element={<ApplyScience/>} />
               <Route path="/applysciencewaterfront/" element={<ApplyScienceWaterFront/>} />
               <Route path="/activecommercial/" element={<ActiveCommercial/>} /> 
               <Route path="/activecommercialctg/" element={<ActiveCommercialCtg/>} /> 
               <Route path="/activewatercommercial/" element={<ActiveWaterCommercial/>} /> 
               <Route path="/home/" element={<Home/>} />
               <Route path='/buyercom/' element={<Buyercom/>}/>
               <Route path='/active' element={<Active/>}/>
               <Route path='/multifamily' element={<MultiFamily/>}/>
               <Route path="/activemultifamilyctg/" element={<ActiveMultiFamilyCtg/>} /> 
               <Route path='/multifamilybuyer' element={<MultiFamilyBuyer/>}/>
               <Route path='/condo' element={<Condo/>}/>
               <Route path='/condobuyer' element={<MultiFamilyBuyer/>}/>
               <Route path='/alldatacondo' element={<AllDataCondo/>}/>
               <Route path='/activecondo' element={<ActiveCondo/>}/>
               <Route path='/activecondoctg' element={<ActiveCondoCtg/>}/>
               <Route path='/activewatercondo' element={<ActiveWaterCondo/>}/>

     </Routes>

   </div>

   
 );
};
 
export default App;


