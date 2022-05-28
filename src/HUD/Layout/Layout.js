import React from "react";
import MatchBar from "../MatchBar/MatchBar";
import Players from "../Players/Players";
//import all

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHUD: false,
      data: {},
      killfeed: false,
      //sides
      sides: {
        left: "ct",
        right: "t",
      },
      //team info
      teams: {
        left: {
          name: "bravado",
          img: "bravado.png",
          wins: 1,
        },
        right: {
          name: "ekasi esports",
          img: "ekasi esports.png",
          wins: 1,
        },
      },
      //Series Info (Current map = gameXWinner: "live")
      series: {
        bestOf: 3,
        current: 3,
        games: {
          game1: {
            map: "mirage",
            picked: "bravado",
            winner: "bravado",
            winnerScore: 16,
            loserScore: 7,
          },
          game2: {
            map: "dust",
            picked: "ekasi esports",
            winner: "ekasi esports",
            winnerScore: 16,
            loserScore: 7,
          },
          game3: {
            map: "inferno",
            picked: "decider",
            winner: "",
            winnerScore: "",
            loserScore: "",
          },
        },
      },
    };
  }

  setSides(allplayers) {
    let keys = Object.keys(allplayers);
    let player = keys.find((key) => allplayers[key].observerslot === 1);
    if (allplayers[player].team === "CT") {
      this.setState({
        sides: {
          left: "ct",
          right: "t",
        },
      });
    } else {
      this.setState({
        sides: {
          left: "t",
          right: "ct",
        },
      });
    }
    //
  }

  swapTeams() {
    let tempRight = this.state.teams.left;
    let tempLeft = this.state.teams.right;
    this.setState({
      teams: {
        left: tempLeft,
        right: tempRight,
      },
    });
  }

  roundSwap(round) {
    if (round === 15 && this.state.map.round !== round) {
      this.swapTeams();
    }
    if (round === 30 && this.state.map.round !== round) {
      this.swapTeams();
    }
    if (round > 30) {
      if (round % 6 === 0 && round !== this.state.map.round) {
        this.swapTeams();
      }
    }
  }

  setSeriesInfo(seriesInfo) {
    this.setState({
      series: {
        bestOf: seriesInfo[0],
        games: seriesInfo[1],
      },
    });
    let tempTeams = this.state.teams;
    let tempCurrent = 1;
    for (let game in this.state.games) {
      if (this.state.games[game].winner === this.state.teams.left.name) {
        tempTeams.left.wins = tempTeams.left.wins + 1;
        tempCurrent++;
      } else if (
        this.state.games[game].winner === this.state.teams.right.name
      ) {
        tempTeams.right.wins = tempTeams.right.wins + 1;
        tempCurrent++;
      }
    }
    let tempSeries = this.state.series;
    tempSeries.current = tempCurrent;
    this.setState({
      teams: tempTeams,
      series: tempSeries,
    });
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

    this.props.socket.on("swapTeams", () => {
      this.swapTeams();
    });

    this.props.socket.on("getTeams", (teams) => {
      this.setState({
        teams: {
          left: teams[0],
          right: teams[1],
        },
      });
    });

    this.props.socket.on("getSeriesInfo", (seriesInfo) => {
      this.setSeriesInfo(seriesInfo);
    });

    this.props.socket.on("enableKillfeed", () => {
      this.setState({
        killfeed: true,
      });
    });

    this.props.socket.on("", () => {
      //
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
            sides={this.state.sides}
            teams={this.state.teams}
            series={this.state.series}
          />
          <Players
            allplayers={this.state.data.allplayers}
            teams={this.state.teams}
            map={this.state.data.map}
            sides={this.state.sides}
            bomb={this.state.data.bomb}
            round={this.state.data.round}
          />
        </React.Fragment>
      );
    } else {
      return <span>Yeet</span>;
    }
  }
}
