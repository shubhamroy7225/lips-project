import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { routes } from 'utility/constants/constants';
import { allowedToPost } from 'redux/actions/auth';
import ApprovalCompleted from './components/ApprovalCompleted';
import ApprovalForm from './components/ApprovalForm';
import StartApproval from './components/StartApproval';
import { connect } from 'react-redux';
import { ApprovalStatus } from 'utility/constants/constants';
const PostApproval = (props) => {

    const steps = {
        StartApproval: "StartApproval",
        CompleteApproval: "CompleteApproval",
        ApprovalCompleted: "ApprovalCompleted"
    }
    const history = useHistory();

    const moveToNextStep = () => {
        debugger;
        if (props.user.approval_status !== ApprovalStatus.not_submitted) {
            //already submitted so take back to feeds
            history.push(routes.ROOT)
        } else {
            if (step === steps.StartApproval) {
                setStep(steps.CompleteApproval);
            } else if (step === steps.CompleteApproval) {
                setStep(steps.ApprovalCompleted);
            } else {
                history.push(routes.ROOT)
            }
        }

    }

    const dismissApprovalForm = () => {
        history.push(routes.ROOT)
    }

    const [step, setStep] = useState(steps.StartApproval);
    let content = null;
    if (step === steps.StartApproval && props.user.approval_status === ApprovalStatus.not_submitted) {
        content = <StartApproval moveToNextStep={moveToNextStep} />
    } else if (step === steps.CompleteApproval && props.user.approval_status === ApprovalStatus.not_submitted) {
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


const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapStateToProps, null)(PostApproval);
