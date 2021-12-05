import { ReactNode } from 'react';
import '../styles/question.scss';


type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};


export function Question({content,author,children,} : QuestionsProps){
  return(
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className={`bg-dark h-20 w-20`}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
};
