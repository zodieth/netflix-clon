import { CheckIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import useAuth from "../app/hooks/useAuth";
function Plans() {
  const { logout } = useAuth();

  return (
    <div>
      <header className="border-b border-white/10 bg-[#1414414]">
        <Link to={"/"}>
          <img
            src="https://rb.gy/ulxxee"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="tetx-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            <div className="planBox">standard</div>
            <div className="planBox">standard</div>
            <div className="planBox">standard</div>
          </div>
          {/* <Table /> */}
          <button>subscribe</button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
