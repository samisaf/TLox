import Lox from './Lox.ts';

switch (Deno.args.length){
    case 0:
        Lox.runPrompt();
        break;
    case 1:
        Lox.runFile(Deno.args[0]);
        break;
    default:
        console.log("Usage: tlox [script]");
        Deno.exit(64)
}

