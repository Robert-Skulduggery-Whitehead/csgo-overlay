import React from "react";
import MatchBar from "../MatchBar/MatchBar";
import Players from "../Players/Players";
import PlayerOverview from "../PlayerOverview/PlayerOverview";
import Radar from "../Radar/Radar";
//import all

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHUD: false,
    };
  }

  componentDidMount() {
    this.props.socket.on("showHUD", () => {
      this.setState({ showHUD: true });
    });

    this.props.socket.on("hideHUD", () => {
      this.setState({ showHUD: false });
    });

    this.props.socket.on("gameStateData", (data) => {
      this.setState({
        data: data,
      });
    });
  }

  render() {
    if (this.state.showHUD) {
      return (
        <React.Fragment>
          <MatchBar
            map={this.state.data.map}
            bomb={this.state.data.bomb}
            phase_countdowns={this.state.data.phase_countdowns}
            round={this.state.data.round}
            left={this.state.data.left}
            right={this.state.data.right}
            series={this.state.data.series}
            games={this.state.data.games}
          />
          <Players
            allplayers={this.state.data.allplayers}
            left={this.state.data.left}
            right={this.state.data.right}
            map={this.state.data.map}
            bomb={this.state.data.bomb}
            round={this.state.data.round}
          />
          <PlayerOverview
            player={this.state.data.player}
            playerState={this.state.data.playerState}
            bomb={this.state.data.bomb}
          />
          <Radar
            allplayers={this.state.data.allplayers}
            map={this.state.data.map}
            bomb={this.state.data.bomb}
            player={this.state.data.player}
            grenades={this.state.data.grenades}
          />
        </React.Fragment>
      );
    } else {
      return <span>Yeet</span>;
    }
  }
}
