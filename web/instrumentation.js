// Record the real server runtime for operator security verification.
// This goes to server logs only; no request or environment values are logged.
export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.info(JSON.stringify({
      event: "corecats.node-runtime",
      node: process.version,
    }));
  }
}
