import { readLines } from "https://deno.land/std/io/mod.ts";

export default class Lox{
    static async runPrompt(){
        while (true){
            const line = await readLines(Deno.stdin).next();
            console.log(line);
            if (line.value === "") break;
            // run(line);
        }
    
    }

    static async runFile(filename: string){
        const text = await Deno.readTextFile(filename);
        console.log(text);
    }
    
}