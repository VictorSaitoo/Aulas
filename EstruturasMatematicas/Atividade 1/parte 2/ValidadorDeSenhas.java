package com.mycompany.atividade01;

import java.util.Scanner;

public class ValidadorDeSenhas {
    
    // Método para verificar se um número é divisível por 7
    public static boolean isDivisibleBy7(int number) {
        return number % 7 == 0;
    }

    // Método para ajustar a senha para o próximo número divisível por 7
    public static int ajustarSenha(int number) {
        while (!isDivisibleBy7(number)) {
            number++;
        }
        return number;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Conjunto de senhas fornecido
        int[] senhas = {134, 256, 318, 421, 567, 672, 789, 841, 953, 999};
        
        System.out.println("Verificando e ajustando senhas:");
        for (int i = 0; i < senhas.length; i++) {
            int senha = senhas[i];
            System.out.println("Senha " + (i + 1) + ": " + senha);
            
            if (isDivisibleBy7(senha)) {
                System.out.println("A senha é válida.");
            } else {
                int senhaAjustada = ajustarSenha(senha);
                System.out.println("Senha inválida. Próxima senha válida: " + senhaAjustada);
                senhas[i] = senhaAjustada;
            }
            System.out.println();
        }

        System.out.println("Senhas ajustadas (se necessário):");
        for (int senha : senhas) {
            System.out.println(senha);
        }
    }
}
