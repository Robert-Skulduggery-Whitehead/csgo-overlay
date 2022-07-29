import React from "react";
import "./Team.css";

export default class Team extends React.Component {
  constructor(props) {
    //props: class, team, bomb, allplayers, map, team.side
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class={"team " + this.props.class}>
        <div class={"teamLogo " + this.props.class + "Logo"}>
          <img
            class="teamLogoImage"
            src={"./teamImages/" + this.props.team.image}
            alt=""
          ></img>
        </div>
        <div class="teamName">{this.props.team.name}</div>
        <div
          class={
            "teamScoreShadow " +
            this.props.class +
            "ScoreShadow" +
            this.props.team.side
          }
        >
          <div
            class={
              "teamScore " + this.props.class + "Score " + this.props.team.side
            }
          >
            {this.props.team.side === "ct" && (
              <div>{this.props.map.team_ct.score}</div>
            )}
            {this.props.team.side === "t" && (
              <div>{this.props.map.team_t.score}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
