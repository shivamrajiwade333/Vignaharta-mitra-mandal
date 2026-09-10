import{j as s}from"./framer-Bq-bTNO0.js";
import{t as l}from"./timeline-CU8N5Gin.js";
import{u as o}from"./useScrollReveal-BvaQ2eR3.js";
import{D as i,S as m,A as t}from"./index-zd-GV6LP.js";
import"./vendor-CDnZY78L.js";

function TimelineSection({onSelectEvent: c}){
  const {assets: a, events: r} = l;
  const revealRef = o();

  return s.jsxs("section", {
    className: "timeline-cards-section scroll-reveal",
    ref: revealRef,
    children: [
      s.jsxs("div", {
        className: "timeline-cards-header scroll-reveal-child",
        children: [
          s.jsx("p", { className: "timeline-shlok", children: l.shlok || "॥ श्री गणेशाय नमः ॥" }),
          s.jsx("h2", { className: "timeline-main-title", children: l.heading }),
          s.jsx("div", { className: "title-gold-bar" }),
          s.jsx("p", { className: "timeline-main-subtitle", children: l.subtitle })
        ]
      }),

      s.jsxs("div", {
        className: "timeline-list-wrapper scroll-reveal-child",
        children: [
          s.jsx("div", { className: "timeline-vertical-line" }),

          r.map((ev) => s.jsxs("div", {
            className: "timeline-card-row",
            onClick: () => c(ev),
            children: [
              s.jsx("div", {
                className: "timeline-node-circle",
                children: s.jsx("span", { children: ev.nodeNum })
              }),

              s.jsxs("div", {
                className: "timeline-schedule-card",
                children: [
                  s.jsx("div", { className: "card-orange-badge", children: ev.badge }),
                  s.jsx("div", { className: "card-top-arrow", children: "↗" }),
                  s.jsx("h3", { className: "card-event-title", children: ev.title }),
                  s.jsx("p", { className: "card-event-subtitle", children: ev.subtitle }),

                  s.jsxs("div", {
                    className: "card-details-row",
                    children: [
                      ev.date && ev.date !== "दररोज" ? s.jsxs("span", {
                        className: "detail-pill",
                        children: [s.jsx("span", { className: "icon", children: "🗓️" }), " ", ev.date]
                      }) : null,
                      ev.time ? s.jsxs("span", {
                        className: "detail-pill",
                        children: [s.jsx("span", { className: "icon", children: "🕒" }), " ", ev.time]
                      }) : null
                    ]
                  }),

                  s.jsxs("div", {
                    className: "card-action-link",
                    children: ["अधिक माहिती ", s.jsx("span", { className: "chevron", children: ">" })]
                  })
                ]
              })
            ]
          }, ev.id))
        ]
      })
    ]
  });
}

export { TimelineSection as default };
