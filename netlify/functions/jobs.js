import https from "https";

export async function handler() {
  return new Promise((resolve) => {
    https.get(
      "https://backend.econjobmarket.org/data/zz_public/json/Ads",
      (res) => {
        let body = "";

        res.on("data", chunk => {
          body += chunk;
        });

        res.on("end", () => {
          resolve({
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            },
            body: body
          });
        });
      }
    ).on("error", (err) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch jobs" })
      });
    });
  });
}
