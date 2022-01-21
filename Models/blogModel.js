const e = require("express");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      default: Date.now(),
    },
    comments: [
      {
        comment: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
