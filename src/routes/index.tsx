import { Title } from '@solidjs/meta';
import Form from '~/components/Form';

export default function Home() {
  return (
    <>
      <div class="responsive center-align blue-4" />
      <main class="responsive">
        <Title>Submit Bounty</Title>
        <div class="begin">
          <div class="responsive small-height no-padding">
            <div class="center middle padding">
              <h1 class="center-align">Submit experiment idea</h1>
            </div>
          </div>
          <article class="responsive padding">
            <Form />
          </article>
        </div>
      </main>
    </>
  );
}
