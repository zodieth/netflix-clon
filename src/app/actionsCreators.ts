import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import * as ActionTypes from "../features/ActionTypes";
import { RootState } from "./store";
import axios from "axios";
import requests from "../utils/requests";

// export const postClaim = (value: any) => {
//   axios.post("https://henry-pf-back.up.railway.app/claims", value);
//   return {
//     type: ActionTypes.POST_CLAIM,
//     payload: value,
//   };
// };

export const moviesLoading = () => ({
  type: ActionTypes.MOVIES_LOADING,
});

export const addMovies = (value: any) => {
  return {
    type: ActionTypes.MOVIES_ADD,
    payload: value,
  };
};

export const fetchMoviesApi =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(moviesLoading());

    // const netflixOriginals = await axios
    //   .get(requests.fetchNetflixOriginals)
    //   .then((res) => res.data);

    // dispatch(addMovies(netflixOriginals));
    // console.log(netflixOriginals);

    return await axios
      .get(requests.fetchNetflixOriginals)
      .then(
        function (response) {
          if (response.status) return response;
          else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            throw error;
          }
        },
        function (error) {
          var errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((data) => dispatch(addMovies(data.data)));
  };
