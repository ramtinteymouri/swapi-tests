import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { PLANETS_PROPERTIES } from "../testData/properties.js";
import { API_BASE_URL } from "../config/config.js";

// local variables
const planetId = 5;

describe('Testing the planets Endpoint from SWAPI', async function () {

    it('should get 200 status code response', async function () {
        const allPlanetsResponse = await getEndpoints('planets');
        expect(allPlanetsResponse.status).to.be.equal(200);
        expect(allPlanetsResponse.data.count, "the 'count' value's format is not a number").to.be.a('number');
    });

    it('should get 200 status code response with the planet number', async function () {
        const planetWithNumberResponse = await getEndpoints('planets', planetId);
        expect(planetWithNumberResponse.status).to.be.equal(200);
    });

    it('should have the correct properties with the planet number', async function () {
        const planetWithNumberResponse = await getEndpoints('planets', planetId);
        // Asserting that each property defined in PLANETS_PROPERTIES exists in the response data
        // Also validating the format of each property
        for (const property of PLANETS_PROPERTIES) {
            expect(planetWithNumberResponse.data).to.have.property(property.name);
            expect(typeof planetWithNumberResponse.data[property.name], `the property: "${property.name}" format is not correct`).to.be.equal(property.format);
        }
    });

    it('should have a valid URL with the planet number', async function () {
        const planetWithNumberResponse = await getEndpoints('planets', planetId);
        expect(planetWithNumberResponse.data.url).to.match(new RegExp(`^${API_BASE_URL}planets/\\d+/$`));
    });
})