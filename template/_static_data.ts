import getInitialImage from "../utils/get-initial-image";

export const defaultSelections = {
  navigation: {
    container_background_color: "#ffffff",
    container_text_color: "#524A4E",
    logo_color: "#524A4E",
  },
  banner: {
    featured_image: getInitialImage(),
    container_background_color: "#ffffff",
    container_text_color: "#524A4E",
    button_background_color: "#219F94",
    button_text_color: "#ffffff",
    button_is_fill: true,
  },
  features: {
    container_background_color: "#524A4E",
    container_text_color: "#ffffff",
    icon_color: "#ffffff",
  },
  cta: {
    featured_image: getInitialImage(),
    container_background_color: "#ffffff",
    container_text_color: "#524A4E",
    button_background_color: "#219F94",
    button_text_color: "#ffffff",
    button_is_fill: true,
  },
  slides: {
    featured_image: getInitialImage("square"),
    container_background_color: "#524A4E",
    container_text_color: "#ffffff",
    dots_color: "#ffffff",
    active_dot_color: "#219F94",
  },
  accordion: {
    featured_image: getInitialImage(),
    container_background_color: "#ffffff",
    container_text_color: "#524A4E",
    active_trigger_color: "#219F94",
  },
  footer: {
    container_background_color: "#524A4E",
    container_text_color: "#ffffff",
    logo_color: "#ffffff",
    icon_color: "#219F94",
  },
};

export const slideList = [
  {
    description:
      "<p>Caramels halvah lemon drops tiramisu tootsie roll cupcake wafer candy sweet roll. Halvah chocolate gummies. Pastry candy jelly-o jujubes croissant chocolate bar ice cream oat cake.</p><p>Jelly-o jelly beans sweet roll chupa chups gummies halvah bonbon sweet lemon drops roll topping.</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
  {
    description:
      "<p>Gingerbread cupcake gingerbread fruitcake marshmallow jelly beans. Sweet chocolate cake dessert donut croissant candy canes bonbon pie. Biscuit donut sesame snaps halvah gummies jelly marshmallow chupa chups candy icing candy canes marshmallow carrot cake candy canes marzipan chocolate cake halvah shortbread donut cupcake wafer ice cream.</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
  {
    description:
      "<p>Jelly jelly beans marzipan sweet roll gummi bears roll cupcake wafer candy sweet roll. Halvah chocolate gummies. Pastry candy jelly-o jujubes croissant chocolate bar ice cream oat cake.</p><p>Cake chocolate bar cupcake chupa chups gummies halvah bonbon sweet roll topping cheesecake fruitcake donut lemon.</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
  {
    description:
      "<p>Cotton candy candy lollipop croissant sugar plum cake cookie muffin. Wafer pudding topping cake gummies lemon drops. Gummi bears oat cake tart jelly beans jujubes dragée gummi bears. Fruitcake muffin chupa chups cake cookie sweet roll cupcake jelly beans shortbread tootsie roll lollipop biscuit jelly. Cake pie croissant jelly candy topping halvah fruitcake</p>",
    name: "Hendrerit Magna,",
    company: "Praesent consectetur",
  },
];

export const accordionList = [
  {
    heading: "Marshmallow chocolate bar donut sweet roll caramels topping",
    description:
      "<p>Carrot cake jujubes dessert danish chocolate danish halvah cupcake. Bear claw jujubes croissant chocolate cake marzipan carrot cake carrot cake candy canes bear claw.</p><p>Toffee halvah jujubes caramels powder sesame snaps tootsie roll candy. Jujubes lollipop jujubes sweet macaroon gummies oat cake. Muffin ice cream pudding oat cake sugar plum gummi bears muffin sweet. Croissant gingerbread sweet roll muffin sweet. Muffin cake cookie lemon drops ice cream gummies chocolate cupcake icing. Dragée jujubes lollipop chocolate sugar plum. Macaroon jelly beans tootsie roll tiramisu sweet roll tiramisu sugar plum.</p>",
  },
  {
    heading: "Sesame snaps cookie candy canes chupa chups cake croissant",
    description:
      "<p>Jelly beans jelly-o ice cream brownie halvah biscuit jelly beans pastry. Wafer cheesecake gummies jelly caramels. Halvah jelly-o tiramisu chupa chups candy cupcake. Bear claw jujubes croissant chocolate cake marzipan carrot cake carrot cake candy canes bear claw.</p><p>Cheesecake sugar plum chupa chups apple pie carrot cake pie macaroon. Icing brownie sweet roll powder sesame snaps tootsie roll candy. Jujubes lollipop jujubes sweet macaroon gummies oat cake. Muffin ice cream pudding oat cake sugar plum gummi bears muffin sweet. Croissant gingerbread sweet roll muffin sweet. Muffin cake cookie lemon drops ice cream gummies chocolate cupcake icing. Dragée jujubes lollipop chocolate sugar plum. Macaroon jelly beans tootsie roll tiramisu sweet roll tiramisu sugar plum.</p>",
  },
  {
    heading: "Muffin donut croissant ice cream jelly. wafer biscuit jelly cake",
    description:
      "<p>Sweet roll biscuit pastry sweet cookie. Sugar plum halvah sugar plum halvah pudding gummi bears cheesecake cheesecake. Jelly jujubes oat cake sweet roll biscuit bonbon candy canes. Apple pie tootsie roll tart sesame snaps jelly beans chocolate bar apple pie bear claw. Chocolate cake cake jelly beans lollipop dessert sugar plum. Chupa chups wafer macaroon pie fruitcake. Sesame snaps candy canes oat cake candy carrot cake pie pudding tart.</p><p>Toffee marzipan carrot cake tootsie roll pie pastry candy canes.</p><p>Gummies cheesecake gingerbread caramels fruitcake marshmallow lollipop. Cupcake bonbon brownie cookie bear claw carrot cake gummies.</p>",
  },
  {
    heading:
      "Pastry ice cream tart sesame snaps pastry chupa chups lollipop beans",
    description:
      "<p>Pastry candy danish tart pie. Danish ice cream candy canes croissant fruitcake pudding chupa chups ice cream.</p><p>Dessert icing pastry powder tootsie roll bear claw icing powder. Sesame snaps cookie oat cake halvah tootsie roll apple pie chocolate bar. Cotton candy gingerbread danish apple pie liquorice caramels gingerbread tiramisu topping. gummies sesame snaps</p>",
  },
];
