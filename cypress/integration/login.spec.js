describe('Login page', () => {
	it('Can reach the login page', () => {
		cy.visit('/').contains('Example login screen');
	});
	it('Can enter a valid email and click submit', () => {
		cy.visit('/')
			.get('[data-cy=email-cy]')
			.type('email@email.com')
			.get('[data-cy=device-checkbox-cy]')
			.click({ force: true })
			.get('[data-cy=login-form-cy]')
			.submit()
			.get('[data-cy=email-cy]')
			.then(($input) => {
				expect($input[0].validationMessage).to.eq('');
			});
	});
	it('Cannot enter an invalid email', () => {
		cy.visit('/')
			.get('[data-cy=email-cy]')
			.type('randomtext')
			.get('[data-cy=device-checkbox-cy]')
			.click({ force: true })
			.get('[data-cy=login-form-cy]')
			.submit()
			.get('[data-cy=email-cy]')
			.then(($input) => {
				expect($input[0].validationMessage).to.not.eq('');
			});
	});
	it('Saves a users email if they tick the box', () => {
		cy.visit('/')
			.get('[data-cy=email-cy]')
			.type('email@email.com')
			.get('[data-cy=device-checkbox-cy]')
			.click({ force: true })
			.reload()
			.get('[data-cy=email-cy]')
			.should('have.value', 'email@email.com')
			.get('[data-cy=device-checkbox-cy]')
			.should('be.checked');
	});
	it('Does not save a users email if they do not initially tick the box', () => {
		cy.visit('/')
			.get('[data-cy=email-cy]')
			.type('email@email.com')
			.reload()
			.get('[data-cy=email-cy]')
			.should('have.value', '')
			.get('[data-cy=device-checkbox-cy]')
			.should('not.be.checked');
	});
	it('Does not save a users email if they untick the box after ticking it', () => {
		cy.visit('/')
			.get('[data-cy=email-cy]')
			.type('email@email.com')
			.get('[data-cy=device-checkbox-cy]')
			.click({ force: true })
			.reload()
			.get('[data-cy=email-cy]')
			.should('have.value', 'email@email.com')
			.get('[data-cy=device-checkbox-cy]')
			.should('be.checked')
			.get('[data-cy=device-checkbox-cy]')
			.click({ force: true })
			.reload()
			.get('[data-cy=email-cy]')
			.should('have.value', '')
			.get('[data-cy=device-checkbox-cy]')
			.should('not.be.checked');
	});
});
