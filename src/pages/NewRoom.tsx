import { Link } from 'react-router-dom';

import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';

import { Button } from '../components/Button';
import { useAuth} from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom(){
    const { user } = useAuth()


    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} />
                <strong>Toda pergunta tem uma resposta. </strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <p></p>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">Clique aqui!</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}