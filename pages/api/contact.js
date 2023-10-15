// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      !message.trim() == ""
    ) {
      res.status(422).json({
        message: "invalid input",
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.7ui4ayg.mongodb.net/contact`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "storing message failed" });
      return;
    }

    res
      .status(201)
      .json({ message: "successfully stored message", message: newMessage });
  }
}
