// import { Octokit } from "octokit"
// export async function fetchData() {
//     const octokit = new Octokit({
//         auth: process.env.TOKEN
//     });

//     try {
//         const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
//             owner: "octocat",
//             repo: "Spoon-Knife",
//         });

//         const titleAndAuthor = result.data.map(issue => issue)

//         console.log(titleAndAuthor)

//     } catch (error) {
//         console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
//     }
// }
