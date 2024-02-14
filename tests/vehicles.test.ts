import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { VEHICLES_PROPERTIES } from "../testData/properties.js";
import { API_BASE_URL } from "../config/config.js";

// local variables
const vehicleId = 4;

describe('Testing the vehicles Endpoint from SWAPI', async function () {

    it('should get 200 status code response', async function () {
        const allVehiclesResponse = await getEndpoints('vehicles');
        expect(allVehiclesResponse.status).to.be.equal(200);
        expect(allVehiclesResponse.data.count, "the 'count' value's format is not a number").to.be.a('number');
    });

    it('should get 200 status code response with the vehicles number', async function () {
        const vehicleWithNumberResponse = await getEndpoints('vehicles', vehicleId);
        expect(vehicleWithNumberResponse.status).to.be.equal(200);
    });

    it('should have the correct properties with the vehicles number', async function () {
        const vehicleWithNumberResponse = await getEndpoints('vehicles', vehicleId);
        // Asserting that each property defined in VEHICLES_PROPERTIES exists in the response data
        // Also validating the format of each property
        for (const property of VEHICLES_PROPERTIES) {
            expect(vehicleWithNumberResponse.data).to.have.property(property.name);
            expect(typeof vehicleWithNumberResponse.data[property.name], `the property: "${property.name}" format is not correct`).to.be.equal(property.format);
        }
    });

    it('should have a valid URL with the vehicles number', async function () {
        const vehicleWithNumberResponse = await getEndpoints('vehicles', vehicleId);
        expect(vehicleWithNumberResponse.data.url).to.match(new RegExp(`^${API_BASE_URL}vehicles/\\d+/$`));
    });
})