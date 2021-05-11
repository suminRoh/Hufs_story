import React from "react";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import dormitory from "./category/dormitory";
import facility from "./category/facility";
import human from "./category/human";
import student from "./category/student";
import welfare from "./category/welfare";
import Home from "./Home";
const AppRouter=()=>{
  return(
    <Router>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/dormitory">
            <dormitory />
        </Route>
        <Route exact path="/facility">
            <facility />
        </Route>
        <Route exact path="/human">
            <human />
        </Route>
        <Route exact path="/student">
            <student />
        </Route>
        <Route exact path="/welfare">
            <welfare />
        </Route>
    </Router>

  );

};
export default AppRouter;