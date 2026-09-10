import{a as c,j as s}from"./framer-Bq-bTNO0.js";
import{u as p}from"./useScrollReveal-BvaQ2eR3.js";
import{D as h,A as n,S as j}from"./index-zd-GV6LP.js";
import{B as v}from"./Button-Co4wHrbZ.js";
import"./vendor-CDnZY78L.js";

const shlok = "॥ श्री गणेशाय नमः ॥";
const title = "श्री विघ्नहर्ता मित्र मंडळ";
const subtitleLine1 = "गणेशोत्सवाच्या मंगलमय सोहळ्यात";
const subtitleLine2 = "आपले हार्दिक स्वागत";

const mandalCards = [
  { id: "card-1", image: "./assets/mandal-1.jpg", year: "स्थापना : 2009" },
  { id: "card-2", image: "./assets/mandal-2.jpg", year: "स्थापना : 2009" },
  { id: "card-3", image: "./assets/mandal-3.jpg", year: "स्थापना : 2009" }
];

function useSlider(total) {
  const [current, setCurrent] = c.useState(0);
  const prev = c.useMemo(() => (total ? (current - 1 + total) % total : 0), [current, total]);
  const next = c.useMemo(() => (total ? (current + 1) % total : 0), [current, total]);
  
  const showPrevious = c.useCallback(() => setCurrent(e => (total ? (e - 1 + total) % total : 0)), [total]);
  const showNext = c.useCallback(() => setCurrent(e => (total ? (e + 1) % total : 0)), [total]);
  
  const getCardClass = c.useCallback(idx => {
    if (idx === current) return "active";
    if (idx === prev) return "prev";
    if (idx === next) return "next";
    return "hidden";
  }, [current, prev, next]);

  return { current, getCardClass, showNext, showPrevious };
}

function useSwipe(onNext, onPrev, minDistance = 50) {
  const touchStart = c.useRef({ x: 0, y: 0 });
  const isSwiping = c.useRef(false);

  const onTouchStart = c.useCallback(e => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    isSwiping.current = true;
  }, []);

  const onTouchMove = c.useCallback(e => {
    if (!isSwiping.current) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - touchStart.current.x;
    const diffY = touch.clientY - touchStart.current.y;
    if (Math.abs(diffY) > Math.abs(diffX)) isSwiping.current = false;
  }, []);

  const onTouchEnd = c.useCallback(e => {
    if (!isSwiping.current) return;
    const diffX = e.changedTouches[0].clientX - touchStart.current.x;
    if (Math.abs(diffX) >= minDistance) {
      diffX < 0 ? onNext() : onPrev();
    }
    isSwiping.current = false;
  }, [onNext, onPrev, minDistance]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}

function FamilySection() {
  const { current, getCardClass, showNext, showPrevious } = useSlider(mandalCards.length);
  const swipeHandlers = useSwipe(showNext, showPrevious);
  const revealRef = p();

  return s.jsxs("section", {
    className: "mandal-showcase-section scroll-reveal",
    ref: revealRef,
    children: [
      /* Header Text */
      s.jsxs("div", {
        className: "mandal-header scroll-reveal-child",
        children: [
          s.jsx("p", { className: "mandal-shlok", children: shlok }),
          s.jsx("h2", { className: "mandal-title", children: title }),
          s.jsxs("p", { className: "mandal-subtitle", children: [subtitleLine1, s.jsx("br", {}), subtitleLine2] })
        ]
      }),

      /* 3D Photo Carousel Stack */
      s.jsxs("div", {
        className: "mandal-carousel-wrapper scroll-reveal-child",
        children: [
          s.jsx("div", {
            className: "mandal-card-stack",
            ...swipeHandlers,
            children: mandalCards.map((card, idx) => {
              const cardStatus = getCardClass(idx);
              const cardClasses = `mandal-card-item ${cardStatus}`;
              return s.jsxs("div", {
                className: cardClasses,
                onClick: () => {
                  if (cardStatus === "prev") showPrevious();
                  if (cardStatus === "next") showNext();
                },
                children: [
                  s.jsx("img", { src: card.image, alt: "Mandal Showcase", className: "mandal-card-img" }),
                  s.jsx("div", { className: "card-year-badge", children: card.year })
                ]
              }, card.id);
            })
          }),

          /* Navigation Controls (< > only) */
          s.jsxs("div", {
            className: "mandal-nav-controls",
            children: [
              s.jsx(v, { className: "mandal-nav-btn prev", onClick: showPrevious, children: "❮" }),
              s.jsx(v, { className: "mandal-nav-btn next", onClick: showNext, children: "❯" })
            ]
          })
        ]
      })
    ]
  });
}

export { FamilySection as default };
