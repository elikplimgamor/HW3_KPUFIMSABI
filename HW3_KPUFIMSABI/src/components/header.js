function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Marvel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

        {/* <!-- Sample Wallpaper --> */}
        <div className="sample-wallpaper">
          {/* <!-- Wallpaper #1 --> */}
          <article className="wallpaper">
            <img
              src="./img/venom-1.jpg"
              alt="Wallpaper #1"
              className="wallpaper"
            />
          </article>

          {/* <!-- Wallpaper #2 --> */}
          <article className="wallpaper">
            <img
              src="./img/hulk-1.jpg"
              alt="Wallpaper #1"
              className="wallpaper"
            />
          </article>

          {/* <!-- Wallpaper #3 --> */}
          <article className="wallpaper">
            <img
              src="./img/venom-2.jpg"
              alt="Wallpaper #1"
              className="wallpaper"
            />
          </article>
        </div>
      </div>
      <style jsx>
        {`
          .sample-wallpaper {
            width: 100%;

            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            gap: 4rem;
          }

          .wallpaper {
            height: 25rem;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
          }

          .wallpaper > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .header {
            width: 100%;
            height: 100vh;
            padding-top: 15rem;
            padding-bottom: 5rem;
            color: var(--color-secondary);
            background-color: var(--color-primary);
            position: relative;
          }

          .title,
          .subtitle {
            width: 60rem;
            max-width: 100%;
          }

          .title {
            font-size: 7.2rem;
          }

          .subtitle {
            margin-bottom: 3rem;
          }
          .search-bar {
            width: 30rem;
            max-width: 100%;
            margin-bottom: 8rem;
            border-bottom: 2px solid var(--color-tertiary);

            position: relative;
            font-size: 1.6rem;
          }

          .search-bar input {
            width: 100%;
            height: 100%;
            border: 0;
            outline: none;
            font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }
          .container {
            width: 124rem;
            max-width: 100%;
            margin: 0rem auto;
          }
          @media (max-width: 1280px) {
            .container {
              padding: 0rem 10rem;
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0rem 4rem;
            }
          }
        `}
      </style>
    </header>
  )
}
export default Header
