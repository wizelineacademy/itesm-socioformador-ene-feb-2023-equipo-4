import AudioPlayer from "~/components/AudioPlayer";

describe('InstructionAudio Component', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('checks if audio source is set correctly', () => {
      const audioUrl = 'https://www.kozco.com/tech/piano2-CoolEdit.mp3'; // replace with a valid url
      cy.mount(<AudioPlayer audioUrl={audioUrl} />);
      
      cy.get('audio').should('have.attr', 'src', audioUrl);
    });
  });
});
