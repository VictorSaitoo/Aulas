package com.mycompany.atividade01;

public class teste {

    public static void main(String[] args) {
        Primos primos = new Primos();
        int n = 1617;
        System.out.println("Os fatores primos de " + n + " são:");
        primos.fatoresPrimos(n);
    }
}
