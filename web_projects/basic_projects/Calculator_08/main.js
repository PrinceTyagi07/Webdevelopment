function display(content){
    // Function to append content to the input field
    result.value += content;
}

function resetResult(){
    // Function to reset the input field to an empty string
    result.value = "";
}

function exprEval(){
    // Function to evaluate the expression in the input field
    try{
        result.value = eval(result.value);
        // Try to evaluate the expression
    }
    catch{
        result.value = "Invalid Expression";
        // If there is an error, display "Invalid Expression"
    }
}

function removeLast(){
    // Function to remove the last character from the input field
    result.value = result.value.slice(0, -1);
}
