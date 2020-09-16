import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';
import { allowedToPost } from 'redux/actions/auth';
import ApprovalCompleted from './components/ApprovalCompleted';
import ApprovalForm from './components/ApprovalForm';
import StartApproval from './components/StartApproval';

const PostApproval = () => {

    const steps = {
        StartApproval: "StartApproval",
        CompleteApproval: "CompleteApproval",
        ApprovalCompleted: "ApprovalCompleted"
    }
    const history = useHistory();

    const moveToNextStep = () => {
        if (step === steps.StartApproval) {
            setStep(steps.CompleteApproval);
        } else if (step === steps.CompleteApproval) {
            setStep(steps.ApprovalCompleted);
        } else {
            allowedToPost();
            history.push(routes.ROOT)
        }
    }

    const dismissApprovalForm = () => {
        history.push(routes.ROOT)
    }

    const uploadApprovalForm = (formData) => {
        let [image1, image2, image3, link, description, ownContent] = formData;

    }

    const [step, setStep] = useState(steps.StartApproval);
    let content = null;
    if (step === steps.StartApproval) {
        content = <StartApproval moveToNextStep={moveToNextStep} />
    } else if (step === steps.CompleteApproval) {
        content = <ApprovalForm moveToNextStep={moveToNextStep} cancel={dismissApprovalForm} />
    } else {
        content = <ApprovalCompleted moveToNextStep={moveToNextStep} />
    }
    return (
        <div id="wrap" class="mt_0">
            {content}
        </div>
    );

}

export default PostApproval;