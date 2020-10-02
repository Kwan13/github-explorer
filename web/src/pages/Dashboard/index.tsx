import React, { useEffect, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

// api
import api from '../../services/api';

// styles
import { Title, Form, Repository } from './styles';
import logoImg from '../../assets/logo.svg';

interface Repositories {
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
    avatar_url?: string;
  };
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repositories[]>([]);
  const [error, setError] = useState(false);
  const [field, setField] = useState('');

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepos(response.data);
    });
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setField('');

    try {
      if (!field) {
        setError(true);
        alert('Campo obrigatório.');
        return;
      }
      setError(false);

      const response = await api.post('repositories', {
        name: field,
      });
      setRepos([response.data, ...repos]);
    } catch (err) {
      alert('Não foi possivel localizar o repositório informado.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form isErrored={error} onSubmit={handleSubmit}>
        <input
          placeholder="Digite aqui"
          value={field}
          onChange={e => setField(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        {repos.map(repository => (
          <Link to={`/repository/${repository.name}`} key={repository.id}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight color="#C9C9D4" size={20} />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
