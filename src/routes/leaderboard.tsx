import { Title } from "@solidjs/meta";

import Table from './../components/Leaderboard/Table';

export default function Leaderboard() {
  return (
    <>
      <div class='responsive center-align'></div>
      <main class='responsive'>
        <Title>Bounty Leaderboard</Title>
        <div class='begin'>
          <div class='responsive small-height no-padding'>
            <div class='center middle padding'>
              <h1 class='center-align'>Leaderboard</h1>
            </div>
          </div>
          <div class='responsive'>
            <div class='center middle'>
              <p class='center-align'>
                Quarterly Most Wanted: Firstname Lastname {' '}
                <span>
                  <i class='tiny'>info</i>
                  <div class="tooltip top">The current quarter's revenue leader.</div>
                </span>
              </p>
            </div>
          </div>
          <article class="responsive padding">
            <Table />
          </article>
        </div>
      </main>
    </>
  );
};