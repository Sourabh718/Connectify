const Header = ({ searchUserId, setSearchUserId }) => {
  return (
    <header className="p-3 text-bg-dark " >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">     
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
           <h1 
          className="fw-bold text-uppercase"
          style={{
            background: "linear-gradient(90deg, #8a2be2, #ff1493, #00bfff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
            letterSpacing: "2px",
            backgroundSize: "200% auto",
            animation: "shine 3s linear infinite"
          }}
          >
            Connectify
          </h1>
          </a>

          <div className="d-flex align-items-center ms-auto">
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
                value={searchUserId}
                onChange={(e) => setSearchUserId(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;