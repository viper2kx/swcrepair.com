class templateLoader {
  constructor(site) {
    this.header = `
            <header>
              <div id="topbar">
                <div class="container">
                  <div class="row justify-content-end">
                    <div class="col-auto">
                      <ul class="list-inline my-1">
                        <li class="list-inline-item">
                          <i class="fas fa-phone"></i>
                          <a href="tel:" class="phone">Phone Here (broken)</a>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-map-marker-alt"></i>
                          <a href="" class="address" rel="nofollow noreferrer" target="_blank">Address Here (broken)</a>
                        </li>
                        <li class="list-inline-item d-none">
                          <a href="" rel="nofollow noreferrer" class="facebook" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                            <span class="sr-only">Go to our Facebook page</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <nav class="navbar navbar-light navbar-expand-lg">
                <div class="container">
                  <div class="navbar-header d-flex align-items-center">
                    <a class="navbar-brand" href="/swcrepair/">StoneWolf Computer Repair</a>
                  </div>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#swcrMainNav" aria-controls="swcrMainNav" aria-expanded="false" aria-label="Menu">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="navbar-collapse collapse" id="swcrMainNav" aria-expanded="false" aria-hidden="true" style="height: 0px;">
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="/swcrepair/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/swcrepair/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
        `;
    this.footer = `
            <footer>
              <div class="container-fluid container-md d-flex justify-content-between py-3">
                <div class="footer-copyright">
                  <p class="m-0 p-0">&copy; ` + new Date().getFullYear() + ` StoneWolf Computer Repair</p>
                </div>
                <div class="footer-copyright">
                  <p class="m-0 p-0">Developed by <a href="https://www.viperswebdesign.com/" rel="nofollow noreferrer" target="_blank">Viper's Web Design</a></p>
                </div>
              </div>
            </footer>
        `;
  }
}
