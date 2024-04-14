import { social } from "../const/business";

export const openWhatsappMessageLink = (message: string = "Hola") => {
  const encodedMessage = encodeURIComponent(message);
  const url = social.whatsapp.url;
  const whatsappLink = url + `&text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
};
