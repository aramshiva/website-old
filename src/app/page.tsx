import Index from "@/markdown/index.mdx";
import Script from "next/script";
export default function Page() {
  return (
    <>
      <Index />
      <div id="elr">
        <Script
          type="text/javascript"
          src="https://w.elr.sh/onionring-variables.js"
        />
        <Script
          type="text/javascript"
          src="https://w.elr.sh/onionring-widget.js"
        />
      </div>
    </>
  );
}
