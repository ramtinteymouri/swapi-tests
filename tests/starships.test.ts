import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { STARSHIPS_PROPERTIES } from "../testData/properties.js";
import { API_BASE_URL } from "../config/config.js";

// local variables
const starshipId = 5;

describe('Testing the starships Endpoint from SWAPI', async function () {

    it('should get 200 status code response', async function () {
        const allStarshipsResponse = await getEndpoints('starships');
        expect(allStarshipsResponse.status).to.be.equal(200);
        expect(allStarshipsResponse.data.count, "the 'count' value's format is not a number").to.be.a('number');
    });

    it('should get 200 status code response with the starships number', async function () {
        const starshipWithNumberResponse = await getEndpoints('starships', starshipId);
        expect(starshipWithNumberResponse.status).to.be.equal(200);
    });

    it('should have the correct properties with the starships number', async function () {
        const starshipWithNumberResponse = await getEndpoints('starships', starshipId);
        // Asserting that each property defined in STARSHIPS_PROPERTIES exists in the response data
        for (const property of STARSHIPS_PROPERTIES) {
            expect(starshipWithNumberResponse.data).to.have.property(property);
        }
    });

    it('should have a valid URL with the starships number', async function () {
        const starshipWithNumberResponse = await getEndpoints('starships', starshipId);
        expect(starshipWithNumberResponse.data.url).to.match(new RegExp(`^${API_BASE_URL}starships/\\d+/$`));
    });
})