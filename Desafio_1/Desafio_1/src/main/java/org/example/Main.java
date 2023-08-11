package org.example;
import filme.Filme;

import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean flag = true;
        while(flag){
            System.out.println("Bem vindo ao Rotten Tomatoes!O que você deseja fazer hoje?");
            System.out.println("1-Verificar os filmes no Banco de Dados");
            System.out.println("2-Mostrar este filme como assistido ou não");
            System.out.println("3-Dar uma nota ao filme");
            System.out.println("4-Sair da sua conta Rotten");
            Filme filme1 = new Filme("Missão Impossível Protocolo Fantasma", 2014, "Acao", 140);
            Filme filme2 = new Filme("Como Treinar o Seu Dragao", 2010, "Animacao", 100);
            Filme filme3 = new Filme("O Grande Truque", 2005, "Suspense", 160);
            int opcao = sc.nextInt();
            switch (opcao){
                case 1:
                    filme1.detalhes();
                    filme2.detalhes();
                    filme3.detalhes();
                    break;

                case 2:
                    System.out.println("Se o resultado for true, você assistiu ao filme, se for false você não assistiu.");
                    filme1.setAssistido(true);
                    System.out.println("O status do filme 1 eh: " + filme1.getAssistido());
                    filme2.setAssistido(false);
                    System.out.println("O status do filme 2 eh: " + filme2.getAssistido());
                    filme3.setAssistido(true);
                    System.out.println("O status do filme 3 eh: " + filme3.getAssistido());
                   // System.out.println("Você assistiu ao " + filme1.titulo + "?");
                    break;

                case 3:
                    System.out.println("Dê uma nota ao filme 1 " + filme1.titulo);
                    filme1.setAvaliacao(sc.nextDouble());
                    System.out.println("A nota do filme 1 eh: " + filme1.getAvaliacao());
                    System.out.println("Dê uma nota ao filme 2 " + filme2.titulo);
                    filme2.setAvaliacao(sc.nextDouble());
                    System.out.println("A nota do filme 2 eh: " + filme2.getAvaliacao());
                    System.out.println("Dê uma nota ao filme 3 " + filme3.titulo);
                    filme3.setAvaliacao(sc.nextDouble());
                    System.out.println("A nota do filme 3 eh: " + filme3.getAvaliacao());
                    break;

                case 4:
                    System.out.println("Até mais, cinéfolo! Você saiu do Banco Rotten Tomatoes");
                    flag = false;
            }
        }

    }

}
