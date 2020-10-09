import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

// api
import api from '../../service/api';

// styles
import { Container, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface Response {
  repository: string;
}

interface ResponseApi {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: string;
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
  const { params } = useRouteMatch<Response>();
  const [repo, setRepo] = useState<ResponseApi>();
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
    <Container>
      <header>
        <img src={logoImg} alt="" />

        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </header>
      <RepositoryInfo>
        <header>
          <img src={repo?.owner.avatar_url} alt="" />
          <div>
            <h1>{repo?.full_name}</h1>
            <p>{repo?.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repo?.stargazers_count}</strong>
            <p>Starts</p>
          </li>
          <li>
            <strong>{repo?.forks_count}</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>{repo?.open_issues_count}</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={25} />
          </a>
        ))}
      </Issues>
    </Container>
  );
};

export default Repository;
