import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";


const TabCate=() => {

    const [jobs,setJobs]=useState([]);

    useEffect(()=>{
        const getData=async ()=>{
            const {data}=await axios.get("http://localhost:5000/jobs");
            setJobs(data);
        }
        getData();
    },[]);
    return (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
      {
        jobs.filter(j=>j.category=="Web Development").
        map((job )=>(
            <JobCard  job={job}></JobCard>
        ))
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      {
        jobs.filter(j=>j.category=="Software Development")
        .map((job)=>(
            <JobCard  job={job}></JobCard>
        ))
      }
    </TabPanel>
  </Tabs>

)}
;

export default TabCate