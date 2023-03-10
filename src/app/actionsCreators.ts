import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import * as ActionTypes from "../features/ActionTypes";
import { RootState } from "./store";
import axios from "axios";
import requests from "../utils/requests";
import { getProducts } from "@stripe/firestore-stripe-payments";
import payments from "../lib/stripe";

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

    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ]);

    dispatch(
      addMovies({
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,
      })
    );
  };

export const productsLoading = () => ({
  type: ActionTypes.PRODUCTS_LOADING,
});

export const addProducts = (value: any) => {
  return {
    type: ActionTypes.PRODUCTS_ADD,
    payload: value,
  };
};

export const fetchProducts =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(productsLoading());

    const products = await getProducts(payments, {
      includePrices: true,
      activeOnly: true,
    })
      .then((res) => res)
      .catch((error) => console.log(error.message));

    dispatch(addProducts(products));
  };
