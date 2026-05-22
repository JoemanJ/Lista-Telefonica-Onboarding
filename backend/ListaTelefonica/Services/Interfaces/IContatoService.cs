using ListaTelefonica.Models.DTOs;

namespace ListaTelefonica.Services.Interfaces
{
    /// <summary>
    /// Interface que define o contrato para operações de negócio de Contatos
    /// Princípio: Interface Segregation - interfaces específicas ao invés de genéricas
    /// </summary>
    public interface IContatoService
    {
        Task<IEnumerable<ContatoDTO>> ObterTodosAsync();
        Task<ContatoDTO?> ObterPorIdAsync(int id);
        Task<ContatoDTO> CriarAsync(CriarContatoDTO criarContatoDto);
        Task<ContatoDTO?> AtualizarAsync(int id, AtualizarContatoDTO atualizarContatoDto);
        Task<bool> DeletarAsync(int id);
    }
}
