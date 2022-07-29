import React from "react";
import "./SeriesInfo.css";

export default class SeriesInfo extends React.Component {
  constructor(props) {
    //props: series, teams, round
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.round.phase === "freezetime") {
      return (
        <div class={"seriesInfo seriesInfo" + this.props.series.bestOf}>
          {Object.keys(this.props.games).map((gameId) => {
            if (parseInt(gameId.substring(4, 5)) <= this.props.series.bestOf) {
              return (
                <div class="seriesMapInfo">
                  <div class="seriesMapInfoTop">
                    {this.props.games[gameId].map}{" "}
                    {this.props.games[gameId].winner !== "current" &&
                      this.props.games[gameId].winner !== "tbp" && (
                        <span>
                          <img
                            class="seriesMapInfoImage"
                            src={"./teamImages/" + this.props.left.image}
                            alt=""
                          ></img>
                          {this.props.left.name ===
                            this.props.games[gameId].winner && (
                            <span>
                              {this.props.games[gameId].winnerScore}-
                              {this.props.games[gameId].loserScore}
                            </span>
                          )}
                          {this.props.right.name ===
                            this.props.games[gameId].winner && (
                            <span>
                              {this.props.games[gameId].loserScore}-
                              {this.props.games[gameId].winnerScore}
                            </span>
                          )}
                          <img
                            class="seriesMapInfoImage"
                            src={"./teamImages/" + this.props.right.image}
                            alt=""
                          ></img>
                        </span>
                      )}
                    {this.props.games[gameId].winner === "current" && (
                      <span class="seriesMapInfoCurrent">Current</span>
                    )}
                  </div>
                  <div class="seriesMapInfoBottom">
                    {this.props.games[gameId].picked !== "decider" && (
                      <span>
                        <span class="seriesMapInfoPickedBy">PICKED BY </span>
                        {this.props.games[gameId].picked}
                      </span>
                    )}
                    {this.props.games[gameId].picked === "decider" && (
                      <span>Decider Map</span>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
