import errorHandler from "../errorHandler/errorHandler";

const successHandler = (response) => {
  if (response.data.success) return response.data;
  else {
    response.status = response.data.code;
    return errorHandler({response})
  }
};
export default successHandler;