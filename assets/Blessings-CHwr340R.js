import{a as c,j as s}from"./framer-Bq-bTNO0.js";
import{u as p}from"./useScrollReveal-BvaQ2eR3.js";
import{D as h,A as n,S as j}from"./index-zd-GV6LP.js";
import"./vendor-CDnZY78L.js";

const shlok = "श्री गणेशाय नमः";
const title = "श्री विघ्नहर्ता मित्र मंडळ";
const sub1 = "गणपती बाप्पा मोरया!";
const sub2 = "भक्ती, श्रद्धा आणि एकतेचा उत्सव";

function PersonalizedInviteSection() {
  const [guestName, setGuestName] = c.useState("");
  const revealRef = p();

  const handleWhatsAppSend = () => {
    const nameStr = guestName.trim() ? ` *${guestName.trim()}*` : "";
    const msg = `*॥ श्री गणेशाय नमः ॥*\n*श्री विघ्नहर्ता मित्र मंडळ*\n\n${sub1}\n${sub2}\n\nआदरणीय${nameStr},\n\nगणरायाच्या आगमनाने आपले घर आणि मन प्रसन्नतेने भरून जावो. आमच्या गणेशोत्सवाच्या मंगल सोहळ्यात सहभागी होण्यासाठी आपणास व आपल्या परिवारास सस्नेह निमंत्रण.\n\n*पत्ता:* उत्तम सोसायटी, सासवड, पुणे – ४१२३०१\n\nआपल्या उपस्थितीने आमचा उत्सव अधिक आनंददायी होईल.`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return s.jsxs("section", {
    className: "personalized-invite-section scroll-reveal",
    ref: revealRef,
    children: [
      /* Top Ganesha Header */
      s.jsxs("div", {
        className: "invite-header scroll-reveal-child",
        children: [
          s.jsx("img", { src: "./assets/murti-DogDNfqS.webp", alt: "Lord Ganesha", className: "invite-murti-img" }),
          s.jsx("p", { className: "invite-shlok", children: shlok }),
          s.jsx("h2", { className: "invite-title", children: title }),
          s.jsx("p", { className: "invite-sub-bold", children: sub1 }),
          s.jsx("p", { className: "invite-sub-light", children: sub2 })
        ]
      }),

      /* Box 1: Personalized WhatsApp Invite Box */
      s.jsxs("div", {
        className: "invite-card-box scroll-reveal-child",
        children: [
          s.jsxs("div", {
            className: "card-title-row",
            children: [
              s.jsx("span", { className: "link-icon", children: "🔗" }),
              s.jsx("h3", { children: "मित्रांना वैयक्तिक निमंत्रण पाठवा" })
            ]
          }),
          s.jsx("p", { className: "card-sub-label", children: "(Personalized Invite)" }),
          s.jsx("p", { className: "card-desc", children: "पाहुण्यांचे नाव टाकून थेट त्यांच्या नावासह WhatsApp वर सस्नेह निमंत्रण पाठवा:" }),
          s.jsx("input", {
            type: "text",
            className: "guest-name-input",
            placeholder: "पाहुण्यांचे नाव (उदा. श्री. राहुल शिंदे)",
            value: guestName,
            onChange: e => setGuestName(e.target.value)
          }),
          s.jsxs("button", {
            className: "whatsapp-send-btn",
            onClick: handleWhatsAppSend,
            children: [
              s.jsx("span", { className: "plane-icon", children: "✈️" }),
              " WhatsApp वर पाठवा"
            ]
          })
        ]
      }),

      /* Box 2: Contact Number Box */
      s.jsxs("div", {
        className: "info-card-box contact-box scroll-reveal-child",
        children: [
          s.jsx("p", { className: "info-label", children: "संपर्क क्रमांक" }),
          s.jsx("a", { href: "tel:+918530910486", className: "info-value phone-link", children: "+91 85309 10486" })
        ]
      }),

      /* Box 3: Address Box */
      s.jsxs("div", {
        className: "info-card-box address-box scroll-reveal-child",
        children: [
          s.jsxs("div", {
            className: "info-text-side",
            children: [
              s.jsx("p", { className: "info-label", children: "आपला पत्ता" }),
              s.jsx("p", { className: "info-value", children: "उत्तम सोसायटी, सासवड, पुणे – ४१२३०१" })
            ]
          }),
          
        ]
      }),

      /* Box 4: Instagram Box */
      s.jsxs("div", {
        className: "info-card-box instagram-box scroll-reveal-child",
        children: [
          s.jsx("p", { className: "info-label", children: "Instagram" }),
          s.jsx("a", {
            href: "https://www.instagram.com/pixelmitra_333/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "info-value insta-link",
            children: "आमचे Instagram पेज →"
          })
        ]
      })
    ]
  });
}

export { PersonalizedInviteSection as default };
