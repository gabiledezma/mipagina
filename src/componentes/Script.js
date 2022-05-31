import React from "react";

export default function Script() {
  return (
    <section>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
    </section>
  );
}
