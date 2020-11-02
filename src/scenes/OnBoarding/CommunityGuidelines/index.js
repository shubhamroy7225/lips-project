import React, {useState} from "react";
import {Link} from "react-router-dom";
import CommunityGuidelines from "./CommunityGuidelines";
import CommunityGuidelinesOne from "./CommunityGuidelines1";
import CommunityGuidelinesTwo from "./CommunityGuidelines2";
import CommunityGuidelinesThree from "./CommunityGuidelines3";
import CommunityGuidelinesFour from "./CommunityGuidelines4";
import CommunityGuidelinesFive from "./CommunityGuidelines5";
import CommunityGuidelinesSix from "./CommunityGuidelines6";


export default (props) => {

  const [guidelineState, setGuidelineState] = useState(0);

  const guidelines = [
    <CommunityGuidelines {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesOne {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesTwo {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesThree {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesFour {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesFive {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesSix {...props} setGuidelineState={setGuidelineState}/>,
  ];

  return (
          <>
          {guidelines[guidelineState]}
          </>
  )
};