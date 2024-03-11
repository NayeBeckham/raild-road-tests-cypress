import { Destination } from '../types/destination';
export default class DestinationService {

    destinationEndpoint = 'http://localhost:8080/destination';

    getDestinations = () => {
        const request = {
            method: "GET",
            url: this.destinationEndpoint,
        }

        return cy.request(request);
    }
}