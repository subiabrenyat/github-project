class SimpleGitHubProject {
  constructor() {}
  
  addFile(file: string) {
    console.log(`File added to ` + file);
  }
}

const project = new SimpleGitHubProject();
project.addFile("file.txt");
