package br.com;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import br.com.Usuario;

@ManagedBean
@SessionScoped
public class UsuarioMB implements Serializable {
  private static final long serialVersionUID = 356240640918386194L;

  // Objeto usuário utilizado no formulário.
  private Usuario usuario = new Usuario();
  /* Lista de objetos Usuario para simular o cadastro dos
     usuários. */
  private List<Usuario> usuarios = new ArrayList<Usuario>();

  /**
   * Ação para o botão salvar.
   */
  public void doAdicionarUsuario() {
    System.out.println("Adicionar usuario " + usuario.getNome());
    usuarios.add(usuario);
    usuario = new Usuario();
  }

  public Usuario getUsuario() {
    return usuario;
  }

  public void setUsuario(Usuario usuario) {
    this.usuario = usuario;
  }

  public List<Usuario> getUsuarios() {
    return usuarios;
  }

  public void setUsuarios(List<Usuario> usuarios) {
    this.usuarios = usuarios;
  }
}