import fs from "node:fs/promises";

class Fileservice {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async readFile() {
    const data = await fs.readFile(this.filePath, "utf-8");
    const parsedData = await JSON.parse(data);
    return parsedData.items;
  }
}

const dragonBallService = new Fileservice("./database/dragonBall.json");

dragonBallService
  .readFile()
  .then((items) => console.log(items))
  .catch((error) => console.error(error));
