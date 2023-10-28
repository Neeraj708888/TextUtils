export default function Footer(props){
    return (
        <>
            <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white'}}>
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill="currentColor"></path></svg>
              <span className="fs-5">Bootstrap</span>
            </a>
            <ul className="list-unstyled small">
              <li className="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="/">our contributors</a>.</li>
              <li className="mb-2">Code licensed <a href="/" target="_blank" rel="license noopener">MIT</a>, docs <a href="/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
              <li className="mb-2">Currently v5.3.1.</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2"><a href="/">Docs</a></li>
              <li className="mb-2"><a href="/">Examples</a></li>
              <li className="mb-2"><a href="/">Icons</a></li>
              <li className="mb-2"><a href="/">Themes</a></li>
              <li className="mb-2"><a href="/">Blog</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Swag Store</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/">Getting started</a></li>
              <li className="mb-2"><a href="/">Starter template</a></li>
              <li className="mb-2"><a href="/">Webpack</a></li>
              <li className="mb-2"><a href="/">Parcel</a></li>
              <li className="mb-2"><a href="/">Vite</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Bootstrap 5</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Bootstrap 4</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Icons</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">RFS</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Examples repo</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Issues</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Discussions</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Corporate sponsors</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Open Collective</a></li>
              <li className="mb-2"><a href="/" target="_blank" rel="noopener">Stack Overflow</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
    }