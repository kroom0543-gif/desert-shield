import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import fs from "fs";

dotenv.config();

// Load Firebase config from file
const firebaseConfig = JSON.parse(fs.readFileSync(path.join(process.cwd(), "firebase-applet-config.json"), "utf8"));
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Lead submission endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = req.body;
      console.log("Saving lead to Firestore:", leadData);
      
      const docRef = await addDoc(collection(db, "leads"), {
        ...leadData,
        createdAt: serverTimestamp(),
        status: "pending"
      });

      res.status(201).json({ 
        message: "Lead successfully submitted",
        id: docRef.id 
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      res.status(500).json({ error: "Failed to submit lead" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
