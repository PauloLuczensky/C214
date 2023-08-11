package filme;

public class Filme {

    //Definindo os atributos
    public String titulo;
    public int ano;
    public String genero;
    public int duracao;
    private boolean assistido;
    public double avaliacao;
    //Definindo o construtor
    public Filme(String titulo, int ano, String genero, int duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
    }

    public void detalhes(){
        System.out.println("O filme chama-se " + this.titulo + ", foi feito em " + this.ano +
                ". Eh do genero " + this.genero + " e dura " + this.duracao + " min");
    }

    public void setAssistido(boolean assistido){
        this.assistido = assistido;
    }

    public boolean getAssistido(){
        return assistido;
    }

    public void setAvaliacao(double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public double getAvaliacao(){
        return avaliacao;
    }

}
