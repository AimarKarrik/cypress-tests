describe('spec', () => {
  it('https://getbootstrap.com/ tests', () => {
    cy.visit("https://getbootstrap.com/")
    cy.title().should('include', 'Bootstrap · The most popular HTML, CSS, and JS library in the world.')
    // has nav element
    cy.get('nav').should('exist')
    // <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav"> has 5 children
    cy.get('ul.navbar-nav.flex-row.flex-wrap.bd-navbar-nav').children().should('have.length', 5)
    // <img src="/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="200" height="165" alt="Bootstrap" class="d-none d-sm-block mx-auto mb-3"> loads
    cy.get('img.d-none.d-sm-block.mx-auto.mb-3').should('be.visible')
    // <h1 class="mb-3 fw-semibold lh-1">Build fast, responsive sites with&nbsp;Bootstrap</h1> loads
    cy.get('h1.mb-3.fw-semibold.lh-1').should('be.visible')

  })
  it('https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster tests', () => {
    cy.visit("https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster")
    cy.title().should('include', 'Space Shuttle Challenger disaster - Wikipedia')
    // <h1 id="firstHeading" class="firstHeading" lang="en">Space Shuttle Challenger disaster</h1> loads
    cy.get('h1#firstHeading.firstHeading').should('be.visible')
    // <img alt="Space Shuttle Challenger launch" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sts-51-l-launch.jpg/220px-Sts-51-l-launch.jpg" decoding="async" width="220" height="165" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sts-51-l-launch.jpg/330px-Sts-51-l-launch.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sts-51-l-launch.jpg/440px-Sts-51-l-launch.jpg 2x" data-file-width="3000" data-file-height="2250"> loads
    cy.get('img.thumbborder').should('be.visible')
    // <a href="/wiki/Space_Shuttle_Challenger" title="Space Shuttle Challenger">Space Shuttle Challenger</a> loads
    cy.get('a[title="Space Shuttle Challenger"]').should('be.visible')
    // <a href="/wiki/Space_Shuttle_program" title="Space Shuttle program">Space Shuttle program</a> loads
    cy.get('a[title="Space Shuttle program"]').should('be.visible')

  })
})