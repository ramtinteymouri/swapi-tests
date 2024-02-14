import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { SPECIES_PROPERTIES } from "../testData/properties.js";
import { API_BASE_URL } from "../config/config.js";

describe('Testing the species Endpoint from SWAPI', async function () {

    it('should get 200 status code response', async function () {
        const allSpeciesResponse = await getEndpoints('species');
        expect(allSpeciesResponse.status).to.be.equal(200);
        expect(allSpeciesResponse.data.count, "the 'count' value's format is not a number").to.be.a('number');
    });

    it('should get 200 status code response with the species number', async function () {
        const speciesWithNumberResponse = await getEndpoints('species', 5);
        expect(speciesWithNumberResponse.status).to.be.equal(200);
    });

    it('should have the correct properties with the species number', async function () {
        const speciesWithNumberResponse = await getEndpoints('species', 5);
        // Asserting that each property defined in SPECIES_PROPERTIES exists in the response data
        for (const property of SPECIES_PROPERTIES) {
            expect(speciesWithNumberResponse.data).to.have.property(property);
        }
    });

    it('should have a valid URL with the species number', async function () {
        const speciesWithNumberResponse = await getEndpoints('species', 5);
        expect(speciesWithNumberResponse.data.url).to.match(new RegExp(`^${API_BASE_URL}species/\\d+/$`));
    });
})