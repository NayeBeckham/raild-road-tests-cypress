import { Destination } from '../types/destination';
export default class DestinationService {

    destinationEndpoint = 'http://localhost:8080/destination';

    getDestinations = () => {
        const request = {
            method: "GET",
            url: this.destinationEndpoint,
            failOnStatusCode: false
        }

        return cy.request(request);
    }

    createDestination = (destination: Destination) => {
        const { city, priority } = destination;
        const request = {
            method: "POST",
            url: this.destinationEndpoint,
            body: {
                city,
                priority
            },
            failOnStatusCode: false
        }

        return cy.request(request);
    }

    updateDestination = (id: string, city: string, priority: number) => {
        const request = {
            method: "PUT",
            url: `${this.destinationEndpoint}/${id}/${city}/${priority}`,
            failOnStatusCode: false
        }

        return cy.request(request);
    }
}