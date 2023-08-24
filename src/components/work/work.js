import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../common/header";
import Posts from "../posts/posts";

const Work = () => {
  return (
    <>
      <div className="site-wrap" id="home-section">
        <Header />

        <Tabs defaultActiveKey="Projects" id="tab" className="mb-3" justify>
          <Tab eventKey="Projects" title="Projects">
            <Posts />
          </Tab>
          <Tab eventKey="Members" title="Members">
            Tab content for Members
          </Tab>
          <Tab eventKey="News" title="News">
            Tab content for News
          </Tab>
          <Tab eventKey="Meetings" title="Meetings">
            Tab content for Meetings
          </Tab>
          <Tab eventKey="Visitors_Meetings" title="Visitors_Meetings">
            Tab content for Visitors_Meetings
          </Tab>
          <Tab eventKey="Achievements" title="Achievements">
            Tab content for Achievements
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Work;
