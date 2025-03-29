import { Resource } from "react-admin";
import { faq } from "./faq";
import { faqLocale } from "./faq-locale";

export const FaqResource = [<Resource {...faq} key="faq" />];
export const FaqLocaleResource = [<Resource {...faqLocale} key="faq-locale" />];
