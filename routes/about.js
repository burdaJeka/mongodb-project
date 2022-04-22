//about routes
module.exports = function (app) {
  app.get("/about", (req, res) => {
    res.end(`
    <div>
      <nav>
        <ul>
          <li>
            <a href='/'>Main</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
      <h1>About page</h1>
    </div>
    `);});
};
