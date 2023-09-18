import { getBids, Bid } from "./bidState";

const getTickIcon = (bid: Bid) => {
  // when there are number players amound of bids then add green ticket if winner.
  if (typeof bid.amount === "undefined") {
    return (
      <svg
        className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  return null;
};

export default function BidTable() {
  const bids = getBids();
  return (
    <div className="flex flex-col content-center justify-center mt-8">
      <h3 className="text-xl">Bids for Round</h3>
      <ul>
        {bids.map((bid) => (
          <li key={bid.id} className="flex items-center">
            {getTickIcon(bid)}
            {bid.user} {bid.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
