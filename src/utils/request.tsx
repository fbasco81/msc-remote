import { CheckButtonProps } from "../components/ButtonProps";

export function buildRequestOptions(
  props: CheckButtonProps,
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
