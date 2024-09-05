import { For } from 'solid-js';
import fixture from '../../fixtures/leaderboard.json';

export default function Table() {
  return (
    <table class="stripes">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email address</th>
          <th>Revenue</th>
          <th>Idea</th>
        </tr>
      </thead>
      <tbody>
        <For each={fixture.leaderboard}>
          {(row) => (
            <tr>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>${row.revenue}</td>
              <td>{row.idea}</td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
}
