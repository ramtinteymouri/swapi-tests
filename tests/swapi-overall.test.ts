import { expect } from "chai";
import { getEndpoints } from "../endpoints/mainEndpoints.js";
import { API_BASE_URL } from "../config/config.js";
import { GALACTIC_REGISTRY } from "../testData/properties.js";
import { logger } from "../utils/logs.js";

describe('Testing the main SWAPI Endpoint', async function () {

    it('should get 200 status code response', async function () {
        const mainUrls = await getEndpoints();
        expect(mainUrls.status).to.be.equal(200);
    });

    it('should get all the galactic registry items', async function () {
        const mainUrls = await getEndpoints();
        for (const item of GALACTIC_REGISTRY) {
            expect(mainUrls.data).to.have.property(item).that.equal(`${API_BASE_URL}${item}/`);
        }
        logger(mainUrls.data)
    });
});