import { type NextPage } from "next";
import PageTitle from "~/components/PageTitle";
import PageWrapper from "~/components/PageWrapper";
import Button from "~/components/Button";
import Section from "~/components/Section";
import ResponseVideo from "~/components/test/ResponseVideo";
import InstructionAudio from "~/components/test/InstructionAudio";
import ResponseText from "~/components/test/ResponseText";

const ExerciseListen: NextPage = () => {
  const audioUrl = "sounds/bandaudition.mp3";
  return (
    <>
      <PageWrapper>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <PageTitle editsTitle>Listening Exercise</PageTitle>
            </div>

            <div className="my-auto flex flex-row space-x-5">
              <h2 className="py-3 font-sans">1 of 10</h2>
              <Button>Next</Button>
            </div>
          </div>
          <Section>
            <div className="flex flex-col gap-4 px-4 py-3">
              <InstructionAudio audioUrl={audioUrl} />
              <ResponseText></ResponseText>
            </div>
          </Section>
          <br />

          <ResponseVideo />
        </div>
      </PageWrapper>
    </>
  );
};

export default ExerciseListen;