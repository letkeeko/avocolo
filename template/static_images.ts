export const imagesSquare = [
  "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsfHx8fHx8MTY1MzM2MDk0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  "https://images.unsplash.com/photo-1535930749574-1399327ce78f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsfHx8fHx8MTY1MzM2MDkwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsfHx8fHx8MTY1MzM2MTA0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  "https://images.unsplash.com/photo-1542880941-1abfea46bba6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsfHx8fHx8MTY1MzM2MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsfHx8fHx8MTY1MzM2MTEwMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
];

export const imagesLandscape = [
  "https://images.unsplash.com/photo-1611273651216-29b4f282d36b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=568&ixid=MnwxfDB8MXxyYW5kb218MHx8YXJ0fHx8fHx8MTY1MzM2MTE4NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  "https://images.unsplash.com/photo-1548136480-4ad259749c46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=568&ixid=MnwxfDB8MXxyYW5kb218MHx8YXJ0fHx8fHx8MTY1MzM2MTIwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  "https://images.unsplash.com/photo-1483736762161-1d107f3c78e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=568&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXx8fHx8fDE2NTMzNjEyNDI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=568&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXx8fHx8fDE2NTMzNjEyNjk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=568&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXx8fHx8fDE2NTMzNjEyOTQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
];

export const getInitialImage = (val?: string) => {
  const randomNum = Math.floor(Math.random() * 5);

  console.log(val === "square");
  if (val === "square") return imagesSquare[randomNum];

  return imagesLandscape[randomNum];
};
