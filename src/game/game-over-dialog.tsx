import React, {FunctionComponent} from 'react';

import {Duration} from '../score-board/duration';

interface Props {
  show: boolean;
  onRestart: () => void;
  score: number;
  startTime: number;
}

export const GameOverDialog: FunctionComponent<Props> = ({show, onRestart, score, startTime}) => (
  <div className={`modal-wrapper${show ? ' show' : ''}`}>
    <div className="modal">
      <header>
        <h1>Done</h1>
      </header>
      <section>
        Your score is {score}
        <br />
        Your time is <Duration startTime={startTime} endTime={Date.now()} />
      </section>
      <footer>
        <menu>
          <button onClick={onRestart}>Restart</button>
        </menu>
      </footer>
    </div>
  </div>
);
