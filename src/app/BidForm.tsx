import { revalidatePath } from "next/cache";
import { addBid } from "./bidState";

export default function BidForm() {
  async function submit(formData: FormData) {
    "use server";
    const user = formData.get("user")! as string;
    const amount = formData.get("amount")! as string;
    addBid({ user, amount: parseInt(amount), id: "1", roundId: "1" });
    revalidatePath("/");
  }

  return (
    <form
      action={submit}
      className="flex flex-col justify-center gap-3 mt-8 text-white max-w-96 md:max-w-md"
    >
      <label>
        <input
          className="w-full p-6 placeholder-gray-400 rounded-xl bg-slate-800 focus-visible:outline-none focus-visible:outline-orange-500"
          name="user"
          placeholder="Your Name"
          required
        />
      </label>
      <label className="rounded-xl focus:outline-orange-500">
        <input
          className="w-full p-6 placeholder-gray-400 rounded-xl bg-slate-800 focus-visible:outline-none focus-visible:outline-orange-500"
          name="amount"
          placeholder="Enter a bid"
          required
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </label>
      <button
        className="p-6 mt-2 text-white rounded-xl bg-slate-800 hover:opacity-80 focus-visible:outline-none focus-visible:outline-orange-500"
        type="submit"
      >
        Submit Bid
      </button>
    </form>
  );
}
