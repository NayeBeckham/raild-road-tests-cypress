import DestinationService from "../api/destination-service"

describe('tests for destination API CRUD', () => {

    const destinationService = new DestinationService;

    it('should get all destinations', () => {
      destinationService.getDestinations().then((response) => {
        cy.task("log", `response: ${JSON.stringify(response)}`)
        expect(response.status).to.eq(200);
      })
    })

  })