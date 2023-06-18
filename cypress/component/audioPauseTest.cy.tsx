import AudioPlayer from "~/components/AudioPlayer";


describe('InstructionAudio Component', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('pauses audio when "Pause" button is clicked', () => {
      const testAudioUrl = 'https://drive.google.com/uc?export=download&id=1iSEK_0zcbIg7hvAh7LkpRHAA_clDBGTN';
      cy.mount(<AudioPlayer audioUrl={testAudioUrl} />);
      cy.contains('Listen').click();
      cy.wait(5000);
      cy.contains('Pause').click();
    });
  });
});
