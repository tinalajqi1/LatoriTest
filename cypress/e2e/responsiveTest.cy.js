import * as link from "../support/loadThemeImpl"
import * as responsive from "../support/responsiveImpl"

describe('Responsive', () => {
  beforeEach(() => {
    link.openPage();
  })

  it("Should render correctly on different devices", () => {
    responsive.differentDevices();
  })
})


