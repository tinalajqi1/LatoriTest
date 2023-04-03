import * as link from "../support/loadThemeImpl"
import * as navigation from "../support/navigationImpl"

describe('Navigation', () => {
  beforeEach(() => {
    link.openPage();
  })

  it("Should navigate to given header option and dropdown option", () => {

    navigation.chooseNavigationOption("Bags", "Shop all");
    navigation.chooseNavigationOption("Bags", "Tote bags");
    navigation.chooseNavigationOption("Bags", "Shoulder bags");
    navigation.chooseNavigationOption("Bags", "Crossbody bags");
    navigation.chooseNavigationOption("Bags", "Top handle bags");
    navigation.chooseNavigationOption("Bags", "Mini bags");
    navigation.chooseNavigationOption("Shoes", "Sandals");
    navigation.chooseNavigationOption("Shoes", "Boots");
  }
  );
})