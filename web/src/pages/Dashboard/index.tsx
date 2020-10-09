import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

// components
import Input from '../../components/Input';

// utils
import getValidationErrors from '../../utils/getValidationErrors';

// api
import api from '../../service/api';

// styles
import { Container, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

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

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [repos, setRepos] = useState<ResponseApi[]>([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepos(response.data);
    });
  }, [repos]);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          repository: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('repositories', {
          repo: data.repository,
        });

        setRepos([response.data, ...repos]);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(err));
        } else {
          formRef.current?.setErrors({
            repository: 'Erro ao pesquisar repositório',
          });
        }
      }
    },
    [repos],
  );

  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />

      <h1>Explore repositórios no Github.</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input placeholder="Digite aqui" name="repository" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repos.map(repository => (
          <Link to={`/repository/${repository.full_name}`} key={repository.id}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={25} />
          </Link>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
