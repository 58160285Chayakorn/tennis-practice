function TennisGame() {
  this.reset = () => {

  }

  this.echo = () => {
    return 'Love - Love'
  }


}

test('Test echo Love - Love when game start', () => {
  // Arrange
  let app = new TennisGame()
  app.reset()


  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Love - Love')


})
