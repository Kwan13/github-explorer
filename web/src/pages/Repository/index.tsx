import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

// api
import api from '../../services/api';

// styles
import { Header, Content, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner_id: string;
  owner: {
    id: string;
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repo, setRepo] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repositories/${params.repository}`).then(response => {
      setRepo(response.data);
    });

    api
      .get(`https://api.github.com/repos/${params.repository}/issues`)
      .then(response => {
        setIssues(response.data);
      });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <Content>
        <header>
          <img src={repo?.owner.avatar_url} alt="kawan" />
          <div>
            <strong>{repo?.name}</strong>
            <p>{repo?.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repo?.stargazers_count}</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>{repo?.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repo?.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </Content>

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight color="#C9C9D4" size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
