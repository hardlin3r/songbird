import React, { Component } from 'react';
import Header from '../header'
import Question from '../question'
import Options from '../options'
import Congratulations from '../congratulations'
import Description from '../description'
import NextButton from '../next-button'
import birdsData from '../../data/birds-data'
import './app.css'

let roundsList = [
  "Разминка",
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Морские птицы",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cloneSet(s) {
  let newSet = new Set();
  s.forEach(i => newSet.add(i));
  return newSet;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      round: 0,
      attempts: new Set(),
      correct: getRandomInt(1, birdsData[0].length),
      success: false,
      finish: false,
    }
    this.listClick = this.listClick.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.clickRestart = this.clickRestart.bind(this);
  }

  clickRestart(e) {
    this.setState(state => {
      return {
        score: 0,
        round: 0,
        attempts: new Set(),
        correct: getRandomInt(1, birdsData[0].length),
        success: false,
        finish: false,
      }
    })
  }

  clickNext(e) {
    e.preventDefault();
    if(this.state.success) {
      let nAttempts = this.state.attempts.size - 1;
      let newScore = this.state.score + 5 - nAttempts;
      let newRound = this.state.round + 1;
      console.log(newRound);
      if(newRound === 5) {
        console.log("FINISHED!!!")
        this.setState(state => {
          return {
            ...state,
            round: 0,
            finish: true
          };
        })
      } else {
        this.setState(state => {
          return {
            score: state.score + 6 - state.attempts.size,
            round: newRound,
            attempts: new Set(),
            correct: getRandomInt(1, birdsData[newRound].length),
            success: false,
            finish: false,
          };
        });
      }
    }
  }

  listClick(e) {
    let attempts = this.state.attempts;
    let id = parseInt(e.target.dataset.id);
    if(this.state.success) return;
    let newSet = cloneSet(attempts)
    newSet.add(id);
    if(id === this.state.correct) {
      // do if correct
      this.setState(state => {
        return {
          ...state,
          attempts: newSet,
          success: true,
        };
      });
    } else if(!attempts.has(id)){
      this.setState(state => {
        return {
          ...state,
          attempts: newSet,
        };
      })
    }
  }
  render() {
    let { attempts, round, score, correct, success, finish } = this.state;
    let d;
    attempts.forEach(a=>{d = a;});
    let l = roundsList.map(n => {return {name: n};});
    if(finish) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Header round={round} score={score} l={l} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Congratulations score={score} clickRestart={this.clickRestart} />
            </div>
          </div>
        </div>
      );
    }
    let answer = birdsData[round][correct-1];
    let options = birdsData[round];
    d = birdsData[round][d-1];
    l[round].active = true;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Header round={round} score={score} l={l} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <Question success={success} answer={answer} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Options
              options={options}
              clickCb={this.listClick}
              attempts={attempts}
              correct={correct}
              success={success}
            />
          </div>
          <div className="col-sm">
            <Description d={d} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm next-btn">
            <NextButton success={success} clickNext={this.clickNext} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
