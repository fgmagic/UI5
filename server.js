const express = require("express");
const path = require("path");
const app = express();

// Use the PORT environment variable provided by Render
const PORT = process.env.PORT || 3000;

// Serve static files from the webapp directory (or your build output directory)
app.use(express.static(path.join(__dirname, "webapp")));

// Handle client-side routing - serve index.html for any route
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "webapp", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is running on port ${PORT}`);
});
