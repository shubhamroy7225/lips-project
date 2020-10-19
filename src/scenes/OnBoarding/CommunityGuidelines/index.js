import React, {useState} from "react";
import {Link} from "react-router-dom";

import CommunityGuidelines from "./CommunityGuidelines";
import CommunityGuidelinesOne from "./CommunityGuidelines2";
import CommunityGuidelinesTwo from "./CommunityGuidelines3";

export default (props) => {

  const [guidelineState, setGuidelineState] = useState(0);

  const guidelines = [
    <CommunityGuidelines {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesOne {...props} setGuidelineState={setGuidelineState}/>,
    <CommunityGuidelinesTwo {...props} setGuidelineState={setGuidelineState}/>
  ];

  return (
          <>
          {guidelines[guidelineState]}
          </>
  )
};