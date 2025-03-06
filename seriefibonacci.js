// Função para calcular a sequência Fibonacci
function calcularFibonacci(quantidade) {
    // Verifica se a quantidade é maior que 0
    if (quantidade <= 0) {
        console.log("Por favor, insira um número maior que 0.");
        return;
    }

    let fib = [0, 1]; // Os dois primeiros elementos da série Fibonacci

    // Gera os próximos elementos da sequência
    for (let i = 2; i < quantidade; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    // Exibe a sequência no console
    console.log("Série Fibonacci: " + fib.slice(0, quantidade).join(", "));
}

// Exemplo de uso: chamando a função com a quantidade de elementos desejada
let quantidade = 10; // Pode mudar esse valor para testar outros casos
calcularFibonacci(quantidade);
