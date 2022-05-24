import getInitialImage from "../utils/get-initial-image";

export const defaultSelections = {
  navigation: {
    container_background_color: "#F8B400",
    container_text_color: "#FAF5E4",
    logo_color: "#FF6363",
  },
  banner: {
    featured_image: getInitialImage(),
    container_background_color: "#FAF5E4",
    container_text_color: "#125B50",
    button_background_color: "#FF6363",
    button_text_color: "#FF6363",
    button_is_fill: false,
  },
  features: {
    container_background_color: "#125B50",
    container_text_color: "#FAF5E4",
    icon_color: "#FAF5E4",
  },
  cta: {
    featured_image: getInitialImage(),
    container_background_color: "#FAF5E4",
    container_text_color: "#125B50",
    button_background_color: "#FF6363",
    button_text_color: "#FF6363",
    button_is_fill: false,
  },
  slides: {
    featured_image: getInitialImage("square"),
    container_background_color: "#125B50",
    container_text_color: "#FAF5E4",
    dots_color: "#FF6363",
    active_dot_color: "#F8B400",
  },
  accordion: {
    featured_image: getInitialImage(),
    container_background_color: "#FAF5E4",
    container_text_color: "#125B50",
    active_trigger_color: "#F8B400",
  },
  footer: {
    container_background_color: "#125B50",
    container_text_color: "#FAF5E4",
    logo_color: "#FF6363",
    icon_color: "#F8B400",
  },
};

export const slideList = [
  {
    description:
      "<p>Donec quis porttitor libero, ut placerat sapien. Mauris ac ullamcorper nibh. Sed ac malesuada libero. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga sed ac malesuada mauris ac ullamcorper libero semper.",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
  {
    description:
      "<p>Consectetur adipiscing elit, quis porttitor libero sed do libero ut placerat sapien eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
  {
    description:
      "<p>Proin pulvinar justo sit amet dui cursus, sit amet ultrices mi congue. Etiam lobortis consequat interdum. Donec elementum tempus justo, nec sollicitudin nulla. Nam vulputate dolor erat, quis tempus augue tempor sed. Integer non arcu non diam volutpat sagittis sit amet ut sem. Nullam tempus dolor sit amet pretium mattis. Maecenas volutpat tincidunt dui nec semper. Donec at egestas est. Praesent volutpat semper ante tempus fermentum.</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
  {
    description:
      "<p>Aenean interdum lorem in viverra vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet sapien in nulla faucibus, eu iaculis neque egestas. Suspendisse dui nibh, facilisis quis scelerisque a, iaculis eget tellus. Sed volutpat eleifend dapibus. Phasellus imperdiet quis metus nec congue. Aenean eu dignissim sapien, id dapibus nulla. Aliquam vehicula, magna vitae consectetur vulputate, est est dapibus dui, vitae ullamcorper.</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
];

export const accordionList = [
  {
    heading:
      "Nam vel varius libero, vitae egestas leo. Aliquam purus felis etiam",
    description:
      "<p>Fusce cursus nulla ornare eros luctus, elementum blandit libero porta. Fusce vel lacus dapibus, vulputate augue ut, pulvinar nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer pharetra fermentum metus ac tristique  Pellentesque sodales elementum quam a imperdiet.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga sed ac malesuada mauris ac ullamcorper libero semper.</p>",
  },
  {
    heading:
      "Cras elementum nisl ex, id viverra nam eu porttitor diam egestas elit",
    description:
      "<p>Nullam scelerisque nunc vitae erat sodales lacinia. Aliquam erat volutpat.</p><p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  },
  {
    heading: "Duis aliquam molestie sem. Fusce vel lacus dapibus sitamet ipsum",
    description:
      "<p>Etiam lobortis consequat interdum. Donec elementum tempus justo, nec sollicitudin nulla. Nam vulputate dolor erat, quis tempus augue tempor sed. Integer non arcu non diam volutpat sagittis sit amet ut sem. Nullam tempus dolor sit amet pretium mattis. Maecenas volutpat tincidunt dui nec semper. Donec at egestas est. Praesent volutpat semper ante tempus fermentum.</p>",
  },
  {
    heading: "Mauris quis lacus in justo auctor ultricies  consectetur finibus",
    description:
      "<p>Phasellus lectus dolor, sodales non lacus in, tristique viverra nulla. Aenean blandit leo fringilla tempus viverra. </p><p>Aenean interdum lorem in viverra vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet sapien in nulla faucibus, eu iaculis neque egestas. Suspendisse dui nibh, facilisis quis scelerisque a, iaculis eget tellus. Sed volutpat eleifend dapibus. Phasellus imperdiet quis metus nec congue. Aenean eu dignissim sapien, id dapibus nulla. Aliquam vehicula, magna vitae consectetur vulputate, est est dapibus dui, vitae ullamcorper.</p>",
  },
];
