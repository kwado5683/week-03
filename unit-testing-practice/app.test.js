import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";
import { describe, test, expect} from "vitest";

//running the tests====================================================

//findMaxValue

describe (
    "findMaxValue", function(){
        test("find the max value", function(){
            expect(findMaxValue([3,7,2,8,5])).toBe(8);
            expect(findMaxValue([])).toBe(null);
            expect(findMaxValue([-10, -5, -1])).toBe(-1);
            expect(findMaxValue("not an array")).toBe(null);
        });
        });
    



//factorial

describe (
    "factorial", function(){
        test("find the factorial", function(){
            expect(factorial(5)).toBe(120);
            expect(factorial(0)).toBe(1);
            expect(factorial(-3)).toBe(null);
            expect(factorial("5")).toBe(null);
        })
    }
)


//areaArraysEqual

describe(
    "areArraysEqual",function(){
        test("what is the areArraysEqual"),function(){
            expect(areArraysEqual([1,2,3],[1,2,3])).toBe(true);
            expect(areArraysEqual([1,2,3,],[3,2,1])).toBe(false);
            expect(areArraysEqual([],[])).toBe(true);
            expect(areArraysEqual([1,2], [1,2,3])).toBe(false)
        }
    }
)


//toTitleCase

describe(
    "toTitleCase",function(){
        test("to title case"),function(){
            expect(toTitleCase("hello world")).toBe("Hello World");
            expect(toTitleCase("JAVASCRIPT IS FUN")).toBe("Javascript Is Fun");
            expect(toTitleCase("123 testing titles")).toBe("123 Testing Titles");
            expect(toTitleCase(12345)).toBe("")
        }
    }
)