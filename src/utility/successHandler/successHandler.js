import errorHandler from "../errorHandler/errorHandler";
import * as commonService from "utility/utility";

const successHandler = (response) => {
  // stop loading
  // commonService.isLoading.onNext(false);
  if (response.data.success) return response;
  else {
    response.status = response.data.code;
    return errorHandler({ response })
  }
};
export default successHandler;