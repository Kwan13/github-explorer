import React, { useState } from 'react';
import { FiUsers, FiBook, FiStar } from 'react-icons/fi';
import api from '../../service/api';

// Styles
import './styles.css';
import logoImg from '../../assets/images/logo.png';

export default function Home() {

    const [gitUser, setGitUser] = useState('');
    const [profile, setProfile] = useState('');
    const [repositories, setRepositories] = useState([]);

    async function search(e) {
        e.preventDefault();

        try {
            const userData = await api.get(`https://api.github.com/users/${gitUser}`);
            setProfile(userData.data);
        } catch (erro) {
            alert('Usuário não encontrado.')
        }

        const userRepo = await api.get(`https://api.github.com/users/${gitUser}/repos`);

        setGitUser('')
        setRepositories(userRepo.data);
    }

    return (
        <div className="container">
            <header>
                <img src={logoImg} alt="Github" />
                <form onSubmit={search}>
                    <input
                        type="text"
                        placeholder="Github username"
                        value={gitUser}
                        onChange={e => setGitUser(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </header>

            <div className="profile-container">
                
                {
                    profile && (
                        <div className="profile-data">
                            <div className="data">
                                <a target="_blank" href={profile.html_url}>
                                    <img src={profile.avatar_url} />
                                </a>

                                <h1>{profile.name}</h1>
                                <h4>{profile.login}</h4>
                                <p>
                                    {profile.bio}
                                </p>

                                <ul>
                                    <li><FiUsers /><span>&nbsp;{profile.followers}&nbsp;</span>followers</li>
                                    <li><span>&nbsp;{profile.following}&nbsp;</span>following</li>
                                    {/* <li><FiStar /><span>&nbsp;{}</span></li> */}
                                </ul>
                            </div>

                            <div className="repos">
                                <span>Popular repositories</span>
                                <ul>
                                    {
                                        repositories.map(repository => (
                                            <li key={repository.id}>
                                                <FiBook />
                                                <a href={repository.html_url}>{repository.name}</a>
                                                <p>{repository.description}</p>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    );
}