<score-display>
  <article class="section">
    <div class="container">
      <h1 class="title">Weekly Board</h1>
      <button type="button" class="button" name="button" onclick="{toggleMenu}">This Week</button>
      <ul class="{ hide: toggle}">
        <li><button type="button" class="button" name="button">Last Week</button></li>
        <li><button type="button" class="button" name="button">Archive</button></li>
      </ul>
      <table class="table">
        <thead>
          <th>Date</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Winner</th>
          <th>Player1 Deck</th>
          <th>Player2 Deck</th>
        </thead>
        <tbody>
          <tr each={ this.opts.tasks }>
            <td>{ date }</td>
            <td>{ player1.name }</td>
            <td>{ player2.name }</td>
            <td>{ player1.winner ? player1.name : player2.name }</td>
            <td>
              <span each={ deckColor in player1.deck } class="mtg-deck mtg-deck-{deckColor}"></span>
            </td>
            <td>
              <span each={ deckColor in player2.deck } class="mtg-deck mtg-deck-{deckColor}"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
  <script>
      this.toggle = true;

      this.toggleMenu = function (){
        this.toggle = !this.toggle;
      }

  </script>
</score-display>
