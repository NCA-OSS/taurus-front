import Button from "@components/common/button/Button";
import React from "react";

export interface ILoginCard {
  onSubmit: (_: React.FormEvent) => void;
}

const LoginCard: React.FC<ILoginCard> = ({ onSubmit }) => {
  return (
    <div className="p-5 rounded-lg bg-white max-w-md">
      <div className="mb-3">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="text-slate-500 text-sm">
          Start using <b>taurus</b> and do amazing things!
        </p>
      </div>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-gray-700">Username</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></input>
        </label>
        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></input>
        </label>
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginCard;
