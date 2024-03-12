import DestinationService from "../api/destination-service"
import { Destination } from '../types/destination';

describe('tests for destination API CRUD', () => {

    const destinationService = new DestinationService;

    it('should GET all destinations', () => {
      destinationService.getDestinations().then((response) => {
        cy.task("log", `response: ${JSON.stringify(response)}`)
        expect(response.status).to.eq(200);
      })
    })

    it('should CREATE a destination', () => {
      let destination: Destination = {
        city : "Hmo",
        priority: 5
      };
      destinationService.createDestination(destination).then((response) => {
        cy.task("log", `response: ${JSON.stringify(response)}`)
        expect(response.status).to.eq(200);
        expect(response.body).to.eq("Destination created successfully");
      })
    })

    it('should UPDATE a destination', () => {
      //id should change each time for this example
      destinationService.updateDestination("1d6bfb78-c61e-462d-b850-c0da9d451819", "Hmo", 6).then((response) => {
        cy.task("log", `response: ${JSON.stringify(response)}`)
        expect(response.status).to.eq(200);
        expect(response.body).to.eq("Destination priority updated successfully");
      })
    })

  })