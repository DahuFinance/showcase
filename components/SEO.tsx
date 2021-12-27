import { FAQPageJsonLd } from "next-seo";
import {faq} from "./sections/FAQ";

export default function SEO() {

  const faqSeo = faq.map((item) => ({
    questionName: item.title,
    acceptedAnswerText: item.content
  }))

  return (
    <>
      <FAQPageJsonLd
        mainEntity={faqSeo}
      />
    </>
  )
}