// JavaScript Document
class contactLoader {
  constructor(site) {
    this.title = "Contact | StoneWolf Computer Repair";
    this.meta_desc = "Computer repair specialist. Lower prices, better knowledge.";
    this.starthtml = `
            <div class="container" contact>
              <div class="row justify-content-around">
                <div class="col-10">
                  <h4 class="text-uppercase mb-4">Get In Touch</h4>
                    <form class="row g-3 d-none" id="contactForm" name="contactForm" novalidate>
                      <input type="text" class="sr-only" id="action" name="action">
                      <div class="col-12">
                        <label for="name" class="sr-only">Your Name <span style="color: red;">*</span></label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Your Name *" autocomplete="name">
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="email" class="sr-only">Your email <span style="color: red;">*</span></label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Your Email *" autocomplete="email">
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="phone" class="sr-only">Your number <span style="color: red;">*</span></label>
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Your Phone (US only, w/ area code) *" autocomplete="tel">
                      </div>
                      <div class="col-12">
                        <label for="bodymsg" class="sr-only">Your message <span style="color: red;">*</span></label>
                        <textarea class="form-control" id="bodymsg" name="bodymsg" rows="6" placeholder="Message *"></textarea>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary" id="contactFormBtn">Send Message</button>
                      </div>
                    </form>
                </div>
                <div class="col-12 mt-3">
                  <div class="row text-center">
                    <div class="col-12 col-md-6 contact-info">
                      <i class="fas fa-phone"></i>
                      <a href="tel:+16125581783">+1 612-558-1783</a>
                      <span>Phone</span>
                    </div>
                    <div class="col-12 col-md-6 contact-info">
                      <i class="fas fa-envelope"></i>
                      <a href="mailto:chris@swcrepair.com">chris@swcrepair.com</a>
                      <span>Email</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
  }
}