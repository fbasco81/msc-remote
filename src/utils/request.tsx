import { ICheckButtonProps } from "../types/ICheckButtonProps";

export function buildRequestOptions(
  props: ICheckButtonProps,
  time: string
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: props.username,
      to: props.to,
      cc: props.cc,
      swType: props.type,
      name: props.fullName,
      time: time,
    }),
  };
  return requestOptions;
}
