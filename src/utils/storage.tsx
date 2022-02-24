import { ICheckInCheckout } from "../types/ICheckInCheckout";
import { INotify } from "../types/INotify";
import { IUser } from "../types/IUser";

const checkInkey = "checkin-checkout";
const userKey = "user";
const notifyKey = "notify";

export const getCheckInCheckoutData = () => {
  let checkInCheckout: ICheckInCheckout = {};

  if (localStorage.getItem(checkInkey)) {
    checkInCheckout = JSON.parse(
      localStorage.getItem(checkInkey) as string
    );
  }
  return checkInCheckout;
};

export const setCheckInCheckOutData = (data: ICheckInCheckout) => {
  localStorage.setItem(checkInkey, JSON.stringify(data));
}

export const getUserData = () => {
  let user: IUser = {
    department: "",
    email: "",
    name: "",
    surname: "",
  };
  if (localStorage.getItem(userKey)) {
    user = JSON.parse(localStorage.getItem(userKey) as string);
  }
  return user;
};

export const getNotifyData = () => {
  let notify: INotify = {
    bcc: "",
    cc: "",
    to: "",
  };
  if (localStorage.getItem(notifyKey)) {
    notify = JSON.parse(localStorage.getItem(notifyKey) as string);
  }
  return notify;
};
