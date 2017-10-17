'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { 
    Container,
    Content, 
    Form, 
    Item,
    Input,
    Label,
    Button,
    Card,
    CardItem,
    Body,
    Toast
} from 'native-base';

import {  
    TYPO,
    COLOR
} from 'react-native-material-design';

class trapezoidAreaView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sideA: '' ,
            sideB: '',
            sideC: '',
            a: '' ,
            b: '',
            c: '',
            showResult: false
        };
    }

    calculate() {
        var sideA = this.state.sideA;
        var sideB = this.state.sideB;
        var sideC = this.state.sideC;
        if (this.isNumeric(sideA) && this.isNumeric(sideB)) {
            if(!this.state.showResult) {
                this.setState({
                    showResult:true,
                    a: sideA,
                    b: sideB,
                    c: sideC
                })                      
            } else {
                this.setState({a: sideA, b: sideB, c: sideC});
            }
        } else {
            Toast.show({
              text: 'Formato de número incorrecto',
              position: 'bottom',
              buttonText: 'Ok'
            });
            this.setState({sideA: '', sideB: '', sideC: ''});
        }
        
    }

    isNumeric(value) {
        var regex = /^[+-]?\d+(\.\d+)?$/;
        return regex.test(value);
    }

    roundNumber(value) {
        return Number(Math.round(value+'e2')+'e-2');
    }

    getResultView() {
        if (!this.state.showResult) {
            return null;
        }
        return (
            <Card height={300} alignItems='center'>
                <CardItem>
                    <View alignItems='center'>
                        <Text style={TYPO.paperFontHeadline}>h x (a + b / 2)</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.c)} x ({this.roundNumber(this.state.a)} + {this.roundNumber(this.state.b)} / 2)</Text>
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.c)} x ({this.roundNumber(parseFloat(this.state.a) + parseFloat(this.state.b))}  / 2)</Text>         
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.c)} x {this.roundNumber((parseFloat(this.state.a) + parseFloat(this.state.b))/2)}</Text>     
                        <Text style={TYPO.paperFontHeadline}>{this.roundNumber(this.state.c * ((parseFloat(this.state.a) + parseFloat(this.state.b))/2))}</Text>     
                    </View>
                </CardItem>
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Base menor</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideA}
                                onChangeText={(sideA) => this.setState({sideA})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Base mayor</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideB}
                                onChangeText={(sideB) => this.setState({sideB})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Altura</Label>
                                <Input keyboardType='numeric'
                                value={this.state.sideC}
                                onChangeText={(sideC) => this.setState({sideC})}/>
                            </Item>
                            <Button 
                            onPress={() => this.calculate()}
                            block rounded 
                            style={{backgroundColor:'#41ADE7',marginTop: 30, marginBottom: 50}}>
                                <Text style={{color:'#FFFFFF'}}>Calcular</Text>
                            </Button>
                        </Form>
                        {this.getResultView()}
                    </Content>
                </Container>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#FFFFFF',
  },
});

module.exports = trapezoidAreaView;