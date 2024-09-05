export default function TopNav() {
  return (
    <header class='primary'>
      <nav class='grid'>
        <div class='s4'>
          <a class='button border tertiary small-round' href="/">Submit</a>
          <a class='button border tertiary small-round' href="/leaderboard">Leaderboard</a>
        </div>
        <div class='s4 center-align'>
          <img 
            src='/bounty_logo.png'
            style={{
              height: '36px',
              width: 'auto',
            }}
          />
        </div>
      </nav>
    </header>
  )
};
