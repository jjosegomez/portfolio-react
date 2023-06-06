console.log("sup webscraping started")


class Project {
    constructor(name, description, language, lastUpdate) {
        this.name = name;
        this.description = description;
        this.language = language;
        this.lastUpdate = lastUpdate;
    }
}

// importing cheerio and axios
const PORT = 5000
const express = require("express")
const cheerio = require("cheerio")
const axios = require("axios")

const app = express();

async function getProjectArray() {
    // downloading the target web page by performing an HTTP GET request in Axios
    
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://github.com/jjosegomez?tab=repositories",

        // By default, Axios will use the following User-Agent: axios <axios_version>
        // This is not what the User-Agent used by a browser looks like. So, anti-scraping technologies may detect and block your Node.js web scraper.
        // Set a valid User-Agent header in Axios by adding the following attribute to the object passed to request():
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    let projectList = []
    await axios("https://github.com/jjosegomez?tab=repositories").then((response) => {
        // parsing the HTML source of the target web page with Cheerio
        const $ = cheerio.load(response.data)

        //intialize the datastructure containing the information of the product.
        let count = 0
        repositoryList = $("#user-repositories-list > ul > li").each((index, element) => {
            const name = $(element).find("h3 > a").text().trim()
            const description = $(element).find("div:nth-child(2) > p").text().trim()
            const language = $(element).find("div.f6.color-fg-muted.mt-2 > span").text().trim()
            const lastUpdate = $(element).find("div.f6.color-fg-muted.mt-2 > relative-time").text().trim()
            project = new Project(name, description, language, lastUpdate)
            projectList.push(project)
            count++
        })
        console.log(count)
    })
    console.log(projectList)

    return projectList
}
// Note that you can use await only in functions marked with async. 
// This is why you have to embed your JavaScript web scraping logic in the async performScraping() function.

app.get("/api/projects", async (req, res) => {
    try {
      const projects = await getProjectArray();
      return res.status(200).json({
        projects: projects,
      });
    } catch (err) {
      return res.status(500).json({
        err: err.toString(),
      });
    }
  });
  
  app.listen(PORT, () =>
    console.log(`The server is active and running on port ${PORT}`)
  );