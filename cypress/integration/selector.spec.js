describe("Cypress Selector", () => {
  it("should visit react website", () => {
    cy.visit(Cypress.env("host"));
  });

  it("select logo", () => {
    cy.get(".w3schools-logo");
  });

  it("Select by Attribute", () => {
    cy.get('[href = "/html/default.asp"]');
  });

  it("Select by id", () => {
    cy.get("#topnavbtn_exercises");
  });

  it("find by text", () => {
    cy.contains("HTML Tutorial");
  });

  it("combinations of button and class", () => {
    cy.get("a.w3-btn");
  });

  it("chaining selectors", () => {
    cy.get(".topnav").contains("CSS");
  });

  it("find by id bootstrap", () => {
    cy.get(".topnav").contains("BOOTSTRAP");
    //cy.get("w3-bar").contains("BOOTSTRAP");
  });

  it("find by text THE WORLD'S LARGEST WEB DEVELOPER SITE", () => {
    cy.contains("THE WORLD'S LARGEST WEB DEVELOPER SITE");
  });

  it("find by attribute Search W3Schools", () => {
    cy.get('[title = "Search W3Schools"]');
  });

  it("find by combinations of button and class for next button", () => {
    cy.get("a.w3-right.w3-btn").first();
  });

  it("find by class w3-example", () => {
    cy.get(".w3-example").find("h3").contains("Example");
  });
});
