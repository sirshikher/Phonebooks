import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {Orgchart} from './orgchart.jsx';
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import OrgChart from "./Orgchart";

class Icons extends React.Component {
  render() {
    return (
      <>
       <div>
         <OrgChart />
        </div>
      </>
    );
  }
}

export default Icons;