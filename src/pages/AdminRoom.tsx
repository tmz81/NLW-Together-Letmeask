import { useParams } from "react-router-dom";
import logoImg from "../assets/img/logo.svg";
import { ButtonComponent } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { Question } from "../components/Question";
// import { useAuth } from '../hooks/useAuth';
// import { database } from '../services/firebase';
import { useRoom } from "../hooks/useRoom";

import { Container } from "../styles/room";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  return (
    <Container>
      <header>
        <div className="content">
          <img src={logoImg} alt="img" />
          <div>
            <RoomCode code={roomId} />
            <ButtonComponent isOutlined>Encerrar sala</ButtonComponent>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                    >
                      <img src="#" alt="Marcar pergunta como respondida" />
                    </button>
                  </>
                )}
              </Question>
            );
          })}
        </div>
      </main>
    </Container>
  );
}
