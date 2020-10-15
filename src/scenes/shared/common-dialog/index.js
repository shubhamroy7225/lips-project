import React, { useState } from "react";

import * as commonService from "utility/utility.js";
import './modalstyle.scss';
const ConfirmDialog = () => {
  const defaultOptions = {
    open: false,
    data: { message: "Are you Sure?" },
    cancelText: "Cancel",
    ConfirmText: "Okay",
    onConfirm: () => {}
  };
  const [dialogOptions, setDialogOptions] = useState(defaultOptions);

  commonService.isDialogOpen.subscribe(data => {
    if (data && !dialogOptions.open) setDialogOptions(data);
    else if (!data && dialogOptions.open) setDialogOptions(defaultOptions);
  });

  const {
    open,
    data,
    cancelText,
    confirmText,
    onConfirm,
    onCancel
  } = dialogOptions;

  const handleConfirm = confirm => {
    if (typeof onConfirm !== "undefined") onConfirm(confirm);
  };

  const handleClose = () => {
    if (typeof onCancel !== "undefined") onCancel();
  };
  return (
    <>{
      open && <div className="react-confirm-alert-overlay commonModel">
    <div className="confirmModel">
        <div className="modelHeader">
            <button onClick={() => handleClose(false)}>&times;</button>
        </div>
        <div className="modelBody">
            <h3>{data.title}</h3>
            <p>{data.message}</p>
            <button onClick={() => handleConfirm(true)} className="theme_btn theme_outline_primary text_white btn_block theme_btn_rds25 text_uppercase">{confirmText}</button>
        </div>
    </div>
    </div> }</>
    
  );
};

export default ConfirmDialog;
