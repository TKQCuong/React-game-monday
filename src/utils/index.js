
export const decideOutcome = (pChoice, cChoice) => {
  if (pChoice === cChoice) return "TIE";
  else if (pChoice === "rock")
    return cChoice === "scissors" ? "YOU WIN !!" : "Oops! You Loss";
  else if (pChoice === "scissors")
    return cChoice === "paper" ? "YOU WIN !!" : "Oops! You Loss";
  else if (pChoice === "paper")
    return cChoice === "rock" ? "YOU WIN !!" : "Oops! You Loss";
};

export const randomComputerChoice = choices => {
  let listOfChoice = Object.keys(choices); //return from object to array
  let computerChoice = Math.floor(
    Math.random(listOfChoice.length) * listOfChoice.length
  );

  return listOfChoice[computerChoice];
  // console.log(choices[listOfChoice[computerChoice]])
};

export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "https://media.istockphoto.com/photos/bomb-character-holding-scissors-picture-id959062772?k=6&m=959062772&s=612x612&w=0&h=TkvSHnNNYfeaJM_GWEqGQ1dFoDGg45Nfwl42NEOBU2E="
  },
  paper: {
    name: "paper",
    url: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/uh59Wh0/news-paper-line-drawing-illustration-animation-with-transparent-background_sgzhfwwbg_thumbnail-full06.png"
  },
  rock: {
    name: "rock",
    url:
      "https://cdn3.successories.com/products/89/896144/zoom_double_737732.jpg"
  }
};
