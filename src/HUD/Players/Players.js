import React from "react";
import "./Players.css";
import EconomyBar from "./EconomyBar/EconomyBar";
import PlayerAlive from "./PlayerAlive/PlayerAlive";
import PlayerDead from "./PlayerDead/PlayerDead";
import PlayerNumber from "./PlayerNumber/PlayerNumber";
import UtilBar from "./UtilBar/UtilBar";
//import all

export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <UtilBar
          allplayers={this.props.allplayers}
          team={this.props.sides.left}
          side="Left"
          round={this.props.round}
        ></UtilBar>
        <EconomyBar
          allplayers={this.props.allplayers}
          team={this.props.sides.left}
          side="Left"
          map={this.props.map}
          round={this.props.round}
        ></EconomyBar>
        <div class="allPlayersContainer allPlayersContainerLeft">
          {Object.keys(this.props.allplayers).map((playerID) => {
            if (
              this.props.allplayers[playerID].team ===
              this.props.sides.left.toUpperCase()
            ) {
              if (this.props.allplayers[playerID].state.health !== 0) {
                return (
                  <PlayerAlive
                    key={playerID}
                    team={this.props.sides.left}
                    side={"Left"}
                    player={this.props.allplayers[playerID]}
                    teamLogo={this.props.teams.left.img}
                    bomb={this.props.bomb}
                    playerID={playerID}
                  ></PlayerAlive>
                );
              } else {
                return (
                  <PlayerDead
                    key={playerID}
                    team={this.props.sides.left}
                    side={"Left"}
                    player={this.props.allplayers[playerID]}
                    teamLogo={this.props.teams.left.img}
                  ></PlayerDead>
                );
              }
            }
          })}
        </div>
        <div class="allPlayersNumbersContainer allPlayersNumbersContainerLeft">
          {Object.keys(this.props.allplayers).map((playerID) => {
            if (
              this.props.allplayers[playerID].team ===
              this.props.sides.left.toUpperCase()
            ) {
              return (
                <PlayerNumber
                  number={this.props.allplayers[playerID].observer_slot}
                  side="Left"
                ></PlayerNumber>
              );
            }
          })}
        </div>
        <UtilBar
          allplayers={this.props.allplayers}
          team={this.props.sides.right}
          side="Right"
          round={this.props.round}
        ></UtilBar>
        <EconomyBar
          allplayers={this.props.allplayers}
          team={this.props.sides.right}
          side="Right"
          map={this.props.map}
          round={this.props.round}
        ></EconomyBar>
        <div class="allPlayersContainer allPlayersContainerRight">
          {Object.keys(this.props.allplayers).map((playerID) => {
            if (
              this.props.allplayers[playerID].team ===
              this.props.sides.right.toUpperCase()
            ) {
              if (this.props.allplayers[playerID].state.health !== 0) {
                return (
                  <PlayerAlive
                    key={playerID}
                    team={this.props.sides.right}
                    side={"Right"}
                    player={this.props.allplayers[playerID]}
                    teamLogo={this.props.teams.right.img}
                    bomb={this.props.bomb}
                    playerID={playerID}
                  ></PlayerAlive>
                );
              } else {
                return (
                  <PlayerDead
                    key={playerID}
                    team={this.props.sides.right}
                    side={"Right"}
                    player={this.props.allplayers[playerID]}
                    teamLogo={this.props.teams.right.img}
                  ></PlayerDead>
                );
              }
            }
          })}
        </div>
        <div class="allPlayersNumbersContainer allPlayersNumbersContainerRight">
          {Object.keys(this.props.allplayers).map((playerID) => {
            if (
              this.props.allplayers[playerID].team ===
              this.props.sides.right.toUpperCase()
            ) {
              return (
                <PlayerNumber
                  number={this.props.allplayers[playerID].observer_slot}
                  side="Right"
                ></PlayerNumber>
              );
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}
