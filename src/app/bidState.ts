export type Bid = {
  id: string;
  amount: number | "?";
  user: string;
  roundId: string;
};

let bids: Bid[];
let biddingFinished: boolean;
const numPlayers = 5;

function init() {
  bids = [];
}

export function addBid(bid: Bid) {
  bids.push(bid);
  if (bids.length === numPlayers) {
    biddingFinished = true;
  }
  console.log("adding bid", bid);
}

export function getBids() {
  if (biddingFinished) {
    return bids;
  }

  return bids.map((bid) => {
    return {
      ...bid,
      amount: "?",
    } as Bid;
  });
}

init();
