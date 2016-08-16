package br.com;

import java.io.Serializable;

public class Usuario implements Serializable {
  private static final long serialVersionUID = 7371518231621030644L;
  private String nome;
  private String cpf;
  private String email;
  private String perfil;

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getPerfil() {
    return perfil;
  }

  public void setPerfil(String perfil) {
    this.perfil = perfil;
  }
}