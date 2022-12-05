import React from "react";
import { ILoginCard } from "./LoginCard";

const dummyOnChange = (e: React.FormEvent) => {
  e.preventDefault();
  alert("Form submitted");
};

const base: ILoginCard = {
  onSubmit: dummyOnChange,
};

export const mockLoginCardProps = {
  base,
};
