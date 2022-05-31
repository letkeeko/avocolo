/// <reference types="cypress" />

describe("Use Avocolo tool", () => {
  it("should navigate from home to editor", () => {
    cy.visit("/");
    // front page should load correctly with this heading
    cy.get("h1").contains("Mockup website colors");

    // find a link containing /editor and click it
    cy.get('a[href="/editor"]').click();

    // new url should include /editor
    cy.url().should("include", "/editor");
  });

  it("should toggle all dropdown panel", () => {
    // on editor page
    cy.visit("/editor");

    // find all trigger element then click them
    cy.get(".heading-trigger").click({ multiple: true });

    // dropdown list option should exist
    cy.get(".list-option .option .trigger-btn").click({
      multiple: true,
      force: true,
    });
  });

  it("should display color picker", () => {
    // on editor page
    cy.visit("/editor");

    // trigger first dropdown which is "Navigation"
    cy.get(".heading-trigger").first().click();

    // dropdown list option should exist containing Background and click it
    cy.get(".list-option .option .trigger-btn .label")
      .contains("Background")
      .click();

    // color picker should exist
    cy.get(".react-colorful");

    // find hidden blank overlay and click it - basically like clicking anywhere
    cy.get("#blank-overlay").click();

    // react colorful should disappear
    cy.get(".react-colorful").should("not.exist");

    // same steps above but for Text option
    cy.get(".list-option .option .trigger-btn .label").contains("Text").click();
    cy.get(".react-colorful");
    cy.get("#blank-overlay").click();
    cy.get(".react-colorful").should("not.exist");
  });

  it("should fetch a new image", () => {
    // on editor page
    cy.visit("/editor");

    // trigger dropdown "Banner"
    cy.get(".heading-trigger").contains("Banner").click();

    // dropdown list option should exist containing Image and click it
    // once clicked, text should contain Loading...
    cy.get(".list-option .option .trigger-btn .label")
      .contains("Image")
      .click()
      .contains("Loading...");
  });

  it("should open a modal form to save then able to copy the result URL", () => {
    // on editor page
    cy.visit("/editor");

    // click "Save & share"
    cy.get(".other-action").contains("Save & share").click();

    // form should, find an input field and type in
    cy.get("input").type("Avocado");

    // submit
    cy.get("form").submit();

    // if success this overlay should exist
    cy.get(".result-overlay");

    // text with url should exist then click to copy to clipboard
    cy.get('p[title="Copy to clipboard"]').contains("avocolo.com").click();
  });

  it("should open a modal of current palette", () => {
    // on editor page
    cy.visit("/editor");

    // click "Current palette"
    cy.get(".other-action").contains("Current palette").click();

    // modal should exist containing hex colour codes in the list
    cy.get(".color-list .color-list__each p").contains("#");
  });

  it("should reset and reload the page", () => {
    // on editor page
    cy.visit("/editor");

    // click "Reset & reload", expect the clicked button not to exist as it reloads
    cy.get(".other-action")
      .contains("Reset & reload")
      .click()
      .should("not.exist");
  });

  it("should go back to home page", () => {
    // visit editor page
    cy.visit("/editor");

    // click "Back to home"
    cy.get(".other-action").contains("Back to home").click();

    // new url should match with the home page
    cy.url().should("eq", "http://localhost:3000/");
  });
});
