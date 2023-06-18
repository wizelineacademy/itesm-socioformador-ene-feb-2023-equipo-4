import ResponseText from "~/components/test/ResponseText";

describe('Alternate ResponseText Test 1', () => {
    context('720p resolution', () => {

        beforeEach(() => {
            cy.viewport(1280, 720);
        });

        it('clears the textarea input', () => {
            const initialText = 'Initial Text';
            cy.mount(<ResponseText text={initialText} didChangeText={() => {}} />);
            cy.get('textarea').clear().type('Some Text');
            cy.get('textarea').invoke('val', '').trigger('input');
            cy.get('textarea').should('have.value', '');
        });
    });
});
