let input = prompt("What would you like to do");
const todos = ["Collect Momos", "Clean the Lunchbox"];
while (input != "quit" && input != "q") {
    if (input === "list") {
        console.log("***********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********");
    } else if (input === "new") {
        const newTodo = prompt("OK, New text??");
        todos.push();
        console.log(`${newTodo} added to the list !!`);
    } else if (input === "delete") {
        const index = parseInt(prompt("OK, Enter an index to delete"));
        if (Number.isNan(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, Deleted ${deleted[0]}`);
        } else {
            console.log("Unknown Index");
        }
    }
    input = prompt("what would you like to do");
}
console.log("OK Quick the App !!!");
