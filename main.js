let App = React.createClass({
  getInitialState() {
    return {
      player: 1,
      winningNumbers: [['123'],['159'],['147'],['213'],['258'],['321'],['369'],['357'],['417'],['456'],['519'],['537'],['546'],['528'],['639'],['654'],['741'],['789'],['753'],['879'],['852'],['987'],['951'],['963']],
      message: '',
      player1: [],
      player2: [],
    }
  },

  changePlayer() {
    let { player } = this.state;

    if (player===2) {
      this.setState({
        player: 1,
      })
    } else {
      this.setState({
        player: 2,
      })
    }
  },

  checkGameStatus(player11, player22) {
    let { winningNumbers, message, player1, player2 } = this.state;

    let player1String = player11.toString();
    let player2String = player22.toString();

    console.log('player1String: ',player1String);
    console.log('player2String: ',player2String);

    // console.log('winningNumbers[0]: ',winningNumbers[0]);
    // let testArray = winningNumbers[0];
    // console.log('typeof testArray: ',typeof(testArray));
    // let testString = testArray.toString();
    // let testString = testArray.toString();
    // let newString = '['+testString+']'
    // console.log('testString: ',testString);
    // let testRegex = new RegExp(newString,'g');
    // console.log('testRegex: ',testRegex);
    //
    // for (let i=0;i<1;i++) {
    //   if (player1String.match(testRegex)) {
    //     console.log('PASS')
    //   }
    // }



    winningNumbers.forEach((array) => {
      let newString = '['+array+']';
      let newRegex = new RegExp(newString, 'g')
      // console.log('Sanity: ',newRegex)
      if (player1String.match(newRegex).length>2) {
        console.log('Sanity3')
        this.setState({
          message: 'Player 1 Wins!',
        })
      } else if (player2String.match(newRegex).length>2) {
        console.log('Sanity4')
        this.setState({
          message: 'Player 2 Wins',
        })
      }
    })

  },

  addGamePiece(e){
    let { player, player1, player2 } = this.state;

    let tdNumber = e.target.id;
    tdNumber = parseInt(tdNumber);

    if (player===1) {
      e.target.innerHTML = 'X';
      player1 = player1.concat(tdNumber);

      this.setState({
        player1,
      }, this.changePlayer(),this.checkGameStatus(player1, player2))
    } else {
      e.target.innerHTML = 'O';
      player2 = player2.concat(tdNumber);

      this.setState({
        player2,
      }, this.changePlayer(),this.checkGameStatus(player1, player2))
    }
  },

  render() {
    let { player, message } = this.state;
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
          <div className='container'>
            <h3>Player {player}'s turn!</h3>
            <div>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='1' id='1'>1</button>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='2' id='2'>2</button>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='3' id='3'>3</button>
            </div>
            <div>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='4' id='4'>4</button>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='5' id='5'>5</button>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='6' id='6'>6</button>
            </div>
            <div>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='7' id='7'>7</button>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='8' id='8'>8</button>
              <button className='btn btn-default' onClick={this.addGamePiece} ref='9' id='9'>9</button>
            </div>
            {/* <button onClick={this.resetGame}>Reset</button> */}
            <h2>{message}</h2>
          </div>
      </div>
    )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
