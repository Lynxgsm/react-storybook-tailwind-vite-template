import { proxy } from "valtio";

export const states = proxy({
  input: {},
  selectedLink: "home",
});
