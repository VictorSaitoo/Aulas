package com.mycompany.atividade01;

public class Primos {

    public void fatoresPrimos(int n) {
        for (int i = 2; i <= n; i++) {
            while (n % i == 0) {
                System.out.print(i + " ");
                n = n / i;
            }
        }
    }
}
