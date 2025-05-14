//test my sum function
//test my multiply function

//we will use tools and code from the vitest package
//to do this we will need to import these tools
import {describe, test, expect} from "vitest";
import {sum,multiply} from "./app";
//the above is called destructuring meaning extracting singular elements from a file or folder

describe(
    "sum test", function(){
        test("adds 1 + 2 and the expected result is 3", function(){
            expect(sum(1,2)).toBe(3);
        });
    });


//testing the multiplu

describe(
    "multiply test", function(){
        test("multiply 2 * 2 and the expected result is 4", function(){
            expect(multiply(2,2)).toBe(4);

        })
    }
)