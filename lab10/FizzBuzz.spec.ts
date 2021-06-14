import { beforeEach, expect, it } from '@jest/globals';
import {FizzBuzz} from './FizzBuzz';

describe('Fizz', () => {
    let fizzBuzz: FizzBuzz;

    beforeEach(()=>{
            fizzBuzz = new FizzBuzz();
    });

    it('should return a message Fizz', ()=>{
        let game = fizzBuzz.Check(3);
        // expect(global.console.log).toHaveBeenCalledWith('Fizz');
        expect(game).toBe('Fizz');
    });
    it('should return a message Buzz', ()=>{
        let game = fizzBuzz.Check(5);
        expect(game).toBe('Buzz');
    });
    it('should return a message Fizz Buzz', ()=>{
        let game = fizzBuzz.Check(15);
        expect(game).toBe('Fizz Buzz');
    });
    it('should return a message', ()=>{
        let game = fizzBuzz.Check(7);
        expect(game).toBe('7');
    });
    it('should return a message', ()=>{
        let game = fizzBuzz.Check(11);
        expect(game).toBe('11');
    });
    it('should return a message', ()=>{
        let game = fizzBuzz.Play();
        expect(game[0]).toBe('1');
        expect(game[2]).toBe('Fizz');
        expect(game[4]).toBe('Buzz');
        expect(game[8]).toBe('Fizz');
        expect(game[14]).toBe('Fizz Buzz');
        expect(game[19]).toBe('Buzz');
        expect(game[21]).toBe('22');
    });
   



});