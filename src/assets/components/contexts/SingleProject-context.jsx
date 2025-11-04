import { createContext, useState } from "react";
import {  allProjectDetails as initialData } from "../../script/SingleProjectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
 const [singleProjectData, setSingleProjectData] = useState(null); // start as null
  const [allProjectDetails] = useState(initialData); // keep static project list ready


  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData, allProjectDetails }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
