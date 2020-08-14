class homeLoader {
  constructor(site) {
    this.title = "StoneWolf Computer Repair";
    this.meta_desc = "Computer repair specialist. Lower prices, better knowledge.";
    this.starthtml = `
            <div class="container" services>
              <div class="row justify-content-around">
                <div class="col-10">
                  <h4 class="text-uppercase mb-4">Services</h4>
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Service</th>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Advice</td>
                          <td></td>
                         <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Training</td>
                          <td></td>
                         <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Computer Diagnostic</td>
                         <td></td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Computer Recycling</td>
                          <td></td>
                         <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Virus Removal</td>
                         <td></td>
                          <td>$40.00</td>
                        </tr>
                        <tr>
                          <td>PC Tune-up</td>
                          <td>Includes Virus Removal</td>
                          <td>$50.00</td>
                        </tr>
                        <tr>
                          <td>Operating System Install</td>
                         <td>Limited to MS Windows</td>
                          <td>$25.00</td>
                        </tr>
                        <tr>
                          <td>New Hardware</td>
                          <td>+ 30%</td>
                          <td>Dealer Cost</td>
                        </tr>
                        <tr>
                         <td>Used Computer</td>
                         <td>Well Below</td>
                          <td>Dealer Cost</td>
                        </tr>
                        <tr>
                         <td>Custom PC</td>
                          <td>Pay upfront, all parts at dealer cost + sales tax. No Operating System</td>
                         <td>$75.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        `;
  }
}
