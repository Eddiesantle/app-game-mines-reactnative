/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import params from './src/params'

/* import Field from './src/components/Field' */
import MineField from './src/components/MineField'

import { createMinedBoards } from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoards(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (

        <View style={styles.conteiner}>
          <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
          <Text style={styles.sectionDescription}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

          {/* <Field/>
          <Field opened/>
          <Field opened nearMines={1}/>
          <Field opened nearMines={2}/>
          <Field opened nearMines={3}/>
          <Field opened nearMines={6}/>
          <Field mined/>
          <Field mined opened/>
          <Field mined opened exploded/>
          <Field flagged/>
          <Field flagged opened/> */}
          <View style={styles.board}>
            <MineField board={this.state.board}></MineField>
          </View>

</View>

    );
  }
};

const styles = StyleSheet.create({
  /* conteiner: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f5fcff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }, */
  conteiner:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems:'center',
    backgroundColor: '#aaa'
  }
});

