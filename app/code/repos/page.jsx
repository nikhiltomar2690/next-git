import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
  const res = await fetch(
    "https://api.github.com/users/nikhiltomar2690/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const repos = await res.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <ul className="repos-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.stargazers_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
