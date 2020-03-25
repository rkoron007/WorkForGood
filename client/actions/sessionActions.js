import * as API from "../util/sessionApiUtil";

export const RECEIVE_WORKER = "RECEIVE_WORKER";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveWorker = worker => ({
  type: RECEIVE_WORKER,
  worker
});

const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signUpWorker = workerData => dispatch =>
  API.signUpWorker(workerData).then(
    worker => {
      console.log(worker);
      return dispatch(receiveWorker(worker));
    }),
    // error => dispatch(receiveErrors(error))
  );

export const signUpCompany = companyData => dispatch =>
  API.signUpWorker(companyData).then(
    company => dispatch(receiveCompany(company)),
    error => dispatch(receiveErrors(error))
  );

export const signInWorker = worker => dispatch =>
  API.signInWorker(worker).then(
    worker => dispatch(receiveWorker(worker)),
    error => dispatch(receiveErrors(error))
  );

export const signInCompany = company => dispatch =>
  API.signInCompany(company).then(
    company => dispatch(receiveCompany(company)),
    error => dispatch(receiveErrors(error))
  );

export const signOut = () => dispatch =>
  API.signOut().then(
    () => dispatch(logoutCurrentUser()),
    error => dispatch(receiveErrors(error))
  );
