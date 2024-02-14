import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { FILMS_PROPERTIES } from "../testData/properties.js";
import { API_BASE_URL } from "../config/config.js";

describe('Testing the films Endpoint from SWAPI', async function () {

    it('should get 200 status code response', async function () {
        const allFilmsResponse = await getEndpoints('films');
        expect(allFilmsResponse.status).to.be.equal(200);
        expect(allFilmsResponse.data.count, "the 'count' value's format is not a number").to.be.a('number');
    });

    it('should get 200 status code response with the film number', async function () {
        const filmWithNumberResponse = await getEndpoints('films', 5);
        expect(filmWithNumberResponse.status).to.be.equal(200);
    });

    it('should have the correct properties with the film number', async function () {
        const filmWithNumberResponse = await getEndpoints('films', 5);
        // Asserting that each property defined in FILMS_PROPERTIES exists in the response data
        for (const property of FILMS_PROPERTIES) {
            expect(filmWithNumberResponse.data).to.have.property(property);
        }
    });

    it('should have a valid URL with the film number', async function () {
        const filmWithNumberResponse = await getEndpoints('films', 5);
        expect(filmWithNumberResponse.data.url).to.include(`${API_BASE_URL}films/`);
    });

})