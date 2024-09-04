import { Fund } from "../types/fundTypes";
import { mockFunds } from "./mockData";

/**
 * Fetches the list of funds from the mock data.
 *
 * This function simulates an API call by using a `setTimeout` to
 * return mock funds data after 500 milliseconds.
 *
 * @returns {Promise<Fund[]>} A promise that resolves to an array of Fund objects.
 */
export const fetchFunds = async (): Promise<Fund[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockFunds);
        }, 500);
    });
};
