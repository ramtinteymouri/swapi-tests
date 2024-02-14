import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { PEOPLE_PROPERTIES } from "../testData/properties.js";
import { API_BASE_URL } from "../config/config.js";

// local variables
const personId = 5;

describe('Testing the people Endpoint from SWAPI', async function () {

    it('should get 200 status code response', async function () {
        const allPeopleResponse = await getEndpoints('people');
        expect(allPeopleResponse.status).to.be.equal(200);
        expect(allPeopleResponse.data.count, "the 'count' value's format is not a number").to.be.a('number');
    });

    it('should get 200 status code response with the person number', async function () {
        const personWithNumberResponse = await getEndpoints('people', personId);
        expect(personWithNumberResponse.status).to.be.equal(200);
    });

    it('should have the correct properties with the person number', async function () {
        const personWithNumberResponse = await getEndpoints('people', personId);
        // Asserting that each property defined in PEOPLE_PROPERTIES exists in the response data
        for (const property of PEOPLE_PROPERTIES) {
            expect(personWithNumberResponse.data).to.have.property(property);
        }
    });

    it('should have a valid URL with the person number', async function () {
        const personWithNumberResponse = await getEndpoints('people', personId);
        expect(personWithNumberResponse.data.url).to.match(new RegExp(`^${API_BASE_URL}people/\\d+/$`));
    });
})