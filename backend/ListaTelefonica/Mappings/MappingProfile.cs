using AutoMapper;
using ListaTelefonica.Models;
using ListaTelefonica.Models.DTOs;

namespace ListaTelefonica.Mappings
/// <summary>
/// Perfil de mapeamento AutoMapper
/// Responsabilidade: Converter Entities em DTOs e vice-versa
/// Benefício: Evita expor a estrutura interna das entidades e facilita manutenção
/// </summary>
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Mapeamento de Contato para ContatoDto
            CreateMap<Contato, ContatoDTO>().ReverseMap();

            // Mapeamento de CriarContatoDto para Contato
            CreateMap<CriarContatoDTO, Contato>();

            // Mapeamento de AtualizarContatoDto para Contato
            CreateMap<AtualizarContatoDTO, Contato>();
        }
    }
}
