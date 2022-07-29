import React from "react";
import "./GameInfo.css";

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="gameInfo">
        <div class={"seriesWinsLeft seriesLength" + this.props.series.bestOf}>
          {Object.keys(this.props.games).map((gameNo) => {
            if (this.props.games[gameNo].winner === this.props.left.name) {
              return (
                <div
                  key={gameNo}
                  class={"seriesDot " + this.props.left.side + "Dot"}
                ></div>
              );
            } else {
              if (
                parseInt(gameNo.substring(4, 5)) <=
                Math.ceil(this.props.series.bestOf / 2)
              ) {
                return <div key={gameNo} class="seriesDot"></div>;
              }
            }
          })}
        </div>
        <div class="gameInfoRounds">
          ROUND {this.props.round + 1}/{this.props.totalRounds}
        </div>
        <div></div>
        <div class="gameInfoSeriesLength">
          BEST OF {this.props.series.bestOf}
        </div>
        <div class={"seriesWinsRight seriesLength" + this.props.series.bestOf}>
          {Object.keys(this.props.games).map((gameNo) => {
            if (this.props.games[gameNo].winner === this.props.right.name) {
              return (
                <div
                  key={gameNo}
                  class={"seriesDot " + this.props.right.side + "Dot"}
                ></div>
              );
            } else {
              if (
                parseInt(gameNo.substring(4, 5)) <=
                Math.ceil(this.props.series.bestOf / 2)
              ) {
                return <div key={gameNo} class="seriesDot"></div>;
              }
            }
          })}
        </div>
      </div>
    );
  }
}
