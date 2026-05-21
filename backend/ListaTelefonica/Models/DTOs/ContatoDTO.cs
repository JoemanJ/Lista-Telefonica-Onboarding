namespace ListaTelefonicaAPI.Models.DTOs
{
    /// <summary>
    /// DTO para criação de um novo Contato (não expõe Id)
    /// </summary>
    public class CriarContatoDTO
    {
        public string Nome { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;

    }

    /// <summary>
    /// DTO para atualização de um Contato
    /// </summary>
    public class AtualizarContatoDTO
    {
        public string Nome { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
    }

    /// <summary>
    /// DTO para resposta ao listar ou obter um Contato (inclui Id)
    /// </summary>
    public class ContatoDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
    }
}
