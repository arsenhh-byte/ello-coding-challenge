const { execSync } = require("child_process");

async function addDeployKey() {
  try {
    const { Octokit } = await import("@octokit/rest");
    const fetch = (await import("node-fetch")).default;

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
      request: { fetch },
    });

    const repo = process.env.arsenhh-byte/ello-coding-challenge; // e.g., 'username/repo'
    const [owner, repoName] = repo.split('/');
    const { data: { id: repoId } } = await octokit.repos.get({ owner, repo: repoName });
    
    console.log(`Repository ID: ${repoId}`);
    
    // Run Netlify command
    execSync('netlify init', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error adding deploy key: ${error.message}`);
  }
}

addDeployKey();
