






/*
Sinais:

    Sinais matemáticos:
        +   Somar (em números ele soma seus valores (1 + 2 == 3), em strings ele concatena ("Enten" + "deu?" == "Entendeu?"), se tiver um número e uma string ele concatena ( 1 + "° teste" == "1° teste") se tiver dois números e uma string primeiro soma e depois concatena (1 + 1 + "° teste" == "2° teste"), se a string estiver no meio só irá concatenar (1 + "teste" + 2 == "1teste2") qualquer operação que estiver depois de uma string será concatenada ("teste" + 1 + 2 + 3 + 4 + 5 == "teste12345"))
        -   Subtrair
        *   Multiplicar 
        /   Dividir
        %   Restante da divisão (divide um número por outro, quando começar a calcular e tiver que usar vírgula ele para a operação e retorna o valor do restante)
        **  Exponencial (elevado)

        Exemplos:
            5 + 2;
            console: 7

            5 - 2;
            console: 3

            5 * 2;
            console: 10

            5 / 2;
            console: 2.5

            5 % 2;
            console: 1

            5 ** 2;
            console: 25
            
            Ao colocar uma varíavel um sinal matemático um sinal de recebimento e um valor, você indica que deseja que a mesma variável receba uma conta com ela envolvida sobre o efeito de um sinal matemático e por um valor, exemplo:
                x += 2; (x = x + 2
                console: 7

                x -= 2; // x = x - 2
                console: 3

                x *= 2; // x = x * 2
                console: 10

                x /= 2; // x = x / 2
                console: 2.5

                x %= 2; // x = x % 2
                console: 1

                x **= 2; // x = x ** 2
                console: 25


    Sinais de comparação:
        =   Recebe lógico
        ==  Igual a lógico
        === Perfeitamente igual
        !=  Diferente lógico
        !== Totalmente diferente
        >   Maior que
        <   Menor que
        >=  Maior ou igual a
        <=  Menor ou igual a
        ?   @@@@@
        
        Exemplos:
            x = 5;
            x;
            console: 5

            x == 5;
            console: true
            x == "5";
            console: true
            x == 2;
            console: false

            x === 5;
            console: true
            x === "5";
            console: false

            x != 5;
            console: false
            x != "5";
            console: false
            x != 2;
            console: true

            x !== 5;
            console: false
            x !== "5";
            console: true

            x > 2;
            console: true

            x < 2;
            console: false

            x >= 2;
            console: true

            x <= 2;
            console: false

            x ? 2
            console: @@@@@

    
    Sinais lógicos:
        &&  "E" lógico (quando apenas uma operação for falsa todo o sistema é considerado falso)
        ||  "Ou" lógico (quando apenas uma operação for verdadeira todo o sistema é considerado verdadeiro)
        !   "Não" lógico

        Exemplos:
            5 == 5 && 2 == 2
            console: true
            5 == 2 && 2 == 2
            console: false
            5 == 5 && 2 == 5
            console: false
            5 == 2 && 2 == 5
            console: false

            5 == 5 || 2 == 2
            console: true
            5 == 2 || 2 == 2
            console: true
            5 == 5 || 2 == 5
            console: true
            5 == 2 || 2 == 5
            console: false
            
*/