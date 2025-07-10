const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Use the PORT environment variable provided by Render
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory (UI5 build output) or webapp for dev
const staticPath = process.env.NODE_ENV === "production" ? "dist" : "webapp";
app.use(express.static(path.join(__dirname, staticPath)));

// Proxy for Northwind OData service (same as in ui5.yaml)
app.use(
	"/northwind",
	createProxyMiddleware({
		target: "https://services.odata.org/v2/northwind/northwind.svc/",
		changeOrigin: true,
		pathRewrite: {
			"^/northwind": "",
		},
	})
);

// Handle UI5 resources - don't serve index.html for resource requests
app.get("/resources/*", (req, res) => {
	// Let these requests fail naturally or be handled by CDN
	res.status(404).send("Resource not found");
});

// Handle client-side routing - serve index.html for any other route
app.get("*", (req, res) => {
	// Don't serve index.html for resource requests
	if (
		req.path.includes("/resources/") ||
		req.path.includes(".js") ||
		req.path.includes(".css") ||
		req.path.includes(".xml") ||
		req.path.includes(".json")
	) {
		return res.status(404).send("Not found");
	}

	const staticPath = process.env.NODE_ENV === "production" ? "dist" : "webapp";
	res.sendFile(path.join(__dirname, staticPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`UI5 app is running on port ${PORT}`);
	console.log(`Serving from: ${staticPath}`);
});
