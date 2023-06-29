console.log("sup webscraping started")
const PORT = 5000;
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

function Project(name, description, language, lastUpdate) {
  this.name = name;
  this.description = description;
  this.language = language;
  this.lastUpdate = lastUpdate;
}

async function getProjectArray() {
  try {
    const axiosResponse = await axios.request({
      method: "GET",
      url: "https://github.com/jjosegomez?tab=repositories",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      },
    });

    const $ = cheerio.load(axiosResponse.data);
    const projectList = [];

    $("#user-repositories-list > ul > li").each((index, element) => {
      const name = $(element).find("h3 > a").text().trim();
      const description = $(element)
        .find("div:nth-child(2) > p")
        .text()
        .trim();
      const language = $(element)
        .find("div.f6.color-fg-muted.mt-2 > span")
        .text()
        .trim();
      const lastUpdate = $(element)
        .find("div.f6.color-fg-muted.mt-2 > relative-time")
        .text()
        .trim();

      const project = new Project(name, description, language, lastUpdate);
      projectList.push(project);
    });

    return projectList;
  } catch (err) {
    throw new Error(err);
  }
}

app.get("/api", async (req, res) => {
  try {
    const projects = await getProjectArray();
    return res.status(200).json({
      projects: projects,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.toString(),
    });
  }
});

app.listen(PORT, () =>
  console.log(`The server is active and running on port ${PORT}`)
);
